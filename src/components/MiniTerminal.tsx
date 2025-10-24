import { useEffect, useMemo, useRef, useState } from 'react';
import { Terminal as TerminalIcon, X } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

// A lightweight "termynal-like" mini terminal with type-out output and simple commands
export default function MiniTerminal() {
  const { theme, toggleTheme } = useTheme();
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState<number>(-1);
  const [lines, setLines] = useState<Array<{ text: string; kind: 'system' | 'user' | 'output' }>>([]);
  const [typing, setTyping] = useState(false);
  const pendingQueue = useRef<string[]>([]);
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Auto focus input when opening
  useEffect(() => {
    if (open) {
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [open]);

  // Initial greeting
  useEffect(() => {
    if (lines.length === 0) {
      enqueue([
        'MINI TERMINAL v1.0 - Ready for commands',
        "Type 'help' for available commands",
      ]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Type out queue
  useEffect(() => {
    if (typing) return;
    const next = pendingQueue.current.shift();
    if (!next) return;
    setTyping(true);

    let idx = 0;
    const step = () => {
      idx += 1;
      setLines((prev) => {
        const head = prev.slice(0, -1);
        const last = prev[prev.length - 1];
        if (!last || last.kind !== 'output') {
          return [...prev, { text: next.slice(0, idx), kind: 'output' }];
        }
        return [...head, { ...last, text: next.slice(0, idx) }];
      });
      scrollToBottom();
      if (idx < next.length) {
        setTimeout(step, 12 + Math.random() * 25);
      } else {
        setTyping(false);
      }
    };
    // Prime with empty output line
    setLines((prev) => [...prev, { text: '', kind: 'output' }]);
    setTimeout(step, 20);
  }, [lines, typing]);

  const enqueue = (texts: string | string[]) => {
    const list = Array.isArray(texts) ? texts : [texts];
    pendingQueue.current.push(...list);
    // Trigger effect by touching state
    setLines((prev) => [...prev]);
  };

  const commands = useMemo(() => ({
    help: () => {
      enqueue([
        'Available commands:',
        '  help          - Show this help',
        '  about         - About me',
        '  skills        - My key technologies',
        '  projects      - Featured projects',
        '  contact       - Contact links',
        '  theme         - Toggle theme (dark/light)',
        '  clear         - Clear the terminal',
        '  echo <text>   - Print text',
        '  date          - Show current date/time',
        '  github        - Open my GitHub',
        '  resume        - Open my resume',
      ]);
    },
    about: () => enqueue('I\'m Kirulu Chamika — a full‑stack developer who loves React, TypeScript, Spring Boot and clean UX.'),
    skills: () => enqueue([
      'Frontend: React, TypeScript, Tailwind, Next.js',
      'Backend : Node.js, Express, Spring Boot, REST',
      'DB      : MongoDB, PostgreSQL, MySQL, Redis',
      'Tools   : Git, Docker, Postman, VS Code',
    ]),
    projects: () => enqueue([
      '- Golden Grain Mill (MERN + Spring Boot)',
      '- RideEase (React + Spring Boot)',
      '- CarePro (React + Tailwind)',
      'See more: /projects',
    ]),
    contact: () => enqueue([
      'Email   : kiruluchamika3@gmail.com',
      'LinkedIn: linkedin.com/in/kirulu-hettige-b9337b33b',
      'GitHub  : github.com/kiruluchamika',
    ]),
    theme: () => {
      toggleTheme();
      enqueue(`Theme switched to ${theme === 'dark' ? 'light' : 'dark'}`);
    },
    clear: () => setLines([]),
    echo: (args: string[]) => enqueue(args.join(' ')),
    date: () => enqueue(new Date().toString()),
    github: () => {
      window.open('https://github.com/kiruluchamika', '_blank');
      enqueue('Opening GitHub...');
    },
    resume: () => {
      window.open('/resume.pdf', '_blank');
      enqueue('Opening resume...');
    },
  }), [enqueue, theme, toggleTheme]);

  const handleSubmit = (valueRaw?: string) => {
    const value = (valueRaw ?? input).trim();
    if (!value) return;

    setLines((prev) => [...prev, { text: `$ ${value}`, kind: 'user' }]);
    setHistory((prev) => [value, ...prev]);
    setHistoryIndex(-1);
    setInput('');

    const [cmd, ...args] = value.split(/\s+/);
    const fn = (commands as any)[cmd];
    if (fn) {
      try {
        fn(args);
      } catch (e) {
        enqueue('Error executing command.');
      }
    } else {
      enqueue(`Command not found: ${cmd}. Type 'help'`);
    }
  };

  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleSubmit();
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      const next = history[historyIndex + 1];
      if (next !== undefined) {
        setHistoryIndex(historyIndex + 1);
        setInput(next);
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex <= 0) {
        setHistoryIndex(-1);
        setInput('');
      } else {
        const next = history[historyIndex - 1];
        setHistoryIndex(historyIndex - 1);
        setInput(next ?? '');
      }
    }
  };

  const scrollToBottom = () => {
    scrollRef.current?.scrollTo({ top: 1e9, behavior: 'smooth' });
  };

  return (
    <>
      {/* Toggle FAB */}
      <button
        onClick={() => setOpen((v) => !v)}
        className="fixed left-4 bottom-6 z-50 w-14 h-14 rounded-full border border-cyan-400/60 bg-gray-900/70 dark:bg-gray-900/70 text-cyan-300 backdrop-blur-md shadow-lg flex items-center justify-center hover:scale-105 transition-all animate-breathe"
        aria-label="Toggle mini terminal"
      >
        <TerminalIcon className="w-6 h-6" />
      </button>

      {/* Window */}
      {open && (
        <div className="fixed left-4 bottom-24 z-50 w-[360px] sm:w-[420px] h-[320px] rounded-xl border border-white/15 bg-white/70 dark:bg-slate-900/70 backdrop-blur-xl shadow-2xl flex flex-col overflow-hidden">
          {/* Header */}
          <div className="flex items-center justify-between px-3 py-2 text-sm font-medium bg-gradient-to-b from-white/30 to-white/0 dark:from-white/10 dark:to-transparent">
            <div className="flex items-center gap-2">
              <span className="inline-block w-3 h-3 rounded-full bg-red-400/80" />
              <span className="inline-block w-3 h-3 rounded-full bg-yellow-400/80" />
              <span className="inline-block w-3 h-3 rounded-full bg-green-400/80" />
              <span className="ml-2 text-xs uppercase tracking-wide text-cyan-500">mini-terminal</span>
            </div>
            <button onClick={() => setOpen(false)} className="text-gray-500 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200">
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Output */}
          <div ref={scrollRef} className="flex-1 px-4 py-2 overflow-y-auto text-xs sm:text-sm font-mono text-gray-800 dark:text-gray-100">
            {lines.map((line, i) => (
              <div key={i} className="whitespace-pre-wrap leading-relaxed">
                {line.kind === 'user' ? (
                  <span className="text-emerald-500">{line.text}</span>
                ) : line.kind === 'system' ? (
                  <span className="text-cyan-500">{line.text}</span>
                ) : (
                  <span>{line.text}</span>
                )}
              </div>
            ))}
          </div>

          {/* Input */}
          <div className="border-t border-white/10 bg-white/40 dark:bg-white/5 px-3 py-2 flex items-center gap-2">
            <span className="text-cyan-500 font-mono text-sm">$</span>
            <input
              ref={inputRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={onKeyDown}
              placeholder="Enter command..."
              className="flex-1 bg-transparent outline-none text-gray-900 dark:text-gray-100 placeholder:text-gray-500 dark:placeholder:text-gray-400 font-mono text-sm"
            />
          </div>
        </div>
      )}
    </>
  );
}

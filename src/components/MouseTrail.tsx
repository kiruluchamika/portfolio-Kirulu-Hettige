import { useEffect, useRef } from 'react';

type Particle = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number; // 0..1
  size: number;
  hue: number;
};

export default function MouseTrail({ enabled = true }: { enabled?: boolean }) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const rafRef = useRef<number | null>(null);
  const particlesRef = useRef<Particle[]>([]);
  const pointerRef = useRef<{ x: number; y: number } | null>(null);
  const dprRef = useRef<number>(1);

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext('2d')!;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    dprRef.current = dpr;

    const resize = () => {
      const { innerWidth: w, innerHeight: h } = window;
      canvas.width = Math.floor(w * dpr);
      canvas.height = Math.floor(h * dpr);
      canvas.style.width = w + 'px';
      canvas.style.height = h + 'px';
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    window.addEventListener('resize', resize);

    let lastSpawn = 0;
    const maxParticles = 600;

    const spawn = (x: number, y: number, count = 6) => {
      const arr = particlesRef.current;
      for (let i = 0; i < count; i++) {
        if (arr.length > maxParticles) arr.shift();
        const angle = Math.random() * Math.PI * 2;
        const speed = 1 + Math.random() * 3;
        arr.push({
          x,
          y,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          life: 1,
          size: 2 + Math.random() * 6,
          hue: 200 + Math.random() * 40, // blue/cyan range
        });
      }
    };

    const onMove = (e: PointerEvent | MouseEvent | TouchEvent) => {
      let x = 0,
        y = 0;
      if ('clientX' in e) {
        x = (e as PointerEvent | MouseEvent).clientX;
        y = (e as PointerEvent | MouseEvent).clientY;
      } else if ((e as TouchEvent).touches?.length) {
        const t = (e as TouchEvent).touches[0];
        x = t.clientX;
        y = t.clientY;
      }
      pointerRef.current = { x, y };
      spawn(x, y, 8);
    };

    if (window.PointerEvent) {
      window.addEventListener('pointermove', onMove, { passive: true });
    } else {
      window.addEventListener('mousemove', onMove as any, { passive: true });
      window.addEventListener('touchmove', onMove as any, { passive: true });
    }

    const tick = (t: number) => {
      rafRef.current = requestAnimationFrame(tick);
      if (!enabled) return;
      if (pointerRef.current && t - lastSpawn > 80) {
        const { x, y } = pointerRef.current;
        spawn(x, y, 3);
        lastSpawn = t;
      }

      // Render
      ctx.clearRect(0, 0, canvas.width / dpr, canvas.height / dpr);
      ctx.globalCompositeOperation = 'lighter';

      const arr = particlesRef.current;
      for (let i = arr.length - 1; i >= 0; i--) {
        const p = arr[i];
        // physics
        p.x += p.vx;
        p.y += p.vy;
        p.vx *= 0.98;
        p.vy *= 0.98;
        p.life *= 0.96;
        const alpha = Math.max(p.life, 0);
        const r = p.size * p.life;
        if (alpha < 0.05 || r < 0.3) {
          arr.splice(i, 1);
          continue;
        }
        // draw glow circle
        const grd = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, r);
        grd.addColorStop(0, `hsla(${p.hue}, 100%, 60%, ${alpha})`);
        grd.addColorStop(1, `hsla(${p.hue}, 100%, 50%, 0)`);
        ctx.fillStyle = grd;
        ctx.beginPath();
        ctx.arc(p.x, p.y, r, 0, Math.PI * 2);
        ctx.fill();
      }

      ctx.globalCompositeOperation = 'source-over';
    };

    rafRef.current = requestAnimationFrame(tick);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      window.removeEventListener('resize', resize);
      if (window.PointerEvent) {
        window.removeEventListener('pointermove', onMove as any);
      } else {
        window.removeEventListener('mousemove', onMove as any);
        window.removeEventListener('touchmove', onMove as any);
      }
    };
  }, [enabled]);

  return (
    <canvas ref={canvasRef} className="fixed inset-0 z-[5] pointer-events-none" aria-hidden="true" />
  );
}

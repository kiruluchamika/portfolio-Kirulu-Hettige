import { useEffect, useRef } from 'react';

type ParallaxElement = {
  el: HTMLElement;
  speed: number;
  initialY: number;
};

export default function ParallaxScroll() {
  const elementsRef = useRef<ParallaxElement[]>([]);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    // Gather all elements with data-speed attribute
    const gather = () => {
      const nodes = document.querySelectorAll<HTMLElement>('[data-speed]');
      elementsRef.current = Array.from(nodes).map((el) => {
        const speed = parseFloat(el.getAttribute('data-speed') || '1');
        const rect = el.getBoundingClientRect();
        return {
          el,
          speed,
          initialY: rect.top + window.scrollY,
        };
      });
    };

    gather();

    const onScroll = () => {
      if (rafRef.current) return;
      rafRef.current = requestAnimationFrame(() => {
        const scrollY = window.scrollY;
        const vh = window.innerHeight;

        elementsRef.current.forEach(({ el, speed, initialY }) => {
          const elementTop = initialY - scrollY;
          const inView = elementTop < vh && elementTop + el.offsetHeight > 0;

          if (inView) {
            const offset = scrollY * (1 - speed);
            el.style.transform = `translate3d(0, ${offset}px, 0)`;
          }
        });

        rafRef.current = null;
      });
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', gather);
    onScroll(); // initial paint

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', gather);
    };
  }, []);

  return null; // No UI, just scroll effect
}

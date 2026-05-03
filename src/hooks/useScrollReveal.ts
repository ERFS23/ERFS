import { useEffect } from 'react';

export function useScrollReveal() {
  useEffect(() => {
    // 1. Reveal elements observer
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          // Optional: Unobserve after revealing to save performance if repeat reveal isn't needed
          // revealObserver.unobserve(entry.target);
        } else {
          // If you want them to hide when out of view, keep this.
          // Otherwise remove it for a "once off" reveal.
        }
      });
    }, {
      root: null,
      rootMargin: '0px',
      threshold: 0.15 // 15% visibility triggers the reveal
    });

    const reveals = document.querySelectorAll('.reveal');
    reveals.forEach((el) => revealObserver.observe(el));

    // 2. Progress bar observer
    const stripObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const bar = document.getElementById('progress-bar');
        if (bar && entry.isIntersecting) {
          bar.style.width = '10.3%';
        }
      });
    }, {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    });

    const strip = document.getElementById('urgency-strip');
    if (strip) {
      stripObserver.observe(strip);
    }

    return () => {
      revealObserver.disconnect();
      stripObserver.disconnect();
    };
  }, []);
}


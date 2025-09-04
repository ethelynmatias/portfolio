import { useEffect, useRef, useState } from 'react';

export const useScrollAnimation = (options = {}) => {
  const elementRef = useRef(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: options.threshold || 0.1,
    };

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !isInView) {
        setIsInView(true);
        if (options.once !== false) {
          observer.unobserve(element);
        }
      } else if (!options.once) {
        setIsInView(entry.isIntersecting);
      }
    }, observerOptions);

    observer.observe(element);

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [isInView, options.threshold, options.once]);

  return [elementRef, isInView];
};

export const useStaggeredAnimation = (itemCount, baseDelay = 0.1) => {
  const containerRef = useRef(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isInView) {
          setIsInView(true);
          
          const children = container.children;
          Array.from(children).forEach((child, index) => {
            child.style.setProperty('--stagger-index', index);
            child.style.setProperty('--stagger-delay', `${baseDelay}s`);
            setTimeout(() => {
              child.classList.add('in-view');
            }, index * baseDelay * 1000);
          });
          
          observer.unobserve(container);
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(container);

    return () => {
      if (container) {
        observer.unobserve(container);
      }
    };
  }, [isInView, baseDelay]);

  return [containerRef, isInView];
};
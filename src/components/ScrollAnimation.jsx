import React, { useEffect, useRef, useState } from 'react';

const ScrollAnimation = ({ children, animation = 'fadeUp', delay = 0 }) => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true);
          }, delay);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.disconnect();
      }
    };
  }, [delay]);

  const animationClasses = {
    fadeUp: 'translate-y-10 opacity-0',
    fadeDown: '-translate-y-10 opacity-0',
    fadeLeft: 'translate-x-10 opacity-0',
    fadeRight: '-translate-x-10 opacity-0',
    scale: 'scale-95 opacity-0',
  };

  return (
    <div
      ref={elementRef}
      className={`transition-all duration-700 ease-out ${
        isVisible ? 'translate-y-0 translate-x-0 scale-100 opacity-100' : animationClasses[animation]
      }`}
    >
      {children}
    </div>
  );
};

export default ScrollAnimation;
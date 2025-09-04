import React from 'react';

const AnimatedHeading = () => {
  const text = "Hello, I'm ";
  const name = "Ethelyn";
  
  return (
    <h2 className="text-5xl md:text-6xl font-bold text-white mb-6" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.3)' }}>
      {text.split('').map((letter, index) => (
        <span
          key={index}
          className="inline-block animate-letter-fade"
          style={{
            animationDelay: `${index * 0.05}s`,
          }}
        >
          {letter === ' ' ? '\u00A0' : letter}
        </span>
      ))}
      <span className="inline-block">
        {name.split('').map((letter, index) => (
          <span
            key={index}
            className="inline-block animate-letter-glow text-yellow-400"
            style={{
              animationDelay: `${(text.length + index) * 0.05 + 0.2}s`,
            }}
          >
            {letter}
          </span>
        ))}
      </span>
    </h2>
  );
};

export default AnimatedHeading;
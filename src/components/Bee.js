import React, { useEffect, useState } from 'react';

const Bee = () => {
  const [position, setPosition] = useState({ top: '20%', left: '0%' });
  const [opacity, setOpacity] = useState(0);

  useEffect(() => {
    const moveBee = () => {
      const randomTop = Math.floor(Math.random() * 80); // 0% to 80%
      const randomLeft = Math.floor(Math.random() * 80); // 0% to 80%

      setPosition({
        top: `${randomTop}%`,
        left: `${randomLeft}%`
      });

      setOpacity(1);

      setTimeout(() => {
        setOpacity(0);
      }, 4000);
    };

    moveBee();

    const interval = setInterval(() => {
      moveBee();
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="fixed z-50"
      style={{
        top: position.top,
        left: position.left,
        opacity: opacity,
        transition: 'top 4s ease-in-out, left 4s ease-in-out, opacity 2s ease-in-out',
      }}
    >
      <div className="relative">
        {/* Rocket Trail */}
        <div className="absolute w-3 h-12 bg-yellow-300 blur-lg opacity-50 rotate-45 left-1/2 -translate-x-1/2 top-8 animate-flicker" />
        {/* Bee */}
        <div className="text-4xl">🐝</div>
      </div>
    </div>
  );
};

export default Bee;

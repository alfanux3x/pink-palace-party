import React, { useEffect, useState } from 'react';

interface Heart {
  id: number;
  left: number;
  delay: number;
  size: number;
  emoji: string;
}

const FloatingHearts = () => {
  const [hearts, setHearts] = useState<Heart[]>([]);

  const heartEmojis = ['💕', '💖', '💗', '💓', '💝', '❤️', '💜', '🩷'];

  useEffect(() => {
    const generateHearts = () => {
      const newHearts: Heart[] = [];
      for (let i = 0; i < 15; i++) {
        newHearts.push({
          id: i,
          left: Math.random() * 100,
          delay: Math.random() * 4,
          size: Math.random() * 20 + 20, // 20px to 40px
          emoji: heartEmojis[Math.floor(Math.random() * heartEmojis.length)]
        });
      }
      setHearts(newHearts);
    };

    generateHearts();
    const interval = setInterval(generateHearts, 8000); // Regenerate every 8 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-10">
      {hearts.map((heart) => (
        <div
          key={heart.id}
          className="absolute animate-heart-float"
          style={{
            left: `${heart.left}%`,
            animationDelay: `${heart.delay}s`,
            fontSize: `${heart.size}px`
          }}
        >
          {heart.emoji}
        </div>
      ))}
    </div>
  );
};

export default FloatingHearts;
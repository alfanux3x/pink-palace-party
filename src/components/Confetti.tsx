import React, { useEffect, useState } from 'react';

interface ConfettiPiece {
  id: number;
  left: number;
  delay: number;
  color: string;
  shape: string;
}

const Confetti = () => {
  const [confetti, setConfetti] = useState<ConfettiPiece[]>([]);

  const colors = ['#ff69b4', '#ff1493', '#ff6347', '#ffd700', '#ff4500', '#da70d6'];
  const shapes = ['🎊', '🎉', '✨', '⭐', '🌟', '💫', '🎈'];

  useEffect(() => {
    const generateConfetti = () => {
      const newConfetti: ConfettiPiece[] = [];
      for (let i = 0; i < 30; i++) {
        newConfetti.push({
          id: i,
          left: Math.random() * 100,
          delay: Math.random() * 3,
          color: colors[Math.floor(Math.random() * colors.length)],
          shape: shapes[Math.floor(Math.random() * shapes.length)]
        });
      }
      setConfetti(newConfetti);
    };

    generateConfetti();
    const interval = setInterval(generateConfetti, 4000); // Regenerate every 4 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-20">
      {confetti.map((piece) => (
        <div
          key={piece.id}
          className="absolute animate-confetti text-2xl"
          style={{
            left: `${piece.left}%`,
            animationDelay: `${piece.delay}s`,
            color: piece.color
          }}
        >
          {piece.shape}
        </div>
      ))}
    </div>
  );
};

export default Confetti;
import React from 'react';

const MemoryPhotos = () => {
  // Placeholder memory data - you can customize these
  const memories = [
    {
      id: 1,
      title: "Best Friend Adventures 🌟",
      description: "All our amazing times together!",
      emoji: "🥰"
    },
    {
      id: 2,
      title: "Laughter & Joy 😂",
      description: "You always make me smile!",
      emoji: "😊"
    },
    {
      id: 3,
      title: "Sweet Memories 💕",
      description: "So grateful for our friendship!",
      emoji: "🤗"
    },
    {
      id: 4,
      title: "Future Adventures 🌈",
      description: "Can't wait for more memories!",
      emoji: "✨"
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto animate-fade-slide-up">
      {memories.map((memory, index) => (
        <div
          key={memory.id}
          className="bg-card/80 backdrop-blur-sm rounded-2xl p-6 shadow-soft hover:shadow-love transition-all duration-300 hover:scale-105 animate-bounce-in border border-love-light/30"
          style={{ animationDelay: `${index * 0.2}s` }}
        >
          <div className="text-center space-y-3">
            <div className="text-6xl animate-float" style={{ animationDelay: `${index * 0.5}s` }}>
              {memory.emoji}
            </div>
            <h3 className="text-xl font-bold text-gradient-love font-baloo">
              {memory.title}
            </h3>
            <p className="text-muted-foreground font-comic">
              {memory.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MemoryPhotos;
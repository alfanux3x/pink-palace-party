import React from 'react';
import memory1 from '@/assets/memory1.jpg';
import memory2 from '@/assets/memory2.jpg';
import memory3 from '@/assets/memory3.jpg';
import memory4 from '@/assets/memory4.jpg';

const MemoryPhotos = () => {
  const memories = [
    {
      id: 1,
      image: memory1,
      caption: "Our coffee dates & endless laughs 💕",
      title: "Best Friend Moments"
    },
    {
      id: 2,
      image: memory2,
      caption: "Beach adventures & sunset vibes 🌅",
      title: "Golden Memories"
    },
    {
      id: 3,
      image: memory3,
      caption: "Birthday celebrations & sweet wishes 🎂",
      title: "Special Days"
    },
    {
      id: 4,
      image: memory4,
      caption: "Shopping sprees & fun times 🛍️",
      title: "Weekend Adventures"
    }
  ];

  return (
    <div className="w-full flex justify-center">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto animate-fade-slide-up">
        {memories.map((memory, index) => (
          <div
            key={memory.id}
            className="bg-card/90 backdrop-blur-sm rounded-2xl overflow-hidden shadow-soft hover:shadow-love transition-all duration-300 hover:scale-105 animate-bounce-in border border-love-light/30"
            style={{ animationDelay: `${index * 0.2}s` }}
          >
            <div className="relative">
              <img 
                src={memory.image} 
                alt={memory.title}
                className="w-full h-48 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-love/20 to-transparent" />
            </div>
            <div className="p-4 text-center space-y-2">
              <h3 className="text-lg font-bold text-gradient-love font-baloo">
                {memory.title}
              </h3>
              <p className="text-muted-foreground font-comic text-sm">
                {memory.caption}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MemoryPhotos;
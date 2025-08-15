import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Heart, Sparkles, Gift, Cake, Music, VolumeX } from 'lucide-react';
import giftBoxImage from '@/assets/gift-box.jpg';
import FloatingHearts from './FloatingHearts';
import Confetti from './Confetti';
import MemoryPhotos from './MemoryPhotos';

const BirthdayHero = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [showContent, setShowContent] = useState(false);
  const [musicPlaying, setMusicPlaying] = useState(false);

  const friendName = "Bestie"; // You can customize this
  const yourName = "Your Loving Friend"; // You can customize this

  useEffect(() => {
    // Small delay to show content with animation
    const timer = setTimeout(() => setShowContent(true), 500);
    return () => clearTimeout(timer);
  }, []);

  const handleNextStep = () => {
    setShowContent(false);
    setTimeout(() => {
      setCurrentStep(prev => (prev + 1) % 6); // 6 steps total now
      setShowContent(true);
    }, 300);
  };

  const toggleMusic = () => {
    setMusicPlaying(!musicPlaying);
    // Add actual music functionality here if needed
  };

  const renderStep = () => {
    if (!showContent) return null;

    switch (currentStep) {
      case 0:
        return (
          <div className="w-full flex flex-col items-center justify-center text-center space-y-8">
            <div className="animate-bounce-in">
              <img 
                src={giftBoxImage} 
                alt="Gift Box" 
                className="w-40 h-40 md:w-56 md:h-56 cursor-pointer hover:scale-110 transition-transform duration-300 animate-float mx-auto"
                onClick={handleNextStep}
              />
            </div>
            <p className="text-xl md:text-2xl text-center text-muted-foreground font-comic animate-fade-slide-up">
              🎁 Click the gift to reveal your surprise! 🎁
            </p>
          </div>
        );

      case 1:
        return (
          <div className="w-full flex flex-col items-center justify-center text-center space-y-6 max-w-2xl mx-auto">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gradient-love font-baloo animate-bounce-in">
              Happy 20th Birthday, {friendName}! 🎉
            </h1>
            <div className="space-y-4 text-lg md:text-xl font-comic text-foreground animate-fade-slide-up">
              <p className="flex items-center justify-center gap-2">
                May your day be full of laughter, love, and happiness ❤️
              </p>
              <p className="flex items-center justify-center gap-2">
                Keep shining and being the best version of yourself ✨
              </p>
              <p className="flex items-center justify-center gap-2 text-love font-semibold">
                Love, {yourName} 💕
              </p>
            </div>
            <div className="flex justify-center">
              <Button 
                variant="gift" 
                size="xl" 
                onClick={handleNextStep}
                className="animate-bounce-in"
              >
                <Heart className="mr-2" />
                Continue the Magic
                <Sparkles className="ml-2" />
              </Button>
            </div>
          </div>
        );

      case 2:
        return (
          <div className="w-full flex flex-col items-center justify-center text-center space-y-8">
            <h2 className="text-3xl md:text-5xl font-bold text-gradient-love font-baloo animate-bounce-in">
              Beautiful Memories 📸
            </h2>
            <MemoryPhotos />
            <div className="flex justify-center">
              <Button 
                variant="magical" 
                size="xl" 
                onClick={handleNextStep}
                className="animate-bounce-in"
              >
                <Sparkles className="mr-2" />
                Make a Wish Time!
                <Gift className="ml-2" />
              </Button>
            </div>
          </div>
        );

      case 3:
        return (
          <div className="w-full flex flex-col items-center justify-center text-center space-y-8 max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-primary font-baloo animate-bounce-in">
              Make a Birthday Wish! 🌟
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground font-poppins animate-fade-slide-up">
              Close your eyes, make a wish, and click the button! ✨
            </p>
            <div className="flex justify-center">
              <Button 
                variant="wish" 
                size="xl" 
                onClick={handleNextStep}
                className="animate-bounce-in text-lg px-8 py-4 bg-gradient-love hover:scale-105"
              >
                <Sparkles className="mr-2" />
                🌟 MAKE A WISH 🌟
                <Sparkles className="ml-2" />
              </Button>
            </div>
          </div>
        );

      case 4:
        return (
          <div className="w-full flex flex-col items-center justify-center text-center space-y-8 max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gradient-love font-baloo animate-bounce-in">
              Semoga Panjang Umur! 🎂
            </h2>
            <div className="space-y-4 animate-fade-slide-up">
              <p className="text-xl md:text-2xl text-love font-comic font-bold">
                May you live a long and happy life! 💕
              </p>
              <p className="text-lg md:text-xl text-muted-foreground font-poppins">
                Wishing you health, happiness, and endless joy! 🌈
              </p>
              <p className="text-base md:text-lg text-accent font-comic">
                From me with love ❤️
              </p>
            </div>
            <div className="flex justify-center">
              <Button 
                variant="heart" 
                size="xl" 
                onClick={handleNextStep}
                className="animate-bounce-in"
              >
                <Heart className="mr-2" />
                Final Surprise!
                <Sparkles className="ml-2" />
              </Button>
            </div>
            <Confetti />
            <FloatingHearts />
          </div>
        );

      case 5:
        return (
          <div className="w-full flex flex-col items-center justify-center text-center space-y-8 max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold text-gradient-love font-baloo animate-bounce-in">
              Birthday Magic Activated! ✨
            </h2>
            <div className="space-y-4 animate-fade-slide-up">
              <p className="text-xl md:text-2xl text-love font-comic font-bold">
                🎂 Happy Birthday Beautiful! 🎂
              </p>
              <p className="text-lg md:text-xl text-muted-foreground font-poppins">
                May all your dreams come true this year! 🌈
              </p>
            </div>
            <div className="flex justify-center">
              <Button 
                variant="heart" 
                size="xl" 
                onClick={() => {setCurrentStep(0); setShowContent(false);}}
                className="animate-bounce-in"
              >
                <Heart className="mr-2" />
                Celebrate Again!
                <Cake className="ml-2" />
              </Button>
            </div>
            <Confetti />
            <FloatingHearts />
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-soft relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-10 text-6xl animate-float opacity-20">💕</div>
        <div className="absolute top-20 right-20 text-4xl animate-bounce opacity-30">✨</div>
        <div className="absolute bottom-20 left-20 text-5xl animate-float opacity-25">🎈</div>
        <div className="absolute bottom-10 right-10 text-6xl animate-bounce opacity-20">🎂</div>
        <div className="absolute top-1/2 left-5 text-3xl animate-sparkle opacity-30">⭐</div>
        <div className="absolute top-1/3 right-5 text-4xl animate-sparkle opacity-25">🌟</div>
      </div>

      {/* Music Toggle */}
      <div className="absolute top-4 right-4 z-10">
        <Button
          variant="ghost"
          size="icon"
          onClick={toggleMusic}
          className="text-love hover:text-love-dark"
        >
          {musicPlaying ? <Music className="h-6 w-6" /> : <VolumeX className="h-6 w-6" />}
        </Button>
      </div>

      {/* Main Content - Always centered */}
      <div className="flex items-center justify-center min-h-screen px-4 py-8">
        <div className="w-full max-w-4xl mx-auto flex justify-center">
          <div className="w-full flex justify-center">
            {renderStep()}
          </div>
        </div>
      </div>

      {/* Step Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {[0, 1, 2, 3, 4, 5].map((step) => (
          <div
            key={step}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              currentStep === step 
                ? 'bg-love shadow-glow scale-125' 
                : 'bg-love-light opacity-50'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default BirthdayHero;
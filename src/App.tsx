import React, { useState } from 'react';
import Typewriter from 'typewriter-effect';
import { Gift } from 'lucide-react';
import Balloon from './components/Balloon';
import Cake from './components/Cake';
import Fireworks from './components/Fireworks';
import MusicPlayer from './components/MusicPlayer';
import VideoSurpriseBox from './components/VideoSurpriseBox';

const BALLOON_COLORS = ['#FF69B4', '#87CEEB', '#98FB98', '#DDA0DD', '#F0E68C'];

function App() {
  const [showCard, setShowCard] = useState(false);
  const [showFireworks, setShowFireworks] = useState(false);

  const handleSurpriseClick = () => {
    setShowCard(true);
    setShowFireworks(true);
    setTimeout(() => setShowFireworks(false), 2000);
  };

  return (
    <div 
      className="min-h-screen relative overflow-hidden bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `
          linear-gradient(
            to bottom,
            rgba(255, 192, 203, 0.9),
            rgba(255, 182, 193, 0.85)
          ),
          url('https://images.unsplash.com/photo-1527529482837-4698179dc6ce?auto=format&fit=crop&w=2000&q=80')
        `
      }}
    >
      {/* Floating Balloons */}
      {BALLOON_COLORS.map((color, index) => (
        <Balloon key={index} color={color} delay={index * 0.5} />
      ))}

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8 md:py-12 relative z-10">
        <div className="text-center">
          <h1 className="text-3xl md:text-6xl font-bold text-red mb-6 md:mb-8 drop-shadow-lg">
            Happy Birthday Marium! 🎉
          </h1>

          {/* Typewriter Effect */}
          <div className="text-lg md:text-2xl text-green mb-8 md:mb-12 drop-shadow-md">
            <Typewriter
              options={{
                strings: [
                  'Wishing you a day filled with joy and laughter!',
                  'May all your dreams come true!',
                  'Here\'s to another amazing year! 🎂'
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </div>

          {/* 3D Cake */}
          <div className="mb-8 md:mb-12 scale-75 md:scale-100 transform-gpu">
            <Cake />
          </div>

          {/* Surprise Button */}
          <button
            onClick={handleSurpriseClick}
            className="bg-white/90 text-pink-500 px-6 md:px-8 py-3 md:py-4 rounded-full text-lg md:text-xl font-bold shadow-lg hover:bg-white transform hover:scale-105 transition-all flex items-center gap-2 mx-auto backdrop-blur-sm"
          >
            <Gift size={24} />
            Click here!
          </button>

          {/* Video Surprise Box */}
          <VideoSurpriseBox isOpen={showCard} onClose={() => setShowCard(false)} />
        </div>
      </div>

      {/* Music Player */}
      <MusicPlayer />

      {/* Fireworks */}
      {showFireworks && <Fireworks />}
    </div>
  );
}

export default App
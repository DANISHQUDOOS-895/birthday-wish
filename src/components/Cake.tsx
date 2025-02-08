import React from 'react';

const Cake: React.FC = () => {
  return (
    <div className="relative w-80 h-80 mx-auto perspective-1000">
      <div className="cake-container transform-style-3d rotate-y-15 rotate-x-10">
        {/* Top Tier */}
        <div className="absolute left-1/2 -translate-x-1/2 w-32 h-20">
          <div className="absolute inset-0 bg-pink-400 rounded-lg transform-gpu rotate-x-10 shadow-xl">
            <div className="absolute inset-0 bg-pink-300 opacity-50 rounded-lg" />
            <div className="absolute top-0 left-0 w-full h-4 bg-white/20 rounded-t-lg" />
            <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-pink-500/30 rounded-lg" />
          </div>
          <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-36 h-4 bg-pink-400 rounded-full transform-gpu -rotate-x-45 shadow-md" />
        </div>

        {/* Middle Tier */}
        <div className="absolute left-1/2 -translate-x-1/2 top-16 w-48 h-24">
          <div className="absolute inset-0 bg-pink-300 rounded-lg transform-gpu rotate-x-10 shadow-xl">
            <div className="absolute inset-0 bg-pink-200 opacity-50 rounded-lg" />
            <div className="absolute top-0 left-0 w-full h-4 bg-white/20 rounded-t-lg" />
            <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-pink-400/30 rounded-lg" />
          </div>
          <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-52 h-4 bg-pink-300 rounded-full transform-gpu -rotate-x-45 shadow-md" />
        </div>

        {/* Bottom Tier */}
        <div className="absolute left-1/2 -translate-x-1/2 top-36 w-64 h-28">
          <div className="absolute inset-0 bg-pink-200 rounded-lg transform-gpu rotate-x-10 shadow-xl">
            <div className="absolute inset-0 bg-pink-100 opacity-50 rounded-lg" />
            <div className="absolute top-0 left-0 w-full h-4 bg-white/20 rounded-t-lg" />
            <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-pink-300/30 rounded-lg" />
          </div>
          <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-68 h-4 bg-pink-200 rounded-full transform-gpu -rotate-x-45 shadow-md" />
        </div>

        {/* Candles */}
        {[...Array(7)].map((_, i) => (
          <div 
            key={i} 
            className="absolute -top-4 animate-flicker"
            style={{ 
              left: `${25 + i * 8}%`,
              animationDelay: `${i * 0.1}s`
            }}
          >
            <div className="w-2 h-12 bg-gradient-to-b from-yellow-100 to-yellow-300 rounded-full transform-gpu -rotate-x-10">
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-yellow-100/50 to-transparent" />
            </div>
            <div className="relative w-4 h-6 -mt-6">
              <div className="absolute inset-0 bg-orange-500 rounded-full blur-sm animate-flame" />
              <div className="absolute inset-0 bg-yellow-300 rounded-full blur-xs animate-flame" style={{ animationDelay: '0.1s' }} />
            </div>
          </div>
        ))}

        {/* Decorations */}
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute w-3 h-3 bg-white rounded-full shadow-lg"
            style={{
              left: `${Math.random() * 80 + 10}%`,
              top: `${Math.random() * 80 + 10}%`,
              transform: `scale(${Math.random() * 0.5 + 0.5})`,
              opacity: Math.random() * 0.5 + 0.5
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default Cake
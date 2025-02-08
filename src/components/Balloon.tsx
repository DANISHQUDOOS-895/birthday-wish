import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

interface BalloonProps {
  color: string;
  delay: number;
}

const Balloon: React.FC<BalloonProps> = ({ color, delay }) => {
  const balloonRef = useRef<HTMLDivElement>(null);
  const stringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!balloonRef.current || !stringRef.current) return;

    // Create a timeline for complex animation
    const tl = gsap.timeline({
      repeat: -1,
      yoyo: true,
      defaults: { ease: "power1.inOut" }
    });

    // Balloon floating animation
    tl.to(balloonRef.current, {
      y: '-=30',
      x: '+=15',
      rotationZ: '+=5',
      duration: 2,
      delay
    })
    .to(balloonRef.current, {
      y: '+=20',
      x: '-=10',
      rotationZ: '-=3',
      duration: 1.5
    })
    .to(balloonRef.current, {
      y: '-=15',
      x: '+=8',
      rotationZ: '+=2',
      duration: 1.8
    });

    // String waving animation
    gsap.to(stringRef.current, {
      rotationZ: '+=3',
      duration: 1.5,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
      transformOrigin: "top"
    });

    return () => {
      tl.kill();
    };
  }, [delay]);

  return (
    <div
      className="absolute"
      style={{
        left: `${Math.random() * 80}%`,
        top: `${Math.random() * 40}%`
      }}
    >
      {/* Balloon */}
      <div
        ref={balloonRef}
        className="relative"
      >
        <div
          className="w-24 h-32 relative transform-gpu"
          style={{ filter: 'drop-shadow(0 4px 6px rgba(0,0,0,0.1))' }}
        >
          {/* Main balloon shape */}
          <div
            className="absolute inset-0 rounded-full"
            style={{ 
              backgroundColor: color,
              clipPath: 'polygon(0% 0%, 100% 0%, 85% 100%, 15% 100%)',
              transform: 'scaleY(1.2)'
            }}
          >
            {/* Shine effect */}
            <div
              className="absolute top-0 left-1/4 w-1/2 h-1/2 bg-white rounded-full opacity-30"
              style={{
                transform: 'rotate(-45deg) translateY(-20%)'
              }}
            />
          </div>
          
          {/* Balloon tie */}
          <div
            className="absolute bottom-0 left-1/2 w-4 h-4 rounded-full"
            style={{
              backgroundColor: color,
              transform: 'translate(-50%, 90%)',
              filter: 'brightness(0.8)'
            }}
          />
        </div>
      </div>

      {/* String */}
      <div
        ref={stringRef}
        className="absolute left-1/2 top-full w-1 h-40 origin-top"
        style={{
          backgroundColor: '#ddd',
          transform: 'translateX(-50%)',
          boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
        }}
      />
    </div>
  );
};

export default Balloon
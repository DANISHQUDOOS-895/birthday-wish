import React, { useCallback } from 'react';
import ReactCanvasConfetti from 'react-canvas-confetti';

const Fireworks: React.FC = () => {
  const getInstance = useCallback((instance: any) => {
    if (instance) {
      instance({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      });
    }
  }, []);

  return (
    <ReactCanvasConfetti
      style={{
        position: 'fixed',
        pointerEvents: 'none',
        width: '100%',
        height: '100%',
        top: 0,
        left: 0
      }}
      refConfetti={getInstance}
    />
  );
};

export default Fireworks
import React, { useState, useEffect } from 'react';
import { Howl } from 'howler';
import { Play, Pause } from 'lucide-react';

const MusicPlayer: React.FC = () => {
  const [playing, setPlaying] = useState(false);
  const [sound, setSound] = useState<Howl | null>(null);

  useEffect(() => {
    const birthdaySong = new Howl({
      src: ['https://assets.mixkit.co/music/preview/mixkit-happy-birthday-tune-537.mp3'],
      loop: true,
    });
    setSound(birthdaySong);

    return () => {
      birthdaySong.unload();
    };
  }, []);

  const togglePlay = () => {
    if (!sound) return;
    
    if (playing) {
      sound.pause();
    } else {
      sound.play();
    }
    setPlaying(!playing);
  };

  return (
    <button
      onClick={togglePlay}
      className="fixed bottom-4 right-4 bg-pink-500 text-white p-3 rounded-full shadow-lg hover:bg-pink-600 transition-colors"
    >
      {playing ? <Pause size={24} /> : <Play size={24} />}
    </button>
  );
};

export default MusicPlayer
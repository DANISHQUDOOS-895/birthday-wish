import React, { useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';

interface VideoSurpriseBoxProps {
  isOpen: boolean;
  onClose: () => void;
}

const VideoSurpriseBox: React.FC<VideoSurpriseBoxProps> = ({ isOpen, onClose }) => {
  const [videoUrl, setVideoUrl] = useState<string | null>(null);

  useEffect(() => {
    const fetchVideo = async () => {
      const { data, error } = await supabase
        .from('birthday_videos')
        .select('video_url')
        .eq('active', true)
        .single();

      if (error) {
        console.error('Error fetching video:', error);
        return;
      }

      if (data) {
        setVideoUrl(data.video_url);
      }
    };

    if (isOpen) {
      fetchVideo();
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-20">
      <div className="bg-white rounded-lg p-4 md:p-6 max-w-sm w-full transform animate-popup relative">
        <button
          onClick={onClose}
          className="absolute -top-10 right-0 text-white hover:text-gray-200 z-30"
        >
          <span className="text-2xl">✕</span>
        </button>
        
        {videoUrl ? (
          <div className="relative w-full pb-[177.77%]">
            <video
              className="absolute inset-0 w-full h-full rounded-lg object-cover"
              src={videoUrl}
              autoPlay
              controls
              playsInline
              loop
            >
              Your browser does not support the video tag.
            </video>
          </div>
        ) : (
          <div className="flex items-center justify-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-pink-500"></div>
          </div>
        )}
      </div>
    </div>
  );
};

export default VideoSurpriseBox
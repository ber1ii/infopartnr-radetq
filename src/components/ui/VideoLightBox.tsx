import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface VideoLightboxProps {
  videoId: string | null;
  onClose: () => void;
}

export const VideoLightbox: React.FC<VideoLightboxProps> = ({ videoId, onClose }) => {
  return (
    <AnimatePresence>
      {videoId && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm"
        >
          {/* Close Area / Esc capability */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 text-white/70 hover:text-white font-display font-medium text-sm uppercase tracking-widest"
          >
            [ Close ESC ]
          </button>

          <motion.div
            initial={{ scale: 0.95, y: 15 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.95, y: 15 }}
            transition={{ type: 'spring', duration: 0.4 }}
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-4xl aspect-video bg-black rounded-lg overflow-hidden border border-white/10 shadow-2xl"
          >
            <iframe
              className="w-full h-full"
              src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

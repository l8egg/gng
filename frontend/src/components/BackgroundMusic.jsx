import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Volume2, VolumeX, Music } from 'lucide-react';
import { Button } from './ui/button';

export const BackgroundMusic = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [showInstructions, setShowInstructions] = useState(true);
  const audioRef = useRef(null);

  useEffect(() => {
    // Initialize audio element
    audioRef.current = new Audio();
    audioRef.current.loop = true;
    audioRef.current.volume = 0.3; // Set to 30% volume for background music
    
    // Music file loaded: "Goodnight and Go" by Imogen Heap
    audioRef.current.src = '/music/background-music.mp3';
    
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  const togglePlay = () => {
    if (!audioRef.current.src) {
      setShowInstructions(true);
      return;
    }

    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch(err => {
        console.error('Error playing audio:', err);
      });
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <>
      {/* Music Control Button */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1 }}
        className="fixed bottom-6 right-6 z-50"
      >
        <Button
          onClick={togglePlay}
          variant="outline"
          size="icon"
          className="w-14 h-14 rounded-full bg-card/90 backdrop-blur-sm border-2 border-primary/30 hover:border-primary hover:bg-primary/20 shadow-glow transition-all"
        >
          {isPlaying ? (
            <Volume2 className="w-6 h-6 text-primary" />
          ) : (
            <VolumeX className="w-6 h-6 text-muted-foreground" />
          )}
        </Button>
      </motion.div>

      {/* Instructions Modal */}
      <AnimatePresence>
        {showInstructions && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-background/80 backdrop-blur-sm"
            onClick={() => setShowInstructions(false)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-card/95 backdrop-blur-sm border-2 border-primary/30 rounded-3xl p-8 max-w-md shadow-glow"
            >
              <div className="flex justify-center mb-4">
                <Music className="w-12 h-12 text-primary" />
              </div>
              
              <h3 className="text-2xl font-display font-bold text-foreground text-center mb-4">
                Background Music
              </h3>
              
              <div className="space-y-3 text-muted-foreground text-sm">
                <p className="text-center">
                  To add "Goodnight and Go" by Imogen Heap:
                </p>
                <ol className="list-decimal list-inside space-y-2 text-left">
                  <li>Legally obtain the song (purchase or download from a licensed service)</li>
                  <li>Place the audio file in <code className="bg-muted/50 px-2 py-1 rounded">/app/frontend/public/music/</code></li>
                  <li>Name it <code className="bg-muted/50 px-2 py-1 rounded">background-music.mp3</code></li>
                  <li>Update the music component to load the file</li>
                </ol>
                <p className="text-center text-xs italic mt-4">
                  For now, the music player is ready but needs your audio file.
                </p>
              </div>

              <Button
                onClick={() => setShowInstructions(false)}
                className="w-full mt-6 bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-white font-display font-semibold rounded-xl"
              >
                Got it! ✨
              </Button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
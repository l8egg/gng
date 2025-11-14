import React from 'react';
import { motion } from 'framer-motion';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Sparkles } from 'lucide-react';

export const Welcome = ({ onStart }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="max-w-2xl mx-auto"
    >
      <Card className="p-8 md:p-12 shadow-glow bg-card/90 backdrop-blur-sm border-2 border-primary/30 rounded-3xl text-center">
        <motion.div
          animate={{ 
            y: [0, -20, 0],
            rotate: [0, 5, -5, 0]
          }}
          transition={{ 
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="text-8xl mb-6"
        >
          😴🐰
        </motion.div>

        <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground mb-3">
          How Much Do You Know?
        </h1>

        <div className="flex items-center justify-center gap-2 mb-8">
          <Sparkles className="w-5 h-5 text-primary" />
          <p className="text-xl md:text-2xl text-muted-foreground font-medium italic">
            a quiz on your Jennifer-literacy
          </p>
          <Sparkles className="w-5 h-5 text-primary" />
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="space-y-6 mb-8"
        >
          <Card className="p-6 bg-muted/50 border border-border/50 rounded-2xl">
            <h3 className="text-lg font-display font-semibold text-foreground mb-3 flex items-center justify-center gap-2">
              <span>🌙</span> The Journey <span>🌙</span>
            </h3>
            <p className="text-base text-muted-foreground leading-relaxed">
              Follow the sleepy bunny through the night, guided by a blue butterfly companion, on a journey to dreamland. Inspired by Dante and Virgil's travels, each level brings you closer to understanding Jennifer.
            </p>
          </Card>

          <Card className="p-6 bg-muted/50 border border-border/50 rounded-2xl">
            <h3 className="text-lg font-display font-semibold text-foreground mb-3 flex items-center justify-center gap-2">
              <span style={{ filter: 'hue-rotate(200deg)' }}>🦋</span> How It Works <span style={{ filter: 'hue-rotate(200deg)' }}>🦋</span>
            </h3>
            <ul className="text-left space-y-2 text-base text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="text-primary font-semibold">•</span>
                <span>Complete 3 dreamy levels</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-secondary font-semibold">•</span>
                <span>Answer questions about Jennifer</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent font-semibold">•</span>
                <span>Unlock special letters with mixtape secrets</span>
              </li>
            </ul>
          </Card>

          <div className="flex items-center justify-center gap-4 text-4xl">
            <motion.span
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              😴
            </motion.span>
            <motion.span
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              style={{ filter: 'hue-rotate(200deg)' }}
            >
              🦋
            </motion.span>
            <motion.span
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            >
              💫
            </motion.span>
            <motion.span
              animate={{ scale: [1, 1.3, 1], opacity: [0.7, 1, 0.7] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              🌙
            </motion.span>
          </div>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Button
            onClick={onStart}
            className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-white font-display font-bold text-xl px-12 py-7 rounded-2xl shadow-glow transition-all"
          >
            Begin Journey ✨
          </Button>
        </motion.div>
      </Card>
    </motion.div>
  );
};
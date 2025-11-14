import React from 'react';
import { motion } from 'framer-motion';

export const AnimatedBackground = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Sleepy traveling bunnies */}
      <motion.div
        className="absolute top-10 left-10 text-6xl opacity-80"
        animate={{
          y: [-20, 20, -20],
          x: [-10, 10, -10],
          rotate: [-5, 5, -5]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        😴🐰
      </motion.div>

      <motion.div
        className="absolute top-40 right-20 text-5xl opacity-70"
        animate={{
          y: [0, -25, 0],
          rotate: [0, 10, 0]
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      >
        🐰💤
      </motion.div>

      <motion.div
        className="absolute bottom-20 left-1/4 text-5xl opacity-75"
        animate={{
          y: [10, -15, 10],
          x: [0, 15, 0]
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
      >
        🐇✨
      </motion.div>

      {/* Blue butterflies - companions */}
      <motion.div
        className="absolute top-1/4 right-1/4 text-4xl"
        animate={{
          y: [-15, 15, -15],
          x: [15, -15, 15],
          rotate: [-10, 10, -10]
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        style={{ filter: 'hue-rotate(200deg)' }}
      >
        🦋
      </motion.div>

      <motion.div
        className="absolute top-1/2 left-1/3 text-3xl"
        animate={{
          y: [20, -20, 20],
          x: [-10, 10, -10],
          rotate: [10, -10, 10]
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1.5
        }}
        style={{ filter: 'hue-rotate(200deg)' }}
      >
        🦋
      </motion.div>

      <motion.div
        className="absolute bottom-1/3 right-1/3 text-4xl"
        animate={{
          y: [-10, 10, -10],
          x: [10, -10, 10],
          rotate: [-15, 15, -15]
        }}
        transition={{
          duration: 5.5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.5
        }}
        style={{ filter: 'hue-rotate(200deg)' }}
      >
        🦋
      </motion.div>

      {/* Night sky elements */}
      <motion.div
        className="absolute top-3/4 left-10 text-3xl"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.5, 1, 0.5]
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        ⭐
      </motion.div>

      <motion.div
        className="absolute top-1/3 right-10 text-3xl"
        animate={{
          scale: [1, 1.4, 1],
          opacity: [0.4, 1, 0.4]
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      >
        ✨
      </motion.div>

      <motion.div
        className="absolute bottom-10 right-1/4 text-4xl"
        animate={{
          y: [0, -20, 0],
          scale: [1, 1.2, 1],
          opacity: [0.6, 1, 0.6]
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
      >
        🌙
      </motion.div>

      <motion.div
        className="absolute top-2/3 left-1/2 text-2xl"
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.3, 0.8, 0.3]
        }}
        transition={{
          duration: 3.5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1.5
        }}
      >
        💫
      </motion.div>

      {/* Clouds for dreamy effect */}
      <motion.div
        className="absolute top-20 right-1/3 text-4xl opacity-40"
        animate={{
          x: [0, 50, 0]
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
      >
        ☁️
      </motion.div>

      <motion.div
        className="absolute bottom-1/4 left-1/4 text-3xl opacity-30"
        animate={{
          x: [0, -40, 0]
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear",
          delay: 5
        }}
      >
        ☁️
      </motion.div>
    </div>
  );
};
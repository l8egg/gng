import React from 'react';
import { motion } from 'framer-motion';

export const AnimatedBackground = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Floating bunnies */}
      <motion.div
        className="absolute top-10 left-10 text-6xl"
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
        🐰
      </motion.div>

      <motion.div
        className="absolute top-40 right-20 text-5xl"
        animate={{
          y: [0, -25, 0],
          rotate: [0, 10, 0]
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      >
        🐇
      </motion.div>

      <motion.div
        className="absolute bottom-20 left-1/4 text-5xl"
        animate={{
          y: [10, -15, 10],
          x: [0, 15, 0]
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
      >
        🐰
      </motion.div>

      {/* Fluttering butterflies */}
      <motion.div
        className="absolute top-1/4 right-1/4 text-4xl"
        animate={{
          y: [-15, 15, -15],
          x: [15, -15, 15],
          rotate: [-10, 10, -10]
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
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
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1.5
        }}
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
          duration: 4.5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.5
        }}
      >
        🦋
      </motion.div>

      {/* Additional cute elements */}
      <motion.div
        className="absolute top-3/4 left-10 text-3xl"
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 360]
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "linear"
        }}
      >
        ✨
      </motion.div>

      <motion.div
        className="absolute top-1/3 right-10 text-3xl"
        animate={{
          scale: [1, 1.3, 1],
          rotate: [0, -360]
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "linear",
          delay: 2
        }}
      >
        💫
      </motion.div>

      <motion.div
        className="absolute bottom-10 right-1/4 text-3xl"
        animate={{
          y: [0, -20, 0],
          scale: [1, 1.1, 1]
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      >
        🌸
      </motion.div>

      <motion.div
        className="absolute top-2/3 left-1/2 text-3xl"
        animate={{
          y: [0, -15, 0],
          scale: [1, 1.15, 1]
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 3
        }}
      >
        🌼
      </motion.div>
    </div>
  );
};
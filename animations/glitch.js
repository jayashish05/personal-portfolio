export const glitchVariants = {
  hidden: { opacity: 0, x: 0 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
  glitch: {
    x: [0, -2, 2, -1, 1, 0],
    skew: [0, 5, -5, 2, -2, 0],
    transition: {
      duration: 0.2,
      repeat: Infinity,
      repeatType: "reverse",
      repeatDelay: Math.random() * 3 + 1,
    },
  },
};

export const scanlineVariants = {
  hidden: { scaleY: 0 },
  visible: {
    scaleY: 1,
    transition: {
      duration: 0.2,
      ease: "easeInOut",
    },
  },
};

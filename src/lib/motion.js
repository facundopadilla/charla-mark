// Shared framer-motion variants. Keep transitions calm and editorial —
// one orchestrated reveal per slide beats scattered micro-animations.

export const EASE = [0.22, 1, 0.36, 1]

// Slide-to-slide transition (used by Deck's AnimatePresence)
export const slideVariants = {
  enter: { opacity: 0, y: 28 },
  center: { opacity: 1, y: 0, transition: { duration: 0.5, ease: EASE } },
  exit: { opacity: 0, y: -22, transition: { duration: 0.32, ease: EASE } },
}

// Staggered container for revealing children in sequence
export const stagger = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.09, delayChildren: 0.12 },
  },
}

export const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: EASE } },
}

export const fadeIn = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.6, ease: EASE } },
}

export const scaleIn = {
  hidden: { opacity: 0, scale: 0.92 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: EASE } },
}

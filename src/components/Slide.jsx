import { motion } from 'framer-motion'
import { stagger } from '../lib/motion'

/**
 * Slide — full-viewport canvas for one slide.
 *
 * Props:
 *  - children
 *  - align:   'center' (default) | 'start'  → horizontal content alignment
 *  - justify: 'center' (default) | 'between' | 'start'
 *  - width:   'slide' (default, max 1180px) | 'wide' | 'full'
 *  - pad:     boolean (default true) → standard responsive padding
 *  - className: extra classes on the inner container
 *  - bg:      optional ReactNode rendered behind the content (atmosphere)
 *
 * The inner container is a stagger context, so any child using the
 * `fadeUp` / `fadeIn` variants reveals in sequence on mount.
 */
export default function Slide({
  children,
  align = 'center',
  justify = 'center',
  width = 'slide',
  pad = true,
  className = '',
  bg = null,
}) {
  const widths = {
    slide: 'max-w-slide',
    wide: 'max-w-[1440px]',
    full: 'max-w-none',
  }
  const aligns = {
    center: 'items-center text-center',
    start: 'items-start text-left',
  }
  const justifies = {
    center: 'justify-center',
    between: 'justify-between',
    start: 'justify-start',
  }

  return (
    <div className="relative flex h-full w-full items-center justify-center overflow-hidden">
      {bg}
      <motion.div
        variants={stagger}
        initial="hidden"
        animate="show"
        className={[
          'relative z-10 flex h-full w-full flex-col',
          justifies[justify],
          aligns[align],
          widths[width],
          pad ? 'px-10 py-16 sm:px-16 lg:px-20 lg:py-20' : '',
          'no-scrollbar overflow-y-auto',
          className,
        ].join(' ')}
      >
        {children}
      </motion.div>
    </div>
  )
}

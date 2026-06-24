import { useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { X } from 'lucide-react'

/**
 * VideoModal — fullscreen YouTube overlay.
 * While open it renders [data-modal="open"], which the Deck checks to pause
 * keyboard navigation so arrows/space don't move slides behind the modal.
 */
export default function VideoModal({ open, onClose, videoId, title }) {
  useEffect(() => {
    if (!open) return
    const onKey = (e) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open, onClose])

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          data-modal="open"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onClick={onClose}
          className="fixed inset-0 z-[60] flex items-center justify-center bg-base/90 p-6 backdrop-blur-sm"
        >
          <motion.div
            initial={{ scale: 0.96, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.96, opacity: 0 }}
            transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-4xl"
          >
            <div className="mb-3 flex items-center justify-between">
              <span className="font-display text-lg font-semibold text-ink">{title}</span>
              <button
                type="button"
                onClick={onClose}
                aria-label="Cerrar"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-line bg-surface text-ink-dim transition-colors hover:text-ink"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
            <div className="aspect-video w-full overflow-hidden rounded-xl border border-line bg-black">
              <iframe
                className="h-full w-full"
                src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
                title={title || 'Video'}
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; fullscreen"
                allowFullScreen
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

import { useCallback, useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import {
  ChevronLeft,
  ChevronRight,
  LayoutGrid,
  Maximize2,
  Minimize2,
  Timer,
  X,
  Keyboard,
} from 'lucide-react'
import { slideVariants } from '../lib/motion'

const TALK_BUDGET_SECONDS = 3 * 60 * 60 // 9:00–12:00

function fmt(total) {
  const s = Math.max(0, Math.floor(total))
  const h = Math.floor(s / 3600)
  const m = Math.floor((s % 3600) / 60)
  const sec = s % 60
  const pad = (n) => String(n).padStart(2, '0')
  return h > 0 ? `${h}:${pad(m)}:${pad(sec)}` : `${pad(m)}:${pad(sec)}`
}

export default function Deck({ slides }) {
  const count = slides.length
  const [index, setIndex] = useState(() => {
    const h = parseInt(window.location.hash.replace('#', ''), 10)
    return Number.isFinite(h) && h >= 1 && h <= count ? h - 1 : 0
  })
  const [overview, setOverview] = useState(false)
  const [help, setHelp] = useState(false)
  const [isFs, setIsFs] = useState(false)

  // Presenter timer
  const [timerOn, setTimerOn] = useState(false)
  const [elapsed, setElapsed] = useState(0)

  const go = useCallback(
    (n) => setIndex((i) => Math.max(0, Math.min(count - 1, typeof n === 'function' ? n(i) : n))),
    [count]
  )
  const next = useCallback(() => go((i) => i + 1), [go])
  const prev = useCallback(() => go((i) => i - 1), [go])

  // Sync slide index to URL hash (resume on refresh, shareable)
  useEffect(() => {
    window.history.replaceState(null, '', `#${index + 1}`)
  }, [index])

  // Presenter timer tick
  useEffect(() => {
    if (!timerOn) return
    const id = setInterval(() => setElapsed((e) => e + 1), 1000)
    return () => clearInterval(id)
  }, [timerOn])

  // Fullscreen state listener
  useEffect(() => {
    const onFs = () => setIsFs(Boolean(document.fullscreenElement))
    document.addEventListener('fullscreenchange', onFs)
    return () => document.removeEventListener('fullscreenchange', onFs)
  }, [])

  const toggleFs = useCallback(() => {
    if (document.fullscreenElement) document.exitFullscreen?.()
    else document.documentElement.requestFullscreen?.()
  }, [])

  // Keyboard navigation
  useEffect(() => {
    const onKey = (e) => {
      if (e.metaKey || e.ctrlKey || e.altKey) return
      // A video/dialog is open — let it own the keyboard (don't navigate behind it)
      if (document.querySelector('[data-modal="open"]')) return
      // A focused inline video/iframe owns space + arrows (play/pause, seek)
      const tag = e.target && e.target.tagName
      if (tag === 'VIDEO' || tag === 'IFRAME') return
      switch (e.key) {
        case 'ArrowRight':
        case 'PageDown':
        case ' ':
        case 'l':
          e.preventDefault()
          next()
          break
        case 'ArrowLeft':
        case 'PageUp':
        case 'h':
          e.preventDefault()
          prev()
          break
        case 'Home':
          go(0)
          break
        case 'End':
          go(count - 1)
          break
        case 'o':
        case 'g':
          setOverview((v) => !v)
          break
        case 'f':
          toggleFs()
          break
        case 't':
          setTimerOn((v) => !v)
          break
        case 'r':
          if (timerOn || elapsed) setElapsed(0)
          break
        case '?':
          setHelp((v) => !v)
          break
        case 'Escape':
          setOverview(false)
          setHelp(false)
          break
        default:
          break
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [next, prev, go, count, toggleFs, timerOn, elapsed])

  // Touch swipe (tablet / phone presenting)
  const touch = useRef(null)
  const onTouchStart = (e) => (touch.current = e.changedTouches[0].clientX)
  const onTouchEnd = (e) => {
    if (touch.current == null) return
    const dx = e.changedTouches[0].clientX - touch.current
    if (Math.abs(dx) > 60) (dx < 0 ? next : prev)()
    touch.current = null
  }

  const current = slides[index]
  const Current = current.Component
  const overBudget = elapsed > TALK_BUDGET_SECONDS

  return (
    <div className="grain relative h-full w-full overflow-hidden bg-base text-ink">
      {/* Atmosphere: single, subtle, static — depth without glow soup */}
      <div
        className="pointer-events-none fixed inset-0 z-0"
        style={{
          background:
            'radial-gradient(1100px 700px at 78% -8%, rgba(62,207,142,0.06), transparent 60%), radial-gradient(900px 600px at 0% 110%, rgba(246,183,69,0.045), transparent 60%)',
        }}
      />

      {/* Slides */}
      <div className="absolute inset-0 z-10" onTouchStart={onTouchStart} onTouchEnd={onTouchEnd}>
        <AnimatePresence mode="wait">
          <motion.div
            key={current.id}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            className="h-full w-full"
          >
            <Current />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Top progress bar */}
      <div className="pointer-events-none fixed inset-x-0 top-0 z-30 h-1 bg-surface-2/60">
        <motion.div
          className="h-full bg-accent"
          animate={{ width: `${((index + 1) / count) * 100}%` }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        />
      </div>

      {/* SaltaDev brand mark — visible on every slide (top-left corner) */}
      <div className="pointer-events-none fixed left-5 top-4 z-30 flex items-center gap-2 select-none">
        <img src="/brand/saltadev-logo.webp" alt="SaltaDev" className="h-8 w-auto" />
        <span className="font-display text-sm font-semibold tracking-tight text-ink/90">SaltaDev</span>
      </div>

      {/* Presenter timer */}
      <AnimatePresence>
        {timerOn && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            className="fixed right-5 top-5 z-30 flex items-center gap-3 rounded-lg border border-line bg-surface/80 px-3.5 py-2 backdrop-blur"
          >
            <Timer className={overBudget ? 'h-4 w-4 text-clay' : 'h-4 w-4 text-accent'} strokeWidth={1.8} />
            <span className={['stat-figure text-lg', overBudget ? 'text-clay' : 'text-ink'].join(' ')}>
              {fmt(elapsed)}
            </span>
            <span className="font-mono text-xs text-ink-mute">/ {fmt(TALK_BUDGET_SECONDS)}</span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Bottom control bar */}
      <div className="fixed inset-x-0 bottom-0 z-30 flex items-center justify-between px-6 py-4">
        <div className="flex items-center gap-2 text-sm text-ink-mute">
          <span className="hidden font-medium text-ink-dim sm:inline">{current.section}</span>
        </div>

        <div className="flex items-center gap-1.5">
          <CtrlBtn onClick={() => setTimerOn((v) => !v)} active={timerOn} title="Timer (t)">
            <Timer className="h-4 w-4" strokeWidth={1.8} />
          </CtrlBtn>
          <CtrlBtn onClick={() => setOverview(true)} title="Vista general (o)">
            <LayoutGrid className="h-4 w-4" strokeWidth={1.8} />
          </CtrlBtn>
          <CtrlBtn onClick={() => setHelp(true)} title="Atajos (?)">
            <Keyboard className="h-4 w-4" strokeWidth={1.8} />
          </CtrlBtn>
          <CtrlBtn onClick={toggleFs} title="Pantalla completa (f)">
            {isFs ? <Minimize2 className="h-4 w-4" strokeWidth={1.8} /> : <Maximize2 className="h-4 w-4" strokeWidth={1.8} />}
          </CtrlBtn>

          <div className="mx-1 h-5 w-px bg-line" />

          <CtrlBtn onClick={prev} disabled={index === 0} title="Anterior">
            <ChevronLeft className="h-4 w-4" strokeWidth={2} />
          </CtrlBtn>
          <span className="min-w-[64px] text-center font-mono text-sm text-ink-dim">
            {String(index + 1).padStart(2, '0')} / {String(count).padStart(2, '0')}
          </span>
          <CtrlBtn onClick={next} disabled={index === count - 1} title="Siguiente">
            <ChevronRight className="h-4 w-4" strokeWidth={2} />
          </CtrlBtn>
        </div>
      </div>

      {/* Overview grid */}
      <AnimatePresence>
        {overview && (
          <Overview
            slides={slides}
            index={index}
            onPick={(i) => {
              go(i)
              setOverview(false)
            }}
            onClose={() => setOverview(false)}
          />
        )}
      </AnimatePresence>

      {/* Help / shortcuts */}
      <AnimatePresence>{help && <Help onClose={() => setHelp(false)} />}</AnimatePresence>
    </div>
  )
}

function CtrlBtn({ children, onClick, disabled, active, title }) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      title={title}
      aria-label={title}
      className={[
        'flex h-9 w-9 items-center justify-center rounded-lg border transition-colors duration-150',
        active
          ? 'border-accent/40 bg-accent/10 text-accent'
          : 'border-line bg-surface/60 text-ink-dim hover:border-line hover:bg-surface hover:text-ink',
        disabled ? 'cursor-not-allowed opacity-30 hover:bg-surface/60 hover:text-ink-dim' : '',
      ].join(' ')}
    >
      {children}
    </button>
  )
}

function Overview({ slides, index, onPick, onClose }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="fixed inset-0 z-40 bg-base/95 backdrop-blur-sm"
    >
      <div className="flex items-center justify-between border-b border-line px-6 py-4">
        <h3 className="font-display text-lg font-semibold text-ink">Vista general · {slides.length} diapositivas</h3>
        <button
          onClick={onClose}
          className="flex h-9 w-9 items-center justify-center rounded-lg border border-line bg-surface text-ink-dim hover:text-ink"
        >
          <X className="h-4 w-4" />
        </button>
      </div>
      <div className="no-scrollbar h-[calc(100%-64px)] overflow-y-auto p-6">
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {slides.map((s, i) => (
            <button
              key={s.id}
              onClick={() => onPick(i)}
              className={[
                'group flex aspect-video flex-col justify-between rounded-lg border p-3 text-left transition-colors',
                i === index ? 'border-accent bg-accent/10' : 'border-line bg-surface/50 hover:border-ink-mute hover:bg-surface',
              ].join(' ')}
            >
              <span className="font-mono text-xs text-ink-mute">{String(i + 1).padStart(2, '0')}</span>
              <span className="line-clamp-3 text-sm font-medium text-ink-dim group-hover:text-ink">{s.title}</span>
              <span className="truncate text-[11px] text-ink-mute">{s.section}</span>
            </button>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

function Help({ onClose }) {
  const rows = [
    ['→ · Espacio · L', 'Siguiente'],
    ['← · H', 'Anterior'],
    ['Inicio / Fin', 'Primera / última'],
    ['O · G', 'Vista general'],
    ['T', 'Timer (iniciar/pausar)'],
    ['R', 'Reiniciar timer'],
    ['F', 'Pantalla completa'],
    ['?', 'Esta ayuda'],
  ]
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.15 }}
      className="fixed inset-0 z-40 flex items-center justify-center bg-base/80 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.96, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.96, opacity: 0 }}
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-md rounded-xl border border-line bg-surface p-6"
      >
        <h3 className="mb-5 font-display text-xl font-semibold text-ink">Atajos de teclado</h3>
        <dl className="flex flex-col gap-3">
          {rows.map(([k, v]) => (
            <div key={k} className="flex items-center justify-between gap-4">
              <dt className="font-mono text-sm text-ink">{k}</dt>
              <dd className="text-sm text-ink-dim">{v}</dd>
            </div>
          ))}
        </dl>
      </motion.div>
    </motion.div>
  )
}

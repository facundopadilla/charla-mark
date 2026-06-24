import { motion } from 'framer-motion'
import { fadeUp, fadeIn } from '../lib/motion'

/* ------------------------------------------------------------------ *
 * Design-system primitives for the deck.
 * All reveal-based components rely on the stagger context that <Slide>
 * provides, so they animate in sequence on mount automatically.
 * Tone tokens: 'accent' (emerald) | 'gold' | 'clay' | 'mauve' | 'mint' | 'ink'
 * ------------------------------------------------------------------ */

export const toneText = {
  accent: 'text-accent',
  gold: 'text-gold',
  clay: 'text-clay',
  mauve: 'text-mauve',
  mint: 'text-mint',
  ink: 'text-ink',
}
export const toneBg = {
  accent: 'bg-accent',
  gold: 'bg-gold',
  clay: 'bg-clay',
  mauve: 'bg-mauve',
  mint: 'bg-mint',
  ink: 'bg-ink',
}
export const toneRing = {
  accent: 'ring-accent/30',
  gold: 'ring-gold/30',
  clay: 'ring-clay/30',
  mauve: 'ring-mauve/30',
  mint: 'ring-mint/30',
  ink: 'ring-ink/20',
}

/** Reveal — staggered fade-up wrapper. Place inside <Slide>. */
export function Reveal({ children, className = '', as = 'div' }) {
  const M = motion[as] || motion.div
  return (
    <M variants={fadeUp} className={className}>
      {children}
    </M>
  )
}

export function FadeIn({ children, className = '' }) {
  return (
    <motion.div variants={fadeIn} className={className}>
      {children}
    </motion.div>
  )
}

/** Kicker — small section/topic label. Used restrained, one per slide. */
export function Kicker({ children, tone = 'accent', className = '' }) {
  return (
    <Reveal
      className={[
        'mb-5 inline-flex items-center gap-2 text-sm font-medium tracking-wide',
        toneText[tone],
        className,
      ].join(' ')}
    >
      <span className={['h-1.5 w-1.5 rounded-full', toneBg[tone]].join(' ')} />
      {children}
    </Reveal>
  )
}

/** Slide title + optional lead paragraph. */
export function Title({ children, className = '' }) {
  return (
    <Reveal
      className={[
        'font-display text-4xl font-bold text-ink sm:text-5xl lg:text-6xl text-balance',
        className,
      ].join(' ')}
      as="h2"
    >
      {children}
    </Reveal>
  )
}

export function Lead({ children, className = '' }) {
  return (
    <Reveal
      className={[
        'mt-5 max-w-3xl text-lg text-ink-dim sm:text-xl text-pretty leading-relaxed',
        className,
      ].join(' ')}
    >
      {children}
    </Reveal>
  )
}

/** SourceTag — citation, builds credibility (EEAT). Kept quiet. */
export function SourceTag({ children, className = '' }) {
  return (
    <span
      className={[
        'mt-3 block font-mono text-[11px] uppercase tracking-wide text-ink-mute',
        className,
      ].join(' ')}
    >
      {children}
    </span>
  )
}

/** Pill / tag — small label. Use sparingly. */
export function Pill({ children, tone = 'ink', className = '' }) {
  return (
    <span
      className={[
        'inline-flex items-center gap-1.5 rounded-md border border-line bg-surface/60 px-2.5 py-1 text-xs font-medium',
        toneText[tone],
        className,
      ].join(' ')}
    >
      {children}
    </span>
  )
}

/**
 * Stat — big editorial number with label + optional source.
 * size: 'md' | 'lg' | 'xl'
 */
export function Stat({ value, label, source, tone = 'accent', size = 'lg', sub, className = '' }) {
  const sizes = {
    md: 'text-4xl sm:text-5xl',
    lg: 'text-5xl sm:text-6xl',
    xl: 'text-6xl sm:text-7xl lg:text-8xl',
  }
  return (
    <Reveal className={['flex flex-col', className].join(' ')}>
      <span className={['stat-figure', sizes[size], toneText[tone]].join(' ')}>{value}</span>
      {sub && <span className="mt-1 text-sm font-medium text-ink-dim">{sub}</span>}
      {label && <span className="mt-3 max-w-xs text-ink-dim leading-snug">{label}</span>}
      {source && <SourceTag>{source}</SourceTag>}
    </Reveal>
  )
}

/** Card — neutral container. Subtle border, modest radius, no floating glow. */
export function Card({ children, className = '', tone, hover = false }) {
  return (
    <div
      className={[
        'rounded-xl border border-line bg-surface/50 p-6',
        tone ? `border-l-2 ${toneBorderLeft[tone]}` : '',
        hover ? 'transition-colors duration-200 hover:border-line/80 hover:bg-surface' : '',
        className,
      ].join(' ')}
    >
      {children}
    </div>
  )
}

const toneBorderLeft = {
  accent: 'border-l-accent',
  gold: 'border-l-gold',
  clay: 'border-l-clay',
  mauve: 'border-l-mauve',
  mint: 'border-l-mint',
  ink: 'border-l-ink',
}

/** StatCard — a Stat inside a Card, for grids. */
export function StatCard({ value, label, source, tone = 'accent', icon: Icon, footer, className = '' }) {
  return (
    <Reveal>
      <div
        className={[
          'flex h-full flex-col rounded-xl border border-line bg-surface/50 p-6 text-left',
          className,
        ].join(' ')}
      >
        {Icon && (
          <Icon className={['mb-4 h-6 w-6', toneText[tone]].join(' ')} strokeWidth={1.6} />
        )}
        <div className={['stat-figure text-4xl sm:text-5xl', toneText[tone]].join(' ')}>{value}</div>
        {label && <div className="mt-3 text-sm text-ink-dim leading-snug">{label}</div>}
        {source && <SourceTag>{source}</SourceTag>}
        {footer && <div className="mt-auto pt-4">{footer}</div>}
      </div>
    </Reveal>
  )
}

/** IconBadge — lucide icon in a tinted square. */
export function IconBadge({ icon: Icon, tone = 'accent', className = '' }) {
  return (
    <div
      className={[
        'flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-line bg-surface',
        className,
      ].join(' ')}
    >
      <Icon className={['h-5 w-5', toneText[tone]].join(' ')} strokeWidth={1.7} />
    </div>
  )
}

/** PointList — animated bullet list. items: string[] | {title, text, icon}[] */
export function PointList({ items, tone = 'accent', className = '' }) {
  return (
    <ul className={['flex flex-col gap-4', className].join(' ')}>
      {items.map((it, i) => {
        const obj = typeof it === 'string' ? { text: it } : it
        const Icon = obj.icon
        return (
          <Reveal as="li" key={i}>
            <div className="flex items-start gap-3">
              {Icon ? (
                <Icon className={['mt-0.5 h-5 w-5 shrink-0', toneText[tone]].join(' ')} strokeWidth={1.7} />
              ) : (
                <span className={['mt-2 h-1.5 w-1.5 shrink-0 rounded-full', toneBg[tone]].join(' ')} />
              )}
              <div>
                {obj.title && <div className="font-semibold text-ink">{obj.title}</div>}
                {obj.text && (
                  <div className={obj.title ? 'mt-0.5 text-ink-dim leading-relaxed' : 'text-ink-dim leading-relaxed'}>
                    {obj.text}
                  </div>
                )}
              </div>
            </div>
          </Reveal>
        )
      })}
    </ul>
  )
}

/** Quote — pull quote with attribution. */
export function Quote({ children, by, className = '' }) {
  return (
    <Reveal className={['max-w-4xl', className].join(' ')}>
      <p className="font-display text-3xl font-medium leading-tight text-ink sm:text-4xl lg:text-5xl text-balance">
        <span className="text-accent">“</span>
        {children}
        <span className="text-accent">”</span>
      </p>
      {by && <footer className="mt-6 text-base text-ink-mute">— {by}</footer>}
    </Reveal>
  )
}

/** Callout — highlighted insight box. */
export function Callout({ children, tone = 'accent', icon: Icon, title, className = '' }) {
  return (
    <Reveal
      className={[
        'rounded-xl border border-line bg-surface/60 p-6',
        `border-l-2 ${toneBorderLeft[tone]}`,
        className,
      ].join(' ')}
    >
      <div className="flex items-start gap-3">
        {Icon && <Icon className={['mt-0.5 h-5 w-5 shrink-0', toneText[tone]].join(' ')} strokeWidth={1.8} />}
        <div>
          {title && <div className={['mb-1 font-semibold', toneText[tone]].join(' ')}>{title}</div>}
          <div className="text-ink-dim leading-relaxed">{children}</div>
        </div>
      </div>
    </Reveal>
  )
}

/**
 * MeterBar — labeled horizontal percentage bar (lighter than a chart).
 * value 0–100. Good for single comparisons.
 */
export function MeterBar({ label, value, display, tone = 'accent', className = '' }) {
  return (
    <Reveal className={['w-full', className].join(' ')}>
      <div className="mb-1.5 flex items-baseline justify-between">
        <span className="text-sm text-ink-dim">{label}</span>
        <span className={['stat-figure text-lg', toneText[tone]].join(' ')}>{display ?? `${value}%`}</span>
      </div>
      <div className="h-2 w-full overflow-hidden rounded-full bg-surface-2">
        <motion.div
          className={['h-full rounded-full', toneBg[tone]].join(' ')}
          initial={{ width: 0 }}
          animate={{ width: `${Math.max(0, Math.min(100, value))}%` }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
        />
      </div>
    </Reveal>
  )
}

/** Two-column comparison (e.g. WhatsApp vs Email). */
export function Comparison({ left, right, className = '' }) {
  const Col = ({ data, side }) => (
    <Reveal>
      <div
        className={[
          'h-full rounded-xl border bg-surface/50 p-7',
          side === 'win' ? 'border-accent/40' : 'border-line',
        ].join(' ')}
      >
        <div className="flex items-center gap-2">
          {data.icon && (
            <data.icon
              className={['h-5 w-5', side === 'win' ? 'text-accent' : 'text-ink-mute'].join(' ')}
              strokeWidth={1.8}
            />
          )}
          <h3 className="font-display text-xl font-semibold text-ink">{data.title}</h3>
        </div>
        <ul className="mt-5 flex flex-col gap-3">
          {data.rows.map((r, i) => (
            <li key={i} className="flex items-baseline justify-between gap-4 border-b border-line/60 pb-3 last:border-0">
              <span className="text-sm text-ink-dim">{r.label}</span>
              <span
                className={[
                  'stat-figure text-xl',
                  side === 'win' ? 'text-accent' : 'text-ink',
                ].join(' ')}
              >
                {r.value}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </Reveal>
  )
  return (
    <div className={['grid gap-5 sm:grid-cols-2', className].join(' ')}>
      <Col data={left} side={left.win ? 'win' : 'base'} />
      <Col data={right} side={right.win ? 'win' : 'base'} />
    </div>
  )
}

/** Section eyebrow used on content slides to show which block we're in. */
export function Eyebrow({ index, label, tone = 'accent' }) {
  return (
    <Reveal className="mb-5 flex items-center gap-3">
      <span className={['font-mono text-sm', toneText[tone]].join(' ')}>
        {String(index).padStart(2, '0')}
      </span>
      <span className="h-px w-8 bg-line" />
      <span className="text-sm font-medium uppercase tracking-wider text-ink-mute">{label}</span>
    </Reveal>
  )
}

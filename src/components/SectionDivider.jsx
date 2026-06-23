import Slide from './Slide'
import { Reveal } from './ui'
import { toneText, toneBg } from './ui'

/**
 * SectionDivider — full-bleed transition slide between blocks.
 *  index: number, title: string, subtitle?: string,
 *  items?: string[] (what this block covers), tone
 */
export default function SectionDivider({ index, title, subtitle, items = [], tone = 'accent' }) {
  return (
    <Slide align="start" justify="center">
      <div className="w-full">
        <Reveal>
          <div className="flex items-center gap-4">
            <span className={['stat-figure text-7xl sm:text-8xl', toneText[tone]].join(' ')}>
              {String(index).padStart(2, '0')}
            </span>
            <span className={['h-16 w-px', toneBg[tone]].join(' ')} />
            <span className="text-sm font-medium uppercase tracking-[0.2em] text-ink-mute">
              Bloque {index}
            </span>
          </div>
        </Reveal>

        <Reveal
          as="h2"
          className="mt-8 max-w-4xl font-display text-5xl font-bold text-ink sm:text-6xl lg:text-7xl text-balance"
        >
          {title}
        </Reveal>

        {subtitle && (
          <Reveal className="mt-6 max-w-2xl text-xl text-ink-dim text-pretty leading-relaxed">
            {subtitle}
          </Reveal>
        )}

        {items.length > 0 && (
          <Reveal className="mt-10 flex flex-wrap gap-x-8 gap-y-3">
            {items.map((it, i) => (
              <div key={i} className="flex items-center gap-2 text-ink-dim">
                <span className={['h-1.5 w-1.5 rounded-full', toneBg[tone]].join(' ')} />
                <span>{it}</span>
              </div>
            ))}
          </Reveal>
        )}
      </div>
    </Slide>
  )
}

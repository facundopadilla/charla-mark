import { Gauge, MessageCircle, Repeat, Rocket } from 'lucide-react'
import Slide from '../../components/Slide'
import { Eyebrow, Title, Reveal, Callout } from '../../components/ui'

const cards = [
  {
    icon: Gauge,
    tone: 'accent',
    n: '01',
    title: 'Eficiencia, no expansión',
    text: 'El hábito digital ya está. La ventaja hoy es convertir mejor y retener más, no sumar presencia por sumar.',
  },
  {
    icon: MessageCircle,
    tone: 'mint',
    n: '02',
    title: 'WhatsApp primero',
    text: 'Es EL canal comercial de LATAM. Respondé rápido, conversá y guiá la compra ahí mismo.',
  },
  {
    icon: Repeat,
    tone: 'gold',
    n: '03',
    title: 'Fidelizar rinde',
    text: '+5% de retención = +25–95% de rentabilidad. Y la tecnología para lograrlo es gratis.',
  },
]

const toneMap = {
  accent: 'text-accent',
  mint: 'text-mint',
  gold: 'text-gold',
}
const borderMap = {
  accent: 'border-l-accent',
  mint: 'border-l-mint',
  gold: 'border-l-gold',
}

export default function Recap() {
  return (
    <Slide align="start" justify="center">
      <Eyebrow index={8} label="Cierre" />
      <Title className="max-w-4xl">Si te llevás solo tres cosas</Title>

      <div className="mt-12 grid w-full gap-5 lg:grid-cols-3">
        {cards.map((c) => (
          <Reveal key={c.n}>
            <div className={['flex h-full flex-col rounded-xl border border-line bg-surface/50 p-7 border-l-2', borderMap[c.tone]].join(' ')}>
              <div className="flex items-center justify-between">
                <c.icon className={['h-7 w-7', toneMap[c.tone]].join(' ')} strokeWidth={1.6} />
                <span className={['stat-figure text-3xl', toneMap[c.tone]].join(' ')}>{c.n}</span>
              </div>
              <h3 className="mt-6 font-display text-2xl font-semibold leading-tight text-ink text-balance">
                {c.title}
              </h3>
              <p className="mt-3 text-ink-dim leading-relaxed">{c.text}</p>
            </div>
          </Reveal>
        ))}
      </div>

      <Callout
        className="mt-10 w-full max-w-4xl"
        tone="accent"
        icon={Rocket}
        title="Empezá HOY por un solo paso"
      >
        Activá WhatsApp Business con catálogo y Business AI esta semana. Un canal,
        bien hecho, mueve más que diez a medias.
      </Callout>
    </Slide>
  )
}

import { Gauge, MessageCircle, Repeat } from 'lucide-react'
import Slide from '../../components/Slide'
import { Eyebrow, Title, Reveal } from '../../components/ui'

const cards = [
  {
    icon: Gauge,
    tone: 'accent',
    n: '01',
    title: 'El canal crece por eficiencia, no por expansión',
    text: 'El hábito digital ya está consolidado en Argentina. La ventaja dejó de ser “estar presente”: ahora es convertir mejor y retener más.',
  },
  {
    icon: MessageCircle,
    tone: 'mint',
    n: '02',
    title: 'WhatsApp es el canal comercial de LATAM',
    text: 'No es un canal más. Concentra el grueso del comercio conversacional regional y convierte varias veces más que el sitio web o el email.',
  },
  {
    icon: Repeat,
    tone: 'gold',
    n: '03',
    title: 'Retener cuesta menos y rinde más',
    text: 'Subir la retención 5% puede aumentar la rentabilidad entre 25% y 95%. Y hoy la tecnología para fidelizar cabe en un presupuesto chico.',
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

export default function Takeaways() {
  return (
    <Slide align="start" justify="center">
      <Eyebrow index={0} label="Si te llevás solo tres ideas" />
      <Title className="max-w-4xl">Las tres conclusiones que mueven la aguja</Title>

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
    </Slide>
  )
}

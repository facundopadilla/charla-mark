import { Timer, ShoppingCart, ArrowUpRight, Heart, UserMinus } from 'lucide-react'
import Slide from '../../components/Slide'
import { Eyebrow, Title, Lead, StatCard } from '../../components/ui'

const benchmarks = [
  {
    value: '< 2 min',
    label: 'Tiempo de primera respuesta en horario laboral. La velocidad es lo que más mueve la conversión.',
    tone: 'accent',
    icon: Timer,
  },
  {
    value: '8–15%',
    label: 'Conversión de chat a venta cuando la atención es ágil y bien guiada.',
    tone: 'mint',
    icon: ShoppingCart,
  },
  {
    value: '5–20%',
    label: 'Tasa de escalación a humano. Muy alta indica falta de capacitación; muy baja, que no se escala cuando se debería.',
    tone: 'gold',
    icon: ArrowUpRight,
  },
  {
    value: 'NPS > 8',
    label: 'Satisfacción medida justo después del chat. Es la temperatura real de la atención.',
    tone: 'clay',
    icon: Heart,
  },
  {
    value: '< 2%',
    label: 'Opt-outs mensuales. Por encima de ese umbral, el canal molesta más de lo que ayuda.',
    tone: 'mauve',
    icon: UserMinus,
  },
]

export default function ServiceBenchmarks() {
  return (
    <Slide align="start" justify="center">
      <Eyebrow index={5} label="Atención y postventa" />
      <Title className="max-w-4xl">La velocidad es el diferenciador número uno</Title>
      <Lead>
        Los números que separan una atención que vende de una que pierde
        clientes. Estos son los benchmarks que conviene mirar en LATAM.
      </Lead>

      <div className="mt-12 grid w-full gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {benchmarks.map((b) => (
          <StatCard
            key={b.value}
            value={b.value}
            label={b.label}
            tone={b.tone}
            icon={b.icon}
            source="Aurora Inbox, FastStrat"
          />
        ))}
      </div>
    </Slide>
  )
}

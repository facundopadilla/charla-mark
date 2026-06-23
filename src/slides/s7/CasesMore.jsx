import { Pill as PillIcon, Bot, HeartHandshake, TrendingDown, Rocket } from 'lucide-react'
import Slide from '../../components/Slide'
import { Eyebrow, Title, StatCard, Reveal, SourceTag } from '../../components/ui'

const cases = [
  {
    icon: PillIcon,
    tone: 'accent',
    value: '6 M',
    label: 'Farmacias del Ahorro (México): integró la mensajería al proceso de compra y sumó 6 millones de conversiones en 6 meses.',
  },
  {
    icon: Bot,
    tone: 'mint',
    value: '−30%',
    label: 'Fintech brasileña: dejó que la IA eligiera el subgrupo óptimo. Costo por visita −30% y clics +20%.',
  },
  {
    icon: HeartHandshake,
    tone: 'gold',
    value: 'NPS 70',
    label: 'Estudio de yoga (Seattle): feedback loops y member spotlights impulsaron el boca a boca.',
  },
  {
    icon: TrendingDown,
    tone: 'clay',
    value: '−25%',
    label: 'Junta Local (Brasil): usó WhatsApp para retención y bajó el churn mensual un 25%.',
  },
  {
    icon: Rocket,
    tone: 'mauve',
    value: 'B2B',
    label: 'Banhi (fundador argentino): Tiendanube + Instagram + alianzas con hoteles y eventos.',
  },
]

export default function CasesMore() {
  return (
    <Slide align="start" justify="center">
      <Eyebrow index={7} label="Casos reales" />
      <Title className="max-w-4xl">Funciona a toda escala</Title>

      <div className="mt-10 grid w-full gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {cases.map((c) => (
          <StatCard
            key={c.label}
            value={c.value}
            label={c.label}
            tone={c.tone}
            icon={c.icon}
          />
        ))}
        <Reveal className="h-full">
          <div className="flex h-full flex-col justify-center rounded-xl border border-dashed border-line bg-surface/30 p-6">
            <SourceTag className="mt-0">
              Cifras auto-reportadas por proveedores/agencias, ilustrativas de lo posible.
            </SourceTag>
          </div>
        </Reveal>
      </div>
    </Slide>
  )
}

import { Coins, Crown, Users, Stamp, Gift, Star, Lightbulb } from 'lucide-react'
import Slide from '../../components/Slide'
import { Eyebrow, Title, Lead, StatCard, PointList, Callout, Reveal } from '../../components/ui'

const stats = [
  {
    value: '77%',
    tone: 'accent',
    icon: Coins,
    label: 'más propenso a comprar de marcas con programa de recompensas',
  },
  {
    value: '70%',
    tone: 'gold',
    icon: Users,
    label: 'recomienda a las marcas con programa de fidelización',
  },
  {
    value: '63%',
    tone: 'mint',
    icon: Crown,
    label: 'cambia sus hábitos de gasto para ganar premios',
  },
]

const models = [
  {
    icon: Stamp,
    title: 'Puntos o tarjeta de sellos',
    text: 'Comprá 10, el 11 va de regalo. Clásico de kiosco, café o peluquería — funciona y es barato.',
  },
  {
    icon: Gift,
    title: 'Un premio al que vuelve',
    text: 'Un descuento o un regalito en la próxima compra, para que haya una próxima.',
  },
  {
    icon: Users,
    title: 'Referidos',
    text: 'Traé a un amigo y ganan los dos: la mejor publicidad es un cliente contento.',
  },
  {
    icon: Star,
    title: 'Cliente frecuente',
    text: 'Atención preferencial o un extra sorpresa para los que siempre te eligen.',
  },
]

export default function LoyaltyPrograms() {
  return (
    <Slide align="start" justify="center">
      <Eyebrow index={4} label="Fidelización y retención" />
      <Title className="max-w-4xl">Programas de fidelización que sí funcionan</Title>
      <Lead>Para un kiosco, un local de ropa o un servicio — sin apps ni nada complicado.</Lead>

      <div className="mt-8 grid w-full gap-5 sm:grid-cols-3">
        {stats.map((s) => (
          <StatCard key={s.value} {...s} source="Nextdoor" />
        ))}
      </div>

      <Reveal className="mt-10 text-sm font-medium uppercase tracking-wider text-ink-mute">
        Modelos que rinden
      </Reveal>
      <PointList className="mt-5 max-w-3xl" items={models} />

      <Callout className="mt-10 max-w-4xl" tone="gold" icon={Lightbulb} title="Regla de oro">
        Simple y transparente. Si el cliente no sabe cómo ganar o canjear, el
        programa fracasa.
      </Callout>
    </Slide>
  )
}

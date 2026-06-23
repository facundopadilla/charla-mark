import { Coins, Crown, Users, Rocket, Lightbulb } from 'lucide-react'
import Slide from '../../components/Slide'
import { Eyebrow, Title, StatCard, PointList, Callout, Reveal } from '../../components/ui'

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
    icon: Coins,
    title: 'Puntos por compra',
    text: 'Acumulables y canjeables por descuentos o productos.',
  },
  {
    icon: Crown,
    title: 'Niveles VIP / tiers',
    text: 'Silver, gold y platinum: más se compra, más beneficios.',
  },
  {
    icon: Users,
    title: 'Referidos',
    text: 'La credibilidad del cliente expande la base orgánicamente.',
  },
  {
    icon: Rocket,
    title: 'Acceso anticipado',
    text: 'Lanzamientos antes que nadie para los más valiosos.',
  },
]

export default function LoyaltyPrograms() {
  return (
    <Slide align="start" justify="center">
      <Eyebrow index={4} label="Fidelización y retención" />
      <Title className="max-w-4xl">Programas de fidelización que sí funcionan</Title>

      <div className="mt-10 grid w-full gap-5 sm:grid-cols-3">
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

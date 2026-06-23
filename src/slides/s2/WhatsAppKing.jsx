import { MessageCircle, Users, TrendingUp, Globe } from 'lucide-react'
import Slide from '../../components/Slide'
import { Eyebrow, Title, Lead, StatCard } from '../../components/ui'

const stats = [
  {
    icon: Users,
    tone: 'accent',
    value: '530 M+',
    label: 'usuarios de WhatsApp en LATAM — 87% de penetración entre usuarios de smartphone.',
    source: 'Unimento',
  },
  {
    icon: Globe,
    tone: 'mint',
    value: 'US$ 18.200 M',
    label: 'vale el comercio conversacional regional, creciendo ~35% interanual.',
    source: 'Aurora Inbox',
  },
  {
    icon: MessageCircle,
    tone: 'gold',
    value: '72%',
    label: 'de ese volumen de comercio conversacional pasa por WhatsApp.',
    source: 'FastStrat',
  },
  {
    icon: TrendingUp,
    tone: 'clay',
    value: '+85%',
    label: 'crecieron las transacciones dentro de WhatsApp en LATAM durante 2025.',
    source: 'Infobip',
  },
]

export default function WhatsAppKing() {
  return (
    <Slide align="start" justify="center">
      <Eyebrow index={2} label="Redes como canal de venta" />
      <Title className="max-w-4xl">
        WhatsApp no es un canal más: es EL canal de LATAM
      </Title>
      <Lead>
        El comercio conversacional ya mueve miles de millones en la región, y la
        conversación ocurre donde tus clientes ya están.
      </Lead>

      <div className="mt-12 grid w-full gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((s) => (
          <StatCard
            key={s.value}
            icon={s.icon}
            tone={s.tone}
            value={s.value}
            label={s.label}
            source={s.source}
          />
        ))}
      </div>
    </Slide>
  )
}

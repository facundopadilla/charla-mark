import { Flag, ShoppingCart, Bot, Zap } from 'lucide-react'
import Slide from '../../components/Slide'
import { Eyebrow, Title, Stat, Callout, SourceTag, Reveal } from '../../components/ui'

const toneIcon = {
  accent: 'text-accent',
  mint: 'text-mint',
  gold: 'text-gold',
}

const stats = [
  {
    value: '+51%',
    tone: 'accent',
    icon: Flag,
    label:
      'crecimiento de adopción de comercio por WhatsApp en Argentina, el más agresivo de la región.',
  },
  {
    value: '+85%',
    tone: 'mint',
    icon: ShoppingCart,
    label: 'transacciones completadas dentro de WhatsApp en LATAM durante 2025.',
  },
  {
    value: '10x',
    tone: 'gold',
    icon: Bot,
    label:
      'Meta pasó de 1 M a 10 M+ de conversaciones semanales con IA empresarial en WhatsApp y Messenger en un solo trimestre (abr 2026).',
  },
]

export default function WhatsAppGrowth() {
  return (
    <Slide align="start" justify="center">
      <Eyebrow index={2} label="Redes como canal de venta" />
      <Title className="max-w-4xl">
        Argentina lidera la adopción de comercio por WhatsApp
      </Title>

      <div className="mt-12 grid w-full gap-8 sm:grid-cols-3">
        {stats.map((s) => (
          <Reveal key={s.value}>
            <s.icon
              className={['mb-4 h-6 w-6', toneIcon[s.tone]].join(' ')}
              strokeWidth={1.6}
            />
            <Stat value={s.value} tone={s.tone} size="lg" label={s.label} />
          </Reveal>
        ))}
      </div>

      <Callout className="mt-10 max-w-3xl" tone="accent" icon={Zap}>
        La inestabilidad económica empuja a los negocios argentinos hacia canales
        directos y de bajo costo.
      </Callout>

      <SourceTag>Aurora Inbox · El Ecosistema Startup</SourceTag>
    </Slide>
  )
}

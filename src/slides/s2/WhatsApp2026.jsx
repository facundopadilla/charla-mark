import { AtSign, BadgeCheck, Phone, Megaphone, ClipboardList, Tag } from 'lucide-react'
import Slide from '../../components/Slide'
import { Eyebrow, Title, Reveal, SourceTag } from '../../components/ui'

const features = [
  {
    icon: AtSign,
    tone: 'accent',
    title: 'Usernames (@negocio)',
    text: 'Te contactan sin tu número de teléfono. Registrar un buen username temprano es ventaja competitiva.',
  },
  {
    icon: BadgeCheck,
    tone: 'mint',
    title: 'Verificación azul + Business AI',
    text: 'La IA integrada redacta borradores y crea anuncios directamente desde la conversación.',
  },
  {
    icon: Phone,
    tone: 'gold',
    title: 'Calling API',
    text: 'Llamadas dentro del chat: las entrantes son gratis y las salientes se cobran por minuto.',
  },
  {
    icon: Megaphone,
    tone: 'clay',
    title: 'Marketing optimizado con IA',
    text: 'Una fintech brasileña redujo 30% el costo por visita y subió 20% los clics.',
  },
  {
    icon: ClipboardList,
    tone: 'mauve',
    title: 'WhatsApp Flows',
    text: 'Formularios dentro del chat con 72% de completación, frente al 35% de los formularios web.',
  },
  {
    icon: Tag,
    tone: 'accent',
    title: 'Nuevo pricing per-message',
    text: 'Desde julio de 2025 se cobra por mensaje: cada uno debe justificar su costo.',
  },
]

const toneIcon = {
  accent: 'text-accent',
  mint: 'text-mint',
  gold: 'text-gold',
  clay: 'text-clay',
  mauve: 'text-mauve',
}

export default function WhatsApp2026() {
  return (
    <Slide align="start" justify="center">
      <Eyebrow index={2} label="Redes como canal de venta" />
      <Title className="max-w-4xl">Lo nuevo de WhatsApp Business en 2026</Title>

      <div className="mt-12 grid w-full gap-5 sm:grid-cols-2">
        {features.map((f) => (
          <Reveal key={f.title}>
            <div className="flex h-full items-start gap-4 rounded-xl border border-line bg-surface/50 p-6">
              <f.icon
                className={['mt-0.5 h-6 w-6 shrink-0', toneIcon[f.tone]].join(' ')}
                strokeWidth={1.6}
              />
              <div>
                <h3 className="font-semibold text-ink">{f.title}</h3>
                <p className="mt-1 text-ink-dim leading-relaxed">{f.text}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      <SourceTag>PicallEx · Unimento · Cliengo · Aurora Inbox</SourceTag>
    </Slide>
  )
}

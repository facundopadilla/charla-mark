import { Store, LayoutGrid, Headset, Workflow, Send } from 'lucide-react'
import Slide from '../../components/Slide'
import { Eyebrow, Title, Lead, Card, Pill, Reveal, toneText } from '../../components/ui'

const tools = [
  {
    icon: Store,
    tone: 'accent',
    name: 'Tiendanube',
    text: 'Tienda online + ventas en Instagram, Facebook, WhatsApp y local desde un solo panel.',
    access: 'Plan gratuito',
    accessTone: 'accent',
    note: 'Pago Nube sin costo por transacción',
  },
  {
    icon: LayoutGrid,
    tone: 'mint',
    name: 'Meta Business Suite',
    text: 'Gestión unificada de Instagram y Facebook: mensajes, publicaciones y métricas.',
    access: 'Gratuito',
    accessTone: 'accent',
  },
  {
    icon: Headset,
    tone: 'gold',
    name: 'Zoho Desk',
    text: 'Bandeja unificada de llamadas, correo, chat y WhatsApp con historial por cliente.',
    access: 'Pago (PyME)',
    accessTone: 'gold',
  },
  {
    icon: Workflow,
    tone: 'clay',
    name: 'Trengo / respond.io',
    text: 'Inbox omnicanal con API de WhatsApp y CRM para coordinar todo el equipo.',
    access: 'Pago',
    accessTone: 'gold',
  },
  {
    icon: Send,
    tone: 'mauve',
    name: 'Brevo',
    text: 'Email, SMS, WhatsApp, chat web y CRM integrados en una sola plataforma.',
    access: 'Plan gratuito',
    accessTone: 'accent',
  },
]

export default function OmniTools() {
  return (
    <Slide align="start" justify="center">
      <Eyebrow index={3} label="Omnicanalidad" />
      <Title className="max-w-4xl">Herramientas accesibles para implementar omnicanalidad</Title>
      <Lead>
        No hace falta un gran presupuesto: estas plataformas cubren desde la venta
        hasta la atención unificada.
      </Lead>

      <div className="mt-10 grid w-full gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {tools.map((t) => (
          <Reveal key={t.name}>
            <Card tone={t.tone} className="flex h-full flex-col">
              <t.icon
                className={['mb-4 h-6 w-6', toneText[t.tone]].join(' ')}
                strokeWidth={1.6}
              />
              <h3 className="font-display text-xl font-semibold text-ink">{t.name}</h3>
              <p className="mt-2 flex-1 text-sm text-ink-dim leading-relaxed">{t.text}</p>
              <div className="mt-4 flex items-center gap-2">
                <Pill tone={t.accessTone}>{t.access}</Pill>
                {t.note && <span className="text-xs text-ink-mute">{t.note}</span>}
              </div>
            </Card>
          </Reveal>
        ))}
      </div>
    </Slide>
  )
}

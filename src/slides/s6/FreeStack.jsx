import {
  MessageCircle,
  Store,
  Wallet,
  LayoutGrid,
  Palette,
  Tags,
  Ban,
} from 'lucide-react'
import Slide from '../../components/Slide'
import { Eyebrow, Title, Lead, Reveal, Callout } from '../../components/ui'

// WhatsApp-first stack, all free, all actually used in Argentina.
const tools = [
  { icon: MessageCircle, tone: 'accent', name: 'WhatsApp Business', use: 'Vender, atender, catálogo + Business AI' },
  { icon: Store, tone: 'mint', name: 'Tiendanube / Empretienda', use: 'Tu tienda online cuando la necesites' },
  { icon: Wallet, tone: 'gold', name: 'Mercado Pago', use: 'Cobrar: QR, link de pago y cuotas' },
  { icon: LayoutGrid, tone: 'clay', name: 'Meta Business Suite', use: 'Instagram y Facebook en un solo lugar' },
  { icon: Palette, tone: 'mauve', name: 'Canva', use: 'Diseñar sin saber diseñar' },
  { icon: Tags, tone: 'accent', name: 'Etiquetas + planilla', use: 'Tu primer CRM, gratis (lo vemos enseguida)' },
]

const toneText = {
  accent: 'text-accent',
  gold: 'text-gold',
  clay: 'text-clay',
  mauve: 'text-mauve',
  mint: 'text-mint',
}

export default function FreeStack() {
  return (
    <Slide align="start" justify="center">
      <Eyebrow index={6} label="Herramientas" />
      <Title className="max-w-4xl">Con qué arrancás: gratis y pensado para Argentina</Title>
      <Lead>Todo lo que se usa de verdad acá, sin pagar nada en dólares.</Lead>

      <div className="mt-8 grid w-full gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {tools.map((t) => (
          <Reveal key={t.name}>
            <div className="flex h-full items-center gap-4 rounded-xl border border-line bg-surface/50 p-5">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-line bg-surface">
                <t.icon className={['h-5 w-5', toneText[t.tone]].join(' ')} strokeWidth={1.7} />
              </div>
              <div>
                <div className="font-semibold text-ink">{t.name}</div>
                <div className="mt-0.5 text-sm text-ink-dim">{t.use}</div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      <Callout className="mt-8 max-w-4xl" tone="clay" icon={Ban} title="Evitá por ahora (son para empresas grandes)">
        Shopify y WooCommerce (caros y en dólares), Zoho Desk, Hootsuite, respond.io o
        Trengo. El que recién arranca no los necesita — y los paga en dólares. Empezá con
        lo de arriba.
      </Callout>
    </Slide>
  )
}

import {
  Store,
  MessageCircle,
  LayoutGrid,
  Mail,
  Palette,
  BarChart3,
  Search,
  Gift,
} from 'lucide-react'
import Slide from '../../components/Slide'
import { Eyebrow, Title, Lead, Reveal, Callout } from '../../components/ui'

// Recommended free stack to launch without upfront investment.
const tools = [
  { icon: Store, tone: 'accent', name: 'Tiendanube', use: 'Tienda online' },
  { icon: MessageCircle, tone: 'mint', name: 'WhatsApp Business', use: 'Ventas + Business AI' },
  { icon: LayoutGrid, tone: 'gold', name: 'Meta Business Suite', use: 'Instagram y Facebook' },
  { icon: Mail, tone: 'clay', name: 'Brevo', use: 'Email + CRM' },
  { icon: Palette, tone: 'mauve', name: 'Canva', use: 'Diseño' },
  { icon: BarChart3, tone: 'accent', name: 'Google Analytics 4', use: 'Analítica' },
  { icon: Search, tone: 'mint', name: 'Google Search Console', use: 'SEO' },
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
      <Title className="max-w-4xl">El stack gratuito para arrancar sin invertir</Title>
      <Lead>
        Siete herramientas sin costo que cubren venta, comunicación, contenido y
        medición desde el día uno.
      </Lead>

      <div className="mt-10 grid w-full gap-4 sm:grid-cols-2 lg:grid-cols-3">
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

      <Callout className="mt-8 max-w-3xl" tone="gold" icon={Gift} title="Empezá gratis, pagá cuando crezcas">
        Un stack 100% gratuito cubre cerca del 80% de las necesidades de una PyME
        en fase inicial. Conviene pasar a versiones pagas al superar los límites
        del plan gratuito o al generar más de US$5.000/mes en ingresos digitales.
        <span className="mt-3 block font-mono text-[11px] uppercase tracking-wide text-ink-mute">
          Fuente: Tooldata
        </span>
      </Callout>
    </Slide>
  )
}

import {
  Palette,
  LineChart,
  Share2,
  ShoppingCart,
  Bot,
} from 'lucide-react'
import Slide from '../../components/Slide'
import { Eyebrow, Title, Lead, Reveal } from '../../components/ui'

// The rest of the recommended kit, grouped by category.
const categories = [
  {
    icon: Palette,
    tone: 'mauve',
    title: 'Diseño',
    tools: ['Canva'],
  },
  {
    icon: LineChart,
    tone: 'accent',
    title: 'Analítica y SEO',
    tools: [
      'Google Analytics 4',
      'Search Console',
      'Hotjar',
      'Ubersuggest / AnswerThePublic',
    ],
  },
  {
    icon: Share2,
    tone: 'gold',
    title: 'Gestión de redes',
    tools: ['Hootsuite / Buffer (planes free)'],
  },
  {
    icon: ShoppingCart,
    tone: 'mint',
    title: 'eCommerce y pagos (Argentina)',
    tools: [
      'Tiendanube',
      'WooCommerce / Shopify',
      'Mercado Libre · Mercado Pago · Mobbex · Ualá Bis',
    ],
  },
  {
    icon: Bot,
    tone: 'clay',
    title: 'Atención y chatbots',
    tools: [
      'WhatsApp Business + Business AI',
      'Zoho Desk · Trengo · respond.io',
      'Cliengo · Aurora Inbox',
      'Por API: WATI desde ~US$59/mes (ROI típico en 2–4 meses)',
    ],
  },
]

const toneText = {
  accent: 'text-accent',
  gold: 'text-gold',
  clay: 'text-clay',
  mauve: 'text-mauve',
  mint: 'text-mint',
}
const toneBg = {
  accent: 'bg-accent',
  gold: 'bg-gold',
  clay: 'bg-clay',
  mauve: 'bg-mauve',
  mint: 'bg-mint',
}

export default function ToolsByCategory() {
  return (
    <Slide align="start" justify="center">
      <Eyebrow index={6} label="Herramientas" />
      <Title className="max-w-4xl">El resto del kit, por categoría</Title>
      <Lead>
        Todo lo demás que vas a necesitar, ordenado por para qué sirve.
      </Lead>

      <div className="mt-10 grid w-full gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {categories.map((c) => (
          <Reveal key={c.title}>
            <div className="flex h-full flex-col rounded-xl border border-line bg-surface/50 p-6">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-line bg-surface">
                  <c.icon className={['h-5 w-5', toneText[c.tone]].join(' ')} strokeWidth={1.7} />
                </div>
                <h3 className="font-display text-lg font-semibold leading-tight text-ink">
                  {c.title}
                </h3>
              </div>
              <ul className="mt-5 flex flex-col gap-2.5">
                {c.tools.map((t) => (
                  <li key={t} className="flex items-start gap-2.5 text-sm text-ink-dim leading-relaxed">
                    <span className={['mt-2 h-1.5 w-1.5 shrink-0 rounded-full', toneBg[c.tone]].join(' ')} />
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </Slide>
  )
}

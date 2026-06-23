import { Wallet, Repeat, TrendingDown, Smile, ArrowUpRight, Gauge, Brain } from 'lucide-react'
import Slide from '../../components/Slide'
import { Eyebrow, Title, Card, Callout, Reveal } from '../../components/ui'

const metrics = [
  {
    icon: Wallet,
    tone: 'accent',
    name: 'CLV',
    full: 'Valor de vida del cliente',
    text: 'Ingreso total durante toda la relación. Ej.: US$50 × 4 compras/año × 3 años = US$600.',
  },
  {
    icon: Repeat,
    tone: 'gold',
    name: 'Tasa de recompra',
    full: 'Compradores que vuelven',
    text: 'Porcentaje de clientes que compra más de una vez.',
  },
  {
    icon: TrendingDown,
    tone: 'clay',
    name: 'Churn',
    full: 'Tasa de abandono',
    text: 'Porcentaje de clientes perdidos en un período. Más bajo = más lealtad.',
  },
  {
    icon: Smile,
    tone: 'mint',
    name: 'NPS',
    full: 'Probabilidad de recomendar',
    text: '% Promotores − % Detractores. Alerta temprana de la lealtad.',
  },
  {
    icon: ArrowUpRight,
    tone: 'accent',
    name: 'NRR',
    full: 'Net Revenue Retention',
    text: 'Ingreso recurrente conservado contemplando upgrades y bajas.',
  },
  {
    icon: Gauge,
    tone: 'mauve',
    name: 'CES',
    full: 'Customer Effort Score',
    text: 'Cuán fácil le resultó al cliente. Menor esfuerzo = más lealtad.',
  },
]

const toneText = {
  accent: 'text-accent',
  gold: 'text-gold',
  clay: 'text-clay',
  mauve: 'text-mauve',
  mint: 'text-mint',
}

export default function LoyaltyMetrics() {
  return (
    <Slide align="start" justify="center">
      <Eyebrow index={4} label="Fidelización y retención" />
      <Title className="max-w-4xl">Las métricas que de verdad importan</Title>

      <div className="mt-12 grid w-full gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {metrics.map((m) => (
          <Reveal key={m.name}>
            <Card className="h-full" tone={m.tone}>
              <div className="flex items-center gap-3">
                <m.icon className={['h-5 w-5 shrink-0', toneText[m.tone]].join(' ')} strokeWidth={1.7} />
                <h3 className="font-display text-xl font-semibold text-ink">{m.name}</h3>
              </div>
              <div className="mt-1 text-sm text-ink-mute">{m.full}</div>
              <p className="mt-3 text-ink-dim leading-relaxed">{m.text}</p>
            </Card>
          </Reveal>
        ))}
      </div>

      <Callout className="mt-10 max-w-4xl" tone="accent" icon={Brain}>
        Una palanca creciente es la IA predictiva: anticipar el churn y la
        próxima compra antes de que ocurran.
        <span className="mt-2 block font-mono text-[11px] uppercase tracking-wide text-ink-mute">
          GoDaddy, Shopify
        </span>
      </Callout>
    </Slide>
  )
}

import { Store, Scale, Stethoscope, ShoppingBag, UtensilsCrossed, Flame } from 'lucide-react'
import Slide from '../../components/Slide'
import { Eyebrow, Title, Reveal, SourceTag } from '../../components/ui'

const cases = [
  {
    icon: Store,
    tone: 'accent',
    business: 'Boutique en Guadalajara',
    result: 'Ventas',
    figure: 'x3',
    text: 'Tras caer 40% en ventas, adoptó WhatsApp para asesorar con fotos. El trato cercano recuperó y multiplicó la demanda.',
  },
  {
    icon: Scale,
    tone: 'mint',
    business: 'Firma legal (LATAM)',
    result: 'Conversión lead-a-cita',
    figure: '12% → 28%',
    text: 'WhatsApp Business API + HubSpot bajaron la respuesta de 4 h a 3 min. Responder rápido es lo que cierra.',
  },
  {
    icon: Stethoscope,
    tone: 'gold',
    business: 'Clínica del Dr. Mendoza',
    result: 'Repago de la inversión',
    figure: '1er mes',
    text: 'Recordatorios por WhatsApp redujeron las inasistencias. La tecnología se pagó sola en treinta días.',
  },
  {
    icon: ShoppingBag,
    tone: 'clay',
    business: 'PyME de indumentaria (Colombia)',
    result: 'Conversión DM-a-venta',
    figure: '+40%',
    text: 'De "solo Instagram DM" a IG + WhatsApp con catálogo y recupero de carrito abandonado, en 90 días.',
  },
  {
    icon: UtensilsCrossed,
    tone: 'mauve',
    business: 'Catering (Argentina)',
    result: 'Pedidos corporativos',
    figure: 'x3',
    text: 'Catálogo de menús con links de MercadoPago en WhatsApp. Cotizar y cobrar en el mismo chat, en 6 meses.',
  },
  {
    icon: Flame,
    tone: 'accent',
    business: 'Asador / BBQ (EE.UU.)',
    result: 'Retención',
    figure: '22% → 41%',
    text: 'Segmentación y mensajes personalizados casi duplicaron la retención en seis meses.',
  },
]

const toneMap = {
  accent: 'text-accent',
  mint: 'text-mint',
  gold: 'text-gold',
  clay: 'text-clay',
  mauve: 'text-mauve',
}
const borderMap = {
  accent: 'border-l-accent',
  mint: 'border-l-mint',
  gold: 'border-l-gold',
  clay: 'border-l-clay',
  mauve: 'border-l-mauve',
}

export default function CasesHighlights() {
  return (
    <Slide align="start" justify="center">
      <Eyebrow index={7} label="Casos reales" />
      <Title className="max-w-4xl">Negocios como el tuyo, con números reales</Title>

      <div className="mt-10 grid w-full gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {cases.map((c) => (
          <Reveal key={c.business}>
            <div className={['flex h-full flex-col rounded-xl border border-line bg-surface/50 p-6 border-l-2', borderMap[c.tone]].join(' ')}>
              <c.icon className={['h-6 w-6', toneMap[c.tone]].join(' ')} strokeWidth={1.6} />
              <h3 className="mt-4 font-display text-lg font-semibold leading-tight text-ink">{c.business}</h3>
              <div className="mt-4">
                <div className="text-xs uppercase tracking-wide text-ink-mute">{c.result}</div>
                <div className={['stat-figure mt-1 text-3xl sm:text-4xl', toneMap[c.tone]].join(' ')}>{c.figure}</div>
              </div>
              <p className="mt-4 text-sm text-ink-dim leading-relaxed">{c.text}</p>
            </div>
          </Reveal>
        ))}
      </div>

      <SourceTag className="mt-8">
        Cifras auto-reportadas por proveedores/agencias, ilustrativas de lo posible.
      </SourceTag>
    </Slide>
  )
}

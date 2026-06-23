import { Brain } from 'lucide-react'
import Slide from '../../components/Slide'
import { Eyebrow, Title, MeterBar, Callout } from '../../components/ui'

const meters = [
  { label: 'Compara precios antes de comprar', value: 85, tone: 'accent' },
  { label: 'Valora pagar en cuotas', value: 81, tone: 'gold' },
  { label: 'Compra desde el celular (mobile-first)', value: 80, tone: 'mint' },
  { label: 'Órdenes con envío bonificado (2025)', value: 42, tone: 'accent' },
  { label: 'Compra al menos una vez por mes', value: 60, tone: 'gold' },
]

export default function ConsumerBehavior() {
  return (
    <Slide align="start" justify="center">
      <Eyebrow index={1} label="Panorama actual" />
      <Title className="max-w-4xl">Un consumidor más racional y mobile-first</Title>

      <div className="mt-12 flex w-full max-w-3xl flex-col gap-6">
        {meters.map((m) => (
          <MeterBar key={m.label} label={m.label} value={m.value} tone={m.tone} />
        ))}
      </div>

      <p className="mt-6 font-mono text-[11px] uppercase tracking-wide text-ink-mute">
        Fuentes: CACE · Tiendanube · Infobae
      </p>

      <Callout className="mt-8 max-w-3xl" tone="accent" icon={Brain}>
        La compra impulsiva perdió terreno frente a decisiones planificadas: 7
        de cada 10 compraron productos del exterior (Temu / Alibaba) en los
        últimos 6 meses.
      </Callout>
    </Slide>
  )
}

import { CreditCard, ArrowLeftRight, Wallet, Smartphone, ShoppingBag } from 'lucide-react'
import Slide from '../../components/Slide'
import { Eyebrow, Title, MeterBar, StatCard, Callout } from '../../components/ui'

const macro = [
  {
    icon: Smartphone,
    tone: 'mint',
    value: '84%',
    label: 'de las compras en la región ya se hacen desde el celular.',
    source: 'SAMY / IAB Chile',
  },
  {
    icon: ShoppingBag,
    tone: 'accent',
    value: '30–50%',
    label: 'ya busca comprar directamente en redes sociales.',
    source: 'SAMY / IAB Chile',
  },
]

export default function PaymentsLatam() {
  return (
    <Slide align="start" justify="center">
      <Eyebrow index={1} label="Panorama actual" />
      <Title className="max-w-4xl">Cómo paga el comprador argentino</Title>

      <div className="mt-10 grid w-full gap-8 lg:grid-cols-2">
        <div>
          <h3 className="mb-5 flex items-center gap-2 font-display text-lg font-semibold text-ink">
            <CreditCard className="h-5 w-5 text-accent" strokeWidth={1.7} />
            Mix de pagos en Argentina
          </h3>
          <div className="flex flex-col gap-5">
            <MeterBar
              label="Tarjeta de crédito (lidera, pero pierde terreno)"
              value={57}
              display="48–67%"
              tone="accent"
            />
            <MeterBar
              label="Transferencias (≈ 1 de cada 4 operaciones)"
              value={25}
              tone="gold"
            />
            <MeterBar
              label="Billeteras virtuales (en alza)"
              value={40}
              display="↑"
              tone="mint"
            />
          </div>
          <Callout className="mt-6" tone="gold" icon={Wallet} title="El consumidor combina medios">
            Billetera para rapidez, tarjeta para cuotas, transferencia para
            descuento.
          </Callout>
        </div>

        <div>
          <h3 className="mb-5 flex items-center gap-2 font-display text-lg font-semibold text-ink">
            <ArrowLeftRight className="h-5 w-5 text-mint" strokeWidth={1.7} />
            Dos señales regionales que ya se ven acá
          </h3>
          <div className="grid gap-5 sm:grid-cols-2">
            {macro.map((m) => (
              <StatCard
                key={m.label}
                icon={m.icon}
                tone={m.tone}
                value={m.value}
                label={m.label}
                source={m.source}
              />
            ))}
          </div>
        </div>
      </div>
    </Slide>
  )
}

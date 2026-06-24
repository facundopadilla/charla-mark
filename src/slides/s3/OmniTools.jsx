import { Check, Info } from 'lucide-react'
import Slide from '../../components/Slide'
import { Eyebrow, Title, Lead, Reveal, SourceTag } from '../../components/ui'

// Argentine e-commerce platforms for entrepreneurs just starting to sell.
// Data: research junio 2026 (precios aprox., cambian por inflación).
const cols = ['Tiendanube', 'Empretienda', 'Tienda Negocio']

const rows = [
  {
    label: 'Plan gratis',
    values: ['Sí — Inicial $0 de por vida', '30 días de prueba', '30 días de prueba'],
  },
  {
    label: 'Precio mensual',
    values: ['Gratis · pago desde ~$27.000', '$9.490 (plan único)', 'desde ~$9.999 (aprox.)'],
  },
  {
    label: 'Comisión por venta (plataforma)',
    values: ['2% en el plan gratis · 0% con Pago Nube', '0% — sin comisión', '0% — sin comisión'],
    highlight: [false, true, true],
  },
  {
    label: 'Medios de pago',
    values: ['Pago Nube, Mercado Pago + cuotas', 'Mercado Pago, Ualá Bis + cuotas', 'Mercado Pago, MODO, GOcuotas y más'],
  },
  {
    label: 'Mejor para',
    values: [
      'Arrancar gratis y escalar: la más usada, con más tutoriales y comunidad',
      'Costo fijo bajo y predecible, sin % por venta',
      'Sin comisión + la mayor variedad de medios de pago',
    ],
  },
]

export default function OmniTools() {
  return (
    <Slide align="start" justify="center">
      <Eyebrow index={3} label="Omnicanalidad" />
      <Title className="max-w-4xl">¿En qué plataforma montás tu tienda online?</Title>
      <Lead>Tres opciones argentinas pensadas para arrancar sin saber nada técnico.</Lead>

      <Reveal className="mt-8 w-full overflow-x-auto no-scrollbar">
        <table className="w-full border-collapse text-left">
          <thead>
            <tr>
              <th className="w-[180px] p-3" />
              {cols.map((c, i) => (
                <th
                  key={c}
                  className={[
                    'border-b border-line p-3 align-bottom font-display text-lg font-semibold',
                    i === 0 ? 'text-accent' : 'text-ink',
                  ].join(' ')}
                >
                  {c}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((r) => (
              <tr key={r.label} className="align-top">
                <th className="border-b border-line/60 p-3 text-sm font-medium text-ink-mute">
                  {r.label}
                </th>
                {r.values.map((v, i) => (
                  <td
                    key={i}
                    className={[
                      'border-b border-line/60 p-3 text-sm leading-snug',
                      r.highlight && r.highlight[i] ? 'font-semibold text-accent' : 'text-ink-dim',
                    ].join(' ')}
                  >
                    {r.highlight && r.highlight[i] && (
                      <Check className="mr-1 inline h-3.5 w-3.5" strokeWidth={2.5} />
                    )}
                    {v}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </Reveal>

      <Reveal className="mt-6 flex max-w-4xl items-start gap-3 rounded-xl border border-line bg-surface/50 p-4">
        <Info className="mt-0.5 h-5 w-5 shrink-0 text-gold" strokeWidth={1.8} />
        <p className="text-sm text-ink-dim leading-relaxed">
          Aparte va <span className="text-ink">siempre</span> la comisión del medio de pago
          (Mercado Pago, Ualá Bis ≈ 3,5–4,5% + IVA al cobrar con tarjeta); por
          transferencia o efectivo suele ser 0%. Mercado Shops cierra el 31/12/2025: para
          una tienda propia, mejor estas tres.
        </p>
      </Reveal>

      <SourceTag>Sitios oficiales · precios aprox. junio 2026 (confirmá por inflación)</SourceTag>
    </Slide>
  )
}

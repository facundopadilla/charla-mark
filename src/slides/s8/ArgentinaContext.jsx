import { CreditCard, Globe, Smartphone, Wallet, TrendingDown } from 'lucide-react'
import Slide from '../../components/Slide'
import { Eyebrow, Title, Lead, PointList, SourceTag } from '../../components/ui'

export default function ArgentinaContext() {
  return (
    <Slide align="start" justify="center">
      <Eyebrow index={8} label="Plan de acción" />
      <Title className="max-w-4xl">Hecho para el contexto argentino</Title>
      <Lead>
        El mismo plan, calibrado para cómo compra y paga realmente el consumidor
        local.
      </Lead>

      <PointList
        className="mt-10 max-w-3xl"
        items={[
          {
            icon: CreditCard,
            title: 'Sensible al precio y la financiación',
            text: 'El 85% compara y el 81% valora cuotas: mostrar precio claro, cuotas y envío gratis.',
          },
          {
            icon: Globe,
            title: 'Competencia de plataformas chinas',
            text: 'Frente a Temu y Alibaba, competir por experiencia, velocidad y servicio, no solo por precio.',
          },
          {
            icon: Smartphone,
            title: 'Mobile-first (~80%)',
            text: 'Todo el recorrido de compra tiene que verse impecable en el celular.',
          },
          {
            icon: Wallet,
            title: 'Pagos locales',
            text: 'Integrar MercadoPago, transferencias y billeteras como opciones de cobro.',
          },
          {
            icon: TrendingDown,
            title: 'Inflación y consumo ajustado',
            text: 'El crecimiento viene por eficiencia (convertir y retener mejor), no por sumar tráfico.',
          },
        ]}
      />

      <SourceTag>Fuente: estudios de consumo digital en Argentina (2025–2026)</SourceTag>
    </Slide>
  )
}

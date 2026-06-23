import { Sparkles } from 'lucide-react'
import Slide from '../../components/Slide'
import { Eyebrow, Title, Stat, Callout } from '../../components/ui'

export default function WhyRetain() {
  return (
    <Slide align="start" justify="center">
      <Eyebrow index={4} label="Fidelización y retención" />
      <Title className="max-w-4xl">Retener es el mejor negocio</Title>

      <div className="mt-12 grid w-full gap-8 sm:grid-cols-3">
        <Stat
          size="xl"
          tone="accent"
          value="+25–95%"
          label="puede subir la rentabilidad al aumentar la retención apenas 5%"
          source="Bain & Company"
        />
        <Stat
          size="xl"
          tone="gold"
          value="≈40%"
          label="de los ingresos lo generan los compradores recurrentes"
        />
        <Stat
          size="xl"
          tone="clay"
          value="32%"
          label="abandona una marca tras una sola mala experiencia"
          source="Zoho"
        />
      </div>

      <Callout className="mt-12 max-w-4xl" tone="accent" icon={Sparkles}>
        En 2026 la retención ya no es solo descuentos y puntos: es mostrarse
        personal, consistente y relevante en cada interacción. (GoDaddy)
      </Callout>
    </Slide>
  )
}

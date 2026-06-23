import { Sparkles, Copy, UserCheck } from 'lucide-react'
import Slide from '../../components/Slide'
import { Eyebrow, Title, Lead, StatCard, Callout } from '../../components/ui'

export default function Trends2026() {
  return (
    <Slide align="start" justify="center">
      <Eyebrow index={1} label="Panorama actual" />
      <Title className="max-w-4xl">La IA pasa de probar a confiar</Title>
      <Lead>
        En 2026 la IA generativa ya produce salidas listas para el cliente, no
        solo borradores internos.
      </Lead>

      <div className="mt-12 grid w-full gap-5 lg:grid-cols-3">
        <StatCard
          icon={Sparkles}
          tone="accent"
          value="95%"
          label="de los marketers ya prueba IA para producción creativa, pero 42% sigue en testing inicial."
          source="Smartly.io"
        />
        <StatCard
          icon={Copy}
          tone="gold"
          value="3 de 4"
          label="marketers temen que el contenido por IA haga que las marcas suenen iguales (sameness): 86% ya vio salidas de IA parecidas a las de su competencia."
          source="Smartly.io"
        />
        <StatCard
          icon={UserCheck}
          tone="mint"
          value="75%"
          label="de los consumidores compra más de marcas con contenido personalizado."
          source="IE University"
        />
      </div>

      <Callout className="mt-8 max-w-3xl" tone="gold" icon={Sparkles} title="La oportunidad real">
        No es producir más rápido, sino producir contenido distintivo y
        auténtico que diferencie a la marca.
      </Callout>
    </Slide>
  )
}

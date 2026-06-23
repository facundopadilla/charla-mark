import { Heart, Users } from 'lucide-react'
import Slide from '../../components/Slide'
import { Eyebrow, Title, Lead, StatCard, Quote } from '../../components/ui'

export default function OmniWhat() {
  return (
    <Slide align="start" justify="center">
      <Eyebrow index={3} label="Omnicanalidad" />
      <Title className="max-w-4xl">Una sola experiencia, sin importar el canal</Title>
      <Lead>
        Omnicanalidad es ofrecer una experiencia consistente y sin fricciones en
        redes, web, marketplaces y atención: el cliente percibe una sola marca.
      </Lead>

      <div className="mt-10 grid w-full gap-5 sm:grid-cols-2">
        <StatCard
          icon={Heart}
          tone="accent"
          value="73%"
          label="de los consumidores considera la experiencia más importante que el precio."
          source="PwC"
        />
        <StatCard
          icon={Users}
          tone="mint"
          value="70%"
          label="de las marcas latinoamericanas busca mejorar la experiencia del cliente."
          source="affinco"
        />
      </div>

      <Quote className="mt-12" by="CACE">
        El consumidor no distingue entre online y offline
      </Quote>
      <Lead className="mt-3 max-w-3xl">
        Salta continuamente entre redes, contenido y compra: la experiencia tiene
        que acompañarlo en cada paso.
      </Lead>
    </Slide>
  )
}

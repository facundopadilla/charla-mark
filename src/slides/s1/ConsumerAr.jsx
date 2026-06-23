import { TrendingUp } from 'lucide-react'
import Slide from '../../components/Slide'
import { Eyebrow, Title, Stat, Callout } from '../../components/ui'

export default function ConsumerAr() {
  return (
    <Slide align="start" justify="center">
      <Eyebrow index={1} label="Panorama actual" />
      <Title className="max-w-4xl">
        El eCommerce argentino crece por encima de la inflación
      </Title>

      <div className="mt-12 grid w-full gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
        <Stat
          size="xl"
          tone="accent"
          value="$34–35 bill."
          sub="+55–60% nominal vs 31,5% de inflación"
          label="facturación eCommerce 2025 (en pesos)."
          source="CACE / Kantar"
        />
        <Stat
          size="xl"
          tone="gold"
          value="25,1 M"
          sub="+1,34 M de nuevos compradores en 2025"
          label="de personas compraron online."
          source="CACE"
        />
        <Stat
          size="xl"
          tone="mint"
          value="≈ 6%"
          label="del consumo privado ya es eCommerce."
          source="Tiendanube / Infobae"
        />
      </div>

      <Callout className="mt-10 max-w-3xl" tone="accent" icon={TrendingUp}>
        Mientras el retail físico se contrae, el canal digital sigue creciendo.
      </Callout>
    </Slide>
  )
}

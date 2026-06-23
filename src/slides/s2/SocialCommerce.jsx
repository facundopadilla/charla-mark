import { Users, Image, ShoppingCart, Network, BarChart3 } from 'lucide-react'
import Slide from '../../components/Slide'
import { Eyebrow, Title, Stat, PointList, Reveal } from '../../components/ui'

const points = [
  {
    icon: Users,
    title: 'Comunidad antes que transacción',
    text: 'Ya no alcanza con “escribinos por privado”: primero se construye relación y confianza.',
  },
  {
    icon: Image,
    title: 'Contenido visual de alta calidad',
    text: 'Mostrar el producto en acción, no en catálogo estático.',
  },
  {
    icon: ShoppingCart,
    title: 'Comercio sin fricción',
    text: 'Catálogo etiquetado más checkout o link de pago en el mismo flujo.',
  },
  {
    icon: Network,
    title: 'Programa de afiliados / microinfluencers',
    text: 'Medido por ROAS por creador, no por cantidad de publicaciones.',
  },
  {
    icon: BarChart3,
    title: 'Medición',
    text: 'CTR en productos etiquetados, conversión video-a-compra y ticket vs eCommerce.',
  },
]

export default function SocialCommerce() {
  return (
    <Slide align="start" justify="center">
      <Eyebrow index={2} label="Redes como canal de venta" />
      <Title className="max-w-4xl">
        Social commerce: LATAM no sigue la tendencia, la lidera
      </Title>

      <div className="mt-10 grid w-full gap-8 sm:grid-cols-2 lg:max-w-3xl">
        <Stat
          value="US$ 1,6 bill."
          tone="accent"
          size="lg"
          label="social commerce global proyectado para 2026, +33% interanual."
          source="eMarketer"
        />
        <Stat
          value="+45%"
          tone="mint"
          size="lg"
          label="crecimiento estimado del social commerce en LATAM."
          source="EssenceMediacom"
        />
      </div>

      <Reveal className="mt-10 text-sm font-semibold text-ink">
        Cinco claves para vender en social commerce
      </Reveal>
      <PointList className="mt-4 max-w-3xl" items={points} tone="accent" />
    </Slide>
  )
}

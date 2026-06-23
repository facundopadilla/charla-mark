import { ShoppingBag, Video, Radio, Users } from 'lucide-react'
import Slide from '../../components/Slide'
import { Eyebrow, Title, PointList, Pill, SourceTag, Reveal } from '../../components/ui'

const points = [
  {
    icon: ShoppingBag,
    title: 'Activá el catálogo',
    text: 'Instagram Shopping / Facebook Shops: etiquetá productos en posts y Reels con link de pago (MercadoPago o Pago Nube).',
  },
  {
    icon: Video,
    title: 'Video corto del producto en uso real',
    text: 'Gancho en los primeros 3 segundos y captions con keywords para que el algoritmo lo entienda.',
  },
  {
    icon: Radio,
    title: 'Live shopping',
    text: 'Hasta 30% de conversión durante el evento en vivo: vender y mostrar en tiempo real.',
  },
  {
    icon: Users,
    title: 'Microinfluencers por comisión',
    text: 'Alcance segmentado y de confianza, pagando por resultado en lugar de por publicación.',
  },
]

const benchmarks = ['CPC ~US$ 0,58', 'CTR ~1,8%', 'Conversión ~3,2%', 'ROAS 2,8–3,5x']

export default function InstagramSelling() {
  return (
    <Slide align="start" justify="center">
      <Eyebrow index={2} label="Redes como canal de venta" />
      <Title className="max-w-4xl">
        Instagram y Facebook: descubrimiento que vende
      </Title>

      <PointList className="mt-10 max-w-3xl" items={points} tone="accent" />

      <Reveal className="mt-10 w-full max-w-3xl rounded-xl border border-line bg-surface/50 p-6">
        <div className="text-sm font-semibold text-ink">
          Benchmarks de pauta Meta para eCommerce
        </div>
        <div className="mt-4 flex flex-wrap gap-2.5">
          {benchmarks.map((b) => (
            <Pill key={b} tone="mint">
              {b}
            </Pill>
          ))}
        </div>
        <p className="mt-4 text-sm text-ink-mute">
          TikTok suele ofrecer CPC más bajos para el mismo objetivo.
        </p>
      </Reveal>

      <SourceTag>Thunderbit</SourceTag>
    </Slide>
  )
}

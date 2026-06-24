import { ShoppingBag, Video, Users } from 'lucide-react'
import Slide from '../../components/Slide'
import { Eyebrow, Title, PointList, SourceTag, Reveal } from '../../components/ui'

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
    icon: Users,
    title: 'Microinfluencers: canje o pago por video',
    text: 'Acá casi nadie paga por resultado: lo común es el canje (producto por contenido) o un pago fijo por video. Elegí 3–5 de tu nicho.',
  },
]

const benchmarks = [
  { k: 'CPC', v: '~US$ 0,58', m: 'Costo por clic: lo que pagás cada vez que alguien toca tu anuncio.' },
  { k: 'CTR', v: '~1,8%', m: 'De cada 100 personas que ven el anuncio, ~2 hacen clic.' },
  { k: 'Conversión', v: '~3,2%', m: 'De cada 100 que hacen clic, ~3 terminan comprando.' },
  { k: 'ROAS', v: '2,8–3,5x', m: 'Por cada $1 invertido en publicidad, recuperás ~$3 en ventas.' },
]

export default function InstagramSelling() {
  return (
    <Slide align="start" justify="center">
      <Eyebrow index={2} label="Redes como canal de venta" />
      <Title className="max-w-4xl">
        Instagram y Facebook: descubrimiento que vende
      </Title>

      <PointList className="mt-10 max-w-3xl" items={points} tone="accent" />

      <Reveal className="mt-10 w-full">
        <div className="text-sm font-semibold text-ink">
          Si hacés publicidad paga (pauta), estos son los números de referencia en Meta
          para eCommerce:
        </div>
        <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {benchmarks.map((b) => (
            <div key={b.k} className="rounded-xl border border-line bg-surface/50 p-5">
              <div className="stat-figure text-3xl text-mint">{b.v}</div>
              <div className="mt-1 text-sm font-semibold text-ink">{b.k}</div>
              <p className="mt-2 text-sm text-ink-dim leading-snug">{b.m}</p>
            </div>
          ))}
        </div>
        <p className="mt-4 text-sm text-ink-mute">
          TikTok suele tener un costo por clic más bajo para el mismo objetivo.
        </p>
      </Reveal>

      <SourceTag>Thunderbit</SourceTag>
    </Slide>
  )
}

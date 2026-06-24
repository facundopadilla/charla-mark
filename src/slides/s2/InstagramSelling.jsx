import { MessageCircle, Camera, Store, Info } from 'lucide-react'
import Slide from '../../components/Slide'
import { Eyebrow, Title, Lead, Reveal, Callout, toneText } from '../../components/ui'

const channels = [
  {
    icon: MessageCircle,
    tone: 'accent',
    name: 'Tu tienda en WhatsApp',
    text: 'Cargá el catálogo en WhatsApp Business: mostrás, respondés y cerrás la venta en el mismo chat. Es tu local.',
  },
  {
    icon: Camera,
    tone: 'mint',
    name: 'Instagram para mostrar',
    text: 'Vendé por publicaciones y Reels del producto en uso (gancho en los primeros 3 segundos), con link directo a tu WhatsApp.',
  },
  {
    icon: Store,
    tone: 'gold',
    name: 'Facebook Marketplace',
    text: 'Donde la gente de tu zona ya busca y compra. Publicar es gratis, es local y aparecés ante quien justo está buscando.',
  },
]

export default function InstagramSelling() {
  return (
    <Slide align="start" justify="center">
      <Eyebrow index={2} label="Redes como canal de venta" />
      <Title className="max-w-4xl">Dónde vender de verdad, sin complicarte</Title>
      <Lead>Lo que funciona acá no es el carrito de Instagram. Es bastante más simple.</Lead>

      <div className="mt-10 grid w-full gap-5 sm:grid-cols-3">
        {channels.map((c) => (
          <Reveal key={c.name}>
            <div className="flex h-full flex-col rounded-xl border border-line bg-surface/50 p-6">
              <c.icon className={['h-7 w-7', toneText[c.tone]].join(' ')} strokeWidth={1.6} />
              <h3 className="mt-4 font-display text-xl font-semibold text-ink">{c.name}</h3>
              <p className="mt-2 text-ink-dim leading-relaxed">{c.text}</p>
            </div>
          </Reveal>
        ))}
      </div>

      <Callout className="mt-8 max-w-4xl" tone="clay" icon={Info} title="No te compliques">
        Instagram Shopping y Facebook Shops casi nadie los usa por acá. Con el catálogo de
        WhatsApp y una buena foto en el feed, alcanza para arrancar y vender.
      </Callout>
    </Slide>
  )
}

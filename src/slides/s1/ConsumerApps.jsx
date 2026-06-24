import { ShoppingCart, Car, Plane, ArrowUpRight } from 'lucide-react'
import Slide from '../../components/Slide'
import { Eyebrow, Title, Lead, Reveal, IconBadge, Callout, toneText } from '../../components/ui'

const apps = [
  {
    icon: ShoppingCart,
    tone: 'accent',
    name: 'Ratoneando',
    domain: 'ratoneando.ar',
    href: 'https://ratoneando.ar/',
    text: 'Compara precios de productos de supermercado para encontrar dónde está más barato.',
  },
  {
    icon: Car,
    tone: 'gold',
    name: 'ComparaEnCasa',
    domain: 'comparaencasa.com',
    href: 'https://www.comparaencasa.com/',
    text: 'Compara seguros de auto entre aseguradoras para pagar la cuota más baja.',
  },
  {
    icon: Plane,
    tone: 'mint',
    name: 'Turismocity',
    domain: 'turismocity.com.ar',
    href: 'https://www.turismocity.com.ar/',
    text: 'Compara vuelos de distintas aerolíneas para viajar lo más barato posible.',
  },
]

export default function ConsumerApps() {
  return (
    <Slide align="start" justify="center">
      <Eyebrow index={1} label="Panorama actual" />
      <Title className="max-w-4xl">El argentino compara todo — y ya tiene apps para eso</Title>
      <Lead>
        El 85% compara precios antes de comprar. Estas son algunas herramientas que ya usa
        para gastar menos.
      </Lead>

      <div className="mt-10 grid w-full gap-5 sm:grid-cols-3">
        {apps.map((a) => (
          <Reveal key={a.name}>
            <a
              href={a.href}
              target="_blank"
              rel="noreferrer"
              className="group flex h-full flex-col rounded-xl border border-line bg-surface/50 p-6 transition-colors hover:border-ink-mute hover:bg-surface"
            >
              <IconBadge icon={a.icon} tone={a.tone} />
              <h3 className="mt-4 font-display text-xl font-semibold text-ink">{a.name}</h3>
              <p className="mt-2 flex-1 text-sm text-ink-dim leading-relaxed">{a.text}</p>
              <div
                className={[
                  'mt-4 flex items-center gap-1.5 font-mono text-sm',
                  toneText[a.tone],
                ].join(' ')}
              >
                {a.domain}
                <ArrowUpRight
                  className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  strokeWidth={2}
                />
              </div>
            </a>
          </Reveal>
        ))}
      </div>

      <Callout className="mt-8 max-w-4xl" tone="clay">
        Tu cliente ya compara antes de elegir. La pregunta es qué le das vos para que te
        elija más allá del precio: confianza, rapidez y atención.
      </Callout>
    </Slide>
  )
}

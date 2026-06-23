import { Send, Bookmark, Clock, MousePointerClick, Heart, Users, Film } from 'lucide-react'
import Slide from '../../components/Slide'
import { Eyebrow, Title, Lead, PointList, Pill, Callout } from '../../components/ui'

export default function InstagramAlgo() {
  return (
    <Slide align="start" justify="center">
      <Eyebrow index={1} label="Panorama actual" />
      <Title className="max-w-4xl">
        Instagram ya no premia los likes, premia la intención
      </Title>
      <Lead>
        Hay múltiples algoritmos (Feed, Reels, Stories, Explore, Search) y un
        “sistema de audición”: el contenido se prueba en pocos no-seguidores y
        se expande si funciona.
      </Lead>

      <div className="mt-10 grid w-full gap-5 sm:grid-cols-2">
        <div>
          <h3 className="mb-4 font-display text-lg font-semibold text-accent">
            Lo que SUBE el alcance
          </h3>
          <PointList
            tone="accent"
            items={[
              {
                icon: Send,
                title: 'Compartidos por DM',
                text: 'Un share ≈ 15 likes y correlaciona 4x más con intención de compra.',
              },
              { icon: Bookmark, title: 'Guardados', text: 'Señal de valor que el usuario quiere volver a ver.' },
              { icon: Clock, title: 'Tiempo de visualización' },
              { icon: MousePointerClick, title: 'Clics al perfil' },
            ]}
          />
        </div>
        <div>
          <h3 className="mb-4 font-display text-lg font-semibold text-clay">
            Lo que YA NO pesa
          </h3>
          <PointList
            tone="clay"
            items={[
              { icon: Heart, title: 'Likes' },
              { icon: Users, title: 'Cantidad de seguidores' },
            ]}
          />
          <div className="mt-6 flex flex-wrap gap-2">
            <Pill tone="mint">
              <Film className="h-3.5 w-3.5" strokeWidth={1.8} />
              Reels ≈ 65% del descubrimiento
            </Pill>
            <Pill tone="gold">3–5 hashtags específicos + keywords (SEO)</Pill>
          </div>
        </div>
      </div>

      <Callout className="mt-8 max-w-3xl" tone="accent" icon={Film} title="“Your Algorithm” (dic 2025)">
        Tener un nicho claro pasó de ser ventaja a ser requisito de
        supervivencia.
      </Callout>

      <p className="mt-4 font-mono text-[11px] uppercase tracking-wide text-ink-mute">
        Fuentes: GOSO · Sprout Social · Hootsuite
      </p>
    </Slide>
  )
}

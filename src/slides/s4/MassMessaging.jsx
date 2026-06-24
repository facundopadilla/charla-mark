import { ShieldCheck, Users, Gift, Play } from 'lucide-react'
import Slide from '../../components/Slide'
import { Eyebrow, Reveal, PointList } from '../../components/ui'

export default function MassMessaging() {
  return (
    <Slide align="start" justify="center">
      <div className="grid w-full items-center gap-12 lg:grid-cols-2">
        <div>
          <Eyebrow index={4} label="Fidelización y retención" />
          <Reveal
            as="h2"
            className="font-display text-3xl font-bold leading-tight text-ink sm:text-4xl text-balance"
          >
            Una técnica fácil: mandá mensajes masivos sin miedo a los que ya te compraron
            (o no)
          </Reveal>
          <Reveal className="mt-5 max-w-xl text-lg text-ink-dim leading-relaxed text-pretty">
            Tu lista de clientes es oro. Con una difusión bien hecha reactivás ventas en
            minutos — sin spamear ni que te bloqueen.
          </Reveal>

          <PointList
            className="mt-7"
            tone="accent"
            items={[
              {
                icon: ShieldCheck,
                title: 'Solo a quienes te dieron el OK',
                text: 'Con opt-in previo no es spam y no te arriesgás a que bloqueen tu cuenta.',
              },
              {
                icon: Users,
                title: 'Segmentá',
                text: 'No le hables igual al que ya te compró que al que todavía no.',
              },
              {
                icon: Gift,
                title: 'Que cada mensaje ofrezca algo',
                text: 'Novedad, descuento o recordatorio útil — nunca un simple "comprame".',
              },
            ]}
          />
        </div>

        <Reveal>
          <figure className="overflow-hidden rounded-xl border border-line bg-black shadow-card">
            <video
              className="h-auto max-h-[62vh] w-full"
              src="/videos/mensajes-masivos.mp4"
              poster="/videos/mensajes-masivos.jpg"
              controls
              playsInline
              preload="metadata"
            />
          </figure>
          <figcaption className="mt-2 flex items-center gap-2 text-sm text-ink-mute">
            <Play className="h-3.5 w-3.5 fill-current" strokeWidth={0} /> Demo grabada — dale play
          </figcaption>
        </Reveal>
      </div>
    </Slide>
  )
}

import { useState } from 'react'
import { AtSign, BadgeCheck, Phone, Megaphone, ClipboardList, Tag, Play } from 'lucide-react'
import Slide from '../../components/Slide'
import { Eyebrow, Title, Reveal, SourceTag } from '../../components/ui'
import VideoModal from '../../components/VideoModal'

const features = [
  {
    icon: AtSign,
    tone: 'accent',
    title: 'Usernames (@negocio)',
    text: 'Te contactan sin tu número de teléfono. Registrar un buen username temprano es ventaja competitiva.',
  },
  {
    icon: BadgeCheck,
    tone: 'mint',
    title: 'Verificación azul + Business AI',
    text: 'La IA integrada redacta borradores y crea anuncios directamente desde la conversación.',
  },
  {
    icon: Phone,
    tone: 'gold',
    title: 'Calling API',
    text: 'Llamadas dentro del chat: las entrantes son gratis y las salientes se cobran por minuto.',
  },
  {
    icon: Megaphone,
    tone: 'clay',
    title: 'Marketing optimizado con IA',
    text: 'Caso real en Argentina: SegurLine automatizó su WhatsApp con IA para calificar y responder leads, y logró +53% en ventas y +245% en conversión.',
  },
  {
    icon: ClipboardList,
    tone: 'mauve',
    title: 'WhatsApp Flows',
    text: 'Formularios dentro del chat con 72% de completación, frente al 35% de los formularios web.',
    video: 'ucmqoNaIC4U',
  },
  {
    icon: Tag,
    tone: 'accent',
    title: 'Nuevo pricing per-message',
    text: 'Desde julio de 2025 se cobra por mensaje: cada uno debe justificar su costo.',
  },
]

const toneIcon = {
  accent: 'text-accent',
  mint: 'text-mint',
  gold: 'text-gold',
  clay: 'text-clay',
  mauve: 'text-mauve',
}

export default function WhatsApp2026() {
  const [video, setVideo] = useState(null)

  return (
    <Slide align="start" justify="center">
      <Eyebrow index={2} label="Redes como canal de venta" />
      <Title className="max-w-4xl">Lo nuevo de WhatsApp Business en 2026</Title>

      <div className="mt-12 grid w-full gap-5 sm:grid-cols-2">
        {features.map((f) => {
          const clickable = Boolean(f.video)
          const body = (
            <>
              <f.icon
                className={['mt-0.5 h-6 w-6 shrink-0', toneIcon[f.tone]].join(' ')}
                strokeWidth={1.6}
              />
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="font-semibold text-ink">{f.title}</h3>
                  {clickable && (
                    <span className="inline-flex items-center gap-1 rounded-md border border-mauve/40 bg-mauve/10 px-2 py-0.5 text-xs font-medium text-mauve">
                      <Play className="h-3 w-3 fill-current" strokeWidth={0} /> Ver demo
                    </span>
                  )}
                </div>
                <p className="mt-1 text-ink-dim leading-relaxed">{f.text}</p>
              </div>
            </>
          )

          return (
            <Reveal key={f.title}>
              {clickable ? (
                <button
                  type="button"
                  onClick={() => setVideo(f.video)}
                  className="flex h-full w-full items-start gap-4 rounded-xl border border-mauve/30 bg-surface/50 p-6 text-left transition-colors hover:border-mauve/60 hover:bg-surface"
                >
                  {body}
                </button>
              ) : (
                <div className="flex h-full items-start gap-4 rounded-xl border border-line bg-surface/50 p-6">
                  {body}
                </div>
              )}
            </Reveal>
          )
        })}
      </div>

      <SourceTag>PicallEx · Unimento · Cliengo · Caso SegurLine vía Woztell</SourceTag>

      <VideoModal
        open={Boolean(video)}
        videoId={video}
        title="WhatsApp Flows — demo"
        onClose={() => setVideo(null)}
      />
    </Slide>
  )
}

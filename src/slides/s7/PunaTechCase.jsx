import { useState } from 'react'
import { Cpu, Bot, Clapperboard, Globe, Play, ArrowUpRight } from 'lucide-react'
import Slide from '../../components/Slide'
import { Eyebrow, Title, Reveal, PointList, Callout } from '../../components/ui'
import Modal from '../../components/Modal'

const stack = [
  {
    icon: Cpu,
    title: 'Campañas armadas con GLM 5.2',
    text: 'La IA escribió y diseñó las variantes de anuncios para probar.',
  },
  {
    icon: Bot,
    title: 'Agentes de Claude vigilando Meta',
    text: 'Miraban las pruebas A/B y movían la plata a lo que más funcionaba, solos.',
  },
  {
    icon: Clapperboard,
    title: 'Video e imágenes 100% con IA',
    text: 'Todo el contenido visual se generó con Higgsfield. Cero filmación.',
  },
  {
    icon: Globe,
    title: 'El sitio punatech.ar, también con IA',
    text: 'La web del evento se armó con IA, vistosa y en lenguaje simple.',
  },
]

export default function PunaTechCase() {
  const [video, setVideo] = useState(false)

  return (
    <Slide align="start" justify="center">
      <Eyebrow index={7} label="Casos reales" />
      <Title className="max-w-4xl">PunaTech 2026: la campaña que armó la IA</Title>

      <div className="mt-8 grid w-full items-start gap-10 lg:grid-cols-[360px_1fr]">
        {/* Result + budget + video */}
        <div className="flex flex-col gap-5">
          <Reveal>
            <div className="rounded-2xl border border-line bg-surface/50 p-7">
              <div className="flex items-center gap-3">
                <img src="/brand/punatech.jpg" alt="PunaTech" className="h-12 w-12 rounded-full object-cover ring-1 ring-line" />
                <div>
                  <div className="font-semibold text-ink">@punatech.ar</div>
                  <div className="text-sm text-ink-mute">Puna Tech · Salta 2026</div>
                </div>
              </div>
              <div className="mt-6">
                <div className="stat-figure text-6xl text-accent">0 → 1.922</div>
                <div className="mt-2 text-ink-dim">seguidores en menos de 1 mes</div>
              </div>
            </div>
          </Reveal>

          <Reveal>
            <button
              type="button"
              onClick={() => setVideo(true)}
              className="flex w-full items-center justify-center gap-2 rounded-xl border border-accent/40 bg-accent/10 px-5 py-3 font-display font-semibold text-accent transition-colors hover:bg-accent/20"
            >
              <Play className="h-4 w-4 fill-current" strokeWidth={0} />
              Ver el video (100% hecho con IA)
            </button>
          </Reveal>
        </div>

        {/* AI stack */}
        <div>
          <Reveal className="mb-4 text-sm font-medium uppercase tracking-wider text-ink-mute">
            Todo lo hizo la IA
          </Reveal>
          <PointList items={stack} tone="accent" />
        </div>
      </div>

      <Callout className="mt-8 max-w-5xl" tone="gold" icon={Cpu} title="¿El presupuesto de todo esto?">
        $350.000 en pauta + US$5 de GLM 5.2 + US$20 de Claude. Eso fue todo.
      </Callout>

      <Modal open={video} onClose={() => setVideo(false)} maxW="max-w-sm">
        <div className="overflow-hidden rounded-xl border border-line bg-black">
          <iframe
            title="Video PunaTech hecho con IA"
            src="https://www.instagram.com/p/DYN8P4ytaKG/embed"
            className="h-[640px] w-full"
            loading="lazy"
          />
        </div>
        <a
          href="https://www.instagram.com/p/DYN8P4ytaKG/"
          target="_blank"
          rel="noreferrer"
          className="mt-3 flex items-center justify-center gap-1.5 text-sm text-ink-dim hover:text-ink"
        >
          Abrir en Instagram <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={2} />
        </a>
      </Modal>
    </Slide>
  )
}

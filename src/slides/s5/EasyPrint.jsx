import {
  MessageCircle,
  Bot,
  HeartHandshake,
  ArrowDown,
  MapPin,
  ArrowUpRight,
  Sparkles,
} from 'lucide-react'
import Slide from '../../components/Slide'
import { Eyebrow, Title, Lead, Reveal, IconBadge, Callout, SourceTag, Pill } from '../../components/ui'

const steps = [
  {
    icon: MessageCircle,
    tone: 'mint',
    title: 'El cliente escribe por WhatsApp',
    text: 'Una consulta a cualquier hora: precios, productos, tiempos de entrega.',
  },
  {
    icon: Bot,
    tone: 'accent',
    title: 'El bot nativo de Meta responde solo',
    text: 'La IA de WhatsApp resuelve al toque lo repetitivo, sin que nadie tenga que estar pendiente.',
    highlight: true,
  },
  {
    icon: HeartHandshake,
    tone: 'gold',
    title: 'Si no puede, entra Fernanda (la dueña)',
    text: 'Los casos complejos los toma una persona. El cliente nunca queda atrapado con un bot.',
    highlight: true,
  },
]

const toneBorder = {
  accent: 'border-accent/40',
  gold: 'border-gold/40',
  mint: 'border-mint/40',
}

export default function EasyPrint() {
  return (
    <Slide align="start" justify="center">
      <Eyebrow index={5} label="Atención y postventa" />
      <Title className="max-w-4xl">Un caso de acá: EasyPrint</Title>
      <Lead>El bot de Meta atiende lo repetitivo; la dueña resuelve lo que importa.</Lead>

      <div className="mt-8 grid w-full items-start gap-8 lg:grid-cols-[300px_1fr]">
        <Reveal>
          <div className="rounded-2xl border border-line bg-surface/60 p-7 text-center">
            <img
              src="/brand/easyprint.jpg"
              alt="EasyPrint"
              className="mx-auto h-24 w-24 rounded-full object-cover ring-1 ring-line"
            />
            <div className="mt-4 font-display text-2xl font-bold text-ink">EasyPrint</div>
            <div className="text-accent">@easyprint.salta</div>
            <div className="mt-1 text-sm text-ink-mute">Imprenta gráfica salteña</div>
            <div className="mt-3 flex items-center justify-center gap-1.5 text-sm text-ink-dim">
              <MapPin className="h-4 w-4 text-ink-mute" strokeWidth={1.8} /> Salta · 6.185 seguidores
            </div>
            <div className="mt-4 flex justify-center">
              <Pill tone="accent">Tienda en Tiendanube</Pill>
            </div>
            <a
              href="https://www.instagram.com/easyprint.salta/"
              target="_blank"
              rel="noreferrer"
              className="mt-5 inline-flex items-center gap-2 rounded-lg border border-line bg-surface px-4 py-2 text-sm text-ink-dim transition-colors hover:border-ink-mute hover:text-ink"
            >
              Ver en Instagram
              <ArrowUpRight className="h-4 w-4" strokeWidth={2} />
            </a>
          </div>
        </Reveal>

        <div className="flex flex-col gap-2">
          {steps.map((s, i) => (
            <div key={s.title}>
              <Reveal>
                <div
                  className={[
                    'flex items-start gap-4 rounded-xl border bg-surface/50 p-5',
                    s.highlight ? toneBorder[s.tone] : 'border-line',
                  ].join(' ')}
                >
                  <IconBadge icon={s.icon} tone={s.tone} />
                  <div>
                    <h3 className="font-display text-lg font-semibold text-ink">{s.title}</h3>
                    <p className="mt-1 text-ink-dim leading-relaxed">{s.text}</p>
                  </div>
                </div>
              </Reveal>
              {i < steps.length - 1 && (
                <div className="flex justify-center py-1.5">
                  <ArrowDown className="h-5 w-5 text-ink-mute" strokeWidth={2} />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <Callout className="mt-8 max-w-5xl" tone="accent" icon={Sparkles} title="Exactamente lo que vimos">
        IA que asiste, persona que cierra: bot para lo repetitivo, humano para lo que
        importa. Y se atiende solo, las 24 horas.
      </Callout>

      <SourceTag>@easyprint.salta (datos públicos, jun. 2026)</SourceTag>
    </Slide>
  )
}

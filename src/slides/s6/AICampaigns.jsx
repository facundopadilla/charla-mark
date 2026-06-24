import { Bot, PenLine, Image as ImageIcon, Cpu, Sparkles } from 'lucide-react'
import Slide from '../../components/Slide'
import { Eyebrow, Title, Lead, Reveal, Callout } from '../../components/ui'

const tools = [
  {
    icon: Bot,
    tone: 'accent',
    name: 'ChatGPT',
    maker: 'OpenAI',
    free: 'Gratis',
    best: 'Ideas y textos rápidos: copys de anuncios, posteos y calendario de contenido.',
    example: '“Dame 10 ideas de posteos para promocionar mis facturas del finde, con hashtags locales.”',
  },
  {
    icon: PenLine,
    tone: 'mint',
    name: 'Claude',
    maker: 'Anthropic',
    free: 'Gratis',
    best: 'Textos con tu voz de marca: descripciones y emails que no suenan a robot.',
    example: 'Le pasás tu tono (cálido, cercano) y te reescribe las descripciones y los mails de bienvenida.',
  },
  {
    icon: ImageIcon,
    tone: 'gold',
    name: 'Gemini · Nano Banana',
    maker: 'Google',
    free: 'Gratis (con cupo)',
    best: 'Imágenes con texto legible: flyers, mockups y ofertas con tu logo, listos para postear.',
    example: 'Nano Banana arma un flyer “Bolsón de estación $X” prolijo y legible, con tu marca.',
  },
  {
    icon: Cpu,
    tone: 'mauve',
    name: 'GLM 5.2',
    maker: 'Z.AI',
    free: 'Abierto · vía API',
    best: 'Alternativa abierta y económica para generar textos y campañas en lote (técnica).',
    example: 'Si ya programás, lo integrás por API para crear descripciones de productos a escala.',
  },
]

const toneText = {
  accent: 'text-accent',
  gold: 'text-gold',
  mauve: 'text-mauve',
  mint: 'text-mint',
}

export default function AICampaigns() {
  return (
    <Slide align="start" justify="center">
      <Eyebrow index={6} label="Herramientas" />
      <Title className="max-w-4xl">IA para crear tus campañas</Title>
      <Lead>No tenés que ser diseñador ni redactor. Vos dirigís, la IA ejecuta.</Lead>

      <div className="mt-8 grid w-full gap-5 sm:grid-cols-2">
        {tools.map((t) => (
          <Reveal key={t.name}>
            <div className="flex h-full flex-col rounded-xl border border-line bg-surface/50 p-6">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-line bg-surface">
                  <t.icon className={['h-5 w-5', toneText[t.tone]].join(' ')} strokeWidth={1.7} />
                </div>
                <div className="flex-1">
                  <div className="flex items-baseline justify-between gap-2">
                    <h3 className="font-display text-xl font-semibold text-ink">{t.name}</h3>
                    <span className={['font-mono text-[11px] uppercase tracking-wide', toneText[t.tone]].join(' ')}>
                      {t.free}
                    </span>
                  </div>
                  <div className="text-xs text-ink-mute">{t.maker}</div>
                </div>
              </div>
              <p className="mt-3 text-sm text-ink-dim leading-relaxed">{t.best}</p>
              <p className="mt-2 text-sm italic text-ink-mute leading-snug">{t.example}</p>
            </div>
          </Reveal>
        ))}
      </div>

      <Callout className="mt-8 max-w-4xl" tone="gold" icon={Sparkles} title="Vos dirigís, la IA ejecuta">
        Revisá siempre lo que genera: sin tu criterio suena genérica y se parece a todo lo
        demás (acordate del “todo se ve igual”). La IA acelera; la marca la ponés vos.
      </Callout>
    </Slide>
  )
}

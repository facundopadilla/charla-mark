import { Repeat, Wallet, TrendingDown, Smile, ArrowRight, Target } from 'lucide-react'
import Slide from '../../components/Slide'
import { Eyebrow, Title, Lead, Card, Callout, Reveal } from '../../components/ui'

const metrics = [
  {
    icon: Repeat,
    tone: 'accent',
    name: 'Recompra',
    what: '¿Cuántos de tus clientes vuelven a comprar una segunda vez?',
    action: 'Si vuelven pocos, mandá un mensaje post-venta y una oferta para la 2ª compra.',
  },
  {
    icon: Wallet,
    tone: 'gold',
    name: 'Cuánto te deja un cliente',
    what: 'Lo que te gasta a lo largo del tiempo, no en una sola compra.',
    action: 'Si es alto, gastá en retenerlo: sale mucho más barato que conseguir uno nuevo.',
  },
  {
    icon: TrendingDown,
    tone: 'clay',
    name: 'Los que se van',
    what: 'Clientes que te compraban y dejaste de ver (abandono).',
    action: 'Detectá a los que no compran hace meses y reactivalos con un beneficio.',
  },
  {
    icon: Smile,
    tone: 'mint',
    name: '¿Te recomendarían?',
    what: 'Preguntales del 0 al 10 qué tan probable es que te recomienden.',
    action: 'A los de 9–10 pediles reseña o un referido; a los bajos, llamalos y resolvé.',
  },
]

const toneText = {
  accent: 'text-accent',
  gold: 'text-gold',
  clay: 'text-clay',
  mint: 'text-mint',
}

export default function LoyaltyMetrics() {
  return (
    <Slide align="start" justify="center">
      <Eyebrow index={4} label="Fidelización y retención" />
      <Title className="max-w-4xl">Las métricas que de verdad importan</Title>
      <Lead>Pocas, simples y accionables. Qué mira cada una y qué hacés si va mal.</Lead>

      <div className="mt-10 grid w-full gap-5 sm:grid-cols-2">
        {metrics.map((m) => (
          <Reveal key={m.name}>
            <Card className="h-full" tone={m.tone}>
              <div className="flex items-center gap-3">
                <m.icon className={['h-5 w-5 shrink-0', toneText[m.tone]].join(' ')} strokeWidth={1.7} />
                <h3 className="font-display text-xl font-semibold text-ink">{m.name}</h3>
              </div>
              <p className="mt-2 text-ink-dim leading-relaxed">{m.what}</p>
              <div className="mt-4 flex items-start gap-2 rounded-lg bg-surface-2/50 p-3">
                <ArrowRight className={['mt-0.5 h-4 w-4 shrink-0', toneText[m.tone]].join(' ')} strokeWidth={2} />
                <p className="text-sm text-ink-dim leading-snug">
                  <span className={['font-semibold', toneText[m.tone]].join(' ')}>Qué hacer: </span>
                  {m.action}
                </p>
              </div>
            </Card>
          </Reveal>
        ))}
      </div>

      <Callout className="mt-8 max-w-4xl" tone="accent" icon={Target}>
        No midas todo de golpe. Arrancá con una sola: ¿cuántos vuelven a comprar? Si ese
        número sube, vas por buen camino.
      </Callout>
    </Slide>
  )
}

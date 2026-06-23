import { MessageSquare, Sparkles, Workflow, ShieldCheck } from 'lucide-react'
import Slide from '../../components/Slide'
import { Eyebrow, Title, Stat, PointList, Callout } from '../../components/ui'

const stats = [
  {
    value: '82%',
    label: 'prefiere un bot inmediato antes que esperar en cola por un humano.',
    source: 'Adivor',
    tone: 'accent',
    size: 'lg',
  },
  {
    value: 'US$ 80.000 M',
    label: 'en ahorro de costos de contact centers proyectado para 2026.',
    source: 'Gartner',
    tone: 'gold',
    size: 'lg',
  },
  {
    value: '+40–60%',
    label: 'sube la productividad combinando IA para FAQs + humano para negociación y cierre.',
    source: 'Meta / Cliengo',
    tone: 'mint',
    size: 'lg',
  },
]

export default function ChatbotsAI() {
  return (
    <Slide align="start" justify="center">
      <Eyebrow index={5} label="Atención y postventa" />
      <Title className="max-w-4xl">Automatizar sin perder la personalización</Title>

      <div className="mt-10 grid w-full gap-6 sm:grid-cols-3">
        {stats.map((s) => (
          <Stat
            key={s.value}
            value={s.value}
            label={s.label}
            source={s.source}
            tone={s.tone}
            size={s.size}
          />
        ))}
      </div>

      <div className="mt-12 grid w-full gap-8 lg:grid-cols-[1fr_1.05fr] lg:items-start">
        <PointList
          items={[
            {
              icon: MessageSquare,
              title: 'Chatbots',
              text: 'Responden FAQs y resuelven lo repetitivo al instante, 24/7.',
            },
            {
              icon: Sparkles,
              title: 'Copilotos',
              text: 'Asisten al agente: resumen la conversación y redactan respuestas.',
            },
            {
              icon: Workflow,
              title: 'Agentes de IA',
              text: 'Resuelven flujos completos de punta a punta, no solo una pregunta.',
            },
          ]}
        />

        <Callout tone="accent" title="La regla de oro" icon={ShieldCheck}>
          IA que asiste, no que reemplaza: siempre human-in-the-loop y escalado
          humano inteligente. Nunca dejes al cliente atrapado con un bot.
        </Callout>
      </div>
    </Slide>
  )
}

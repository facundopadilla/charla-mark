import {
  Compass,
  ShoppingBag,
  Network,
  HeartHandshake,
  Headset,
  Wrench,
  Trophy,
  ListChecks,
} from 'lucide-react'
import Slide from '../../components/Slide'
import { Eyebrow, Title, Reveal } from '../../components/ui'

const blocks = [
  { n: '01', icon: Compass, title: 'Panorama actual', desc: 'Tendencias 2026, algoritmos e IA, consumidor argentino' },
  { n: '02', icon: ShoppingBag, title: 'Redes como canal de venta', desc: 'WhatsApp, Instagram/Facebook y social commerce' },
  { n: '03', icon: Network, title: 'Omnicanalidad', desc: 'Experiencia consistente y bandeja unificada' },
  { n: '04', icon: HeartHandshake, title: 'Fidelización y retención', desc: 'Por qué retener, programas y métricas clave' },
  { n: '05', icon: Headset, title: 'Atención y postventa', desc: 'Velocidad, chatbots con IA y seguimiento' },
  { n: '06', icon: Wrench, title: 'Herramientas', desc: 'Stack gratuito para arrancar sin invertir' },
  { n: '07', icon: Trophy, title: 'Casos reales', desc: 'Qué hicieron negocios como el tuyo (2024–2026)' },
  { n: '08', icon: ListChecks, title: 'Plan de acción', desc: '8 pasos, errores comunes y contexto argentino' },
]

export default function Agenda() {
  return (
    <Slide align="start" justify="center">
      <Eyebrow index={0} label="Recorrido · 3 horas" />
      <Title>Qué vamos a ver hoy</Title>

      <div className="mt-10 grid w-full gap-3 sm:grid-cols-2">
        {blocks.map((b) => (
          <Reveal key={b.n}>
            <div className="flex items-start gap-4 rounded-xl border border-line bg-surface/40 p-5 transition-colors hover:bg-surface">
              <span className="stat-figure mt-0.5 text-2xl text-ink-mute">{b.n}</span>
              <div className="flex items-start gap-3">
                <b.icon className="mt-0.5 h-5 w-5 shrink-0 text-accent" strokeWidth={1.7} />
                <div>
                  <h3 className="font-display text-lg font-semibold text-ink">{b.title}</h3>
                  <p className="mt-0.5 text-sm text-ink-dim">{b.desc}</p>
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Slide>
  )
}

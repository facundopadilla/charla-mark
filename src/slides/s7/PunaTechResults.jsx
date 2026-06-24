import {
  CalendarDays,
  MousePointerClick,
  TrendingDown,
  Eye,
  Scissors,
  Rocket,
  FileText,
  ArrowUpRight,
} from 'lucide-react'
import Slide from '../../components/Slide'
import { Eyebrow, Title, Lead, Reveal, StatCard, MeterBar, PointList } from '../../components/ui'

const trend = [
  { label: 'Días 1–7', value: 92, display: '$55', tone: 'clay' },
  { label: 'Día 11', value: 50, display: '$30', tone: 'gold' },
  { label: 'Día 13', value: 40, display: '$24', tone: 'mint' },
  { label: 'Mejor reel', value: 27, display: '$16', tone: 'accent' },
]

const how = [
  { icon: Eye, title: 'Miraba todo, varias veces al día', text: 'Mañana, tarde y noche, sin descanso.' },
  { icon: Scissors, title: 'Cortaba lo que salía caro', text: 'Pausaba anuncios que costaban hasta $75 por visita.' },
  { icon: Rocket, title: 'Apostaba a la ganadora', text: 'Más presupuesto al reel “Te pagan por ir”, a $16 la visita.' },
]

export default function PunaTechResults() {
  return (
    <Slide align="start" justify="center">
      <Eyebrow index={7} label="Casos reales" />
      <Title className="max-w-4xl">El agente de IA que manejó la pauta, solo</Title>
      <Lead>
        Un agente de Claude revisaba las campañas, frenaba lo que no rendía y le ponía más
        plata a lo que funcionaba — sin nadie encima.
      </Lead>

      <div className="mt-7 grid w-full gap-4 sm:grid-cols-3">
        <StatCard icon={CalendarDays} tone="mint" value="13" label="días de campaña optimizada" />
        <StatCard icon={MousePointerClick} tone="gold" value="4.062" label="visitas al sitio del evento" />
        <StatCard icon={TrendingDown} tone="accent" value="−73%" label="bajó el costo por visita: de $55 a $16" />
      </div>

      <div className="mt-6 grid w-full gap-8 lg:grid-cols-2">
        <Reveal>
          <div className="rounded-xl border border-line bg-surface/50 p-6">
            <div className="mb-4 text-sm font-semibold text-ink">El costo por visita se desplomó</div>
            <div className="flex flex-col gap-4">
              {trend.map((t) => (
                <MeterBar key={t.label} label={t.label} value={t.value} display={t.display} tone={t.tone} />
              ))}
            </div>
          </div>
        </Reveal>

        <div>
          <Reveal className="mb-3 text-sm font-medium uppercase tracking-wider text-ink-mute">
            Cómo trabajó el agente
          </Reveal>
          <PointList items={how} tone="accent" />
        </div>
      </div>

      <Reveal className="mt-6 flex flex-wrap gap-3">
        <a
          href="/brand/punatech-informe.html"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-lg border border-accent/40 bg-accent/10 px-4 py-2.5 text-sm font-medium text-accent transition-colors hover:bg-accent/20"
        >
          <FileText className="h-4 w-4" strokeWidth={1.8} /> Ver el informe completo
        </a>
        <a
          href="https://punatech.ar"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-lg border border-line bg-surface/60 px-4 py-2.5 text-sm text-ink-dim transition-colors hover:border-ink-mute hover:text-ink"
        >
          Ver el sitio (hecho con IA) <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={2} />
        </a>
      </Reveal>
    </Slide>
  )
}

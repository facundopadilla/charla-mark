import { Zap } from 'lucide-react'
import Slide from '../../components/Slide'
import { Eyebrow, Title, Callout } from '../../components/ui'
import { DonutChartCard } from '../../components/charts'

const data = [
  { name: 'Facebook', value: 39 },
  { name: 'Instagram', value: 29 },
  { name: 'WhatsApp', value: 14 },
  { name: 'Otras', value: 18 },
]

export default function MetaSocialCommerce() {
  return (
    <Slide align="start" justify="center">
      <Eyebrow index={1} label="Panorama actual" />
      <Title className="max-w-4xl">
        El 82% del social commerce de LATAM pasa por Meta
      </Title>

      <div className="mt-10 grid w-full gap-5 lg:grid-cols-2 lg:items-center">
        <DonutChartCard
          data={data}
          unit="%"
          title="Compras sociales en LATAM por plataforma"
          note="Fuente: EssenceMediacom"
          centerLabel="82% Meta"
          height={320}
        />

        <Callout tone="accent" icon={Zap} title="La pauta con IA ya gana">
          Las campañas con IA de Meta (Advantage+) y Google (Performance Max)
          superan a las manuales en ROAS y costo de adquisición.
          <span className="mt-3 block font-mono text-[11px] uppercase tracking-wide text-ink-mute">
            Fuente: Thunderbit
          </span>
        </Callout>
      </div>
    </Slide>
  )
}

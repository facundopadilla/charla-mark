import { MessageCircle, Activity, Users, RefreshCw } from 'lucide-react'
import Slide from '../../components/Slide'
import { Eyebrow, Title, Stat, PointList } from '../../components/ui'

export default function PostSale() {
  return (
    <Slide align="start" justify="center">
      <Eyebrow index={5} label="Atención y postventa" />
      <Title className="max-w-4xl">El seguimiento postventa genera recomendaciones</Title>

      <div className="mt-12 grid w-full gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
        <Stat
          value="80%"
          label="de las ventas requiere 5 o más seguimientos, pero la mayoría de los vendedores se rinde después del segundo."
          source="Avanzia"
          tone="accent"
          size="xl"
        />

        <PointList
          items={[
            {
              icon: MessageCircle,
              title: 'Encuestas postventa por WhatsApp',
              text: 'Pedí reseñas en Google aprovechando la alta apertura del canal.',
            },
            {
              icon: Activity,
              title: 'Seguimiento de uso',
              text: 'Ofrecé upgrades y complementos en el momento justo, cuando aportan valor.',
            },
            {
              icon: Users,
              title: 'Referencias y testimonios',
              text: 'Pedíselos a los promotores (NPS alto) con un bono de referidos.',
            },
            {
              icon: RefreshCw,
              title: 'Cerrá el loop con automatización',
              text: 'Que ningún seguimiento dependa de la memoria de un vendedor.',
            },
          ]}
        />
      </div>

      <p className="mt-10 font-mono text-[11px] uppercase tracking-wide text-ink-mute">
        Fuente: Treble, Avanzia
      </p>
    </Slide>
  )
}

import { Bot, Wand2, Search, ShieldCheck, Compass } from 'lucide-react'
import Slide from '../../components/Slide'
import { Eyebrow, Title, StatCard, PointList } from '../../components/ui'

export default function AiAgentic() {
  return (
    <Slide align="start" justify="center">
      <Eyebrow index={1} label="Panorama actual" />
      <Title className="max-w-4xl">De automatizar tareas a agentes que deciden</Title>

      <div className="mt-12 grid w-full gap-5 sm:grid-cols-2">
        <StatCard
          icon={Bot}
          tone="accent"
          value="≈ US$ 1 billón"
          label="mercado global de publicidad digital proyectado para 2026."
          source="AdCellerant"
        />
        <StatCard
          icon={Wand2}
          tone="gold"
          value="46%"
          label="ya usa IA para generar, testear y optimizar variaciones creativas a escala."
          source="AdCellerant"
        />
      </div>

      <PointList
        className="mt-10 max-w-3xl"
        tone="mint"
        items={[
          {
            icon: Search,
            title: 'El descubrimiento se mueve hacia la IA y las redes',
            text: 'Ya no es solo Google. Nace el GEO: optimización para motores generativos.',
          },
          {
            icon: ShieldCheck,
            title: 'El marco EEAT define qué contenido eligen los modelos',
            text: 'Experiencia, expertise, autoridad y confianza pasan a ser criterios de ranking.',
          },
          {
            icon: Compass,
            title: 'Por ahora la IA apoya, no cierra',
            text: 'Gartner: la IA potencia más el descubrimiento que la transacción.',
          },
        ]}
      />
    </Slide>
  )
}

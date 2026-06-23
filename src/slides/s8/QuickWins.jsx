import { Gift, MessageCircle, Video, CalendarDays, Filter } from 'lucide-react'
import Slide from '../../components/Slide'
import { Eyebrow, Title, Lead, PointList } from '../../components/ui'

export default function QuickWins() {
  return (
    <Slide align="start" justify="center">
      <Eyebrow index={8} label="Plan de acción" />
      <Title className="max-w-4xl">Victorias rápidas con bajo presupuesto</Title>
      <Lead>
        Resultados concretos sin inversión inicial: por dónde empezar para mover
        la aguja esta misma semana.
      </Lead>

      <PointList
        className="mt-10 max-w-3xl"
        items={[
          {
            icon: Gift,
            title: 'Stack gratuito para arrancar',
            text: 'Herramientas sin costo para empezar a vender y automatizar sin inversión.',
          },
          {
            icon: MessageCircle,
            title: 'WhatsApp como canal central',
            text: 'Concentrar venta y atención en el canal que más convierte en LATAM.',
          },
          {
            icon: Video,
            title: 'Contenido orgánico + microinfluencers',
            text: 'Video orgánico y microinfluencers por comisión: alcance sin costo fijo.',
          },
          {
            icon: CalendarDays,
            title: 'Aprovechar el calendario argentino',
            text: 'Hot Sale en mayo, CyberMonday y Black Friday con email + notificaciones + promos coordinadas.',
          },
          {
            icon: Filter,
            title: 'Empezar por el cuello de botella más doloroso',
            text: 'Automatizar primero el seguimiento, la calificación o las cotizaciones, no todo el día uno.',
          },
        ]}
      />
    </Slide>
  )
}

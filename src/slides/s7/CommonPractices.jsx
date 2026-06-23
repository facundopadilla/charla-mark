import { Layers, Timer, UserCheck, Sparkles, BarChart3, Users, Link2 } from 'lucide-react'
import Slide from '../../components/Slide'
import { Eyebrow, Title, Lead, PointList } from '../../components/ui'

export default function CommonPractices() {
  return (
    <Slide align="start" justify="center">
      <Eyebrow index={7} label="Casos reales" />
      <Title className="max-w-4xl">Qué tienen en común todos los casos</Title>
      <Lead>
        No fue suerte ni presupuesto. Los mismos siete patrones se repiten en cada negocio que creció.
      </Lead>

      <PointList
        className="mt-10 max-w-3xl"
        items={[
          {
            icon: Layers,
            title: 'Implementación gradual por fases',
            text: 'Empezaron por un caso de uso concreto y escalaron. Nunca "de golpe".',
          },
          {
            icon: Timer,
            title: 'Velocidad de respuesta como diferenciador',
            text: 'Responder en menos de 2 a 5 minutos es lo que separa la cita ganada de la perdida.',
          },
          {
            icon: UserCheck,
            title: 'Personalización y trato individual',
            text: 'El cliente siente que le hablan a él, no a una lista.',
          },
          {
            icon: Sparkles,
            title: 'Automatización inteligente con toque humano',
            text: 'La IA filtra y agiliza; la persona cierra y cuida la relación.',
          },
          {
            icon: BarChart3,
            title: 'Medición constante, antes y después',
            text: 'Sin números de partida no hay forma de probar el resultado.',
          },
          {
            icon: Users,
            title: 'Liderazgo del dueño y capacitación del equipo',
            text: 'El cambio lo empuja quien manda y lo sostiene un equipo entrenado.',
          },
          {
            icon: Link2,
            title: 'WhatsApp integrado al CRM, inventario y pagos',
            text: 'El canal no vive aislado: conecta con todo el flujo comercial.',
          },
        ]}
      />
    </Slide>
  )
}

import { Brain, TrendingUp, ScanSearch } from 'lucide-react'
import Slide from '../../components/Slide'
import { Eyebrow, Title, Lead, PointList } from '../../components/ui'

export default function Hook() {
  return (
    <Slide align="start" justify="center">
      <Eyebrow index={0} label="Por qué esta charla, ahora" />
      <Title className="max-w-4xl">2025–2026 fue un punto de inflexión</Title>
      <Lead>
        Tres cosas cambiaron a la vez. Entenderlas define si tu negocio crece o
        se vuelve invisible este año.
      </Lead>

      <PointList
        className="mt-10 max-w-3xl"
        items={[
          {
            icon: Brain,
            title: 'La IA dejó de ser experimento y pasó a ser infraestructura',
            text: '95% de los marketers ya prueba IA para producción creativa. 2026 es el año en que se pasa de “testear” a “confiar”.',
          },
          {
            icon: TrendingUp,
            title: 'Los algoritmos se reordenaron alrededor de la intención',
            text: 'Likes y seguidores perdieron peso. Hoy manda lo que la gente comparte por DM y guarda.',
          },
          {
            icon: ScanSearch,
            title: 'El consumidor argentino se volvió más racional y mobile-first',
            text: 'Compara precios, valora cuotas y compra desde el celular. La ventaja ya no es estar; es convertir y retener.',
          },
        ]}
      />
    </Slide>
  )
}

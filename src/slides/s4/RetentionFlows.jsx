import { Gift, ShoppingCart, UserCheck, RefreshCw, Mail, MessageCircle, Plug } from 'lucide-react'
import Slide from '../../components/Slide'
import { Eyebrow, Title, PointList, Comparison, Callout } from '../../components/ui'

const flows = [
  {
    icon: Gift,
    title: 'Flujo de bienvenida',
    text: 'Se dispara al suscribirse o tras la primera compra.',
  },
  {
    icon: ShoppingCart,
    title: 'Recuperación de carrito abandonado',
    text: 'WhatsApp + email: uno de los flujos de mayor retorno.',
  },
  {
    icon: UserCheck,
    title: 'Seguimiento posventa',
    text: 'Encuesta de satisfacción + productos complementarios.',
  },
  {
    icon: RefreshCw,
    title: 'Reactivación',
    text: 'Recupera leads fríos y clientes inactivos.',
  },
]

export default function RetentionFlows() {
  return (
    <Slide align="start" justify="center">
      <Eyebrow index={4} label="Fidelización y retención" />
      <Title className="max-w-4xl">El vínculo se sostiene con flujos automatizados</Title>

      <PointList className="mt-10 max-w-3xl" items={flows} />

      <Comparison
        className="mt-10 w-full"
        left={{
          title: 'Email',
          icon: Mail,
          rows: [
            { label: 'Fuerte en', value: 'Newsletters' },
            { label: 'Mejor para', value: 'Nutrición' },
            { label: 'Ventaja', value: 'Retorno' },
          ],
        }}
        right={{
          title: 'WhatsApp',
          icon: MessageCircle,
          win: true,
          rows: [
            { label: 'Fuerte en', value: 'Inmediatez' },
            { label: 'Apertura', value: '~98%' },
            { label: 'Mejor para', value: 'Cierre' },
          ],
        }}
      />

      <Callout className="mt-8 max-w-4xl" tone="accent" icon={Plug}>
        Usá cada canal para lo que mejor hace y conectalos a un CRM: el dato
        unifica el vínculo en lugar de fragmentarlo.
      </Callout>
    </Slide>
  )
}

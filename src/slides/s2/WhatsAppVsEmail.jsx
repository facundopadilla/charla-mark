import { MessageCircle, Mail, Sparkles } from 'lucide-react'
import Slide from '../../components/Slide'
import { Eyebrow, Title, Comparison, Callout, SourceTag } from '../../components/ui'

export default function WhatsAppVsEmail() {
  return (
    <Slide align="start" justify="center">
      <Eyebrow index={2} label="Redes como canal de venta" />
      <Title className="max-w-4xl">WhatsApp vs Email: no hay comparación</Title>

      <Comparison
        className="mt-12"
        left={{
          title: 'WhatsApp',
          icon: MessageCircle,
          win: true,
          rows: [
            { label: 'Tasa de apertura', value: '~98%' },
            { label: 'Conversión chat-a-venta', value: '8–15%' },
            { label: 'Con IA puede convertir', value: '13–19x' },
          ],
        }}
        right={{
          title: 'Email',
          icon: Mail,
          rows: [
            { label: 'Tasa de apertura', value: '20–30%' },
            { label: 'Conversión', value: '1,5–3%' },
            { label: 'Inmediatez', value: 'Baja' },
          ],
        }}
      />

      <Callout className="mt-8 max-w-3xl" tone="accent" icon={Sparkles}>
        La conversación asistida por IA puede convertir 13–19 veces más que un
        eCommerce móvil.
      </Callout>

      <SourceTag>Aurora Inbox · FastStrat · Infobip</SourceTag>
    </Slide>
  )
}

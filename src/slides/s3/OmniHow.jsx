import { Inbox, MessageSquare, Mail, Store, RefreshCw } from 'lucide-react'
import Slide from '../../components/Slide'
import { Eyebrow, Title, Lead, PointList, Card, SourceTag, Reveal } from '../../components/ui'

export default function OmniHow() {
  return (
    <Slide align="start" justify="center">
      <Eyebrow index={3} label="Omnicanalidad" />
      <Title className="max-w-4xl">El corazón: bandeja unificada e historial centralizado</Title>
      <Lead>
        Un pedido por WhatsApp, una consulta por Facebook y un mail de seguimiento
        quedan en un mismo lugar.
      </Lead>

      <PointList
        className="mt-9 max-w-3xl"
        items={[
          {
            icon: Inbox,
            title: 'Contexto completo del cliente',
            text: 'Toda la conversación, sin importar el canal, vive en una sola bandeja.',
          },
          {
            icon: MessageSquare,
            title: 'Menos pérdida de información',
            text: 'Nada se cae entre canales: cada mensaje queda registrado y trazable.',
          },
          {
            icon: Mail,
            title: 'Resolución más rápida',
            text: 'El equipo responde con el historial a la vista, sin volver a preguntar.',
          },
        ]}
      />

      <div className="mt-10 grid w-full gap-5 sm:grid-cols-2">
        <Reveal>
          <Card tone="accent" className="h-full">
            <div className="flex items-center gap-2">
              <Store className="h-5 w-5 text-accent" strokeWidth={1.7} />
              <h3 className="font-display text-xl font-semibold text-ink">Click-and-collect</h3>
            </div>
            <p className="mt-3 text-ink-dim leading-relaxed">
              El cliente compra online y retira en el local. Reduce costos
              logísticos y acerca a la gente al punto de venta físico.
            </p>
          </Card>
        </Reveal>

        <Reveal>
          <Card tone="mint" className="h-full">
            <div className="flex items-center gap-2">
              <RefreshCw className="h-5 w-5 text-mint" strokeWidth={1.7} />
              <h3 className="font-display text-xl font-semibold text-ink">Sincronización de catálogo</h3>
            </div>
            <p className="mt-3 text-ink-dim leading-relaxed">
              Un mismo catálogo entre tienda online, catálogo de WhatsApp y
              etiquetado de Instagram y Facebook. Precios y stock siempre alineados.
            </p>
          </Card>
        </Reveal>
      </div>

      <SourceTag>Fuente: OpenWebinars · Harmonix · Infobae</SourceTag>
    </Slide>
  )
}

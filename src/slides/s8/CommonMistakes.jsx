import {
  UserX,
  Heart,
  Megaphone,
  Wallet,
  TicketPercent,
  PhoneOff,
  Mail,
  Bot,
} from 'lucide-react'
import Slide from '../../components/Slide'
import { Eyebrow, Title, Reveal } from '../../components/ui'

const mistakes = [
  {
    icon: UserX,
    title: 'Contenido centrado en uno mismo',
    text: 'Hablar del producto y no del cliente: el error número uno del contenido.',
  },
  {
    icon: Heart,
    title: 'Seguir métricas de vanidad',
    text: 'Medir likes en vez de CLV, recompra y conversión.',
  },
  {
    icon: Megaphone,
    title: 'Spam masivo sin segmentar',
    text: 'Difusión genérica en WhatsApp: erosiona la confianza y puede bloquear la cuenta.',
  },
  {
    icon: Wallet,
    title: 'Depender 100% de la pauta paga',
    text: 'Solo ~12% vende de forma consistente sin pauta. El orgánico no es opcional.',
  },
  {
    icon: TicketPercent,
    title: 'Sobre-descontar',
    text: 'El descuento permanente abarata la marca: combinarlo con valor agregado.',
  },
  {
    icon: PhoneOff,
    title: 'No dar seguimiento',
    text: 'El 80% de las ventas requiere 5 o más contactos antes de cerrar.',
  },
  {
    icon: Mail,
    title: 'Tratar WhatsApp como email',
    text: 'Mensajes genéricos y unidireccionales: el canal pide conversación, no broadcast.',
  },
  {
    icon: Bot,
    title: 'Chatbot sin salida a un humano',
    text: 'Atrapar al cliente en el bot sin opción de pasar a una persona.',
  },
]

export default function CommonMistakes() {
  return (
    <Slide align="start" justify="center">
      <Eyebrow index={8} label="Plan de acción" />
      <Title className="max-w-4xl">Los errores más comunes (y cómo evitarlos)</Title>

      <div className="mt-10 grid w-full gap-4 sm:grid-cols-2">
        {mistakes.map((m) => (
          <Reveal key={m.title}>
            <div className="flex h-full items-start gap-3 rounded-xl border border-line bg-surface/50 p-5 border-l-2 border-l-clay">
              <m.icon className="mt-0.5 h-5 w-5 shrink-0 text-clay" strokeWidth={1.7} />
              <div>
                <h3 className="font-display text-lg font-semibold leading-tight text-ink text-balance">
                  {m.title}
                </h3>
                <p className="mt-1.5 text-sm text-ink-dim leading-relaxed">{m.text}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Slide>
  )
}

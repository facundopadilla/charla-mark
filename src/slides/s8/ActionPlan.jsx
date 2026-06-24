import {
  Target,
  MessageCircle,
  Video,
  Users,
  Tags,
  Repeat,
  Headphones,
  TrendingUp,
} from 'lucide-react'
import Slide from '../../components/Slide'
import { Eyebrow, Title, Lead, Reveal } from '../../components/ui'

const steps = [
  {
    n: 1,
    icon: Target,
    title: 'Definí qué vendés y a quién',
    text: 'En una frase clara, sin “vendo de todo”.',
    example: '“Tortas de cumpleaños en Salta”, no “repostería”.',
  },
  {
    n: 2,
    icon: MessageCircle,
    title: 'Armá tu WhatsApp Business',
    text: 'Catálogo con fotos y precios + respuestas automáticas.',
    example: 'Que al escribir “hola” ya reciba tus horarios y el menú.',
  },
  {
    n: 3,
    icon: Video,
    title: 'Mostrá tu producto en video',
    text: 'Con el celular, y enganchá en los primeros 3 segundos.',
    example: 'La torta saliendo del horno, no una foto quieta.',
  },
  {
    n: 4,
    icon: Users,
    title: 'Sumá quien te recomiende',
    text: '3–5 cuentas chicas de tu zona, por canje o pago por video.',
    example: 'Les mandás una torta y la muestran en sus historias.',
  },
  {
    n: 5,
    icon: Tags,
    title: 'Ordená tus clientes (gratis)',
    text: 'Etiquetas de WhatsApp + una planilla. Ese es tu CRM.',
    example: 'Etiquetas: “pidió”, “pagó”, “cliente que volvió”.',
  },
  {
    n: 6,
    icon: Repeat,
    title: 'Hacé que vuelvan',
    text: 'Escribiles con un motivo, nunca spam.',
    example: 'Tarjeta de sellos: en la 10ª compra, una gratis.',
  },
  {
    n: 7,
    icon: Headphones,
    title: 'Respondé rápido',
    text: 'En minutos. Un bot para lo típico, vos para cerrar.',
    example: 'El bot dice el precio; vos cerrás y pedís reseña en Google.',
  },
  {
    n: 8,
    icon: TrendingUp,
    title: 'Mirá un número y mejorá',
    text: 'Arrancá con uno solo: ¿cuántos vuelven a comprar?',
    example: 'Si cada mes recompran más, vas por buen camino.',
  },
]

export default function ActionPlan() {
  return (
    <Slide align="start" justify="center">
      <Eyebrow index={8} label="Plan de acción" />
      <Title className="max-w-4xl">Plan de acción en 8 pasos</Title>
      <Lead>Sin vueltas técnicas: ocho pasos con ejemplos para arrancar esta semana.</Lead>

      <div className="mt-8 grid w-full gap-4 sm:grid-cols-2">
        {steps.map((s) => (
          <Reveal key={s.n}>
            <div className="flex h-full items-start gap-4 rounded-xl border border-line bg-surface/50 p-5">
              <span className="stat-figure flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-line bg-surface text-lg text-accent">
                {s.n}
              </span>
              <div>
                <div className="flex items-center gap-2">
                  <s.icon className="h-4 w-4 shrink-0 text-accent" strokeWidth={1.7} />
                  <h3 className="font-display text-lg font-semibold leading-tight text-ink">
                    {s.title}
                  </h3>
                </div>
                <p className="mt-1.5 text-sm text-ink-dim leading-relaxed">{s.text}</p>
                <p className="mt-1 text-sm italic text-ink-mute leading-snug">Ej: {s.example}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Slide>
  )
}

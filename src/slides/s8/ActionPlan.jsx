import {
  Target,
  Rocket,
  Video,
  ShoppingBag,
  Workflow,
  Heart,
  Headphones,
  LineChart,
} from 'lucide-react'
import Slide from '../../components/Slide'
import { Eyebrow, Title, Reveal } from '../../components/ui'

const steps = [
  {
    n: 1,
    icon: Target,
    title: 'Definir propuesta de valor y nicho',
    text: 'En 2026 el nicho claro es requisito algorítmico, no una opción.',
  },
  {
    n: 2,
    icon: Rocket,
    title: 'Montar la presencia base (semana 1)',
    text: 'WhatsApp Business con catálogo + Business AI + username @tunegocio; perfil IG/FB optimizado; opcional tienda en Tiendanube.',
  },
  {
    n: 3,
    icon: Video,
    title: 'Estrategia de contenido',
    text: 'Video corto del producto en uso, gancho en 3s, contenido para guardar y compartir por DM; 3–5 hashtags + keywords.',
  },
  {
    n: 4,
    icon: ShoppingBag,
    title: 'Activar social commerce',
    text: 'Etiquetar productos, links de pago, probar live shopping y 3–5 microinfluencers por comisión.',
  },
  {
    n: 5,
    icon: Workflow,
    title: 'Captura y automatización',
    text: 'Opt-in + flujos (bienvenida, carrito abandonado, posventa) con Brevo/Mailrelay + WhatsApp; CRM gratuito (HubSpot).',
  },
  {
    n: 6,
    icon: Heart,
    title: 'Fidelización',
    text: 'Programa simple de puntos o referidos; email + WhatsApp segmentado, no difusión masiva.',
  },
  {
    n: 7,
    icon: Headphones,
    title: 'Atención y postventa',
    text: 'Responder en <2 min (bot FAQs + humano para el cierre); encuesta postventa por WhatsApp + reseña en Google.',
  },
  {
    n: 8,
    icon: LineChart,
    title: 'Medir y optimizar',
    text: 'Conversión por canal, tiempo de respuesta, recompra, CLV y NPS; A/B testing mensual.',
  },
]

export default function ActionPlan() {
  return (
    <Slide align="start" justify="center">
      <Eyebrow index={8} label="Plan de acción" />
      <Title className="max-w-4xl">Plan de acción en 8 pasos</Title>

      <div className="mt-10 grid w-full gap-4 sm:grid-cols-2">
        {steps.map((s) => (
          <Reveal key={s.n}>
            <div className="flex h-full items-start gap-4 rounded-xl border border-line bg-surface/50 p-5">
              <span className="stat-figure flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-line bg-surface text-lg text-accent">
                {s.n}
              </span>
              <div>
                <div className="flex items-center gap-2">
                  <s.icon className="h-4 w-4 shrink-0 text-accent" strokeWidth={1.7} />
                  <h3 className="font-display text-lg font-semibold leading-tight text-ink text-balance">
                    {s.title}
                  </h3>
                </div>
                <p className="mt-1.5 text-sm text-ink-dim leading-relaxed">{s.text}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Slide>
  )
}

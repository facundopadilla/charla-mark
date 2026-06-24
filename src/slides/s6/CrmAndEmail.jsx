import { Tags, Database, Users, MessageCircle, Mail, PiggyBank } from 'lucide-react'
import Slide from '../../components/Slide'
import { Eyebrow, Title, Lead, Reveal, Callout, toneText } from '../../components/ui'

const stages = [
  {
    icon: Tags,
    tone: 'accent',
    when: 'Arrancando',
    text: 'Etiquetas de WhatsApp Business (“pedido nuevo”, “pago pendiente”, “volvió”) + una planilla de Google Sheets. Gratis y sin curva.',
  },
  {
    icon: Database,
    tone: 'gold',
    when: 'Creciendo',
    text: 'HubSpot CRM gratis (en español, sin límite de contactos) o Cliengo, que es argentino (chatbot + etiquetas).',
  },
  {
    icon: Users,
    tone: 'mint',
    when: 'Varios atendiendo',
    text: 'Cliengo o Leadsales: pensados para vender por WhatsApp en equipo, sin pisarse.',
  },
]

export default function CrmAndEmail() {
  return (
    <Slide align="start" justify="center">
      <Eyebrow index={6} label="Herramientas" />
      <Title className="max-w-4xl">¿Qué es un CRM? (y dónde entra el email)</Title>
      <Lead>
        Un CRM es solo una libreta ordenada de tus clientes: quién es cada uno, qué te
        compró y qué tenés que seguir. Nada más.
      </Lead>

      <div className="mt-8 grid w-full gap-8 lg:grid-cols-2">
        {/* CRM por etapa */}
        <div>
          <Reveal className="mb-4 text-sm font-medium uppercase tracking-wider text-ink-mute">
            Tu CRM según la etapa
          </Reveal>
          <div className="flex flex-col gap-3">
            {stages.map((s) => (
              <Reveal key={s.when}>
                <div className="flex items-start gap-4 rounded-xl border border-line bg-surface/50 p-5">
                  <s.icon className={['mt-0.5 h-6 w-6 shrink-0', toneText[s.tone]].join(' ')} strokeWidth={1.6} />
                  <div>
                    <div className="font-semibold text-ink">{s.when}</div>
                    <p className="mt-1 text-sm text-ink-dim leading-relaxed">{s.text}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Email vs WhatsApp */}
        <div>
          <Reveal className="mb-4 text-sm font-medium uppercase tracking-wider text-ink-mute">
            ¿Y el email? No es contradicción
          </Reveal>
          <div className="flex flex-col gap-3">
            <Reveal>
              <div className="rounded-xl border border-accent/40 bg-surface/50 p-5">
                <div className="flex items-center gap-2">
                  <MessageCircle className="h-5 w-5 text-accent" strokeWidth={1.7} />
                  <h3 className="font-display text-lg font-semibold text-ink">WhatsApp = cerrar HOY</h3>
                </div>
                <p className="mt-2 text-sm text-ink-dim leading-relaxed">
                  1 a 1, ~98% de apertura. Responder, mandar el link de pago, avisar que
                  llegó el pedido, recuperar al que no compró.
                </p>
              </div>
            </Reveal>
            <Reveal>
              <div className="rounded-xl border border-line bg-surface/50 p-5">
                <div className="flex items-center gap-2">
                  <Mail className="h-5 w-5 text-ink-dim" strokeWidth={1.7} />
                  <h3 className="font-display text-lg font-semibold text-ink">Email = recompra a futuro</h3>
                </div>
                <p className="mt-2 text-sm text-ink-dim leading-relaxed">
                  Newsletter, lanzamientos y contenido. Y, sobre todo, una lista que es
                  TUYA: no dependés del algoritmo ni de que te bloqueen.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </div>

      <Callout className="mt-8 max-w-4xl" tone="gold" icon={PiggyBank} title="Regla práctica">
        Arrancá 100% WhatsApp para vender y atender. Sumá email recién cuando ya tengas
        clientes que quieras hacer volver. Y no pagues un CRM hasta que NO tenerlo te
        empiece a costar ventas.
      </Callout>
    </Slide>
  )
}

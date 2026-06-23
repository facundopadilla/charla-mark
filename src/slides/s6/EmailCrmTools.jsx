import Slide from '../../components/Slide'
import { Eyebrow, Title, Lead, Reveal, Pill } from '../../components/ui'

// Email, CRM and automation tools with their free-plan limits and strengths.
const tools = [
  {
    name: 'Brevo',
    tone: 'accent',
    plan: '~300 emails/día · contactos ilimitados',
    strength: 'Email, SMS, WhatsApp, chat y CRM en un solo lugar. Soporte en español.',
  },
  {
    name: 'Mailrelay',
    tone: 'mint',
    plan: 'Hasta 80.000 emails/mes · 20.000 contactos',
    strength: 'El plan gratuito más generoso del mercado para volumen de envíos.',
  },
  {
    name: 'MailerLite',
    tone: 'gold',
    plan: '1.000 suscriptores · 12.000 emails',
    strength: 'Muy fácil de usar e incluye landing pages sin costo.',
  },
  {
    name: 'Doppler',
    tone: 'clay',
    plan: 'Gratuito (LATAM)',
    strength: 'Email marketing en español con una comunidad de soporte activa.',
  },
  {
    name: 'SendPulse',
    tone: 'mauve',
    plan: '500 suscriptores · 15.000 emails',
    strength: 'Multicanal: email, chatbots, web push y SMS.',
  },
  {
    name: 'HubSpot CRM',
    tone: 'accent',
    plan: 'Gratis · usuarios ilimitados',
    strength: 'CRM completo con pipeline de ventas integrado.',
  },
]

const borderMap = {
  accent: 'border-l-accent',
  gold: 'border-l-gold',
  clay: 'border-l-clay',
  mauve: 'border-l-mauve',
  mint: 'border-l-mint',
}

export default function EmailCrmTools() {
  return (
    <Slide align="start" justify="center">
      <Eyebrow index={6} label="Herramientas" />
      <Title className="max-w-4xl">Email, CRM y automatización</Title>
      <Lead>
        Seis plataformas con plan gratuito para empezar a vender por email y
        ordenar tus contactos.
      </Lead>

      <div className="mt-10 grid w-full gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {tools.map((t) => (
          <Reveal key={t.name}>
            <div
              className={[
                'flex h-full flex-col rounded-xl border border-line bg-surface/50 p-6 border-l-2',
                borderMap[t.tone],
              ].join(' ')}
            >
              <h3 className="font-display text-xl font-semibold text-ink">{t.name}</h3>
              <Pill className="mt-3 self-start" tone={t.tone}>
                {t.plan}
              </Pill>
              <p className="mt-4 text-sm text-ink-dim leading-relaxed">{t.strength}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </Slide>
  )
}

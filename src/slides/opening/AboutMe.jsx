import { MapPin, Brain, Linkedin, Github, Globe, ArrowUpRight } from 'lucide-react'
import Slide from '../../components/Slide'
import { Kicker, Reveal } from '../../components/ui'

const socials = [
  { label: 'facundopadilla.com', href: 'https://facundopadilla.com', icon: Globe },
  { label: 'in/facundopadilla', href: 'https://www.linkedin.com/in/facundopadilla/', icon: Linkedin },
  { label: 'github.com/facundopadilla', href: 'https://github.com/facundopadilla', icon: Github },
]

export default function AboutMe() {
  return (
    <Slide align="start" justify="center">
      <div className="grid w-full items-center gap-12 lg:grid-cols-[320px_1fr]">
        {/* Photo — echoes the rounded-square frame of facundopadilla.com */}
        <Reveal className="mx-auto w-full max-w-[320px]">
          <div className="overflow-hidden rounded-2xl border border-line bg-surface">
            <img
              src="/brand/facundo.jpg"
              alt="Facundo Padilla"
              className="aspect-square w-full object-cover"
            />
          </div>
        </Reveal>

        <div>
          <Kicker tone="ink">Quién soy</Kicker>
          <Reveal as="h2" className="font-display text-5xl font-bold text-ink sm:text-6xl">
            Facundo Padilla
          </Reveal>
          <Reveal className="mt-3 text-lg text-ink-dim">
            Software Engineer en <span className="text-ink">Santander Tecnología</span> ·
            Fundador de <span className="text-ink">SaltaDev</span>
          </Reveal>

          <Reveal className="mt-6 max-w-2xl text-lg text-ink-dim leading-relaxed text-pretty">
            Desarrollador de software con +6 años de experiencia en desarrollo, DevOps,
            quality assurance y automatización de procesos con IA. Fundé SaltaDev, la
            comunidad de tecnología del norte argentino.
          </Reveal>

          <Reveal className="mt-7 flex flex-wrap gap-x-8 gap-y-3 text-sm text-ink-dim">
            <span className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-ink-mute" strokeWidth={1.8} /> Salta, Argentina
            </span>
            <span className="flex items-center gap-2">
              <Brain className="h-4 w-4 text-ink-mute" strokeWidth={1.8} /> IA, automatización y arquitectura de software
            </span>
          </Reveal>

          <Reveal className="mt-8 flex flex-wrap gap-3">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                className="group flex items-center gap-2 rounded-lg border border-line bg-surface/60 px-3.5 py-2 text-sm text-ink-dim transition-colors hover:border-ink-mute hover:text-ink"
              >
                <s.icon className="h-4 w-4" strokeWidth={1.7} />
                {s.label}
                <ArrowUpRight className="h-3.5 w-3.5 text-ink-mute transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" strokeWidth={2} />
              </a>
            ))}
          </Reveal>
        </div>
      </div>
    </Slide>
  )
}

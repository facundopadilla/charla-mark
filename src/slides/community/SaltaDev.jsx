import { ArrowUpRight, Users, Building2, CalendarDays } from 'lucide-react'
import Slide from '../../components/Slide'
import { Reveal } from '../../components/ui'

// SaltaDev brand palette (from salta.dev): warm dark bg + coral accent + poncho red.
const CORAL = '#e2574c'

const socials = ['Discord', 'WhatsApp', 'Instagram', 'LinkedIn', 'GitHub', 'X'].map((name) => ({
  name,
  href: `https://salta.dev/${name.toLowerCase()}/`,
}))

const team = [
  { name: 'Facundo Padilla', role: 'Fundador', img: '/brand/facundo.jpg' },
  { name: 'Juan P. Gutiérrez', role: 'Administrador', img: '/brand/juan.jpg' },
  { name: 'Verónica Torres', role: 'Administradora', img: '/brand/vero.jpg' },
]

export default function SaltaDev() {
  return (
    <Slide
      align="start"
      justify="center"
      bg={
        <div
          className="absolute inset-0"
          style={{ background: 'radial-gradient(1000px 680px at 12% -5%, #2c1c1b, #1d1515 62%)' }}
        />
      }
    >
      <div className="grid w-full items-center gap-12 lg:grid-cols-2">
        {/* Left — identity */}
        <div>
          <Reveal className="flex items-center gap-3">
            <img src="/brand/saltadev-logo.webp" alt="SaltaDev" className="h-14 w-auto" />
            <span className="font-display text-3xl font-bold tracking-tight text-[#f4ece9]">
              SaltaDev
            </span>
          </Reveal>

          <Reveal
            as="h2"
            className="mt-8 font-display text-5xl font-bold leading-[1.02] text-[#f4ece9] sm:text-6xl"
          >
            El Hub Tech del
            <br />
            <span style={{ color: CORAL }}>Norte Argentino</span>
          </Reveal>

          <Reveal className="mt-6 max-w-xl text-lg leading-relaxed text-[#c7b3ae] text-pretty">
            Conectamos a desarrolladores, diseñadores y emprendedores de Salta.
            Impulsamos el talento local con colaboración, aprendizaje y eventos
            durante todo el año.
          </Reveal>

          <Reveal className="mt-8 flex flex-wrap gap-2.5">
            {socials.map((s) => (
              <a
                key={s.name}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 rounded-lg border border-[#3a2c2c] bg-[#251b1b] px-3 py-1.5 text-sm text-[#c7b3ae] transition-colors hover:border-[#e2574c]/50 hover:text-[#f4ece9]"
              >
                {s.name}
                <ArrowUpRight className="h-3.5 w-3.5 opacity-60" strokeWidth={2} />
              </a>
            ))}
          </Reveal>

          <Reveal className="mt-8">
            <a
              href="https://salta.dev"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-lg px-5 py-3 font-display text-lg font-semibold text-[#1d1515] transition-transform hover:-translate-y-0.5"
              style={{ backgroundColor: CORAL }}
            >
              salta.dev
              <ArrowUpRight className="h-5 w-5" strokeWidth={2.2} />
            </a>
          </Reveal>
        </div>

        {/* Right — proof + team */}
        <div className="flex flex-col gap-5">
          <div className="grid grid-cols-2 gap-4">
            <Reveal>
              <div className="rounded-xl border border-[#3a2c2c] bg-[#251b1b] p-6">
                <Users className="mb-4 h-6 w-6" style={{ color: CORAL }} strokeWidth={1.6} />
                <div className="stat-figure text-5xl text-[#f4ece9]">+1000</div>
                <div className="mt-2 text-sm text-[#c7b3ae]">miembros activos</div>
              </div>
            </Reveal>
            <Reveal>
              <div className="rounded-xl border border-[#3a2c2c] bg-[#251b1b] p-6">
                <Building2 className="mb-4 h-6 w-6" style={{ color: CORAL }} strokeWidth={1.6} />
                <div className="stat-figure text-5xl text-[#f4ece9]">+20</div>
                <div className="mt-2 text-sm text-[#c7b3ae]">organizaciones colaboradoras</div>
              </div>
            </Reveal>
          </div>

          <Reveal>
            <div className="flex items-start gap-3 rounded-xl border border-[#3a2c2c] bg-[#251b1b] p-5">
              <CalendarDays className="mt-0.5 h-5 w-5 shrink-0" style={{ color: CORAL }} strokeWidth={1.7} />
              <div className="text-sm text-[#c7b3ae]">
                <span className="text-[#f4ece9]">Eventos todo el año:</span> PunaTech, Aleph
                Hackathon, Blockchain Salta, coworkings y charlas.
              </div>
            </div>
          </Reveal>

          <Reveal>
            <div className="rounded-xl border border-[#3a2c2c] bg-[#251b1b] p-5">
              <div className="mb-4 text-xs uppercase tracking-wider text-[#8f7d79]">
                Quiénes somos
              </div>
              <div className="flex flex-wrap gap-5">
                {team.map((m) => (
                  <div key={m.name} className="flex items-center gap-3">
                    <img
                      src={m.img}
                      alt={m.name}
                      className="h-11 w-11 rounded-full object-cover ring-1 ring-[#3a2c2c]"
                    />
                    <div>
                      <div className="text-sm font-medium text-[#f4ece9]">{m.name}</div>
                      <div className="text-xs text-[#9d8a86]">{m.role}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </Slide>
  )
}

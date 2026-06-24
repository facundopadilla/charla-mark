import Slide from '../../components/Slide'
import { Reveal } from '../../components/ui'

const qrs = [
  {
    img: '/brand/qr-charla.svg',
    label: 'Mirá la charla',
    handle: 'charla-mark.vercel.app',
    tone: 'text-accent',
  },
  {
    img: '/brand/qr-instagram.svg',
    label: 'Seguime',
    handle: '@facundo__padilla',
    tone: 'text-gold',
  },
  {
    img: '/brand/qr-saltadev.svg',
    label: 'Seguí a SaltaDev',
    handle: '@salta.dev',
    tone: 'text-mint',
  },
]

export default function QRClose() {
  return (
    <Slide align="center" justify="center">
      <Reveal className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-accent">
        ¡Gracias por venir!
      </Reveal>
      <Reveal as="h2" className="font-display text-4xl font-bold text-ink sm:text-5xl text-balance">
        Escaneá antes de irte
      </Reveal>

      <div className="mt-12 grid w-full max-w-4xl gap-8 sm:grid-cols-3">
        {qrs.map((q) => (
          <Reveal key={q.handle}>
            <div className="flex flex-col items-center text-center">
              <div className="rounded-2xl bg-white p-4 shadow-card">
                <img src={q.img} alt={q.label} className="h-40 w-40" />
              </div>
              <div className="mt-4 font-display text-lg font-semibold text-ink">{q.label}</div>
              <div className={['mt-0.5 text-sm', q.tone].join(' ')}>{q.handle}</div>
            </div>
          </Reveal>
        ))}
      </div>
    </Slide>
  )
}

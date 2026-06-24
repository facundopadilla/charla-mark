import { ScanLine, Clock, ShieldCheck } from 'lucide-react'
import Slide from '../../components/Slide'
import { Reveal } from '../../components/ui'

export default function Survey() {
  return (
    <Slide align="center" justify="center">
      <Reveal className="mb-3 inline-flex items-center gap-2 rounded-full border border-line bg-surface/60 px-3.5 py-1.5 text-sm text-accent">
        <ScanLine className="h-3.5 w-3.5" strokeWidth={2} />
        Antes de arrancar
      </Reveal>

      <Reveal
        as="h2"
        className="font-display text-4xl font-bold text-ink sm:text-5xl text-balance"
      >
        ¿Cuánto sabés de <span className="text-accent">Inteligencia Artificial</span>?
      </Reveal>

      <Reveal className="mt-5 max-w-xl text-lg text-ink-dim text-pretty leading-relaxed">
        Escaneá el código y respondé esta encuesta rápida. Me ayuda a saber desde
        dónde partimos y a adaptar la charla a ustedes.
      </Reveal>

      <Reveal className="mt-10">
        <div className="flex flex-col items-center text-center">
          <div className="rounded-2xl bg-white p-5 shadow-card">
            <img src="/brand/qr-encuesta.svg" alt="QR de la encuesta" className="h-52 w-52" />
          </div>
          <div className="mt-4 text-sm text-accent">forms.gle/GmE1fGGLBJgQupL29</div>
        </div>
      </Reveal>

      <Reveal className="mt-8 flex flex-wrap items-center justify-center gap-x-7 gap-y-2 text-sm text-ink-mute">
        <span className="flex items-center gap-2">
          <Clock className="h-4 w-4" strokeWidth={1.8} /> 2 minutos
        </span>
        <span className="flex items-center gap-2">
          <ShieldCheck className="h-4 w-4" strokeWidth={1.8} /> Anónima
        </span>
      </Reveal>
    </Slide>
  )
}

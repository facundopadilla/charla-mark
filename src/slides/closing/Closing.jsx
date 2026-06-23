import Slide from '../../components/Slide'
import { Reveal } from '../../components/ui'

export default function Closing() {
  return (
    <Slide align="center" justify="center">
      <Reveal as="h2" className="font-display text-6xl font-bold text-ink sm:text-7xl text-balance">
        Gracias<span className="text-accent">.</span>
      </Reveal>

      <Reveal className="mt-6 text-xl text-ink-dim sm:text-2xl">
        ¿Preguntas? <span className="text-ink">Hablemos.</span>
      </Reveal>

      <Reveal className="mt-14 flex flex-col items-center gap-1">
        <span className="font-display text-lg font-semibold text-ink">Facundo Padilla</span>
        <span className="font-mono text-xs uppercase tracking-wider text-ink-mute">
          Marketing Digital &amp; Fidelización · 2026
        </span>
      </Reveal>

      <Reveal className="mt-12 max-w-2xl text-sm text-ink-mute leading-relaxed">
        Las cifras de casos son auto-reportadas e ilustrativas. Verificá precios y
        funciones antes de decidir.
      </Reveal>
    </Slide>
  )
}

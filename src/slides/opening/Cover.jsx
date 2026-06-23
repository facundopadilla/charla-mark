import { motion } from 'framer-motion'
import { Sparkles, Clock, MapPin } from 'lucide-react'
import Slide from '../../components/Slide'
import { Reveal } from '../../components/ui'

export default function Cover() {
  return (
    <Slide align="start" justify="center">
      {/* Oversized year mark, quiet, behind the title */}
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.04 }}
        transition={{ duration: 1.2 }}
        className="pointer-events-none absolute -right-6 top-1/2 -translate-y-1/2 select-none font-display text-[34vw] font-bold leading-none text-ink"
      >
        26
      </motion.span>

      <div className="relative w-full">
        <Reveal className="mb-8 inline-flex items-center gap-2 rounded-full border border-line bg-surface/60 px-3.5 py-1.5 text-sm text-accent">
          <Sparkles className="h-3.5 w-3.5" strokeWidth={2} />
          Investigación actualizada · Argentina & LATAM
        </Reveal>

        <Reveal
          as="h1"
          className="font-display text-6xl font-bold leading-[0.92] text-ink sm:text-7xl lg:text-[7.5rem] text-balance"
        >
          Marketing Digital
          <br />
          <span className="text-accent">& Fidelización</span>
        </Reveal>

        <Reveal className="mt-7 max-w-2xl text-xl text-ink-dim text-pretty leading-relaxed">
          Cómo un emprendimiento vende más, retiene mejor y construye vínculos
          duraderos en el nuevo escenario digital de 2026.
        </Reveal>

        <Reveal className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-3 text-sm text-ink-mute">
          <span className="font-medium text-ink-dim">Facundo Padilla</span>
          <span className="flex items-center gap-2">
            <Clock className="h-4 w-4" strokeWidth={1.8} /> Workshop · 3 horas
          </span>
          <span className="flex items-center gap-2">
            <MapPin className="h-4 w-4" strokeWidth={1.8} /> Foco Argentina / LATAM
          </span>
        </Reveal>
      </div>
    </Slide>
  )
}

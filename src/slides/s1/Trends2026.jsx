import { useState } from 'react'
import { Sparkles, Copy, UserCheck, Instagram, Eye, ArrowUpRight } from 'lucide-react'
import Slide from '../../components/Slide'
import { Eyebrow, Title, Lead, StatCard, Callout } from '../../components/ui'
import Modal from '../../components/Modal'

function ExampleButton({ icon: Icon, children, onClick, tone = 'accent' }) {
  const tones = {
    accent: 'border-accent/40 bg-accent/10 text-accent hover:bg-accent/20',
    gold: 'border-gold/40 bg-gold/10 text-gold hover:bg-gold/20',
  }
  return (
    <button
      type="button"
      onClick={onClick}
      className={[
        'inline-flex items-center gap-1.5 rounded-lg border px-3 py-1.5 text-sm font-medium transition-colors',
        tones[tone],
      ].join(' ')}
    >
      <Icon className="h-3.5 w-3.5" strokeWidth={2} />
      {children}
    </button>
  )
}

export default function Trends2026() {
  const [modal, setModal] = useState(null)

  return (
    <Slide align="start" justify="center">
      <Eyebrow index={1} label="Panorama actual" />
      <Title className="max-w-4xl">La IA pasa de probar a confiar</Title>
      <Lead>
        En 2026 la IA generativa ya produce salidas listas para el cliente, no
        solo borradores internos.
      </Lead>

      <div className="mt-12 grid w-full gap-5 lg:grid-cols-3">
        <StatCard
          icon={Sparkles}
          tone="accent"
          value="95%"
          label="de los marketers ya prueba IA para producción creativa, pero 42% sigue en testing inicial."
          source="Smartly.io"
          footer={
            <ExampleButton icon={Instagram} tone="accent" onClick={() => setModal('coplero')}>
              Ver ejemplo real
            </ExampleButton>
          }
        />
        <StatCard
          icon={Copy}
          tone="gold"
          value="3 de 4"
          label="marketers temen que el contenido por IA haga que las marcas suenen iguales (sameness): 86% ya vio salidas de IA parecidas a las de su competencia."
          source="Smartly.io"
          footer={
            <ExampleButton icon={Eye} tone="gold" onClick={() => setModal('menu')}>
              Ver ejemplo
            </ExampleButton>
          }
        />
        <StatCard
          icon={UserCheck}
          tone="mint"
          value="75%"
          label="de los consumidores compra más de marcas con contenido personalizado."
          source="IE University"
        />
      </div>

      <Callout className="mt-8 max-w-3xl" tone="gold" icon={Sparkles} title="La oportunidad real">
        No es producir más rápido, sino producir contenido distintivo y
        auténtico que diferencie a la marca.
      </Callout>

      {/* Ejemplo de IA en acción: Coplero (@copleroai) */}
      <Modal open={modal === 'coplero'} onClose={() => setModal(null)} maxW="max-w-md">
        <div className="rounded-2xl border border-line bg-surface p-8 text-center">
          <img
            src="/brand/coplero-avatar.jpg"
            alt="Coplero"
            className="mx-auto h-20 w-20 rounded-full object-cover ring-1 ring-line"
          />
          <div className="mt-4 font-display text-2xl font-bold text-ink">Coplero</div>
          <div className="text-accent">@copleroai</div>
          <div className="mt-2 text-sm text-ink-dim">
            A.I. Content Production Company · Argentina
          </div>
          <div className="mt-4 flex justify-center gap-6 text-sm text-ink-mute">
            <span>
              <b className="text-ink">17</b> posts
            </span>
            <span>
              <b className="text-ink">1.305</b> seguidores
            </span>
          </div>
          <a
            href="https://www.instagram.com/copleroai/"
            target="_blank"
            rel="noreferrer"
            className="mt-6 inline-flex items-center gap-2 rounded-lg bg-accent px-5 py-3 font-display font-semibold text-[#0b0b0d] transition-transform hover:-translate-y-0.5"
          >
            Abrir en Instagram
            <ArrowUpRight className="h-5 w-5" strokeWidth={2.2} />
          </a>
        </div>
      </Modal>

      {/* Ejemplo de "sameness": diseño genérico generado con IA */}
      <Modal open={modal === 'menu'} onClose={() => setModal(null)} maxW="max-w-md">
        <img
          src="/brand/menu-ejemplo.png"
          alt="Ejemplo de diseño genérico generado con IA"
          className="mx-auto max-h-[78vh] w-auto rounded-xl border border-line"
        />
        <p className="mt-3 text-center text-sm text-ink-mute">
          La estética “todo se ve igual”: un diseño genérico generado con IA.
        </p>
      </Modal>
    </Slide>
  )
}

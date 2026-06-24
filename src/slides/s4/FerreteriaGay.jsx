import { Smile, HeartHandshake, Wrench, Share2, MapPin, ArrowUpRight } from 'lucide-react'
import Slide from '../../components/Slide'
import { Eyebrow, Title, Lead, Reveal, PointList, Callout, SourceTag } from '../../components/ui'

const practices = [
  {
    icon: Smile,
    title: 'Contenido humano y con humor',
    text: 'Casi 600 posts con humor salteño que la gente comparte. La marca se vuelve cercana, no un catálogo frío.',
  },
  {
    icon: HeartHandshake,
    title: 'Asesoramiento, no solo venta',
    text: 'Te dicen qué herramienta necesitás de verdad. Ese trato experto es lo que te hace volver.',
  },
  {
    icon: Wrench,
    title: 'Servicio que hace volver',
    text: 'Taller de reparación y alquiler de equipos (Alquileres Gay): el cliente vuelve por el servicio, no solo por el producto.',
  },
  {
    icon: Share2,
    title: 'En todos los canales',
    text: 'Instagram, Facebook, TikTok, WhatsApp y web: aparecen donde está el cliente salteño.',
  },
]

export default function FerreteriaGay() {
  return (
    <Slide align="start" justify="center">
      <Eyebrow index={4} label="Fidelización y retención" />
      <Title className="max-w-4xl">Un caso de acá: Ferretería Gay</Title>
      <Lead>Una PyME salteña que hace bien, en la vida real, casi todo lo que estamos viendo.</Lead>

      <div className="mt-8 grid w-full items-start gap-8 lg:grid-cols-[300px_1fr]">
        <Reveal>
          <div className="rounded-2xl border border-line bg-surface/60 p-7 text-center">
            <img
              src="/brand/ferreteriagay.jpg"
              alt="Ferretería Gay"
              className="mx-auto h-24 w-24 rounded-full object-cover ring-1 ring-line"
            />
            <div className="mt-4 font-display text-2xl font-bold text-ink">Ferretería Gay</div>
            <div className="text-accent">@ferreteriagay</div>
            <div className="mt-3 flex flex-col items-center gap-1 text-sm text-ink-dim">
              <span className="flex items-center gap-1.5">
                <MapPin className="h-4 w-4 text-ink-mute" strokeWidth={1.8} /> Salta · desde 1979
              </span>
              <span>5.089 seguidores · 596 posts</span>
            </div>
            <a
              href="https://www.instagram.com/ferreteriagay/"
              target="_blank"
              rel="noreferrer"
              className="mt-5 inline-flex items-center gap-2 rounded-lg border border-line bg-surface px-4 py-2 text-sm text-ink-dim transition-colors hover:border-ink-mute hover:text-ink"
            >
              Ver en Instagram
              <ArrowUpRight className="h-4 w-4" strokeWidth={2} />
            </a>
          </div>
        </Reveal>

        <PointList items={practices} tone="accent" />
      </div>

      <Callout className="mt-8 max-w-5xl" tone="accent" icon={Smile} title="La lección">
        No inventaron nada raro: hacen bien lo básico que vimos hoy — contenido humano,
        atención personal y servicio que fideliza. Y son de acá.
      </Callout>

      <SourceTag>insalta.info · @ferreteriagay (datos públicos, jun. 2026)</SourceTag>
    </Slide>
  )
}

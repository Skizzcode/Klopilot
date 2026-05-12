export function SectionTitle({ title, description }: { title: string; description?: string }) {
  return (
    <div className="mb-8 max-w-2xl">
      <p className="text-sm uppercase tracking-[0.28em] text-slate-500">KloPilot Demo</p>
      <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">{title}</h2>
      {description ? <p className="mt-4 text-base leading-7 text-slate-600">{description}</p> : null}
    </div>
  )
}

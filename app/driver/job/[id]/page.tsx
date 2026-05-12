'use client'

import { useMemo, useState } from 'react'
import Link from 'next/link'
import { ArrowLeft, Camera, CheckCircle2, MapPin, Navigation, Truck } from 'lucide-react'
import { jobs, toilets } from '@/lib/mockData'

type PageProps = { params: { id: string } }

export default function DriverJobPage({ params }: PageProps) {
  const job = jobs.find((item) => item.id === params.id)
  const toilet = toilets.find((item) => item.id === params.id)
  const [done, setDone] = useState(false)
  const [checks, setChecks] = useState({ cleaned: false, emptied: false, paper: false, outside: false })

  const summary = useMemo(() => Object.values(checks).filter(Boolean).length, [checks])

  if (!job || !toilet) {
    return (
      <main className="min-h-screen bg-slate-50 px-6 py-10 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-3xl rounded-[2rem] border border-slate-200 bg-white p-10 text-center shadow-soft">
          <p className="text-xl font-semibold text-slate-950">Job nicht gefunden</p>
          <Link href="/driver" className="mt-6 inline-flex rounded-2xl border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-100">
            Zur Fahrer-Tour
          </Link>
        </div>
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-slate-50 px-6 py-10 sm:px-10 lg:px-16">
      <div className="mx-auto max-w-3xl">
        {done ? (
          <section className="rounded-[2.5rem] border border-slate-200 bg-white p-10 shadow-soft">
            <div className="flex items-center gap-4">
              <CheckCircle2 className="h-10 w-10 text-emerald-500" />
              <div>
                <p className="text-sm uppercase tracking-[0.28em] text-emerald-700">Erledigt</p>
                <h1 className="mt-2 text-3xl font-semibold text-slate-950">Auftrag abgeschlossen</h1>
              </div>
            </div>
            <p className="mt-6 text-base leading-7 text-slate-600">Nächster Stop: Event Leipzig · WC-088 abholen</p>
            <Link href="/driver" className="mt-8 inline-flex items-center gap-2 rounded-[1.75rem] bg-brand-500 px-5 py-4 text-sm font-semibold text-white transition hover:bg-brand-700">
              Zur Tour zurück
              <ArrowLeft className="h-4 w-4 rotate-180" />
            </Link>
          </section>
        ) : (
          <section className="space-y-8 rounded-[2.5rem] border border-slate-200 bg-white p-8 shadow-soft">
            <div className="flex items-center justify-between gap-4">
              <Link href="/driver" className="inline-flex items-center gap-2 text-sm font-semibold text-brand-700 hover:text-brand-900">
                <ArrowLeft className="h-4 w-4" /> Zur Tour
              </Link>
              <span className="rounded-full bg-brand-50 px-4 py-2 text-sm font-semibold text-brand-700">Job prüfen</span>
            </div>
            <div>
              <p className="text-sm uppercase tracking-[0.28em] text-slate-500">{job.id}</p>
              <h1 className="mt-2 text-3xl font-semibold text-slate-950">{job.location}</h1>
              <p className="mt-3 text-base text-slate-600">{job.task} · {job.customer}</p>
            </div>
            <div className="grid gap-4 rounded-[2rem] bg-slate-50 p-6">
              <div className="flex items-center gap-3 text-sm text-slate-600">
                <MapPin className="h-4 w-4 text-brand-500" />
                <span>{toilet.address}</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-slate-600">
                <Truck className="h-4 w-4 text-brand-500" />
                <span>Fahrer: {job.driver}</span>
              </div>
            </div>

            <div className="rounded-[2rem] border border-slate-200 bg-white p-6">
              <p className="text-sm font-semibold text-slate-950">Was wurde erledigt?</p>
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                {[
                  { key: 'cleaned', label: 'Gereinigt' },
                  { key: 'emptied', label: 'Geleert' },
                  { key: 'paper', label: 'Papier aufgefüllt' },
                  { key: 'outside', label: 'Außen geprüft' }
                ].map((item) => (
                  <button
                    key={item.key}
                    type="button"
                    onClick={() => setChecks((prev) => ({ ...prev, [item.key]: !prev[item.key as keyof typeof prev] }))}
                    className={`rounded-[1.75rem] border px-4 py-4 text-left text-sm font-semibold transition ${checks[item.key as keyof typeof checks] ? 'border-brand-500 bg-brand-50 text-brand-900' : 'border-slate-200 bg-slate-50 text-slate-700 hover:bg-slate-100'}`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>
            <div className="space-y-4 rounded-[2rem] border border-slate-200 bg-slate-50 p-6">
              <div className="flex items-center justify-between">
                <p className="text-sm text-slate-600">Kontrollpunkte abgeschlossen</p>
                <p className="text-sm font-semibold text-slate-950">{summary}/4</p>
              </div>
              <button className="inline-flex items-center gap-2 rounded-[1.75rem] bg-white px-4 py-3 text-sm font-semibold text-slate-950 transition hover:bg-slate-100">
                <Camera className="h-4 w-4 text-slate-600" /> Foto hinzufügen
              </button>
              <textarea placeholder="Notiz eintragen" className="w-full rounded-[1.75rem] border border-slate-200 bg-white p-4 text-sm text-slate-900 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-100" rows={4} />
            </div>
            <div className="rounded-[2rem] border border-slate-200 bg-white p-6">
              <p className="text-sm font-semibold text-slate-950">Problem melden</p>
              <div className="mt-4 grid gap-3">
                {['Defekt', 'Kein Zugang', 'Kabine nicht gefunden', 'Stark verschmutzt'].map((label) => (
                  <button key={label} type="button" className="rounded-[1.75rem] border border-slate-200 bg-slate-50 px-4 py-3 text-left text-sm font-semibold text-slate-700 transition hover:bg-slate-100">
                    {label}
                  </button>
                ))}
              </div>
            </div>
            <button onClick={() => setDone(true)} className="w-full rounded-[1.75rem] bg-brand-500 px-5 py-4 text-sm font-semibold text-white transition hover:bg-brand-700">
              Auftrag abschließen
            </button>
          </section>
        )}
      </div>
    </main>
  )
}

import Link from 'next/link'
import { ArrowRight, MapPin, Truck, AlertTriangle, Camera } from 'lucide-react'
import { jobs } from '@/lib/mockData'

const nextStop = jobs[0]
const upcoming = jobs.slice(1)

export default function DriverPage() {
  return (
    <main className="min-h-screen bg-slate-50 px-6 py-10 sm:px-10 lg:px-16">
      <div className="mx-auto max-w-3xl">
        <div className="mb-10">
          <p className="text-sm uppercase tracking-[0.28em] text-brand-700">Deine Tour heute</p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">Mehmet · Dienstag</h1>
          <p className="mt-3 max-w-2xl text-base text-slate-600">3 von 8 erledigt · Die Tagesliste ist klar, der nächste Auftrag steht im Blick.</p>
        </div>

        <section className="rounded-[2.5rem] border border-slate-200 bg-white p-7 shadow-soft sm:p-8">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.28em] text-slate-500">Nächster Stop</p>
              <h2 className="mt-2 text-3xl font-semibold text-slate-950">1. {nextStop.location}</h2>
            </div>
            <span className="inline-flex rounded-full bg-brand-50 px-4 py-2 text-sm font-semibold text-brand-700">{nextStop.status === 'offen' ? 'offen' : 'erledigt'}</span>
          </div>
          <div className="mt-8 space-y-5">
            <div className="rounded-[2rem] bg-slate-50 p-6">
              <p className="text-sm uppercase tracking-[0.28em] text-slate-500">Kabine</p>
              <p className="mt-3 text-2xl font-semibold text-slate-950">{nextStop.id}</p>
              <p className="mt-3 text-base text-slate-600">{nextStop.task}</p>
              <p className="mt-4 text-sm text-slate-600">{nextStop.customer}</p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <button className="rounded-[1.75rem] bg-brand-500 px-5 py-4 text-left text-sm font-semibold text-white shadow-lg shadow-brand-500/10 transition hover:bg-brand-700">Navigation öffnen</button>
              <Link href={`/driver/job/${nextStop.id}`} className="rounded-[1.75rem] border border-slate-200 bg-white px-5 py-4 text-left text-sm font-semibold text-slate-950 transition hover:bg-slate-100">Job öffnen</Link>
            </div>
            <button className="inline-flex w-full items-center justify-center gap-2 rounded-[1.75rem] border border-rose-200 bg-rose-50 px-5 py-4 text-sm font-semibold text-rose-700 transition hover:bg-rose-100">
              <AlertTriangle className="h-4 w-4" /> Problem melden
            </button>
          </div>
        </section>

        <section className="mt-8 space-y-4">
          <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-soft">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-sm font-semibold text-slate-950">Weitere Stops</p>
                <p className="text-sm text-slate-500">Einfach durchscrollen und den nächsten Auftrag wählen.</p>
              </div>
              <Truck className="h-5 w-5 text-brand-500" />
            </div>
          </div>
          <div className="space-y-4">
            {upcoming.map((job) => (
              <div key={job.id} className="rounded-[1.75rem] border border-slate-200 bg-white p-5 shadow-sm">
                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <p className="text-sm text-slate-500">{job.id}</p>
                    <p className="mt-1 text-lg font-semibold text-slate-950">{job.location}</p>
                    <p className="mt-2 text-sm text-slate-600">{job.task}</p>
                  </div>
                  <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-slate-600">{job.status}</span>
                </div>
                <div className="mt-4 flex flex-wrap gap-2 text-sm text-slate-600">
                  <span>{job.driver}</span>
                  {job.eta ? <span>{job.eta}</span> : null}
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  )
}

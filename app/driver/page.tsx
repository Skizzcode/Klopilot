import Link from 'next/link'
import { Truck, AlertTriangle } from 'lucide-react'
import { NavbarMobile } from '@/components/Navbar'
import { jobs } from '@/lib/mockData'

const nextStop = jobs[0]
const upcoming = jobs.slice(1)

export default function DriverPage() {
  return (
    <main className="min-h-screen bg-slate-50 dark:bg-slate-900">
      <NavbarMobile />
      <div className="px-6 py-10 sm:px-10 lg:px-16">
      <div className="mx-auto max-w-3xl">
        <div className="mb-10">
          <p className="text-sm uppercase tracking-[0.28em] text-brand-700 dark:text-brand-300">Deine Tour heute</p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl dark:text-white">Mehmet · Dienstag</h1>
          <p className="mt-3 max-w-2xl text-base text-slate-600 dark:text-slate-300">3 von 8 erledigt · Die Tagesliste ist klar, der nächste Auftrag steht im Blick.</p>
        </div>

        <section className="rounded-[2.5rem] border border-slate-200 bg-white p-7 shadow-soft sm:p-8 dark:border-slate-700 dark:bg-slate-800">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.28em] text-slate-500 dark:text-slate-400">Nächster Stop</p>
              <h2 className="mt-2 text-3xl font-semibold text-slate-950 dark:text-white">1. {nextStop.location}</h2>
            </div>
            <span className="inline-flex rounded-full bg-brand-50 px-4 py-2 text-sm font-semibold text-brand-700 dark:bg-brand-950/60 dark:text-brand-300">{nextStop.status === 'offen' ? 'offen' : 'erledigt'}</span>
          </div>
          <div className="mt-8 space-y-5">
            <div className="rounded-[2rem] bg-slate-50 p-6 dark:bg-slate-700/50">
              <p className="text-sm uppercase tracking-[0.28em] text-slate-500 dark:text-slate-400">Kabine</p>
              <p className="mt-3 text-2xl font-semibold text-slate-950 dark:text-white">{nextStop.id}</p>
              <p className="mt-3 text-base text-slate-600 dark:text-slate-300">{nextStop.task}</p>
              <p className="mt-4 text-sm text-slate-600 dark:text-slate-400">{nextStop.customer}</p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <button className="rounded-[1.75rem] bg-brand-500 px-5 py-4 text-left text-sm font-semibold text-white shadow-lg shadow-brand-500/10 transition hover:bg-brand-700">Navigation öffnen</button>
              <Link href={`/driver/job/${nextStop.id}`} className="rounded-[1.75rem] border border-slate-200 bg-white px-5 py-4 text-left text-sm font-semibold text-slate-950 transition hover:bg-slate-100 dark:border-slate-600 dark:bg-slate-800 dark:text-white dark:hover:bg-slate-700">Job öffnen</Link>
            </div>
            <button className="inline-flex w-full items-center justify-center gap-2 rounded-[1.75rem] border border-rose-200 bg-rose-50 px-5 py-4 text-sm font-semibold text-rose-700 transition hover:bg-rose-100 dark:border-rose-800 dark:bg-rose-950/40 dark:text-rose-300 dark:hover:bg-rose-950/60">
              <AlertTriangle className="h-4 w-4" /> Problem melden
            </button>
          </div>
        </section>

        <section className="mt-8 space-y-4">
          <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-soft dark:border-slate-700 dark:bg-slate-800">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-sm font-semibold text-slate-950 dark:text-white">Weitere Stops</p>
                <p className="text-sm text-slate-500 dark:text-slate-400">Einfach durchscrollen und den nächsten Auftrag wählen.</p>
              </div>
              <Truck className="h-5 w-5 text-brand-500" />
            </div>
          </div>
          <div className="space-y-4">
            {upcoming.map((job) => (
              <div key={job.id} className="rounded-[1.75rem] border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-700 dark:bg-slate-800">
                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <p className="text-sm text-slate-500 dark:text-slate-400">{job.id}</p>
                    <p className="mt-1 text-lg font-semibold text-slate-950 dark:text-white">{job.location}</p>
                    <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{job.task}</p>
                  </div>
                  <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-slate-600 dark:bg-slate-700 dark:text-slate-300">{job.status}</span>
                </div>
                <div className="mt-4 flex flex-wrap gap-2 text-sm text-slate-600 dark:text-slate-400">
                  <span>{job.driver}</span>
                  {job.eta ? <span>{job.eta}</span> : null}
                </div>
              </div>
            ))}
          </div>
        </section>
        </div>
      </div>
    </main>
  )
}

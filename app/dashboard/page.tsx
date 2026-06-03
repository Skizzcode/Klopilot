import Link from 'next/link'
import { ArrowRight, MapPin, ClipboardCheck, AlertTriangle } from 'lucide-react'
import { overviewStats, toilets, jobs } from '@/lib/mockData'
import { Navbar } from '@/components/Navbar'
import { StatusChip, type StatusVariant } from '@/components/StatusChip'

function statusVariant(status: string): StatusVariant {
  if (status === 'vermietet') return 'success'
  if (status === 'abholen') return 'warning'
  if (status === 'service fällig') return 'service'
  if (status === 'defekt') return 'alert'
  return 'neutral'
}

export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-slate-50 dark:bg-slate-900">
      <Navbar />
      <div className="px-6 py-10 sm:px-10 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-brand-700 dark:text-brand-300">KloPilot Dashboard</p>
            <h1 className="mt-3 text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl dark:text-white">Touren & Kabinen heute</h1>
            <p className="mt-4 max-w-xl text-base text-slate-600 dark:text-slate-300">Live-Überblick über vermietete Kabinen, offene Jobs und gemeldete Probleme — auf einen Blick.</p>
          </div>
          <Link href="/demo" className="inline-flex items-center gap-2 rounded-[1.75rem] border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-100 dark:border-slate-600 dark:bg-slate-800 dark:text-white dark:hover:bg-slate-700">
            Zur Demo
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-4">
          <div className="rounded-[2rem] border border-slate-200 bg-white p-7 shadow-soft dark:border-slate-700 dark:bg-slate-800">
            <p className="text-sm text-slate-500 dark:text-slate-400">Kabinen vermietet</p>
            <p className="mt-4 text-4xl font-semibold text-slate-950 dark:text-white">{overviewStats.rented}</p>
          </div>
          <div className="rounded-[2rem] border border-slate-200 bg-white p-7 shadow-soft dark:border-slate-700 dark:bg-slate-800">
            <p className="text-sm text-slate-500 dark:text-slate-400">Service heute</p>
            <p className="mt-4 text-4xl font-semibold text-slate-950 dark:text-white">{overviewStats.today}</p>
          </div>
          <div className="rounded-[2rem] border border-slate-200 bg-white p-7 shadow-soft dark:border-slate-700 dark:bg-slate-800">
            <p className="text-sm text-slate-500 dark:text-slate-400">Offene Abholungen</p>
            <p className="mt-4 text-4xl font-semibold text-slate-950 dark:text-white">{overviewStats.pickups}</p>
          </div>
          <div className="rounded-[2rem] border border-rose-100 bg-rose-50 p-7 text-rose-700 shadow-soft dark:border-rose-800 dark:bg-rose-950/40 dark:text-rose-300">
            <p className="text-sm text-rose-700 dark:text-rose-300">Probleme</p>
            <p className="mt-4 text-4xl font-semibold text-rose-700 dark:text-rose-300">{overviewStats.issues}</p>
          </div>
        </div>

        <div className="mt-14 grid gap-10 xl:grid-cols-[1.4fr_0.9fr]">
          <section className="space-y-8">
            <div className="rounded-[2.5rem] border border-slate-200 bg-white p-8 shadow-soft dark:border-slate-700 dark:bg-slate-800">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-sm text-slate-500 dark:text-slate-400">Kabinenliste</p>
                  <h2 className="mt-2 text-2xl font-semibold text-slate-950 dark:text-white">Alle Strecken, alle Standorte</h2>
                </div>
                <div className="hidden items-center gap-2 rounded-full bg-slate-100 px-4 py-2 text-sm text-slate-600 sm:flex dark:bg-slate-700 dark:text-slate-300">
                  <MapPin className="h-4 w-4" />
                  Standorte
                </div>
              </div>
              <div className="mt-8 space-y-5">
                {toilets.map((toilet) => (
                  <Link key={toilet.id} href={`/toilets/${toilet.id}`} className="group block rounded-[1.75rem] border border-slate-200 bg-slate-50 p-6 transition hover:border-brand-300 hover:bg-white dark:border-slate-600 dark:bg-slate-700/50 dark:hover:bg-slate-700 dark:text-slate-300">
                    <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                      <div>
                        <p className="text-sm text-slate-500 dark:text-slate-400">{toilet.id}</p>
                        <p className="mt-1 text-lg font-semibold text-slate-950 dark:text-white">{toilet.location}</p>
                        <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">{toilet.customer}</p>
                      </div>
                      <div className="flex flex-wrap items-center gap-2">
                        <StatusChip label={toilet.status} variant={statusVariant(toilet.status)} />
                        <p className="text-sm text-slate-500 dark:text-slate-400">{toilet.nextJob}</p>
                      </div>
                    </div>
                    <div className="mt-4 flex flex-wrap gap-4 text-sm text-slate-500 dark:text-slate-400">
                      <span>{toilet.driver}</span>
                      <span>{toilet.lastService}</span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            <div className="rounded-[2.5rem] border border-slate-200 bg-white p-8 shadow-soft dark:border-slate-700 dark:bg-slate-800">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-sm text-slate-500 dark:text-slate-400">Heutige Jobs</p>
                  <h2 className="mt-2 text-2xl font-semibold text-slate-950 dark:text-white">Was heute anliegt</h2>
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
                  <ClipboardCheck className="h-4 w-4" />
                  {jobs.length} Aufträge
                </div>
              </div>
              <div className="mt-8 space-y-5">
                {jobs.map((job) => (
                  <div key={job.id} className="rounded-[1.75rem] border border-slate-200 bg-slate-50 p-5 dark:border-slate-600 dark:bg-slate-700/50">
                    <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                      <div>
                        <p className="font-semibold text-slate-950 dark:text-white">{job.title}</p>
                        <p className="text-sm text-slate-600 dark:text-slate-300">{job.task}</p>
                      </div>
                      <div className="flex flex-wrap items-center gap-2 text-sm text-slate-600 dark:text-slate-300">
                        <span>{job.driver}</span>
                        {job.eta ? <span>{job.eta}</span> : null}
                        {job.problem ? <span className="rounded-full bg-rose-50 px-3 py-1 text-rose-700 dark:bg-rose-900/50 dark:text-rose-300">{job.problem}</span> : null}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <aside className="space-y-8">
            <div className="rounded-[2.5rem] border border-slate-200 bg-white p-8 shadow-soft dark:border-slate-700 dark:bg-slate-800">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-sm text-slate-500 dark:text-slate-400">Problem</p>
                  <h2 className="mt-2 text-xl font-semibold text-slate-950 dark:text-white">WC-031 melden</h2>
                </div>
                <AlertTriangle className="h-6 w-6 text-rose-500" />
              </div>
              <div className="mt-8 space-y-3 rounded-[1.75rem] bg-slate-50 p-5 dark:bg-slate-700/50">
                <p className="text-sm font-semibold text-slate-950 dark:text-white">WC-031 · Türgriff locker</p>
                <p className="text-sm text-slate-600 dark:text-slate-300">Foto vorhanden · gemeldet 10:42</p>
              </div>
            </div>
            <div className="rounded-[2.5rem] border border-slate-200 bg-slate-900 p-8 text-white shadow-soft dark:border-slate-700 dark:bg-slate-800">
              <p className="text-sm uppercase tracking-[0.28em] text-cyan-300">Schneller Blick</p>
              <div className="mt-8 grid gap-5">
                <div className="rounded-[1.75rem] bg-slate-950 p-6">
                  <p className="text-sm text-slate-400">Tour</p>
                  <p className="mt-2 text-xl font-semibold">Mehmet · 3 von 8 erledigt</p>
                </div>
                <div className="rounded-[1.75rem] bg-slate-950 p-6">
                  <p className="text-sm text-slate-400">Nächste Abholung</p>
                  <p className="mt-2 text-xl font-semibold">WC-088 · 16:00</p>
                </div>
              </div>
            </div>
          </aside>
        </div>
        </div>
      </div>
    </main>
  )
}

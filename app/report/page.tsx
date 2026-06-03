import { ArrowRight, Download, FileText, CheckCircle2 } from 'lucide-react'
import { Navbar } from '@/components/Navbar'
import { report } from '@/lib/mockData'

export default function ReportPage() {
  return (
    <main className="min-h-screen bg-slate-50 dark:bg-slate-900">
      <Navbar />
      <div className="px-6 py-10 sm:px-10 lg:px-16">
      <div className="mx-auto max-w-5xl">
        <div className="rounded-[2rem] border border-slate-200 bg-white p-10 shadow-soft dark:border-slate-700 dark:bg-slate-800">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.28em] text-brand-700 dark:text-brand-300">Tagesbericht</p>
              <h1 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl dark:text-white">Was heute erledigt wurde</h1>
            </div>
            <div className="flex flex-wrap gap-3">
              <button className="inline-flex items-center gap-2 rounded-2xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-100 dark:border-slate-600 dark:bg-slate-800 dark:text-white dark:hover:bg-slate-700">
                <Download className="h-4 w-4" /> PDF exportieren
              </button>
              <button className="inline-flex items-center gap-2 rounded-2xl bg-brand-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-brand-700">
                <FileText className="h-4 w-4" /> CSV exportieren
              </button>
            </div>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-4">
            <div className="rounded-3xl bg-slate-50 p-6 text-center dark:bg-slate-700/50">
              <p className="text-sm text-slate-500 dark:text-slate-400">Geplant</p>
              <p className="mt-4 text-3xl font-semibold text-slate-950 dark:text-white">{report.planned}</p>
            </div>
            <div className="rounded-3xl bg-slate-50 p-6 text-center dark:bg-slate-700/50">
              <p className="text-sm text-slate-500 dark:text-slate-400">Erledigt</p>
              <p className="mt-4 text-3xl font-semibold text-slate-950 dark:text-white">{report.done}</p>
            </div>
            <div className="rounded-3xl bg-slate-50 p-6 text-center dark:bg-slate-700/50">
              <p className="text-sm text-slate-500 dark:text-slate-400">Offen</p>
              <p className="mt-4 text-3xl font-semibold text-slate-950 dark:text-white">{report.open}</p>
            </div>
            <div className="rounded-3xl bg-slate-50 p-6 text-center dark:bg-slate-700/50">
              <p className="text-sm text-slate-500 dark:text-slate-400">Problem</p>
              <p className="mt-4 text-3xl font-semibold text-slate-950 dark:text-white">{report.problem}</p>
            </div>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            <div className="rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-soft dark:border-slate-700 dark:bg-slate-800">
              <p className="text-sm font-semibold text-slate-950 dark:text-white">Erledigte Jobs</p>
              <div className="mt-6 space-y-4">
                {report.doneJobs.map((job) => (
                  <div key={job.id} className="flex items-center justify-between rounded-3xl bg-slate-50 p-4 dark:bg-slate-700/50">
                    <div>
                      <p className="font-semibold text-slate-950 dark:text-white">{job.title}</p>
                      <p className="text-sm text-slate-500 dark:text-slate-400">{job.driver}</p>
                    </div>
                    <p className="text-sm text-slate-600 dark:text-slate-300">{job.time}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-soft dark:border-slate-700 dark:bg-slate-800">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="h-5 w-5 text-emerald-500" />
                <p className="text-sm font-semibold text-slate-950 dark:text-white">Aktuelles Problem</p>
              </div>
              <div className="mt-6 rounded-3xl bg-slate-50 p-4 dark:bg-slate-700/50">
                <p className="font-semibold text-slate-950 dark:text-white">{report.issue.id}</p>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{report.issue.note}</p>
                <p className="mt-2 text-xs uppercase tracking-[0.28em] text-slate-500 dark:text-slate-400">gemeldet {report.issue.time}</p>
              </div>
            </div>
          </div>

          <div className="mt-10 flex items-center justify-between rounded-[1.75rem] bg-brand-50 p-6 text-slate-950 shadow-soft dark:bg-slate-700 dark:text-white">
            <div>
              <p className="text-sm font-semibold">Fertige Übersicht für den Chef</p>
              <p className="mt-2 text-sm text-slate-700 dark:text-slate-300">Bereit für die kurze Nachbesprechung oder den Bericht an den Kunden.</p>
            </div>
            <div className="inline-flex items-center gap-2 rounded-3xl bg-white px-4 py-3 text-sm font-semibold text-brand-700 dark:bg-slate-600 dark:text-brand-300">
              Weiter zur Tour
              <ArrowRight className="h-4 w-4" />
            </div>
          </div>
        </div>
        </div>
      </div>
    </main>
  )
}

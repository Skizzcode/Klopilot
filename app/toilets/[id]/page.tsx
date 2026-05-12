import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeft, Camera, ClipboardCheck, QrCode, Truck, AlertTriangle } from 'lucide-react'
import { toilets } from '@/lib/mockData'
import { Button } from '@/components/Button'
import { MockQRCode } from '@/components/MockQRCode'
import { StatusChip } from '@/components/StatusChip'

type PageProps = { params: { id: string } }

export default function ToiletPage({ params }: PageProps) {
  const toilet = toilets.find((item) => item.id === params.id)
  if (!toilet) notFound()

  return (
    <main className="min-h-screen bg-slate-50 px-6 py-10 sm:px-10 lg:px-16">
      <div className="mx-auto max-w-5xl">
        <div className="mb-8 flex items-center gap-4 text-sm text-slate-600">
          <Link href="/dashboard" className="inline-flex items-center gap-2 text-brand-700 hover:text-brand-900">
            <ArrowLeft className="h-4 w-4" /> Zurück zum Dashboard
          </Link>
          <span className="h-1 w-1 rounded-full bg-slate-400" />
          <span>{toilet.location}</span>
        </div>
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <section className="space-y-6 rounded-[2rem] border border-slate-200 bg-white p-8 shadow-soft">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-sm text-slate-500">Kabine</p>
                <h1 className="mt-2 text-4xl font-semibold text-slate-950">{toilet.id}</h1>
              </div>
              <StatusChip label={toilet.status} variant={toilet.status === 'defekt' ? 'alert' : toilet.status === 'abholen' || toilet.status === 'service fällig' ? 'warning' : 'success'} />
            </div>
            <div className="grid gap-6 sm:grid-cols-2">
              <div className="rounded-3xl bg-slate-50 p-6">
                <p className="text-sm text-slate-500">Kunde</p>
                <p className="mt-3 text-lg font-semibold text-slate-950">{toilet.customer}</p>
                <p className="mt-1 text-sm text-slate-600">{toilet.address}</p>
              </div>
              <div className="rounded-3xl bg-slate-50 p-6">
                <p className="text-sm text-slate-500">Aufgabe</p>
                <p className="mt-3 text-lg font-semibold text-slate-950">{toilet.nextJob}</p>
                <p className="mt-4 text-sm text-slate-600">Fahrer: {toilet.driver}</p>
              </div>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
              <p className="text-sm text-slate-500">QR-Code</p>
              <p className="mt-3 text-lg font-semibold text-slate-950">Backup-Nummer: {toilet.id}</p>
              <div className="mt-6 flex justify-center"> <MockQRCode /> </div>
            </div>
            <div className="rounded-3xl bg-slate-50 p-6">
              <p className="text-sm text-slate-500">Historie</p>
              <div className="mt-4 space-y-3">
                {toilet.history.map((item) => (
                  <div key={item.time} className="flex items-center justify-between rounded-3xl bg-white p-4 shadow-sm ring-1 ring-slate-200">
                    <p className="font-medium text-slate-900">{item.event}</p>
                    <p className="text-sm text-slate-500">{item.time}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <aside className="space-y-4">
            <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-soft">
              <p className="text-sm uppercase tracking-[0.28em] text-slate-500">Handeln</p>
              <div className="mt-6 grid gap-3">
                <button className="rounded-2xl bg-brand-500 px-5 py-4 text-left text-sm font-semibold text-white transition hover:bg-brand-700">Serviceauftrag erstellen</button>
                <button className="rounded-2xl border border-slate-200 bg-white px-5 py-4 text-left text-sm font-semibold text-slate-900 transition hover:bg-slate-100">Abholung planen</button>
                <button className="rounded-2xl border border-rose-200 bg-rose-50 px-5 py-4 text-left text-sm font-semibold text-rose-700 transition hover:bg-rose-100">Als defekt markieren</button>
                <button className="rounded-2xl border border-slate-200 bg-white px-5 py-4 text-left text-sm font-semibold text-slate-900 transition hover:bg-slate-100">QR neu drucken</button>
              </div>
            </div>
            <div className="rounded-[2rem] border border-brand-100 bg-brand-50 p-6 shadow-soft">
              <div className="flex items-center gap-3">
                <Truck className="h-5 w-5 text-brand-700" />
                <p className="font-semibold text-brand-900">Tour-Info</p>
              </div>
              <p className="mt-4 text-sm leading-6 text-brand-900">Fahrer {toilet.driver} sieht diese Kabine als Teil der heutigen Tour.</p>
            </div>
          </aside>
        </div>
      </div>
    </main>
  )
}

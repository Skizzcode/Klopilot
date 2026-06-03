'use client'

import { useState } from 'react'
import { ArrowRight, CheckCircle2 } from 'lucide-react'

export function ContactForm() {
  const [value, setValue] = useState('')
  const [sent, setSent] = useState(false)

  if (sent) {
    return (
      <div className="flex items-center gap-3 rounded-[1.75rem] border border-emerald-400/30 bg-emerald-400/10 px-6 py-5 text-sm font-semibold text-emerald-200">
        <CheckCircle2 className="h-5 w-5" />
        Danke! Wir melden uns für das Pilotgespräch.
      </div>
    )
  }

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault()
        if (value.trim()) setSent(true)
      }}
      className="flex flex-col gap-3 sm:flex-row"
    >
      <input
        type="text"
        value={value}
        onChange={(event) => setValue(event.target.value)}
        placeholder="E-Mail oder Telefon"
        className="w-full rounded-[1.75rem] border border-white/15 bg-white/5 px-6 py-4 text-base text-white placeholder:text-slate-400 focus:border-brand-400 focus:outline-none focus:ring-2 focus:ring-brand-500/40"
      />
      <button
        type="submit"
        className="inline-flex shrink-0 items-center justify-center gap-2 rounded-[1.75rem] bg-brand-500 px-7 py-4 text-base font-semibold text-white transition hover:bg-brand-700"
      >
        Senden
        <ArrowRight className="h-4 w-4" />
      </button>
    </form>
  )
}

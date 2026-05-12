export function MockQRCode() {
  return (
    <div className="flex h-52 w-52 items-center justify-center rounded-3xl bg-slate-950 px-4 py-4 text-white shadow-soft ring-1 ring-slate-200">
      <div className="flex h-full w-full flex-col justify-between rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-950 p-4">
        <div className="flex items-center justify-between text-xs uppercase tracking-[0.35em] text-slate-400">
          <span>QR-Karte</span>
          <span>WC-042</span>
        </div>
        <div className="h-full py-2">
          <div className="mx-auto h-full w-full max-w-[140px] rounded-2xl bg-slate-100/5 pb-6 shadow-inner" />
        </div>
        <div className="grid gap-1 text-[9px] uppercase tracking-[0.4em] text-slate-500">
          <span>Kabinen-Tag</span>
          <span>Backup: WC-042</span>
        </div>
      </div>
    </div>
  )
}

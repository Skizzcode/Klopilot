import { CheckCircle, AlertTriangle, Clock3, Share2 } from 'lucide-react'

type StatusChipProps = {
  label: string
  variant?: 'success' | 'warning' | 'neutral' | 'alert'
}

const variantClasses: Record<NonNullable<StatusChipProps['variant']>, string> = {
  success: 'bg-emerald-50 text-emerald-700 ring-emerald-100',
  warning: 'bg-amber-50 text-amber-700 ring-amber-100',
  neutral: 'bg-slate-100 text-slate-700 ring-slate-200',
  alert: 'bg-rose-50 text-rose-700 ring-rose-100'
}

const iconMap = {
  success: CheckCircle,
  warning: Clock3,
  neutral: Share2,
  alert: AlertTriangle
}

export function StatusChip({ label, variant = 'neutral' }: StatusChipProps) {
  const Icon = iconMap[variant]

  return (
    <span className={`inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold ring-1 ${variantClasses[variant]}`}>
      <Icon className="h-3.5 w-3.5" />
      {label}
    </span>
  )
}

import { CheckCircle, AlertTriangle, Clock3, Share2 } from 'lucide-react'

export type StatusVariant = 'success' | 'warning' | 'service' | 'neutral' | 'alert'

type StatusChipProps = {
  label: string
  variant?: StatusVariant
}

const variantClasses: Record<StatusVariant, string> = {
  success: 'bg-emerald-100 text-emerald-700 ring-emerald-200 dark:bg-emerald-950/60 dark:text-emerald-300 dark:ring-emerald-900',
  warning: 'bg-amber-100 text-amber-700 ring-amber-200 dark:bg-amber-950/60 dark:text-amber-300 dark:ring-amber-900',
  service: 'bg-orange-100 text-orange-700 ring-orange-200 dark:bg-orange-950/60 dark:text-orange-300 dark:ring-orange-900',
  neutral: 'bg-gray-100 text-gray-700 ring-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:ring-gray-700',
  alert: 'bg-rose-100 text-rose-700 ring-rose-200 dark:bg-rose-950/60 dark:text-rose-300 dark:ring-rose-900'
}

const iconMap: Record<StatusVariant, typeof CheckCircle> = {
  success: CheckCircle,
  warning: Clock3,
  service: Clock3,
  neutral: Share2,
  alert: AlertTriangle
}

const labelVariants: Record<string, StatusVariant> = {
  vermietet: 'success',
  abholen: 'warning',
  defekt: 'alert',
  'service fällig': 'service',
  frei: 'neutral'
}

export function StatusChip({ label, variant }: StatusChipProps) {
  const resolvedVariant = variant ?? labelVariants[label.trim().toLocaleLowerCase('de-DE')] ?? 'neutral'
  const Icon = iconMap[resolvedVariant]

  return (
    <span className={`inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold ring-1 ${variantClasses[resolvedVariant]}`}>
      <Icon className="h-3.5 w-3.5" />
      {label}
    </span>
  )
}

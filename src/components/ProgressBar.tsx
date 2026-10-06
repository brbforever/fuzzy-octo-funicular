interface ProgressBarProps {
  value: number;
  max: number;
  className?: string;
  barClassName?: string;
  showLabel?: boolean;
}

export function ProgressBar({
  value,
  max,
  className = '',
  barClassName = 'bg-brand-500',
  showLabel = false,
}: ProgressBarProps) {
  const percent = Math.round((value / max) * 100);

  return (
    <div className={`relative h-2 w-full overflow-hidden rounded-full bg-ink-200 ${className}`}>
      <div
        className={`h-full rounded-full transition-all duration-700 ease-out ${barClassName}`}
        style={{ width: `${percent}%` }}
      >
        <div className="h-full w-full rounded-full shimmer-bg animate-shimmer" />
      </div>
      {showLabel && (
        <span className="absolute right-0 -top-6 text-xs font-semibold text-ink-500">
          {percent}%
        </span>
      )}
    </div>
  );
}

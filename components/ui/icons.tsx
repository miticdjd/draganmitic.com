type IconProps = { className?: string };

const base = 'block shrink-0';

export function ArrowUpRight({ className = '' }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className={`${base} ${className}`}>
      <path d="M5 19 19 5M5 5h14v14" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

export function ArrowRight({ className = '' }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className={`${base} ${className}`}>
      <path d="M4 12h16m-6-6 6 6-6 6" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

export function StarMark({ className = '' }: IconProps) {
  return (
    <svg viewBox="0 0 80 80" fill="none" aria-hidden="true" className={`${base} ${className}`}>
      <path
        d="M40 0v80M0 40h80M12 12l56 56M12 68l56-56"
        stroke="currentColor"
        strokeWidth="10"
      />
    </svg>
  );
}

export function SunIcon({ className = '' }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className={`${base} ${className}`}>
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M12 2v2m0 16v2M2 12h2m16 0h2M5 5l1.5 1.5m11 11L19 19M5 19l1.5-1.5m11-11L19 5"
        stroke="currentColor"
        strokeWidth="1.5"
      />
    </svg>
  );
}

export function StatusDot({ className = '' }: IconProps) {
  return (
    <span
      aria-hidden="true"
      className={`inline-block size-[7px] shrink-0 rounded-full bg-accent ${className}`}
    />
  );
}

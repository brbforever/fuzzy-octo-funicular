interface LogoProps {
  className?: string;
}

export function Logo({ className = '' }: LogoProps) {
  return (
    <h1
      className={`font-display text-3xl font-extrabold tracking-tight text-brand-600 ${className}`}
      style={{ fontFamily: '"Baloo Da 2", system-ui, sans-serif' }}
    >
      পড়ুয়া
    </h1>
  );
}

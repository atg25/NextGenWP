interface LogoProps {
  variant?: 'light' | 'dark';
  size?: 'sm' | 'md' | 'lg';
  showText?: boolean;
  className?: string;
}

export default function Logo({ 
  variant = 'light', 
  size = 'md',
  showText = true,
  className = '' 
}: LogoProps) {
  const logoSrc = variant === 'light' 
    ? '/2B695190-7FD9-4581-A431-9EEC6980F53C_1_201_a.jpeg'
    : '/7CCB062D-C126-4CA9-83BA-72ABACC1E20F_1_201_a.jpeg';

  const sizeClasses = {
    sm: 'h-8',
    md: 'h-10',
    lg: 'h-12',
  };

  return (
    <img
      src={logoSrc}
      alt="NewGen Wallcovering"
      className={`${sizeClasses[size]} w-auto ${className}`}
    />
  );
}

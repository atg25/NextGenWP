interface LogoProps {
  variant?: 'light' | 'dark';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export default function Logo({
  variant = 'light',
  size = 'md',
  className = '',
}: LogoProps) {
  const sizeClasses = {
    sm: 'h-8',
    md: 'h-10',
    lg: 'h-16',
  };

  const imageSrc = variant === 'light' ? '/logo-light.jpeg' : '/logo-dark.jpeg';

  return (
    <img
      src={imageSrc}
      alt="NewGen Wallcovering"
      className={`${sizeClasses[size]} w-auto ${className}`}
    />
  );
}

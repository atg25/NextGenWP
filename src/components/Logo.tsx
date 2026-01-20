interface LogoProps {
  variant?: 'small' | 'big';
  className?: string;
}

export default function Logo({ variant = 'small', className = '' }: LogoProps) {
  const src = variant === 'small' ? '/logo-small.jpeg' : '/logo-big.jpeg';
  
  return (
    <img
      src={src}
      alt="NewGen Wallcovering Logo"
      className={`transition-opacity duration-300 hover:opacity-80 ${className}`}
    />
  );
}

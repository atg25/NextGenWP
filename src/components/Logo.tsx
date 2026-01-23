interface LogoProps {
  className?: string;
}

export default function Logo({ className = '' }: LogoProps) {
  return (
    <img
      src="/logos/SquareLogo.png"
      alt="NextGen Wallcovering Logo"
      className={`transition-opacity duration-300 hover:opacity-80 ${className}`}
    />
  );
}

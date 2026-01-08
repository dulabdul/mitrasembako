import Link from 'next/link';
import { ButtonHTMLAttributes, ReactNode } from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  href?: string;
  variant?: 'primary' | 'secondary' | 'outline' | 'whatsapp';
  size?: 'sm' | 'md' | 'lg';
  children: ReactNode;
  target?: string;
}

export default function Button({
  href,
  variant = 'primary',
  size = 'md',
  className,
  children,
  target,
  ...props
}: ButtonProps) {
  const baseStyles =
    'inline-flex items-center justify-center rounded-full font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none';

  const variants = {
    primary:
      'bg-[var(--color-primary)] text-white hover:bg-red-700 focus:ring-red-500',
    secondary:
      'bg-[var(--color-secondary)] text-black hover:bg-yellow-500 focus:ring-yellow-400',
    outline:
      'border-2 border-[var(--color-primary)] text-[var(--color-primary)] hover:bg-red-50',
    whatsapp: 'bg-[#25D366] text-white hover:bg-[#128C7E]',
  };

  const sizes = {
    sm: 'h-9 px-4 text-sm',
    md: 'h-11 px-8 text-base',
    lg: 'h-14 px-10 text-lg',
  };

  const classes = twMerge(
    clsx(baseStyles, variants[variant], sizes[size], className)
  );

  if (href) {
    return (
      <Link
        href={href}
        className={classes}
        target={target}
        aria-label={props['aria-label']}>
        {children}
      </Link>
    );
  }

  return (
    <button
      className={classes}
      {...props}>
      {children}
    </button>
  );
}

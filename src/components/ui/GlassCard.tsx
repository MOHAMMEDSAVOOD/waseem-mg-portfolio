import React from 'react';
import { clsx } from 'clsx';

interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  hoverEffect?: boolean;
  glowCrimson?: boolean;
  className?: string;
}

export const GlassCard: React.FC<GlassCardProps> = ({
  children,
  hoverEffect = true,
  glowCrimson = false,
  className,
  ...props
}) => {
  return (
    <div
      className={clsx(
        'glass-panel rounded-2xl p-6 md:p-8 relative overflow-hidden transition-all duration-300',
        hoverEffect && 'glass-panel-hover',
        glowCrimson && 'glow-crimson-subtle border-rose-500/30',
        className
      )}
      {...props}
    >
      {/* Subtle corner light reflection */}
      <div className="absolute -top-24 -left-24 w-48 h-48 bg-white/[0.03] rounded-full blur-2xl pointer-events-none" />
      {children}
    </div>
  );
};

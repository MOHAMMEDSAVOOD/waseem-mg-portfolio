import React from 'react';

interface MetricBadgeProps {
  value: string;
  label: string;
  description?: string;
  icon?: React.ReactNode;
}

export const MetricBadge: React.FC<MetricBadgeProps> = ({ value, label, description, icon }) => {
  return (
    <div className="flex flex-col p-4 md:p-5 rounded-xl bg-white/[0.02] border border-white/[0.06] hover:border-rose-500/20 transition-all">
      <div className="flex items-center justify-between gap-3 mb-2">
        <span className="font-heading font-extrabold text-2xl md:text-3xl tracking-tight text-white">
          {value}
        </span>
        {icon && <div className="text-rose-500">{icon}</div>}
      </div>
      <span className="text-xs font-semibold uppercase tracking-wider text-rose-400 font-mono-data">
        {label}
      </span>
      {description && (
        <span className="text-xs text-slate-400 mt-1 line-clamp-2">
          {description}
        </span>
      )}
    </div>
  );
};

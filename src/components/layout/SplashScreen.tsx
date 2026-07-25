import React, { useEffect, useState } from 'react';
import mwmgLogo from '../../assets/mwmg-logo.png';

interface SplashScreenProps {
  onComplete: () => void;
}

export const SplashScreen: React.FC<SplashScreenProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setIsFading(true);
            setTimeout(onComplete, 400);
          }, 200);
          return 100;
        }
        return prev + 10;
      });
    }, 80);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div
      className={`fixed inset-0 z-50 bg-[#050505] flex flex-col items-center justify-center select-none transition-opacity duration-500 ${
        isFading ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      <div className="flex flex-col items-center space-y-6 text-center">
        {/* Official Image Logo */}
        <div className="relative flex items-center justify-center">
          <div className="absolute inset-0 rounded-full bg-red-600/15 blur-2xl animate-pulse" />
          <img
            src={mwmgLogo}
            alt="MWMG Logo"
            className="h-14 sm:h-16 w-auto object-contain relative z-10 animate-in zoom-in-95 duration-500 filter drop-shadow-[0_4px_20px_rgba(220,38,38,0.4)]"
          />
        </div>

        {/* Subtitle */}
        <span className="text-[10px] font-mono-tag tracking-[0.25em] text-slate-500 uppercase block">
          ESSOTTO PRIVATE LIMITED
        </span>

        {/* Sleek 1px Red Progress Bar */}
        <div className="w-48 h-[2px] bg-white/10 rounded-full overflow-hidden relative mt-2">
          <div
            className="h-full bg-red-600 transition-all duration-150 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </div>
  );
};

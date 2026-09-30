import React from 'react';
import { useApp } from '../context/AppContext';
import { CheckCircle2 } from 'lucide-react';

export const Toast: React.FC = () => {
  const { toastMessage } = useApp();

  if (!toastMessage) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 animate-bounce duration-300 pointer-events-none">
      <div className="flex items-center gap-3 px-4 py-3 bg-stone-900/95 dark:bg-emerald-950/95 text-white rounded-xl shadow-2xl border border-emerald-500/30 backdrop-blur-md">
        <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
        <p className="text-sm font-medium tracking-wide">{toastMessage}</p>
      </div>
    </div>
  );
};

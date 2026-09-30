import React, { useState, useEffect } from 'react';
import { useApp } from '../context/AppContext';
import { DHIKR_PRESETS } from '../data/tasbeehPresets';
import { DhikrPreset } from '../types';
import { RotateCcw, Sparkles, Award, Volume2, VolumeX, CheckCircle, ChevronRight } from 'lucide-react';

export const TasbeehPage: React.FC = () => {
  const { showToast } = useApp();

  const [selectedPreset, setSelectedPreset] = useState<DhikrPreset>(DHIKR_PRESETS[0]);
  const [count, setCount] = useState<number>(0);
  const [completedCycles, setCompletedCycles] = useState<number>(0);
  const [totalLifetimeCount, setTotalLifetimeCount] = useState<number>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('ikh_tasbeeh_lifetime');
      return saved ? parseInt(saved, 10) : 0;
    }
    return 0;
  });
  const [soundEnabled, setSoundEnabled] = useState<boolean>(true);

  // Save lifetime count to localStorage
  useEffect(() => {
    localStorage.setItem('ikh_tasbeeh_lifetime', totalLifetimeCount.toString());
  }, [totalLifetimeCount]);

  // Audio click / chime using Web Audio API (no external asset dependency!)
  const playClickSound = (pitch = 440) => {
    if (!soundEnabled) return;
    try {
      const audioCtx = new (window.AudioContext || (window as any).webkitAudioContext)();
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(pitch, audioCtx.currentTime);
      gain.gain.setValueAtTime(0.08, audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.08);

      osc.connect(gain);
      gain.connect(audioCtx.destination);
      osc.start();
      osc.stop(audioCtx.currentTime + 0.08);
    } catch {
      // AudioContext not allowed or unsupported
    }
  };

  const handleIncrement = () => {
    const nextCount = count + 1;
    const target = selectedPreset.targetCount;

    // Haptic feedback if available on mobile
    if (navigator.vibrate) {
      navigator.vibrate(25);
    }

    if (nextCount >= target) {
      playClickSound(880); // higher cheerful tone
      setCount(0);
      setCompletedCycles(prev => prev + 1);
      setTotalLifetimeCount(prev => prev + 1);
      showToast(`Masha'Allah! Completed ${target} count of ${selectedPreset.transliteration}!`);
    } else {
      playClickSound(520);
      setCount(nextCount);
      setTotalLifetimeCount(prev => prev + 1);
    }
  };

  const handleReset = () => {
    setCount(0);
    showToast('Counter reset to 0');
  };

  const handleSelectPreset = (preset: DhikrPreset) => {
    setSelectedPreset(preset);
    setCount(0);
  };

  // Progress percentage
  const progressPercent = Math.min(100, Math.round((count / selectedPreset.targetCount) * 100));

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 space-y-8">
      
      {/* Header */}
      <div className="text-center space-y-2">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 dark:bg-amber-950 text-amber-800 dark:text-amber-300 text-xs font-semibold">
          <span>📿</span> Digital Tasbeeh Counter
        </span>
        <h1 className="font-serif text-3xl sm:text-4xl font-extrabold text-stone-900 dark:text-stone-100">
          Remembrance of Allah (Dhikr)
        </h1>
        <p className="text-sm text-stone-600 dark:text-stone-400 max-w-lg mx-auto">
          "Unquestionably, by the remembrance of Allah hearts are assured." (Surah Ar-Ra'd 13:28)
        </p>
      </div>

      {/* Main Interactive Counter Card */}
      <div className="p-8 sm:p-10 rounded-3xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 shadow-islamic-lg flex flex-col items-center space-y-6 relative overflow-hidden text-center">
        
        {/* Controls row */}
        <div className="w-full flex items-center justify-between text-xs">
          <div className="flex items-center gap-2">
            <span className="font-semibold text-stone-500">Cycles:</span>
            <span className="px-2.5 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 font-bold">
              {completedCycles} completed
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setSoundEnabled(!soundEnabled)}
              className="p-2 rounded-xl text-stone-500 hover:text-stone-800 dark:hover:text-stone-200 border border-stone-200 dark:border-stone-700 hover:bg-stone-100"
              title={soundEnabled ? 'Mute click sound' : 'Enable click sound'}
            >
              {soundEnabled ? <Volume2 className="w-4 h-4 text-emerald-700" /> : <VolumeX className="w-4 h-4 text-stone-400" />}
            </button>
            <button
              onClick={handleReset}
              className="flex items-center gap-1 px-3 py-1.5 rounded-xl border border-stone-200 dark:border-stone-700 text-stone-600 dark:text-stone-300 hover:bg-stone-100 text-xs font-semibold"
              title="Reset current count"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Reset</span>
            </button>
          </div>
        </div>

        {/* Selected Dhikr Display */}
        <div className="space-y-2 max-w-md mx-auto">
          <h2 className="font-quran-text text-3xl sm:text-4xl text-emerald-950 dark:text-emerald-50 leading-relaxed font-bold">
            {selectedPreset.arabic}
          </h2>
          <p className="text-base font-bold text-stone-800 dark:text-stone-200">
            {selectedPreset.transliteration}
          </p>
          <p className="text-xs sm:text-sm text-stone-500 italic">
            "{selectedPreset.meaning}"
          </p>
        </div>

        {/* Big Tap / Counter Button with Progress Ring */}
        <div className="relative py-4 flex items-center justify-center">
          <svg className="w-64 h-64 transform -rotate-90">
            {/* Background Ring */}
            <circle
              cx="128"
              cy="128"
              r="110"
              stroke="currentColor"
              strokeWidth="10"
              className="text-stone-100 dark:text-stone-800"
              fill="transparent"
            />
            {/* Progress Fill */}
            <circle
              cx="128"
              cy="128"
              r="110"
              stroke="currentColor"
              strokeWidth="10"
              className="text-emerald-700 dark:text-emerald-500 transition-all duration-150 ease-out"
              strokeDasharray={2 * Math.PI * 110}
              strokeDashoffset={2 * Math.PI * 110 * (1 - progressPercent / 100)}
              strokeLinecap="round"
              fill="transparent"
            />
          </svg>

          {/* Central Interactive Click Area */}
          <button
            onClick={handleIncrement}
            className="absolute inset-4 m-auto w-48 h-48 rounded-full bg-gradient-to-br from-emerald-800 to-emerald-950 text-white flex flex-col items-center justify-center shadow-xl shadow-emerald-900/30 hover:scale-[1.03] active:scale-95 transition-transform group cursor-pointer border-4 border-gold-400/40 select-none"
            aria-label="Tap to count"
          >
            <span className="font-mono text-5xl sm:text-6xl font-extrabold tracking-tight group-hover:scale-105 transition-transform">
              {count}
            </span>
            <span className="text-xs font-semibold text-emerald-200 uppercase tracking-widest mt-1">
              / {selectedPreset.targetCount}
            </span>
            <span className="text-[10px] text-gold-300 font-medium tracking-wider mt-1 opacity-80 group-hover:opacity-100">
              TAP HERE
            </span>
          </button>
        </div>

        {/* Virtue / Hadith box */}
        <div className="w-full max-w-lg p-4 rounded-2xl bg-amber-50/70 dark:bg-amber-950/40 border border-amber-200/60 dark:border-amber-800/40 text-xs text-amber-900 dark:text-amber-300 space-y-1 text-center">
          <span className="font-bold flex items-center justify-center gap-1.5">
            <Sparkles className="w-4 h-4 text-amber-600" /> Prophetic Virtue
          </span>
          <p className="leading-relaxed">{selectedPreset.virtue}</p>
        </div>

        {/* Lifetime stat */}
        <div className="text-xs text-stone-400 font-medium">
          Total Lifetime Dhikr: <span className="font-bold text-emerald-700 dark:text-emerald-400">{totalLifetimeCount.toLocaleString()}</span>
        </div>
      </div>

      {/* Preset Dhikr Selector Section */}
      <div className="space-y-4">
        <h3 className="font-serif font-bold text-lg text-stone-900 dark:text-stone-100">
          Preset Dhikr Options
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {DHIKR_PRESETS.map((preset) => {
            const isSelected = selectedPreset.id === preset.id;
            return (
              <button
                key={preset.id}
                onClick={() => handleSelectPreset(preset)}
                className={`p-4 rounded-2xl border text-left transition-all flex items-center justify-between ${
                  isSelected
                    ? 'bg-emerald-50 dark:bg-emerald-950/60 border-emerald-600 shadow-sm ring-1 ring-emerald-600'
                    : 'bg-white dark:bg-stone-900 border-stone-200 dark:border-stone-800 hover:border-emerald-600/50'
                }`}
              >
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-sm text-stone-900 dark:text-stone-100">
                      {preset.transliteration}
                    </span>
                    <span className="text-[10px] px-2 py-0.5 rounded-full bg-stone-100 dark:bg-stone-800 text-stone-600 dark:text-stone-300 font-semibold">
                      Target: {preset.targetCount}
                    </span>
                  </div>
                  <p className="text-xs text-stone-500 line-clamp-1">{preset.meaning}</p>
                </div>

                <div className="text-right">
                  <span className="font-quran-text text-lg text-stone-700 dark:text-stone-300">
                    {preset.arabic}
                  </span>
                </div>
              </button>
            );
          })}
        </div>
      </div>

    </div>
  );
};

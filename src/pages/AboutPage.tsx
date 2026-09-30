import React from 'react';
import { useApp } from '../context/AppContext';
import { 
  Compass, 
  BookOpen, 
  HeartHandshake, 
  Sparkles, 
  ShieldCheck, 
  Cpu, 
  Layers, 
  Heart, 
  CheckCircle2,
  Lock
} from 'lucide-react';

export const AboutPage: React.FC = () => {
  const { setActivePage } = useApp();

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-10 space-y-12">
      
      {/* Header Banner */}
      <div className="text-center space-y-4">
        <div className="w-16 h-16 mx-auto rounded-3xl bg-gradient-to-br from-emerald-800 to-emerald-950 flex items-center justify-center text-gold-300 shadow-xl border border-gold-400/40">
          <Compass className="w-8 h-8 text-gold-300" />
        </div>
        <h1 className="font-serif text-3xl sm:text-5xl font-extrabold text-stone-900 dark:text-stone-100 tracking-tight">
          About Islamic Knowledge Hub
        </h1>
        <p className="text-base sm:text-lg text-stone-600 dark:text-stone-300 max-w-2xl mx-auto leading-relaxed">
          An authentic, tranquil, modern frontend sanctuary crafted to make divine remembrance, Quranic reflection, and classical knowledge accessible to all.
        </p>
      </div>

      {/* Highlights 3-Card Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-6 rounded-3xl bg-white dark:bg-stone-900 border border-stone-200/90 dark:border-stone-800 space-y-3 shadow-sm">
          <div className="w-10 h-10 rounded-2xl bg-emerald-100 dark:bg-emerald-950 flex items-center justify-center text-emerald-800 dark:text-emerald-300">
            <BookOpen className="w-5 h-5" />
          </div>
          <h3 className="font-bold text-lg text-stone-900 dark:text-stone-100">
            The Holy Quran
          </h3>
          <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-400 leading-relaxed">
            Beautiful Quranic typography with Amiri calligraphy, verse audio recitations, dual English and Urdu translations, font resizing, and reading progress indicators.
          </p>
        </div>

        <div className="p-6 rounded-3xl bg-white dark:bg-stone-900 border border-stone-200/90 dark:border-stone-800 space-y-3 shadow-sm">
          <div className="w-10 h-10 rounded-2xl bg-amber-100 dark:bg-amber-950 flex items-center justify-center text-amber-800 dark:text-amber-300">
            <HeartHandshake className="w-5 h-5" />
          </div>
          <h3 className="font-bold text-lg text-stone-900 dark:text-stone-100">
            Authentic Duas
          </h3>
          <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-400 leading-relaxed">
            Over 12 categories of Prophetic supplications with complete Arabic text, pronunciation transliterations, English meanings, Urdu translations, and Hadith sources.
          </p>
        </div>

        <div className="p-6 rounded-3xl bg-white dark:bg-stone-900 border border-stone-200/90 dark:border-stone-800 space-y-3 shadow-sm">
          <div className="w-10 h-10 rounded-2xl bg-emerald-100 dark:bg-emerald-950 flex items-center justify-center text-emerald-800 dark:text-emerald-300">
            <Sparkles className="w-5 h-5" />
          </div>
          <h3 className="font-bold text-lg text-stone-900 dark:text-stone-100">
            Islamic Knowledge
          </h3>
          <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-400 leading-relaxed">
            Comprehensive knowledge modules covering Quranic preservation, Hadith sciences, Seerah of the Prophet (ﷺ), pillars of worship, and family ethics.
          </p>
        </div>
      </div>

      {/* Frontend Architecture & Disclaimer Banner */}
      <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-emerald-950 via-stone-900 to-emerald-900 text-white shadow-xl space-y-6 border border-emerald-700/40 relative overflow-hidden">
        <div className="flex items-center gap-3 text-gold-300">
          <ShieldCheck className="w-6 h-6" />
          <h2 className="font-serif text-xl sm:text-2xl font-bold">
            Frontend-Only Platform Architecture
          </h2>
        </div>

        <p className="text-sm sm:text-base text-stone-200 leading-relaxed">
          Islamic Knowledge Hub is designed strictly as a high-performance, client-side web application. It requires zero backend servers, maintains no remote databases, and requires no user authentication or signup.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
          <div className="flex items-start gap-3 p-4 rounded-2xl bg-white/5 border border-white/10">
            <Lock className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
            <div className="space-y-1">
              <h4 className="font-bold text-sm">100% Client-Side Privacy</h4>
              <p className="text-xs text-stone-300">
                Bookmarks, reading progress, and Tasbeeh counters are saved solely inside your browser's private localStorage. No personal data leaves your device.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3 p-4 rounded-2xl bg-white/5 border border-white/10">
            <Cpu className="w-5 h-5 text-gold-300 shrink-0 mt-0.5" />
            <div className="space-y-1">
              <h4 className="font-bold text-sm">Self-Contained Islamic Data</h4>
              <p className="text-xs text-stone-300">
                All Quranic verses, Hadith citations, supplications, and articles are static, local TypeScript datasets carefully curated for authenticity.
              </p>
            </div>
          </div>
        </div>

        <div className="p-4 rounded-2xl bg-emerald-900/40 border border-emerald-600/30 text-xs text-emerald-200">
          <p className="font-semibold mb-1">Authenticity & Sources Notice:</p>
          <p className="leading-relaxed">
            All religious references cite authentic canonical compilations including Sahih al-Bukhari, Sahih Muslim, Sunan Abi Dawud, Jami` at-Tirmidhi, and classical Tafsir works.
          </p>
        </div>
      </div>

      {/* Visual Identity & Design Values */}
      <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 space-y-4">
        <h3 className="font-serif text-xl font-bold text-stone-900 dark:text-stone-100 flex items-center gap-2">
          <Layers className="w-5 h-5 text-emerald-700" />
          <span>Design Philosophy</span>
        </h3>
        <p className="text-sm text-stone-600 dark:text-stone-400 leading-relaxed">
          Inspired by the spiritual harmony and architectural mastery of classical Islamic civilization, the interface pairs calming emerald tones (representing renewal and paradise) with warm cream neutrals and gentle gold accents. The typography leverages <strong>Amiri</strong> and <strong>Scheherazade New</strong> for calligraphic reverence and <strong>Plus Jakarta Sans</strong> for effortless legibility.
        </p>

        <div className="pt-4 flex flex-wrap items-center gap-3">
          <button
            onClick={() => setActivePage('quran')}
            className="px-5 py-2.5 rounded-xl bg-emerald-800 hover:bg-emerald-900 text-white font-semibold text-xs sm:text-sm transition-all"
          >
            Start Reading Quran
          </button>
          <button
            onClick={() => setActivePage('tasbeeh')}
            className="px-5 py-2.5 rounded-xl bg-stone-100 dark:bg-stone-800 hover:bg-stone-200 text-stone-800 dark:text-stone-200 font-semibold text-xs sm:text-sm transition-all"
          >
            Use Tasbeeh Counter
          </button>
        </div>
      </div>

    </div>
  );
};

import React from 'react';
import { useApp } from '../context/AppContext';
import { ActivePage } from '../types';
import { Heart, Compass, BookOpen, HeartHandshake, Sparkles, Info, ShieldCheck, Mail, ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const { setActivePage, navigateToSurah } = useApp();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks: { label: string; page: ActivePage }[] = [
    { label: 'Home', page: 'home' },
    { label: 'Holy Quran', page: 'quran' },
    { label: 'Duas Library', page: 'duas' },
    { label: 'Islamic Knowledge', page: 'articles' },
    { label: 'Tasbeeh Counter', page: 'tasbeeh' },
    { label: 'Saved Bookmarks', page: 'bookmarks' },
    { label: 'About Project', page: 'about' },
  ];

  const popularSurahs = [
    { name: 'Al-Fatihah', num: 1 },
    { name: 'Al-Baqarah (Ayat al-Kursi)', num: 2 },
    { name: 'Al-Kahf', num: 18 },
    { name: 'Ya-Sin', num: 36 },
    { name: 'Ar-Rahman', num: 55 },
    { name: 'Al-Mulk', num: 67 },
  ];

  return (
    <footer className="border-t border-emerald-950/10 dark:border-emerald-500/20 bg-stone-100/70 dark:bg-stone-950 transition-colors mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          
          {/* Brand info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-800 to-emerald-950 flex items-center justify-center text-gold-300 font-bold border border-gold-400/30">
                <Compass className="w-5 h-5 text-gold-300" />
              </div>
              <span className="font-serif font-bold text-lg text-emerald-950 dark:text-emerald-100">
                Islamic Knowledge Hub
              </span>
            </div>
            <p className="text-sm text-stone-600 dark:text-stone-400 leading-relaxed">
              A serene and modern digital sanctuary dedicated to the authentic recitation of the Holy Quran, Prophetic supplications, and timeless Islamic wisdom.
            </p>
            <div className="pt-2 flex items-center gap-2 text-xs font-semibold text-emerald-800 dark:text-emerald-400">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>100% Frontend-Only • No Tracking • Pure Privacy</span>
            </div>
          </div>

          {/* Quick Navigation */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-stone-900 dark:text-stone-100">
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm text-stone-600 dark:text-stone-400">
              {navLinks.map((link) => (
                <li key={link.page}>
                  <button
                    onClick={() => setActivePage(link.page)}
                    className="hover:text-emerald-800 dark:hover:text-emerald-300 hover:underline transition-all"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Popular Surahs */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-stone-900 dark:text-stone-100">
              Popular Surahs
            </h4>
            <ul className="space-y-2 text-sm text-stone-600 dark:text-stone-400">
              {popularSurahs.map((surah) => (
                <li key={surah.num}>
                  <button
                    onClick={() => navigateToSurah(surah.num)}
                    className="hover:text-emerald-800 dark:hover:text-emerald-300 hover:underline transition-all flex items-center gap-2"
                  >
                    <BookOpen className="w-3.5 h-3.5 text-emerald-700/60" />
                    <span>{surah.name}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Daily Duas & Disclaimer */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-stone-900 dark:text-stone-100">
              Authentic Islamic Heritage
            </h4>
            <p className="text-xs text-stone-600 dark:text-stone-400 leading-relaxed">
              Verses from the Holy Quran and Hadith narrations are drawn from renowned verified classical authorities including Sahih al-Bukhari, Sahih Muslim, and classical Tafsir literature.
            </p>
            <div className="p-3.5 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200/60 dark:border-emerald-800/60 text-xs text-emerald-900 dark:text-emerald-300">
              <p className="font-serif text-sm font-semibold mb-1 text-center font-arabic-title">
                رَبِّ زِدْنِي عِلْمًا
              </p>
              <p className="text-center italic">"My Lord, increase me in knowledge."</p>
            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-stone-200 dark:border-stone-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500">
          <p>© {new Date().getFullYear()} Islamic Knowledge Hub. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <button
              onClick={() => setActivePage('about')}
              className="hover:text-stone-700 dark:hover:text-stone-300 underline"
            >
              Frontend Disclaimer
            </button>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 p-2 rounded-xl bg-stone-200/70 dark:bg-stone-800 hover:bg-emerald-100 dark:hover:bg-emerald-900/50 text-stone-700 dark:text-stone-300 transition-colors"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

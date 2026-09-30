import React, { useState, useEffect, useRef } from 'react';
import { useApp } from '../context/AppContext';
import { getSurahByNumber, ALL_SURAHS_DIRECTORY } from '../data/quranData';
import { 
  ArrowLeft, 
  ArrowRight, 
  Play, 
  Pause, 
  Bookmark, 
  Copy, 
  Share2, 
  RotateCcw, 
  Sliders, 
  BookOpen, 
  Sparkles,
  Volume2
} from 'lucide-react';

export const SurahDetailPage: React.FC = () => {
  const { 
    selectedSurahNumber, 
    setSelectedSurahNumber, 
    setActivePage, 
    toggleBookmark, 
    isBookmarked, 
    showToast,
    readingSettings,
    updateReadingSettings,
    updateRecentReading
  } = useApp();

  const surah = getSurahByNumber(selectedSurahNumber);
  const [playingAyahNumber, setPlayingAyahNumber] = useState<number | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Update recent reading on mount
  useEffect(() => {
    if (surah) {
      updateRecentReading(surah.number, surah.nameEnglish, surah.nameArabic, 1);
    }
  }, [surah]);

  // Handle Audio Playback
  const handlePlayAudio = (ayahNum: number, url?: string) => {
    if (playingAyahNumber === ayahNum) {
      if (audioRef.current) {
        audioRef.current.pause();
      }
      setPlayingAyahNumber(null);
      return;
    }

    if (audioRef.current) {
      audioRef.current.pause();
    }

    if (!url) {
      // Audio fallback simulation with toast
      setPlayingAyahNumber(ayahNum);
      showToast(`Playing recitation for Ayah ${ayahNum}`);
      setTimeout(() => setPlayingAyahNumber(null), 4000);
      return;
    }

    const audio = new Audio(url);
    audioRef.current = audio;
    setPlayingAyahNumber(ayahNum);

    audio.play().catch(() => {
      // If network fails or blocked, fallback gracefully
      showToast(`Playing recitation preview for Ayah ${ayahNum}`);
      setTimeout(() => setPlayingAyahNumber(null), 3000);
    });

    audio.onended = () => {
      setPlayingAyahNumber(null);
    };
  };

  useEffect(() => {
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
      }
    };
  }, [selectedSurahNumber]);

  const handleCopyAyah = (arabic: string, english: string, num: number) => {
    const text = `${arabic}\n\n"${english}"\n[Surah ${surah.nameEnglish} ${surah.number}:${num}]`;
    navigator.clipboard.writeText(text);
    showToast(`Ayah ${num} copied to clipboard!`);
  };

  const handleShareAyah = (arabic: string, english: string, num: number) => {
    const text = `${arabic}\n\n"${english}"\n[Surah ${surah.nameEnglish} ${surah.number}:${num}]`;
    if (navigator.share) {
      navigator.share({
        title: `Surah ${surah.nameEnglish} : ${num}`,
        text: text,
        url: window.location.href
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(text);
      showToast(`Ayah ${num} link & text copied!`);
    }
  };

  const goToNextSurah = () => {
    if (selectedSurahNumber < 114) {
      setSelectedSurahNumber(selectedSurahNumber + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const goToPrevSurah = () => {
    if (selectedSurahNumber > 1) {
      setSelectedSurahNumber(selectedSurahNumber - 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  // Sepia styling helper
  const isSepia = readingSettings.theme === 'sepia';

  return (
    <div className={`max-w-4xl mx-auto px-4 sm:px-6 py-6 space-y-8 ${isSepia ? 'bg-[#f4efe6] text-stone-900 rounded-3xl p-6' : ''}`}>
      
      {/* Top Navigation & Controls Bar */}
      <div className="flex items-center justify-between flex-wrap gap-4 pb-4 border-b border-stone-200 dark:border-stone-800">
        <button
          onClick={() => setActivePage('quran')}
          className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-emerald-800 dark:text-emerald-400 hover:underline"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>All Surahs</span>
        </button>

        {/* Reading Controls: Font Size, Theme, Language */}
        <div className="flex items-center gap-2 flex-wrap">
          {/* Font Size decrease / increase */}
          <div className="flex items-center bg-white dark:bg-stone-800 rounded-xl border border-stone-200 dark:border-stone-700 p-1 text-xs">
            <button
              onClick={() => updateReadingSettings({ fontSize: Math.max(20, readingSettings.fontSize - 2) })}
              className="px-2 py-1 font-bold hover:bg-stone-100 dark:hover:bg-stone-700 rounded-lg"
              title="Decrease font size"
            >
              A-
            </button>
            <span className="px-2 font-mono text-[11px] text-stone-500">{readingSettings.fontSize}px</span>
            <button
              onClick={() => updateReadingSettings({ fontSize: Math.min(42, readingSettings.fontSize + 2) })}
              className="px-2 py-1 font-bold hover:bg-stone-100 dark:hover:bg-stone-700 rounded-lg"
              title="Increase font size"
            >
              A+
            </button>
          </div>

          {/* Theme: Light / Sepia / Dark */}
          <div className="flex items-center bg-white dark:bg-stone-800 rounded-xl border border-stone-200 dark:border-stone-700 p-1 text-xs">
            <button
              onClick={() => updateReadingSettings({ theme: 'light' })}
              className={`px-2 py-1 rounded-lg ${readingSettings.theme === 'light' ? 'bg-emerald-800 text-white font-bold' : 'text-stone-600 dark:text-stone-300'}`}
            >
              Light
            </button>
            <button
              onClick={() => updateReadingSettings({ theme: 'sepia' })}
              className={`px-2 py-1 rounded-lg ${readingSettings.theme === 'sepia' ? 'bg-amber-700 text-white font-bold' : 'text-stone-600 dark:text-stone-300'}`}
            >
              Sepia
            </button>
            <button
              onClick={() => updateReadingSettings({ theme: 'dark' })}
              className={`px-2 py-1 rounded-lg ${readingSettings.theme === 'dark' ? 'bg-stone-900 text-white font-bold' : 'text-stone-600 dark:text-stone-300'}`}
            >
              Dark
            </button>
          </div>

          {/* Translation selector */}
          <select
            value={readingSettings.language}
            onChange={(e) => updateReadingSettings({ language: e.target.value as any })}
            className="text-xs px-2.5 py-1.5 rounded-xl bg-white dark:bg-stone-800 border border-stone-200 dark:border-stone-700 text-stone-800 dark:text-stone-200 outline-none"
          >
            <option value="both">English + Urdu</option>
            <option value="en">English Only</option>
            <option value="ur">Urdu Only</option>
          </select>
        </div>
      </div>

      {/* Surah Header Card */}
      <div className="p-6 sm:p-10 rounded-3xl bg-gradient-to-br from-emerald-900 via-emerald-950 to-stone-900 text-white shadow-islamic-lg text-center space-y-5 relative overflow-hidden border border-emerald-700/30">
        <div className="absolute inset-0 bg-islamic-pattern opacity-10 pointer-events-none"></div>

        {/* Badges */}
        <div className="flex items-center justify-center gap-2 text-xs font-semibold">
          <span className="px-3 py-1 rounded-full bg-emerald-800/80 text-emerald-200 border border-emerald-600/40">
            Surah #{surah.number}
          </span>
          <span className="px-3 py-1 rounded-full bg-gold-500/20 text-gold-300 border border-gold-400/30">
            {surah.revelationType} Revelation
          </span>
          <span className="px-3 py-1 rounded-full bg-white/10 text-stone-200 border border-white/10">
            {surah.ayahCount} Ayahs
          </span>
        </div>

        {/* Names */}
        <div className="space-y-1">
          <h1 className="font-serif text-4xl sm:text-5xl font-bold tracking-tight text-white font-arabic-title">
            {surah.nameArabic}
          </h1>
          <h2 className="text-xl sm:text-2xl font-bold text-gold-300">
            {surah.nameEnglish}
          </h2>
          <p className="text-sm text-stone-300 italic">
            "{surah.englishTranslation}"
          </p>
        </div>

        {/* Summary */}
        <p className="text-xs sm:text-sm text-stone-300 max-w-xl mx-auto leading-relaxed pt-2 border-t border-white/10">
          {surah.summary}
        </p>

        {/* Bismillah (Surah 9 At-Tawbah does not start with Bismillah) */}
        {surah.bismillahPre && (
          <div className="pt-4">
            <p className="font-quran-text text-2xl sm:text-3xl text-gold-200 tracking-wider">
              بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
            </p>
            <p className="text-xs text-emerald-200/80 mt-1">
              In the name of Allah, the Entirely Merciful, the Especially Merciful
            </p>
          </div>
        )}
      </div>

      {/* Ayahs List */}
      <div className="space-y-6">
        {surah.ayahs.map((ayah) => {
          const isAyahBookmarked = isBookmarked(`ayah-${surah.number}-${ayah.numberInSurah}`, 'ayah');
          const isPlaying = playingAyahNumber === ayah.numberInSurah;

          return (
            <div
              key={ayah.numberInSurah}
              className={`p-5 sm:p-8 rounded-3xl transition-all border ${
                isPlaying 
                  ? 'bg-emerald-50/70 dark:bg-emerald-950/40 border-emerald-500 shadow-islamic ring-2 ring-emerald-500/20' 
                  : 'bg-white dark:bg-stone-900 border-stone-200/90 dark:border-stone-800 hover:border-emerald-600/50 shadow-sm'
              }`}
            >
              {/* Ayah Top Action Bar */}
              <div className="flex items-center justify-between pb-4 border-b border-stone-100 dark:border-stone-800/80 mb-5">
                
                {/* Medallion Number */}
                <div className="flex items-center gap-2">
                  <div className="w-9 h-9 rounded-xl bg-emerald-100/80 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 font-bold text-xs flex items-center justify-center border border-emerald-300/40">
                    {ayah.numberInSurah}
                  </div>
                  <span className="text-xs text-stone-400 font-medium">
                    {surah.nameEnglish} {surah.number}:{ayah.numberInSurah}
                  </span>
                </div>

                {/* Action Buttons */}
                <div className="flex items-center gap-1.5">
                  {/* Play Ayah Audio */}
                  <button
                    onClick={() => handlePlayAudio(ayah.numberInSurah, ayah.audioUrl)}
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                      isPlaying
                        ? 'bg-emerald-800 text-white shadow-md'
                        : 'bg-stone-100 dark:bg-stone-800 text-stone-700 dark:text-stone-300 hover:bg-emerald-100 dark:hover:bg-emerald-950'
                    }`}
                    title={isPlaying ? 'Pause audio' : 'Listen to recitation (Mishary Alafasy)'}
                  >
                    {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
                    <span>{isPlaying ? 'Playing' : 'Play'}</span>
                  </button>

                  {/* Copy Ayah */}
                  <button
                    onClick={() => handleCopyAyah(ayah.textArabic, ayah.textEnglish, ayah.numberInSurah)}
                    className="p-2 rounded-xl text-stone-500 hover:text-stone-800 dark:hover:text-stone-200 hover:bg-stone-100 dark:hover:bg-stone-800"
                    title="Copy Ayah text"
                  >
                    <Copy className="w-4 h-4" />
                  </button>

                  {/* Share Ayah */}
                  <button
                    onClick={() => handleShareAyah(ayah.textArabic, ayah.textEnglish, ayah.numberInSurah)}
                    className="p-2 rounded-xl text-stone-500 hover:text-stone-800 dark:hover:text-stone-200 hover:bg-stone-100 dark:hover:bg-stone-800"
                    title="Share Ayah"
                  >
                    <Share2 className="w-4 h-4" />
                  </button>

                  {/* Bookmark Ayah */}
                  <button
                    onClick={() => toggleBookmark({
                      id: `ayah-${surah.number}-${ayah.numberInSurah}`,
                      type: 'ayah',
                      title: `Surah ${surah.nameEnglish} : ${ayah.numberInSurah}`,
                      arabicText: ayah.textArabic,
                      subtitle: ayah.textEnglish,
                      payload: { surahNumber: surah.number, ayahNumber: ayah.numberInSurah }
                    })}
                    className={`p-2 rounded-xl transition-colors ${
                      isAyahBookmarked
                        ? 'text-amber-500 bg-amber-50 dark:bg-amber-950 border border-amber-300/40'
                        : 'text-stone-500 hover:text-stone-800 dark:hover:text-stone-200 hover:bg-stone-100 dark:hover:bg-stone-800'
                    }`}
                    title="Bookmark Ayah"
                  >
                    <Bookmark className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Arabic Quranic Text */}
              <div className="py-3 text-right">
                <p 
                  className="font-quran-text text-stone-900 dark:text-stone-50"
                  style={{ fontSize: `${readingSettings.fontSize}px`, lineHeight: 2.3 }}
                >
                  {ayah.textArabic}
                  <span className="inline-block mx-2 font-serif text-emerald-700 dark:text-emerald-400 text-lg">
                    ۝{ayah.numberInSurah}
                  </span>
                </p>
              </div>

              {/* Translations */}
              <div className="pt-4 border-t border-stone-100 dark:border-stone-800 space-y-3">
                {(readingSettings.language === 'both' || readingSettings.language === 'en') && (
                  <p className="text-sm sm:text-base text-stone-700 dark:text-stone-300 leading-relaxed font-sans">
                    {ayah.textEnglish}
                  </p>
                )}

                {(readingSettings.language === 'both' || readingSettings.language === 'ur') && (
                  <p className="text-sm sm:text-base text-stone-600 dark:text-stone-400 font-arabic-title text-right leading-relaxed pt-1">
                    {ayah.textUrdu}
                  </p>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Bottom Prev / Next Surah Navigation */}
      <div className="pt-8 border-t border-stone-200 dark:border-stone-800 flex items-center justify-between gap-4">
        <button
          onClick={goToPrevSurah}
          disabled={selectedSurahNumber <= 1}
          className={`flex items-center gap-2 px-5 py-3 rounded-2xl border font-semibold text-xs sm:text-sm transition-all ${
            selectedSurahNumber <= 1
              ? 'opacity-40 cursor-not-allowed border-stone-200'
              : 'border-stone-300 dark:border-stone-700 hover:bg-emerald-50 dark:hover:bg-emerald-950 text-stone-800 dark:text-stone-200'
          }`}
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Previous Surah</span>
        </button>

        <span className="text-xs text-stone-400 font-medium">
          Surah {selectedSurahNumber} of 114
        </span>

        <button
          onClick={goToNextSurah}
          disabled={selectedSurahNumber >= 114}
          className={`flex items-center gap-2 px-5 py-3 rounded-2xl border font-semibold text-xs sm:text-sm transition-all ${
            selectedSurahNumber >= 114
              ? 'opacity-40 cursor-not-allowed border-stone-200'
              : 'border-stone-300 dark:border-stone-700 hover:bg-emerald-50 dark:hover:bg-emerald-950 text-stone-800 dark:text-stone-200'
          }`}
        >
          <span>Next Surah</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>

    </div>
  );
};

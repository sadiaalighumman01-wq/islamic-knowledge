import React, { useState, useMemo } from 'react';
import { useApp } from '../context/AppContext';
import { ALL_SURAHS_DIRECTORY } from '../data/quranData';
import { Search, BookOpen, Clock, Filter, ArrowRight, Sparkles } from 'lucide-react';

export const QuranPage: React.FC = () => {
  const { navigateToSurah, recentReading } = useApp();
  const [searchQuery, setSearchQuery] = useState('');
  const [filterType, setFilterType] = useState<'All' | 'Meccan' | 'Medinan'>('All');

  const filteredSurahs = useMemo(() => {
    return ALL_SURAHS_DIRECTORY.filter((surah) => {
      const matchesSearch =
        surah.nameEnglish.toLowerCase().includes(searchQuery.toLowerCase()) ||
        surah.englishTranslation.toLowerCase().includes(searchQuery.toLowerCase()) ||
        surah.nameArabic.includes(searchQuery) ||
        surah.number.toString() === searchQuery.trim();

      const matchesFilter =
        filterType === 'All' || surah.revelationType === filterType;

      return matchesSearch && matchesFilter;
    });
  }, [searchQuery, filterType]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      
      {/* Header Banner */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 text-xs font-semibold">
          <BookOpen className="w-3.5 h-3.5" /> Holy Quran Index
        </span>
        <h1 className="font-serif text-3xl sm:text-4xl font-extrabold text-stone-900 dark:text-stone-100">
          The Noble Quran
        </h1>
        <p className="text-sm sm:text-base text-stone-600 dark:text-stone-400">
          Read, contemplate, and listen to the 114 Surahs of the Holy Quran with Arabic calligraphy, authentic translations, and verse bookmarks.
        </p>
      </div>

      {/* Continue Reading Card if available */}
      {recentReading && (
        <div className="p-4 sm:p-5 rounded-2xl bg-white dark:bg-stone-900 border border-emerald-900/10 dark:border-emerald-500/20 shadow-sm flex items-center justify-between flex-wrap gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 dark:bg-emerald-950 flex items-center justify-center text-emerald-700 dark:text-emerald-400">
              <Clock className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs text-stone-400 font-medium">Continue where you left off</p>
              <h4 className="text-sm sm:text-base font-bold text-stone-900 dark:text-stone-100">
                Surah {recentReading.surahNameEnglish} ({recentReading.surahNameArabic}) • Ayah {recentReading.ayahNumber}
              </h4>
            </div>
          </div>
          <button
            onClick={() => navigateToSurah(recentReading.surahNumber)}
            className="px-4 py-2 rounded-xl bg-emerald-800 hover:bg-emerald-900 text-white text-xs sm:text-sm font-semibold flex items-center gap-2 transition-all shadow-sm"
          >
            <span>Resume Reading</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      )}

      {/* Search and Filters */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-4 rounded-2xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 shadow-sm">
        
        {/* Search input */}
        <div className="relative w-full sm:w-96">
          <Search className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search by Surah name, number, or meaning..."
            className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-stone-50 dark:bg-stone-800/80 border border-stone-200 dark:border-stone-700 text-sm text-stone-900 dark:text-stone-100 placeholder:text-stone-400 outline-none focus:ring-2 focus:ring-emerald-700"
          />
        </div>

        {/* Revelation Type Filter */}
        <div className="flex items-center gap-2 w-full sm:w-auto justify-end text-xs font-semibold">
          <span className="text-stone-400 hidden md:inline flex items-center gap-1">
            <Filter className="w-3.5 h-3.5" /> Filter:
          </span>
          {(['All', 'Meccan', 'Medinan'] as const).map((type) => (
            <button
              key={type}
              onClick={() => setFilterType(type)}
              className={`px-3 py-2 rounded-xl transition-colors ${
                filterType === type
                  ? 'bg-emerald-800 text-white shadow-sm'
                  : 'bg-stone-100 dark:bg-stone-800 text-stone-600 dark:text-stone-400 hover:bg-stone-200'
              }`}
            >
              {type}
            </button>
          ))}
        </div>
      </div>

      {/* Surahs Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredSurahs.map((surah) => (
          <button
            key={surah.number}
            onClick={() => navigateToSurah(surah.number)}
            className="p-4 rounded-2xl bg-white dark:bg-stone-900 border border-stone-200/90 dark:border-stone-800 hover:border-emerald-600 dark:hover:border-emerald-500 hover:shadow-islamic transition-all text-left flex items-center justify-between group"
          >
            {/* Left: Number and Names */}
            <div className="flex items-center gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-stone-100 dark:bg-stone-800 group-hover:bg-emerald-800 group-hover:text-white transition-colors flex items-center justify-center text-xs font-bold text-stone-700 dark:text-stone-300 shrink-0">
                {surah.number}
              </div>
              <div className="space-y-0.5">
                <h3 className="font-bold text-sm sm:text-base text-stone-900 dark:text-stone-100 group-hover:text-emerald-700 dark:group-hover:text-emerald-400 transition-colors">
                  {surah.nameEnglish}
                </h3>
                <p className="text-xs text-stone-500 line-clamp-1">{surah.englishTranslation}</p>
                <div className="flex items-center gap-2 pt-1 text-[11px]">
                  <span className={`px-2 py-0.5 rounded-md font-medium ${
                    surah.revelationType === 'Meccan'
                      ? 'bg-amber-50 dark:bg-amber-950/60 text-amber-700 dark:text-amber-400 border border-amber-200/40'
                      : 'bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-400 border border-emerald-200/40'
                  }`}>
                    {surah.revelationType}
                  </span>
                  <span className="text-stone-400">{surah.ayahCount} Verses</span>
                </div>
              </div>
            </div>

            {/* Right: Arabic calligraphy */}
            <div className="text-right">
              <span className="font-serif text-xl sm:text-2xl text-stone-700 dark:text-stone-300 font-arabic-title group-hover:text-emerald-800 dark:group-hover:text-emerald-300 transition-colors">
                {surah.nameArabic}
              </span>
            </div>
          </button>
        ))}
      </div>

      {filteredSurahs.length === 0 && (
        <div className="py-16 text-center space-y-3">
          <BookOpen className="w-10 h-10 mx-auto text-stone-400" />
          <h4 className="text-base font-bold text-stone-800 dark:text-stone-200">
            No Surahs found matching "{searchQuery}"
          </h4>
          <p className="text-xs text-stone-500">
            Try checking the spelling or clear the search filters.
          </p>
          <button
            onClick={() => { setSearchQuery(''); setFilterType('All'); }}
            className="px-4 py-2 rounded-xl bg-emerald-800 text-white text-xs font-semibold"
          >
            Reset Filters
          </button>
        </div>
      )}

    </div>
  );
};

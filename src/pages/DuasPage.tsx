import React, { useState, useMemo } from 'react';
import { useApp } from '../context/AppContext';
import { DUAS_LIST, DUA_CATEGORIES } from '../data/duasData';
import { DuaCategory, Dua } from '../types';
import { 
  HeartHandshake, 
  Search, 
  Copy, 
  Bookmark, 
  Share2, 
  Sparkles, 
  BookMarked,
  Filter,
  Check
} from 'lucide-react';

export const DuasPage: React.FC = () => {
  const { toggleBookmark, isBookmarked, showToast } = useApp();
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filteredDuas = useMemo(() => {
    return DUAS_LIST.filter((dua) => {
      const matchesCategory =
        selectedCategory === 'All' || dua.category === selectedCategory;

      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        dua.title.toLowerCase().includes(q) ||
        dua.translationEnglish.toLowerCase().includes(q) ||
        dua.translationUrdu.includes(q) ||
        dua.transliteration.toLowerCase().includes(q) ||
        dua.reference.toLowerCase().includes(q) ||
        dua.arabic.includes(q);

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const handleCopyDua = (dua: Dua) => {
    const text = `${dua.title}\n\n${dua.arabic}\n\nTransliteration: ${dua.transliteration}\n\nTranslation: "${dua.translationEnglish}"\n\nReference: ${dua.reference}`;
    navigator.clipboard.writeText(text);
    showToast(`Dua copied to clipboard!`);
  };

  const handleShareDua = (dua: Dua) => {
    const text = `${dua.title}\n\n${dua.arabic}\n\n"${dua.translationEnglish}"\n(${dua.reference})`;
    if (navigator.share) {
      navigator.share({
        title: dua.title,
        text: text,
        url: window.location.href
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(text);
      showToast('Dua copied to share!');
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      
      {/* Page Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 text-xs font-semibold">
          <HeartHandshake className="w-3.5 h-3.5 text-gold-500" /> Authentic Supplications
        </span>
        <h1 className="font-serif text-3xl sm:text-4xl font-extrabold text-stone-900 dark:text-stone-100">
          Duas & Remembrance Library
        </h1>
        <p className="text-sm sm:text-base text-stone-600 dark:text-stone-400">
          Discover verified daily supplications from the Holy Quran and Sunnah, categorized for every moment of spiritual devotion and life necessity.
        </p>
      </div>

      {/* Search and Category Filter Bar */}
      <div className="space-y-4">
        
        {/* Search bar */}
        <div className="max-w-2xl mx-auto relative">
          <Search className="w-4 h-4 text-stone-400 absolute left-4 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search supplication by title, keyword, English or Urdu..."
            className="w-full pl-11 pr-4 py-3 rounded-2xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 text-sm text-stone-900 dark:text-stone-100 placeholder:text-stone-400 outline-none focus:ring-2 focus:ring-emerald-700 shadow-sm"
          />
        </div>

        {/* Categories scrollable pill list */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          <button
            onClick={() => setSelectedCategory('All')}
            className={`px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
              selectedCategory === 'All'
                ? 'bg-emerald-800 text-white shadow-sm'
                : 'bg-white dark:bg-stone-900 text-stone-700 dark:text-stone-300 border border-stone-200 dark:border-stone-800 hover:bg-stone-100'
            }`}
          >
            All Duas ({DUAS_LIST.length})
          </button>
          {DUA_CATEGORIES.map((cat) => {
            const count = DUAS_LIST.filter((d) => d.category === cat).length;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
                  selectedCategory === cat
                    ? 'bg-emerald-800 text-white shadow-sm'
                    : 'bg-white dark:bg-stone-900 text-stone-700 dark:text-stone-300 border border-stone-200 dark:border-stone-800 hover:bg-stone-100'
                }`}
              >
                {cat} ({count})
              </button>
            );
          })}
        </div>
      </div>

      {/* Duas Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredDuas.map((dua) => {
          const bookmarked = isBookmarked(dua.id, 'dua');

          return (
            <div
              key={dua.id}
              className="p-6 sm:p-7 rounded-3xl bg-white dark:bg-stone-900 border border-stone-200/90 dark:border-stone-800 hover:border-emerald-600/60 shadow-sm hover:shadow-islamic transition-all flex flex-col justify-between space-y-5"
            >
              <div className="space-y-4">
                {/* Header: Category Badge and Reference */}
                <div className="flex items-center justify-between text-xs">
                  <span className="font-semibold px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/70 text-emerald-800 dark:text-emerald-300 border border-emerald-200/50">
                    {dua.category}
                  </span>
                  <span className="text-stone-400 font-medium">{dua.reference}</span>
                </div>

                {/* Title */}
                <h3 className="font-serif font-bold text-base sm:text-lg text-stone-900 dark:text-stone-100 leading-snug">
                  {dua.title}
                </h3>

                {/* Arabic Text */}
                <div className="py-2 text-right">
                  <p className="font-quran-text text-xl sm:text-2xl text-emerald-950 dark:text-emerald-50 leading-[2.2]">
                    {dua.arabic}
                  </p>
                </div>

                {/* Transliteration */}
                <div className="p-3 rounded-2xl bg-stone-50 dark:bg-stone-800/60 text-xs text-stone-600 dark:text-stone-300 leading-relaxed font-mono">
                  <span className="font-bold text-emerald-800 dark:text-emerald-400 block mb-1">Transliteration:</span>
                  {dua.transliteration}
                </div>

                {/* English Translation */}
                <div className="space-y-1">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-stone-400">English Translation</span>
                  <p className="text-sm text-stone-800 dark:text-stone-200 leading-relaxed italic">
                    "{dua.translationEnglish}"
                  </p>
                </div>

                {/* Urdu Translation */}
                <div className="space-y-1 pt-1 border-t border-stone-100 dark:border-stone-800/80 text-right">
                  <span className="text-[11px] font-bold text-stone-400 block">اردو ترجمہ</span>
                  <p className="text-sm text-stone-700 dark:text-stone-300 font-arabic-title leading-relaxed">
                    {dua.translationUrdu}
                  </p>
                </div>

                {/* Benefit / Virtue note */}
                {dua.benefit && (
                  <div className="p-3 rounded-xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200/60 dark:border-amber-800/40 text-xs text-amber-900 dark:text-amber-300 space-y-1">
                    <span className="font-bold flex items-center gap-1">
                      <Sparkles className="w-3.5 h-3.5 text-amber-600" /> Benefit & Virtue:
                    </span>
                    <p>{dua.benefit}</p>
                  </div>
                )}
              </div>

              {/* Bottom Actions */}
              <div className="pt-4 border-t border-stone-100 dark:border-stone-800 flex items-center justify-between text-xs">
                <span className="text-stone-400 text-[11px]">Authentic Hadith Source</span>
                
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => handleCopyDua(dua)}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-stone-600 dark:text-stone-300 hover:bg-stone-100 dark:hover:bg-stone-800 border border-stone-200 dark:border-stone-800 transition-colors"
                    title="Copy full dua"
                  >
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy</span>
                  </button>

                  <button
                    onClick={() => handleShareDua(dua)}
                    className="p-2 rounded-xl text-stone-600 dark:text-stone-300 hover:bg-stone-100 dark:hover:bg-stone-800 border border-stone-200 dark:border-stone-800 transition-colors"
                    title="Share dua"
                  >
                    <Share2 className="w-3.5 h-3.5" />
                  </button>

                  <button
                    onClick={() => toggleBookmark({
                      id: dua.id,
                      type: 'dua',
                      title: dua.title,
                      arabicText: dua.arabic,
                      subtitle: dua.translationEnglish,
                      payload: dua
                    })}
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl border transition-colors ${
                      bookmarked
                        ? 'bg-amber-100 dark:bg-amber-950/80 border-amber-300 text-amber-800 dark:text-amber-300 font-semibold'
                        : 'text-stone-600 dark:text-stone-300 hover:bg-stone-100 dark:hover:bg-stone-800 border-stone-200 dark:border-stone-800'
                    }`}
                    title="Save to bookmarks"
                  >
                    <Bookmark className="w-3.5 h-3.5" />
                    <span>{bookmarked ? 'Saved' : 'Save'}</span>
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Empty State */}
      {filteredDuas.length === 0 && (
        <div className="py-16 text-center space-y-3">
          <HeartHandshake className="w-10 h-10 mx-auto text-stone-400" />
          <h4 className="text-base font-bold text-stone-800 dark:text-stone-200">
            No supplications found matching "{searchQuery}"
          </h4>
          <p className="text-xs text-stone-500">
            Try choosing another category or clearing your search term.
          </p>
          <button
            onClick={() => { setSearchQuery(''); setSelectedCategory('All'); }}
            className="px-4 py-2 rounded-xl bg-emerald-800 text-white text-xs font-semibold"
          >
            Reset Filters
          </button>
        </div>
      )}

    </div>
  );
};

import React, { useState, useEffect, useMemo, useRef } from 'react';
import { useApp } from '../context/AppContext';
import { ALL_SURAHS_DIRECTORY, SURAH_LIST } from '../data/quranData';
import { DUAS_LIST } from '../data/duasData';
import { ARTICLES_LIST } from '../data/articlesData';
import { Search, X, BookOpen, HeartHandshake, Sparkles, ArrowRight, CornerDownLeft } from 'lucide-react';

type SearchCategory = 'all' | 'quran' | 'duas' | 'articles';

export const SearchModal: React.FC = () => {
  const { 
    isSearchOpen, 
    setIsSearchOpen, 
    navigateToSurah, 
    setActivePage, 
    setSelectedArticleId 
  } = useApp();

  const [query, setQuery] = useState('');
  const [activeTab, setActiveTab] = useState<SearchCategory>('all');
  const inputRef = useRef<HTMLInputElement>(null);

  // Focus on open and listen for Ctrl+K
  useEffect(() => {
    if (isSearchOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [isSearchOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setIsSearchOpen(true);
      }
      if (e.key === 'Escape' && isSearchOpen) {
        setIsSearchOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isSearchOpen, setIsSearchOpen]);

  // Suggested keywords
  const suggestions = [
    'Ayat al-Kursi',
    'Al-Fatihah',
    'Sayyidul Istighfar',
    'Khushu in Salah',
    'Surah Al-Mulk',
    'Prophet Muhammad',
    'Forgiveness',
    'Travel Dua'
  ];

  // Search Results Computation
  const searchResults = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return { surahs: [], ayahs: [], duas: [], articles: [] };

    // Search Surahs
    const matchedSurahs = ALL_SURAHS_DIRECTORY.filter(s => 
      s.nameEnglish.toLowerCase().includes(q) ||
      s.englishTranslation.toLowerCase().includes(q) ||
      s.nameArabic.includes(q) ||
      s.number.toString() === q
    );

    // Search Ayahs across detailed Surahs
    const matchedAyahs: Array<{
      surahNumber: number;
      surahName: string;
      ayahNumber: number;
      arabic: string;
      english: string;
    }> = [];

    SURAH_LIST.forEach(surah => {
      surah.ayahs.forEach(ayah => {
        if (
          ayah.textEnglish.toLowerCase().includes(q) ||
          ayah.textArabic.includes(q) ||
          ayah.textUrdu.includes(q)
        ) {
          matchedAyahs.push({
            surahNumber: surah.number,
            surahName: surah.nameEnglish,
            ayahNumber: ayah.numberInSurah,
            arabic: ayah.textArabic,
            english: ayah.textEnglish
          });
        }
      });
    });

    // Search Duas
    const matchedDuas = DUAS_LIST.filter(d => 
      d.title.toLowerCase().includes(q) ||
      d.translationEnglish.toLowerCase().includes(q) ||
      d.translationUrdu.includes(q) ||
      d.category.toLowerCase().includes(q) ||
      d.arabic.includes(q) ||
      d.transliteration.toLowerCase().includes(q)
    );

    // Search Articles
    const matchedArticles = ARTICLES_LIST.filter(a => 
      a.title.toLowerCase().includes(q) ||
      a.category.toLowerCase().includes(q) ||
      a.summary.toLowerCase().includes(q) ||
      a.tags.some(t => t.toLowerCase().includes(q)) ||
      a.content.some(c => c.toLowerCase().includes(q))
    );

    return {
      surahs: matchedSurahs,
      ayahs: matchedAyahs,
      duas: matchedDuas,
      articles: matchedArticles
    };
  }, [query]);

  const totalResults = 
    (activeTab === 'all' || activeTab === 'quran' ? searchResults.surahs.length + searchResults.ayahs.length : 0) +
    (activeTab === 'all' || activeTab === 'duas' ? searchResults.duas.length : 0) +
    (activeTab === 'all' || activeTab === 'articles' ? searchResults.articles.length : 0);

  if (!isSearchOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-14 sm:pt-20 px-4 bg-stone-900/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="w-full max-w-3xl bg-[#fdfbf7] dark:bg-stone-900 rounded-3xl shadow-2xl border border-stone-200 dark:border-stone-800 overflow-hidden flex flex-col max-h-[85vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input Bar */}
        <div className="flex items-center gap-3 px-5 py-4 border-b border-stone-200 dark:border-stone-800">
          <Search className="w-5 h-5 text-emerald-700 dark:text-emerald-400 shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search Quran surahs, ayahs, authentic duas, and articles..."
            className="w-full bg-transparent border-0 outline-none text-base sm:text-lg text-stone-900 dark:text-stone-100 placeholder:text-stone-400 dark:placeholder:text-stone-500"
          />
          {query && (
            <button 
              onClick={() => setQuery('')}
              className="p-1 rounded-lg text-stone-400 hover:text-stone-600 dark:hover:text-stone-200"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <button
            onClick={() => setIsSearchOpen(false)}
            className="px-2.5 py-1 text-xs font-semibold rounded-lg bg-stone-200/70 dark:bg-stone-800 text-stone-600 dark:text-stone-300 hover:bg-stone-300"
          >
            ESC
          </button>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center gap-2 px-5 py-2.5 border-b border-stone-100 dark:border-stone-800/80 bg-stone-50/50 dark:bg-stone-950/40 text-xs font-medium overflow-x-auto">
          {(['all', 'quran', 'duas', 'articles'] as SearchCategory[]).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-3 py-1.5 rounded-xl capitalize transition-colors ${
                activeTab === tab
                  ? 'bg-emerald-800 text-white font-semibold'
                  : 'text-stone-600 dark:text-stone-400 hover:text-stone-900 hover:bg-stone-200/50 dark:hover:bg-stone-800'
              }`}
            >
              {tab}
            </button>
          ))}
          {query && (
            <span className="ml-auto text-stone-400 text-xs shrink-0">
              {totalResults} result{totalResults !== 1 ? 's' : ''}
            </span>
          )}
        </div>

        {/* Search Results / Suggestions Content */}
        <div className="overflow-y-auto p-5 space-y-6 flex-1">
          {!query ? (
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-stone-400 mb-3">Popular Searches</p>
              <div className="flex flex-wrap gap-2">
                {suggestions.map((item) => (
                  <button
                    key={item}
                    onClick={() => setQuery(item)}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white dark:bg-stone-800 border border-stone-200/80 dark:border-stone-700/80 text-xs text-stone-700 dark:text-stone-300 hover:border-emerald-500 hover:text-emerald-700 dark:hover:text-emerald-400 transition-colors"
                  >
                    <span>{item}</span>
                    <ArrowRight className="w-3 h-3 text-stone-400" />
                  </button>
                ))}
              </div>
            </div>
          ) : totalResults === 0 ? (
            <div className="py-12 text-center space-y-3">
              <div className="w-12 h-12 mx-auto rounded-full bg-stone-100 dark:bg-stone-800 flex items-center justify-center text-stone-400">
                <Search className="w-6 h-6" />
              </div>
              <h4 className="text-base font-semibold text-stone-800 dark:text-stone-200">No matches found for "{query}"</h4>
              <p className="text-xs text-stone-500 max-w-md mx-auto">
                Try searching for general keywords like "prayer", "patience", "Al-Fatihah", "morning", or check spelling.
              </p>
            </div>
          ) : (
            <div className="space-y-6">
              {/* Surahs Matches */}
              {(activeTab === 'all' || activeTab === 'quran') && searchResults.surahs.length > 0 && (
                <div className="space-y-2">
                  <h5 className="text-xs font-bold uppercase tracking-wider text-emerald-800 dark:text-emerald-400 flex items-center gap-2">
                    <BookOpen className="w-3.5 h-3.5" /> Surahs ({searchResults.surahs.length})
                  </h5>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {searchResults.surahs.map((surah) => (
                      <button
                        key={surah.number}
                        onClick={() => {
                          navigateToSurah(surah.number);
                          setIsSearchOpen(false);
                        }}
                        className="p-3 text-left bg-white dark:bg-stone-800/80 rounded-2xl border border-stone-200 dark:border-stone-800 hover:border-emerald-600 hover:shadow-md transition-all flex items-center justify-between group"
                      >
                        <div className="flex items-center gap-3">
                          <span className="w-8 h-8 rounded-lg bg-emerald-50 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300 font-bold text-xs flex items-center justify-center">
                            {surah.number}
                          </span>
                          <div>
                            <p className="text-sm font-semibold text-stone-900 dark:text-stone-100 group-hover:text-emerald-700 dark:group-hover:text-emerald-300">
                              {surah.nameEnglish}
                            </p>
                            <p className="text-xs text-stone-500">{surah.englishTranslation}</p>
                          </div>
                        </div>
                        <span className="font-serif text-base text-stone-600 dark:text-stone-300 font-arabic-title">
                          {surah.nameArabic}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Ayahs Matches */}
              {(activeTab === 'all' || activeTab === 'quran') && searchResults.ayahs.length > 0 && (
                <div className="space-y-2">
                  <h5 className="text-xs font-bold uppercase tracking-wider text-emerald-800 dark:text-emerald-400 flex items-center gap-2">
                    <BookOpen className="w-3.5 h-3.5" /> Verses / Ayahs ({searchResults.ayahs.length})
                  </h5>
                  <div className="space-y-2">
                    {searchResults.ayahs.map((ayah, i) => (
                      <button
                        key={i}
                        onClick={() => {
                          navigateToSurah(ayah.surahNumber);
                          setIsSearchOpen(false);
                        }}
                        className="w-full p-3 text-left bg-white dark:bg-stone-800/80 rounded-2xl border border-stone-200 dark:border-stone-800 hover:border-emerald-600 transition-all space-y-1.5"
                      >
                        <div className="flex items-center justify-between text-xs">
                          <span className="px-2 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 font-semibold">
                            {ayah.surahName} • Ayah {ayah.ayahNumber}
                          </span>
                          <span className="text-stone-400 flex items-center gap-1">
                            Go to verse <CornerDownLeft className="w-3 h-3" />
                          </span>
                        </div>
                        <p className="font-quran-text text-base text-stone-800 dark:text-stone-100 line-clamp-1">
                          {ayah.arabic}
                        </p>
                        <p className="text-xs text-stone-600 dark:text-stone-400 line-clamp-2">
                          {ayah.english}
                        </p>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Duas Matches */}
              {(activeTab === 'all' || activeTab === 'duas') && searchResults.duas.length > 0 && (
                <div className="space-y-2">
                  <h5 className="text-xs font-bold uppercase tracking-wider text-amber-700 dark:text-amber-400 flex items-center gap-2">
                    <HeartHandshake className="w-3.5 h-3.5" /> Duas ({searchResults.duas.length})
                  </h5>
                  <div className="space-y-2">
                    {searchResults.duas.map((dua) => (
                      <button
                        key={dua.id}
                        onClick={() => {
                          setActivePage('duas');
                          setIsSearchOpen(false);
                        }}
                        className="w-full p-3 text-left bg-white dark:bg-stone-800/80 rounded-2xl border border-stone-200 dark:border-stone-800 hover:border-amber-600 transition-all space-y-1.5"
                      >
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-semibold px-2 py-0.5 rounded bg-amber-50 dark:bg-amber-950/60 text-amber-800 dark:text-amber-300">
                            {dua.category}
                          </span>
                          <span className="text-[11px] text-stone-400">{dua.reference}</span>
                        </div>
                        <h6 className="text-sm font-semibold text-stone-900 dark:text-stone-100">
                          {dua.title}
                        </h6>
                        <p className="text-xs text-stone-600 dark:text-stone-400 line-clamp-1 italic">
                          "{dua.translationEnglish}"
                        </p>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Articles Matches */}
              {(activeTab === 'all' || activeTab === 'articles') && searchResults.articles.length > 0 && (
                <div className="space-y-2">
                  <h5 className="text-xs font-bold uppercase tracking-wider text-emerald-800 dark:text-emerald-400 flex items-center gap-2">
                    <Sparkles className="w-3.5 h-3.5" /> Articles & Guides ({searchResults.articles.length})
                  </h5>
                  <div className="space-y-2">
                    {searchResults.articles.map((article) => (
                      <button
                        key={article.id}
                        onClick={() => {
                          setSelectedArticleId(article.id);
                          setActivePage('articles');
                          setIsSearchOpen(false);
                        }}
                        className="w-full p-3 text-left bg-white dark:bg-stone-800/80 rounded-2xl border border-stone-200 dark:border-stone-800 hover:border-emerald-600 transition-all space-y-1"
                      >
                        <div className="flex items-center justify-between text-xs text-stone-500">
                          <span className="font-semibold text-emerald-800 dark:text-emerald-400">{article.category}</span>
                          <span>{article.readTime}</span>
                        </div>
                        <h6 className="text-sm font-bold text-stone-900 dark:text-stone-100">
                          {article.title}
                        </h6>
                        <p className="text-xs text-stone-600 dark:text-stone-400 line-clamp-2">
                          {article.summary}
                        </p>
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="p-3 bg-stone-100/70 dark:bg-stone-950/80 border-t border-stone-200 dark:border-stone-800 text-[11px] text-stone-500 flex items-center justify-between px-5">
          <span>Search instant local static content</span>
          <span>Press ESC to exit</span>
        </div>
      </div>
    </div>
  );
};

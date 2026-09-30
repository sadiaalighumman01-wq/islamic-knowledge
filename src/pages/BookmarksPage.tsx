import React, { useState, useMemo } from 'react';
import { useApp } from '../context/AppContext';
import { BookmarkItem } from '../types';
import { 
  Bookmark, 
  Trash2, 
  BookOpen, 
  HeartHandshake, 
  Sparkles, 
  ArrowRight, 
  Clock, 
  AlertCircle 
} from 'lucide-react';

export const BookmarksPage: React.FC = () => {
  const { 
    bookmarks, 
    removeBookmark, 
    clearAllBookmarks, 
    navigateToSurah, 
    setActivePage, 
    setSelectedArticleId 
  } = useApp();

  const [activeTab, setActiveTab] = useState<'all' | 'ayah' | 'dua' | 'article'>('all');

  const filteredBookmarks = useMemo(() => {
    if (activeTab === 'all') return bookmarks;
    return bookmarks.filter((b) => b.type === activeTab);
  }, [bookmarks, activeTab]);

  const ayahCount = bookmarks.filter((b) => b.type === 'ayah').length;
  const duaCount = bookmarks.filter((b) => b.type === 'dua').length;
  const articleCount = bookmarks.filter((b) => b.type === 'article').length;

  const handleItemClick = (item: BookmarkItem) => {
    if (item.type === 'ayah') {
      const surahNum = item.payload?.surahNumber || 1;
      navigateToSurah(surahNum);
    } else if (item.type === 'dua') {
      setActivePage('duas');
    } else if (item.type === 'article') {
      setSelectedArticleId(item.id);
      setActivePage('articles');
    }
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8 space-y-8">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-stone-200 dark:border-stone-800 pb-6">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <span className="p-2 rounded-xl bg-amber-100 dark:bg-amber-950 text-amber-700 dark:text-amber-400">
              <Bookmark className="w-5 h-5 fill-current" />
            </span>
            <h1 className="font-serif text-2xl sm:text-3xl font-extrabold text-stone-900 dark:text-stone-100">
              Saved Bookmarks
            </h1>
          </div>
          <p className="text-xs sm:text-sm text-stone-500">
            All your saved Ayahs, Duas, and Articles stored locally on your device.
          </p>
        </div>

        {bookmarks.length > 0 && (
          <button
            onClick={() => {
              if (window.confirm('Are you sure you want to clear all saved bookmarks?')) {
                clearAllBookmarks();
              }
            }}
            className="flex items-center gap-1.5 px-3 py-2 rounded-xl border border-red-200 dark:border-red-900/60 text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-950/40 text-xs font-semibold self-start sm:self-auto transition-colors"
          >
            <Trash2 className="w-3.5 h-3.5" />
            <span>Clear All</span>
          </button>
        )}
      </div>

      {/* Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 border-b border-stone-100 dark:border-stone-800">
        <button
          onClick={() => setActiveTab('all')}
          className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
            activeTab === 'all'
              ? 'bg-emerald-800 text-white shadow-sm'
              : 'bg-white dark:bg-stone-900 text-stone-700 dark:text-stone-300 border border-stone-200 dark:border-stone-800'
          }`}
        >
          <span>All Items</span>
          <span className="px-1.5 py-0.2 rounded-full text-[10px] bg-white/20">{bookmarks.length}</span>
        </button>

        <button
          onClick={() => setActiveTab('ayah')}
          className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
            activeTab === 'ayah'
              ? 'bg-emerald-800 text-white shadow-sm'
              : 'bg-white dark:bg-stone-900 text-stone-700 dark:text-stone-300 border border-stone-200 dark:border-stone-800'
          }`}
        >
          <BookOpen className="w-3.5 h-3.5" />
          <span>Ayahs</span>
          <span className="px-1.5 py-0.2 rounded-full text-[10px] bg-stone-200 dark:bg-stone-800">{ayahCount}</span>
        </button>

        <button
          onClick={() => setActiveTab('dua')}
          className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
            activeTab === 'dua'
              ? 'bg-emerald-800 text-white shadow-sm'
              : 'bg-white dark:bg-stone-900 text-stone-700 dark:text-stone-300 border border-stone-200 dark:border-stone-800'
          }`}
        >
          <HeartHandshake className="w-3.5 h-3.5" />
          <span>Duas</span>
          <span className="px-1.5 py-0.2 rounded-full text-[10px] bg-stone-200 dark:bg-stone-800">{duaCount}</span>
        </button>

        <button
          onClick={() => setActiveTab('article')}
          className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
            activeTab === 'article'
              ? 'bg-emerald-800 text-white shadow-sm'
              : 'bg-white dark:bg-stone-900 text-stone-700 dark:text-stone-300 border border-stone-200 dark:border-stone-800'
          }`}
        >
          <Sparkles className="w-3.5 h-3.5" />
          <span>Articles</span>
          <span className="px-1.5 py-0.2 rounded-full text-[10px] bg-stone-200 dark:bg-stone-800">{articleCount}</span>
        </button>
      </div>

      {/* Bookmarks List */}
      {filteredBookmarks.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filteredBookmarks.map((item) => {
            const isAyah = item.type === 'ayah';
            const isDua = item.type === 'dua';
            const isArticle = item.type === 'article';

            return (
              <div
                key={`${item.type}-${item.id}`}
                className="p-5 rounded-3xl bg-white dark:bg-stone-900 border border-stone-200/90 dark:border-stone-800 hover:border-emerald-600/60 shadow-sm transition-all flex flex-col justify-between space-y-4"
              >
                <div className="space-y-2.5">
                  <div className="flex items-center justify-between text-xs">
                    <span className={`px-2.5 py-0.5 rounded-full font-semibold capitalize ${
                      isAyah
                        ? 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300'
                        : isDua
                        ? 'bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-300'
                        : 'bg-purple-100 text-purple-800 dark:bg-purple-950 dark:text-purple-300'
                    }`}>
                      {item.type}
                    </span>
                    <span className="text-[11px] text-stone-400">Added {item.dateAdded}</span>
                  </div>

                  <h3 className="font-bold text-base text-stone-900 dark:text-stone-100">
                    {item.title}
                  </h3>

                  {item.arabicText && (
                    <p className="font-quran-text text-lg text-emerald-950 dark:text-emerald-100 text-right line-clamp-2 leading-relaxed">
                      {item.arabicText}
                    </p>
                  )}

                  {item.subtitle && (
                    <p className="text-xs text-stone-600 dark:text-stone-400 line-clamp-2 italic">
                      "{item.subtitle}"
                    </p>
                  )}
                </div>

                <div className="pt-3 border-t border-stone-100 dark:border-stone-800 flex items-center justify-between text-xs">
                  <button
                    onClick={() => handleItemClick(item)}
                    className="font-semibold text-emerald-800 dark:text-emerald-400 hover:underline flex items-center gap-1"
                  >
                    <span>Open in {item.type}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  <button
                    onClick={() => removeBookmark(item.id, item.type)}
                    className="p-1.5 rounded-lg text-stone-400 hover:text-red-600 hover:bg-stone-100 dark:hover:bg-stone-800 transition-colors"
                    title="Remove bookmark"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="py-20 text-center space-y-4 rounded-3xl bg-white dark:bg-stone-900 border border-stone-200/80 dark:border-stone-800 p-8">
          <div className="w-14 h-14 mx-auto rounded-full bg-stone-100 dark:bg-stone-800 flex items-center justify-center text-stone-400">
            <Bookmark className="w-7 h-7" />
          </div>
          <div className="space-y-1">
            <h3 className="text-base sm:text-lg font-bold text-stone-800 dark:text-stone-200">
              No bookmarks saved in this section
            </h3>
            <p className="text-xs sm:text-sm text-stone-500 max-w-sm mx-auto">
              Tap the bookmark icon on any Quran Ayah, Dua, or article to preserve your favorites here.
            </p>
          </div>
          <div className="flex items-center justify-center gap-3 pt-2">
            <button
              onClick={() => setActivePage('quran')}
              className="px-4 py-2 rounded-xl bg-emerald-800 text-white text-xs font-semibold hover:bg-emerald-900"
            >
              Read Quran
            </button>
            <button
              onClick={() => setActivePage('duas')}
              className="px-4 py-2 rounded-xl bg-stone-100 dark:bg-stone-800 text-stone-700 dark:text-stone-300 text-xs font-semibold hover:bg-stone-200"
            >
              Explore Duas
            </button>
          </div>
        </div>
      )}

    </div>
  );
};

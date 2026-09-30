import React from 'react';
import { useApp } from '../context/AppContext';
import { FEATURED_AYAH, ALL_SURAHS_DIRECTORY } from '../data/quranData';
import { DUAS_LIST } from '../data/duasData';
import { ARTICLE_CATEGORIES, ARTICLES_LIST } from '../data/articlesData';
import { 
  BookOpen, 
  HeartHandshake, 
  Sparkles, 
  ArrowRight, 
  Copy, 
  Share2, 
  Bookmark, 
  Clock, 
  Check, 
  Flame, 
  Compass, 
  Sparkle
} from 'lucide-react';

export const HomePage: React.FC = () => {
  const { 
    setActivePage, 
    navigateToSurah, 
    recentReading, 
    toggleBookmark, 
    isBookmarked, 
    showToast,
    setSelectedArticleId
  } = useApp();

  const handleCopyText = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    showToast(`${label} copied to clipboard!`);
  };

  const handleShare = (title: string, text: string) => {
    if (navigator.share) {
      navigator.share({
        title,
        text,
        url: window.location.href
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(`${title}\n\n${text}`);
      showToast('Link and text copied to clipboard!');
    }
  };

  const popularDuas = DUAS_LIST.slice(0, 4);
  const featuredArticles = ARTICLES_LIST.slice(0, 3);

  return (
    <div className="space-y-16 sm:space-y-24 pb-12">
      
      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden pt-8 sm:pt-16 pb-12 sm:pb-20">
        {/* Subtle decorative islamic geometry backdrop */}
        <div className="absolute inset-0 bg-islamic-pattern opacity-60 pointer-events-none -z-10"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-r from-emerald-500/10 via-gold-400/10 to-emerald-600/10 rounded-full blur-3xl -z-10 pointer-events-none"></div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center space-y-6">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100/80 dark:bg-emerald-950/70 border border-emerald-300/60 dark:border-emerald-700/50 text-emerald-800 dark:text-emerald-300 text-xs font-semibold tracking-wide shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-gold-500" />
            <span>Pure Frontend Islamic Sanctuary</span>
          </div>

          {/* Heading */}
          <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-stone-900 dark:text-stone-50 leading-[1.15]">
            Explore <span className="text-emerald-800 dark:text-emerald-400 relative inline-block">
              Islamic Knowledge
              <svg className="absolute -bottom-1 left-0 w-full h-2 text-gold-400/70" viewBox="0 0 100 20" preserveAspectRatio="none">
                <path d="M0,15 Q50,0 100,15" fill="none" stroke="currentColor" strokeWidth="4" />
              </svg>
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-xl text-stone-600 dark:text-stone-300 max-w-2xl mx-auto font-normal leading-relaxed">
            Read the Quran, discover authentic Duas, and explore Islamic knowledge with beautiful Arabic typography and a peaceful interface.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 pt-4">
            <button
              onClick={() => setActivePage('quran')}
              className="flex items-center gap-2.5 px-6 py-3.5 rounded-2xl bg-emerald-800 hover:bg-emerald-900 text-white font-semibold text-sm sm:text-base shadow-lg shadow-emerald-900/20 hover:scale-[1.02] active:scale-[0.98] transition-all"
            >
              <BookOpen className="w-4 h-4 text-gold-300" />
              <span>Read Quran</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={() => setActivePage('duas')}
              className="flex items-center gap-2.5 px-6 py-3.5 rounded-2xl bg-white dark:bg-stone-900 hover:bg-stone-100 dark:hover:bg-stone-800 text-stone-800 dark:text-stone-200 border border-stone-300 dark:border-stone-700 font-semibold text-sm sm:text-base shadow-sm hover:scale-[1.02] active:scale-[0.98] transition-all"
            >
              <HeartHandshake className="w-4 h-4 text-emerald-700 dark:text-emerald-400" />
              <span>Explore Duas</span>
            </button>

            <button
              onClick={() => setActivePage('tasbeeh')}
              className="flex items-center gap-2 px-5 py-3.5 rounded-2xl bg-amber-500/10 hover:bg-amber-500/20 text-amber-800 dark:text-amber-300 border border-amber-300/50 dark:border-amber-700/50 font-semibold text-sm transition-all"
            >
              <span>📿 Tasbeeh Counter</span>
            </button>
          </div>

          {/* Quick Stats Banner */}
          <div className="pt-8 grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-3xl mx-auto">
            <div className="p-3 rounded-2xl bg-white/70 dark:bg-stone-900/60 border border-stone-200/60 dark:border-stone-800 text-center backdrop-blur-sm">
              <span className="block text-xl font-bold text-emerald-800 dark:text-emerald-400">114</span>
              <span className="text-[11px] text-stone-500 uppercase tracking-wider font-semibold">Surahs Indexed</span>
            </div>
            <div className="p-3 rounded-2xl bg-white/70 dark:bg-stone-900/60 border border-stone-200/60 dark:border-stone-800 text-center backdrop-blur-sm">
              <span className="block text-xl font-bold text-emerald-800 dark:text-emerald-400">12</span>
              <span className="text-[11px] text-stone-500 uppercase tracking-wider font-semibold">Dua Categories</span>
            </div>
            <div className="p-3 rounded-2xl bg-white/70 dark:bg-stone-900/60 border border-stone-200/60 dark:border-stone-800 text-center backdrop-blur-sm">
              <span className="block text-xl font-bold text-emerald-800 dark:text-emerald-400">10</span>
              <span className="text-[11px] text-stone-500 uppercase tracking-wider font-semibold">Knowledge Hubs</span>
            </div>
            <div className="p-3 rounded-2xl bg-white/70 dark:bg-stone-900/60 border border-stone-200/60 dark:border-stone-800 text-center backdrop-blur-sm">
              <span className="block text-xl font-bold text-emerald-800 dark:text-emerald-400">100%</span>
              <span className="text-[11px] text-stone-500 uppercase tracking-wider font-semibold">Offline Ready</span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. RECENTLY VIEWED / CONTINUE READING SECTION */}
      {recentReading && (
        <section className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="p-5 sm:p-6 rounded-3xl bg-gradient-to-r from-emerald-900 via-emerald-950 to-stone-900 text-white shadow-xl flex flex-col sm:flex-row items-center justify-between gap-5 border border-emerald-700/40 relative overflow-hidden">
            <div className="absolute right-0 top-0 translate-x-8 -translate-y-8 w-44 h-44 rounded-full bg-gold-400/10 blur-2xl pointer-events-none"></div>
            
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center text-gold-300 border border-white/10 shrink-0">
                <BookOpen className="w-6 h-6" />
              </div>
              <div className="space-y-0.5">
                <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-300 flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5" /> Continue Reading
                </span>
                <h3 className="text-lg font-bold">
                  Surah {recentReading.surahNameEnglish} ({recentReading.surahNameArabic})
                </h3>
                <p className="text-xs text-stone-300">
                  Resumed at Ayah {recentReading.ayahNumber} • {recentReading.timestamp}
                </p>
              </div>
            </div>

            <button
              onClick={() => navigateToSurah(recentReading.surahNumber)}
              className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-gold-400 hover:bg-gold-500 text-stone-900 font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all shadow-md shrink-0"
            >
              <span>Continue Surah</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </section>
      )}

      {/* 3. FEATURED QURAN VERSE / AYAH OF THE DAY */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="p-6 sm:p-10 rounded-3xl bg-white dark:bg-stone-900 border border-emerald-950/10 dark:border-emerald-500/20 shadow-islamic space-y-6 relative overflow-hidden">
          {/* Subtle badge & title */}
          <div className="flex items-center justify-between flex-wrap gap-2 border-b border-stone-100 dark:border-stone-800 pb-4">
            <div className="flex items-center gap-2.5">
              <span className="w-2.5 h-2.5 rounded-full bg-amber-500 animate-pulse"></span>
              <span className="text-xs font-bold uppercase tracking-widest text-emerald-800 dark:text-emerald-400">
                Ayah of the Day
              </span>
              <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-amber-100 dark:bg-amber-950/80 text-amber-800 dark:text-amber-300">
                {FEATURED_AYAH.theme}
              </span>
            </div>
            <span className="text-xs text-stone-500 font-medium">
              Surah {FEATURED_AYAH.surahNameEnglish} : Ayah {FEATURED_AYAH.ayahNumber}
            </span>
          </div>

          {/* Arabic Text */}
          <div className="py-2 text-right">
            <p className="font-quran-text text-2xl sm:text-3xl md:text-4xl text-emerald-950 dark:text-emerald-100 leading-[2.4]">
              {FEATURED_AYAH.textArabic}
            </p>
          </div>

          {/* Translations */}
          <div className="space-y-2 pt-2 border-t border-stone-100 dark:border-stone-800/80">
            <p className="text-sm sm:text-base text-stone-700 dark:text-stone-300 leading-relaxed font-serif">
              "{FEATURED_AYAH.translationEnglish}"
            </p>
            <p className="text-xs sm:text-sm text-stone-500 dark:text-stone-400 font-arabic-title text-right leading-relaxed pt-1">
              {FEATURED_AYAH.translationUrdu}
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center justify-between flex-wrap gap-3 pt-3 border-t border-stone-100 dark:border-stone-800/80">
            <button
              onClick={() => navigateToSurah(FEATURED_AYAH.surahNumber)}
              className="text-xs font-bold text-emerald-800 dark:text-emerald-400 hover:text-emerald-900 flex items-center gap-1.5"
            >
              <span>Read Full Surah {FEATURED_AYAH.surahNameEnglish}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>

            <div className="flex items-center gap-2">
              <button
                onClick={() => handleCopyText(`${FEATURED_AYAH.textArabic}\n\n${FEATURED_AYAH.translationEnglish}\n(Surah ${FEATURED_AYAH.surahNameEnglish}: ${FEATURED_AYAH.ayahNumber})`, 'Ayah')}
                className="p-2 rounded-xl text-stone-600 dark:text-stone-300 hover:bg-stone-100 dark:hover:bg-stone-800 border border-stone-200 dark:border-stone-800 transition-colors"
                title="Copy verse"
              >
                <Copy className="w-4 h-4" />
              </button>

              <button
                onClick={() => handleShare(`Surah ${FEATURED_AYAH.surahNameEnglish} [2:${FEATURED_AYAH.ayahNumber}]`, `${FEATURED_AYAH.textArabic}\n\n${FEATURED_AYAH.translationEnglish}`)}
                className="p-2 rounded-xl text-stone-600 dark:text-stone-300 hover:bg-stone-100 dark:hover:bg-stone-800 border border-stone-200 dark:border-stone-800 transition-colors"
                title="Share verse"
              >
                <Share2 className="w-4 h-4" />
              </button>

              <button
                onClick={() => toggleBookmark({
                  id: `ayah-${FEATURED_AYAH.surahNumber}-${FEATURED_AYAH.ayahNumber}`,
                  type: 'ayah',
                  title: `Surah ${FEATURED_AYAH.surahNameEnglish} : ${FEATURED_AYAH.ayahNumber}`,
                  arabicText: FEATURED_AYAH.textArabic,
                  subtitle: FEATURED_AYAH.translationEnglish,
                  payload: { surahNumber: FEATURED_AYAH.surahNumber }
                })}
                className={`p-2 rounded-xl border transition-colors ${
                  isBookmarked(`ayah-${FEATURED_AYAH.surahNumber}-${FEATURED_AYAH.ayahNumber}`, 'ayah')
                    ? 'bg-amber-100 dark:bg-amber-950/80 border-amber-300 dark:border-amber-700 text-amber-700'
                    : 'text-stone-600 dark:text-stone-300 hover:bg-stone-100 dark:hover:bg-stone-800 border-stone-200 dark:border-stone-800'
                }`}
                title="Bookmark verse"
              >
                <Bookmark className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 4. POPULAR DUAS SECTION */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-xl sm:text-2xl font-bold font-serif text-stone-900 dark:text-stone-100 flex items-center gap-2">
              <HeartHandshake className="w-6 h-6 text-emerald-700 dark:text-emerald-400" />
              <span>Popular Duas & Supplications</span>
            </h2>
            <p className="text-xs sm:text-sm text-stone-500">Authentic daily supplications from the Prophet (ﷺ)</p>
          </div>
          <button
            onClick={() => setActivePage('duas')}
            className="text-xs sm:text-sm font-semibold text-emerald-800 dark:text-emerald-400 hover:underline flex items-center gap-1"
          >
            <span>View All Duas</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {popularDuas.map((dua) => {
            const bookmarked = isBookmarked(dua.id, 'dua');
            return (
              <div
                key={dua.id}
                className="p-5 rounded-3xl bg-white dark:bg-stone-900 border border-stone-200/90 dark:border-stone-800 shadow-sm hover:shadow-md transition-all flex flex-col justify-between space-y-4"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-semibold px-2.5 py-0.5 rounded-full bg-emerald-50 dark:bg-emerald-950/70 text-emerald-800 dark:text-emerald-300 border border-emerald-200/40">
                      {dua.category}
                    </span>
                    <span className="text-stone-400">{dua.reference}</span>
                  </div>

                  <h3 className="font-bold text-sm sm:text-base text-stone-900 dark:text-stone-100">
                    {dua.title}
                  </h3>

                  <p className="font-quran-text text-lg sm:text-xl text-stone-900 dark:text-stone-100 text-right leading-loose">
                    {dua.arabic}
                  </p>

                  <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-300 italic">
                    "{dua.translationEnglish}"
                  </p>
                </div>

                <div className="pt-3 border-t border-stone-100 dark:border-stone-800 flex items-center justify-between text-xs">
                  <span className="text-[11px] text-stone-500 line-clamp-1">{dua.benefit}</span>
                  <div className="flex items-center gap-1.5 shrink-0">
                    <button
                      onClick={() => handleCopyText(`${dua.arabic}\n\n${dua.translationEnglish}\n(${dua.reference})`, dua.title)}
                      className="p-1.5 rounded-lg text-stone-500 hover:text-stone-800 dark:hover:text-stone-200 hover:bg-stone-100 dark:hover:bg-stone-800"
                      title="Copy dua"
                    >
                      <Copy className="w-3.5 h-3.5" />
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
                      className={`p-1.5 rounded-lg transition-colors ${
                        bookmarked
                          ? 'text-amber-500 bg-amber-50 dark:bg-amber-950'
                          : 'text-stone-500 hover:text-stone-800 dark:hover:text-stone-200 hover:bg-stone-100 dark:hover:bg-stone-800'
                      }`}
                      title="Bookmark dua"
                    >
                      <Bookmark className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 5. ISLAMIC KNOWLEDGE CATEGORIES */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 space-y-6">
        <div>
          <h2 className="text-xl sm:text-2xl font-bold font-serif text-stone-900 dark:text-stone-100 flex items-center gap-2">
            <Sparkles className="w-6 h-6 text-emerald-700 dark:text-emerald-400" />
            <span>Islamic Knowledge Categories</span>
          </h2>
          <p className="text-xs sm:text-sm text-stone-500">Explore authentic learning modules from classical and contemporary scholarship</p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
          {ARTICLE_CATEGORIES.map((cat, idx) => (
            <button
              key={cat}
              onClick={() => setActivePage('articles')}
              className="p-4 rounded-2xl bg-white dark:bg-stone-900 border border-stone-200/80 dark:border-stone-800 hover:border-emerald-600 hover:shadow-md transition-all text-left group"
            >
              <div className="w-8 h-8 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 flex items-center justify-center text-emerald-800 dark:text-emerald-300 font-bold text-xs mb-3 group-hover:bg-emerald-800 group-hover:text-white transition-colors">
                {idx + 1}
              </div>
              <h4 className="text-xs sm:text-sm font-bold text-stone-900 dark:text-stone-100 group-hover:text-emerald-700 dark:group-hover:text-emerald-300">
                {cat}
              </h4>
              <span className="text-[11px] text-stone-400 flex items-center gap-1 mt-1">
                Explore <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
              </span>
            </button>
          ))}
        </div>
      </section>

      {/* 6. FEATURED ARTICLES PREVIEW */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-xl sm:text-2xl font-bold font-serif text-stone-900 dark:text-stone-100">
              Featured Articles & Guides
            </h2>
            <p className="text-xs sm:text-sm text-stone-500">Grounded reflections on faith, prophetic ethics, and history</p>
          </div>
          <button
            onClick={() => setActivePage('articles')}
            className="text-xs sm:text-sm font-semibold text-emerald-800 dark:text-emerald-400 hover:underline flex items-center gap-1"
          >
            <span>All Articles</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {featuredArticles.map((art) => (
            <div
              key={art.id}
              className="p-5 rounded-3xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 flex flex-col justify-between space-y-4 hover:shadow-lg transition-all"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-semibold text-emerald-800 dark:text-emerald-400">
                    {art.category}
                  </span>
                  <span className="text-stone-400">{art.readTime}</span>
                </div>
                <h3 className="font-bold text-base text-stone-900 dark:text-stone-100 leading-snug line-clamp-2">
                  {art.title}
                </h3>
                <p className="text-xs text-stone-600 dark:text-stone-400 line-clamp-3">
                  {art.summary}
                </p>
              </div>

              <div className="pt-3 border-t border-stone-100 dark:border-stone-800 flex items-center justify-between">
                <span className="text-[11px] text-stone-400">{art.date}</span>
                <button
                  onClick={() => {
                    setSelectedArticleId(art.id);
                    setActivePage('articles');
                  }}
                  className="text-xs font-bold text-emerald-800 dark:text-emerald-400 hover:underline flex items-center gap-1"
                >
                  <span>Read Article</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 7. TASBEEH TEASER BANNER */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-amber-500/10 via-emerald-800/10 to-emerald-950/20 border border-amber-300/40 dark:border-amber-700/30 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1.5 text-center sm:text-left">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-800 dark:text-amber-400">
              Interactive Dhikr Counter
            </span>
            <h3 className="text-xl sm:text-2xl font-bold font-serif text-stone-900 dark:text-stone-100">
              Engage Your Tongue in the Remembrance of Allah
            </h3>
            <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-300 max-w-xl">
              Keep count of SubhanAllah, Alhamdulillah, and Astaghfirullah with our local, vibration-enabled digital Tasbeeh counter.
            </p>
          </div>
          <button
            onClick={() => setActivePage('tasbeeh')}
            className="px-6 py-3 rounded-2xl bg-emerald-800 hover:bg-emerald-900 text-white font-bold text-sm shadow-md shrink-0 transition-transform hover:scale-105"
          >
            Open Tasbeeh Counter
          </button>
        </div>
      </section>

    </div>
  );
};

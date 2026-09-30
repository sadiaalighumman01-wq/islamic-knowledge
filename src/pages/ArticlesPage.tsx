import React, { useState, useMemo } from 'react';
import { useApp } from '../context/AppContext';
import { ARTICLES_LIST, ARTICLE_CATEGORIES } from '../data/articlesData';
import { Article } from '../types';
import { 
  Sparkles, 
  Search, 
  Clock, 
  Calendar, 
  ArrowRight, 
  Bookmark, 
  Share2, 
  Copy, 
  X, 
  BookOpen, 
  Tag,
  CheckCircle2
} from 'lucide-react';

export const ArticlesPage: React.FC = () => {
  const { 
    selectedArticleId, 
    setSelectedArticleId, 
    toggleBookmark, 
    isBookmarked, 
    showToast 
  } = useApp();

  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const activeArticle = useMemo(() => {
    return ARTICLES_LIST.find((a) => a.id === selectedArticleId) || null;
  }, [selectedArticleId]);

  const filteredArticles = useMemo(() => {
    return ARTICLES_LIST.filter((article) => {
      const matchesCategory =
        selectedCategory === 'All' || article.category === selectedCategory;

      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        article.title.toLowerCase().includes(q) ||
        article.summary.toLowerCase().includes(q) ||
        article.tags.some((t) => t.toLowerCase().includes(q)) ||
        article.content.some((c) => c.toLowerCase().includes(q));

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const handleCopyArticle = (article: Article) => {
    const text = `${article.title}\n\n${article.summary}\n\nKey Takeaways:\n${article.keyPoints.map(k => `• ${k}`).join('\n')}\n\nSource: ${article.source}`;
    navigator.clipboard.writeText(text);
    showToast('Article summary copied to clipboard!');
  };

  const handleShareArticle = (article: Article) => {
    if (navigator.share) {
      navigator.share({
        title: article.title,
        text: article.summary,
        url: window.location.href
      }).catch(() => {});
    } else {
      handleCopyArticle(article);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 text-xs font-semibold">
          <Sparkles className="w-3.5 h-3.5 text-gold-500" /> Knowledge Sanctuary
        </span>
        <h1 className="font-serif text-3xl sm:text-4xl font-extrabold text-stone-900 dark:text-stone-100">
          Islamic Knowledge & Articles
        </h1>
        <p className="text-sm sm:text-base text-stone-600 dark:text-stone-400">
          In-depth educational treatises exploring the Quran, Hadith methodology, Prophetic Seerah, pillars of worship, and timeless Islamic character.
        </p>
      </div>

      {/* Search and Filters */}
      <div className="space-y-4">
        {/* Search */}
        <div className="max-w-2xl mx-auto relative">
          <Search className="w-4 h-4 text-stone-400 absolute left-4 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search articles by title, topic, or keyword..."
            className="w-full pl-11 pr-4 py-3 rounded-2xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 text-sm text-stone-900 dark:text-stone-100 placeholder:text-stone-400 outline-none focus:ring-2 focus:ring-emerald-700 shadow-sm"
          />
        </div>

        {/* Categories */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          <button
            onClick={() => setSelectedCategory('All')}
            className={`px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
              selectedCategory === 'All'
                ? 'bg-emerald-800 text-white shadow-sm'
                : 'bg-white dark:bg-stone-900 text-stone-700 dark:text-stone-300 border border-stone-200 dark:border-stone-800 hover:bg-stone-100'
            }`}
          >
            All Categories ({ARTICLES_LIST.length})
          </button>
          {ARTICLE_CATEGORIES.map((cat) => {
            const count = ARTICLES_LIST.filter((a) => a.category === cat).length;
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

      {/* Articles Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredArticles.map((article) => {
          const bookmarked = isBookmarked(article.id, 'article');

          return (
            <div
              key={article.id}
              className="p-6 rounded-3xl bg-white dark:bg-stone-900 border border-stone-200/90 dark:border-stone-800 hover:border-emerald-600/60 shadow-sm hover:shadow-islamic transition-all flex flex-col justify-between space-y-4 group"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-semibold px-2.5 py-0.5 rounded-full bg-emerald-50 dark:bg-emerald-950/70 text-emerald-800 dark:text-emerald-300 border border-emerald-200/50">
                    {article.category}
                  </span>
                  <span className="text-stone-400 flex items-center gap-1 font-medium">
                    <Clock className="w-3.5 h-3.5" /> {article.readTime}
                  </span>
                </div>

                <h3 className="font-bold text-base sm:text-lg text-stone-900 dark:text-stone-100 leading-snug group-hover:text-emerald-800 dark:group-hover:text-emerald-400 transition-colors">
                  {article.title}
                </h3>

                <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-400 line-clamp-3 leading-relaxed">
                  {article.summary}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {article.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] px-2 py-0.5 rounded-md bg-stone-100 dark:bg-stone-800 text-stone-600 dark:text-stone-400"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom card footer */}
              <div className="pt-4 border-t border-stone-100 dark:border-stone-800 flex items-center justify-between text-xs">
                <span className="text-[11px] text-stone-400 flex items-center gap-1">
                  <Calendar className="w-3 h-3" /> {article.date}
                </span>

                <div className="flex items-center gap-1.5">
                  <button
                    onClick={() => toggleBookmark({
                      id: article.id,
                      type: 'article',
                      title: article.title,
                      subtitle: article.summary,
                      payload: article
                    })}
                    className={`p-2 rounded-xl transition-colors ${
                      bookmarked
                        ? 'text-amber-500 bg-amber-50 dark:bg-amber-950/80 border border-amber-300/40'
                        : 'text-stone-500 hover:text-stone-800 dark:hover:text-stone-200 hover:bg-stone-100 dark:hover:bg-stone-800'
                    }`}
                    title="Bookmark article"
                  >
                    <Bookmark className="w-4 h-4" />
                  </button>

                  <button
                    onClick={() => setSelectedArticleId(article.id)}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-emerald-800 hover:bg-emerald-900 text-white font-semibold text-xs shadow-sm transition-all"
                  >
                    <span>Read More</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Empty State */}
      {filteredArticles.length === 0 && (
        <div className="py-16 text-center space-y-3">
          <BookOpen className="w-10 h-10 mx-auto text-stone-400" />
          <h4 className="text-base font-bold text-stone-800 dark:text-stone-200">
            No articles found matching "{searchQuery}"
          </h4>
          <p className="text-xs text-stone-500">
            Try adjusting your search query or selecting a different category.
          </p>
          <button
            onClick={() => { setSearchQuery(''); setSelectedCategory('All'); }}
            className="px-4 py-2 rounded-xl bg-emerald-800 text-white text-xs font-semibold"
          >
            Reset Filters
          </button>
        </div>
      )}

      {/* FULL ARTICLE READING MODAL */}
      {activeArticle && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-900/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div 
            className="w-full max-w-3xl bg-[#fdfbf7] dark:bg-stone-900 rounded-3xl shadow-2xl border border-stone-200 dark:border-stone-800 overflow-hidden flex flex-col max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="p-6 border-b border-stone-200 dark:border-stone-800 flex items-start justify-between gap-4 bg-white/60 dark:bg-stone-950/40">
              <div className="space-y-1.5">
                <div className="flex items-center gap-2 text-xs">
                  <span className="px-2.5 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 font-semibold">
                    {activeArticle.category}
                  </span>
                  <span className="text-stone-400">•</span>
                  <span className="text-stone-500">{activeArticle.readTime}</span>
                  <span className="text-stone-400">•</span>
                  <span className="text-stone-500">{activeArticle.date}</span>
                </div>
                <h2 className="font-serif text-xl sm:text-2xl font-bold text-stone-900 dark:text-stone-100">
                  {activeArticle.title}
                </h2>
              </div>
              <button
                onClick={() => setSelectedArticleId(null)}
                className="p-2 rounded-xl text-stone-400 hover:text-stone-800 dark:hover:text-stone-200 hover:bg-stone-100 dark:hover:bg-stone-800 transition-colors shrink-0"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Scrollable Content */}
            <div className="p-6 sm:p-8 overflow-y-auto space-y-6 text-stone-800 dark:text-stone-200 text-sm sm:text-base leading-relaxed">
              
              {/* Summary lead */}
              <div className="p-4 rounded-2xl bg-emerald-50/70 dark:bg-emerald-950/40 border-l-4 border-emerald-700 text-stone-700 dark:text-stone-300 text-sm font-medium italic">
                {activeArticle.summary}
              </div>

              {/* Paragraphs */}
              {activeArticle.content.map((p, idx) => (
                <p key={idx} className="leading-loose">
                  {p}
                </p>
              ))}

              {/* Key Takeaways */}
              <div className="p-5 rounded-2xl bg-white dark:bg-stone-800 border border-stone-200 dark:border-stone-700 space-y-3">
                <h4 className="font-bold text-sm text-stone-900 dark:text-stone-100 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  Key Takeaways & Lessons
                </h4>
                <ul className="space-y-2 text-xs sm:text-sm text-stone-600 dark:text-stone-300">
                  {activeArticle.keyPoints.map((point, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-emerald-700 font-bold">•</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Primary Source */}
              <div className="p-4 rounded-xl bg-stone-100 dark:bg-stone-800/60 text-xs text-stone-600 dark:text-stone-400">
                <span className="font-bold block mb-1">Classical Source Reference:</span>
                {activeArticle.source}
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 pt-2">
                {activeArticle.tags.map((t) => (
                  <span
                    key={t}
                    className="text-xs px-2.5 py-1 rounded-xl bg-stone-200/60 dark:bg-stone-800 text-stone-600 dark:text-stone-400 flex items-center gap-1"
                  >
                    <Tag className="w-3 h-3" /> {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Footer Actions */}
            <div className="p-4 border-t border-stone-200 dark:border-stone-800 bg-stone-50 dark:bg-stone-950 flex items-center justify-between">
              <button
                onClick={() => setSelectedArticleId(null)}
                className="px-4 py-2 rounded-xl text-xs font-semibold text-stone-600 dark:text-stone-400 hover:bg-stone-200"
              >
                Close Article
              </button>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => handleCopyArticle(activeArticle)}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-stone-300 dark:border-stone-700 text-xs font-medium hover:bg-stone-100"
                >
                  <Copy className="w-3.5 h-3.5" />
                  <span>Copy</span>
                </button>
                <button
                  onClick={() => handleShareArticle(activeArticle)}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-stone-300 dark:border-stone-700 text-xs font-medium hover:bg-stone-100"
                >
                  <Share2 className="w-3.5 h-3.5" />
                  <span>Share</span>
                </button>
                <button
                  onClick={() => toggleBookmark({
                    id: activeArticle.id,
                    type: 'article',
                    title: activeArticle.title,
                    subtitle: activeArticle.summary,
                    payload: activeArticle
                  })}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-medium border ${
                    isBookmarked(activeArticle.id, 'article')
                      ? 'bg-amber-100 dark:bg-amber-950 border-amber-300 text-amber-800 dark:text-amber-300 font-semibold'
                      : 'border-stone-300 dark:border-stone-700 hover:bg-stone-100'
                  }`}
                >
                  <Bookmark className="w-3.5 h-3.5" />
                  <span>{isBookmarked(activeArticle.id, 'article') ? 'Saved' : 'Bookmark'}</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};

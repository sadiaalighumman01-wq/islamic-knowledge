import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { 
  BookOpen, 
  Search, 
  Bookmark, 
  Moon, 
  Sun, 
  Menu, 
  X, 
  Compass, 
  HeartHandshake, 
  Sparkles,
  Info
} from 'lucide-react';
import { ActivePage } from '../types';

export const Navbar: React.FC = () => {
  const { 
    activePage, 
    setActivePage, 
    setIsSearchOpen, 
    bookmarks, 
    isDarkMode, 
    toggleDarkMode 
  } = useApp();
  
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks: { label: string; page: ActivePage; icon: React.ReactNode }[] = [
    { label: 'Home', page: 'home', icon: <Compass className="w-4 h-4" /> },
    { label: 'Quran', page: 'quran', icon: <BookOpen className="w-4 h-4" /> },
    { label: 'Duas', page: 'duas', icon: <HeartHandshake className="w-4 h-4" /> },
    { label: 'Islamic Content', page: 'articles', icon: <Sparkles className="w-4 h-4" /> },
    { label: 'Tasbeeh', page: 'tasbeeh', icon: <span className="text-sm font-semibold">📿</span> },
    { label: 'About', page: 'about', icon: <Info className="w-4 h-4" /> },
  ];

  const handleNavClick = (page: ActivePage) => {
    setActivePage(page);
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur-md bg-[#fcfbf9]/90 dark:bg-stone-950/90 border-b border-emerald-950/10 dark:border-emerald-500/20 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo */}
          <button 
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-3 group text-left transition-transform hover:scale-[1.01]"
          >
            <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-emerald-800 to-emerald-950 flex items-center justify-center shadow-md shadow-emerald-900/20 border border-gold-400/40 relative overflow-hidden">
              <span className="absolute inset-0 bg-gold-400/10 opacity-0 group-hover:opacity-100 transition-opacity"></span>
              {/* Islamic Crescent & Star Symbol */}
              <svg className="w-6 h-6 text-gold-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" fill="currentColor" fillOpacity="0.2"/>
                <path d="M19 5l.5 1.5L21 7l-1.5.5L19 9l-.5-1.5L17 7l1.5-.5z" fill="currentColor"/>
              </svg>
            </div>
            <div>
              <span className="font-serif font-bold text-lg sm:text-xl text-emerald-950 dark:text-emerald-100 tracking-tight flex items-center gap-1.5">
                Islamic Knowledge Hub
              </span>
              <span className="block text-[11px] font-medium uppercase tracking-wider text-emerald-700/80 dark:text-emerald-400">
                Quran • Authentic Duas • Guidance
              </span>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = activePage === link.page || (link.page === 'quran' && activePage === 'surah-detail');
              return (
                <button
                  key={link.page}
                  onClick={() => handleNavClick(link.page)}
                  className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-sm font-medium transition-all ${
                    isActive
                      ? 'bg-emerald-800 text-white shadow-sm shadow-emerald-900/20 dark:bg-emerald-700'
                      : 'text-stone-700 dark:text-stone-300 hover:text-emerald-800 dark:hover:text-emerald-300 hover:bg-emerald-50 dark:hover:bg-emerald-950/40'
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
          </nav>

          {/* Right Action Buttons */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Global Search Button */}
            <button
              onClick={() => setIsSearchOpen(true)}
              className="flex items-center gap-2 px-3 py-2 rounded-xl text-stone-600 dark:text-stone-300 hover:bg-stone-200/60 dark:hover:bg-stone-800 border border-stone-200 dark:border-stone-800 text-xs sm:text-sm font-medium transition-colors"
              title="Search Quran, Duas, and Articles"
            >
              <Search className="w-4 h-4 text-emerald-700 dark:text-emerald-400" />
              <span className="hidden sm:inline">Search</span>
              <kbd className="hidden md:inline text-[10px] px-1.5 py-0.5 rounded bg-stone-100 dark:bg-stone-800 text-stone-500 border border-stone-300 dark:border-stone-700">Ctrl K</kbd>
            </button>

            {/* Bookmarks Page Link */}
            <button
              onClick={() => handleNavClick('bookmarks')}
              className={`relative p-2.5 rounded-xl transition-colors border ${
                activePage === 'bookmarks'
                  ? 'bg-emerald-800 text-white border-emerald-800 dark:bg-emerald-700'
                  : 'text-stone-700 dark:text-stone-300 border-stone-200 dark:border-stone-800 hover:bg-stone-100 dark:hover:bg-stone-800'
              }`}
              title="Saved Bookmarks"
            >
              <Bookmark className="w-4 h-4 text-gold-500" />
              {bookmarks.length > 0 && (
                <span className="absolute -top-1 -right-1 min-w-[18px] h-[18px] px-1 bg-amber-500 text-white text-[10px] font-bold rounded-full flex items-center justify-center">
                  {bookmarks.length}
                </span>
              )}
            </button>

            {/* Dark / Light Mode Toggle */}
            <button
              onClick={toggleDarkMode}
              className="p-2.5 rounded-xl border border-stone-200 dark:border-stone-800 text-stone-700 dark:text-stone-300 hover:bg-stone-100 dark:hover:bg-stone-800 transition-colors"
              title={isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            >
              {isDarkMode ? <Sun className="w-4 h-4 text-gold-400" /> : <Moon className="w-4 h-4 text-emerald-800" />}
            </button>

            {/* Mobile Hamburger Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2.5 rounded-xl border border-stone-200 dark:border-stone-800 text-stone-700 dark:text-stone-300 hover:bg-stone-100 dark:hover:bg-stone-800 transition-colors"
              aria-label="Toggle navigation menu"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden border-b border-stone-200 dark:border-stone-800 bg-[#fcfbf9] dark:bg-stone-950 px-4 pt-2 pb-6 space-y-2 shadow-xl animate-in slide-in-from-top duration-200">
          {navLinks.map((link) => {
            const isActive = activePage === link.page || (link.page === 'quran' && activePage === 'surah-detail');
            return (
              <button
                key={link.page}
                onClick={() => handleNavClick(link.page)}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-left font-medium text-sm transition-colors ${
                  isActive
                    ? 'bg-emerald-800 text-white dark:bg-emerald-700'
                    : 'text-stone-800 dark:text-stone-200 hover:bg-stone-100 dark:hover:bg-stone-900'
                }`}
              >
                {link.icon}
                <span>{link.label}</span>
              </button>
            );
          })}
          <div className="pt-2">
            <button
              onClick={() => handleNavClick('bookmarks')}
              className="w-full flex items-center justify-between px-4 py-3 rounded-xl text-left font-medium text-sm text-stone-800 dark:text-stone-200 bg-stone-100 dark:bg-stone-900"
            >
              <div className="flex items-center gap-3">
                <Bookmark className="w-4 h-4 text-gold-500" />
                <span>Saved Bookmarks</span>
              </div>
              <span className="px-2 py-0.5 bg-emerald-700 text-white rounded-full text-xs">
                {bookmarks.length}
              </span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

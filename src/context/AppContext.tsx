import React, { createContext, useContext, useState, useEffect } from 'react';
import { ActivePage, BookmarkItem } from '../types';

interface ReadingSettings {
  fontSize: number; // 20 to 36
  theme: 'light' | 'dark' | 'sepia';
  language: 'en' | 'ur' | 'both';
}

interface RecentReading {
  surahNumber: number;
  surahNameEnglish: string;
  surahNameArabic: string;
  ayahNumber: number;
  timestamp: string;
}

interface AppContextType {
  activePage: ActivePage;
  setActivePage: (page: ActivePage) => void;
  selectedSurahNumber: number;
  setSelectedSurahNumber: (num: number) => void;
  navigateToSurah: (num: number) => void;
  selectedArticleId: string | null;
  setSelectedArticleId: (id: string | null) => void;
  isSearchOpen: boolean;
  setIsSearchOpen: (open: boolean) => void;
  bookmarks: BookmarkItem[];
  toggleBookmark: (item: Omit<BookmarkItem, 'dateAdded'>) => void;
  isBookmarked: (id: string, type: 'ayah' | 'dua' | 'article') => boolean;
  removeBookmark: (id: string, type: string) => void;
  clearAllBookmarks: () => void;
  recentReading: RecentReading | null;
  updateRecentReading: (surahNumber: number, surahNameEnglish: string, surahNameArabic: string, ayahNumber: number) => void;
  readingSettings: ReadingSettings;
  updateReadingSettings: (settings: Partial<ReadingSettings>) => void;
  toastMessage: string | null;
  showToast: (message: string) => void;
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [activePage, setActivePage] = useState<ActivePage>('home');
  const [selectedSurahNumber, setSelectedSurahNumber] = useState<number>(1);
  const [selectedArticleId, setSelectedArticleId] = useState<string | null>(null);
  const [isSearchOpen, setIsSearchOpen] = useState<boolean>(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Dark mode state
  const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('ikh_dark_mode');
      return saved ? JSON.parse(saved) : false;
    }
    return false;
  });

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('ikh_dark_mode', JSON.stringify(isDarkMode));
  }, [isDarkMode]);

  const toggleDarkMode = () => setIsDarkMode(prev => !prev);

  // Bookmarks with localStorage
  const [bookmarks, setBookmarks] = useState<BookmarkItem[]>(() => {
    if (typeof window !== 'undefined') {
      try {
        const saved = localStorage.getItem('ikh_bookmarks');
        return saved ? JSON.parse(saved) : [];
      } catch {
        return [];
      }
    }
    return [];
  });

  useEffect(() => {
    localStorage.setItem('ikh_bookmarks', JSON.stringify(bookmarks));
  }, [bookmarks]);

  const toggleBookmark = (item: Omit<BookmarkItem, 'dateAdded'>) => {
    setBookmarks(prev => {
      const exists = prev.some(b => b.id === item.id && b.type === item.type);
      if (exists) {
        showToast('Removed from bookmarks');
        return prev.filter(b => !(b.id === item.id && b.type === item.type));
      } else {
        showToast('Saved to bookmarks');
        return [...prev, { ...item, dateAdded: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }) }];
      }
    });
  };

  const isBookmarked = (id: string, type: 'ayah' | 'dua' | 'article') => {
    return bookmarks.some(b => b.id === id && b.type === type);
  };

  const removeBookmark = (id: string, type: string) => {
    setBookmarks(prev => prev.filter(b => !(b.id === id && b.type === type)));
    showToast('Bookmark removed');
  };

  const clearAllBookmarks = () => {
    setBookmarks([]);
    showToast('All bookmarks cleared');
  };

  // Recent reading progress
  const [recentReading, setRecentReading] = useState<RecentReading | null>(() => {
    if (typeof window !== 'undefined') {
      try {
        const saved = localStorage.getItem('ikh_recent_reading');
        return saved ? JSON.parse(saved) : {
          surahNumber: 1,
          surahNameEnglish: "Al-Fatihah",
          surahNameArabic: "الفاتحة",
          ayahNumber: 1,
          timestamp: "Recently"
        };
      } catch {
        return null;
      }
    }
    return null;
  });

  const updateRecentReading = (surahNumber: number, surahNameEnglish: string, surahNameArabic: string, ayahNumber: number) => {
    const update = {
      surahNumber,
      surahNameEnglish,
      surahNameArabic,
      ayahNumber,
      timestamp: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric' })
    };
    setRecentReading(update);
    localStorage.setItem('ikh_recent_reading', JSON.stringify(update));
  };

  // Reading settings
  const [readingSettings, setReadingSettings] = useState<ReadingSettings>(() => {
    if (typeof window !== 'undefined') {
      try {
        const saved = localStorage.getItem('ikh_reading_settings');
        return saved ? JSON.parse(saved) : { fontSize: 26, theme: 'light', language: 'both' };
      } catch {
        return { fontSize: 26, theme: 'light', language: 'both' };
      }
    }
    return { fontSize: 26, theme: 'light', language: 'both' };
  });

  const updateReadingSettings = (settings: Partial<ReadingSettings>) => {
    setReadingSettings(prev => {
      const updated = { ...prev, ...settings };
      localStorage.setItem('ikh_reading_settings', JSON.stringify(updated));
      return updated;
    });
  };

  const showToast = (message: string) => {
    setToastMessage(message);
    setTimeout(() => {
      setToastMessage(prev => (prev === message ? null : prev));
    }, 2800);
  };

  const navigateToSurah = (num: number) => {
    setSelectedSurahNumber(num);
    setActivePage('surah-detail');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <AppContext.Provider
      value={{
        activePage,
        setActivePage: (p) => {
          setActivePage(p);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        },
        selectedSurahNumber,
        setSelectedSurahNumber,
        navigateToSurah,
        selectedArticleId,
        setSelectedArticleId,
        isSearchOpen,
        setIsSearchOpen,
        bookmarks,
        toggleBookmark,
        isBookmarked,
        removeBookmark,
        clearAllBookmarks,
        recentReading,
        updateRecentReading,
        readingSettings,
        updateReadingSettings,
        toastMessage,
        showToast,
        isDarkMode,
        toggleDarkMode
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};

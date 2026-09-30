import React from 'react';
import { AppProvider, useApp } from './context/AppContext';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { SearchModal } from './components/SearchModal';
import { Toast } from './components/Toast';
import { HomePage } from './pages/HomePage';
import { QuranPage } from './pages/QuranPage';
import { SurahDetailPage } from './pages/SurahDetailPage';
import { DuasPage } from './pages/DuasPage';
import { ArticlesPage } from './pages/ArticlesPage';
import { TasbeehPage } from './pages/TasbeehPage';
import { BookmarksPage } from './pages/BookmarksPage';
import { AboutPage } from './pages/AboutPage';

const MainContent: React.FC = () => {
  const { activePage } = useApp();

  return (
    <main className="min-h-screen flex flex-col justify-between">
      <div>
        <Navbar />
        <div className="animate-in fade-in duration-300">
          {activePage === 'home' && <HomePage />}
          {activePage === 'quran' && <QuranPage />}
          {activePage === 'surah-detail' && <SurahDetailPage />}
          {activePage === 'duas' && <DuasPage />}
          {activePage === 'articles' && <ArticlesPage />}
          {activePage === 'tasbeeh' && <TasbeehPage />}
          {activePage === 'bookmarks' && <BookmarksPage />}
          {activePage === 'about' && <AboutPage />}
        </div>
      </div>
      <Footer />
      <SearchModal />
      <Toast />
    </main>
  );
};

export function App() {
  return (
    <AppProvider>
      <MainContent />
    </AppProvider>
  );
}

export default App;

export interface Ayah {
  numberInSurah: number;
  textArabic: string;
  textEnglish: string;
  textUrdu: string;
  audioUrl?: string;
  surahNumber?: number;
  surahName?: string;
}

export interface Surah {
  number: number;
  nameArabic: string;
  nameEnglish: string;
  englishTranslation: string;
  revelationType: 'Meccan' | 'Medinan';
  ayahCount: number;
  bismillahPre: boolean;
  summary: string;
  ayahs: Ayah[];
}

export interface Dua {
  id: string;
  title: string;
  arabic: string;
  transliteration: string;
  translationEnglish: string;
  translationUrdu: string;
  category: DuaCategory;
  reference: string;
  benefit?: string;
}

export type DuaCategory =
  | 'Morning & Evening'
  | 'Before Sleeping'
  | 'After Prayer'
  | 'Protection'
  | 'Travel'
  | 'Food'
  | 'Forgiveness'
  | 'Anxiety & Difficulties'
  | 'Parents'
  | 'Knowledge'
  | 'Health'
  | 'Daily Life';

export interface Article {
  id: string;
  title: string;
  category: ArticleCategory;
  readTime: string;
  date: string;
  summary: string;
  content: string[];
  keyPoints: string[];
  source: string;
  tags: string[];
}

export type ArticleCategory =
  | 'Quran'
  | 'Hadith'
  | 'Seerah'
  | 'Salah'
  | 'Fasting'
  | 'Zakat'
  | 'Hajj'
  | 'Islamic Manners'
  | 'Islamic History'
  | 'Family & Relationships';

export interface DhikrPreset {
  id: string;
  arabic: string;
  transliteration: string;
  meaning: string;
  targetCount: number;
  virtue: string;
}

export interface BookmarkItem {
  id: string;
  type: 'ayah' | 'dua' | 'article';
  title: string;
  arabicText?: string;
  subtitle?: string;
  detailUrl?: string;
  dateAdded: string;
  payload: any;
}

export type ActivePage = 'home' | 'quran' | 'surah-detail' | 'duas' | 'articles' | 'tasbeeh' | 'bookmarks' | 'about';

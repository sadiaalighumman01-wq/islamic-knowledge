# Islamic Knowledge Hub 📖✨

A complete, modern, peaceful, **frontend-only** web application dedicated to the Holy Quran, authentic Prophetic Duas, interactive Tasbeeh, and classical Islamic knowledge.

---

## 🌟 Key Features

### 1. 🕌 Home Page
- **Hero Sanctuary**: Inspirational intro with quick CTA buttons: *"Read Quran"*, *"Explore Duas"*, and *"Tasbeeh Counter"*.
- **Ayah of the Day**: Featuring Ayat al-Kursi (Surah Al-Baqarah 2:255) with Arabic calligraphy, English, and Urdu translations, copy, share, and bookmark actions.
- **Continue Reading Card**: Dynamically tracks your last read Surah and Ayah with one-click resumption.
- **Popular Duas & Islamic Topics**: Quick access to essential daily supplications and educational categories.
- **Subtle Islamic Geometry**: Elegant emerald, cream, and gold palette with arabesque styling.

### 2. 📖 Quran Reading Interface & Surah Details
- **Full 114 Surahs Directory**: Searchable by number, English title, Arabic name, or meaning.
- **Filters**: Filter by *All*, *Meccan*, or *Medinan* revelations.
- **Ayah-by-Ayah Reading**: High-fidelity Arabic typography using Google's **Amiri** font with proper RTL alignment.
- **Recitation Audio Player**: Listen to real audio recitations by Sheikh Mishary Rashid Alafasy.
- **Translations**: Dual English & Urdu translations with display toggles (*English + Urdu*, *English Only*, *Urdu Only*).
- **Reading Customizations**:
  - Font size controls (`A-` / `A+` from 20px to 42px)
  - Color themes: **Light**, **Sepia**, and **Dark**
- **Navigation**: Previous / Next Surah navigation buttons.
- **Actions**: Copy Ayah text, share verse, and save to bookmarks.

### 3. 🤲 Duas Library (12 Categories)
Categorized collections of authentic supplications:
- *Morning & Evening*
- *Before Sleeping*
- *After Prayer*
- *Protection*
- *Travel*
- *Food*
- *Forgiveness*
- *Anxiety & Difficulties*
- *Parents*
- *Knowledge*
- *Health*
- *Daily Life*

Each card features:
- Arabic text
- Accurate pronunciation transliteration
- English translation & Urdu translation
- Canonical Hadith reference (e.g. Sahih al-Bukhari, Sahih Muslim, Sunan Abi Dawud)
- Prophetic virtue & benefit explanation
- Copy, Share, and Bookmark buttons

### 4. 📚 Islamic Knowledge & Articles (10 Categories)
In-depth educational treatises across:
- *Quran*, *Hadith*, *Seerah*, *Salah*, *Fasting*, *Zakat*, *Hajj*, *Islamic Manners*, *Islamic History*, and *Family & Relationships*.
- Interactive reader modal with detailed historical/fiqh commentary, key takeaways, and classical sources.

### 5. 🔍 Global Frontend Search (Ctrl + K)
- Instant client-side search across Surahs, individual Ayahs, Duas, and Articles.
- Quick filter tabs: *All*, *Quran*, *Duas*, *Articles*.
- Clickable suggestions and direct jump to any Surah, Dua, or Article.

### 6. 📿 Digital Tasbeeh Counter
- Smooth interactive clicker with animated circular progress ring.
- Preset Dhikr options: *SubhanAllah (33)*, *Alhamdulillah (33)*, *Allahu Akbar (34)*, *Astaghfirullah (100)*, *La ilaha illallah (100)*, *Salawat (100)*, and more.
- Built-in sound effects using Web Audio API synthesis (no external audio assets required).
- Cycle completion counter and persistent lifetime dhikr tracker stored in `localStorage`.

### 7. 🔖 Bookmarks System
- Client-side persistence via `localStorage`.
- Organizes saved items into *Ayahs*, *Duas*, and *Articles*.
- Direct jump to original text and one-click removal.

---

## 💻 Tech Stack
- **React 19** + **TypeScript**
- **Vite** (Instant HMR & Optimized production bundler)
- **Tailwind CSS** (Islamic color schemes, typography, and dark mode)
- **Lucide Icons**
- **100% Frontend-Only**: Zero database, zero backend server, zero login/signup.

---

## 🚀 Running the Project

```bash
# 1. Install dependencies
npm install

# 2. Start development server
npm run dev

# 3. Build for production
npm run build
```

Open your browser at `http://localhost:5173`.

import { Article, ArticleCategory } from '../types';

export const ARTICLE_CATEGORIES: ArticleCategory[] = [
  'Quran',
  'Hadith',
  'Seerah',
  'Salah',
  'Fasting',
  'Zakat',
  'Hajj',
  'Islamic Manners',
  'Islamic History',
  'Family & Relationships'
];

export const ARTICLES_LIST: Article[] = [
  {
    id: 'preservation-of-quran',
    title: 'The Preservation and Compilation of the Holy Quran',
    category: 'Quran',
    readTime: '6 min read',
    date: 'Sep 24, 2026',
    summary: 'An exploration of how the Holy Quran was divinely protected, memorized in hearts, transcribed during the Prophetic era, and standardized under Caliph Uthman ibn Affan (RA).',
    content: [
      "The Holy Quran occupies a unique position in religious history as the only scripture whose original text remains completely verbatim, intact, and universally identical down to every letter and vowel since its revelation over 1,400 years ago.",
      "During the lifetime of Prophet Muhammad (ﷺ), revelation was recorded instantaneously by designated scribes, including Zaid ibn Thabit, Ali ibn Abi Talib, and Ubayy ibn Ka'b. Simultaneously, thousands of companions memorized the text continuously, establishing dual preservation: in written parchment and within living hearts (Huffadh).",
      "During the caliphate of Abu Bakr as-Siddiq (RA), following the Battle of Yamama, the verses were compiled into an authorized codex (Suhuf) under the rigorous verification of Zaid ibn Thabit, requiring two independent eyewitnesses for every inscribed ayah.",
      "Later, Caliph Uthman (RA) unified the Muslim world upon the standardized Qurayshi dialectal orthography (the Uthmanic Mushaf), dispatching official copies across the major centers of the Islamic civilization. Today, millions of Muslims across continents recite the exact same scripture with unwavering fidelity."
    ],
    keyPoints: [
      "Dual preservation through oral transmission (Tawatur) and meticulous written records.",
      "The role of the Sahabah in recording revelation during the Prophet's life.",
      "The compilation committee established under Abu Bakr (RA) and finalized under Uthman (RA).",
      "Divine guarantee declared in Surah Al-Hijr: 'Indeed, it is We who sent down the Qur'an and indeed, We will be its guardian.'"
    ],
    source: 'Tafsir Ibn Kathir & Al-Itqan fi Ulum al-Quran (Imam al-Suyuti)',
    tags: ['Quran', 'Tafsir', 'Preservation', 'Islamic History', 'Uthmanic Mushaf']
  },
  {
    id: 'understanding-hadith-sciences',
    title: 'Understanding Hadith Sciences: The Architecture of Isnad & Matn',
    category: 'Hadith',
    readTime: '7 min read',
    date: 'Sep 21, 2026',
    summary: 'A structured guide to the rigorous methodologies developed by classical scholars to authenticate the sayings and traditions of Prophet Muhammad (ﷺ).',
    content: [
      "The science of Hadith verification (Mustalah al-Hadith) represents one of the greatest intellectual achievements of Islamic scholarship, creating an unprecedented critical methodology for historical verification.",
      "Every Hadith consists of two inseparable components: the Isnad (the unbroken chain of narrators linking back to the Prophet) and the Matn (the actual text of the narration).",
      "To deem a narration Sahih (authentic), classical muhaddithin like Imam al-Bukhari and Imam Muslim required five stringent criteria: unbroken continuity of transmission (Ittisal al-Sanad), moral integrity of each narrator ('Adalah), photographic accuracy and memory retention (Dabt), absence of rare anomalies (Shudhudh), and absence of hidden defects ('Illah Qadihah).",
      "Biographical evaluation (Ilm ar-Rijal) scrutinized the lives, morals, teachers, travels, and reputations of over 100,000 transmitters, ensuring fabricated or weak reports were systematically cataloged and distinguished from sound teachings."
    ],
    keyPoints: [
      "The distinction between Sahih (authentic), Hasan (good), Da'if (weak), and Mawdu' (fabricated).",
      "The five rigorous conditions for a narration to achieve Sahih status.",
      "The biographical evaluation science of Ilm ar-Rijal.",
      "The canonical six books (Kutub al-Sittah) and their standard of scholarship."
    ],
    source: 'Muqaddimah Ibn al-Salah & Tadrib al-Rawi (Al-Suyuti)',
    tags: ['Hadith', 'Sunnah', 'Bukhari', 'Muslim', 'Isnad']
  },
  {
    id: 'mercy-of-the-prophet',
    title: 'The Character and Compassion of Prophet Muhammad (ﷺ)',
    category: 'Seerah',
    readTime: '8 min read',
    date: 'Sep 18, 2026',
    summary: 'Reflecting on the exemplary empathy, forgiveness, and timeless moral excellence of the Messenger sent as a mercy to all creation.',
    content: [
      "The Quran encapsulates the divine mission of Prophet Muhammad (ﷺ) in a single definitive statement: 'And We have not sent you, [O Muhammad], except as a mercy to the worlds' (Al-Anbiya 21:107).",
      "His mercy was not an abstract ideal; it was manifest in everyday interactions with the marginalized, the orphaned, opponents, animals, and the natural environment.",
      "At the city of Ta'if, when bloodied and rejected by its leaders, the Angel of the Mountains offered to crush the valley between two peaks. The Prophet (ﷺ) responded with legendary patience: 'No, rather I hope that Allah will bring from their descendants those who will worship Him alone.'",
      "During the Conquest of Makkah, standing victorious before those who had persecuted his family, boycotted his companions, and martyred his loved ones, he declared the words of Prophet Yusuf: 'No blame will there be upon you today. Go, for you are free.'"
    ],
    keyPoints: [
      "Mercy as the foundational compass of Prophetic conduct.",
      "Unparalleled forgiveness at the Conquest of Makkah.",
      "Kindness towards children, animals, servants, and vulnerable members of society.",
      "The embodiment of the Quran in daily character as described by Aisha (RA)."
    ],
    source: 'Ar-Raheeq Al-Makhtum (The Sealed Nectar) & Ash-Shifa by Qadi Ayyad',
    tags: ['Seerah', 'Prophet Muhammad', 'Mercy', 'Akhlaq', 'Patience']
  },
  {
    id: 'spiritual-architecture-of-salah',
    title: 'The Spiritual Architecture of Salah: Finding Deep Khushu',
    category: 'Salah',
    readTime: '5 min read',
    date: 'Sep 15, 2026',
    summary: 'Practical and spiritual strategies to transform routine physical movements into a conscious dialogue with the Divine.',
    content: [
      "Salah is described by the Prophet (ﷺ) as the pinnacle of worship and the coolness of his eyes. Yet for many modern believers surrounded by digital distractions, achieving inner presence (Khushu) can feel challenging.",
      "The journey into Khushu begins before the prayer itself: through deliberate Wudu with mindfulness, disconnecting mentally from worldly notifications, and reflecting on the majestic words of the Adhan.",
      "Standing on the prayer rug, Takbiratul Ihram ('Allahu Akbar') signifies casting every anxiety, deadline, and worldly attachment behind your back, acknowledging that Allah is greater than anything competing for your attention.",
      "When bowing in Ruku, the back is leveled in physical humility; when descending into Sujud, the servant is closest to their Creator, pouring out the innermost whispers of the heart in intimate communion."
    ],
    keyPoints: [
      "Mindful preparation through reflective Wudu and tranquil walking to prayer.",
      "Understanding the linguistic meaning of every word recited during prayer.",
      "Pacing the recitation and pausing at each verse of Surah Al-Fatihah.",
      "Sujud as the station of highest spiritual proximity."
    ],
    source: 'Asrar al-Salah (Ibn Qayyim al-Jawziyya) & Ihya Ulum al-Din (Al-Ghazali)',
    tags: ['Salah', 'Khushu', 'Prayer', 'Spirituality', 'Worship']
  },
  {
    id: 'inner-dimensions-of-fasting',
    title: 'The Inner Dimensions and Spiritual Secrets of Sawm (Fasting)',
    category: 'Fasting',
    readTime: '6 min read',
    date: 'Sep 12, 2026',
    summary: 'Beyond refraining from nourishment: How fasting cultivates Taqwa, cleanses the soul, and awakens empathetic brotherhood.',
    content: [
      "Fasting in Islam (Sawm) is far more than physical deprivation from dawn to sunset; it is an intensive spiritual recalibration designed to liberate the spirit from the tyranny of subconscious desires.",
      "Imam al-Ghazali classified fasting into three distinct levels: the fasting of the general public (refraining from food, drink, and intimacy), the fasting of the pious (safeguarding the eyes, tongue, ears, and hands from sins), and the fasting of the spiritually elect (fasting of the heart from worldly preoccupations).",
      "When hunger touches the believer, empathy for the impoverished shifts from an intellectual concept into a visceral reality. The pangs of thirst become a quiet reminder of dependence on Allah's daily gifts.",
      "The Prophet (ﷺ) warned: 'Whoever does not leave false speech and acting upon it, Allah has no need in him leaving his food and drink.' True fasting produces self-restraint and spiritual lightness."
    ],
    keyPoints: [
      "The primary purpose of fasting: attaining God-consciousness (Taqwa).",
      "The three tiers of fasting outlined by classical scholars.",
      "Protecting the tongue, ears, and senses from unproductive speech.",
      "The health, physiological, and emotional rejuvenation of voluntary and Ramadan fasts."
    ],
    source: 'Ihya Ulum al-Din (Imam al-Ghazali) & Lata\'if al-Ma\'arif (Ibn Rajab)',
    tags: ['Fasting', 'Ramadan', 'Sawm', 'Taqwa', 'Self-discipline']
  },
  {
    id: 'zakat-social-justice',
    title: 'Zakat: The Divine Pillar of Social Justice and Wealth Purification',
    category: 'Zakat',
    readTime: '5 min read',
    date: 'Sep 09, 2026',
    summary: 'How the annual 2.5% wealth obligation eliminates economic stagnation, cleanses greed, and dignifies the less fortunate.',
    content: [
      "Zakat is linguistically rooted in the Arabic concepts of 'purification' and 'growth'. In the Islamic socioeconomic paradigm, wealth does not belong exclusively to humans; we are trustees over provisions bestowed by Allah.",
      "By mandating that 2.5% of surplus wealth held over a full lunar year above the Nisab threshold be redistributed to the eight specific Quranic categories of beneficiaries, Islam ensures circulation of capital.",
      "Unlike conventional taxation, Zakat is a spiritual act of worship that purifies the giver's heart from hoarding and stinginess while preserving the dignity and financial stability of the recipient.",
      "When instituted faithfully in Islamic history, such as during the caliphate of Umar ibn Abd al-Aziz, prosperity spread so comprehensively that collectors struggled to find a single person in need of Zakat funds."
    ],
    keyPoints: [
      "Nisab thresholds based on gold and silver standards.",
      "The eight eligible categories of recipients defined in Surah At-Tawbah (9:60).",
      "Economic benefits: preventing wealth concentration and fostering communal cohesion.",
      "The difference between obligatory Zakat and voluntary charity (Sadaqah)."
    ],
    source: 'Fiqh al-Zakat (Dr. Yusuf al-Qaradawi) & Al-Majmu (Imam an-Nawawi)',
    tags: ['Zakat', 'Charity', 'Social Justice', 'Economics', 'Pillars of Islam']
  },
  {
    id: 'journey-of-hajj',
    title: 'The Journey of a Lifetime: Spiritual Stages of Hajj',
    category: 'Hajj',
    readTime: '7 min read',
    date: 'Sep 05, 2026',
    summary: 'Tracing the footsteps of Prophet Ibrahim, Hajar, and the Prophet Muhammad (ﷺ) through the sacred rites of Makkah, Mina, Arafat, and Muzdalifah.',
    content: [
      "Hajj is the grand pilgrimage uniting millions of Muslims from every ethnicity, language, and continent into a single sea of devotion, stripping away all indicators of rank, royalty, and social stature.",
      "Entering the state of Ihram, wearing two simple white unstitched cloths, is a vivid rehearsal for the Day of Judgment. The millionaire stands shoulder-to-shoulder with the laborer, chanting the timeless Talbiyah: 'Labbayk Allahumma Labbayk' (Here I am, O Allah, here I am).",
      "The climax of Hajj takes place on the plains of Mount Arafat. The Prophet (ﷺ) declared: 'Hajj is Arafah.' Believers stand from noon until sunset in sincere repentance, tears, and supplication, seeking divine absolution.",
      "The Tawaf around the sacred Kaaba symbolizes celestial harmony, echoing the perpetual circumambulation of angels around the heavenly throne (Al-Bayt al-Ma'mur)."
    ],
    keyPoints: [
      "The unifying power of the Ihram garments.",
      "The core significance of the Day of Arafah as the pillar of Hajj.",
      "Reliving the resilience and trust of Hajar between Safa and Marwah (Sa'i).",
      "The symbolic rejection of temptation during the Stoning of the Jamarat."
    ],
    source: 'Al-Hajj wal-Umrah fi Daw\' al-Kitab was-Sunnah & Fiqh as-Sunnah',
    tags: ['Hajj', 'Pilgrimage', 'Makkah', 'Arafat', 'Kaaba']
  },
  {
    id: 'etiquette-and-manners',
    title: 'Adab & Akhlaq: The Islamic Etiquette in Daily Life',
    category: 'Islamic Manners',
    readTime: '5 min read',
    date: 'Sep 02, 2026',
    summary: 'The noble principles of speech, neighborly conduct, humility, and greeting that reflect genuine faith.',
    content: [
      "Prophet Muhammad (ﷺ) famously said: 'I was sent only to perfect noble character (Makarim al-Akhlaq).' Islam teaches that true religiosity is reflected primarily in how one treats others.",
      "Islamic etiquette (Adab) encompasses every sphere of human engagement: spreading the greeting of peace (Salam), smiling as an act of charity, guarding secrets, respecting privacy, and avoiding backbiting (Gheebah).",
      "The rights of neighbors are so emphasized in Prophetic traditions that the Messenger (ﷺ) remarked: 'The Angel Jibreel continued to advise me concerning the neighbor until I thought he would give him a share of inheritance.'",
      "Speaking with kindness, listening attentively, controlling anger, and honoring guests are not mere cultural courtesies; they are vital indices of sincere faith."
    ],
    keyPoints: [
      "The inseparable link between strong Iman (faith) and noble Akhlaq (character).",
      "The virtue of spreading the greeting of Salam.",
      "The inviolable sanctity of people's honor and the prohibition of backbiting.",
      "The sacred duties owed to neighbors regardless of their creed."
    ],
    source: 'Al-Adab al-Mufrad (Imam al-Bukhari) & Riyad as-Salihin (Imam an-Nawawi)',
    tags: ['Manners', 'Akhlaq', 'Adab', 'Kindness', 'Community']
  },
  {
    id: 'golden-age-of-islamic-thought',
    title: 'The Golden Age of Islamic Science, Medicine, and Philosophy',
    category: 'Islamic History',
    readTime: '8 min read',
    date: 'Aug 28, 2026',
    summary: 'How Islamic civilization bridged antiquity and modernity, pioneering optics, algebra, surgical medicine, and astronomy grounded in faith.',
    content: [
      "Guided by the Quranic imperative to observe, contemplate, and seek knowledge ('Read in the name of your Lord who created'), early Islamic scholars sparked an era of groundbreaking scientific inquiry from Baghdad and Cairo to Cordoba and Samarkand.",
      "In mathematics, Muhammad ibn Musa al-Khwarizmi formulated algebra (from 'Al-Jabr') and algorithms, enabling modern computing foundations.",
      "In medicine, Ibn Sina (Avicenna) authored The Canon of Medicine, which remained the paramount medical textbook in European and Eastern universities for over five centuries. Al-Zahrawi pioneered surgical instruments still recognized in operating rooms today.",
      "Ibn al-Haytham founded modern optics through rigorous experimental methodology, dismantling Greek conjectures and discovering the principles of light refraction and cameras (Qamara)."
    ],
    keyPoints: [
      "The Quranic inspiration behind empirical scientific exploration.",
      "The House of Wisdom (Bayt al-Hikmah) in Baghdad as a global translation and research hub.",
      "Pioneers in mathematics, medicine, astronomy, and optics.",
      "The preservation and advancement of knowledge that sparked the Renaissance."
    ],
    source: 'Lost Islamic History (Firas Alkhateeb) & 1001 Inventions: The Enduring Legacy',
    tags: ['History', 'Science', 'Golden Age', 'Medicine', 'Civilization']
  },
  {
    id: 'ties-of-kinship-and-family',
    title: 'Rights of Parents and Maintaining Ties of Kinship (Silat al-Rahim)',
    category: 'Family & Relationships',
    readTime: '6 min read',
    date: 'Aug 24, 2026',
    summary: 'The sacred status of parents in the Quran and the boundless spiritual and worldly rewards of maintaining loving family bonds.',
    content: [
      "In several Quranic passages, Allah pairs the command to worship Him alone directly with the command to treat parents with supreme kindness (Ihsan), illustrating that honoring parents is secondary only to Monotheism.",
      "The Quran instructs: 'And your Lord has decreed that you not worship except Him, and to parents, good treatment. Whether one or both of them reach old age with you, say not to them so much as 'uff' and do not repel them but speak to them a noble word' (Surah Al-Isra 17:23).",
      "A companion asked the Messenger of Allah (ﷺ): 'Who among people is most deserving of my fine companionship?' The Prophet replied: 'Your mother.' The man asked: 'Then who?' He replied: 'Your mother.' The man asked: 'Then who?' He replied: 'Your mother.' The man asked: 'Then who?' He replied: 'Then your father.'",
      "Maintaining ties of kinship (Silat al-Rahim) extends to siblings, aunts, uncles, and cousins. The Prophet (ﷺ) noted that whoever wishes for expansion in their sustenance and longevity in life should maintain family bonds."
    ],
    keyPoints: [
      "The divine pairing of Tawheed with dutifulness to parents (Birr al-Walidayn).",
      "The unmatched three-fold station granted to mothers in Islam.",
      "Avoiding expressions of irritation ('uff') towards aging parents.",
      "Silat al-Rahim as a source of longevity, barakah, and answered prayers."
    ],
    source: 'Sahih al-Bukhari (Book of Manners) & Tafsir al-Qurtubi',
    tags: ['Family', 'Parents', 'Kinship', 'Motherhood', 'Relationships']
  }
];

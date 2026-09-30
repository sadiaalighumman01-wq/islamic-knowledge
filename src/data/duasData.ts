import { Dua, DuaCategory } from '../types';

export const DUA_CATEGORIES: DuaCategory[] = [
  'Morning & Evening',
  'Before Sleeping',
  'After Prayer',
  'Protection',
  'Travel',
  'Food',
  'Forgiveness',
  'Anxiety & Difficulties',
  'Parents',
  'Knowledge',
  'Health',
  'Daily Life'
];

export const DUAS_LIST: Dua[] = [
  // Morning & Evening
  {
    id: 'sayyidul-istighfar',
    title: 'Sayyidul Istighfar (The Master Supplication for Forgiveness)',
    arabic: 'اللَّهُمَّ أَنْتَ رَبِّي لَا إِلَهَ إِلَّا أَنْتَ، خَلَقْتَنِي وَأَنَا عَبْدُكَ، وَأَنَا عَلَى عَهْدِكَ وَوَعْدِكَ مَا اسْتَطَعْتُ، أَعُوذُ بِكَ مِنْ شَرِّ مَا صَنَعْتُ، أَبُوءُ لَكَ بِنِعْمَتِكَ عَلَيَّ، وَأَبُوءُ بِذَنْبِي فَاغْفِرْ لِي فَإِنَّهُ لَا يَغْفِرُ الذُّنُوبَ إِلَّا أَنْتَ',
    transliteration: "Allahumma Anta Rabbi, la ilaha illa Anta, khalaqtani wa ana 'abduka, wa ana 'ala 'ahdika wa wa'dika mastata'tu, a'udhu bika min sharri ma sana'tu, abu'u laka bini'matika 'alayya, wa abu'u bidhanbi faghfir li, fa-innahu la yaghfirudh-dhunuba illa Anta.",
    translationEnglish: "O Allah, You are my Lord, there is no deity worthy of worship except You. You created me and I am Your servant, and I abide by Your covenant and promise as best as I can. I seek refuge in You from the evil of what I have committed. I acknowledge Your favors upon me and I confess my sins, so forgive me, for none forgives sins except You.",
    translationUrdu: "اے اللہ! تو ہی میرا رب ہے، تیرے سوا کوئی معبود نہیں، تو نے ہی مجھے پیدا کیا اور میں تیرا بندہ ہوں، اور میں اپنی استطاعت کے مطابق تیرے عہد اور وعدے پر قائم ہوں۔ میں اپنے کیے کے شر سے تیری پناہ مانگتا ہوں، اپنے اوپر تیری نعمتوں کا اعتراف کرتا ہوں اور اپنے گناہوں کا اقرار کرتا ہوں، پس مجھے بخش دے کیونکہ تیرے سوا کوئی گناہوں کو بخشنے والا نہیں۔",
    category: 'Morning & Evening',
    reference: 'Sahih al-Bukhari 6306',
    benefit: 'The Prophet (ﷺ) said whoever recites this during the day or night with conviction and passes away will be among the people of Jannah.'
  },
  {
    id: 'morning-protection',
    title: 'Morning Remembrance for Blessings of the Day',
    arabic: 'أَصْبَحْنَا وَأَصْبَحَ الْمُلْكُ لِلَّهِ، وَالْحَمْدُ لِلَّهِ، لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ',
    transliteration: "Asbahna wa-asbahal-mulku lillah, walhamdu lillah, la ilaha illallahu wahdahu la sharika lahu, lahul-mulku wa lahul-hamdu wa Huwa 'ala kulli shay'in Qadeer.",
    translationEnglish: "We have reached the morning and the dominion belongs to Allah, and all praise is due to Allah. None has the right to be worshipped except Allah alone, without partner. To Him belongs the dominion and to Him is praise, and He is over all things omnipotent.",
    translationUrdu: "ہم نے اور تمام بادشاہت نے اللہ کے لیے صبح کی، اور تمام تعریفیں اللہ ہی کے لیے ہیں۔ اللہ کے سوا کوئی معبود نہیں، وہ اکیلا ہے، اس کا کوئی شریک نہیں، اسی کی بادشاہی ہے اور اسی کے لیے تعریف ہے، اور وہ ہر چیز پر قادر ہے۔",
    category: 'Morning & Evening',
    reference: 'Sahih Muslim 2723',
    benefit: 'Brings calmness, gratitude, and divine protection throughout daylight.'
  },

  // Before Sleeping
  {
    id: 'before-sleeping-bismika',
    title: 'Supplication Before Sleeping',
    arabic: 'بِاسْمِكَ رَبِّي وَضَعْتُ جَنْبِي، وَبِكَ أَرْفَعُهُ، فَإِنْ أَمْسَكْتَ نَفْسِي فَارْحَمْهَا، وَإِنْ أَرْسَلْتَهَا فَاحْفَظْهَا بِمَا تَحْفَظُ بِهِ عِبَادَكَ الصَّالِحِينَ',
    transliteration: "Bismika Rabbi wada'tu janbi, wa bika arfa'uh, fa-in amsakta nafsi farhamha, wa-in arsaltaha fahfadh-ha bima tahfadhu bihi 'ibadakas-salihin.",
    translationEnglish: "In Your name my Lord, I lie down, and by Your favor I rise. If You should take my soul, have mercy upon it, and if You should release it, protect it with that by which You protect Your righteous servants.",
    translationUrdu: "تیرے نام کے ساتھ اے میرے رب! میں نے اپنا پہلو رکھا اور تیرے ہی سہارے میں اسے اٹھاؤں گا۔ اگر تو میری جان روک لے تو اس پر رحم فرما، اور اگر چھوڑ دے تو اس کی ویسے ہی حفاظت فرما جیسے تو اپنے نیک بندوں کی کرتا ہے۔",
    category: 'Before Sleeping',
    reference: 'Sahih al-Bukhari 6320 & Muslim 2714',
    benefit: 'Protects the sleeper and entrusts the soul into the guardian care of Allah.'
  },
  {
    id: 'sleep-allahumma-bismika',
    title: 'Short Dua Before Sleep',
    arabic: 'بِاسْمِكَ اللَّهُمَّ أَمُوتُ وَأَحْيَا',
    transliteration: "Bismika Allahumma amootu wa-ahya.",
    translationEnglish: "In Your Name, O Allah, I die and I live.",
    translationUrdu: "اے اللہ! تیرے نام کے ساتھ ہی میں مرتا (سوتا) ہوں اور جیتا (جاگتا) ہوں۔",
    category: 'Before Sleeping',
    reference: 'Sahih al-Bukhari 6324',
    benefit: 'The Prophet (ﷺ) recited this every night when resting upon his right side.'
  },

  // After Prayer
  {
    id: 'after-salah-taslim',
    title: 'Remembrance Directly After Finishing Salah',
    arabic: 'أَسْتَغْفِرُ اللَّهَ، أَسْتَغْفِرُ اللَّهَ، أَسْتَغْفِرُ اللَّهَ، اللَّهُمَّ أَنْتَ السَّلَامُ وَمِنْكَ السَّلَامُ، تَبَارَكْتَ يَا ذَا الْجَلَالِ وَالْإِكْرَامِ',
    transliteration: "Astaghfirullah, Astaghfirullah, Astaghfirullah. Allahumma Antas-Salamu wa minkas-salam, tabarakta ya Dhal-Jalali wal-Ikram.",
    translationEnglish: "I ask Allah for forgiveness (three times). O Allah, You are Peace and from You comes peace. Blessed are You, O Owner of majesty and honor.",
    translationUrdu: "میں اللہ سے بخشش طلب کرتا ہوں (تین بار)۔ اے اللہ! تو سراپا سلامتی ہے اور سلامتی تیری ہی طرف سے ہے، تو بڑی برکت والا ہے، اے جلال اور بزرگی والے!",
    category: 'After Prayer',
    reference: 'Sahih Muslim 591',
    benefit: 'Sunnah remembrance after giving Tasleem.'
  },
  {
    id: 'after-salah-kursi',
    title: 'Ayat al-Kursi After Obligatory Prayers',
    arabic: 'اللَّهُ لَا إِلَٰهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ ۚ لَا تَأْخُذُهُ سِنَةٌ وَلَا نَوْمٌ ۚ لَّهُ مَا فِي السَّمَاوَاتِ وَمَا فِي الْأَرْضِ ۗ',
    transliteration: "Allahu la ilaha illa Huwal-Hayyul-Qayyum...",
    translationEnglish: "Allah - there is no deity except Him, the Ever-Living, the Sustainer of all existence...",
    translationUrdu: "اللہ کے سوا کوئی معبود نہیں، وہ ہمیشہ زندہ اور سب کا نگہبان ہے...",
    category: 'After Prayer',
    reference: 'Sunan an-Nasa\'i (Al-Kubra 9848) - Authenticated by Al-Albani',
    benefit: 'The Prophet (ﷺ) said: Whoever recites Ayat al-Kursi after every obligatory prayer, nothing prevents him from entering Paradise except death.'
  },

  // Protection
  {
    id: 'protection-evil-creation',
    title: 'Protection from All Harm and Created Evil',
    arabic: 'أَعُوذُ بِكَلِمَاتِ اللَّهِ التَّامَّاتِ مِنْ شَرِّ مَا خَلَقَ',
    transliteration: "A'udhu bikalimatil-lahit-tammati min sharri ma khalaq.",
    translationEnglish: "I seek refuge in the perfect words of Allah from the evil of what He has created.",
    translationUrdu: "میں اللہ کے کامل کلمات کی پناہ مانگتا ہوں ہر اس چیز کے شر سے جو اس نے پیدا کی۔",
    category: 'Protection',
    reference: 'Sahih Muslim 2708',
    benefit: 'Recited 3 times; guards against harmful creatures, evil eye, and sudden calamity.'
  },
  {
    id: 'protection-bismillahilladhi',
    title: 'Dua Shielding Against Any Harm in Heavens or Earth',
    arabic: 'بِسْمِ اللَّهِ الَّذِي لَا يَضُرُّ مَعَ اسْمِهِ شَيْءٌ فِي الْأَرْضِ وَلَا فِي السَّمَاءِ وَهُوَ السَّمِيعُ الْعَلِيمُ',
    transliteration: "Bismillahilladhi la yadurru ma'asmihi shay'un fil-ardi wa la fis-sama'i wa Huwas-Sami'ul-'Alim.",
    translationEnglish: "In the Name of Allah, with whose Name nothing can cause harm in the earth nor in the heaven, and He is the All-Hearing, the All-Knowing.",
    translationUrdu: "اللہ کے نام سے جس کے نام کی برکت سے زمین اور آسمان میں کوئی چیز نقصان نہیں پہنچا سکتی، اور وہی سب کچھ سننے والا اور جاننے والا ہے۔",
    category: 'Protection',
    reference: 'Abu Dawud 5088 & At-Tirmidhi 3388',
    benefit: 'Whoever recites this three times morning and evening will not be harmed by anything.'
  },

  // Travel
  {
    id: 'travel-supplication',
    title: 'Supplication When Embarking on a Journey',
    arabic: 'سُبْحَانَ الَّذِي سَخَّرَ لَنَا هَٰذَا وَمَا كُنَّا لَهُ مُقْرِنِينَ وَإِنَّا إِلَىٰ رَبِّنَا لَمُنقَلِبُونَ، اللَّهُمَّ إِنَّا نَسْأَلُكَ فِي سَفَرِنَا هَٰذَا الْبِرَّ وَالتَّقْوَىٰ',
    transliteration: "Subhanal-ladhi sakh-khara lana hadha wa ma kunna lahu muqrinin, wa inna ila Rabbina lamunqalibun. Allahumma inna nas'aluka fi safarina hadhal-birra wat-taqwa.",
    translationEnglish: "Glory be to Him Who has brought this under our control, whereas we were unable to subdue it ourselves. And indeed to our Lord we will surely return. O Allah, we ask You in this journey of ours for righteousness and piety.",
    translationUrdu: "پاک ہے وہ ذات جس نے اس (سواری) کو ہمارے قابو میں کر دیا ورنہ ہم اسے قابو میں لانے والے نہ تھے، اور بے شک ہمیں اپنے رب ہی کی طرف لوٹ کر جانا ہے۔ اے اللہ! ہم اپنے اس سفر میں نیکی اور تقویٰ کا سوال کرتے ہیں۔",
    category: 'Travel',
    reference: 'Sahih Muslim 1342 (Quran 43:13-14)',
    benefit: 'Provides divine safety during vehicle, flight, and road journeys.'
  },

  // Food
  {
    id: 'food-before-eating',
    title: 'Dua Before Beginning a Meal',
    arabic: 'بِسْمِ اللَّهِ وَعَلَى بَرَكَةِ اللَّهِ',
    transliteration: "Bismillahi wa 'ala barakatillah.",
    translationEnglish: "In the name of Allah and upon the blessing of Allah.",
    translationUrdu: "اللہ کے نام کے ساتھ اور اللہ کی برکت پر شروع کرتا ہوں۔",
    category: 'Food',
    reference: 'Abu Dawud 3767 & Al-Hakim',
    benefit: 'Invokes barakah in food and protects against shaytan partaking.'
  },
  {
    id: 'food-after-eating',
    title: 'Dua After Concluding a Meal',
    arabic: 'الْحَمْدُ لِلَّهِ الَّذِي أَطْعَمَنَا وَسَقَانَا وَجَعَلَنَا مُسْلِمِينَ',
    transliteration: "Alhamdu lillahil-ladhi at'amana wa saqana wa ja'alana Muslimeen.",
    translationEnglish: "All praise belongs to Allah Who fed us, gave us drink, and made us Muslims.",
    translationUrdu: "تمام تعریفیں اللہ کے لیے ہیں جس نے ہمیں کھلایا، پلایا اور ہمیں مسلمان بنایا۔",
    category: 'Food',
    reference: 'Abu Dawud 3850 & At-Tirmidhi 3457',
    benefit: 'Deepens gratitude for sustenance and earns divine pleasure.'
  },

  // Forgiveness
  {
    id: 'forgiveness-adam',
    title: 'Supplication of Prophet Adam & Hawwa',
    arabic: 'رَبَّنَا ظَلَمْنَا أَنفُسَنَا وَإِن لَّمْ تَغْفِرْ لَنَا وَتَرْحَمْنَا لَنَكُونَنَّ مِنَ الْخَاسِرِينَ',
    transliteration: "Rabbana thalamna anfusana wa in lam taghfir lana wa tarhamna lanakunanna minal-khasireen.",
    translationEnglish: "Our Lord, we have wronged ourselves, and if You do not forgive us and have mercy upon us, we will surely be among the losers.",
    translationUrdu: "اے ہمارے رب! ہم نے اپنی جانوں پر ظلم کیا اور اگر تو نے ہمیں نہ بخشا اور ہم پر رحم نہ فرمایا تو ہم یقیناً نقصان پانے والوں میں سے ہو جائیں گے۔",
    category: 'Forgiveness',
    reference: 'Surah Al-A\'raf (7:23)',
    benefit: 'The primeval repentant plea that was accepted by Allah for Prophet Adam.'
  },
  {
    id: 'forgiveness-rabbighfirli',
    title: 'Short Frequent Istighfar',
    arabic: 'رَبِّ اغْفِرْ لِي وَتُبْ عَلَيَّ إِنَّكَ أَنْتَ التَّوَّابُ الرَّحِيمُ',
    transliteration: "Rabbigh-fir li wa tub 'alayya, innaka Antat-Tawwabur-Rahim.",
    translationEnglish: "My Lord, forgive me and accept my repentance, truly You are the Oft-Returning with compassion, the Ever-Merciful.",
    translationUrdu: "اے میرے رب! مجھے بخش دے اور میری توبہ قبول فرما، بے شک تو ہی توبہ قبول فرمانے والا، نہایت رحم والا ہے۔",
    category: 'Forgiveness',
    reference: 'Abu Dawud 1516 & At-Tirmidhi 3434',
    benefit: 'The companions reported the Prophet (ﷺ) would count this supplication over 100 times in a single sitting.'
  },

  // Anxiety & Difficulties
  {
    id: 'anxiety-yunus',
    title: 'Dua of Prophet Yunus (Dhun-Nun) in the Whale',
    arabic: 'لَّا إِلَٰهَ إِلَّا أَنتَ سُبْحَانَكَ إِنِّي كُنتُ مِنَ الظَّالِمِينَ',
    transliteration: "La ilaha illa Anta subhanaka inni kuntu minaz-zalimeen.",
    translationEnglish: "There is no deity except You; exalted are You. Indeed, I have been of the wrongdoers.",
    translationUrdu: "تیرے سوا کوئی معبود نہیں، تو پاک ہے، بے شک میں ہی قصورواروں میں سے تھا۔",
    category: 'Anxiety & Difficulties',
    reference: 'Surah Al-Anbiya (21:87) & Jami` at-Tirmidhi 3505',
    benefit: 'The Prophet (ﷺ) stated no Muslim ever supplicates with this for any difficulty except that Allah removes their distress.'
  },
  {
    id: 'anxiety-hamm-hazan',
    title: 'Relief from Grief, Worry, and Heavy Debt',
    arabic: 'اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنَ الْهَمِّ وَالْحَزَنِ، وَالْعَجْزِ وَالْكَسَلِ، وَالْبُخْلِ وَالْجُبْنِ، وَضَلَعِ الدَّيْنِ، وَغَلَبَةِ الرِّجَالِ',
    transliteration: "Allahumma inni a'udhu bika minal-hammi wal-hazan, wal-'ajzi wal-kasal, wal-bukhli wal-jubn, wa dala'id-dayni wa ghalabatir-rijal.",
    translationEnglish: "O Allah, I seek refuge in You from grief and sorrow, weakness and laziness, miserliness and cowardice, the burden of debts, and being overpowered by men.",
    translationUrdu: "اے اللہ! میں تیری پناہ مانگتا ہوں فکر اور غم سے، عاجزی اور سستی سے، بخل اور بزدلی سے، قرض کے بوجھ سے اور لوگوں کے دباؤ اور غلبے سے۔",
    category: 'Anxiety & Difficulties',
    reference: 'Sahih al-Bukhari 2893',
    benefit: 'A comprehensive shelter against mental despair and emotional burnout.'
  },

  // Parents
  {
    id: 'parents-compassion',
    title: 'Dua for Mercy and Compassion on Parents',
    arabic: 'رَّبِّ ارْحَمْهُمَا كَمَا رَبَّيَانِي صَغِيرًا',
    transliteration: "Rabbir-hamhuma kama rabbayani sagheera.",
    translationEnglish: "My Lord, have mercy upon them as they brought me up when I was small.",
    translationUrdu: "اے میرے رب! ان دونوں پر رحم فرما جیسا کہ انہوں نے بچپن میں مجھے پالا اور پرورش کی۔",
    category: 'Parents',
    reference: 'Surah Al-Isra (17:24)',
    benefit: 'Divine instruction for lifelong devotion and prayers for both living and deceased parents.'
  },
  {
    id: 'parents-forgiveness-believers',
    title: 'Supplication of Prophet Ibrahim for Parents',
    arabic: 'رَبَّنَا اغْفِرْ لِي وَلِوَالِدَيَّ وَلِلْمُؤْمِنِينَ يَوْمَ يَقُومُ الْحِسَابُ',
    transliteration: "Rabbanagh-fir li wa liwalidayya wa lil-mu'minina yawma yaqumul-hisab.",
    translationEnglish: "Our Lord, forgive me and my parents and the believers the Day the account is established.",
    translationUrdu: "اے ہمارے رب! مجھے اور میرے والدین کو اور تمام مومنوں کو اس دن بخش دینا جس دن حساب قائم ہو گا۔",
    category: 'Parents',
    reference: 'Surah Ibrahim (14:41)',
    benefit: 'Encompasses one\'s parents and the entire global community of believers.'
  },

  // Knowledge
  {
    id: 'knowledge-zidni-ilman',
    title: 'Seeking Increase in Beneficial Knowledge',
    arabic: 'رَّبِّ زِدْنِي عِلْمًا',
    transliteration: "Rabbi zidni 'ilma.",
    translationEnglish: "My Lord, increase me in knowledge.",
    translationUrdu: "اے میرے رب! میرے علم میں اضافہ فرما۔",
    category: 'Knowledge',
    reference: 'Surah Ta-Ha (20:114)',
    benefit: 'The only worldly thing Allah commanded His Messenger (ﷺ) to pray for an increase of.'
  },
  {
    id: 'knowledge-nafi-rizq',
    title: 'Supplication for Useful Knowledge and Pure Sustenance',
    arabic: 'اللَّهُمَّ إِنِّي أَسْأَلُكَ عِلْمًا نَافِعًا، وَرِزْقًا طَيِّبًا، وَعَمَلًا مُتَقَبَّلًا',
    transliteration: "Allahumma inni as'aluka 'ilman nafi'an, wa rizqan tayyiban, wa 'amalan mutaqabbala.",
    translationEnglish: "O Allah, I ask You for knowledge that is beneficial, provision that is good and pure, and deeds that are accepted.",
    translationUrdu: "اے اللہ! میں تجھ سے نفع بخش علم، پاکیزہ رزق، اور قبول ہونے والے عمل کا سوال کرتا ہوں۔",
    category: 'Knowledge',
    reference: 'Sunan Ibn Majah 925 - Sahih',
    benefit: 'Recited every morning after Fajr prayer.'
  },

  // Health
  {
    id: 'health-afini-fi-badani',
    title: 'Dua for Well-being of Body, Hearing, and Sight',
    arabic: 'اللَّهُمَّ عَافِنِي فِي بَدَنِي، اللَّهُمَّ عَافِنِي فِي سَمْعِي، اللَّهُمَّ عَافِنِي فِي بَصَرِي، لَا إِلَهَ إِلَّا أَنْتَ',
    transliteration: "Allahumma 'afini fi badani, Allahumma 'afini fi sam'i, Allahumma 'afini fi basari, la ilaha illa Anta.",
    translationEnglish: "O Allah, grant me health in my body. O Allah, grant me health in my hearing. O Allah, grant me health in my sight. There is no deity except You.",
    translationUrdu: "اے اللہ! مجھے میرے بدن میں عافیت دے، اے اللہ! مجھے میری سماعت میں عافیت دے، اے اللہ! مجھے میری بصارت میں عافیت دے، تیرے سوا کوئی معبود نہیں۔",
    category: 'Health',
    reference: 'Abu Dawud 5090 & Ahmad',
    benefit: 'Recited 3 times morning and evening for physical and sensory vitality.'
  },
  {
    id: 'health-ruqyah-illness',
    title: 'Prophetic Healing Supplication for the Sick',
    arabic: 'أَذْهِبِ الْبَاسَ رَبَّ النَّاسِ، وَاشْفِ أَنْتَ الشَّافِي، لَا شِفَاءَ إِلَّا شِفَاؤُكَ، شِفَاءً لَا يُغَادِرُ سَقَمًا',
    transliteration: "Adh-hibil-ba'sa Rabban-nas, washfi Antash-Shafi, la shifa'a illa shifa'uk, shifa'an la yughadiru saqama.",
    translationEnglish: "Remove the disease, O Lord of mankind, and bring about healing; You are the Healer, there is no cure but Your cure, a healing that leaves no illness behind.",
    translationUrdu: "تکلیف کو دور فرما دے اے انسانوں کے رب! اور شفا عطا فرما، تو ہی شفا دینے والا ہے، تیری شفا کے سوا کوئی شفا نہیں، ایسی شفا جو کسی بیماری کو باقی نہ چھوڑے۔",
    category: 'Health',
    reference: 'Sahih al-Bukhari 5743 & Muslim 2191',
    benefit: 'Recited over oneself or someone in illness with gentle touch.'
  },

  // Daily Life
  {
    id: 'daily-leaving-home',
    title: 'Dua When Leaving the Home',
    arabic: 'بِسْمِ اللَّهِ، تَوَكَّلْتُ عَلَى اللَّهِ، وَلَا حَوْلَ وَلَا قُوَّةَ إِلَّا بِاللَّهِ',
    transliteration: "Bismillahi tawakkaltu 'alallah, wa la hawla wa la quwwata illa billah.",
    translationEnglish: "In the name of Allah, I place my trust in Allah; there is no might and no power except with Allah.",
    translationUrdu: "اللہ کے نام کے ساتھ، میں نے اللہ پر بھروسہ کیا، اور گناہ سے بچنے اور نیکی کرنے کی طاقت اللہ کی توفیق کے بغیر نہیں۔",
    category: 'Daily Life',
    reference: 'Abu Dawud 5094 & At-Tirmidhi 3426',
    benefit: 'It is said to the person: You are guided, defended, and protected, and Satan retreats.'
  },
  {
    id: 'daily-entering-home',
    title: 'Dua When Entering the Home',
    arabic: 'بِسْمِ اللَّهِ وَلَجْنَا، وَبِسْمِ اللَّهِ خَرَجْنَا، وَعَلَى رَبِّنَا تَوَكَّلْنَا',
    transliteration: "Bismillahi walajna, wa bismillahi kharajna, wa 'ala Rabbina tawakkalna.",
    translationEnglish: "In the name of Allah we enter, and in the name of Allah we leave, and upon our Lord we place our trust.",
    translationUrdu: "ہم اللہ کے نام سے داخل ہوئے اور اللہ کے نام سے نکلے، اور اپنے رب پر ہی ہم نے توکل کیا۔",
    category: 'Daily Life',
    reference: 'Sunan Abi Dawud 5096',
    benefit: 'Brings peace and angels\' presence into the household.'
  }
];

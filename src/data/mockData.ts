export type TabKey = 'home' | 'practice' | 'battle' | 'ranks' | 'profile';

export type SubjectKey = 'physics' | 'chemistry' | 'biology' | 'math' | 'bangla' | 'english';

export interface Subject {
  key: SubjectKey;
  nameBn: string;
  nameEn: string;
  icon: string;
  color: string;
  bgColor: string;
}

export interface Topic {
  id: string;
  subject: SubjectKey;
  nameBn: string;
  totalQuestions: number;
  completedQuestions: number;
  accuracy: number;
}

export interface ContinueSession {
  subject: SubjectKey;
  subjectNameBn: string;
  topicNameBn: string;
  totalQuestions: number;
  answeredQuestions: number;
  remainingQuestions: number;
}

export interface Contest {
  id: string;
  titleBn: string;
  examType: string;
  subject: SubjectKey;
  startsInMinutes: number;
  participants: number;
  prizeBn: string;
  timeBn: string;
  registeredBn?: string;
}

export interface RankEntry {
  rank: number;
  name: string;
  avatar: string;
  points: number;
  isYou?: boolean;
}

export interface UserProfile {
  name: string;
  fullName: string;
  avatar: string;
  university: string;
  subtitle: string;
  readiness: number;
  readinessChange: number;
  accuracy: number;
  accuracyChange: number;
  totalQuestions: number;
  correctAnswers: number;
  avgTimeSec: number;
  totalBattles: number;
  battlesWon: number;
  battleRating: number;
  winRate: number;
  streak: number;
  rank: number;
  nationalRank: number;
  weeklyRankChange: number;
  monthlyRankChange: number;
  joinedDate: string;
}

export const SUBJECTS: Subject[] = [
  {
    key: 'physics',
    nameBn: 'পদার্থবিজ্ঞান',
    nameEn: 'Physics',
    icon: 'Atom',
    color: 'text-blue-600',
    bgColor: 'bg-blue-50',
  },
  {
    key: 'chemistry',
    nameBn: 'রসায়ন',
    nameEn: 'Chemistry',
    icon: 'FlaskConical',
    color: 'text-accent-600',
    bgColor: 'bg-accent-50',
  },
  {
    key: 'biology',
    nameBn: 'জীববিজ্ঞান',
    nameEn: 'Biology',
    color: 'text-brand-600',
    bgColor: 'bg-brand-50',
    icon: 'Leaf',
  },
  {
    key: 'math',
    nameBn: 'গণিত',
    nameEn: 'Mathematics',
    icon: 'Sigma',
    color: 'text-purple-600',
    bgColor: 'bg-purple-50',
  },
  {
    key: 'bangla',
    nameBn: 'বাংলা',
    nameEn: 'Bangla',
    icon: 'BookOpen',
    color: 'text-rose-600',
    bgColor: 'bg-rose-50',
  },
  {
    key: 'english',
    nameBn: 'ইংরেজি',
    nameEn: 'English',
    icon: 'Languages',
    color: 'text-cyan-600',
    bgColor: 'bg-cyan-50',
  },
];

export const CONTINUE_SESSION: ContinueSession = {
  subject: 'physics',
  subjectNameBn: 'পদার্থবিজ্ঞান',
  topicNameBn: 'বর্তমান স্রোত ও বিদ্যুৎ',
  totalQuestions: 20,
  answeredQuestions: 8,
  remainingQuestions: 12,
};

export const FOCUS_AREA = {
  subjectNameBn: 'বর্তমান স্রোত ও বিদ্যুৎ',
  topicBn: 'কিরশফের সূত্র',
  descriptionBn: 'তুমি কিরশফের সূত্রে কিছুটা হিমশিম খাচ্ছ',
  accuracy: 52,
};

export const TOPICS: Topic[] = [
  { id: 't1', subject: 'physics', nameBn: 'বল ও গতি', totalQuestions: 50, completedQuestions: 42, accuracy: 85 },
  { id: 't2', subject: 'physics', nameBn: 'বর্তমান স্রোত ও বিদ্যুৎ', totalQuestions: 45, completedQuestions: 20, accuracy: 64 },
  { id: 't3', subject: 'physics', nameBn: 'তাপ ও গ্যাস', totalQuestions: 30, completedQuestions: 30, accuracy: 92 },
  { id: 't4', subject: 'physics', nameBn: 'আলো ও প্রতিসরণ', totalQuestions: 35, completedQuestions: 12, accuracy: 71 },
  { id: 't5', subject: 'physics', nameBn: 'পরমাণু পদার্থবিজ্ঞান', totalQuestions: 25, completedQuestions: 0, accuracy: 0 },
  { id: 't6', subject: 'chemistry', nameBn: 'রাসায়নিক বন্ধন', totalQuestions: 40, completedQuestions: 35, accuracy: 88 },
  { id: 't7', subject: 'chemistry', nameBn: 'জৈব রসায়ন', totalQuestions: 50, completedQuestions: 18, accuracy: 60 },
  { id: 't8', subject: 'chemistry', nameBn: 'পর্যায় সারণি', totalQuestions: 20, completedQuestions: 20, accuracy: 95 },
  { id: 't9', subject: 'biology', nameBn: 'কোষ ও এর গঠন', totalQuestions: 45, completedQuestions: 40, accuracy: 90 },
  { id: 't10', subject: 'biology', nameBn: 'জেনেটিক্স', totalQuestions: 30, completedQuestions: 15, accuracy: 73 },
  { id: 't11', subject: 'biology', nameBn: 'মানবদেহ', totalQuestions: 60, completedQuestions: 25, accuracy: 68 },
  { id: 't12', subject: 'math', nameBn: 'বীজগণিত', totalQuestions: 40, completedQuestions: 22, accuracy: 75 },
  { id: 't13', subject: 'math', nameBn: 'জ্যামিতি', totalQuestions: 35, completedQuestions: 10, accuracy: 58 },
  { id: 't14', subject: 'math', nameBn: 'ত্রিকোণমিতি', totalQuestions: 30, completedQuestions: 5, accuracy: 45 },
];

export const CONTESTS: Contest[] = [
  {
    id: 'c1',
    titleBn: 'ঢাবি পদার্থবিজ্ঞান স্প্রিন্ট',
    examType: 'DU',
    subject: 'physics',
    startsInMinutes: 138,
    participants: 3420,
    prizeBn: 'শীর্ষ ১০০ পাবে বিশেষ ব্যাজ',
    timeBn: 'আজ • রাত ৮:০০',
    registeredBn: '১,২৪৮ জন নিবন্ধিত',
  },
  {
    id: 'c2',
    titleBn: 'মেডিকেল জীববিজ্ঞান চ্যালেঞ্জ',
    examType: 'Medical',
    subject: 'biology',
    startsInMinutes: 320,
    participants: 2180,
    prizeBn: 'শীর্ষ ৫০ পাবে প্রিমিয়াম অ্যাক্সেস',
    timeBn: 'আগামীকাল • সন্ধ্যা ৭:০০',
    registeredBn: '৮৫৬ জন নিবন্ধিত',
  },
  {
    id: 'c3',
    titleBn: 'GST গণিত প্রতিযোগিতা',
    examType: 'GST',
    subject: 'math',
    startsInMinutes: 1440,
    participants: 1560,
    prizeBn: 'শীর্ষ ২০ পাবে ক্যাশ পুরস্কার',
    timeBn: 'পরশু • বিকেল ৪:০০',
    registeredBn: '৪২০ জন নিবন্ধিত',
  },
];

export const RECENT_BATTLES = [
  { id: 'rb1', opponent: 'রহিম', result: 'won' as const, points: 24, subject: 'পদার্থবিজ্ঞান' },
  { id: 'rb2', opponent: 'তানভীর', result: 'lost' as const, points: 11, subject: 'রসায়ন' },
];

export const RANK_DATA: Record<'national' | 'college', {
  rank: number;
  weeklyChange: number;
  monthlyChange: number;
  topRanks: RankEntry[];
  nearUserRanks: RankEntry[];
}> = {
  national: {
    rank: 1842,
    weeklyChange: 137,
    monthlyChange: 482,
    topRanks: [
      { rank: 1, name: 'আরিফ হোসেন', avatar: '🦁', points: 2841 },
      { rank: 2, name: 'ফাহিম আহমেদ', avatar: '🦊', points: 2798 },
      { rank: 3, name: 'নাবিল খান', avatar: '🦉', points: 2751 },
    ],
    nearUserRanks: [
      { rank: 1840, name: 'হাসান মাহমুদ', avatar: '🐺', points: 1924 },
      { rank: 1841, name: 'রাফি উদ্দিন', avatar: '🐯', points: 1921 },
      { rank: 1842, name: 'তুমি', avatar: '🦅', points: 1918, isYou: true },
      { rank: 1843, name: 'সামি ইসলাম', avatar: '🐱', points: 1916 },
    ],
  },
  college: {
    rank: 12,
    weeklyChange: 5,
    monthlyChange: 18,
    topRanks: [
      { rank: 1, name: 'সাব্বির আহমেদ', avatar: '🐺', points: 3200 },
      { rank: 2, name: 'ফারিয়া ইসলাম', avatar: '🦌', points: 3050 },
      { rank: 3, name: 'রাকিব হাসান', avatar: '🐯', points: 2900 },
    ],
    nearUserRanks: [
      { rank: 10, name: 'মীম আক্তার', avatar: '🐱', points: 2100 },
      { rank: 11, name: 'সাদিয়া রহমান', avatar: '🐰', points: 2050 },
      { rank: 12, name: 'তুমি', avatar: '🦅', points: 1980, isYou: true },
      { rank: 13, name: 'জয় বড়ুয়া', avatar: '🐻', points: 1920 },
    ],
  },
};

export const SUBJECT_READINESS = [
  { nameBn: 'পদার্থবিজ্ঞান', value: 76 },
  { nameBn: 'রসায়ন', value: 81 },
  { nameBn: 'জীববিজ্ঞান', value: 69 },
  { nameBn: 'গণিত', value: 73 },
];

export const STRENGTHS = ['জৈব রসায়ন', 'জেনেটিক্স', 'বলবিদ্যা'];
export const NEEDS_WORK = ['বর্তমান স্রোত ও বিদ্যুৎ', 'তরঙ্গ', 'তাপগতিবিজ্ঞান'];

export const USER_PROFILE: UserProfile = {
  name: 'ক্রিস',
  fullName: 'ক্রিস আহমেদ',
  avatar: '🦅',
  university: 'ঢাবি প্রতিযোগিতা',
  subtitle: 'বিজ্ঞান • এইচএসসি ২০২৭',
  readiness: 72,
  readinessChange: 4,
  accuracy: 78,
  accuracyChange: 2,
  totalQuestions: 1284,
  correctAnswers: 1002,
  avgTimeSec: 38,
  totalBattles: 84,
  battlesWon: 57,
  battleRating: 1426,
  winRate: 68,
  streak: 12,
  rank: 9,
  nationalRank: 1842,
  weeklyRankChange: 137,
  monthlyRankChange: 482,
  joinedDate: 'জানুয়ারি ২০২৬',
};

export const RECOMMENDED_TOPICS = [
  { id: 'r1', nameBn: 'বর্তমান স্রোত ও বিদ্যুৎ', questionCount: 8 },
  { id: 'r2', nameBn: 'তরঙ্গ', questionCount: 6 },
];

export const PAST_ADMISSION_QUESTIONS = [
  { id: 'pa1', nameBn: 'ঢাবি', questionCount: 1240 },
  { id: 'pa2', nameBn: 'রাবি', questionCount: 860 },
  { id: 'pa3', nameBn: 'চাবি', questionCount: 740 },
  { id: 'pa4', nameBn: 'GST', questionCount: 1120 },
  { id: 'pa5', nameBn: 'মেডিকেল', questionCount: 980 },
];

export const PRACTICE_HISTORY = [
  { date: 'আজ', subject: 'পদার্থবিজ্ঞান', correct: 14, total: 20, accuracy: 70 },
  { date: 'গতকাল', subject: 'রসায়ন', correct: 18, total: 20, accuracy: 90 },
  { date: 'গতকাল', subject: 'জীববিজ্ঞান', correct: 16, total: 20, accuracy: 80 },
  { date: '২ দিন আগে', subject: 'গণিত', correct: 12, total: 20, accuracy: 60 },
  { date: '৩ দিন আগে', subject: 'পদার্থবিজ্ঞান', correct: 19, total: 20, accuracy: 95 },
];

export const ACHIEVEMENTS = [
  { id: 'a1', iconBn: '🥇', titleBn: 'প্রথম জয়', descBn: 'প্রথম যুদ্ধে জয়', earned: true },
  { id: 'a2', iconBn: '🔥', titleBn: '৭ দিনের স্ট্রিক', descBn: 'টানা ৭ দিন অনুশীলন', earned: true },
  { id: 'a3', iconBn: '🧠', titleBn: '১,০০০ প্রশ্ন', descBn: '১,০০০+ প্রশ্ন সমাধান', earned: true },
  { id: 'a4', iconBn: '⚔️', titleBn: 'যোদ্ধা', descBn: '৫০+ যুদ্ধে জয়', earned: true },
  { id: 'a5', iconBn: '🎯', titleBn: 'নিখুঁত', descBn: '১০০% নির্ভুলতায় ২০টি প্রশ্ন', earned: false },
  { id: 'a6', iconBn: '🏆', titleBn: 'শীর্ষ ১০০', descBn: 'জাতীয় র‍্যাংকে শীর্ষ ১০০', earned: false },
];

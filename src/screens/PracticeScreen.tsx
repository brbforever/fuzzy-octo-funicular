import { CONTINUE_SESSION, RECOMMENDED_TOPICS, PAST_ADMISSION_QUESTIONS } from '@/data/mockData';
import {
  Search,
  Flame,
  BookOpen,
  Brain,
  ChevronRight,
  Target,
  Zap,
  FileText,
  ArrowRight,
} from 'lucide-react';

const bn = (n: number) => n.toLocaleString('bn-BD');

export function PracticeScreen() {
  const progressPercent = Math.round(
    (CONTINUE_SESSION.answeredQuestions / CONTINUE_SESSION.totalQuestions) * 100
  );

  return (
    <div className="min-h-screen bg-ink-50 pb-24">
      <header className="sticky top-0 z-30 bg-white/80 backdrop-blur-lg">
        <div className="flex items-center justify-between px-5 pt-6 pb-4">
          <div>
            <h1 className="font-display text-2xl font-extrabold text-ink-800">অনুশীলন</h1>
            <p className="text-sm text-ink-400">কী অনুশীলন করতে চাও?</p>
          </div>
          <button className="tap-scale flex h-10 w-10 items-center justify-center rounded-full bg-ink-100">
            <Search size={20} className="text-ink-600" />
          </button>
        </div>
      </header>

      <div className="space-y-6 px-5 pt-2">
        {/* Continue Practice */}
        <div className="animate-slide-up relative overflow-hidden rounded-3xl bg-gradient-to-br from-brand-500 to-brand-700 p-5 text-white shadow-card-lg">
          <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-white/10" />
          <div className="absolute -bottom-12 -left-4 h-28 w-28 rounded-full bg-white/5" />

          <div className="relative">
            <div className="mb-3 flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/20">
                <Flame size={18} className="text-white" fill="white" />
              </div>
              <span className="font-display text-sm font-bold uppercase tracking-wider">
                অনুশীলন চালিয়ে যাও
              </span>
            </div>

            <p className="mb-1 text-sm text-white/80">{CONTINUE_SESSION.subjectNameBn}</p>
            <h3 className="font-display text-xl font-bold leading-tight">
              {CONTINUE_SESSION.topicNameBn}
            </h3>

            <div className="mt-4 mb-3 flex items-center justify-between text-sm">
              <span className="text-white/90">
                {bn(CONTINUE_SESSION.remainingQuestions)}টি প্রশ্ন বাকি
              </span>
              <span className="font-semibold text-white">{progressPercent}%</span>
            </div>

            <div className="mb-4 h-2 w-full overflow-hidden rounded-full bg-white/20">
              <div
                className="h-full rounded-full bg-white transition-all duration-700"
                style={{ width: `${progressPercent}%` }}
              >
                <div className="h-full w-full rounded-full shimmer-bg animate-shimmer" />
              </div>
            </div>

            <button className="tap-scale flex w-full items-center justify-center gap-2 rounded-2xl bg-white py-3 font-display font-bold text-brand-600 transition-all hover:bg-brand-50">
              চালিয়ে যাও
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        {/* Two mode cards */}
        <div className="animate-slide-up grid grid-cols-2 gap-3" style={{ animationDelay: '0.05s' }}>
          <button className="tap-scale flex flex-col items-start rounded-2xl bg-white p-4 text-left shadow-card">
            <div className="mb-2 flex h-11 w-11 items-center justify-center rounded-xl bg-ink-100">
              <BookOpen size={22} className="text-ink-600" />
            </div>
            <p className="font-display text-sm font-bold text-ink-700">পূর্বের প্রশ্ন</p>
            <p className="mt-0.5 text-xs text-ink-400">ভর্তি পরীক্ষার বিগত প্রশ্ন</p>
          </button>
          <button className="tap-scale flex flex-col items-start rounded-2xl bg-white p-4 text-left shadow-card">
            <div className="mb-2 flex h-11 w-11 items-center justify-center rounded-xl bg-brand-50">
              <Brain size={22} className="text-brand-600" />
            </div>
            <p className="font-display text-sm font-bold text-ink-700">শিখো ও সমাধান</p>
            <p className="mt-0.5 text-xs text-ink-400">নতুন বিষয় আয়ত্ত করো</p>
          </button>
        </div>

        {/* Divider */}
        <div className="h-px bg-ink-200" />

        {/* Recommended for you */}
        <div className="animate-slide-up" style={{ animationDelay: '0.1s' }}>
          <div className="mb-3 flex items-center gap-2">
            <Target size={18} className="text-brand-600" />
            <h2 className="font-display text-base font-bold text-ink-700">তোমার জন্য সুপারিশকৃত</h2>
          </div>

          <p className="mb-4 text-sm text-ink-400">
            যেসব বিষয়ে তুমি হিমশিম খেয়েছ:
          </p>

          <div className="space-y-3">
            {RECOMMENDED_TOPICS.map((topic) => (
              <div
                key={topic.id}
                className="flex items-center justify-between rounded-2xl border border-ink-200 bg-white p-4 shadow-card"
              >
                <div className="flex-1">
                  <h3 className="font-display text-sm font-bold text-ink-700">
                    {topic.nameBn}
                  </h3>
                  <p className="mt-1 text-xs text-ink-400">
                    {bn(topic.questionCount)}টি প্রশ্ন
                  </p>
                </div>
                <button className="tap-scale flex items-center gap-1.5 rounded-full bg-brand-500 px-4 py-2 text-sm font-bold text-white transition-all hover:bg-brand-600">
                  শুরু
                  <ArrowRight size={15} />
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-ink-200" />

        {/* Past Admission Questions */}
        <div className="animate-slide-up" style={{ animationDelay: '0.15s' }}>
          <div className="mb-3 flex items-center gap-2">
            <FileText size={18} className="text-blue-600" />
            <h2 className="font-display text-base font-bold text-ink-700">
              বিগত ভর্তি পরীক্ষার প্রশ্ন
            </h2>
          </div>

          <div className="overflow-hidden rounded-2xl bg-white shadow-card">
            {PAST_ADMISSION_QUESTIONS.map((item, idx) => (
              <button
                key={item.id}
                className={`tap-scale flex w-full items-center justify-between px-4 py-3.5 text-left transition-colors hover:bg-ink-50 ${
                  idx > 0 ? 'border-t border-ink-100' : ''
                }`}
              >
                <span className="font-display text-sm font-bold text-ink-700">
                  {item.nameBn}
                </span>
                <span className="text-sm text-ink-400">
                  {bn(item.questionCount)}টি প্রশ্ন
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

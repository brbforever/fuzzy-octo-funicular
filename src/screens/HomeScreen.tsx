import { Logo } from '@/components/Logo';
import { ProgressBar } from '@/components/ProgressBar';
import { AnimatedNumber } from '@/components/AnimatedNumber';
import {
  CONTINUE_SESSION,
  FOCUS_AREA,
  CONTESTS,
  USER_PROFILE,
  type TabKey,
} from '@/data/mockData';
import { Zap, Target, Brain, Swords, Trophy, ChevronRight, Bell, TrendingUp, Flame, Users } from 'lucide-react';

interface HomeScreenProps {
  onNavigate: (tab: TabKey) => void;
}

function formatCountdown(minutes: number): string {
  const h = Math.floor(minutes / 60);
  const m = minutes % 60;
  return `${h}ঘ ${m}মি`;
}

export function HomeScreen({ onNavigate }: HomeScreenProps) {
  const contest = CONTESTS[0];
  const progressPercent = Math.round(
    (CONTINUE_SESSION.answeredQuestions / CONTINUE_SESSION.totalQuestions) * 100
  );

  return (
    <div className="min-h-screen bg-ink-50 pb-24">
      {/* Header */}
      <header className="sticky top-0 z-30 bg-white/80 backdrop-blur-lg">
        <div className="flex items-center justify-between px-5 pt-4 pb-3">
          <Logo />
          <button className="tap-scale relative flex h-10 w-10 items-center justify-center rounded-full bg-ink-100">
            <Bell size={20} className="text-ink-600" />
            <span className="absolute right-2.5 top-2.5 h-2 w-2 rounded-full bg-accent-500 ring-2 ring-white" />
          </button>
        </div>
        <div className="px-5 pb-3">
          <p className="text-sm text-ink-400">শুভ সন্ধ্যা,</p>
          <p className="font-display text-xl font-bold text-ink-800">{USER_PROFILE.name} 👋</p>
        </div>
      </header>

      <div className="space-y-5 px-5 pt-2">
        {/* Continue card */}
        <div
          className="animate-slide-up relative overflow-hidden rounded-3xl bg-gradient-to-br from-brand-500 to-brand-700 p-5 text-white shadow-card-lg"
        >
          <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-white/10" />
          <div className="absolute -bottom-12 -left-4 h-28 w-28 rounded-full bg-white/5" />

          <div className="relative">
            <div className="mb-3 flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/20">
                <Zap size={18} className="text-white" fill="white" />
              </div>
              <span className="font-display text-sm font-bold uppercase tracking-wider">চালিয়ে যাও</span>
            </div>

            <p className="mb-1 text-sm text-white/80">{CONTINUE_SESSION.subjectNameBn}</p>
            <h3 className="font-display text-xl font-bold leading-tight">
              {CONTINUE_SESSION.topicNameBn}
            </h3>

            <div className="mt-4 mb-3 flex items-center justify-between text-sm">
              <span className="text-white/90">
                {CONTINUE_SESSION.remainingQuestions}টি প্রশ্ন বাকি
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

        {/* Progress stats */}
        <div className="animate-slide-up" style={{ animationDelay: '0.05s' }}>
          <div className="mb-3 flex items-center gap-2">
            <Target size={18} className="text-brand-600" />
            <h2 className="font-display text-base font-bold text-ink-700">তোমার অগ্রগতি</h2>
          </div>

          <div className="grid grid-cols-2 gap-3">
            {/* Readiness */}
            <div className="rounded-2xl bg-white p-4 shadow-card">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-xs text-ink-400">প্রস্তুতি</p>
                  <p className="font-display text-3xl font-extrabold text-ink-800">
                    <AnimatedNumber value={USER_PROFILE.readiness} suffix="%" />
                  </p>
                </div>
                <div className="flex items-center gap-0.5 rounded-full bg-brand-50 px-2 py-1">
                  <TrendingUp size={12} className="text-brand-600" />
                  <span className="text-xs font-semibold text-brand-600">
                    +{USER_PROFILE.readinessChange}%
                  </span>
                </div>
              </div>
              <ProgressBar
                value={USER_PROFILE.readiness}
                max={100}
                className="mt-3"
                barClassName="bg-gradient-to-r from-brand-400 to-brand-600"
              />
            </div>

            {/* Accuracy */}
            <div className="rounded-2xl bg-white p-4 shadow-card">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-xs text-ink-400">নির্ভুলতা</p>
                  <p className="font-display text-3xl font-extrabold text-ink-800">
                    <AnimatedNumber value={USER_PROFILE.accuracy} suffix="%" />
                  </p>
                </div>
                <div className="flex items-center gap-0.5 rounded-full bg-blue-50 px-2 py-1">
                  <TrendingUp size={12} className="text-blue-600" />
                  <span className="text-xs font-semibold text-blue-600">
                    +{USER_PROFILE.accuracyChange}%
                  </span>
                </div>
              </div>
              <ProgressBar
                value={USER_PROFILE.accuracy}
                max={100}
                className="mt-3"
                barClassName="bg-gradient-to-r from-blue-400 to-blue-600"
              />
            </div>
          </div>
        </div>

        {/* Focus area */}
        <div
          className="animate-slide-up rounded-2xl border border-accent-100 bg-gradient-to-br from-accent-50 to-white p-5 shadow-card"
          style={{ animationDelay: '0.1s' }}
        >
          <div className="mb-3 flex items-center gap-2">
            <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-accent-100">
              <Brain size={16} className="text-accent-600" />
            </div>
            <span className="font-display text-sm font-bold uppercase tracking-wider text-accent-700">
              মনোযোগের ক্ষেত্র
            </span>
          </div>

          <h3 className="font-display text-lg font-bold text-ink-800">{FOCUS_AREA.subjectNameBn}</h3>
          <p className="mt-1 text-sm text-ink-500">
            তুমি <span className="font-semibold text-accent-600">{FOCUS_AREA.topicBn}</span>-এ কিছুটা হিমশিম খাচ্ছ
          </p>

          <div className="mt-3 flex items-center gap-2">
            <div className="flex-1">
              <div className="mb-1 flex justify-between text-xs">
                <span className="text-ink-400">নির্ভুলতা</span>
                <span className="font-semibold text-accent-600">{FOCUS_AREA.accuracy}%</span>
              </div>
              <ProgressBar
                value={FOCUS_AREA.accuracy}
                max={100}
                barClassName="bg-accent-500"
              />
            </div>
          </div>

          <button
            onClick={() => onNavigate('practice')}
            className="tap-scale mt-4 flex w-full items-center justify-center gap-2 rounded-2xl bg-accent-500 py-3 font-display font-bold text-white transition-all hover:bg-accent-600"
          >
            অনুশীলন করো
            <ChevronRight size={18} />
          </button>
        </div>

        {/* Battle */}
        <button
          onClick={() => onNavigate('battle')}
          className="animate-slide-up tap-scale flex w-full items-center gap-4 overflow-hidden rounded-2xl bg-gradient-to-r from-ink-800 to-ink-900 p-5 text-left text-white shadow-card-lg"
          style={{ animationDelay: '0.15s' }}
        >
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white/15">
            <Swords size={24} className="text-white" />
          </div>
          <div className="flex-1">
            <h3 className="font-display text-lg font-bold">যুদ্ধ</h3>
            <p className="text-sm text-white/70">
              <AnimatedNumber value={1248} /> জন এখন যুদ্ধ করছে
            </p>
          </div>
          <div className="flex items-center gap-1 rounded-full bg-white/15 px-3 py-1.5">
            <span className="text-sm font-semibold">যুদ্ধে যাও</span>
            <ChevronRight size={16} />
          </div>
        </button>

        {/* Next contest */}
        <button
          className="animate-slide-up tap-scale flex w-full items-center gap-4 overflow-hidden rounded-2xl bg-white p-5 text-left shadow-card"
          style={{ animationDelay: '0.2s' }}
        >
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-amber-50">
            <Trophy size={24} className="text-amber-500" />
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="font-display text-base font-bold text-ink-800">{contest.titleBn}</h3>
            <div className="mt-1 flex items-center gap-3 text-xs text-ink-400">
              <span className="flex items-center gap-1">
                <span className="font-semibold text-amber-600">{formatCountdown(contest.startsInMinutes)}</span>
                পরে শুরু
              </span>
              <span className="flex items-center gap-1">
                <Users size={12} />
                {(contest.participants / 1000).toFixed(1)}হ
              </span>
            </div>
          </div>
          <div className="flex shrink-0 items-center gap-1 rounded-full bg-brand-500 px-4 py-2 text-white">
            <span className="text-sm font-bold">যোগ দাও</span>
            <ChevronRight size={16} />
          </div>
        </button>

        {/* Streak banner */}
        <div
          className="animate-slide-up flex items-center gap-3 rounded-2xl bg-gradient-to-r from-orange-400 to-accent-500 p-4 text-white shadow-card"
          style={{ animationDelay: '0.25s' }}
        >
          <Flame size={28} className="shrink-0" fill="white" />
          <div className="flex-1">
            <p className="font-display text-lg font-bold">
              <AnimatedNumber value={USER_PROFILE.streak} /> দিনের স্ট্রিক!
            </p>
            <p className="text-sm text-white/80">চালিয়ে যাও, তুমি দুর্দান্ত করছ</p>
          </div>
        </div>
      </div>
    </div>
  );
}

import {
  USER_PROFILE,
  ACHIEVEMENTS,
  SUBJECT_READINESS,
  STRENGTHS,
  NEEDS_WORK,
} from '@/data/mockData';
import { ProgressBar } from '@/components/ProgressBar';
import { AnimatedNumber } from '@/components/AnimatedNumber';
import {
  Settings,
  Target,
  BarChart3,
  Swords,
  Brain,
  AlertTriangle,
  Award,
  ChevronRight,
  Flame,
} from 'lucide-react';

const bn = (n: number) => n.toLocaleString('bn-BD');

function SectionHeader({ icon: Icon, title, color }: { icon: typeof Target; title: string; color: string }) {
  return (
    <div className="mb-3 flex items-center gap-2">
      <Icon size={18} className={color} />
      <h2 className="font-display text-base font-bold text-ink-700">{title}</h2>
    </div>
  );
}

function StatRow({ label, value, isLast }: { label: string; value: string; isLast?: boolean }) {
  return (
    <div className={`flex items-center justify-between py-2.5 ${!isLast ? 'border-b border-ink-100' : ''}`}>
      <span className="text-sm text-ink-500">{label}</span>
      <span className="font-display text-sm font-bold text-ink-800">{value}</span>
    </div>
  );
}

export function ProfileScreen() {
  return (
    <div className="min-h-screen bg-ink-50 pb-24">
      <header className="sticky top-0 z-30 bg-white/80 backdrop-blur-lg">
        <div className="flex items-center justify-between px-5 pt-6 pb-4">
          <h1 className="font-display text-2xl font-extrabold text-ink-800">প্রোফাইল</h1>
          <button className="tap-scale flex h-10 w-10 items-center justify-center rounded-full bg-ink-100">
            <Settings size={20} className="text-ink-600" />
          </button>
        </div>
      </header>

      <div className="space-y-6 px-5 pt-2">
        {/* Profile card */}
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-brand-500 to-brand-700 p-6 text-white shadow-card-lg">
          <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-white/10" />
          <div className="absolute -bottom-12 -left-4 h-28 w-28 rounded-full bg-white/5" />

          <div className="relative flex flex-col items-center text-center">
            <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-white/20 text-5xl shadow-lg">
              {USER_PROFILE.avatar}
            </div>
            <h2 className="mt-3 font-display text-2xl font-extrabold">{USER_PROFILE.fullName}</h2>
            <p className="text-sm text-white/80">{USER_PROFILE.subtitle}</p>
          </div>

          <div className="relative mt-5 grid grid-cols-3 gap-3 border-t border-white/20 pt-4">
            <div className="text-center">
              <p className="font-display text-xl font-extrabold">
                #<AnimatedNumber value={USER_PROFILE.nationalRank} />
              </p>
              <p className="text-[11px] text-white/70">জাতীয় র‍্যাংক</p>
            </div>
            <div className="text-center border-x border-white/20">
              <p className="font-display text-xl font-extrabold">
                {USER_PROFILE.accuracy}%
              </p>
              <p className="text-[11px] text-white/70">নির্ভুলতা</p>
            </div>
            <div className="text-center">
              <p className="flex items-center justify-center gap-1 font-display text-xl font-extrabold">
                <Flame size={16} fill="white" />
                <AnimatedNumber value={USER_PROFILE.streak} />
              </p>
              <p className="text-[11px] text-white/70">স্ট্রিক</p>
            </div>
          </div>
        </div>

        {/* Admission Readiness */}
        <div className="animate-slide-up">
          <SectionHeader icon={Target} title="ভর্তি প্রস্তুতি" color="text-brand-600" />

          <div className="rounded-2xl bg-white p-5 shadow-card">
            <div className="text-center">
              <p className="font-display text-4xl font-extrabold text-ink-800">
                <AnimatedNumber value={USER_PROFILE.readiness} />
                <span className="text-2xl text-ink-300"> / ১০০</span>
              </p>
            </div>
            <ProgressBar
              value={USER_PROFILE.readiness}
              max={100}
              className="mt-3"
              barClassName="bg-gradient-to-r from-brand-400 to-brand-600"
            />

            <div className="mt-5 space-y-3">
              {SUBJECT_READINESS.map((subject) => (
                <div key={subject.nameBn}>
                  <div className="mb-1 flex items-center justify-between">
                    <span className="text-sm font-semibold text-ink-600">{subject.nameBn}</span>
                    <span className="font-display text-sm font-bold text-ink-700">
                      {bn(subject.value)}
                    </span>
                  </div>
                  <ProgressBar
                    value={subject.value}
                    max={100}
                    barClassName={
                      subject.value >= 80 ? 'bg-brand-500' :
                      subject.value >= 70 ? 'bg-blue-500' :
                      'bg-accent-500'
                    }
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Performance */}
        <div className="animate-slide-up" style={{ animationDelay: '0.05s' }}>
          <SectionHeader icon={BarChart3} title="কৃতিত্ব" color="text-blue-600" />

          <div className="rounded-2xl bg-white px-4 py-1 shadow-card">
            <StatRow label="নির্ভুলতা" value={`${USER_PROFILE.accuracy}%`} />
            <StatRow label="মোট প্রশ্ন" value={bn(USER_PROFILE.totalQuestions)} />
            <StatRow label="সঠিক উত্তর" value={bn(USER_PROFILE.correctAnswers)} />
            <StatRow label="গড় সময়" value={`${bn(USER_PROFILE.avgTimeSec)} সেকেন্ড`} isLast />
          </div>
        </div>

        {/* Battle */}
        <div className="animate-slide-up" style={{ animationDelay: '0.1s' }}>
          <SectionHeader icon={Swords} title="যুদ্ধ" color="text-accent-600" />

          <div className="rounded-2xl bg-white px-4 py-1 shadow-card">
            <StatRow label="রেটিং" value={bn(USER_PROFILE.battleRating)} />
            <StatRow label="মোট যুদ্ধ" value={bn(USER_PROFILE.totalBattles)} />
            <StatRow label="জয়" value={bn(USER_PROFILE.battlesWon)} />
            <StatRow label="জয়ের হার" value={`${USER_PROFILE.winRate}%`} isLast />
          </div>
        </div>

        {/* Strengths */}
        <div className="animate-slide-up" style={{ animationDelay: '0.15s' }}>
          <SectionHeader icon={Brain} title="দক্ষতা" color="text-brand-600" />

          <div className="rounded-2xl bg-white px-4 py-1 shadow-card">
            {STRENGTHS.map((item, idx) => (
              <div
                key={idx}
                className={`flex items-center gap-2.5 py-2.5 ${
                  idx < STRENGTHS.length - 1 ? 'border-b border-ink-100' : ''
                }`}
              >
                <span className="font-display text-lg font-bold text-brand-600">+</span>
                <span className="text-sm font-semibold text-ink-700">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Needs Work */}
        <div className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
          <SectionHeader icon={AlertTriangle} title="আরও অনুশীলন দরকার" color="text-amber-500" />

          <div className="rounded-2xl bg-white px-4 py-1 shadow-card">
            {NEEDS_WORK.map((item, idx) => (
              <div
                key={idx}
                className={`flex items-center gap-2.5 py-2.5 ${
                  idx < NEEDS_WORK.length - 1 ? 'border-b border-ink-100' : ''
                }`}
              >
                <AlertTriangle size={15} className="shrink-0 text-amber-500" />
                <span className="text-sm font-semibold text-ink-700">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Achievements */}
        <div className="animate-slide-up" style={{ animationDelay: '0.25s' }}>
          <SectionHeader icon={Award} title="অর্জন" color="text-amber-500" />

          <div className="grid grid-cols-2 gap-3">
            {ACHIEVEMENTS.map((achievement) => (
              <div
                key={achievement.id}
                className={`flex items-center gap-2.5 rounded-2xl p-3.5 transition-all ${
                  achievement.earned ? 'bg-white shadow-card' : 'bg-ink-100 opacity-50'
                }`}
              >
                <span className={`text-2xl ${achievement.earned ? '' : 'grayscale'}`}>
                  {achievement.iconBn}
                </span>
                <div className="min-w-0">
                  <p className="font-display text-xs font-bold leading-tight text-ink-700">
                    {achievement.titleBn}
                  </p>
                  <p className="mt-0.5 text-[10px] leading-tight text-ink-400">
                    {achievement.descBn}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Settings link */}
        <div>
          <div className="h-px bg-ink-200" />
          <button className="tap-scale mt-3 flex w-full items-center justify-between rounded-2xl bg-white p-4 shadow-card">
            <span className="font-display text-sm font-bold text-ink-700">সেটিংস</span>
            <ChevronRight size={18} className="text-ink-300" />
          </button>
        </div>

        {/* Version */}
        <p className="pt-1 text-center text-xs text-ink-400">
          পড়ুয়া v১.০.০ · ভালোবেসে তৈরি 🇧🇩
        </p>
      </div>
    </div>
  );
}

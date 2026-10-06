import { RECENT_BATTLES, CONTESTS, SUBJECTS, type Contest } from '@/data/mockData';
import {
  Swords,
  ChevronRight,
  Trophy,
  Users,
  Zap,
  Clock,
  Gift,
  Atom,
  Leaf,
  Sigma,
} from 'lucide-react';

const bn = (n: number) => n.toLocaleString('bn-BD');

const CONTEST_STYLES: Record<
  string,
  { gradient: string; badge: string; icon: typeof Trophy }
> = {
  c1: { gradient: 'from-blue-500 to-blue-700', badge: 'DU', icon: Atom },
  c2: { gradient: 'from-brand-500 to-brand-700', badge: 'মেডিকেল', icon: Leaf },
  c3: { gradient: 'from-purple-500 to-purple-700', badge: 'GST', icon: Sigma },
};

function ContestCard({ contest }: { contest: Contest }) {
  const style = CONTEST_STYLES[contest.id] ?? CONTEST_STYLES.c1;
  const Icon = style.icon;

  return (
    <div className="overflow-hidden rounded-3xl bg-white shadow-card-lg">
      {/* Colored header */}
      <div className={`relative bg-gradient-to-br ${style.gradient} p-5 text-white`}>
        <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-white/10" />
        <div className="absolute -bottom-8 -left-2 h-20 w-20 rounded-full bg-white/5" />

        <div className="relative flex items-start justify-between">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/20">
            <Icon size={24} className="text-white" />
          </div>
          <span className="rounded-full bg-white/20 px-3 py-1 text-xs font-bold backdrop-blur-sm">
            {style.badge}
          </span>
        </div>

        <h3 className="relative mt-3 font-display text-lg font-bold leading-snug">
          {contest.titleBn}
        </h3>
      </div>

      {/* Body */}
      <div className="p-5">
        <div className="flex items-center gap-2 text-sm text-ink-500">
          <Clock size={15} className="text-ink-400" />
          <span className="font-medium text-ink-600">{contest.timeBn}</span>
        </div>

        <div className="mt-3 flex items-center gap-2 text-sm text-ink-500">
          <Users size={15} className="text-ink-400" />
          <span className="font-medium text-ink-600">{contest.registeredBn}</span>
        </div>

        <div className="mt-3 flex items-center gap-2 text-sm text-ink-500">
          <Gift size={15} className="text-amber-500" />
          <span className="font-medium text-ink-600">{contest.prizeBn}</span>
        </div>

        <button className="tap-scale mt-5 flex w-full items-center justify-center gap-2 rounded-2xl bg-brand-500 py-3.5 font-display font-bold text-white transition-all hover:bg-brand-600">
          যোগ দাও
          <ChevronRight size={18} />
        </button>
      </div>
    </div>
  );
}

export function BattleScreen() {
  return (
    <div className="min-h-screen bg-ink-50 pb-24">
      <header className="sticky top-0 z-30 bg-white/80 backdrop-blur-lg">
        <div className="px-5 pt-6 pb-4">
          <h1 className="font-display text-2xl font-extrabold text-ink-800">যুদ্ধ</h1>
        </div>
      </header>

      <div className="space-y-6 px-5 pt-2">
        {/* 1v1 Battle */}
        <div className="animate-slide-up">
          <div className="mb-3 flex items-center gap-2">
            <Swords size={18} className="text-brand-600" />
            <h2 className="font-display text-base font-bold text-ink-700">১v১ যুদ্ধ</h2>
          </div>

          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-ink-800 to-ink-900 p-6 text-white shadow-card-lg">
            <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-white/5" />
            <div className="absolute -bottom-12 -left-4 h-28 w-28 rounded-full bg-white/5" />

            <div className="relative text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-white/15">
                <Swords size={30} className="text-white" />
              </div>
              <h3 className="font-display text-xl font-bold">প্রতিপক্ষ খুঁজুন</h3>
              <p className="mt-2 text-sm text-white/70">৫টি প্রশ্ন • ৬০ সেকেন্ড</p>
              <button className="tap-scale mt-5 flex w-full items-center justify-center gap-2 rounded-2xl bg-white py-3.5 font-display font-bold text-ink-800 transition-all hover:bg-ink-100">
                <Zap size={18} className="text-brand-600" fill="currentColor" />
                যুদ্ধ শুরু করো
              </button>
            </div>
          </div>
        </div>

        {/* Recent Battles */}
        <div className="animate-slide-up" style={{ animationDelay: '0.05s' }}>
          <h2 className="font-display text-base font-bold text-ink-700">সাম্প্রতিক যুদ্ধ</h2>
          <div className="mb-3 mt-1 h-px bg-ink-200" />
          <div className="space-y-2">
            {RECENT_BATTLES.map((battle) => (
              <div
                key={battle.id}
                className="flex items-center justify-between rounded-2xl bg-white p-4 shadow-card"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-ink-100 font-display text-sm font-bold text-ink-600">
                    {battle.opponent.charAt(0)}
                  </div>
                  <div>
                    <p className="font-display text-sm font-bold text-ink-700">
                      vs {battle.opponent}
                    </p>
                    <p className="text-[11px] text-ink-400">{battle.subject}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span
                    className={`rounded-full px-3 py-1 text-xs font-bold ${
                      battle.result === 'won'
                        ? 'bg-brand-50 text-brand-600'
                        : 'bg-red-50 text-red-500'
                    }`}
                  >
                    {battle.result === 'won' ? 'জয়' : 'পরাজয়'}
                  </span>
                  <span
                    className={`font-display text-sm font-bold ${
                      battle.result === 'won' ? 'text-brand-600' : 'text-red-500'
                    }`}
                  >
                    {battle.result === 'won' ? '+' : '-'}
                    {bn(battle.points)}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Contests */}
        <div className="animate-slide-up" style={{ animationDelay: '0.1s' }}>
          <div className="mb-3 flex items-center gap-2">
            <Trophy size={18} className="text-amber-500" />
            <h2 className="font-display text-base font-bold text-ink-700">প্রতিযোগিতা</h2>
          </div>
          <div className="space-y-4">
            {CONTESTS.map((contest) => (
              <ContestCard key={contest.id} contest={contest} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

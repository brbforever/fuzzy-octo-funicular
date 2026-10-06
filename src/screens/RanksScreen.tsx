import { useState } from 'react';
import { RANK_DATA, type RankEntry } from '@/data/mockData';
import { AnimatedNumber } from '@/components/AnimatedNumber';
import { Trophy, TrendingUp } from 'lucide-react';

type Scope = 'national' | 'college';

const bn = (n: number) => n.toLocaleString('bn-BD');

function RankRow({ entry, isFirst }: { entry: RankEntry; isFirst?: boolean }) {
  return (
    <div
      className={`flex items-center gap-3 px-4 py-3 ${
        !isFirst ? 'border-t border-ink-100' : ''
      } ${entry.isYou ? 'bg-brand-50' : ''}`}
    >
      <span className="w-14 shrink-0 font-display text-sm font-bold text-ink-500">
        #{bn(entry.rank)}
      </span>
      <span className="shrink-0 text-lg">{entry.avatar}</span>
      <span className="flex-1 truncate font-display text-sm font-bold text-ink-700">
        {entry.name}
        {entry.isYou && <span className="ml-1 text-xs text-brand-600">(তুমি)</span>}
      </span>
      <span className="shrink-0 font-display text-sm font-bold text-ink-600">
        {bn(entry.points)}
      </span>
    </div>
  );
}

export function RanksScreen() {
  const [scope, setScope] = useState<Scope>('national');
  const data = RANK_DATA[scope];

  return (
    <div className="min-h-screen bg-ink-50 pb-24">
      <header className="sticky top-0 z-30 bg-white/80 backdrop-blur-lg">
        <div className="px-5 pt-6 pb-4">
          <h1 className="font-display text-2xl font-extrabold text-ink-800">র‍্যাংক</h1>
        </div>
      </header>

      <div className="space-y-5 px-5 pt-2">
        {/* Scope toggle */}
        <div className="flex rounded-2xl bg-ink-100 p-1">
          <button
            onClick={() => setScope('national')}
            className={`tap-scale flex-1 rounded-xl py-2.5 text-sm font-bold transition-all ${
              scope === 'national' ? 'bg-white text-ink-800 shadow-card' : 'text-ink-400'
            }`}
          >
            জাতীয়
          </button>
          <button
            onClick={() => setScope('college')}
            className={`tap-scale flex-1 rounded-xl py-2.5 text-sm font-bold transition-all ${
              scope === 'college' ? 'bg-white text-ink-800 shadow-card' : 'text-ink-400'
            }`}
          >
            কলেজ
          </button>
        </div>

        {/* Rank display */}
        <div className="animate-slide-up relative overflow-hidden rounded-3xl bg-gradient-to-br from-brand-500 to-brand-700 p-6 text-center text-white shadow-card-lg">
          <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-white/10" />
          <div className="absolute -bottom-8 -left-4 h-20 w-20 rounded-full bg-white/5" />

          <div className="relative">
            <div className="mb-2 flex items-center justify-center gap-2">
              <Trophy size={18} />
              <span className="font-display text-sm font-bold uppercase tracking-wider">
                {scope === 'national' ? 'জাতীয় র‍্যাংক' : 'কলেজ র‍্যাংক'}
              </span>
            </div>
            <p className="font-display text-5xl font-extrabold">
              #
              <AnimatedNumber value={data.rank} />
            </p>
            <div className="mt-3 flex items-center justify-center gap-1.5">
              <TrendingUp size={16} />
              <span className="text-sm font-semibold">
                <AnimatedNumber value={data.weeklyChange} /> স্থান এগিয়ে এই সপ্তাহে
              </span>
            </div>
          </div>
        </div>

        {/* Leaderboard */}
        <div className="animate-slide-up overflow-hidden rounded-2xl bg-white shadow-card" style={{ animationDelay: '0.05s' }}>
          {data.topRanks.map((entry, idx) => (
            <RankRow key={`top-${entry.rank}`} entry={entry} isFirst={idx === 0} />
          ))}

          {/* Divider */}
          <div className="flex items-center px-4 py-2.5">
            <div className="h-px flex-1 bg-ink-100" />
            <span className="px-3 text-sm font-bold text-ink-300">···</span>
            <div className="h-px flex-1 bg-ink-100" />
          </div>

          {data.nearUserRanks.map((entry) => (
            <RankRow key={`near-${entry.rank}`} entry={entry} />
          ))}
        </div>

        {/* Divider line */}
        <div className="h-px bg-ink-200" />

        {/* Your movement */}
        <div>
          <h2 className="mb-3 font-display text-base font-bold text-ink-700">তোমার অগ্রগতি</h2>
          <div className="rounded-2xl bg-white p-4 shadow-card">
            <div className="flex items-center justify-between py-2">
              <span className="text-sm text-ink-500">এই সপ্তাহে</span>
              <span className="flex items-center gap-1 font-display text-base font-bold text-brand-600">
                <TrendingUp size={16} />
                +<AnimatedNumber value={data.weeklyChange} />
              </span>
            </div>
            <div className="flex items-center justify-between border-t border-ink-100 py-2">
              <span className="text-sm text-ink-500">এই মাসে</span>
              <span className="flex items-center gap-1 font-display text-base font-bold text-brand-600">
                <TrendingUp size={16} />
                +<AnimatedNumber value={data.monthlyChange} />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

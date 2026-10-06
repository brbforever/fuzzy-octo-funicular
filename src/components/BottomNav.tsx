import type { TabKey } from '@/data/mockData';
import { Home, Dumbbell, Swords, Trophy, User } from 'lucide-react';

interface BottomNavProps {
  activeTab: TabKey;
  onTabChange: (tab: TabKey) => void;
}

const TABS: { key: TabKey; label: string; icon: typeof Home }[] = [
  { key: 'home', label: 'হোম', icon: Home },
  { key: 'practice', label: 'অনুশীলন', icon: Dumbbell },
  { key: 'battle', label: 'যুদ্ধ', icon: Swords },
  { key: 'ranks', label: 'র‍্যাংক', icon: Trophy },
  { key: 'profile', label: 'প্রোফাইল', icon: User },
];

export function BottomNav({ activeTab, onTabChange }: BottomNavProps) {
  return (
    <nav className="fixed bottom-0 left-1/2 z-50 w-full max-w-md -translate-x-1/2 border-t border-ink-200/80 bg-white/90 backdrop-blur-lg">
      <div className="flex items-center justify-around px-2 pb-[env(safe-area-inset-bottom)] pt-2">
        {TABS.map((tab) => {
          const isActive = activeTab === tab.key;
          const Icon = tab.icon;

          return (
            <button
              key={tab.key}
              onClick={() => onTabChange(tab.key)}
              className="tap-scale flex flex-1 flex-col items-center gap-1 py-1.5"
            >
              <div
                className={`relative flex h-8 w-8 items-center justify-center rounded-xl transition-all duration-300 ${
                  isActive
                    ? 'bg-brand-500 text-white shadow-glow scale-110'
                    : 'text-ink-400'
                }`}
              >
                <Icon size={20} strokeWidth={isActive ? 2.5 : 2} />
                {isActive && (
                  <span className="absolute -inset-1 rounded-xl bg-brand-400/30 animate-pulse-ring" />
                )}
              </div>
              <span
                className={`text-[11px] font-medium transition-colors ${
                  isActive ? 'text-brand-600' : 'text-ink-400'
                }`}
              >
                {tab.label}
              </span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}

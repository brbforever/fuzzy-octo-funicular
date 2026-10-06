import { useState } from 'react';
import { BottomNav } from '@/components/BottomNav';
import { HomeScreen } from '@/screens/HomeScreen';
import { PracticeScreen } from '@/screens/PracticeScreen';
import { BattleScreen } from '@/screens/BattleScreen';
import { RanksScreen } from '@/screens/RanksScreen';
import { ProfileScreen } from '@/screens/ProfileScreen';
import { OnboardingScreen } from '@/screens/OnboardingScreen';
import type { TabKey } from '@/data/mockData';

function App() {
  const [activeTab, setActiveTab] = useState<TabKey>('home');
  const [onboardingComplete, setOnboardingComplete] = useState(false);

  if (!onboardingComplete) {
    return (
      <div className="mx-auto min-h-screen max-w-md bg-ink-50">
        <OnboardingScreen onComplete={() => setOnboardingComplete(true)} />
      </div>
    );
  }

  const renderScreen = () => {
    switch (activeTab) {
      case 'home':
        return <HomeScreen onNavigate={setActiveTab} />;
      case 'practice':
        return <PracticeScreen />;
      case 'battle':
        return <BattleScreen />;
      case 'ranks':
        return <RanksScreen />;
      case 'profile':
        return <ProfileScreen />;
      default:
        return <HomeScreen onNavigate={setActiveTab} />;
    }
  };

  return (
    <div className="mx-auto min-h-screen max-w-md bg-ink-50">
      <div key={activeTab} className="animate-fade-in">
        {renderScreen()}
      </div>
      <BottomNav activeTab={activeTab} onTabChange={setActiveTab} />
    </div>
  );
}

export default App;

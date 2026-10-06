import { useState } from 'react';
import { Logo } from '@/components/Logo';
import {
  ArrowLeft,
  ArrowRight,
  ChevronRight,
  GraduationCap,
  FlaskConical,
  Stethoscope,
  Check,
  Target,
  BookOpen,
  Zap,
} from 'lucide-react';

interface ExamTarget {
  id: string;
  nameBn: string;
  groupBn: string;
  shortName: string;
  icon: typeof GraduationCap;
  iconBg: string;
  iconColor: string;
}

const EXAM_TARGETS: ExamTarget[] = [
  { id: 'DU', nameBn: 'ঢাকা বিশ্ববিদ্যালয়', groupBn: 'বিজ্ঞান', shortName: 'DU', icon: GraduationCap, iconBg: 'bg-blue-50', iconColor: 'text-blue-600' },
  { id: 'RU', nameBn: 'রাজশাহী বিশ্ববিদ্যালয়', groupBn: 'বিজ্ঞান', shortName: 'RU', icon: GraduationCap, iconBg: 'bg-blue-50', iconColor: 'text-blue-600' },
  { id: 'CU', nameBn: 'চট্টগ্রাম বিশ্ববিদ্যালয়', groupBn: 'বিজ্ঞান', shortName: 'CU', icon: GraduationCap, iconBg: 'bg-blue-50', iconColor: 'text-blue-600' },
  { id: 'GST', nameBn: 'GST', groupBn: 'গুচ্ছ', shortName: 'GST', icon: FlaskConical, iconBg: 'bg-purple-50', iconColor: 'text-purple-600' },
  { id: 'Medical', nameBn: 'মেডিকেল', groupBn: 'ভর্তি পরীক্ষা', shortName: 'Medical', icon: Stethoscope, iconBg: 'bg-brand-50', iconColor: 'text-brand-600' },
];

const HSC_OPTIONS = [
  { id: 'hsc2027', labelBn: 'এইচএসসি ২০২৭' },
  { id: 'hsc2026', labelBn: 'এইচএসসি ২০২৬' },
  { id: 'drop', labelBn: 'ড্রপ / রিটেক' },
];

const SUBJECTS_ONBOARD = [
  { id: 'physics', labelBn: 'পদার্থবিজ্ঞান', icon: '⚛️', defaultChecked: true },
  { id: 'chemistry', labelBn: 'রসায়ন', icon: '🧪', defaultChecked: true },
  { id: 'biology', labelBn: 'জীববিজ্ঞান', icon: '🧬', defaultChecked: true },
  { id: 'math', labelBn: 'গণিত', icon: '📐', defaultChecked: false },
];

interface OnboardingScreenProps {
  onComplete: () => void;
}

type Step =
  | 'welcome'
  | 'login'
  | 'targets'
  | 'primary'
  | 'hsc'
  | 'subjects'
  | 'summary';

const STEP_ORDER: Step[] = ['welcome', 'login', 'targets', 'primary', 'hsc', 'subjects', 'summary'];

const STEP_NUMBERS: Partial<Record<Step, number>> = {
  targets: 2,
  primary: 3,
  hsc: 4,
  subjects: 5,
};

export function OnboardingScreen({ onComplete }: OnboardingScreenProps) {
  const [step, setStep] = useState<Step>('welcome');
  const [selectedTargets, setSelectedTargets] = useState<string[]>([]);
  const [primaryTarget, setPrimaryTarget] = useState<string>('');
  const [hscYear, setHscYear] = useState<string>('');
  const [selectedSubjects, setSelectedSubjects] = useState<string[]>(
    SUBJECTS_ONBOARD.filter((s) => s.defaultChecked).map((s) => s.id)
  );

  const stepIndex = STEP_ORDER.indexOf(step);
  const stepNumber = STEP_NUMBERS[step];

  const goBack = () => {
    if (step === 'targets') {
      setStep('welcome');
      return;
    }
    if (stepIndex > 0) {
      const prevStep = STEP_ORDER[stepIndex - 1];
      if (prevStep === 'primary' && selectedTargets.length <= 1) {
        setStep('targets');
      } else {
        setStep(prevStep);
      }
    }
  };

  const toggleTarget = (id: string) => {
    setSelectedTargets((prev) =>
      prev.includes(id) ? prev.filter((t) => t !== id) : [...prev, id]
    );
  };

  const toggleSubject = (id: string) => {
    setSelectedSubjects((prev) =>
      prev.includes(id) ? prev.filter((s) => s !== id) : [...prev, id]
    );
  };

  const handleTargetsContinue = () => {
    if (selectedTargets.length > 1) {
      setStep('primary');
    } else if (selectedTargets.length === 1) {
      setPrimaryTarget(selectedTargets[0]);
      setStep('hsc');
    }
  };

  const canContinueTargets = selectedTargets.length >= 1;
  const canContinuePrimary = primaryTarget !== '';
  const canContinueHsc = hscYear !== '';
  const canContinueSubjects = selectedSubjects.length >= 1;

  const primaryExam = EXAM_TARGETS.find((t) => t.id === primaryTarget);
  const selectedExamObjects = EXAM_TARGETS.filter((t) => selectedTargets.includes(t.id));
  const selectedSubjectObjects = SUBJECTS_ONBOARD.filter((s) => selectedSubjects.includes(s.id));

  const renderTopBar = () => {
    if (step === 'welcome' || step === 'summary' || step === 'login') return null;
    return (
      <div className="flex items-center justify-between px-5 pt-6 pb-2">
        <button onClick={goBack} className="tap-scale flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-card">
          <ArrowLeft size={20} className="text-ink-600" />
        </button>
        {stepNumber && (
          <span className="font-display text-sm font-bold text-ink-400">
            {stepNumber} / ৬
          </span>
        )}
      </div>
    );
  };

  const renderContinueButton = (enabled: boolean, onClick: () => void, label = 'এগিয়ে যাও') => (
    <button
      disabled={!enabled}
      onClick={onClick}
      className={`tap-scale flex w-full items-center justify-center gap-2 rounded-2xl py-4 font-display text-base font-bold transition-all ${
        enabled
          ? 'bg-brand-500 text-white shadow-glow hover:bg-brand-600'
          : 'bg-ink-200 text-ink-400'
      }`}
    >
      {label}
      <ArrowRight size={20} />
    </button>
  );

  return (
    <div className="flex min-h-screen flex-col bg-ink-50">
      {renderTopBar()}

      <div className="flex flex-1 flex-col px-5">
        {step === 'welcome' && (
          <div className="flex flex-1 flex-col items-center justify-center text-center animate-fade-in">
            <Logo className="text-5xl" />

            <div className="mt-6">
              <h2 className="font-display text-2xl font-extrabold leading-snug text-ink-800">
                স্মার্টলি প্রস্তুতি নাও।
              </h2>
              <h2 className="font-display text-2xl font-extrabold leading-snug text-brand-600">
                উঁচু র‍্যাংক করো।
              </h2>
            </div>

            <p className="mt-5 max-w-xs text-balance text-base leading-relaxed text-ink-500">
              আসল ভর্তি প্রশ্ন অনুশীলন করো, দুর্বল জায়গাগুলো শনাক্ত করো, এবং সারা বাংলাদেশের শিক্ষার্থীদের সাথে প্রতিযোগিতা করো।
            </p>

            <div className="mt-auto w-full pt-12">
              <button
                onClick={() => setStep('targets')}
                className="tap-scale flex w-full items-center justify-center gap-2 rounded-2xl bg-brand-500 py-4 font-display text-base font-bold text-white shadow-glow transition-all hover:bg-brand-600"
              >
                শুরু করো
                <ArrowRight size={20} />
              </button>
              <p className="mt-4 text-sm text-ink-400">
                আগে থেকেই অ্যাকাউন্ট আছে?{' '}
                <button onClick={() => setStep('login')} className="font-bold text-brand-600">
                  লগ ইন করো
                </button>
              </p>
            </div>
          </div>
        )}

        {step === 'login' && (
          <div className="flex flex-1 flex-col items-center justify-center text-center animate-fade-in">
            <Logo className="text-5xl" />

            <div className="mt-6">
              <h2 className="font-display text-2xl font-extrabold leading-snug text-ink-800">
                তোমার ভর্তি যাত্রা
              </h2>
              <h2 className="font-display text-2xl font-extrabold leading-snug text-brand-600">
                এখান থেকে শুরু।
              </h2>
            </div>

            <div className="mt-auto w-full pt-12">
              <button
                onClick={onComplete}
                className="tap-scale flex w-full items-center justify-center gap-3 rounded-2xl bg-white py-4 font-display text-base font-bold text-ink-700 shadow-card transition-all hover:bg-ink-50"
              >
                <span className="text-xl font-bold text-blue-500">G</span>
                Google দিয়ে চালিয়ে যাও
              </button>

              <button
                onClick={onComplete}
                className="tap-scale mt-3 flex w-full items-center justify-center gap-3 rounded-2xl bg-white py-4 font-display text-base font-bold text-ink-700 shadow-card transition-all hover:bg-ink-50"
              >
                <span className="text-xl font-bold text-blue-600">f</span>
                Facebook দিয়ে চালিয়ে যাও
              </button>

              <div className="my-6 flex items-center gap-3">
                <div className="h-px flex-1 bg-ink-200" />
              </div>

              <p className="text-xs leading-relaxed text-ink-400">
                চালিয়ে গিয়ে তুমি পড়ুয়ার{' '}
                <span className="font-medium text-ink-500">শর্তাবলী ও গোপনীয়তা নীতিতে</span>{' '}
                সম্মত হচ্ছ।
              </p>
            </div>
          </div>
        )}

        {step === 'targets' && (
          <div className="flex flex-1 flex-col animate-slide-up pt-2">
            <div className="mb-1">
              <h1 className="font-display text-2xl font-extrabold text-ink-800">
                কিসের প্রস্তুতি নিচ্ছ?
              </h1>
              <p className="mt-2 text-sm leading-relaxed text-ink-500">
                তোমার লক্ষ্য বিশ্ববিদ্যালয় ও পরীক্ষা বেছে নাও। এগুলো পরে বদলানো যাবে।
              </p>
            </div>

            <div className="mt-5 flex-1 space-y-3">
              {EXAM_TARGETS.map((target) => {
                const isSelected = selectedTargets.includes(target.id);
                const Icon = target.icon;
                return (
                  <button
                    key={target.id}
                    onClick={() => toggleTarget(target.id)}
                    className={`tap-scale flex w-full items-center gap-4 rounded-2xl border-2 p-4 text-left transition-all ${
                      isSelected
                        ? 'border-brand-500 bg-brand-50/50 shadow-card'
                        : 'border-transparent bg-white shadow-card'
                    }`}
                  >
                    <div className={`flex h-12 w-12 items-center justify-center rounded-xl ${target.iconBg}`}>
                      <Icon size={24} className={target.iconColor} />
                    </div>
                    <div className="flex-1">
                      <p className="font-display text-base font-bold text-ink-800">{target.nameBn}</p>
                      <p className="text-xs text-ink-400">{target.groupBn}</p>
                    </div>
                    <div className={`flex h-6 w-6 items-center justify-center rounded-full border-2 transition-all ${
                      isSelected ? 'border-brand-500 bg-brand-500' : 'border-ink-300'
                    }`}>
                      {isSelected && <Check size={14} className="text-white" strokeWidth={3} />}
                    </div>
                  </button>
                );
              })}
            </div>

            <div className="pt-5 pb-8">
              {renderContinueButton(canContinueTargets, handleTargetsContinue)}
            </div>
          </div>
        )}

        {step === 'primary' && (
          <div className="flex flex-1 flex-col animate-slide-up pt-2">
            <div className="mb-1">
              <h1 className="font-display text-2xl font-extrabold text-ink-800">
                তোমার #১ লক্ষ্য কোনটি?
              </h1>
              <p className="mt-2 text-sm leading-relaxed text-ink-500">
                এটি আমরা তোমার সুপারিশ ও অগ্রগতি ব্যক্তিগতকৃত করতে ব্যবহার করব।
              </p>
            </div>

            <div className="mt-6 flex flex-col items-center">
              <div className="flex h-20 w-20 items-center justify-center rounded-4xl bg-gradient-to-br from-brand-400 to-brand-600 shadow-glow">
                <GraduationCap size={40} className="text-white" />
              </div>
            </div>

            <div className="mt-6 flex-1 space-y-2.5">
              {selectedExamObjects.map((target) => {
                const isSelected = primaryTarget === target.id;
                const Icon = target.icon;
                return (
                  <button
                    key={target.id}
                    onClick={() => setPrimaryTarget(target.id)}
                    className={`tap-scale flex w-full items-center gap-4 rounded-2xl border-2 p-4 text-left transition-all ${
                      isSelected
                        ? 'border-brand-500 bg-brand-50/50 shadow-card'
                        : 'border-transparent bg-white shadow-card'
                    }`}
                  >
                    <div className={`flex h-10 w-10 items-center justify-center rounded-xl ${target.iconBg}`}>
                      <Icon size={20} className={target.iconColor} />
                    </div>
                    <span className="flex-1 font-display text-base font-bold text-ink-800">
                      {target.shortName}
                    </span>
                    <div className={`flex h-6 w-6 items-center justify-center rounded-full border-2 transition-all ${
                      isSelected ? 'border-brand-500 bg-brand-500' : 'border-ink-300'
                    }`}>
                      {isSelected && <Check size={14} className="text-white" strokeWidth={3} />}
                    </div>
                  </button>
                );
              })}
            </div>

            <div className="pt-5 pb-8">
              {renderContinueButton(canContinuePrimary, () => setStep('hsc'))}
            </div>
          </div>
        )}

        {step === 'hsc' && (
          <div className="flex flex-1 flex-col animate-slide-up pt-2">
            <div className="mb-1">
              <h1 className="font-display text-2xl font-extrabold text-ink-800">
                এখন কোন ধাপে আছো?
              </h1>
              <p className="mt-2 text-sm leading-relaxed text-ink-500">
                তোমার উত্তর আমাদের অনুশীলন ব্যক্তিগতকৃত করতে সাহায্য করবে।
              </p>
            </div>

            <div className="mt-5 flex-1 space-y-3">
              {HSC_OPTIONS.map((opt) => {
                const isSelected = hscYear === opt.id;
                return (
                  <button
                    key={opt.id}
                    onClick={() => setHscYear(opt.id)}
                    className={`tap-scale flex w-full items-center justify-between rounded-2xl border-2 p-5 text-left transition-all ${
                      isSelected
                        ? 'border-brand-500 bg-brand-50/50 shadow-card'
                        : 'border-transparent bg-white shadow-card'
                    }`}
                  >
                    <span className="font-display text-lg font-bold text-ink-800">{opt.labelBn}</span>
                    <div className={`flex h-6 w-6 items-center justify-center rounded-full border-2 transition-all ${
                      isSelected ? 'border-brand-500 bg-brand-500' : 'border-ink-300'
                    }`}>
                      {isSelected && <Check size={14} className="text-white" strokeWidth={3} />}
                    </div>
                  </button>
                );
              })}
            </div>

            <div className="pt-5 pb-8">
              {renderContinueButton(canContinueHsc, () => setStep('subjects'))}
            </div>
          </div>
        )}

        {step === 'subjects' && (
          <div className="flex flex-1 flex-col animate-slide-up pt-2">
            <div className="mb-1">
              <h1 className="font-display text-2xl font-extrabold text-ink-800">
                কী নিয়ে মনোযোগ দিতে চাও?
              </h1>
              <p className="mt-2 text-sm leading-relaxed text-ink-500">
                তোমার বিষয়সমূহ বেছে নাও।
              </p>
            </div>

            <div className="mt-5 flex-1 space-y-3">
              {SUBJECTS_ONBOARD.map((subject) => {
                const isSelected = selectedSubjects.includes(subject.id);
                return (
                  <button
                    key={subject.id}
                    onClick={() => toggleSubject(subject.id)}
                    className={`tap-scale flex w-full items-center gap-4 rounded-2xl border-2 p-4 text-left transition-all ${
                      isSelected
                        ? 'border-brand-500 bg-brand-50/50 shadow-card'
                        : 'border-transparent bg-white shadow-card'
                    }`}
                  >
                    <span className="text-2xl">{subject.icon}</span>
                    <span className="flex-1 font-display text-base font-bold text-ink-800">
                      {subject.labelBn}
                    </span>
                    <div className={`flex h-6 w-6 items-center justify-center rounded-full border-2 transition-all ${
                      isSelected ? 'border-brand-500 bg-brand-500' : 'border-ink-300'
                    }`}>
                      {isSelected && <Check size={14} className="text-white" strokeWidth={3} />}
                    </div>
                  </button>
                );
              })}
            </div>

            <p className="mt-4 text-sm text-ink-400">
              এগুলো দিয়ে আমরা তোমার অনুশীলন সুপারিশ তৈরি করব।
            </p>

            <div className="pt-5 pb-8">
              {renderContinueButton(canContinueSubjects, () => setStep('summary'))}
            </div>
          </div>
        )}

        {step === 'summary' && (
          <div className="flex flex-1 flex-col animate-fade-in pt-8">
            <div className="text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-3xl bg-gradient-to-br from-brand-400 to-brand-600 shadow-glow">
                <Check size={32} className="text-white" strokeWidth={3} />
              </div>
              <h1 className="font-display text-2xl font-extrabold text-ink-800">
                তোমার পড়ুয়া প্রস্তুত!
              </h1>
            </div>

            <div className="mt-8 space-y-4">
              {/* Primary target */}
              <div className="rounded-2xl bg-white p-5 shadow-card">
                <div className="mb-2 flex items-center gap-2">
                  <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-blue-50">
                    <Target size={16} className="text-blue-600" />
                  </div>
                  <span className="font-display text-sm font-bold uppercase tracking-wide text-ink-400">
                    মূল লক্ষ্য
                  </span>
                </div>
                {primaryExam && (
                  <>
                    <p className="font-display text-lg font-bold text-ink-800">{primaryExam.nameBn}</p>
                    <p className="text-sm text-ink-400">{primaryExam.groupBn}</p>
                  </>
                )}
              </div>

              {/* Focus subjects */}
              <div className="rounded-2xl bg-white p-5 shadow-card">
                <div className="mb-2 flex items-center gap-2">
                  <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-brand-50">
                    <BookOpen size={16} className="text-brand-600" />
                  </div>
                  <span className="font-display text-sm font-bold uppercase tracking-wide text-ink-400">
                    মনোযোগ
                  </span>
                </div>
                <p className="font-display text-base font-bold text-ink-800">
                  {selectedSubjectObjects.map((s) => s.labelBn).join(' · ')}
                </p>
              </div>

              {/* Starting plan */}
              <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-brand-500 to-brand-700 p-5 text-white shadow-card-lg">
                <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-white/10" />
                <div className="relative">
                  <div className="mb-2 flex items-center gap-2">
                    <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-white/20">
                      <Zap size={16} className="text-white" fill="white" />
                    </div>
                    <span className="font-display text-sm font-bold uppercase tracking-wide text-white/90">
                      তোমার শুরুর প্ল্যান
                    </span>
                  </div>
                  <p className="font-display text-lg font-bold">১০টি লক্ষ্যমূলক প্রশ্ন</p>
                  <p className="mt-0.5 text-sm text-white/80">তোমার লক্ষ্যের ওপর ভিত্তি করে</p>
                </div>
              </div>
            </div>

            <div className="mt-auto pt-8 pb-8">
              <button
                onClick={onComplete}
                className="tap-scale flex w-full items-center justify-center gap-2 rounded-2xl bg-brand-500 py-4 font-display text-base font-bold text-white shadow-glow transition-all hover:bg-brand-600"
              >
                অনুশীলন শুরু করো
                <ArrowRight size={20} />
              </button>
              <button
                onClick={onComplete}
                className="tap-scale mt-4 flex w-full items-center justify-center gap-1 font-display text-sm font-bold text-ink-400 transition-colors hover:text-ink-600"
              >
                হোম ঘুরে দেখো
                <ChevronRight size={16} />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

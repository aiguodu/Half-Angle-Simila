import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, RotateCcw, PlayCircle } from 'lucide-react';
import GeometrySVG from './GeometrySVG';
import StepPanel from './StepPanel';
import SubtitleOverlay from './SubtitleOverlay';
import { steps } from '../data/steps';
import { ttsService } from '../services/ttsService';

export default function GeometryTutorial() {
  const [currentStep, setCurrentStep] = useState(0);

  // Play TTS automatically when step changes
  useEffect(() => {
    ttsService.play(steps[currentStep].tts);
    return () => ttsService.stop();
  }, [currentStep]);

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(prev => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentStep > 0) {
      setCurrentStep(prev => prev - 1);
    }
  };

  const handleReset = () => {
    setCurrentStep(0);
  };

  const handleReplayTTS = () => {
    ttsService.play(steps[currentStep].tts);
  };

  return (
    <div className="min-h-screen bg-slate-100 flex items-center justify-center p-4 md:p-8 font-sans">
      <div className="w-full max-w-6xl bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col border border-slate-200">
        
        {/* Header */}
        <header className="bg-white border-b border-slate-200 px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="px-3 py-1 bg-blue-100 text-blue-700 text-sm font-semibold rounded-full">
              几何动点与折叠
            </span>
            <h1 className="text-xl font-bold text-slate-800">
              平行四边形折叠求线段长度
            </h1>
          </div>
          <div className="text-sm font-medium text-slate-500">
            步骤 {currentStep + 1} / {steps.length}
          </div>
        </header>

        {/* Main Content Area - Fixed Height 570px */}
        <div className="flex flex-col md:flex-row h-[570px] relative">
          
          {/* Left: Visual/SVG Area (55%) */}
          <div className="w-full md:w-[55%] h-full bg-white relative">
            <GeometrySVG step={currentStep} />
            <SubtitleOverlay />
          </div>

          {/* Right: Logic/Step Area (45%) */}
          <div className="w-full md:w-[45%] h-full">
            <StepPanel step={currentStep} />
          </div>

        </div>

        {/* Footer Controls */}
        <footer className="bg-slate-50 border-t border-slate-200 px-6 py-4 flex items-center justify-between">
          <button
            onClick={handleReset}
            className="flex items-center gap-2 px-4 py-2 text-slate-600 hover:text-slate-900 hover:bg-slate-200 rounded-lg transition-colors font-medium"
          >
            <RotateCcw size={18} />
            重新开始
          </button>

          <div className="flex items-center gap-3">
            <button
              onClick={handleReplayTTS}
              className="flex items-center gap-2 px-4 py-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors font-medium"
            >
              <PlayCircle size={18} />
              重听讲解
            </button>
            <button
              onClick={handlePrev}
              disabled={currentStep === 0}
              className="flex items-center gap-2 px-5 py-2 bg-white border border-slate-300 text-slate-700 rounded-lg hover:bg-slate-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors font-medium shadow-sm"
            >
              <ChevronLeft size={18} />
              上一步
            </button>
            <button
              onClick={handleNext}
              disabled={currentStep === steps.length - 1}
              className="flex items-center gap-2 px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors font-medium shadow-sm"
            >
              下一步
              <ChevronRight size={18} />
            </button>
          </div>
        </footer>

      </div>
    </div>
  );
}

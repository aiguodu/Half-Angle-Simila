import { motion } from 'motion/react';
import { steps } from '../data/steps';

export default function StepPanel({ step }: { step: number }) {
  const currentStepData = steps[step];
  const Icon = currentStepData.icon;

  return (
    <div className="w-full h-full bg-slate-50 p-6 md:p-8 overflow-y-auto border-l border-slate-200">
      <motion.div
        key={step}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="flex flex-col gap-6"
      >
        <div className="flex items-center gap-3 text-blue-600">
          <div className="p-2 bg-blue-100 rounded-lg">
            <Icon size={24} />
          </div>
          <h2 className="text-xl font-bold text-slate-800">{currentStepData.title}</h2>
        </div>

        <div className="bg-white p-5 rounded-xl shadow-sm border border-slate-100">
          <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-2">核心结论</h3>
          <p className="text-slate-700 font-medium">{currentStepData.desc}</p>
        </div>

        <div className="bg-white p-5 rounded-xl shadow-sm border border-slate-100">
          <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-4">推导过程</h3>
          <div className="text-slate-700 font-serif leading-relaxed whitespace-pre-line text-lg">
            {currentStepData.detail}
          </div>
        </div>
      </motion.div>
    </div>
  );
}

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ttsService, TTSState } from '../services/ttsService';
import { Volume2, Loader2 } from 'lucide-react';

export default function SubtitleOverlay() {
  const [state, setState] = useState<TTSState>('idle');
  const [text, setText] = useState('');

  useEffect(() => {
    const unsubscribe = ttsService.subscribe((newState, newText) => {
      setState(newState);
      setText(newText);
    });
    return unsubscribe;
  }, []);

  return (
    <AnimatePresence>
      {state !== 'idle' && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          className="absolute bottom-6 left-1/2 -translate-x-1/2 w-[90%] max-w-2xl bg-slate-900/75 backdrop-blur-md rounded-2xl p-4 shadow-2xl border border-white/10 z-10"
        >
          <div className="flex items-start gap-3">
            <div className="mt-1 shrink-0 text-blue-400">
              {state === 'loading' ? (
                <Loader2 size={20} className="animate-spin" />
              ) : (
                <Volume2 size={20} className="animate-pulse" />
              )}
            </div>
            <div className="flex-1 max-h-[100px] overflow-y-auto pr-2 custom-scrollbar">
              <p className="text-white/95 text-base md:text-lg leading-relaxed font-medium tracking-wide">
                {text}
              </p>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

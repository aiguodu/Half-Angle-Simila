import { motion, AnimatePresence } from 'motion/react';

// Helper to draw SVG arcs
function describeArc(x: number, y: number, radius: number, startAngle: number, endAngle: number) {
  const polarToCartesian = (cx: number, cy: number, r: number, angleDeg: number) => {
    const angleRad = (angleDeg * Math.PI) / 180.0;
    return { x: cx + r * Math.cos(angleRad), y: cy + r * Math.sin(angleRad) };
  };
  const start = polarToCartesian(x, y, radius, endAngle);
  const end = polarToCartesian(x, y, radius, startAngle);
  const largeArcFlag = endAngle - startAngle <= 180 ? "0" : "1";
  return `M ${start.x} ${start.y} A ${radius} ${radius} 0 ${largeArcFlag} 0 ${end.x} ${end.y}`;
}

export default function GeometrySVG({ step }: { step: number }) {
  // Calculated coordinates to match the geometric properties visually
  const A = { x: 160, y: 100 };
  const B = { x: 80, y: 280 };
  const C = { x: 380, y: 280 };
  const D = { x: 460, y: 100 };
  const D_prime = { x: 219, y: 394 };
  const E = { x: 196, y: 280 };

  return (
    <div className="w-full h-full flex items-start pt-8 pb-24 justify-center relative">
      <svg viewBox="0 0 550 450" className="w-full max-w-[500px] drop-shadow-sm">
        {/* Base Parallelogram */}
        <polygon points={`${A.x},${A.y} ${B.x},${B.y} ${C.x},${C.y} ${D.x},${D.y}`} fill="none" stroke="#334155" strokeWidth="2" />
        <line x1={A.x} y1={A.y} x2={C.x} y2={C.y} stroke="#334155" strokeWidth="2" />

        {/* Labels */}
        <text x={A.x - 10} y={A.y - 10} className="font-serif italic text-xl fill-slate-800">A</text>
        <text x={B.x - 20} y={B.y + 20} className="font-serif italic text-xl fill-slate-800">B</text>
        <text x={C.x + 10} y={C.y + 20} className="font-serif italic text-xl fill-slate-800">C</text>
        <text x={D.x + 10} y={D.y - 10} className="font-serif italic text-xl fill-slate-800">D</text>

        {/* Step 1+: Folded parts */}
        <AnimatePresence>
          {step >= 1 && (
            <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
              <motion.line x1={A.x} y1={A.y} x2={D_prime.x} y2={D_prime.y} stroke="#ef4444" strokeWidth="2" strokeDasharray="5,5" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.8 }} />
              <motion.line x1={C.x} y1={C.y} x2={D_prime.x} y2={D_prime.y} stroke="#ef4444" strokeWidth="2" strokeDasharray="5,5" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.8 }} />
              <text x={D_prime.x + 10} y={D_prime.y + 20} className="font-serif italic text-xl fill-red-600">D'</text>
              <text x={E.x - 15} y={E.y - 15} className="font-serif italic text-xl fill-red-600">E</text>

              {/* Angle DAC and D'AC */}
              <path d={describeArc(A.x, A.y, 40, 0, 39.2)} fill="none" stroke="#10b981" strokeWidth="2" />
              <path d={describeArc(A.x, A.y, 45, 39.2, 78.6)} fill="none" stroke="#10b981" strokeWidth="2" />
              {/* Angle BCA */}
              <path d={describeArc(C.x, C.y, 40, 180, 219.2)} fill="none" stroke="#10b981" strokeWidth="2" />
            </motion.g>
          )}
        </AnimatePresence>

        {/* Step 2: Isosceles Triangle AEC highlight */}
        <AnimatePresence>
          {step === 2 && (
            <motion.polygon points={`${A.x},${A.y} ${E.x},${E.y} ${C.x},${C.y}`} fill="rgba(59, 130, 246, 0.15)" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} />
          )}
        </AnimatePresence>

        {/* Step 3: Angle BAE */}
        <AnimatePresence>
          {step >= 3 && (
            <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
              <path d={describeArc(A.x, A.y, 50, 78.6, 114)} fill="none" stroke="#f59e0b" strokeWidth="2" />
              <text x={A.x - 15} y={A.y + 55} className="font-serif italic text-base fill-amber-600">α</text>
              <text x={A.x + 25} y={A.y + 45} className="font-serif italic text-base fill-emerald-600">α</text>
              <text x={C.x - 45} y={C.y - 10} className="font-serif italic text-base fill-emerald-600">α</text>
            </motion.g>
          )}
        </AnimatePresence>

        {/* Step 4: Similar Triangles ABE and CBA */}
        <AnimatePresence>
          {step === 4 && (
            <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
              <polygon points={`${A.x},${A.y} ${B.x},${B.y} ${E.x},${E.y}`} fill="rgba(239, 68, 68, 0.15)" />
              <polygon points={`${C.x},${C.y} ${B.x},${B.y} ${A.x},${A.y}`} fill="rgba(16, 185, 129, 0.1)" />
            </motion.g>
          )}
        </AnimatePresence>

        {/* Step 5: Lengths */}
        <AnimatePresence>
          {step === 5 && (
            <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
              <text x={100} y={180} className="font-sans font-bold text-blue-600 text-lg">4</text>
              <text x={230} y={305} className="font-sans font-bold text-blue-600 text-lg">6</text>
              <text x={130} y={305} className="font-sans font-bold text-red-600 text-lg">?</text>
            </motion.g>
          )}
        </AnimatePresence>

      </svg>
    </div>
  );
}

import { Lightbulb, FoldHorizontal, Triangle, PencilRuler, Scaling, Calculator } from 'lucide-react';

export const steps = [
  {
    id: 0,
    title: "第一步：解题思路",
    icon: Lightbulb,
    desc: "寻找折叠中的不变量与角度转移",
    detail: "遇到折叠问题，核心是寻找“全等”与“角度转移”。本题通过折叠前后的角度相等，结合平行线的内错角，发现等腰三角形和相似三角形模型。",
    tts: "同学们好！遇到这种折叠问题，我们要牢记核心技巧：寻找折叠前后的相等角，再结合平行线的内错角，往往能构造出等腰三角形或相似三角形。我们一起来看看这道题。"
  },
  {
    id: 1,
    title: "第二步：折叠与平行",
    icon: FoldHorizontal,
    desc: "利用折叠和平行线找相等角",
    detail: "∵ △ADC ≅ △AD'C (折叠)\n∴ ∠D'AC = ∠DAC\n又∵ AD ∥ BC\n∴ ∠DAC = ∠BCA\n∴ ∠D'AC = ∠BCA",
    tts: "首先，根据折叠的性质，角 D' A C 等于角 D A C。同时，因为 A D 平行于 B C，内错角 D A C 和 B C A 是相等的。所以，角 D' A C 就等于角 B C A。"
  },
  {
    id: 2,
    title: "第三步：发现等腰三角形",
    icon: Triangle,
    desc: "证明 △AEC 是等腰三角形",
    detail: "在 △AEC 中，\n∵ ∠EAC = ∠D'AC = ∠BCA = ∠ECA\n∴ △AEC 是等腰三角形\n∴ AE = CE",
    tts: "观察三角形 A E C，既然角 E A C 等于角 E C A，那么它就是一个等腰三角形。也就是说，线段 A E 等于线段 C E。"
  },
  {
    id: 3,
    title: "第四步：推导关键角",
    icon: PencilRuler,
    desc: "利用已知条件 ∠BAC = 2∠DAC 推导",
    detail: "设 ∠DAC = α，则 ∠D'AC = α，∠BCA = α\n已知 ∠BAC = 2∠DAC = 2α\n∴ ∠BAE = ∠BAC - ∠D'AC = 2α - α = α\n∴ ∠BAE = ∠BCA = α",
    tts: "题目告诉我们，角 B A C 是角 D A C 的两倍。如果我们设角 D A C 为阿尔法，那么角 B A C 就是二阿尔法。减去中间的阿尔法，剩下的角 B A E 也是阿尔法。这样我们就发现，角 B A E 和角 B C A 是相等的！"
  },
  {
    id: 4,
    title: "第五步：相似三角形模型",
    icon: Scaling,
    desc: "证明 △ABE ∽ △CBA",
    detail: "在 △ABE 和 △CBA 中：\n1. ∠B = ∠B (公共角)\n2. ∠BAE = ∠BCA = α\n∴ △ABE ∽ △CBA",
    tts: "接下来是见证奇迹的时刻！请看三角形 A B E 和大三角形 C B A。它们有一个公共角 B，而且刚才我们证明了角 B A E 等于角 B C A。有两个角对应相等，所以这两个三角形是相似的。"
  },
  {
    id: 5,
    title: "第六步：利用比例求解",
    icon: Calculator,
    desc: "列出相似比，求出 BE",
    detail: "∵ △ABE ∽ △CBA\n∴ AB / CB = BE / AB\n代入已知数据 AB=4, BC=6：\n4 / 6 = BE / 4\n解得：BE = 16 / 6 = 8/3",
    tts: "最后，根据相似三角形对应边成比例，A B 比上 C B，等于 B E 比上 A B。把 A B 等于 4，B C 等于 6 代入进去，很容易就能算出来，B E 的长度等于三分之八。这道题我们就解完啦！"
  }
];

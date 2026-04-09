import { Lightbulb, FoldHorizontal, Triangle, PencilRuler, Scaling, Calculator } from 'lucide-react';

export const steps = [
  {
    id: 0,
    title: "第一步：解题思路总览",
    icon: Lightbulb,
    desc: "寻找折叠中的不变量与角度转移",
    detail: "遇到折叠问题，核心是寻找“全等”与“角度转移”。\n本题通过折叠前后的角度相等，结合平行线的内错角，去拆解复杂的倍角关系，最终锁定相似三角形模型。",
    tts: "同学们好！我是Tina老师。今天咱们来攻克平行四边形的折叠难题。遇到折叠，脑子里要立刻蹦出两个词：‘重合’和‘相等’。咱们的任务就是把那些‘躲起来’的相等角找出来，通过平行线的内错角进行大搬家，最后锁定相似三角形，一举破题！"
  },
  {
    id: 1,
    title: "第二步：利用折叠‘复刻’角度",
    icon: FoldHorizontal,
    desc: "寻找翻折前后的重合角",
    detail: "根据折叠性质：\n△ADC ≅ △AD'C\n∴ ∠D'AC = ∠DAC (重合角相等)\n再由平行线性质 AD ∥ BC：\n∴ ∠DAC = ∠BCA (内错角相等)\n得到关键传递：∠D'AC = ∠BCA",
    tts: "首先看折叠部分，三角形ADC翻折到了AD撇C的位置。因为是复刻过来的，所以角D撇AC和角DAC完全相等。再利用平行四边形上下边平行的属性，内错角DAC和BCA也相等。瞧，咱们成功把角度从上面‘搬’到了底边，发现角D撇AC和角BCA是一对隐藏的相等角！"
  },
  {
    id: 2,
    title: "第三步：锁定等腰三角形",
    icon: Triangle,
    desc: "利用底角相等证明 AE = CE",
    detail: "在 △AEC 中：\n∵ ∠EAC (即∠D'AC) = ∠ECA (即∠BCA)\n∴ △AEC 是等腰三角形\n∴ AE = CE\n这一步实现了长度从 A 边向 C 边的转化。",
    tts: "观察中间这个三角形AEC，咱们刚刚证出了它的两个底角相等。这就说明AEC是个等腰三角形！所以线段AE就等于CE。这步非常关键，它帮咱们完成了长度的跨时空转移，为后面的相似比做好了铺垫。"
  },
  {
    id: 3,
    title: "第四步：倍角关系的拆解",
    icon: PencilRuler,
    desc: "利用 ∠BAC = 2∠DAC 进行推理",
    detail: "设 ∠DAC = α，则 ∠D'AC = α，∠BCA = α\n已知 ∠BAC = 2α\n∴ ∠BAE = ∠BAC - ∠D'AC = 2α - α = α\n结论：∠BAE = ∠BCA = α",
    tts: "题目给了一个很馋人的条件：角BAC是角DAC的两倍。咱们玩个代数小魔术，设角DAC为阿尔法，那么大角BAC就是二阿尔法。减去中间那个翻折过来的阿尔法，剩下的角BAE竟然也是阿尔法！看，角BAE和刚才底部的角BCA竟然重合了，都是阿尔法！"
  },
  {
    id: 4,
    title: "第五步：见证相似三角形",
    icon: Scaling,
    desc: "证明 △ABE ∽ △CBA",
    detail: "在 △ABE 和 △CBA 中：\n1. ∠B = ∠B (公共角)\n2. ∠BAE = ∠BCA = α (已证)\n∴ △ABE ∽ △CBA (AA相似判定)",
    tts: "接下来是见证奇迹的时刻！请盯着三角形ABE和大三角形CBA看。它们共享一个角B，而且咱们刚才费劲巴力证出的那对‘阿尔法’角，正好是它们的对应角。两个角相等，判定相似！这下子，复杂的线段关系就变成了简单的比例式了。"
  },
  {
    id: 5,
    title: "第六步：比例计算，收网！",
    icon: Calculator,
    desc: "列出比例式求出 BE 长度",
    detail: "∵ △ABE ∽ △CBA\n∴ AB / CB = BE / AB\n代入：4 / 6 = BE / 4\n6 × BE = 16\nBE = 16 / 6 = 8/3",
    tts: "最后收网！利用相似三角形对应边成比例，小AB比大CB，等于小BE比大AB。代入数据：4比6等于BE比4。交叉相乘一算，BE等于三分之八！这道题通过折叠变等腰、倍角变相似，咱们完美通关！Tina老师给坚持到最后的你点个大大的赞！"
  }
];

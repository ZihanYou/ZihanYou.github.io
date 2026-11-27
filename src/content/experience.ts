import "server-only";
import type { ExperienceItem } from "./types";

export const experience: ExperienceItem[] = [
  {
    id: "li-auto",
    organization: "Li Auto",
    role: "Research Intern",
    group: "Foundation Model Team",
    dates: "Jun. 2026 – Nov. 2026",
    bullets: [
      "Contributed to research on next-generation L4 autonomous driving foundation models, investigating how scaling gains in language modeling can transfer to action generation and improve generalization in long-tail scenarios.",
      "Developed multi-source driving reasoning-data construction and quality-control pipelines, including scene fact extraction, language and action supervision generation, rule-based validation, temporal consistency checking, and secondary review.",
      "Investigated adaptive thinking and fast–slow vision-language-action architectures, reasoning-context management, instruction decomposition, task-progress supervision, and coordination between reasoning and action generation.",
      "Explored how high-quality multimodal supervision, language reasoning, and action learning can support more reliable decision-making in driving foundation models.",
    ],
    visibility: "public",
  },
  {
    id: "tsinghua-air",
    organization: "Tsinghua University",
    role: "Research Intern",
    group: "Institute for AI Industry Research (AIR)",
    dates: "Jun. 2025 – May 2026",
    mentor: {
      prefix: "Research mentor:",
      name: "Prof. Yan Wang",
      href: "https://yanwang202199.github.io/",
      suffix:
        ", Assistant Professor at the Institute for AI Industry Research (AIR), Tsinghua University.",
    },
    bullets: [
      "Conducted research on autonomous driving foundation models, multimodal architectures, vision-language-action models, structured scene representations, and world models.",
      "Proposed SAMoE-VLA and contributed to research on SparseOccVLA and related multimodal driving architectures.",
      "Led Language2Drive, coordinating academic and industrial collaborators and directing benchmark protocol design, simulator development, evaluation, and the open-source release.",
      "Explored procedural memory, reusable skill learning, self-evolution, and evaluation for spatial agents.",
    ],
    visibility: "public",
  },
  {
    id: "caic",
    organization: "China Automotive Innovation Corporation (CAIC)",
    role: "Algorithm Intern",
    group: "Intelligent Driving Department",
    dates: "Jun. 2024 – Sep. 2024",
    bullets: [
      "Investigated end-to-end autonomous driving and BEV-based perception algorithms.",
      "Developed and evaluated 3D object detection and lane perception methods.",
      "Contributed to dataset cleaning, annotation quality control, and visualization tools.",
      "Applied deep learning and software engineering techniques to practical autonomous driving development.",
    ],
    visibility: "public",
  },
  {
    id: "seu-3se",
    organization: "SEU 3SE Robotics Team",
    role: "Hardware Developer",
    group: "RoboMaster",
    dates: "Oct. 2023 – Jun. 2024; Nov. 2024 – Apr. 2025",
    bullets: [
      "Developed electronic circuits, PCB layouts, power-management systems, and embedded hardware for robotic platforms.",
      "Designed passive supercapacitor balancing circuits and a two-switch buck–boost power supply.",
      "Participated in mechanical design, mobile robot development, motion control, and hardware–software integration.",
      "Conducted engineering requirements analysis, system debugging, and functional validation.",
    ],
    achievement: "National Second Prize, RoboMaster University Championship (Team Award).",
    visibility: "public",
  },
];

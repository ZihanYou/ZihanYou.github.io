import "server-only";
import type { ResearchProject } from "./types";

export const projects: ResearchProject[] = [
  {
    id: "language2drive",
    publicationId: "language2drive",
    title:
      "Language2Drive: Do Vision-Language-Action Models Really Follow the Instructions in Autonomous Driving?",
    roleBadges: ["First Author", "Project Lead"],
    statusLabel: "Released benchmark · arXiv preprint",
    paragraphs: [
      "Same start, two instructions. Across six main CARLA systems, 93.2% of successful single-instruction runs have no successful run for the other feasible instruction.",
    ],
    highlights: [
      "64 PCUs, 384 rollouts per system",
      "6 maps, 4 instruction scopes",
      "Closed loop and open loop",
      "19 institutions",
    ],
    topics: ["agentic-ai", "embodied-ai"],
    image: {
      src: "/images/teasers/language2drive.webp",
      alt: "Language2Drive overview of matched counterfactual instructions, four instruction scopes, and separate language-control and driving-quality measurements.",
      width: 1600,
      height: 849,
    },
    footnote:
      "93.2% counts successful one-sided runs, not an overall failure rate. The reported comparison is 64 PCUs. Code and current benchmark assets are public; the versioned dataset and checkpoints are not released yet.",
    emphasis: "primary",
    visibility: "public",
  },
  {
    id: "knowledge-externalization",
    publicationId: "knowledge-externalization",
    title:
      "Knowledge Externalization: Reversible Unlearning and Modular Retrieval in Multimodal Large Language Models",
    roleBadges: ["Co-First Author"],
    statusLabel: "ICLR 2026",
    paragraphs: [
      "Takes a chosen fact out of the model weights and stores it in memory tokens, so the model can forget it and have it put back.",
    ],
    highlights: ["Memory tokens", "Dual-Stream fine-tuning", "Gradient interference", "MEXBench"],
    topics: ["foundation-models"],
    image: {
      src: "/images/teasers/knowledge-externalization.webp",
      alt: "Framework figure from Knowledge Externalization.",
      width: 1600,
      height: 906,
    },
    emphasis: "primary",
    visibility: "public",
  },
  {
    id: "agents-last-exam",
    title: "Agents' Last Exam: A Benchmark for Real-World Product Creation",
    subtitle: "Also called the Idea2Product Benchmark.",
    roleBadges: ["Initiator", "Project Lead", "Ongoing Research"],
    statusLabel: "Ongoing research",
    paragraphs: [
      "An agent receives a product requirement and has to deliver a physical object that someone else can test.",
    ],
    highlights: ["24 blueprints", "48 tasks", "6 engineering domains", "Not released"],
    topics: ["agentic-ai", "embodied-ai"],
    workflow: [
      "Human Requirements",
      "Agent Planning and Tool Use",
      "CAD / EDA / Embedded Development",
      "Fabrication and Integration",
      "Independent Physical Verification",
    ],
    footnote: "Still being designed. No paper, code, dataset, or results yet.",
    emphasis: "primary",
    visibility: "public",
  },
  {
    id: "samoe-vla",
    publicationId: "samoe-vla",
    title:
      "SAMoE-VLA: A Scene Adaptive Mixture-of-Experts Vision-Language-Action Model for Autonomous Driving",
    roleBadges: ["First Author"],
    statusLabel: "arXiv preprint",
    paragraphs: [
      "Picks driving experts from the bird’s-eye view of the scene, then blends their parameters into one continuous action.",
    ],
    highlights: ["Scene-level experts", "BEV routing", "Parameter-space fusion"],
    topics: ["foundation-models", "embodied-ai"],
    image: {
      src: "/images/teasers/samoe-vla.webp",
      alt: "Framework figure from the SAMoE-VLA paper.",
      width: 1600,
      height: 1254,
    },
    footnote: "The repository has the overview and figures, not a training release.",
    emphasis: "secondary",
    visibility: "public",
  },
  {
    id: "spatial-agent-learning",
    title: "Spatial Agent Learning",
    roleBadges: ["First Author", "Ongoing Research"],
    statusLabel: "Ongoing research",
    paragraphs: [
      "A skill has three editable parts: when to use it, what it does, and which skill runs first. Keeping learned skills raises direct task success from 21.00% to 53.33%.",
    ],
    highlights: ["21.00% to 53.33% success", "68.92% vs 44.59% component ID", "When, what, which first"],
    topics: ["agentic-ai", "embodied-ai"],
    image: {
      src: "/images/teasers/spatial-agent-learning.webp",
      alt: "Diagram of experience-driven spatial skill learning: a spatial agent builds a skill library, program interventions edit a skill, and diagnosis compares retention, component attribution, and execution order.",
      width: 1800,
      height: 1202,
    },
    emphasis: "secondary",
    visibility: "public",
  },
  {
    id: "dual-priv",
    publicationId: "dual-priv",
    title:
      "Dual-Priv Pruning : Efficient Differential Private Fine-Tuning in Multimodal Large Language Models",
    roleBadges: ["Co-First Author"],
    statusLabel: "arXiv preprint",
    paragraphs: [
      "Drops spare visual tokens and spare gradient updates so private fine-tuning of a multimodal model uses less compute and loses less accuracy.",
    ],
    highlights: ["Visual token pruning", "Gradient pruning", "LoRA", "Rényi accounting"],
    topics: ["foundation-models"],
    image: {
      src: "/images/teasers/dual-priv.webp",
      alt: "Figure from the Dual-Priv Pruning paper.",
      width: 1600,
      height: 1282,
    },
    emphasis: "secondary",
    visibility: "public",
  },
  {
    id: "world4scorer",
    publicationId: "world4scorer",
    title: "World4Scorer: Outcome-Grounded World Modeling for Autonomous Driving",
    roleBadges: ["Co-Author"],
    statusLabel: "arXiv preprint",
    paragraphs: [
      "One predictor scores every candidate plan, including plans the car never drove. The logged future is used only while training.",
    ],
    highlights: ["Score from a predicted state", "Labels for undriven plans", "Inertial re-ranking"],
    topics: ["foundation-models", "embodied-ai"],
    image: {
      src: "/images/teasers/world4scorer.webp",
      alt: "World4Scorer figure comparing outcome labels, a future-prediction world model, and outcome-grounded scoring of every candidate plan.",
      width: 1313,
      height: 569,
    },
    emphasis: "secondary",
    visibility: "public",
  },
  {
    id: "mobilewam",
    publicationId: "mobilewam",
    title: "MobileWAM: Bridging World Action Models to Mobile Manipulation with Chain-of-Foresight",
    roleBadges: ["Co-Author"],
    statusLabel: "arXiv preprint",
    paragraphs: [
      "A video model moves a robot’s base and arm together. Locomotion and manipulation use separate experts. Reported mean success on ManiSkill-HAB is 73.0%.",
    ],
    highlights: ["Base and arm together", "73.0% ManiSkill-HAB", "ARX Lift2", "Code not released"],
    topics: ["foundation-models", "embodied-ai"],
    image: {
      src: "/images/teasers/mobilewam.webp",
      alt: "MobileWAM overview of real-robot tasks, the mixture-of-transformers model, Chain-of-Foresight, and reported benchmark results.",
      width: 1181,
      height: 733,
    },
    emphasis: "secondary",
    visibility: "public",
  },
];

import "server-only";
import type { Direction } from "./types";

export const directions: Direction[] = [
  {
    id: "foundation-models",
    title: "Foundation Models",
    card: "Post-training, knowledge and memory, architectures, and privacy-preserving adaptation for multimodal models.",
    body: "I study post-training, knowledge management, model architectures, privacy-preserving adaptation, and generalization in multimodal large language models. My work includes reversible knowledge externalization, modular memory, gradient interference mitigation, and efficient fine-tuning.",
    tags: [
      "Multimodal Large Language Models",
      "Post-Training and Model Adaptation",
      "Knowledge Management and Model Memory",
      "Mixture-of-Experts",
      "Model Generalization",
      "Trustworthy and Privacy-Preserving AI",
    ],
  },
  {
    id: "agentic-ai",
    title: "Agentic AI",
    card: "Benchmarks and evaluation for agents that use tools, learn skills, and reason over long horizons.",
    body: "I investigate how intelligent agents reason, acquire reusable skills, interact with tools, and improve through experience. I am particularly interested in developing rigorous benchmarks and evaluation frameworks that reveal the true capabilities and limitations of foundation-model agents beyond conventional task success metrics.",
    tags: [
      "Agent Benchmarking and Evaluation",
      "Agent Harness and Tool Use",
      "Long-Horizon Reasoning",
      "Procedural Memory and Skill Learning",
      "Agent Self-Evolution",
      "Program-Level Diagnosis",
    ],
  },
  {
    id: "embodied-ai",
    title: "Embodied AI",
    card: "Vision-language-action models, spatial reasoning, and closed-loop decisions. Autonomous driving is one testbed.",
    body: "I explore vision-language-action models, spatial reasoning, language-action alignment, world models, and closed-loop decision-making. Autonomous driving serves as an important testbed for studying generalization, reliable instruction following, and the interaction between perception, reasoning, and action.",
    tags: [
      "Vision-Language-Action Models",
      "Language-Action Alignment",
      "Spatial Intelligence",
      "World Models",
      "Autonomous Driving",
      "Robotics and Physical-World Interaction",
    ],
  },
];

import "server-only";
import type { SkillGroup } from "./types";

export const skills: SkillGroup[] = [
  {
    title: "Programming",
    items: ["Python", "C++", "C", "Bash", "MATLAB", "LaTeX"],
  },
  {
    title: "Foundation Models and Machine Learning",
    items: [
      "PyTorch",
      "Transformers",
      "DeepSpeed",
      "PEFT / LoRA",
      "vLLM",
      "MMDetection",
      "MMDetection3D",
    ],
  },
  {
    title: "Research Methods",
    items: [
      "Multimodal Post-Training",
      "Model Fine-Tuning",
      "Benchmark Design",
      "Agent Evaluation",
      "Differential Privacy",
      "Mixture-of-Experts",
      "Industrial Data Curation",
    ],
  },
  {
    title: "Software and Infrastructure",
    items: ["Linux", "Docker", "Git", "AI-Assisted Development"],
  },
  {
    title: "Robotics and Simulation",
    items: ["ROS", "ROS 2", "CARLA", "AlpaSim", "MuJoCo", "Isaac Sim"],
  },
  {
    title: "Engineering",
    items: [
      "EasyEDA",
      "PCB Design",
      "Electronic Circuit Design",
      "SOLIDWORKS",
      "Embedded Development",
      "Mechanical Design",
      "System Integration",
    ],
  },
];

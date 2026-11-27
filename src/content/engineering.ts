import "server-only";
import type { EngineeringGroup } from "./types";

export const engineeringIntro = [
  "The same hardware work is part of why I study agents that have to produce physical artifacts. Agents' Last Exam asks whether a foundation-model agent can carry a natural-language requirement through design tools, fabrication, integration, and an independent physical check.",
  "The benchmark is still being designed. Nothing on this page is a result from a completed large-scale physical evaluation, and there is no public task set or leaderboard yet.",
];

export const engineeringGroups: EngineeringGroup[] = [
  {
    id: "electronics",
    title: "Electronics and PCB",
    intro:
      "Circuit and board-level work from RoboMaster and related hardware projects, including power management and embedded integration.",
    items: [
      {
        title: "Passive supercapacitor balancing board",
        text: "Designed a passive balancing board for series supercapacitors used in the robot power system.",
      },
      {
        title: "Two-switch buck–boost power supply",
        text: "Designed the circuit and PCB for a two-switch buck–boost supply for the robot platform.",
      },
      {
        title: "Rechargeable handheld armor plate",
        text: "Built a rechargeable handheld armor plate, including the circuit, PCB, and embedded integration.",
      },
    ],
  },
  {
    id: "mechanical",
    title: "Mechanical Design",
    intro:
      "Structural design in SOLIDWORKS, including mobile-robot mechanics and a harvesting machine, with the mechanical and electrical design done together.",
    items: [
      {
        title: "Mobile robot mechanical systems",
        text: "Designed mechanical structures for mobile robots and fit them to the electronics and the rest of the assembly.",
      },
      {
        title: "Chinese-chive harvesting and bundling machine",
        text: "Worked on an integrated machine that harvests and bundles Chinese chives, covering the mechanical structure and the electrical co-design.",
      },
    ],
  },
  {
    id: "robotics",
    title: "Robotics",
    intro:
      "Competition robots, from motion control and system integration through debugging and functional checks. ROS and ROS 2 are part of this workflow.",
    items: [
      {
        title: "RoboMaster development",
        text: "Worked on motion control, hardware–software integration, system debugging, and functional validation for RoboMaster robots.",
      },
      {
        title: "Robot software and simulation",
        text: "Use ROS and ROS 2 with the embedded platforms, and use simulation when checking behavior before running it on the robot.",
      },
    ],
  },
  {
    id: "simulation",
    title: "Simulation and Physical AI",
    intro:
      "Simulators used in the driving research, plus hardware-in-the-loop evaluation as an ongoing direction of Agents' Last Exam.",
    items: [
      {
        title: "CARLA and AlpaSim",
        text: "Language2Drive's closed-loop tracks run in CARLA, including six purpose-built maps, and in reconstructed scenes through AlpaSim.",
      },
      {
        title: "MuJoCo and Isaac Sim",
        text: "MuJoCo and Isaac Sim are part of the simulation toolkit I use for robot and embodied-AI experiments.",
      },
      {
        title: "Hardware-in-the-loop evaluation",
        text: "Hardware-in-the-loop testing is part of the ongoing Agents' Last Exam benchmark design. It is not a completed evaluation campaign.",
      },
    ],
  },
];

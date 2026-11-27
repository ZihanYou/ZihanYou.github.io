import "server-only";
import type { Education, NavItem, Profile, SocialLink } from "./types";

export const profile: Profile = {
  name: "Zihan You",
  nameZh: "尤子涵",
  title: "Senior Undergraduate Researcher",
  affiliation: "School of Instrument Science and Engineering, Southeast University",
  degree: "B.Eng. in Intelligent Sensing Engineering",
  graduation: "Expected graduation: June 2027",
  tagline: "Multimodal Foundation Models | Agentic AI | Embodied Intelligence",
  vision:
    "Building generalizable AI systems that reason, learn, and act in the physical world.",
  hero: "I am a senior undergraduate researcher at Southeast University, working on multimodal foundation models, agentic AI, and embodied intelligence. My research focuses on how AI systems acquire, organize, and generalize knowledge, reason over complex environments, and translate reasoning into reliable real-world actions.",
  aboutLead: [
    "I am a senior undergraduate student at the School of Instrument Science and Engineering, Southeast University, pursuing a B.Eng. in Intelligent Sensing Engineering. My research lies at the intersection of multimodal foundation models, agentic AI, and embodied intelligence.",
    "I am particularly interested in building generalizable AI systems that can acquire and manage knowledge, perform long-horizon reasoning, interact with complex environments, and translate high-level intentions into reliable actions.",
  ],
  aboutDirections: [
    {
      title: "Multimodal Foundation Models.",
      text: "I study post-training, knowledge management, model architectures, privacy-preserving adaptation, and generalization in multimodal large language models. My work includes reversible knowledge externalization, modular memory, gradient interference mitigation, and efficient fine-tuning.",
    },
    {
      title: "Agentic AI and Evaluation.",
      text: "I investigate how intelligent agents reason, acquire reusable skills, interact with tools, and improve through experience. I am particularly interested in developing rigorous benchmarks and evaluation frameworks that reveal the true capabilities and limitations of foundation-model agents beyond conventional task success metrics.",
    },
    {
      title: "Embodied Intelligence.",
      text: "I explore vision-language-action models, spatial reasoning, language-action alignment, world models, and closed-loop decision-making. Autonomous driving serves as an important testbed for studying generalization, reliable instruction following, and the interaction between perception, reasoning, and action.",
    },
  ],
  aboutClose: [
    "Previously, I conducted research at the Foundation Model Team of Li Auto, the Institute for AI Industry Research (AIR) at Tsinghua University, and China Automotive Innovation Corporation (CAIC). These experiences have allowed me to work across academic research, industrial-scale data curation, multimodal model development, and real-world engineering systems.",
    "Beyond AI research, I have hands-on experience in robotics, electronic circuit and PCB design, mechanical engineering, embedded development, simulation, and system integration. I aim to bridge foundation-model intelligence with the physical world through both rigorous research and practical engineering.",
    "My long-term goal is to develop intelligent systems that can autonomously understand, reason about, interact with, and create within the physical world.",
  ],
  email: "zihanyou@seu.edu.cn",
  avatar: "/bio.jpg",
  siteUrl: "https://zihanyou.github.io",
  lastUpdated: "November 2026",
  cvPdf: "/Zihan_You_Academic_CV.pdf",
};

export const education: Education = {
  school: "Southeast University",
  schoolUrl: "https://www.seu.edu.cn/",
  department: "School of Instrument Science and Engineering",
  degree: "B.Eng. in Intelligent Sensing Engineering",
  graduation: "Expected graduation: June 2027",
};

export const navigation: NavItem[] = [
  { href: "/", label: "Home" },
  { href: "/research/", label: "Research" },
  { href: "/publications/", label: "Publications" },
  { href: "/experience/", label: "Experience" },
  { href: "/engineering/", label: "Engineering" },
  { href: "/awards/", label: "Awards" },
  { href: "/cv/", label: "CV" },
];

export const socialLinks: SocialLink[] = [
  { label: "Email", href: "mailto:zihanyou@seu.edu.cn" },
  {
    label: "Google Scholar",
    href: "https://scholar.google.com/citations?user=LnvFQJUAAAAJ&hl=en",
    external: true,
  },
  { label: "GitHub", href: "https://github.com/ZihanYou", external: true },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/zihan-you-3a03302a4/",
    external: true,
  },
  { label: "Academic CV", href: profile.cvPdf },
];

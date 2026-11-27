import "server-only";
import type { NewsItem } from "./types";

export const news: NewsItem[] = [
  {
    id: "li-auto-end",
    date: "Nov. 2026",
    sort: "2026-11",
    text: "Completed my research internship with the Foundation Model Team at Li Auto, working on driving foundation models, industrial data curation, and adaptive reasoning.",
    visibility: "public",
  },
  {
    id: "language2drive-release",
    date: "Oct. 2026",
    sort: "2026-10",
    text: "Released Language2Drive, a benchmark for evaluating whether driving vision-language-action models follow natural-language instructions. The paper, code, project page, and current benchmark assets are public. The official versioned dataset, model, and checkpoint release is still in progress.",
    visibility: "public",
  },
  {
    id: "world4scorer",
    date: "Sep. 2026",
    sort: "2026-09",
    text: "World4Scorer, on outcome-grounded world modeling for autonomous driving, was released as a preprint. I am a co-author.",
    visibility: "public",
  },
  {
    id: "mobilewam",
    date: "Aug. 2026",
    sort: "2026-08-06",
    text: "MobileWAM, on world-action models for mobile manipulation, was released as a preprint. I am a co-author. Code has not been released.",
    visibility: "public",
  },
  {
    id: "icpr-2026",
    date: "Aug. 2026",
    sort: "2026-08",
    text: "MambaBEV and Hybrid Guided Variational Autoencoder for Visual Place Recognition were published in the ICPR 2026 proceedings (Lecture Notes in Computer Science, 3 August 2026).",
    visibility: "public",
  },
  {
    id: "li-auto-start",
    date: "Jun. 2026",
    sort: "2026-06",
    text: "Joined the Foundation Model Team at Li Auto as a research intern.",
    visibility: "public",
  },
  {
    id: "ke-code",
    date: "Mar. 2026",
    sort: "2026-03-14",
    text: "Released the official training code for Knowledge Externalization.",
    visibility: "public",
  },
  {
    id: "samoe-preprint",
    date: "Mar. 2026",
    sort: "2026-03-09",
    text: "Released the SAMoE-VLA preprint.",
    visibility: "public",
  },
  {
    id: "ke-iclr",
    date: "Jan. 2026",
    sort: "2026-01",
    text: "Knowledge Externalization was accepted as an ICLR 2026 poster.",
    visibility: "public",
  },
  {
    id: "dual-priv-preprint",
    date: "Jun. 2025",
    sort: "2025-06-08",
    text: "Released the Dual-Priv Pruning preprint on differentially private fine-tuning for multimodal large language models.",
    visibility: "public",
  },
  {
    id: "air-start",
    date: "Jun. 2025",
    sort: "2025-06",
    text: "Started a research internship at the Institute for AI Industry Research (AIR), Tsinghua University.",
    visibility: "public",
  },
  {
    id: "mambabev-preprint",
    date: "Oct. 2024",
    sort: "2024-10",
    text: "Posted the MambaBEV preprint on BEV-based 3D detection with Mamba2.",
    visibility: "public",
  },
];

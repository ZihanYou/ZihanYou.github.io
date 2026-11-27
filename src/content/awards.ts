import "server-only";
import type { Award } from "./types";

/**
 * The 27th edition of the national CRAIC prize is taken from the previously
 * published CV. The provincial first prize is included from the current
 * résumé notes and is not given an edition number here.
 * "China Robot and Artificial Intelligence Competition" is the competition's
 * English name. Only the RoboMaster entry is marked as a team award.
 */
export const awards: Award[] = [
  {
    id: "craic-national",
    title: "National First Prize",
    detail: "27th China Robot and Artificial Intelligence Competition",
    visibility: "public",
  },
  {
    id: "craic-jiangsu",
    title: "Jiangsu Provincial First Prize",
    detail: "China Robot and Artificial Intelligence Competition",
    visibility: "public",
  },
  {
    id: "robomaster",
    title: "National Second Prize",
    detail: "RoboMaster University Championship",
    team: true,
    visibility: "public",
  },
  {
    id: "seu-paper",
    title: "Outstanding Paper Award",
    detail: "14th Southeast University Undergraduate Academic Conference",
    year: "2025",
    visibility: "public",
  },
  {
    id: "mechanical",
    title: "Second Prize",
    detail: "Jiangsu Undergraduate Mechanical Innovation Design Competition",
    visibility: "public",
  },
  {
    id: "saecce",
    title: "Outstanding Creative Work",
    detail: "31st SAE China Congress & Exhibition (SAECCE)",
    year: "2024",
    visibility: "public",
  },
];

import "server-only";
import { engineeringIntro } from "@/content/engineering";
import { validateContent } from "@/content/validate";
import type { Award, ExperienceItem, NewsItem, Publication, ResearchProject } from "@/content/types";

const content = validateContent();

function isPublicPublication(publication: Publication) {
  return publication.publicVisibility === "public" && publication.status !== "private";
}

export const profile = content.profile;
export const education = content.education;
export const navigation = content.navigation;
export const socialLinks = content.socialLinks;
export const directions = content.directions;
export const engineeringGroups = content.engineeringGroups;
export const engineeringIntroduction = engineeringIntro;
export const skills = content.skills;

export const publications: Publication[] = content.publications.filter(isPublicPublication);
export const projects: ResearchProject[] = content.projects.filter(
  (project) => project.visibility === "public",
);
export const experience: ExperienceItem[] = content.experience.filter(
  (item) => item.visibility === "public",
);
export const news: NewsItem[] = content.news.filter((item) => item.visibility === "public");
export const awards: Award[] = content.awards.filter((item) => item.visibility === "public");

if (publications.some((publication) => publication.id === "private-canary")) {
  throw new Error("Private publication leaked into the public publication list");
}
if (JSON.stringify(publications).includes("PRIVATE_CANARY")) {
  throw new Error("Private canary leaked into the public publication list");
}

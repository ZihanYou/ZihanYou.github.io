import type { Publication, ResearchProject, ResourceLink, TopicId } from "@/content/types";

export const topicLabel: Record<TopicId, string> = {
  "foundation-models": "Foundation Models",
  "agentic-ai": "Agentic AI",
  "embodied-ai": "Embodied AI",
};

const authorRoleLabel: Record<Publication["authorRole"], string> = {
  first: "First Author",
  "co-first": "Co-First Author",
  second: "Second Author",
  "co-author": "Co-Author",
};

export function roleLabel(role: Publication["authorRole"]) {
  return authorRoleLabel[role];
}

export function statusLabel(status: Publication["status"]) {
  if (status === "peer-reviewed") return "Peer-reviewed";
  if (status === "preprint") return "Preprint";
  if (status === "ongoing") return "Ongoing";
  return "Private";
}

export function publicationLinks(publication: Publication): ResourceLink[] {
  const links: ResourceLink[] = [];
  if (publication.paperUrl) links.push({ label: "Paper", href: publication.paperUrl });
  if (publication.codeUrl) {
    links.push({ label: publication.codeLabel ?? "Code", href: publication.codeUrl });
  }
  if (publication.projectUrl) links.push({ label: "Project", href: publication.projectUrl });
  if (publication.datasetUrl) {
    links.push({
      label: publication.datasetLabel ?? "Dataset",
      href: publication.datasetUrl,
    });
  }
  for (const link of publication.extraLinks ?? []) links.push(link);
  return links;
}

export function projectLinks(project: ResearchProject, pubs: Publication[]): ResourceLink[] {
  if (!project.publicationId) return [];
  const publication = pubs.find((item) => item.id === project.publicationId);
  return publication ? publicationLinks(publication) : [];
}

export type Visibility = "public" | "private";

export type TopicId = "foundation-models" | "agentic-ai" | "embodied-ai";

export type AuthorRole = "first" | "co-first" | "second" | "co-author";

export type PublicationStatus = "peer-reviewed" | "preprint" | "ongoing" | "private";

export interface Author {
  name: string;
  self?: boolean;
  /** Manuscript footnote marker, explained by markerLegend. */
  marker?: string;
}

export interface MarkerLegend {
  symbol: string;
  meaning: string;
}

export interface ResourceLink {
  label: string;
  href: string;
}

export interface Figure {
  src: string;
  alt: string;
  width: number;
  height: number;
}

export interface Publication {
  id: string;
  title: string;
  authors: Author[];
  markerLegend?: MarkerLegend[];
  authorRole: AuthorRole;
  projectLead?: boolean;
  year: number;
  venue: string;
  status: PublicationStatus;
  topics: TopicId[];
  summary: string;
  thumbnail?: Figure;
  paperUrl?: string;
  codeUrl?: string;
  /** Button label when codeUrl is a repository rather than a released implementation. */
  codeLabel?: string;
  projectUrl?: string;
  datasetUrl?: string;
  datasetLabel?: string;
  extraLinks?: ResourceLink[];
  bibtex: string;
  featured: boolean;
  publicVisibility: Visibility;
}

export interface ResearchProject {
  id: string;
  publicationId?: string;
  title: string;
  subtitle?: string;
  roleBadges: string[];
  statusLabel: string;
  paragraphs: string[];
  highlights: string[];
  topics: TopicId[];
  image?: Figure;
  workflow?: string[];
  footnote?: string;
  emphasis: "primary" | "secondary";
  visibility: Visibility;
}

export interface Direction {
  id: TopicId;
  title: string;
  card: string;
  body: string;
  tags: string[];
}

export interface ExperienceItem {
  id: string;
  organization: string;
  role: string;
  group: string;
  dates: string;
  bullets: string[];
  mentor?: { prefix: string; name: string; href: string; suffix: string };
  achievement?: string;
  visibility: Visibility;
}

export interface EngineeringGroup {
  id: string;
  title: string;
  intro: string;
  items: { title: string; text: string }[];
}

export interface NewsItem {
  id: string;
  date: string;
  /** ISO-like key used only to keep the list in reverse chronological order. */
  sort: string;
  text: string;
  visibility: Visibility;
}

export interface Award {
  id: string;
  title: string;
  detail: string;
  year?: string;
  team?: boolean;
  visibility: Visibility;
}

export interface SkillGroup {
  title: string;
  items: string[];
}

export interface SocialLink {
  label: string;
  href: string;
  external?: boolean;
}

export interface Profile {
  name: string;
  nameZh: string;
  title: string;
  affiliation: string;
  degree: string;
  graduation: string;
  tagline: string;
  vision: string;
  hero: string;
  aboutLead: string[];
  aboutDirections: { title: string; text: string }[];
  aboutClose: string[];
  email: string;
  avatar: string;
  siteUrl: string;
  lastUpdated: string;
  cvPdf: string;
}

export interface Education {
  school: string;
  schoolUrl: string;
  department: string;
  degree: string;
  graduation: string;
}

export interface NavItem {
  href: string;
  label: string;
}

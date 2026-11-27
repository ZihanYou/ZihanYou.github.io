import "server-only";
import fs from "node:fs";
import path from "node:path";
import { awards } from "./awards";
import { directions } from "./directions";
import { education, navigation, profile, socialLinks } from "./profile";
import { engineeringGroups } from "./engineering";
import { experience } from "./experience";
import { news } from "./news";
import { projects } from "./projects";
import { publications } from "./publications";
import { skills } from "./skills";
import type { Publication, ResearchProject, Visibility } from "./types";

const BANNED: Array<[RegExp, string]> = [
  [/third[- ]year/i, "third-year"],
  [/third grade/i, "Third Grade"],
  [/mphil/i, "MPhil"],
  [/phd position/i, "PhD positions"],
  [/under review/i, "Under Review"],
  [/\beccv\b/i, "ECCV"],
  [/\bicml\b/i, "ICML"],
  [/state-of-the-art/i, "state-of-the-art"],
  [/groundbreaking/i, "groundbreaking"],
  [/world-leading/i, "world-leading"],
  [/\bagi\b/i, "AGI"],
  [/intelligent perception of engineering/i, "retired degree name"],
  [/213223318/, "old student email"],
  [/PRIVATE_CANARY/, "private canary"],
  [/hong kong university of science/i, "unannounced graduate affiliation"],
  [/ad scaling/i, "internal project name"],
  [/2,304 closed-loop/i, "unverified run count"],
];

function assert(condition: unknown, message: string) {
  if (!condition) throw new Error(`Content validation failed: ${message}`);
}

function stringsOf(value: unknown, bucket: string[]) {
  if (typeof value === "string") bucket.push(value);
  else if (Array.isArray(value)) value.forEach((item) => stringsOf(item, bucket));
  else if (value && typeof value === "object") {
    Object.values(value).forEach((item) => stringsOf(item, bucket));
  }
}

function assertUrl(url: string | undefined, label: string) {
  if (!url) return;
  assert(
    /^(https:\/\/|mailto:|\/)/.test(url),
    `${label} must be an https, mailto, or site path: ${url}`,
  );
  assert(!/example\.com|placeholder|TODO/i.test(url), `${label} is a placeholder: ${url}`);
}

function assertPublicFile(url: string | undefined, label: string) {
  if (!url || !url.startsWith("/")) return;
  const file = path.join(process.cwd(), "public", decodeURIComponent(url));
  assert(fs.existsSync(file), `${label} is missing from public/: ${url}`);
}

function unique(ids: string[], label: string) {
  const seen = new Set<string>();
  for (const id of ids) {
    assert(!seen.has(id), `Duplicate ${label} id: ${id}`);
    seen.add(id);
  }
}

function assertPublicCopy(value: unknown, label: string) {
  const texts: string[] = [];
  stringsOf(value, texts);
  const blob = texts.join("\n");
  for (const [pattern, name] of BANNED) {
    assert(!pattern.test(blob), `${label} contains banned text (${name})`);
  }
  assert(!/(?<!\d)1[3-9]\d{9}(?!\d)/.test(blob), `${label} contains a phone-like number`);
}

export function validateContent() {
  unique(publications.map((item) => item.id), "publication");
  unique(projects.map((item) => item.id), "project");
  unique(experience.map((item) => item.id), "experience");
  unique(news.map((item) => item.id), "news");
  unique(awards.map((item) => item.id), "award");
  unique(directions.map((item) => item.id), "direction");

  const publicPublications = publications.filter(isPublicPublication);
  const publicProjects = projects.filter((item) => item.visibility === "public");

  assert(
    publications.some((item) => item.id === "private-canary" && item.publicVisibility === "private"),
    "the private canary fixture is missing",
  );
  assert(
    !publicPublications.some((item) => item.id === "private-canary"),
    "the private canary was marked public",
  );

  for (const publication of publications) {
    const privateRecord =
      publication.publicVisibility === "private" || publication.status === "private";
    assert(
      privateRecord
        ? publication.publicVisibility === "private" && publication.status === "private"
        : publication.publicVisibility === "public" && publication.status !== "private",
      `${publication.id} has inconsistent visibility`,
    );
    assert(publication.title.trim().length > 0, `${publication.id} needs a title`);
    if (publication.publicVisibility === "public") validatePublication(publication);
  }

  for (const project of publicProjects) {
    assert(project.title.trim().length > 0, `${project.id} needs a title`);
    assert(project.paragraphs.length > 0, `${project.id} needs a description`);
    if (project.publicationId) {
      const publication = publications.find((item) => item.id === project.publicationId);
      assert(publication, `${project.id} points at a missing publication`);
      assert(
        publication?.publicVisibility === "public",
        `${project.id} points at a private publication`,
      );
    }
    assertPublicFile(project.image?.src, project.id);
    assert(!project.roleBadges.some((badge) => /under review/i.test(badge)), project.id);
  }

  for (let index = 1; index < news.length; index += 1) {
    assert(
      news[index - 1].sort > news[index].sort,
      `news is not reverse chronological: ${news[index - 1].id} then ${news[index].id}`,
    );
  }

  assert(profile.email === "zihanyou@seu.edu.cn", "email changed");
  assert(profile.name === "Zihan You", "name changed");
  assert(education.graduation.includes("June 2027"), "graduation date changed");
  assert(navigation.length === 7, "navigation should list the seven public pages");
  assert(
    publicProjects.filter((item) => item.emphasis === "primary").length === 3,
    "the homepage should feature three research projects",
  );

  assertPublicCopy(
    {
      profile,
      education,
      navigation,
      socialLinks,
      directions,
      publicPublications,
      publicProjects,
      experience: experience.filter((item) => item.visibility === "public"),
      engineeringGroups,
      news: news.filter((item) => item.visibility === "public"),
      awards: awards.filter((item) => item.visibility === "public"),
      skills,
    },
    "public content",
  );

  return {
    profile,
    education,
    navigation,
    socialLinks,
    directions,
    publications,
    projects,
    experience,
    engineeringGroups,
    news,
    awards,
    skills,
  };
}

function isPublicPublication(publication: Publication) {
  return publication.publicVisibility === "public" && publication.status !== "private";
}

function validatePublication(publication: Publication) {
  assert(publication.authors.some((author) => author.self && author.name === "Zihan You"),
    `${publication.id} must identify Zihan You`,
  );
  assert(publication.summary.trim().length > 40, `${publication.id} needs a summary`);
  assert(publication.bibtex.includes("You, Zihan"), `${publication.id} BibTeX is missing Zihan You`);
  assert(!publication.featured || publication.publicVisibility === "public", publication.id);
  for (const url of [
    publication.paperUrl,
    publication.codeUrl,
    publication.projectUrl,
    publication.datasetUrl,
    ...(publication.extraLinks ?? []).map((link) => link.href),
  ]) {
    assertUrl(url, publication.id);
  }
  assertPublicFile(publication.thumbnail?.src, publication.id);
  if (publication.codeLabel === "Repository") {
    assert(
      /not a full training/i.test(publication.summary),
      `${publication.id} repository must not be described as a full implementation`,
    );
  }
}

export function publicProjectsOf(projectsToFilter: ResearchProject[], visibility: Visibility = "public") {
  return projectsToFilter.filter((project) => project.visibility === visibility);
}

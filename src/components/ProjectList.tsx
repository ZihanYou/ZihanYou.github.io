"use client";

import type { Publication, ResearchProject } from "@/content/types";
import { projectLinks } from "@/lib/format";
import Link from "next/link";
import { useState } from "react";
import { ResourceLinks } from "./ResourceLinks";

export function ProjectList({
  projects,
  publications,
}: {
  projects: ResearchProject[];
  publications: Publication[];
  variant?: "home" | "full";
}) {
  return (
    <div className="secondary-grid project-grid">
      {projects.map((project, index) => (
        <ProjectCard
          key={project.id}
          project={project}
          publications={publications}
          index={index}
        />
      ))}
    </div>
  );
}

function ProjectCard({
  project,
  publications,
  index,
}: {
  project: ResearchProject;
  publications: Publication[];
  index: number;
}) {
  const [open, setOpen] = useState(false);
  const [notice, setNotice] = useState<string | null>(null);
  const publication = publications.find((item) => item.id === project.publicationId);
  const links = projectLinks(project, publications);
  const [lead, detail] = project.paragraphs;

  async function copy(text: string, label: string) {
    try {
      await navigator.clipboard.writeText(text);
      setNotice(label);
      return;
    } catch {
      const area = document.createElement("textarea");
      area.value = text;
      area.setAttribute("readonly", "");
      area.style.position = "fixed";
      area.style.left = "-9999px";
      document.body.appendChild(area);
      area.select();
      const ok = document.execCommand("copy");
      area.remove();
      setNotice(ok ? label : "Copy failed");
    }
  }

  return (
    <article className={open ? "project is-open" : "project"} id={project.id}>
      <div className="project-figure-frame">
        {project.image ? (
          <img src={project.image.src} alt={project.image.alt} width={project.image.width} height={project.image.height} />
        ) : (
          <p className="meta">No figure released</p>
        )}
      </div>
      <div className="project-body">
        <p className="project-index">{String(index + 1).padStart(2, "0")}</p>
        <h3>
          <Link href={`/research/#${project.id}`}>{project.title}</Link>
        </h3>
        {project.subtitle ? <p className="meta">{project.subtitle}</p> : null}
        <ul className="badges">
          {project.roleBadges.map((badge) => (
            <li key={badge} className={badge === "Ongoing Research" ? "badge badge-ongoing" : "badge"}>
              {badge}
            </li>
          ))}
        </ul>
        <p className="meta">{project.statusLabel}</p>
        <p className="project-lead">{lead}</p>
        {open ? (
          <div className="project-detail">
            {detail ? <p>{detail}</p> : null}
            {project.highlights.length > 0 ? (
              <ul className="tags project-facts">
                {project.highlights.map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>
            ) : null}
            {project.workflow ? (
              <ol className="workflow">
                {project.workflow.map((step, stepIndex) => (
                  <li key={step}>
                    <span className="workflow-index">{stepIndex + 1}</span>
                    {step}
                  </li>
                ))}
              </ol>
            ) : null}
            {project.footnote ? <p className="footnote">{project.footnote}</p> : null}
          </div>
        ) : null}
        <div className="project-actions">
          <ResourceLinks links={links} />
          <button type="button" className="text-button" aria-expanded={open} onClick={() => setOpen((value) => !value)}>
            {open ? "Hide detail" : "Detail"}
          </button>
          {publication?.bibtex ? (
            <button type="button" className="text-button" onClick={() => copy(publication.bibtex, "BibTeX copied")}>
              Copy BibTeX
            </button>
          ) : null}
          <button
            type="button"
            className="text-button"
            onClick={() => copy(`https://zihanyou.github.io/research/#${project.id}`, "Link copied")}
          >
            Copy link
          </button>
          {notice ? <span className="meta">{notice}</span> : null}
        </div>
      </div>
    </article>
  );
}

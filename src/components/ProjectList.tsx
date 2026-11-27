import type { Publication, ResearchProject } from "@/content/types";
import { projectLinks } from "@/lib/format";
import Link from "next/link";
import { ResourceLinks } from "./ResourceLinks";

export function ProjectList({
  projects,
  publications,
  variant,
}: {
  projects: ResearchProject[];
  publications: Publication[];
  variant: "home" | "full";
}) {
  const primary = projects.filter((project) => project.emphasis === "primary");
  const secondary = projects.filter((project) => project.emphasis === "secondary");
  return (
    <div className="project-stack">
      {primary.map((project) => (
        <ProjectCard
          key={project.id}
          project={project}
          publications={publications}
          index={projects.findIndex((item) => item.id === project.id)}
          full
        />
      ))}
      <div className="secondary-grid">
        {secondary.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            publications={publications}
            index={projects.findIndex((item) => item.id === project.id)}
            full={variant === "full"}
          />
        ))}
      </div>
    </div>
  );
}

function ProjectCard({
  project,
  publications,
  index,
  full,
}: {
  project: ResearchProject;
  publications: Publication[];
  index: number;
  full: boolean;
}) {
  const links = projectLinks(project, publications);
  const paragraphs = full ? project.paragraphs : project.paragraphs.slice(0, 1);
  return (
    <article className="project" id={project.id}>
      <div className={project.image && full ? "project-primary" : undefined}>
        {project.image && full ? (
          <img
            className="figure"
            src={project.image.src}
            alt={project.image.alt}
            width={project.image.width}
            height={project.image.height}
          />
        ) : null}
        <div>
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
          {paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
          {full && project.workflow ? (
            <ol className="workflow">
              {project.workflow.map((step, stepIndex) => (
                <li key={step}>
                  <span className="workflow-index">{stepIndex + 1}</span>
                  {step}
                </li>
              ))}
            </ol>
          ) : null}
          {full && project.highlights.length > 0 ? (
            <ul className="highlights">
              {project.highlights.map((highlight) => (
                <li key={highlight}>{highlight}</li>
              ))}
            </ul>
          ) : null}
          <ResourceLinks links={links} />
          {!full ? (
            <p>
              <Link href={`/research/#${project.id}`}>Project details</Link>
            </p>
          ) : null}
          {full && project.footnote ? <p className="footnote">{project.footnote}</p> : null}
        </div>
      </div>
    </article>
  );
}

import { AuthorList } from "@/components/AuthorList";
import { AwardsList } from "@/components/AwardsList";
import { ExperienceList } from "@/components/ExperienceList";
import { SkillGroups } from "@/components/SkillGroups";
import {
  awards,
  education,
  engineeringGroups,
  experience,
  profile,
  projects,
  publications,
  skills,
  socialLinks,
} from "@/lib/content";
import { roleLabel, statusLabel } from "@/lib/format";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "CV",
  description: "Academic CV of Zihan You, undergraduate researcher at Southeast University.",
  alternates: { canonical: "/cv/" },
  openGraph: { url: "/cv/" },
};

export default function CvPage() {
  const ongoing = projects.filter((project) => !project.publicationId);
  return (
    <div className="shell">
      <div className="cv-actions no-print">
        <a className="text-button" href={profile.cvPdf}>
          Download academic CV (PDF)
        </a>
      </div>
      <header className="cv-header">
        <h1>
          {profile.name}{" "}
          <span className="name-zh" lang="zh-Hans">
            {profile.nameZh}
          </span>
        </h1>
        <p className="profile-title">{profile.title}</p>
        <p>{profile.affiliation}</p>
        <p>
          {profile.degree}. {profile.graduation}.
        </p>
        <p>{profile.tagline}</p>
        <p>
          <a href={`mailto:${profile.email}`}>{profile.email}</a>
          {" · "}
          <a href={profile.siteUrl}>{profile.siteUrl.replace("https://", "")}</a>
        </p>
        <p>
          {socialLinks
            .filter((link) => link.external)
            .map((link, index) => (
              <span key={link.href}>
                {index > 0 ? " · " : null}
                <a href={link.href}>{link.label}</a>
              </span>
            ))}
        </p>
      </header>

      <section className="cv-block">
        <h2>Research Profile</h2>
        <p>{profile.hero}</p>
        <p>{profile.vision}</p>
      </section>

      <section className="cv-block">
        <h2>Education</h2>
        <p>
          <strong>{education.school}</strong>, {education.department}
        </p>
        <p>
          {education.degree}. {education.graduation}.
        </p>
      </section>

      <section className="cv-block">
        <h2>Research and Industry Experience</h2>
        <ExperienceList items={experience} />
      </section>

      <section className="cv-block">
        <h2>Publications</h2>
        {publications.map((publication) => (
          <article key={publication.id} className="cv-block">
            <h3>{publication.title}</h3>
            <AuthorList authors={publication.authors} legend={publication.markerLegend} />
            <p className="meta">
              {publication.venue} {publication.year} · {statusLabel(publication.status)} ·{" "}
              {roleLabel(publication.authorRole)}
              {publication.projectLead ? " · Project Lead" : ""}
            </p>
            <p>{publication.summary}</p>
          </article>
        ))}
      </section>

      <section className="cv-block">
        <h2>Ongoing Research</h2>
        {ongoing.map((project) => (
          <article key={project.id}>
            <h3>{project.title}</h3>
            <p className="meta">{project.statusLabel}</p>
            <p>{project.paragraphs[0]}</p>
          </article>
        ))}
      </section>

      <section className="cv-block">
        <h2>Engineering</h2>
        {engineeringGroups.map((group) => (
          <p key={group.id}>
            <strong>{group.title}.</strong> {group.items.map((item) => item.title).join("; ")}.
          </p>
        ))}
      </section>

      <section className="cv-block">
        <h2>Honors and Awards</h2>
        <AwardsList awards={awards} />
      </section>

      <section className="cv-block">
        <h2>Skills</h2>
        <SkillGroups groups={skills} />
      </section>
    </div>
  );
}

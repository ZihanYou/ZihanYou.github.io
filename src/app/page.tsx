import { AwardsList } from "@/components/AwardsList";
import { ExperienceList } from "@/components/ExperienceList";
import { ProfileLinks } from "@/components/ProfileLinks";
import { ProjectList } from "@/components/ProjectList";
import { awards, directions, education, experience, news, profile, projects, publications, socialLinks } from "@/lib/content";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="shell home-grid">
      <aside className="profile">
        <img
          className="avatar"
          src={profile.avatar}
          alt="Illustrated portrait of Zihan You"
          width={1024}
          height={1164}
        />
        <h1>
          {profile.name}
          <span className="name-zh" lang="zh-Hans">
            {profile.nameZh}
          </span>
        </h1>
        <p className="profile-title">{profile.title}</p>
        <p className="profile-meta">{profile.affiliation}</p>
        <p className="profile-meta">
          {profile.degree}
          <br />
          {profile.graduation}
        </p>
        <p className="tagline">{profile.tagline}</p>
        <ProfileLinks links={socialLinks} email={profile.email} />
      </aside>
      <div>
        <p className="lede">{profile.hero}</p>
        <p className="vision">{profile.vision}</p>

        <section className="section" id="about">
          <h2>About Me</h2>
          {profile.aboutLead.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
          <p>My research spans three interconnected directions:</p>
          {profile.aboutDirections.map((direction) => (
            <p key={direction.title}>
              <strong>{direction.title}</strong> {direction.text}
            </p>
          ))}
          {profile.aboutClose.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </section>

        <section className="section" id="interests">
          <h2>Research Interests</h2>
          <div className="direction-grid">
            {directions.map((direction) => (
              <article key={direction.id} className="card">
                <h3>
                  <Link href={`/research/#${direction.id}`}>{direction.title}</Link>
                </h3>
                <p>{direction.card}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section" id="selected">
          <h2>Selected Research</h2>
          <ProjectList projects={projects} publications={publications} variant="home" />
        </section>

        <section className="section" id="papers">
          <h2>Publications</h2>
          <p>
            Each paper is shown with its figure and a short account of the work.{" "}
            <Link href="/publications/">Open the searchable list</Link>
          </p>
          <div className="paper-grid">
            {publications.map((paper) => (
              <article key={paper.id} className="paper-tile">
                {paper.thumbnail ? (
                  <img
                    className="figure"
                    src={paper.thumbnail.src}
                    alt={paper.thumbnail.alt}
                    width={paper.thumbnail.width}
                    height={paper.thumbnail.height}
                  />
                ) : null}
                <div>
                  <p className="meta">
                    {paper.venue} {paper.year}
                  </p>
                  <h3>
                    <Link href={`/publications/#${paper.id}`}>{paper.title}</Link>
                  </h3>
                  <p>{paper.summary}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section" id="news">
          <h2>News</h2>
          <ul className="news-list">
            {news.map((item) => (
              <li key={item.id}>
                <p className="news-date">{item.date}</p>
                <p>{item.text}</p>
              </li>
            ))}
          </ul>
        </section>

        <section className="section" id="experience">
          <h2>Research and Industry Experience</h2>
          <ExperienceList items={experience} />
          <p>
            <Link href="/experience/">Experience and skills</Link>
          </p>
        </section>

        <section className="section" id="education">
          <h2>Education</h2>
          <article className="card">
            <h3>
              <a href={education.schoolUrl}>{education.school}</a>
            </h3>
            <p>{education.department}</p>
            <p>{education.degree}</p>
            <p className="meta">{education.graduation}</p>
          </article>
        </section>

        <section className="section" id="awards">
          <h2>Honors and Awards</h2>
          <AwardsList awards={awards} />
        </section>

        <section className="section" id="contact">
          <h2>Contact</h2>
          <p>
            Email is the best way to reach me: <a href={`mailto:${profile.email}`}>{profile.email}</a>
          </p>
          <ul className="social-list">
            {socialLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  {...(link.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
}

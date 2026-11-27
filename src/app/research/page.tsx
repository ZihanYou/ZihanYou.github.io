import { ProjectList } from "@/components/ProjectList";
import { directions, profile, projects, publications } from "@/lib/content";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Research",
  description:
    "Research directions and selected projects of Zihan You: multimodal foundation models, agentic AI, and embodied intelligence.",
  alternates: { canonical: "/research/" },
  openGraph: { url: "/research/" },
};

export default function ResearchPage() {
  return (
    <div className="shell">
      <h1>Research</h1>
      <p className="lede">{profile.vision}</p>
      <p>{profile.hero}</p>
      {directions.map((direction) => (
        <section key={direction.id} className="section" id={direction.id}>
          <h2>{direction.title}</h2>
          <p>{direction.body}</p>
          <ul className="tags">
            {direction.tags.map((tag) => (
              <li key={tag}>{tag}</li>
            ))}
          </ul>
        </section>
      ))}
      <section className="section" id="projects">
        <h2>Selected Research</h2>
        <p>
          Ongoing work is described here. A project appears on the{" "}
          <a href="/publications/">publications page</a> when it has a public bibliographic record.
        </p>
        <ProjectList projects={projects} publications={publications} variant="full" />
      </section>
    </div>
  );
}

import { engineeringGroups, engineeringIntroduction } from "@/lib/content";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Engineering",
  description:
    "Robotics, electronics, PCB, mechanical design, and simulation work by Zihan You.",
  alternates: { canonical: "/engineering/" },
  openGraph: { url: "/engineering/" },
};

export default function EngineeringPage() {
  return (
    <div className="shell">
      <h1>Engineering and Robotics</h1>
      {engineeringIntroduction.map((paragraph) => (
        <p key={paragraph}>{paragraph}</p>
      ))}
      <p>
        <Link href="/research/#agents-last-exam">Agents&apos; Last Exam on the research page</Link>
      </p>
      {engineeringGroups.map((group) => (
        <section key={group.id} className="section" id={group.id}>
          <h2>{group.title}</h2>
          <p>{group.intro}</p>
          <div className="engineering-grid">
            {group.items.map((item) => (
              <article key={item.title} className="card">
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}

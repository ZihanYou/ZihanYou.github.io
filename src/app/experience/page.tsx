import { ExperienceList } from "@/components/ExperienceList";
import { SkillGroups } from "@/components/SkillGroups";
import { experience, skills } from "@/lib/content";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Experience",
  description:
    "Research and industry experience of Zihan You at Li Auto, Tsinghua AIR, China Automotive Innovation Corporation, and the SEU 3SE Robotics Team.",
  alternates: { canonical: "/experience/" },
  openGraph: { url: "/experience/" },
};

export default function ExperiencePage() {
  return (
    <div className="shell">
      <h1>Experience</h1>
      <p>
        These dates are research internships. My degree is the B.Eng. at Southeast University. At AIR, Prof. Yan
        Wang was my research mentor.
      </p>
      <ExperienceList items={experience} />
      <section className="section" id="skills">
        <h2>Skills</h2>
        <SkillGroups groups={skills} />
      </section>
    </div>
  );
}

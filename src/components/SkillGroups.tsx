import type { SkillGroup } from "@/content/types";

export function SkillGroups({ groups }: { groups: SkillGroup[] }) {
  return (
    <div className="skill-grid">
      {groups.map((group) => (
        <section key={group.title} className="card">
          <h3>{group.title}</h3>
          <ul className="tags">
            {group.items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>
      ))}
    </div>
  );
}

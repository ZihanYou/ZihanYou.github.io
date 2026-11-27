import type { Award } from "@/content/types";

export function AwardsList({ awards }: { awards: Award[] }) {
  return (
    <ul className="award-list">
      {awards.map((award) => (
        <li key={award.id}>
          <h3>{award.title}</h3>
          <p>
            {award.detail}
            {award.year ? ` (${award.year})` : ""}
          </p>
          {award.team ? <p className="badge badge-ongoing">Team Award</p> : null}
        </li>
      ))}
    </ul>
  );
}

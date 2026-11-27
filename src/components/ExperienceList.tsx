import type { ExperienceItem } from "@/content/types";

export function ExperienceList({ items }: { items: ExperienceItem[] }) {
  return (
    <ol className="timeline">
      {items.map((item) => (
        <li key={item.id}>
          <h3>
            {item.role}
            <span className="meta"> — {item.group}</span>
          </h3>
          <p className="meta">
            {item.organization}
            <span> · {item.dates}</span>
          </p>
          {item.mentor ? (
            <p>
              {item.mentor.prefix}{" "}
              <a href={item.mentor.href} target="_blank" rel="noopener noreferrer">
                {item.mentor.name}
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
              {item.mentor.suffix}
            </p>
          ) : null}
          <ul className="highlights">
            {item.bullets.map((bullet) => (
              <li key={bullet}>{bullet}</li>
            ))}
          </ul>
          {item.achievement ? <p>{item.achievement}</p> : null}
        </li>
      ))}
    </ol>
  );
}

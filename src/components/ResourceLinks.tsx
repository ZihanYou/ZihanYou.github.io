import type { ResourceLink } from "@/content/types";

export function ResourceLinks({ links }: { links: ResourceLink[] }) {
  if (links.length === 0) return null;
  return (
    <ul className="resource-links">
      {links.map((link) => {
        const external = link.href.startsWith("http");
        return (
          <li key={`${link.label}-${link.href}`}>
            <a
              href={link.href}
              {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
            >
              {link.label}
              {external ? <span className="sr-only"> (opens in a new tab)</span> : null}
            </a>
          </li>
        );
      })}
    </ul>
  );
}

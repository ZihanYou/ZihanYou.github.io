import type { ReactNode } from "react";
import type { SocialLink } from "@/content/types";

const icons: Record<string, ReactNode> = {
  Email: (
    <svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.8">
      <rect x="3.5" y="5.5" width="17" height="13" rx="2" />
      <path d="M4 7l8 6 8-6" />
    </svg>
  ),
  "Google Scholar": (
    <svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M3 10.5 12 4l9 6.5" />
      <path d="M6 10v7.5M18 10v7.5M4.5 18.5h15" />
      <path d="M12 10.5v8" />
    </svg>
  ),
  GitHub: (
    <svg viewBox="0 0 24 24" aria-hidden="true" fill="currentColor">
      <path d="M12 2.5a9.5 9.5 0 0 0-3 18.5c.47.09.64-.2.64-.46v-1.6c-2.6.57-3.15-1.1-3.15-1.1-.42-1.08-1.03-1.37-1.03-1.37-.84-.58.06-.57.06-.57.93.07 1.42.96 1.42.96.83 1.42 2.17 1.01 2.7.77.08-.6.32-1.01.59-1.24-2.08-.24-4.26-1.04-4.26-4.63 0-1.02.36-1.86.96-2.51-.1-.24-.42-1.2.09-2.5 0 0 .79-.25 2.58.96a8.9 8.9 0 0 1 4.7 0c1.79-1.21 2.58-.96 2.58-.96.51 1.3.19 2.26.09 2.5.6.65.96 1.49.96 2.51 0 3.6-2.19 4.39-4.28 4.62.33.29.63.85.63 1.72v2.55c0 .26.17.56.65.46A9.5 9.5 0 0 0 12 2.5Z" />
    </svg>
  ),
  LinkedIn: (
    <svg viewBox="0 0 24 24" aria-hidden="true" fill="currentColor">
      <path d="M6.5 9.2H3.8V20h2.7V9.2ZM5.15 4a1.58 1.58 0 1 0 0 3.16 1.58 1.58 0 0 0 0-3.16ZM20.2 20h-2.7v-5.7c0-1.6-.57-2.7-2-2.7-1.09 0-1.74.73-2.03 1.44-.1.25-.13.6-.13.95V20h-2.7s.04-9.3 0-10.8h2.7v1.53c.36-.55 1-1.33 2.44-1.33 1.78 0 3.12 1.16 3.12 3.66V20Z" />
    </svg>
  ),
  "Academic CV": (
    <svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M7 3.5h7l5 5V20.5H7z" />
      <path d="M14 3.5V9h5M9.5 13h7M9.5 16.5h7" />
    </svg>
  ),
};

export function ProfileLinks({ links, email }: { links: SocialLink[]; email: string }) {
  return (
    <ul className="profile-links">
      {links.map((link) => {
        const external = Boolean(link.external);
        return (
          <li key={link.href}>
            <a href={link.href} {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}>
              {icons[link.label]}
              <span>
                {link.label}
                {link.label === "Email" ? <small>{email}</small> : null}
                {external ? <span className="sr-only"> (opens in a new tab)</span> : null}
              </span>
            </a>
          </li>
        );
      })}
    </ul>
  );
}

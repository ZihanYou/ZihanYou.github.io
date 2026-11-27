"use client";

import { AuthorList } from "@/components/AuthorList";
import { ResourceLinks } from "@/components/ResourceLinks";
import type { Publication, TopicId } from "@/content/types";
import { publicationLinks, roleLabel, statusLabel, topicLabel } from "@/lib/format";
import { useMemo, useState } from "react";

const filters: Array<{ id: string; label: string }> = [
  { id: "all", label: "All" },
  { id: "peer-reviewed", label: "Peer-Reviewed" },
  { id: "preprint", label: "Preprints" },
  { id: "lead", label: "First / Co-First Author" },
  { id: "foundation-models", label: "Foundation Models" },
  { id: "agentic-ai", label: "Agentic AI" },
  { id: "embodied-ai", label: "Embodied AI" },
];

export function PublicationExplorer({ publications }: { publications: Publication[] }) {
  const [filter, setFilter] = useState("all");
  const [query, setQuery] = useState("");
  const [copied, setCopied] = useState<string | null>(null);

  const visible = useMemo(() => {
    const needle = query.trim().toLowerCase();
    return publications.filter((publication) => {
      if (filter === "peer-reviewed" && publication.status !== "peer-reviewed") return false;
      if (filter === "preprint" && publication.status !== "preprint") return false;
      if (filter === "lead" && publication.authorRole !== "first" && publication.authorRole !== "co-first") {
        return false;
      }
      if (
        (filter === "foundation-models" || filter === "agentic-ai" || filter === "embodied-ai") &&
        !publication.topics.includes(filter as TopicId)
      ) {
        return false;
      }
      if (!needle) return true;
      const haystack = [
        publication.title,
        publication.venue,
        publication.summary,
        String(publication.year),
        ...publication.authors.map((author) => author.name),
        ...publication.topics.map((topic) => topicLabel[topic]),
      ]
        .join(" ")
        .toLowerCase();
      return haystack.includes(needle);
    });
  }, [filter, publications, query]);

  const groups = [
    { status: "peer-reviewed" as const, title: "Peer-reviewed" },
    { status: "preprint" as const, title: "Preprints" },
  ];

  async function copyBibtex(publication: Publication) {
    const text = publication.bibtex;
    try {
      await navigator.clipboard.writeText(text);
      setCopied(publication.id);
      return;
    } catch {
      const area = document.createElement("textarea");
      area.value = text;
      area.setAttribute("readonly", "");
      area.style.position = "fixed";
      area.style.left = "-9999px";
      document.body.appendChild(area);
      area.select();
      const ok = document.execCommand("copy");
      area.remove();
      if (ok) setCopied(publication.id);
    }
  }

  return (
    <div>
      <label className="sr-only" htmlFor="publication-search">
        Search publications
      </label>
      <input
        id="publication-search"
        className="search"
        type="search"
        value={query}
        placeholder="Search titles, authors, venues, and topics"
        onChange={(event) => setQuery(event.target.value)}
      />
      <div className="filters" role="toolbar" aria-label="Filter publications">
        {filters.map((item) => (
          <button
            key={item.id}
            type="button"
            className="filter"
            aria-pressed={filter === item.id}
            onClick={() => setFilter(item.id)}
          >
            {item.label}
          </button>
        ))}
      </div>
      <p className="meta" aria-live="polite">
        {visible.length} {visible.length === 1 ? "publication" : "publications"}
      </p>
      {visible.length === 0 ? <p className="empty">No publications match this filter.</p> : null}
      {groups.map((group) => {
        const items = visible.filter((publication) => publication.status === group.status);
        if (items.length === 0) return null;
        return (
          <section key={group.status} aria-label={group.title}>
            <h2 className="group-label">{group.title}</h2>
            <div className="project-stack">
              {items.map((publication) => (
                <article key={publication.id} className="pub-card" id={publication.id}>
                  <div className="pub-layout">
                    {publication.thumbnail ? (
                      <img
                        className="figure"
                        src={publication.thumbnail.src}
                        alt={publication.thumbnail.alt}
                        width={publication.thumbnail.width}
                        height={publication.thumbnail.height}
                      />
                    ) : null}
                    <div>
                      <h3>{publication.title}</h3>
                      <AuthorList authors={publication.authors} legend={publication.markerLegend} />
                      <p className="meta">
                        {publication.venue} {publication.year} · {statusLabel(publication.status)}
                      </p>
                      <ul className="badges">
                        <li className="badge">{roleLabel(publication.authorRole)}</li>
                        {publication.projectLead ? <li className="badge">Project Lead</li> : null}
                        {publication.topics.map((topic) => (
                          <li key={topic} className="badge">
                            {topicLabel[topic]}
                          </li>
                        ))}
                      </ul>
                      <p>{publication.summary}</p>
                      <ResourceLinks links={publicationLinks(publication)} />
                      <details className="bibtex">
                        <summary>BibTeX</summary>
                        <pre>{publication.bibtex}</pre>
                        <button type="button" className="copy-button" onClick={() => copyBibtex(publication)}>
                          {copied === publication.id ? "Copied" : "Copy BibTeX"}
                        </button>
                      </details>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>
        );
      })}
    </div>
  );
}

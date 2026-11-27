import type { Author, MarkerLegend } from "@/content/types";

export function AuthorList({ authors, legend }: { authors: Author[]; legend?: MarkerLegend[] }) {
  return (
    <div className="authors">
      <p>
        {authors.map((author, index) => (
          <span key={`${author.name}-${index}`}>
            {index > 0 ? ", " : null}
            {author.self ? <strong>{author.name}</strong> : author.name}
            {author.marker ? <sup>{author.marker}</sup> : null}
          </span>
        ))}
      </p>
      {legend && legend.length > 0 ? (
        <p className="legend">
          {legend.map((item) => (
            <span key={item.symbol}>
              {item.symbol} {item.meaning}
            </span>
          ))}
        </p>
      ) : null}
    </div>
  );
}

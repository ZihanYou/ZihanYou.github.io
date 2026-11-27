import Link from "next/link";

export default function NotFound() {
  return (
    <div className="shell">
      <h1>Page not found</h1>
      <p>That page is not on this site.</p>
      <p>
        <Link href="/">Back to the homepage</Link>
      </p>
    </div>
  );
}

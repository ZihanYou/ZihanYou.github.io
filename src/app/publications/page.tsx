import { PublicationExplorer } from "@/components/PublicationExplorer";
import { publications } from "@/lib/content";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Publications",
  description:
    "Publications by Zihan You, including peer-reviewed papers and preprints on foundation models, agent evaluation, and embodied intelligence.",
  alternates: { canonical: "/publications/" },
  openGraph: { url: "/publications/" },
};

export default function PublicationsPage() {
  return (
    <div className="shell">
      <h1>Publications</h1>
      <p>
        Peer-reviewed papers and preprints. Ongoing projects stay on the <a href="/research/">research page</a> until
        they have a public paper. Equal-contribution and corresponding-author marks are shown only when the public
        manuscript prints them.
      </p>
      <PublicationExplorer publications={publications} />
    </div>
  );
}

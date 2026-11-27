import { AwardsList } from "@/components/AwardsList";
import { awards } from "@/lib/content";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Awards",
  description: "Honors and awards received by Zihan You.",
  alternates: { canonical: "/awards/" },
  openGraph: { url: "/awards/" },
};

export default function AwardsPage() {
  return (
    <div className="shell">
      <h1>Honors and Awards</h1>
      <p>The RoboMaster result is a team award and is labeled as one.</p>
      <AwardsList awards={awards} />
    </div>
  );
}

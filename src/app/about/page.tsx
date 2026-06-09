import type { Metadata } from "next";
import { ShieldCheck } from "lucide-react";
import { LinkButton } from "@/components/ui/button";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about John Mold Inspection & Testing, serving Tarzana and the greater Los Angeles area with mold inspection and testing services.",
  alternates: {
    canonical: "/about",
  },
};

export default function AboutPage() {
  return (
    <section className="py-16">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <p className="text-sm font-black uppercase tracking-wide text-[#d86f3d]">
            About us
          </p>
          <h1 className="mt-3 text-4xl font-black leading-tight sm:text-5xl">
            Practical mold inspection for homes and buildings across Los Angeles.
          </h1>
          <p className="mt-5 text-lg leading-8 text-[#4d5d54]">
            John Mold Inspection & Testing helps property owners understand
            whether water intrusion, humidity, staining, or indoor air symptoms
            point to a mold issue that needs attention.
          </p>
        </div>
        <div className="rounded-lg bg-white p-8 shadow-sm ring-1 ring-black/10">
          <ShieldCheck className="text-[#17664a]" size={36} aria-hidden="true" />
          <h2 className="mt-5 text-2xl font-black">Inspection-first guidance</h2>
          <p className="mt-4 leading-7 text-[#4d5d54]">
            Our process combines visual assessment, moisture readings, infrared
            scanning, and lab testing when appropriate. The goal is a clear
            written report that helps you decide what to fix, document, or monitor.
          </p>
          <LinkButton href="/#quote" className="mt-6">
            Schedule Inspection
          </LinkButton>
          <p className="mt-4 text-sm font-bold text-[#607067]">{site.address}</p>
        </div>
      </div>
    </section>
  );
}

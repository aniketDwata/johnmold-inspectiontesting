import Image from "next/image";
import { site } from "@/lib/site";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-white">
      <div className="pointer-events-none absolute left-0 top-0 h-full w-2/3 bg-[#f2fff7]" />
      <div className="container-clone relative grid min-h-[600px] items-center gap-12 py-20 lg:grid-cols-[1fr_0.95fr]">
        <div>
          <p className="section-kicker">{site.name}</p>
          <h1 className="clone-h1 mt-6">
            Professional Mold Inspection & Testing in{" "}
            <span className="text-[#35bc7f]">Tarzana</span>
          </h1>
          <p className="clone-p mt-7 max-w-2xl">
            Fast mold inspection and testing for homes and businesses in Tarzana
            and the greater Los Angeles area. Get careful moisture checks,
            practical recommendations, and clear next steps from a local team.
          </p>
          <div className="mt-9 flex flex-wrap gap-4">
            <a href="/contact-us/" className="quote-pill">
              Contact Us →
            </a>
            <a href={site.phoneHref} className="quote-pill gold-pill" data-gtm-event="schedule_inspection_hero">
              Schedule Inspection
            </a>
          </div>
        </div>
        <div className="relative min-h-[500px] overflow-hidden rounded-tl-[18px]">
          <Image
            src="https://johnmoldinspectiontesting.com/wp-content/uploads/elementor/thumbs/John-Mold-Inspection-Testing-riegtw591uqy9dtxfojl9rrd3d310cwfvks85u281s.jpg"
            alt="John Mold Inspection & Testing"
            fill
            priority
            unoptimized
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}

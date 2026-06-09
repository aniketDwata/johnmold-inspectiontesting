import Image from "next/image";
import type { Metadata } from "next";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "About John Mold Inspection & Testing, serving Tarzana and Los Angeles with mold inspection and testing services.",
  alternates: {
    canonical: "/about-us/",
  },
};

export default function AboutUsPage() {
  return (
    <section id="content" className="py-24">
      <div className="container-clone grid items-center gap-14 lg:grid-cols-2">
        <div>
          <p className="section-kicker">About Us</p>
          <h1 className="clone-h1 mt-4">About John Mold Inspection & Testing</h1>
          <div className="mt-7 space-y-5 clone-p">
            <p>
              John Mold Inspection & Testing provides practical mold inspection
              and testing support for residential and commercial properties in
              Tarzana and the greater Los Angeles area.
            </p>
            <p>
              We focus on careful inspection, clear communication, and reliable
              testing options that help property owners understand the condition
              of their indoor environment.
            </p>
            <p>
              Whether you are dealing with moisture, suspicious staining, odor,
              or air quality concerns, our team helps you find the next right
              step with confidence.
            </p>
          </div>
          <div className="mt-8 flex flex-wrap gap-5">
            <a href="/contact-us/" className="quote-pill">Contact Us →</a>
            <a href={site.phoneHref} className="quote-pill gold-pill">Schedule Inspection</a>
          </div>
        </div>
        <div className="relative min-h-[520px] overflow-hidden rounded-[18px]">
          <Image
            src="https://johnmoldinspectiontesting.com/wp-content/uploads/2025/06/about-1-1024x839.webp"
            alt="about us"
            fill
            unoptimized
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
            priority
          />
        </div>
      </div>
    </section>
  );
}

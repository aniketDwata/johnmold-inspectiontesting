import Image from "next/image";
import type { Metadata } from "next";
import { Check, ClipboardList, Flag, Home, ListChecks, RotateCcw, Search } from "lucide-react";
import { HeroSection } from "@/components/features/hero";
import { LocalBusinessSchema } from "@/components/features/schema-org";
import { servicePath, site } from "@/lib/site";

export const metadata: Metadata = {
  alternates: {
    canonical: "/",
  },
};

const features = [
  {
    title: "Custom Mold Solutions",
    text: "Personalized treatment plans for your property, from detection through remediation guidance.",
    icon: Search,
    bg: "bg-[#35bc7f]",
  },
  {
    title: "Advanced Technology",
    text: "Modern tools support precise mold testing, moisture readings, and easy-to-understand reports.",
    icon: Flag,
    bg: "bg-[#7bd13d]",
  },
  {
    title: "Business Hours",
    text: "Open Sunday to Thursday from 8:00 AM to 8:00 PM, Friday from 8:00 AM to 2:00 PM, and closed Saturdays.",
    icon: RotateCcw,
    bg: "bg-[#55ca3d]",
  },
  {
    title: "Long-Term Protection",
    text: "We focus on fixing current conditions and helping prevent mold problems from returning.",
    icon: ClipboardList,
    bg: "bg-[#39ce44]",
  },
];

const testimonials = [
  {
    name: "David",
    image: "https://johnmoldinspectiontesting.com/wp-content/uploads/2025/06/testi-1-copyright-120x120-1.jpg",
    quote: "Their professionalism stood out from the first call through the final report. Everything was clear, smooth, and efficient.",
  },
  {
    name: "Josh M.",
    image: "https://johnmoldinspectiontesting.com/wp-content/uploads/2025/06/testi-3-copyright-120x120-1.jpg",
    quote: "They found the hidden moisture issue, explained the results, and helped us understand how to stop the problem from returning.",
  },
  {
    name: "Brian S.",
    image: "https://johnmoldinspectiontesting.com/wp-content/uploads/2025/06/testi-4-copyright-120x120-1.jpg",
    quote: "A small leak became a bigger concern, and the team moved quickly with testing and practical next steps.",
  },
];

export default function HomePage() {
  return (
    <>
      <LocalBusinessSchema />
      <div id="content">
        <HeroSection />
        <section className="grid md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <article key={feature.title} className={`feature-tile ${feature.bg} flex flex-col items-center justify-center px-8 py-12`}>
                <span className="feature-icon">
                  <Icon size={38} aria-hidden="true" />
                </span>
                <h2 className="text-xl font-black uppercase leading-tight">{feature.title}</h2>
                <p className="mt-5 max-w-xs text-base font-semibold leading-7 text-white/95">{feature.text}</p>
              </article>
            );
          })}
        </section>
        <section className="py-24">
          <div className="container-clone grid items-center gap-14 lg:grid-cols-2">
            <div>
              <p className="section-kicker">About Us</p>
              <h2 className="clone-h2 mt-4">About John Mold Inspection & Testing</h2>
              <div className="mt-6 space-y-5 clone-p">
                <p>
                  John Mold Inspection & Testing is a locally owned company
                  serving residential and commercial properties across Tarzana
                  and nearby Los Angeles communities.
                </p>
                <p>
                  The team combines careful inspection, moisture evaluation,
                  testing options, and clear recommendations so property owners
                  can address indoor mold concerns with confidence.
                </p>
                <p>
                  Every visit is focused on healthier indoor air, practical
                  prevention, and protecting the comfort and safety of the people
                  who live or work inside.
                </p>
              </div>
              <div className="mt-8 flex flex-wrap gap-5">
                <a href="/contact-us/" className="quote-pill">Contact Us →</a>
                <a href={site.phoneHref} className="quote-pill gold-pill" data-gtm-event="schedule_inspection_about">Schedule Inspection</a>
              </div>
            </div>
            <div className="relative min-h-[470px] overflow-hidden rounded-[18px]">
              <Image
                src="https://johnmoldinspectiontesting.com/wp-content/uploads/2025/06/about-1-1024x839.webp"
                alt="about us"
                fill
                unoptimized
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>
        </section>
        <section className="container-clone grid gap-5 pb-20 md:grid-cols-2">
          <a href="#" className="flex gap-6 bg-[#35bc7f] p-9 text-white">
            <span className="feature-icon m-0 shrink-0"><Home size={34} aria-hidden="true" /></span>
            <span>
              <h2 className="text-2xl font-black">Mold Inspection</h2>
              <p className="mt-3 text-base font-semibold leading-7">Detailed inspections uncover hidden contamination and help protect your indoor environment.</p>
            </span>
          </a>
          <a href="#" className="flex gap-6 bg-black p-9 text-white">
            <span className="feature-icon m-0 shrink-0"><Check size={38} aria-hidden="true" /></span>
            <span>
              <h2 className="text-2xl font-black">Mold Testing</h2>
              <p className="mt-3 text-base font-semibold leading-7">Lab-supported testing identifies mold conditions so you can make informed decisions.</p>
            </span>
          </a>
        </section>
        <section className="relative overflow-hidden bg-black py-24 text-white">
          <Image
            src="https://johnmoldinspectiontesting.com/wp-content/uploads/2024/03/mold-remediation-1.webp"
            alt=""
            fill
            unoptimized
            sizes="100vw"
            className="object-cover opacity-45"
          />
          <div className="container-clone relative max-w-3xl">
            <p className="section-kicker">Ensuring Your Well-being</p>
            <h2 className="mt-5 text-5xl font-black leading-tight">
              Protect Your Family With Trusted Mold Testing and Solutions
            </h2>
            <p className="mt-7 text-lg font-semibold leading-8 text-white/90">
              Removing mold risks can improve indoor air quality and support a
              healthier home. Our inspection and testing process helps identify
              potential issues early and gives you clear guidance before damage
              becomes harder to control.
            </p>
            <a href={site.phoneHref} className="mt-8 inline-flex text-lg font-black" data-gtm-event="click_to_call_wellbeing">
              Call&nbsp; {site.phone}
            </a>
          </div>
        </section>
        <section className="bg-white py-24" style={{ backgroundImage: "url(https://johnmoldinspectiontesting.com/wp-content/uploads/2023/02/testimonial.png)" }}>
          <div className="container-clone text-center">
            <p className="section-kicker">Testimonials</p>
            <h2 className="mt-3 text-4xl font-black">
              What Our <span className="text-[#35bc7f]">Clients Say?</span>
            </h2>
            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {testimonials.map((item) => (
                <figure key={item.name} className="bg-white px-8 py-14 text-center shadow-xl">
                  <blockquote className="min-h-32 text-base leading-7 text-[#61666d]">"{item.quote}"</blockquote>
                  <div className="mt-7 flex items-center justify-center gap-4">
                    <span className="relative size-24 overflow-hidden rounded-full border-[8px] border-[#35bc7f]">
                      <Image src={item.image} alt="" fill sizes="96px" className="object-cover" unoptimized />
                    </span>
                    <figcaption className="text-lg font-black text-[#61666d]">{item.name}</figcaption>
                  </div>
                </figure>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

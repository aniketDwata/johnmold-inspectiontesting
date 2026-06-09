import Image from "next/image";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CheckCircle2 } from "lucide-react";
import { LinkButton } from "@/components/ui/button";
import { services, site } from "@/lib/site";

type PageProps = {
  params: { slug: string };
};

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = params;
  const service = services.find((item) => item.slug === slug);

  if (!service) {
    return {};
  }

  return {
    title: service.title,
    description: `${service.summary} Schedule ${service.title.toLowerCase()} with John Mold Inspection & Testing in Tarzana, CA.`,
    alternates: {
      canonical: `/services/${service.slug}`,
    },
  };
}

export default async function ServicePage({ params }: PageProps) {
  const { slug } = params;
  const service = services.find((item) => item.slug === slug);

  if (!service) {
    notFound();
  }

  return (
    <>
      <section className="relative min-h-[420px] overflow-hidden bg-[#18201c] text-white">
        <Image
          src={service.image}
          alt={`${service.title} for mold inspection in Tarzana`}
          fill
          unoptimized
          priority
          sizes="100vw"
          className="object-cover opacity-55"
        />
        <div className="absolute inset-0 bg-[#102019]/50" />
        <div className="relative mx-auto flex min-h-[420px] max-w-7xl items-end px-5 py-14">
          <div className="max-w-3xl">
            <p className="text-sm font-black uppercase tracking-wide text-[#ffb58f]">
              Mold inspection service
            </p>
            <h1 className="mt-3 text-4xl font-black leading-tight sm:text-5xl">
              {service.title}
            </h1>
            <p className="mt-5 text-lg leading-8 text-white/88">
              {service.summary}
            </p>
          </div>
        </div>
      </section>
      <section className="py-16">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 lg:grid-cols-[1fr_0.8fr]">
          <div>
            <h2 className="text-3xl font-black">What this inspection includes</h2>
            <p className="mt-4 leading-7 text-[#4d5d54]">
              We inspect the suspected source area, document moisture patterns,
              review ventilation and building conditions, and explain whether
              sampling is useful for your situation. When samples are collected,
              results are sent for professional laboratory analysis.
            </p>
            <ul className="mt-8 grid gap-4">
              {[
                "Targeted assessment of visible and hidden risk areas",
                "Photo documentation for property owners and remediation teams",
                "Clear report language without inflated scare tactics",
                "Fast scheduling throughout Tarzana and nearby communities",
              ].map((item) => (
                <li key={item} className="flex gap-3 font-bold">
                  <CheckCircle2 size={22} className="shrink-0 text-[#17664a]" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <aside className="rounded-lg bg-white p-8 shadow-sm ring-1 ring-black/10">
            <h2 className="text-2xl font-black">Need answers today?</h2>
            <p className="mt-4 leading-7 text-[#4d5d54]">
              Call {site.phone} or request a quote to schedule mold inspection
              and testing service.
            </p>
            <div className="mt-6 grid gap-3">
              <LinkButton href="/#quote">Schedule Inspection</LinkButton>
              <a href={site.phoneHref} data-gtm-event="click_to_call_service" className="text-sm font-black text-[#17664a]">
                Call {site.phone}
              </a>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}

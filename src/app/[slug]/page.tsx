import Image from "next/image";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ServiceSchema } from "@/components/features/service-schema";
import { services, site } from "@/lib/site";

type PageProps = {
  params: { slug: string };
};

function findService(slug: string) {
  return services.find((service) => service.slug === slug || service.liveSlug === slug);
}

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.liveSlug || service.slug }));
}

export function generateMetadata({ params }: PageProps): Metadata {
  const service = findService(params.slug);

  if (!service) {
    return {};
  }

  return {
    title: service.heading,
    description: `${service.summary} Schedule service with John Mold Inspection & Testing in Tarzana, CA.`,
    alternates: {
      canonical: `/${service.liveSlug || service.slug}/`,
    },
  };
}

export default function RootServicePage({ params }: PageProps) {
  const service = findService(params.slug);

  if (!service) {
    notFound();
  }

  return (
    <div id="content">
      <ServiceSchema service={service} />
      <section className="py-20">
        <div className="container-clone grid items-center gap-14 lg:grid-cols-[0.95fr_1fr]">
          <div>
            <h1 className="clone-h2">{service.heading}</h1>
            <p className="clone-p mt-6">{service.summary}</p>
            <p className="clone-p mt-5">
              Our inspection process is designed to locate hidden risk areas,
              explain what the findings mean, and help you choose the most
              practical next step for your property.
            </p>
            <a href={site.phoneHref} className="quote-pill mt-8" data-gtm-event="free_quote_service">
              Get a Free Quote
            </a>
          </div>
          <div className="relative min-h-[505px] overflow-hidden rounded-[16px]">
            <Image
              src={service.image}
              alt={service.heading}
              fill
              unoptimized
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>
      {service.sections.map((heading, index) => (
        <section key={heading} className={index % 2 === 0 ? "bg-white py-20" : "bg-[#f8fbf9] py-20"}>
          <div className="container-clone grid items-center gap-12 lg:grid-cols-2">
            <div className={index % 2 === 0 ? "" : "lg:order-2"}>
              <h2 className="clone-h2 text-[38px]">{heading}</h2>
              <p className="clone-p mt-5">
                We use a careful, non-invasive approach whenever possible,
                pairing visual inspection with moisture readings, sampling
                guidance, and documentation. You receive straightforward results
                that make it easier to plan repairs, remediation, or prevention.
              </p>
              <a href={site.phoneHref} className="quote-pill mt-7" data-gtm-event="free_quote_service_section">
                Get a Free Quote
              </a>
            </div>
            <div className="relative min-h-[380px] overflow-hidden rounded-[16px]">
              <Image
                src={index === 0 ? service.secondaryImage : service.image}
                alt=""
                fill
                unoptimized
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>
        </section>
      ))}
    </div>
  );
}

import { servicePath, site, services } from "@/lib/site";

type Service = (typeof services)[number];

export function ServiceSchema({ service }: { service: Service }) {
  const path = servicePath(service);
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.heading,
    description: service.summary,
    provider: {
      "@type": "LocalBusiness",
      name: site.name,
      telephone: site.phone,
      email: site.email,
      url: site.url,
      address: {
        "@type": "PostalAddress",
        addressLocality: site.city,
        addressRegion: site.region,
        postalCode: site.postalCode,
        addressCountry: "US",
      },
    },
    areaServed: ["Tarzana", "San Fernando Valley", "Greater Los Angeles"],
    url: `${site.url}${path}`,
  };

  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: site.url,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: service.title,
        item: `${site.url}${path}`,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
    </>
  );
}

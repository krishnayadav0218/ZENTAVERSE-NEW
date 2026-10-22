import { Metadata } from "next";
import { notFound } from "next/navigation";
import { servicesData, ServiceItem } from "@/data/siteData";
import ServicePageClient from "@/components/ServicePageClient";

interface ServicePageProps {
  params: {
    slug: string;
  };
}

export function generateStaticParams() {
  return servicesData.map((s) => ({
    slug: s.id,
  }));
}

export function generateMetadata({ params }: ServicePageProps): Metadata {
  const service = servicesData.find((s) => s.id === params.slug);

  if (!service) {
    return {
      title: "Service Not Found | Zyntaverse Technologies",
    };
  }

  const title = `${service.title} Services | Zyntaverse Technologies Mumbai`;
  const description = `${service.shortDescription} Milestone sprints, full source code ownership, and 99.9% uptime SLA by Zyntaverse Technologies.`;
  const canonicalUrl = `https://www.zyntaverse.com/services/${service.id}`;

  return {
    title,
    description,
    keywords: [
      service.title,
      ...service.technologies,
      "Zyntaverse Technologies",
      "Software Development Mumbai",
      "Full-Stack Engineering Partner",
      "Enterprise Tech Agency",
    ],
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      type: "website",
      images: [
        {
          url: "/logo.png",
          width: 800,
          height: 800,
          alt: `${service.title} — Zyntaverse Technologies`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/logo.png"],
    },
  };
}

export default function ServicePage({ params }: ServicePageProps) {
  const service = servicesData.find((s) => s.id === params.slug);

  if (!service) {
    notFound();
  }

  const relatedServices = servicesData
    .filter((s) => s.id !== service.id)
    .slice(0, 3);

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        name: service.title,
        description: service.shortDescription,
        provider: {
          "@type": "ProfessionalService",
          name: "Zyntaverse Technologies",
          url: "https://www.zyntaverse.com",
          telephone: "+917992153750",
          email: "zyntaversetechnologies@gmail.com",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Mumbai",
            addressRegion: "Maharashtra",
            addressCountry: "IN",
          },
        },
        areaServed: ["India", "United States", "United Kingdom", "United Arab Emirates"],
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: `${service.title} Deliverables`,
          itemListElement: service.deliverables.map((item, idx) => ({
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: item,
            },
          })),
        },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://www.zyntaverse.com",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Services",
            item: "https://www.zyntaverse.com/#services",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: service.title,
            item: `https://www.zyntaverse.com/services/${service.id}`,
          },
        ],
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ServicePageClient service={service} relatedServices={relatedServices} />
    </>
  );
}

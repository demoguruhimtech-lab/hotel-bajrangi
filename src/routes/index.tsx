import { createFileRoute } from "@tanstack/react-router";
import { HotelPage } from "@/components/hotel/hotel-page";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Hotel Bajrangi — Pandukeshwar, Uttarakhand | Himalayan Stay" },
      {
        name: "description",
        content:
          "Hotel Bajrangi in Pandukeshwar, Uttarakhand — a comfortable, budget-friendly, smoke-free hotel on the Badrinath Road. A convenient base for Badrinath, Hemkund Sahib, and the Valley of Flowers. Complimentary breakfast, on-site restaurant, parking.",
      },
      { property: "og:title", content: "Hotel Bajrangi — Pandukeshwar, Uttarakhand" },
      {
        property: "og:description",
        content:
          "A peaceful, comfortable stay in the heart of the Himalayas. Hotel Bajrangi, Pandukeshwar — a convenient stop for pilgrims and travellers exploring Badrinath, Hemkund Sahib, and the Valley of Flowers.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Hotel",
          name: "Hotel Bajrangi",
          alternateName: "होटल बजरंगी",
          description:
            "A budget-friendly, smoke-free hotel in Pandukeshwar, Uttarakhand, along the Badrinath Road. A convenient base for pilgrims and travellers exploring Badrinath, Hemkund Sahib, and the Valley of Flowers.",
          telephone: "+917906355057",
          address: {
            "@type": "PostalAddress",
            streetAddress: "Pail Chak Bhyudar, Pandukeshwar",
            addressLocality: "Pandukeshwar",
            addressRegion: "Uttarakhand",
            postalCode: "246443",
            addressCountry: "IN",
          },
          amenityFeature: [
            { "@type": "LocationFeatureSpecification", name: "Complimentary Breakfast" },
            { "@type": "LocationFeatureSpecification", name: "On-site Restaurant" },
            { "@type": "LocationFeatureSpecification", name: "Room Service" },
            { "@type": "LocationFeatureSpecification", name: "Laundry Service" },
            { "@type": "LocationFeatureSpecification", name: "On-site Parking" },
            { "@type": "LocationFeatureSpecification", name: "Smoke-free Property" },
          ],
          hasMap:
            "https://www.google.com/maps/search/?api=1&query=Hotel+Bajrangi+Pandukeshwar+Uttarakhand",
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return <HotelPage />;
}

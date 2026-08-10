import { servicePages } from "@config/service-page-content";

const serviceIcons = {
  "dropshipping-supplier": "package",
  "3pl-fulfillment-services": "box",
  "pod-fulfillment": "printer",
  "private-label": "tag",
  "product-sourcing": "search",
  "automatic-order-fulfillment": "refresh",
  "china-fulfillment-center": "box",
};

// The overview, header dropdown and detail routes all use the same seven services.
export const serviceCatalog = servicePages.map((service) => ({
  id: service.slug,
  slug: service.slug,
  title: service.menuTitle,
  menuTitle: service.menuTitle,
  icon: serviceIcons[service.slug],
  image: service.image,
  summary: service.lead,
  points: service.heroPoints.slice(0, 2),
}));

export const serviceWorkflow = [
  ["01", "Share your requirements", "Send product links, destination markets, order volume and branding needs."],
  ["02", "Confirm the service scope", "We define sourcing, inspection, inventory, packing and delivery responsibilities."],
  ["03", "Prepare products and systems", "Samples, packaging, SKUs and the order handoff process are reviewed."],
  ["04", "Run daily fulfillment", "Orders are received, picked, checked, packed and dispatched through the agreed workflow."],
  ["05", "Track and improve", "Tracking is returned and recurring issues are reviewed as products and volume grow."],
];

export const serviceFaqs = [
  [
    "Which fulfillment services can I combine?",
    "You can start with sourcing or inspection only, or combine sourcing, warehousing, custom packaging, order fulfillment and tracked delivery into one operating scope.",
  ],
  [
    "Can you work with my existing suppliers?",
    "Yes. We can receive goods from an existing supplier and focus on inspection, storage, packing and shipping, subject to a clear handoff process.",
  ],
  [
    "Do you support low-volume stores?",
    "Suitability depends on product type, handling requirements and destination markets. Share your current volume and growth plan so we can recommend a practical starting model.",
  ],
  [
    "How is product quality checked?",
    "The inspection scope is agreed before operations begin. It may include quantity, variants, appearance, basic function, packaging and final order accuracy checks.",
  ],
  [
    "Can you use branded packaging?",
    "Yes. Options may include labels, cards, bags, boxes and inserts. Minimum quantities, production cost and lead time depend on the selected materials and supplier.",
  ],
  [
    "Which eCommerce platforms can be supported?",
    "We can plan order workflows for Shopify, WooCommerce, TikTok Shop, Amazon, Etsy and custom stores, including manual exports or structured integrations.",
  ],
];

export const supportedPlatforms = [
  "Shopify",
  "WooCommerce",
  "TikTok Shop",
  "Amazon",
  "Etsy",
  "Custom Stores",
];

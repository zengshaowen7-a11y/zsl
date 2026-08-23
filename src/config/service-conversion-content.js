const select = (name, label, options, required = true) => ({
  name,
  label,
  type: "select",
  options,
  required,
});

const input = (name, label, placeholder, type = "text", required = true) => ({
  name,
  label,
  type,
  placeholder,
  required,
});

const textarea = (name, label, placeholder, required = true) => ({
  name,
  label,
  type: "textarea",
  placeholder,
  required,
  wide: true,
});

export const serviceConversionContent = {
  "dropshipping-supplier": {
    form: {
      eyebrow: "DROPSHIPPING PROJECT REVIEW",
      title: "Plan your dropshipping workflow",
      lead: "Share the products, markets and current order routine so we can identify the right sourcing, packing and delivery scope.",
      fields: [
        input("product_link", "Product or supplier link", "Paste a product or supplier URL", "url"),
        select("daily_orders", "Current daily orders", ["Pre-launch / testing", "1–10 orders", "11–50 orders", "51–200 orders", "200+ orders"]),
        input("destination_markets", "Main destination markets", "e.g. United States, UK, Germany"),
        textarea("workflow_challenge", "What needs to improve?", "Tell us about supplier coordination, quality, packing, delivery or customer-service problems."),
      ],
    },
    caseStudy: {
      eyebrow: "REPRESENTATIVE DROPSHIPPING CASE",
      title: "Supplier chats, one workflow.",
      profile: "Independent accessories store serving North American and European customers",
      challenge: "Product, packing and shipping updates were split across chats, with no single order owner.",
      plan: ["Confirm product reference", "Set packing and shipping rules", "Return status and tracking"],
      evidence: ["Approved product reference", "Packing instruction", "Order and tracking record"],
      outcome: "One workflow shows the owner, checks and tracking for each order.",
    },
  },
  "3pl-fulfillment-services": {
    form: {
      eyebrow: "WAREHOUSE SCOPE REVIEW",
      title: "Estimate your 3PL scope",
      lead: "Share SKU counts, stored units and daily order flow so the warehouse receiving, storage and dispatch scope can be planned accurately.",
      fields: [
        select("sku_count", "Number of active SKUs", ["1–10 SKUs", "11–50 SKUs", "51–200 SKUs", "200+ SKUs"]),
        select("inventory_units", "Expected stored units", ["Under 500 units", "500–2,000 units", "2,001–10,000 units", "10,000+ units"]),
        select("daily_orders", "Average daily orders", ["Under 10 orders", "10–50 orders", "51–200 orders", "200+ orders"]),
        textarea("warehouse_requirements", "Warehouse requirements", "Describe bundles, inserts, packaging, storage conditions or inbound supplier schedules."),
      ],
    },
    caseStudy: {
      eyebrow: "REPRESENTATIVE 3PL CASE",
      title: "Stock to daily fulfillment.",
      profile: "Multi-SKU brand receiving stock from several suppliers",
      challenge: "Bulk cartons arrived in batches, but daily orders needed accurate picking and packing.",
      plan: ["Map inbound stock", "Separate brand materials", "Pick, pack and reconcile"],
      evidence: ["Inbound discrepancy record", "SKU inventory ledger", "Pick-and-pack instruction"],
      outcome: "Bulk stock turns into a clear daily fulfillment routine.",
    },
  },
  "pod-fulfillment": {
    form: {
      eyebrow: "POD PRODUCT REVIEW",
      title: "Review Your Custom Product Order",
      lead: "Share the base product, artwork readiness and expected order pattern so we can assess sampling, production and fulfillment feasibility.",
      fields: [
        select("pod_product", "Product type", ["Apparel", "Accessories", "Home and lifestyle", "Paper goods", "Other product"]),
        select("artwork_status", "Artwork status", ["Concept only", "Files in progress", "Print-ready files", "Approved physical sample"]),
        select("monthly_orders", "Expected monthly orders", ["Under 100", "100–500", "501–2,000", "2,000+"]),
        textarea("pod_requirements", "Artwork and production requirements", "Describe variants, print area, colors, packaging and destination markets."),
      ],
    },
    caseStudy: {
      eyebrow: "REPRESENTATIVE POD CASE",
      title: "Keep artwork, product variants and production approval connected.",
      profile: "Artist-led apparel store launching multiple designs across sizes and colors",
      challenge: "Each order had to match the correct blank product, artwork file and print placement before being packed for direct delivery.",
      plan: ["Approve the blank product and printable area", "Map artwork versions to customer-facing SKUs", "Use a physical sample as the repeat-production reference"],
      evidence: ["Artwork preflight sheet", "Variant mapping table", "Approved sample record"],
      outcome: "Production can follow a documented reference instead of interpreting artwork and variant requirements again for every order.",
    },
  },
  "private-label": {
    form: {
      eyebrow: "BRAND SCOPE REVIEW",
      title: "Plan your private-label launch",
      lead: "Tell us which product and brand touchpoints matter first so we can review MOQ, sampling, packaging and storage requirements.",
      fields: [
        input("product_link", "Product or sample link", "Paste a product reference URL", "url"),
        select("brand_scope", "Primary branding need", ["Product label", "Printed insert", "Custom mailer", "Custom box", "Product customization"]),
        select("launch_quantity", "Expected first quantity", ["Under 100 units", "100–500 units", "501–2,000 units", "2,000+ units"]),
        textarea("brand_requirements", "Brand requirements", "Describe materials, colors, logo placement, unboxing goals and target launch timing."),
      ],
    },
    caseStudy: {
      eyebrow: "REPRESENTATIVE PRIVATE-LABEL CASE",
      title: "Phase the launch.",
      profile: "Growing personal-care accessories brand preparing its first branded inventory",
      challenge: "The brand wanted a stronger unboxing experience but needed to balance custom-material minimums, storage space and launch timing.",
      plan: ["Rank packaging elements first", "Approve labels before larger packaging commitments", "Connect stored materials to the daily packing rule"],
      evidence: ["Brand component shortlist", "Physical packaging sample", "Order-level packing guide"],
      outcome: "Brand decisions become a phased operating plan with visible MOQ and warehouse implications.",
    },
  },
  "product-sourcing": {
    form: {
      eyebrow: "SOURCING BRIEF",
      title: "Start a supplier search",
      lead: "Give us one clear product brief so supplier quotations, samples and fulfillment implications can be compared on the same basis.",
      fields: [
        input("product_link", "Product reference", "Paste a product link or specification URL", "url"),
        input("target_price", "Target unit cost", "e.g. USD 8–12", "text", false),
        select("order_quantity", "Expected order quantity", ["Under 100 units", "100–500 units", "501–2,000 units", "2,000+ units"]),
        textarea("product_specification", "Product specification", "Describe material, size, variants, packaging, target market and any non-negotiable requirements."),
      ],
    },
    caseStudy: {
      eyebrow: "REPRESENTATIVE SOURCING CASE",
      title: "Price is not the quote.",
      profile: "Founder validating a new home-fitness accessory for an overseas store",
      challenge: "Initial quotations described different materials, packaging and minimum quantities, making the prices impossible to compare fairly.",
      plan: ["Write one supplier-ready brief", "Normalize quotation terms", "Review samples before production"],
      evidence: ["Comparable quotation sheet", "Sample review notes", "Approved specification"],
      outcome: "The supplier decision includes product quality, production terms, packaging and delivery implications rather than factory price alone.",
    },
  },
  "automatic-order-fulfillment": {
    form: {
      eyebrow: "ORDER-FLOW REVIEW",
      title: "Map your order lane",
      lead: "Tell us where orders start, what data is missing today and how tracking should return after dispatch.",
      fields: [
        select("store_platform", "Store platform", ["Shopify", "WooCommerce", "TikTok Shop", "Amazon", "Etsy", "Custom store"]),
        select("daily_orders", "Average daily orders", ["Under 10 orders", "10–50 orders", "51–200 orders", "200+ orders"]),
        select("current_handoff", "Current order handoff", ["Manual messages", "Spreadsheet or CSV", "App or connector", "Custom API"]),
        textarea("automation_challenge", "Main automation challenge", "Describe SKU mapping, address validation, bundles, inventory, tracking or exception-handling needs."),
      ],
    },
    caseStudy: {
      eyebrow: "AUTOMATION CASE",
      title: "Normal orders need a lane.",
      profile: "Shopify store replacing spreadsheet warehouse handoffs",
      challenge: "Most orders could move quickly, but SKU mismatches, address gaps and bundle notes needed a controlled pause before fulfillment.",
      plan: ["Map SKUs to warehouse records", "Split exception reasons early", "Return tracking through one handoff"],
      evidence: ["SKU map", "Exception list", "Test-order results"],
      outcome: "Repeatable orders move through a clean route while exceptions pause with enough context for a human decision.",
    },
  },
  "china-fulfillment-center": {
    form: {
      eyebrow: "CHINA WAREHOUSE REVIEW",
      title: "Plan your China warehouse flow",
      lead: "Share your supplier, SKU and export profile so receiving, QC, storage and dispatch can be mapped before the first inbound delivery.",
      fields: [
        select("supplier_count", "Active suppliers", ["1 supplier", "2–5 suppliers", "6–15 suppliers", "15+ suppliers"]),
        select("sku_count", "Number of SKUs", ["1–10 SKUs", "11–50 SKUs", "51–200 SKUs", "200+ SKUs"]),
        input("destination_markets", "Main destination markets", "e.g. US, UK and EU"),
        textarea("center_requirements", "Receiving and fulfillment requirements", "Describe inbound frequency, storage, QC, kitting, packaging and dispatch needs."),
      ],
    },
    caseStudy: {
      eyebrow: "REPRESENTATIVE WAREHOUSE CASE",
      title: "Move factory batches into export-ready orders.",
      profile: "Brand consolidating products, inserts and packaging in one China warehouse",
      challenge: "Factory goods, brand materials and customer orders arrived on different schedules and still had to leave through one clean dispatch route.",
      plan: ["Map every inbound delivery", "Separate QC, storage and packing lanes", "Release finished parcels by route"],
      evidence: ["Inbound map", "QC record", "Dispatch lane"],
      outcome: "The warehouse turns supplier output into an export-ready order flow with fewer handoff mistakes.",
    },
  },
  "quality-control-inspection": {
    form: {
      eyebrow: "INSPECTION BRIEF",
      title: "Define the release plan",
      lead: "Tell us what is being produced, when it should be inspected and what failures would matter most.",
      fields: [
        input("product_reference", "Product reference", "Paste a product or specification URL", "url"),
        select("inspection_stage", "Inspection stage", ["Pre-production", "During production", "Pre-shipment", "Inbound warehouse check", "Final order check"]),
        input("batch_quantity", "Batch quantity", "e.g. 1,500 units", "text"),
        textarea("quality_risks", "Important quality risks", "Describe dimensions, appearance, function, labeling, packaging or known defect concerns."),
      ],
    },
    caseStudy: {
      eyebrow: "REPRESENTATIVE QUALITY-CONTROL CASE",
      title: "Make the release decision easy to read.",
      profile: "Accessory batch awaiting pre-shipment approval",
      challenge: "A visual check alone would not cover fit, labeling, quantity and packaging risks that could create customer returns.",
      plan: ["Translate the approved specification into checkpoints", "Record findings and issue photos", "Separate accepted, rework and held inventory"],
      evidence: ["Inspection checklist", "Finding and photo record", "Release decision"],
      outcome: "The team gets enough evidence to approve, rework or hold the affected inventory before fulfillment.",
    },
  },
};

export const serviceComparison = [
  ["dropshipping-supplier", "Dropshipping Supplier", "Stores needing one partner behind each direct-to-customer order", "Flexible / optional", "Available", "Order-level workflow"],
  ["3pl-fulfillment-services", "3PL Fulfillment", "Brands holding stock and shipping repeat orders from multiple SKUs", "Core requirement", "Available", "Receiving + storage plan"],
  ["pod-fulfillment", "POD Fulfillment", "Stores producing customized items after an order is placed", "Blank stock or on demand", "Built into product", "Artwork + sample"],
  ["private-label", "Private Label", "Brands adding labels, inserts, packaging or product customization", "Brand materials stored", "Primary focus", "Product + brand brief"],
  ["product-sourcing", "Product Sourcing", "Teams comparing suppliers, specifications, samples and commercial terms", "Not required to begin", "Planned if needed", "Product specification"],
  ["automatic-order-fulfillment", "Order Automation", "Growing stores replacing manual order and tracking handoffs", "Connected to warehouse", "Rule-based", "Platform + SKU map"],
  ["china-fulfillment-center", "Fulfillment Center", "Brands consolidating factory goods before global order dispatch", "Core requirement", "Available", "Inbound + SKU plan"],
  ["quality-control-inspection", "Quality Control", "Teams needing evidence before approving or releasing products", "Batch or order level", "Checked against scope", "Specification + risks"],
];

export function getServiceConversion(slug) {
  return serviceConversionContent[slug] ?? serviceConversionContent["dropshipping-supplier"];
}

export const qcOutcomeDetails = [
{
  checks: "Approved sample · specifications",
  output: "Inspection baseline",
},
{
  checks: "Quantity · appearance · function",
  output: "Exception log",
},
{
  checks: "Photos · notes · measurements",
  output: "Evidence trail",
},
{
  checks: "Pass · rework · hold",
  output: "Release decision",
},
];

export const qcProcessOutputs = [
"Inspection rules",
"Approved reference",
"Finding record",
"Evidence report",
"Release call",
];

export const proofContent = {
"product-sourcing": {
  eyebrow: "EXAMPLE SUPPLIER COMPARISON",
  title: "Compare supplier offers.",
  image: "/images/generated/product-sourcing-hero.webp",
  columns: ["Supplier", "Unit price", "MOQ", "Lead time"],
  rows: [
    ["Supplier A", "$8.40", "300", "18 days"],
    ["Supplier B", "$7.95", "500", "24 days"],
    ["Supplier C", "$9.10", "100", "14 days"],
  ],
  note: "Illustrative comparison. Actual quotations depend on specification and supplier review.",
},
"quality-control-inspection": {
  eyebrow: "EXAMPLE QC RELEASE RECORD",
  title: "Make the release call.",
  image: "/images/generated/jw-qc-inspection-v3.png",
  columns: ["Checkpoint", "Checked", "Issues", "Status"],
  rows: [
    ["SKU and variant", "50", "0", "Passed"],
    ["Appearance", "50", "2", "Review"],
    ["Packaging", "50", "0", "Passed"],
  ],
  note: "Example interface showing how findings can be organized before approval.",
},
"3pl-fulfillment-services": {
  eyebrow: "EXAMPLE INVENTORY VIEW",
  title: "Inventory stays visible.",
  image: "/images/generated/3pl-fulfillment-hero.webp",
  columns: ["SKU", "Received", "Available", "Status"],
  rows: [
    ["JW-BLK-S", "500", "472", "Available"],
    ["JW-BLK-M", "500", "86", "Low stock"],
    ["JW-BLK-L", "300", "0", "Reorder"],
  ],
  note: "Illustrative inventory view — final workflow depends on warehouse scope.",
},
"pod-fulfillment": {
  eyebrow: "POD APPROVAL GATES",
  title: "Keep artwork, variants and physical approval connected.",
  image: "/images/generated/jw-pod-production-v3.png",
  columns: ["Gate", "Required input", "Owner", "Status"],
  rows: [
    ["Artwork", "Print-ready file", "Brand", "Approved"],
    ["Sample", "Physical reference", "JW QC", "Review"],
    ["Production", "SKU mapping", "Workshop", "Waiting"],
  ],
  note: "Example approval path for a print-on-demand product.",
},
"private-label": {
  eyebrow: "BRAND SCOPE PLANNER",
  title: "Choose brand elements by impact, MOQ and timing.",
  image: "/images/brand-showcase/paper-packaging-detail.jpg",
  columns: ["Brand element", "Typical input", "MOQ impact", "Stage"],
  rows: [
    ["Printed insert", "Artwork", "Low", "Start"],
    ["Custom mailer", "Size + print", "Medium", "Scale"],
    ["Product label", "Product spec", "Varies", "Brand"],
  ],
  note: "MOQ and timing are confirmed after material and supplier review.",
},
"automatic-order-fulfillment": {
  eyebrow: "ORDER CONTROL LOG",
  title: "Orders ready to move.",
  image: "/images/generated/automatic-fulfillment-hero.webp",
  columns: ["Signal", "Status", "Action", "Output"],
  rows: [
    ["New order", "Mapped", "Release", "Ready"],
    ["Address", "Missing", "Hold", "Review"],
    ["Shipped", "Valid", "Sync", "Tracking"],
  ],
  summary: [
    ["Fast lane", "Orders with mapped SKUs and complete fields can move without manual chasing."],
    ["Hold lane", "Orders with missing details stay visible before they reach packing."],
    ["Sync lane", "Released orders keep tracking and store status aligned after handoff."],
  ],
  note: "Example control log. Connection methods depend on the store platform.",
},
"china-fulfillment-center": {
  eyebrow: "WAREHOUSE CONTROL ZONES",
  title: "Map each handoff before it ships.",
  image: "/images/evidence/warehouse-walkthrough-aisle.jpg",
  columns: ["Zone", "Activity", "Control", "Output"],
  rows: [
    ["Receiving", "Register goods", "Inbound plan", "Receipt"],
    ["QC", "Inspect batch", "Checklist", "Release"],
    ["Dispatch", "Final scan", "Order rule", "Tracking"],
  ],
  note: "The operating layout is configured around product and warehouse requirements.",
},
"dropshipping-supplier": {
  eyebrow: "ORDER-LEVEL CONTROL",
  title: "Keep product, packing and shipment context together.",
  image: "/images/generated/dropshipping-supplier-hero.webp",
  columns: ["Stage", "Team action", "Control", "Update"],
  rows: [
    ["Source", "Confirm supplier", "Product brief", "Quote"],
    ["Fulfill", "Check and pack", "Order rule", "Ready"],
    ["Ship", "Carrier handoff", "Final scan", "Tracking"],
  ],
  summary: [
    [
      "Supplier record",
      "Keep the quote, product reference and contact context in one order view.",
    ],
    [
      "Packing rule",
      "Store labels, inserts and parcel notes beside the SKU details.",
    ],
    [
      "Shipment handoff",
      "Track the final carrier scan and status update together.",
    ],
  ],
  note: "Example operating record for a direct-to-customer order.",
},
};

export const processIntroBySlug = {
  "dropshipping-supplier": {
    title: "What we align before daily orders go live.",
    lead: "We keep the supplier record, packing rule and shipment handoff in one operating view so the workflow stays easy to follow.",
    points: [
      [
        "Supplier record",
        "Quote, product reference and contact details stay together.",
      ],
      ["Packing rule", "Labels, inserts and parcel notes follow the SKU."],
      [
        "Shipment handoff",
        "Final carrier scan and tracking status stay visible.",
      ],
    ],
  },
  "automatic-order-fulfillment": {
    leftEyebrow: "AUTOMATION CASE",
    leftTitle: "Normal orders need a lane.",
    leftLead: "Shopify store replacing spreadsheet warehouse handoffs",
    title: "Map your order lane.",
    lead: "Tell us where orders start, what data is missing today and how tracking should return after dispatch.",
    points: [
      ["01", "Map SKUs to warehouse records"],
      ["02", "Split exception reasons early"],
      ["03", "Return tracking through one handoff"],
    ],
    noteTitle: "What helps us map the lane",
    noteLead:
      "Store fields, SKU records and hold rules make the automatic route easier to test before launch.",
  },
};

export const dropshipProcessStageLabels = ["Audit", "Supplier", "Rules", "Test", "Live"];

export const fitIntroBySlug = {
  "china-fulfillment-center": {
    title: "Built for inbound stock and export.",
    lead: "One warehouse flow for goods, brand materials and customer orders.",
    tag: "WAREHOUSE FIT",
    asideTitle: "BEST FIT",
    asideLead: "When every handoff needs a place, a lane and a clear owner.",
  },
  "product-sourcing": {
    title: "Built for supplier decisions.",
    lead: "Each pass removes suppliers that cannot match the product brief, commercial terms or fulfillment requirements.",
    noteTitle: "WHAT CHANGES THE QUOTE",
    noteLead:
      "Use one product brief so price, MOQ, sample notes and lead time stay on the same basis.",
  },
  "automatic-order-fulfillment": {
    title: "Clean orders take the fast lane.",
    lead: "Normal orders move in one direction. Exceptions split out early so they do not block or corrupt the daily flow.",
    laneTags: ["Mapped", "Held", "Synced"],
  },
  "quality-control-inspection": {
    title: "Built for batches that need proof before release.",
    lead: "Use this service when the warehouse needs a documented pass, review or hold decision before inventory moves on.",
    tag: "INSPECTION FIT",
    asideTitle: "BEST FIT",
    asideLead: "When product risk needs a visible standard and a clear next step.",
  },
};

export const quoteDetailBySlug = {
  "dropshipping-supplier": {
    checklist: [
      "Product link, supplier or product reference",
      "Target markets and daily order flow",
      "Packing, branding and shipping rules",
    ],
    note: {
      title: "What we review first",
      text: "We use your product and shipping context to shape the sourcing, packing and delivery scope before the quote starts.",
    },
    titleClass: "sdr-dropshipping-quote-title",
  },
  "3pl-fulfillment-services": {
    checklist: [
      "SKU sheet or store catalog",
      "Expected inbound units and supplier sources",
      "Storage, bundle and packing rules",
    ],
    note: {
      title: "What helps us estimate faster",
      text: "If you already have SKU counts, carton totals or supplier schedules, we can scope receiving, storage and dispatch more accurately.",
    },
  },
  "pod-fulfillment": {
    checklist: [
      "Blank product or product reference",
      "Artwork status and print area",
      "Expected volume and destination markets",
    ],
    note: {
      title: "What helps us scope POD faster",
      text: "If artwork is still in progress, we can still review the blank product, sampling path, variant mix and production steps.",
    },
    titleClass: "sdr-pod-quote-title",
    titleStyle: {
      width: "max-content",
      maxWidth: "none",
      fontSize: "22px",
      lineHeight: "1.05",
      whiteSpace: "nowrap",
      textWrap: "nowrap",
      letterSpacing: "-0.02em",
    },
  },
  "private-label": {
    checklist: [
      "Product or sample link",
      "Brand elements to launch first",
      "Expected launch quantity and timing",
    ],
    note: {
      title: "What helps us scope the brand plan",
      text: "Share the product reference, the brand touchpoints that matter most and the first production target so MOQ and packaging decisions stay practical.",
    },
    titleClass: "sdr-compact-quote-title",
  },
  "product-sourcing": {
    checklist: [
      "Product reference or specification",
      "Target unit cost and order quantity",
      "Materials, packaging and must-have details",
    ],
    note: {
      title: "What helps us compare suppliers faster",
      text: "A clear brief makes quotation, sampling and shipping assumptions easier to compare on the same basis.",
    },
    titleClass: "sdr-compact-quote-title",
  },
  "automatic-order-fulfillment": {
    checklist: [
      "Store platform and order source",
      "SKU map or product catalog",
      "Hold reasons and tracking method",
    ],
    note: {
      title: "What helps us map the lane",
      text: "Store fields, SKU records and hold rules make the automatic route easier to test before launch.",
    },
    titleClass: "sdr-compact-quote-title",
  },
  "china-fulfillment-center": {
    checklist: [
      "Supplier count or inbound sources",
      "SKU count and carton schedule",
      "Storage, QC and dispatch requirements",
    ],
    note: {
      title: "What helps us plan the warehouse layout",
      text: "Inbound flow, product mix and dispatch expectations shape how receiving, inspection and storage should be arranged.",
    },
    titleClass: "sdr-compact-quote-title",
  },
  "quality-control-inspection": {
    checklist: [
      "Product reference or specification",
      "Inspection stage and batch size",
      "Critical defect risks and acceptance standard",
    ],
    note: {
      title: "What helps us scope inspection faster",
      text: "The best QC plan starts with the product standard, the stage you want checked and the defects that matter most to customers.",
    },
    titleClass: "sdr-compact-quote-title",
  },
};

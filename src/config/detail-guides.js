const workflowFaq = [
  ["How long does setup take?", "Timing depends on product readiness, supplier response, sampling and the services included. The first review identifies the practical sequence."],
  ["Can we start with one service?", "Yes. Many brands begin with sourcing, quality control or fulfillment and add other stages later."],
  ["Who approves product and packaging decisions?", "Your team approves commercial and brand decisions; JW coordinates the physical checks and operating handoffs."],
];

export const detailGuides = {
  "A CLEAR, HUMAN-LED PROCESS": {
    kicker: "PREPARATION & OWNERSHIP", title: "The right information keeps every stage moving.", text: "A simple product brief gives sourcing, QC, packing and delivery teams one shared reference.",
    leftLabel: "WHAT TO PREPARE", left: [
      { title: "Product reference", text: "A product link, sample, photo or specification." },
      { title: "Target market", text: "Main countries, customer expectations and required delivery speed." },
      { title: "Expected volume", text: "Testing quantity, daily orders and likely peak periods." },
      { title: "Brand requirements", text: "Labels, inserts, packaging or product customization priorities." },
    ],
    rightLabel: "WHAT YOU RECEIVE", right: [
      { title: "Recommended scope", text: "The smallest useful combination of services for the current stage." },
      { title: "Product checkpoints", text: "A practical definition of what should be checked and approved." },
      { title: "Fulfillment rules", text: "SKU, packing, address, shipping and tracking handoffs." },
      { title: "Clear next action", text: "Sample, quotation, inbound plan or test-order recommendation." },
    ], faq: workflowFaq,
  },
  "Why choose JW Dropshipping?": {
    kicker: "HOW WE WORK DIFFERENTLY", title: "Support built around the physical order, not generic tickets.", text: "Commercial decisions and warehouse actions stay connected through one operating context.",
    leftLabel: "OUR PRINCIPLES", left: [
      { title: "Product before promises", text: "We review the actual item, risks and customer expectation first." },
      { title: "Evidence before release", text: "Important exceptions include photos or records where relevant." },
      { title: "One accountable flow", text: "Supplier, QC, warehouse and shipping ownership is visible." },
      { title: "Flexible starting scope", text: "Begin with what matters now and expand when the store is ready." },
    ],
    rightLabel: "WHAT THIS MEANS FOR YOU", right: [
      { title: "Fewer handoffs", text: "Less repeated explanation between separate agents and suppliers." },
      { title: "Earlier decisions", text: "Product and packing issues are raised before customer dispatch." },
      { title: "More consistent parcels", text: "Approved product and packing rules guide repeat work." },
      { title: "Clearer customer support", text: "Order and tracking context is easier to follow when questions arise." },
    ], faq: workflowFaq,
  },
  "HELP CENTRE": {
    kicker: "MORE COMMON QUESTIONS", title: "Understand scope, cost inputs and next steps.", text: "The exact answer depends on product, quantity, packaging, storage and destination.",
    leftLabel: "PRODUCT & SUPPLIER", left: [
      { title: "Can JW find suppliers?", text: "Yes. Supplier options can be compared against one product brief." },
      { title: "Can JW receive existing stock?", text: "Yes, with a clear inbound plan and SKU information." },
      { title: "Are samples supported?", text: "Physical samples can be coordinated before repeat production." },
      { title: "Can products be customized?", text: "Feasibility depends on material, process, MOQ and lead time." },
    ],
    rightLabel: "FULFILLMENT & SHIPPING", right: [
      { title: "Can orders sync automatically?", text: "Major platforms and structured order handoffs can be reviewed." },
      { title: "Is tracking returned?", text: "The tracking handoff is agreed during workflow setup." },
      { title: "Can JW hold inventory?", text: "Storage scope depends on SKU profile, quantity and handling needs." },
      { title: "Can you ship worldwide?", text: "Available routes depend on destination, product and parcel profile." },
    ], faq: workflowFaq,
  },
};

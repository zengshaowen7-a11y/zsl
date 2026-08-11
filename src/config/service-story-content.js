const serviceStories = {
  "dropshipping-supplier": {
    style: "journey",
    eyebrow: "ONE PARTNER BEHIND EVERY ORDER",
    badge: "Supplier-to-customer control",
    stages: [
      ["Supplier", "Product and availability confirmed"],
      ["JW Dropshipping", "Inspect, pack and dispatch"],
      ["Customer", "Tracked doorstep delivery"],
    ],
    feature: {
      eyebrow: "DESIGNED FOR REPEAT ORDERS",
      badge: "Tracked international delivery",
    },
  },
  "3pl-fulfillment-services": {
    style: "warehouse",
    eyebrow: "A WAREHOUSE RHYTHM BUILT TO SCALE",
    badge: "Inventory movement log",
    stages: [
      ["Receive", "Count and register incoming stock"],
      ["Store", "Organize inventory by SKU"],
      ["Pick", "Prepare the correct items"],
      ["Dispatch", "Ship and return tracking"],
    ],
    feature: {
      eyebrow: "FROM BULK RECEIVING TO SINGLE ORDERS",
      badge: "SKU-level inventory control",
    },
  },
  "pod-fulfillment": {
    style: "studio",
    eyebrow: "FROM ARTWORK TO A FINISHED PRODUCT",
    badge: "Made after each order",
    stages: [
      ["Artwork", "Check size, color and print area"],
      ["Sample", "Approve a physical result"],
      ["Produce", "Print only after the order"],
      ["Ship", "Pack and deliver directly"],
    ],
    feature: {
      eyebrow: "QUALITY BEFORE THE FIRST LIVE ORDER",
      badge: "Artwork-approved production",
    },
  },
  "private-label": {
    style: "brand",
    eyebrow: "MAKE EVERY DELIVERY FEEL LIKE YOUR BRAND",
    badge: "Brand-ready order experience",
    stages: [
      ["Product", "Confirm the private-label specification"],
      ["Packaging", "Apply your visual system"],
      ["Insert", "Add the right customer message"],
      ["Unbox", "Deliver a consistent brand moment"],
    ],
    feature: {
      eyebrow: "TURN PACKAGING INTO RECOGNITION",
      badge: "Brand details checked before packing",
    },
  },
  "product-sourcing": {
    style: "compare",
    eyebrow: "MAKE SUPPLIER DECISIONS WITH EVIDENCE",
    badge: "Comparable supplier shortlist",
    stages: [
      ["Brief", "Define product, target cost and market"],
      ["Shortlist", "Compare realistic supplier options"],
      ["Sample", "Review quality before commitment"],
      ["Approve", "Lock specification and next steps"],
    ],
    feature: {
      eyebrow: "SOURCE FOR THE FULL LANDED COST",
      badge: "Samples compared before production",
    },
  },
  "automatic-order-fulfillment": {
    style: "data",
    eyebrow: "ONE CONNECTED ORDER DATA FLOW",
    badge: "Order and tracking sync",
    stages: [
      ["Store", "New paid order received"],
      ["Validate", "SKU and address checked"],
      ["Warehouse", "Pick-and-pack task released"],
      ["Tracking", "Status returned to the store"],
    ],
    feature: {
      eyebrow: "AUTOMATION WITH HUMAN OVERSIGHT",
      badge: "Exceptions remain visible",
    },
  },
  "china-fulfillment-center": {
    style: "zones",
    eyebrow: "A CLEAR PLACE FOR EVERY HANDOFF",
    badge: "Four controlled operating zones",
    stages: [
      ["Receiving", "Register factory deliveries"],
      ["QC", "Check products before storage"],
      ["Storage", "Maintain SKU-level visibility"],
      ["Dispatch", "Prepare tracked outbound parcels"],
    ],
    feature: {
      eyebrow: "ONE CONTROL POINT BEFORE EXPORT",
      badge: "Final parcel check before handoff",
    },
  },
  "quality-control-inspection": {
    style: "report",
    eyebrow: "INSPECTION THAT PRODUCES USEFUL EVIDENCE",
    badge: "Documented release decision",
    stages: [
      ["Standard", "Agree what must be checked"],
      ["Inspect", "Test the relevant risk points"],
      ["Evidence", "Record results and issue photos"],
      ["Release", "Approve, rework or hold the batch"],
    ],
    feature: {
      eyebrow: "DECISIONS BACKED BY INSPECTION RECORDS",
      badge: "Evidence attached to every finding",
    },
  },
};

export function getServiceStory(slug) {
  return serviceStories[slug] ?? serviceStories["dropshipping-supplier"];
}

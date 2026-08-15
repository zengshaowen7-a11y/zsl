import Image from "next/image";
import Link from "next/link";
import {
  FiArrowRight,
  FiCheck,
  FiCheckCircle,
  FiClipboard,
  FiPackage,
  FiSearch,
  FiSend,
  FiShield,
  FiTruck,
} from "react-icons/fi";

const startingDetails = ["Product or supplier link", "Main destination markets", "Expected order volume", "Branding or QC requirements"];

const stages = [
  {
    number: "01", title: "Share your product", kicker: "DISCOVERY", Icon: FiSend,
    image: "/images/generated/jw-account-support-v3.png",
    intro: "Send one clear product reference so the first conversation stays focused on your actual store and customer promise.",
    provide: "Product link, target market, expected volume and the problem you want to solve.",
    handle: "Review product feasibility, service scope, destination requirements and missing information.",
    receive: "A focused product brief and a clear recommendation for the next step.",
  },
  {
    number: "02", title: "Source and quote", kicker: "SUPPLIER REVIEW", Icon: FiSearch,
    image: "/images/services/product-sourcing.webp",
    intro: "Suitable supplier offers are compared on the same specification, not only on the lowest unit price.",
    provide: "Target cost, material or feature requirements, quantity and desired launch timing.",
    handle: "Compare suppliers, MOQ, lead time, customization, packaging and estimated fulfillment implications.",
    receive: "Comparable options with the trade-offs needed to make a supplier decision.",
  },
  {
    number: "03", title: "Sample and approve", kicker: "QUALITY STANDARD", Icon: FiShield,
    image: "/images/generated/jw-qc-inspection-v3.png",
    intro: "The physical product and its inspection scope are agreed before repeat purchasing or daily fulfillment begins.",
    provide: "Feedback on the sample, acceptable tolerances and any non-negotiable brand details.",
    handle: "Coordinate samples, review visible quality, confirm variants, packaging and QC checkpoints.",
    receive: "An approved reference and a documented basis for future product checks.",
  },
  {
    number: "04", title: "Set up fulfillment", kicker: "OPERATION PREPARATION", Icon: FiPackage,
    image: "/images/generated/jw-branded-packing-v3.png",
    intro: "Inventory, SKUs, packaging materials and order rules are connected before live customer volume is released.",
    provide: "Store SKU data, packing instructions, branding files and order handoff preference.",
    handle: "Receive stock, map variants, prepare storage, document packing rules and run test orders.",
    receive: "A tested order workflow ready for repeat picking, checking and packing.",
  },
  {
    number: "05", title: "Ship and sync tracking", kicker: "DAILY OPERATION", Icon: FiTruck,
    image: "/images/generated/jw-dispatch-scan-v3.png",
    intro: "Approved orders move through dispatch while shipment status and exceptions remain visible to your team.",
    provide: "Customer orders, addresses and the agreed shipping or service-level rules.",
    handle: "Pick, final-check, pack, label, dispatch and separate orders that require a decision.",
    receive: "Shipment confirmation, carrier details and tracking through the agreed handoff.",
  },
];

const checkpoints = [
  ["Before purchasing", "Supplier terms, specification and sample plan confirmed."],
  ["Before receiving stock", "SKU, quantity, packaging and inbound expectations documented."],
  ["Before dispatch", "Product, variant, parcel and label checked against the order."],
];

const faqs = [
  ["How long does setup take?", "Timing depends on the product, sample work, packaging and stock readiness. After the first review, we identify the stages that apply and the dependencies that control launch timing."],
  ["Can I start before my store has daily orders?", "Yes. Product sourcing, supplier comparison and samples can begin before launch. The fulfillment setup can then be prepared when products and expected order flow are clearer."],
  ["Can JW work with my existing supplier?", "Yes. Your supplier can send inventory to the JW warehouse while we focus on receiving, quality checks, storage, packing and global dispatch."],
  ["What happens when a quality issue is found?", "Affected goods or orders can be held, documented and shared for your decision. The exact inspection and approval process is agreed before operations begin."],
  ["How do orders and tracking move between our teams?", "The handoff may use a supported store workflow, structured order file or another agreed method. SKU mapping and exception rules are confirmed during setup."],
];

export default function HowItWorksRedesign() {
  return (
    <main className="hiw-page">
      <section className="hiw-hero">
        <div className="hiw-hero-copy">
          <p className="hiw-kicker">HOW JW DROPSHIPPING WORKS</p>
          <h1>From one product link to tracked delivery.</h1>
          <p>Five visible stages connect sourcing, approval, fulfillment and shipping, with a clear owner and output at every handoff.</p>
          <div className="hiw-actions">
            <Link href="/contact" className="hiw-button hiw-button-primary">Start with a Product Link <FiArrowRight /></Link>
            <a href="#five-stages" className="hiw-button hiw-button-ghost">See the Five Stages</a>
          </div>
          <ul><li><FiCheck /> Clear approval points</li><li><FiCheck /> One dedicated contact</li><li><FiCheck /> Tracking returned</li></ul>
        </div>
        <div className="hiw-hero-media"><Image src="/images/generated/jw-branded-packing-v3.png" alt="JW fulfillment team preparing customer orders" fill priority sizes="(max-width: 767px) 100vw, 52vw" /></div>
      </section>

      <section className="hiw-start">
        <div className="hiw-container hiw-start-grid">
          <div><p className="hiw-kicker">WHAT TO SEND FIRST</p><h2>You do not need a complete specification to begin.</h2></div>
          <ul>{startingDetails.map((item, index) => <li key={item}><span>{String(index + 1).padStart(2, "0")}</span>{item}</li>)}</ul>
        </div>
      </section>

      <section className="hiw-stages" id="five-stages">
        <div className="hiw-container">
          <header className="hiw-heading"><div><p className="hiw-kicker">THE COMPLETE ORDER JOURNEY</p><h2>Know what happens, who acts and what comes next.</h2></div><p>The workflow is fixed enough to stay clear and flexible enough to match your product and current stage.</p></header>
          <div className="hiw-stage-list">
            {stages.map(({ number, title, kicker, Icon, image, intro, provide, handle, receive }) => (
              <article className="hiw-stage" key={number}>
                <div className="hiw-stage-number"><span>{number}</span><Icon /></div>
                <div className="hiw-stage-content">
                  <p className="hiw-kicker">{kicker}</p><h3>{title}</h3><p className="hiw-stage-intro">{intro}</p>
                  <dl><div><dt>You provide</dt><dd>{provide}</dd></div><div><dt>JW handles</dt><dd>{handle}</dd></div><div><dt>You receive</dt><dd>{receive}</dd></div></dl>
                </div>
                <div className="hiw-stage-media"><Image src={image} alt="" fill sizes="(max-width: 800px) 100vw, 34vw" /></div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="hiw-approval">
        <div className="hiw-container hiw-approval-grid">
          <div><p className="hiw-kicker">APPROVAL BEFORE VOLUME</p><h2>Three checkpoints protect the next stage.</h2><p>Important questions are resolved before they become repeat production, inventory or customer-service problems.</p></div>
          <ol>{checkpoints.map(([title, copy], index) => <li key={title}><span>{String(index + 1).padStart(2, "0")}</span><div><h3>{title}</h3><p>{copy}</p></div><FiCheckCircle /></li>)}</ol>
        </div>
      </section>

      <section className="hiw-tracks">
        <div className="hiw-container">
          <header className="hiw-heading"><div><p className="hiw-kicker">START AT YOUR CURRENT STAGE</p><h2>The process adapts without becoming unclear.</h2></div><p>You can enter with a product idea, an existing supplier or inventory already ready to ship.</p></header>
          <div className="hiw-track-grid">
            <article><FiSearch /><p className="hiw-kicker">TESTING A PRODUCT</p><h3>Begin with sourcing and samples.</h3><p>Use stages 01–03 to compare suppliers and approve the product before deciding how much stock or fulfillment support you need.</p><Link href="/services/product-sourcing">Explore Product Sourcing <FiArrowRight /></Link></article>
            <article><FiClipboard /><p className="hiw-kicker">EXISTING SUPPLIER</p><h3>Begin with receiving and QC.</h3><p>Your current factory can send goods to JW for inspection, storage, branded packing and order-level fulfillment.</p><Link href="/services/quality-control-inspection">Explore Quality Control <FiArrowRight /></Link></article>
            <article><FiTruck /><p className="hiw-kicker">READY TO SCALE</p><h3>Connect daily orders and tracking.</h3><p>Map SKUs, packing rules and exceptions so repeat orders can move through one structured warehouse workflow.</p><Link href="/services/automatic-order-fulfillment">Explore Order Automation <FiArrowRight /></Link></article>
          </div>
        </div>
      </section>

      <section className="hiw-exceptions">
        <div className="hiw-container hiw-exception-grid">
          <div className="hiw-exception-media"><Image src="/images/generated/jw-qc-inspection-v3.png" alt="Product issue being checked before approval" fill sizes="(max-width: 850px) 100vw, 48vw" /></div>
          <div><p className="hiw-kicker">WHEN SOMETHING DOES NOT MATCH</p><h2>Exceptions pause with context, not confusion.</h2><p>Quality issues, missing stock, unmapped SKUs or unusual customer requests are separated from normal orders before they create a fulfillment mistake.</p><ul><li><FiShield /> Affected goods or orders are identified</li><li><FiClipboard /> Evidence and the decision required are shared</li><li><FiCheckCircle /> Work continues after approval or correction</li></ul></div>
        </div>
      </section>

      <section className="hiw-faq">
        <div className="hiw-container hiw-faq-grid">
          <div><p className="hiw-kicker">BEFORE YOU START</p><h2>Common process questions.</h2><p>Details vary by product, but the decision points should always stay visible.</p></div>
          <div className="hiw-accordion">{faqs.map(([question, answer], index) => <details name="hiw-faq" key={question} open={index === 0}><summary>{question}<span>+</span></summary><p>{answer}</p></details>)}</div>
        </div>
      </section>

      <section className="hiw-final"><div className="hiw-container"><div><p className="hiw-kicker">YOUR FIRST STEP</p><h2>Start with one product link.</h2><p>Tell us where you sell, expected volume and what needs to improve. We will recommend the next practical stage.</p></div><Link href="/contact" className="hiw-button hiw-button-light">Get a Free Quote <FiArrowRight /></Link></div></section>
    </main>
  );
}

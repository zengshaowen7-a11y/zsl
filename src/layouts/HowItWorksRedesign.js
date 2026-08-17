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

const startingDetails = [
  {
    title: "Product or supplier link",
    copy: "A product URL, supplier page or reference image is enough to start the first review.",
    Icon: FiSearch,
  },
  {
    title: "Main destination markets",
    copy: "Tell us where customers are located so shipping routes and limits can be checked early.",
    Icon: FiSend,
  },
  {
    title: "Expected order volume",
    copy: "A rough daily range helps us recommend the right warehouse and fulfillment setup.",
    Icon: FiClipboard,
  },
  {
    title: "Branding or QC requirements",
    copy: "Share packaging, label or inspection details that should be protected before dispatch.",
    Icon: FiShield,
  },
];

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
          <h1>From product link to tracked delivery</h1>
          <p>One China-based workflow for sourcing, approval, fulfillment and shipment updates.</p>
          <div className="hiw-actions">
            <Link href="/contact" className="hiw-button hiw-button-primary">Start with a Product Link <FiArrowRight /></Link>
            <a href="#five-stages" className="hiw-button hiw-button-ghost">See the Five Stages</a>
          </div>
          <ul><li><FiCheck /> Clear approval points</li><li><FiCheck /> One dedicated contact</li><li><FiCheck /> Tracking returned</li></ul>
        </div>
        <div className="hiw-hero-media">
          <Image src="/images/generated/jw-branded-packing-v3.png" alt="JW fulfillment team preparing customer orders" fill priority sizes="(max-width: 767px) 100vw, 52vw" />
          <div className="hiw-hero-board" aria-hidden="true">
            <span><b>01</b> Product link</span>
            <span><b>02</b> Quote</span>
            <span><b>03</b> QC</span>
            <span><b>04</b> Fulfill</span>
            <span><b>05</b> Tracking</span>
          </div>
        </div>
      </section>

      <section className="hiw-start">
        <div className="hiw-container hiw-start-grid">
          <div><p className="hiw-kicker">WHAT TO SEND FIRST</p><h2>Start before every detail is ready.</h2><p>Send the basics first. JW can review the missing details during the next step.</p></div>
          <ul>{startingDetails.map(({ title, copy, Icon }, index) => <li key={title}><span>{String(index + 1).padStart(2, "0")}</span><Icon /><strong>{title}</strong><p>{copy}</p></li>)}</ul>
        </div>
      </section>

      <section className="hiw-stages" id="five-stages">
        <div className="hiw-container">
          <header className="hiw-heading"><div><p className="hiw-kicker">THE COMPLETE ORDER JOURNEY</p><h2>Know each step before the order moves.</h2></div><p>The workflow stays flexible while every owner, approval and handoff remains clear.</p></header>
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
          <div><p className="hiw-kicker">APPROVAL BEFORE VOLUME</p><h2>Three checkpoints protect each handoff.</h2><p>Important questions are resolved before they become repeat production, inventory or service problems.</p><div className="hiw-approval-proof" aria-hidden="true"><span><strong>3</strong> approval gates</span><span><strong>0</strong> unclear handoffs</span><span><strong>1</strong> shared decision record</span></div></div>
          <ol>{checkpoints.map(([title, copy], index) => <li key={title}><span>{String(index + 1).padStart(2, "0")}</span><div><h3>{title}</h3><p>{copy}</p></div><FiCheckCircle /></li>)}</ol>
        </div>
      </section>

      <section className="hiw-tracks">
        <div className="hiw-container">
          <header className="hiw-heading"><div><p className="hiw-kicker">START AT YOUR CURRENT STAGE</p><h2>Use the workflow from where you are.</h2></div><p>Start with a product idea, an existing supplier or inventory already ready to ship.</p></header>
          <div className="hiw-track-grid">
            <article><FiSearch /><p className="hiw-kicker">TESTING A PRODUCT</p><h3>Begin with sourcing and samples.</h3><p>Use stages 01–03 to compare suppliers and approve the product before deciding how much stock or fulfillment support you need.</p><Link href="/services/product-sourcing">Explore Product Sourcing <FiArrowRight /></Link></article>
            <article><FiClipboard /><p className="hiw-kicker">EXISTING SUPPLIER</p><h3>Begin with receiving and QC.</h3><p>Your current factory can send goods to JW for inspection, storage, branded packing and order-level fulfillment.</p><Link href="/services/quality-control-inspection">Explore Quality Control <FiArrowRight /></Link></article>
            <article><FiTruck /><p className="hiw-kicker">READY TO SCALE</p><h3>Connect daily orders and tracking.</h3><p>Map SKUs, packing rules and exceptions so repeat orders can move through one structured warehouse workflow.</p><Link href="/services/automatic-order-fulfillment">Explore Order Automation <FiArrowRight /></Link></article>
          </div>
        </div>
      </section>

      <section className="hiw-exceptions">
        <div className="hiw-container hiw-exception-grid">
          <div className="hiw-exception-media">
            <Image src="/images/generated/jw-qc-inspection-v3.png" alt="Product issue being checked before approval" fill sizes="(max-width: 850px) 100vw, 48vw" />
            <div className="hiw-exception-status" aria-hidden="true">
              <span>Exception review</span>
              <strong>Waiting for decision</strong>
            </div>
          </div>
          <div className="hiw-exception-copy">
            <p className="hiw-kicker">WHEN SOMETHING DOES NOT MATCH</p>
            <h2>Exceptions Pause with Context, Not Confusion.</h2>
            <p>Quality issues, missing stock, unmapped SKUs or unusual requests are separated before they create a fulfillment mistake.</p>
            <div className="hiw-exception-flow">
              <article><FiShield /><span>01</span><strong>Identify</strong><p>Affected goods or orders are separated from normal dispatch.</p></article>
              <article><FiClipboard /><span>02</span><strong>Document</strong><p>Photos, SKU details and the decision needed are shared clearly.</p></article>
              <article><FiCheckCircle /><span>03</span><strong>Resume</strong><p>Work continues after approval, correction or replacement.</p></article>
            </div>
            <div className="hiw-exception-note">
              <span>Decision queue</span>
              <strong>QC photo review · stock variance · packaging approval</strong>
            </div>
          </div>
        </div>
      </section>

      <section className="hiw-faq">
        <div className="hiw-container hiw-faq-grid">
          <div><p className="hiw-kicker">BEFORE YOU START</p><h2>Common process questions.</h2><p>Details vary by product, but the decision points should always stay visible.</p></div>
          <div className="hiw-accordion">{faqs.map(([question, answer], index) => <details name="hiw-faq" key={question} open={index === 0}><summary>{question}<span>+</span></summary><p>{answer}</p></details>)}</div>
        </div>
      </section>

      <section className="hiw-final">
        <div className="hiw-container">
          <div className="hiw-final-copy">
            <p className="hiw-kicker">YOUR FIRST STEP</p>
            <h2>Start with one product link.</h2>
            <p>Tell us where you sell, expected volume and what needs to improve. We will recommend the next practical stage.</p>
          </div>
          <div className="hiw-final-guide" aria-hidden="true">
            <span>Product link</span>
            <i />
            <span>Free quote</span>
          </div>
          <Link href="/contact" className="hiw-button hiw-button-light">Get a Free Quote <FiArrowRight /></Link>
        </div>
      </section>
    </main>
  );
}

import Image from "next/image";
import Link from "next/link";
import {
  FiArrowRight,
  FiCheck,
  FiCheckCircle,
  FiClipboard,
  FiMessageCircle,
  FiPackage,
  FiShield,
  FiUsers,
  FiX,
} from "react-icons/fi";

const comparisons = [
  ["Multiple supplier conversations", "One dedicated operating contact"],
  ["A quote without a shared specification", "Supplier options compared on the same brief"],
  ["Products shipped without clear checks", "Agreed QC before stock or orders continue"],
  ["Generic packing decisions", "Documented branding and packing rules"],
  ["Separate warehouse and shipping teams", "One connected order workflow"],
  ["Tracking shared as a final message", "Structured shipment and exception updates"],
];

const principles = [
  [FiUsers, "One accountable team", "Supplier, warehouse, packing and shipping context stays with one China-based operating team."],
  [FiShield, "Checks before decisions", "Relevant product and parcel details are checked at agreed approval points, not after customer complaints."],
  [FiClipboard, "Evidence with context", "Issues are shared with the affected quantity, visible evidence and the decision needed from your team."],
  [FiPackage, "Rules that scale", "Approved SKUs, variants, packaging and exceptions become repeatable daily fulfillment instructions."],
];

const heroSupportCards = [
  [FiMessageCircle, "One clear contact", "Product, QC and shipment context stays with one account lead."],
  [FiShield, "Risk checked early", "Samples, stock and packing details are reviewed before volume moves."],
  [FiClipboard, "Shared order notes", "Approvals, exceptions and requirements stay documented for repeat work."],
  [FiPackage, "Ready to fulfill", "SKU rules, packaging and tracking handoff are prepared before scale."],
];

const fitItems = [
  "You want one contact across sourcing, QC and fulfillment.",
  "Product consistency matters more than finding the lowest visible price.",
  "You need branded packing or documented order rules.",
  "Your store is testing now but needs a workflow that can grow.",
];

const notFitItems = [
  "You only want an anonymous product listing with no review.",
  "You expect every product and destination to use one fixed shipping rate.",
  "You do not want to approve samples, specifications or issue decisions.",
];

const faqs = [
  ["What makes JW different from a marketplace supplier?", "JW can connect supplier coordination, receiving, quality checks, inventory, packing and shipping through one operating scope. The exact responsibilities are confirmed before work begins."],
  ["Will I have one dedicated contact?", "A primary account contact keeps product, warehouse and shipment context connected. Operational specialists may support the work without making you restart the conversation at every handoff."],
  ["Do you always choose the cheapest supplier?", "No. Supplier options should be compared against the same product requirement, including quality, MOQ, lead time, packaging and fulfillment implications."],
  ["How are quality issues communicated?", "The agreed inspection scope determines what is checked. When an issue is found, affected goods can be held and shared with evidence and a requested decision."],
  ["Can the service scope grow with my store?", "Yes. A project may begin with sourcing or inspection and later add inventory, custom packaging, order automation and global fulfillment."],
];

export default function WhyJWRedesign() {
  return (
    <main className="wjw-page">
      <section className="wjw-hero">
        <div className="wjw-hero-copy">
          <p className="wjw-kicker">Why choose JW Dropshipping?</p>
          <h1>We assign one dedicated China team to your order — fully accountable for quality, timelines, and communication at every stage.</h1>
          <p>JW connects sourcing, quality control, inventory, branded packing and delivery so your team manages fewer handoffs and makes better-informed decisions.</p>
          <div className="wjw-actions"><Link href="/contact" className="wjw-button wjw-button-primary">Talk to the Team <FiArrowRight /></Link><a href="#jw-difference" className="wjw-button wjw-button-ghost">See the Difference</a></div>
          <ul><li><FiCheck /> Live Account Support</li><li><FiCheck /> Agreed QC checkpoints</li><li><FiCheck /> Clear order handoff</li></ul>
        </div>
        <div className="wjw-hero-media">
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            poster="/images/generated/why-jw-operations-video-poster.png"
            aria-label="JW China operations team coordinating product review, packing and parcel sorting"
          >
            <source src="/videos/why-jw-team-operations.mp4" type="video/mp4" />
          </video>
        </div>
      </section>

      <section className="wjw-facts">
        <div className="wjw-container">
          {heroSupportCards.map(([Icon, title, copy]) => (
            <article key={title}>
              <Icon aria-hidden="true" />
              <div><strong>{title}</strong><span>{copy}</span></div>
            </article>
          ))}
        </div>
      </section>

      <section className="wjw-compare" id="jw-difference">
        <div className="wjw-container">
          <header className="wjw-heading"><div><p className="wjw-kicker">A CLEARER OPERATING MODEL</p><h2>Less chasing. More visible ownership.</h2></div><p>The difference is not a longer service list. It is how decisions and handoffs stay connected around the same product and order.</p></header>
          <div className="wjw-compare-head"><span>Typical sourcing agent</span><span>JW Dropshipping</span></div>
          <div className="wjw-compare-list">{comparisons.map(([typical, jw]) => <div key={typical}><p><FiX />{typical}</p><p><FiCheck />{jw}</p></div>)}</div>
        </div>
      </section>

      <section className="wjw-principles">
        <div className="wjw-container">
          <header className="wjw-heading wjw-heading-centered"><div><p className="wjw-kicker">WHAT WORKING WITH JW SHOULD FEEL LIKE</p><h2>Clear, practical support you can use every day.</h2></div><p>Four operating principles shape the service before daily volume begins.</p></header>
          <div className="wjw-principle-grid">{principles.map(([Icon, title, copy], index) => <article key={title}><div><span>{String(index + 1).padStart(2, "0")}</span><Icon /></div><h3>{title}</h3><p>{copy}</p></article>)}</div>
        </div>
      </section>

      <section className="wjw-evidence">
        <div className="wjw-container wjw-evidence-grid">
          <div className="wjw-evidence-media">
            <div className="wjw-evidence-shot">
              <Image src="/images/generated/jw-qc-inspection-v3.png" alt="JW team recording product inspection results" fill sizes="(max-width: 850px) 100vw, 50vw" />
            </div>
            <div className="wjw-evidence-shot">
              <Image src="/images/generated/jw-quality-check-v2.png" alt="JW team checking product quality before dispatch" fill sizes="(max-width: 850px) 100vw, 50vw" />
            </div>
          </div>
          <div className="wjw-evidence-copy"><p className="wjw-kicker">VISIBLE OPERATING EVIDENCE</p><h2>Clear QC decisions.</h2><p>Instead of a vague “QC passed” message, the inspection scope can identify what was checked, what did not match and what needs approval.</p>
            <div className="wjw-report">
              <div><span>QC REVIEW</span><strong>SKU: JW-1024</strong></div>
              <dl>
                <div><dt>Checked</dt><dd>50 units</dd></div>
                <div><dt>Sampling</dt><dd>100%</dd></div>
                <div><dt>Passed</dt><dd>50</dd></div>
                <div><dt>Issues</dt><dd>0</dd></div>
                <div><dt>Packaging</dt><dd>Verified</dd></div>
                <div><dt>Barcode</dt><dd>Matched</dd></div>
                <div className="wjw-report-status"><dt>Status</dt><dd>Approved for dispatch</dd></div>
              </dl>
              <ul className="wjw-report-checks">
                <li><FiCheck /> Variant match</li>
                <li><FiCheck /> Quantity count</li>
                <li><FiCheck /> Finish check</li>
                <li><FiCheck /> Carton label</li>
              </ul>
              <div className="wjw-report-progress"><span></span></div>
              <p><strong>50 passed</strong><span>0 issues</span></p>
            </div>
            <Link href="/services/quality-control-inspection" className="wjw-text-link">Explore Quality Control <FiArrowRight /></Link>
          </div>
        </div>
      </section>

      <section className="wjw-support">
        <div className="wjw-container wjw-support-grid">
          <div><p className="wjw-kicker">LIVE ACCOUNT SUPPORT</p><h2>One handoff per order.</h2><p>Your primary contact connects supplier questions, warehouse actions and shipping updates. That means fewer repeated explanations and a clearer owner when something needs a decision.</p><ul><li><FiMessageCircle /> One primary communication point</li><li><FiClipboard /> Decisions and packing rules documented</li><li><FiCheckCircle /> Exceptions followed through to resolution</li></ul></div>
          <div className="wjw-support-media"><Image src="/images/generated/jw-warehouse-team-v2.png" alt="JW warehouse and account support team" fill sizes="(max-width: 850px) 100vw, 48vw" /></div>
        </div>
      </section>

      <section className="wjw-fit">
        <div className="wjw-container">
          <header className="wjw-heading"><div><p className="wjw-kicker">IS JW THE RIGHT FIT?</p><h2>A useful partnership starts with aligned expectations.</h2></div><p>Being clear about fit is more valuable than promising the same service model to every store.</p></header>
          <div className="wjw-fit-grid"><div><h3>JW may be a good fit when</h3><ul>{fitItems.map(item => <li key={item}><FiCheck />{item}</li>)}</ul></div><div><h3>We may not be the right fit when</h3><ul>{notFitItems.map(item => <li key={item}><FiX />{item}</li>)}</ul></div></div>
        </div>
      </section>

      <section className="wjw-faq"><div className="wjw-container wjw-faq-grid"><div><p className="wjw-kicker">BEFORE YOU CHOOSE</p><h2>Questions about working with JW.</h2><p>Start with your product and current operational problem for the most relevant answer.</p></div><div className="wjw-accordion">{faqs.map(([q,a],index)=><details name="wjw-faq" key={q} open={index===0}><summary>{q}<span>+</span></summary><p>{a}</p></details>)}</div></div></section>

      <section className="wjw-final"><div className="wjw-container"><div><p className="wjw-kicker">START WITH YOUR CURRENT BOTTLENECK</p><h2>See whether JW fits your operation.</h2><p>Share a product link, destination markets and what is slowing your team down. We will recommend a practical next step.</p></div><Link href="/contact" className="wjw-button wjw-button-light">Get a Free Quote <FiArrowRight /></Link></div></section>
    </main>
  );
}

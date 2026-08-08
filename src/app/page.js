import SeoMeta from "@layouts/SeoMeta";
import HeroSlider from "@layouts/HeroSlider";
import Link from "next/link";
import {
  FiArrowRight,
  FiCheck,
  FiClock,
  FiGlobe,
  FiHeadphones,
  FiLayers,
  FiLink,
  FiMessageCircle,
  FiPackage,
  FiShield,
  FiShoppingBag,
  FiTrendingUp,
  FiUsers,
  FiZap,
} from "react-icons/fi";

const services = [
  { icon: FiLink, title: "Shopify Store Connection", text: "We assess your store setup and prepare a clear, reliable path to connect Shopify with Mabang ERP." },
  { icon: FiLayers, title: "ERP Workflow Setup", text: "Map products, orders, inventory and fulfilment rules around the way your team actually operates." },
  { icon: FiPackage, title: "Order & Inventory Flow", text: "Reduce repetitive work with a structured flow from Shopify orders to ERP processing and fulfilment." },
  { icon: FiHeadphones, title: "Human-led Onboarding", text: "A real specialist follows up after your enquiry and supports every step of the connection process." },
];

const steps = [
  ["01", "Share your store", "Tell us your Shopify URL, order volume and current workflow."],
  ["02", "Review & plan", "We identify your needs, system status and the right connection approach."],
  ["03", "Confirm the solution", "Agree on scope, service terms, timeline and responsibilities."],
  ["04", "Connect & support", "Our team assists with Mabang ERP binding and post-launch guidance."],
];

const faqs = [
  ["Do you connect my Shopify store automatically?", "No. After confirming the service, our specialist works with you to complete the store binding safely and correctly."],
  ["Do I need to be using Mabang ERP already?", "Not necessarily. Tell us what you use today and we will assess the best next step for your store."],
  ["Can you support stores with different order volumes?", "Yes. We work with growing Shopify merchants as well as established stores, and tailor the workflow to your scale."],
  ["What happens after I submit the form?", "A sales or support specialist reviews your information and contacts you to clarify requirements and recommend a solution."],
];

export default function Home() {
  return (
    <>
      <SeoMeta title="Shopify to Mabang ERP Integration" />

      <main>
        <section className="smt-hero">
          <div className="smt-orb smt-orb-one" />
          <div className="smt-orb smt-orb-two" />
          <div className="container relative z-10">
            <div className="smt-hero-grid">
              <HeroSlider />

              <div className="smt-dashboard-wrap" aria-label="Integration workflow preview">
                <div className="smt-dashboard-glow" />
                <div className="smt-dashboard">
                  <div className="smt-dashboard-head"><div><span className="smt-dot red"/><span className="smt-dot yellow"/><span className="smt-dot green"/></div><span>Integration overview</span><span className="smt-live">● LIVE</span></div>
                  <div className="smt-flow">
                    <div className="smt-platform shopify"><FiShoppingBag /><div><small>STORE</small><strong>Shopify</strong></div></div>
                    <div className="smt-sync"><span /><FiArrowRight /><small>Synced</small></div>
                    <div className="smt-platform mabang"><FiLayers /><div><small>ERP</small><strong>Mabang</strong></div></div>
                  </div>
                  <div className="smt-metrics">
                    <div><small>Orders synced</small><strong>1,284</strong><em>+18.2%</em></div>
                    <div><small>Processing status</small><strong>99.8%</strong><em>Healthy</em></div>
                  </div>
                  <div className="smt-activity"><div className="smt-activity-title"><span>Recent workflow</span><small>Today</small></div>{[86,68,94,76,89,62,98,82,91,73,88,96].map((n,i)=><span key={i} style={{height:`${n}%`}} />)}</div>
                </div>
                <div className="smt-float-card"><FiShield/><div><strong>Connection ready</strong><small>Workflow verified</small></div></div>
              </div>
            </div>
          </div>
        </section>

        <section className="smt-trustbar"><div className="container"><p>Built for ambitious cross-border sellers</p><div><span>SHOPIFY</span><span>MABANG ERP</span><span>GLOBAL ECOMMERCE</span><span>HUMAN SUPPORT</span></div></div></section>

        <section id="services" className="smt-section smt-services"><div className="container">
          <div className="smt-section-head"><div><span className="smt-kicker">WHAT WE DO</span><h2>A simpler path from store<br/>to ERP operations</h2></div><p>Focused support for the connection that matters — without forcing you into a complex platform or unnecessary software project.</p></div>
          <div className="smt-service-grid">{services.map(({icon:Icon,title,text},i)=><article className="smt-service-card" key={title}><div className="smt-card-number">0{i+1}</div><div className="smt-icon"><Icon/></div><h3>{title}</h3><p>{text}</p><Link href="#quote">Talk to a specialist <FiArrowRight/></Link></article>)}</div>
        </div></section>

        <section id="process" className="smt-section smt-process"><div className="container">
          <div className="smt-process-grid"><div className="smt-process-intro"><span className="smt-kicker light">HOW IT WORKS</span><h2>From first conversation to a connected workflow.</h2><p>No confusing onboarding. No black box. We keep every stage clear, practical and human.</p><div className="smt-mini-stats"><div><strong>4</strong><span>clear steps</span></div><div><strong>1:1</strong><span>specialist support</span></div></div></div>
          <div className="smt-steps">{steps.map(([n,title,text])=><div className="smt-step" key={n}><span>{n}</span><div><h3>{title}</h3><p>{text}</p></div></div>)}</div></div>
        </div></section>

        <section id="advantages" className="smt-section smt-advantages"><div className="container">
          <div className="smt-centered-head"><span className="smt-kicker">WHY CHOOSE US</span><h2>ERP experience meets real<br/>eCommerce understanding</h2><p>More than a technical connection — a practical service built around your operations and growth.</p></div>
          <div className="smt-adv-grid">
            <div className="smt-adv-main"><FiTrendingUp/><h3>Built to support your next stage of growth</h3><p>We help turn disconnected store tasks into a more structured operating flow, so your team can spend less time on repetitive coordination.</p><div className="smt-check-grid"><span><FiCheck/> Shopify-focused assessment</span><span><FiCheck/> Cross-border workflow insight</span><span><FiCheck/> Clear implementation scope</span><span><FiCheck/> Responsive human follow-up</span></div></div>
            <div className="smt-adv-stack"><div><FiClock/><h3>Fast response</h3><p>Get a practical first assessment without a long sales cycle.</p></div><div><FiGlobe/><h3>Cross-border ready</h3><p>Support shaped around international eCommerce realities.</p></div></div>
          </div>
        </div></section>

        <section className="smt-stats"><div className="container"><div><strong>100%</strong><span>Human-led follow-up</span></div><div><strong>1:1</strong><span>Integration guidance</span></div><div><strong>24h</strong><span>Target first response</span></div><div><strong>End-to-end</strong><span>Connection support</span></div></div></section>

        <section id="quote" className="smt-section smt-quote"><div className="container"><div className="smt-quote-grid">
          <div className="smt-quote-copy"><span className="smt-kicker light">FREE STORE ASSESSMENT</span><h2>Tell us about your Shopify workflow.</h2><p>Share a few details and our specialist will contact you with the next best step for connecting to Mabang ERP.</p><div className="smt-contact-points"><span><FiMessageCircle/> WhatsApp-friendly communication</span><span><FiUsers/> A real specialist, not a chatbot</span><span><FiShield/> Your store details stay private</span></div></div>
          <form className="smt-form" action="#" method="post"><div className="smt-form-row"><label>Full name *<input name="name" required placeholder="Your name"/></label><label>Work email *<input name="email" type="email" required placeholder="you@company.com"/></label></div><div className="smt-form-row"><label>WhatsApp / Phone *<input name="phone" required placeholder="+1 234 567 890"/></label><label>Shopify store URL *<input name="store" type="url" required placeholder="https://yourstore.com"/></label></div><div className="smt-form-row"><label>Monthly order volume<select name="orders"><option>Not active yet</option><option>1–300</option><option>301–1,500</option><option>1,500+</option></select></label><label>Main selling market<select name="market"><option>United States</option><option>United Kingdom</option><option>European Union</option><option>Multiple markets</option><option>Other</option></select></label></div><label>What do you need help with?<textarea name="message" rows="4" placeholder="Tell us about your current workflow or challenge"/></label><button className="smt-button smt-button-primary smt-submit" type="submit">Request free assessment <FiArrowRight/></button><small>By submitting, you agree to be contacted about your enquiry.</small></form>
        </div></div></section>

        <section id="faq" className="smt-section smt-faq"><div className="container"><div className="smt-centered-head"><span className="smt-kicker">NEED HELP?</span><h2>Frequently asked questions</h2></div><div className="smt-faq-list">{faqs.map(([q,a],i)=><details key={q} open={i===0}><summary>{q}<span>+</span></summary><p>{a}</p></details>)}</div></div></section>
      </main>
    </>
  );
}

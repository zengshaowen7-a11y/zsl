import { aboutMaterialPlan } from "@config/about-materials";
import Image from "next/image";
import Link from "next/link";
import {
  FiArrowRight,
  FiBox,
  FiCheck,
  FiClipboard,
  FiExternalLink,
  FiEye,
  FiGlobe,
  FiHeart,
  FiImage,
  FiMapPin,
  FiMessageCircle,
  FiPackage,
  FiPlay,
  FiSearch,
  FiShield,
  FiTruck,
  FiUser,
  FiUsers,
  FiVideo,
} from "react-icons/fi";

const departments = [
  [FiMessageCircle, "Account management", "One named contact coordinates priorities, updates and exceptions across the complete order journey."],
  [FiSearch, "Product sourcing", "Supplier research, quotations, samples, MOQ, lead time and customization are compared before commitment."],
  [FiShield, "Quality control", "Agreed checkpoints turn product requirements into receiving and pre-shipment inspection routines."],
  [FiBox, "Warehouse operations", "Inventory, packaging materials, picking rules and order handoffs are organized around each SKU."],
  [FiTruck, "Shipping coordination", "Routes are selected by destination, product type, speed, tracking and the customer promise."],
];

const principles = [
  [FiEye, "Make the work visible", "Important decisions, checkpoints and exceptions should be understandable beyond a chat message."],
  [FiClipboard, "Define ownership", "Every stage needs a named owner, an approval point and a clear next action."],
  [FiShield, "Protect the customer promise", "Speed matters only when the correct product leaves in the condition and packaging expected."],
  [FiHeart, "Improve with the brand", "The operating routine should evolve as products, markets, packaging and order volume change."],
];

const teamRoles = [
  ["Account lead", "Your daily point of contact and owner of cross-team follow-up."],
  ["Sourcing specialist", "Coordinates factories, quotations, samples and repeat production."],
  ["QC & warehouse lead", "Owns receiving standards, inspections, inventory and packing rules."],
  ["Logistics specialist", "Reviews routes, tracking performance and delivery exceptions."],
];

const trustQuestions = [
  ["Can we see the real team and warehouse before working together?", "Yes. This page is designed to hold a real warehouse tour, team photography and external verification links. Those assets will be added after the company supplies and approves them."],
  ["Who will be responsible for our account?", "Each account should have one named contact who coordinates sourcing, quality, warehouse and shipping teams, so responsibility does not disappear between departments."],
  ["How do you communicate quality issues?", "The operating scope should define inspection points and evidence requirements before launch. When an exception appears, the update should include context, photos where relevant and practical options."],
  ["Can the workflow change as our store grows?", "Yes. A useful fulfillment workflow can begin with sourcing and direct shipping, then add inventory, branded packaging, automation or new delivery routes as demand becomes more predictable."],
  ["What company details can we verify?", "The final page will show the registered company name, office and warehouse addresses, independent review profile and official social or founder links after they are provided and verified."],
];

const mediaVisualIcons = {
  film: FiVideo,
  founder: FiUser,
  warehouse: FiBox,
  quality: FiShield,
  packing: FiPackage,
  dispatch: FiTruck,
  team: FiUsers,
};

function MediaCard({ item, className = "", video = false }) {
  const TypeIcon = video ? FiVideo : FiImage;
  const VisualIcon = mediaVisualIcons[item.visual] || TypeIcon;
  return (
    <article className={`about-media-card about-media-${item.visual || "placeholder"} ${className}`.trim()}>
      {video && item.src && item.src.endsWith(".mp4") ? (
        <video src={item.src} autoPlay muted loop playsInline preload="metadata" aria-label={item.title} />
      ) : item.src ? (
        <Image src={item.src} alt={item.title} fill sizes="(max-width: 767px) 100vw, 50vw" unoptimized={item.src.includes("/generated/")} />
      ) : (
        <div className="about-material-visual" aria-hidden="true"><span><VisualIcon /></span><i /><i /><i /></div>
      )}
      <div className="about-media-shade" />
      <span className="about-material-label"><TypeIcon />{item.type} · {item.src ? "LICENSED TEMPORARY FOOTAGE" : "COMPANY MATERIAL NEEDED"}</span>
      {video && <span className="about-play"><FiPlay /></span>}
      <div className="about-media-copy"><strong>{item.title}</strong><p>{item.brief}</p><small>{item.credit || item.spec}</small></div>
    </article>
  );
}

export default function FulfillmentAboutPage() {
  return (
    <main className="ff-site about-page">
      <section className="about-hero">
        <div className="about-hero-orbit" />
        <div className="container about-hero-grid">
          <div className="about-hero-copy">
            <span className="ff-kicker ff-kicker-light">THE PEOPLE AND PROCESS BEHIND EVERY PARCEL</span>
            <h1>A fulfillment partner should be visible before it is trusted.</h1>
            <p>JW Dropshipping brings supplier coordination, quality checks, warehouse execution and global delivery into one accountable operating team for independent eCommerce brands.</p>
            <div className="ff-actions"><Link className="ff-btn ff-btn-primary" href="/contact">Meet your fulfillment team<FiArrowRight /></Link><a className="ff-btn ff-btn-ghost" href="#inside">See how we operate</a></div>
            <div className="about-hero-points"><span><FiCheck />Human-led support</span><span><FiCheck />Documented checkpoints</span><span><FiCheck />Clear ownership</span></div>
          </div>
          <MediaCard item={aboutMaterialPlan.media.heroFilm} className="about-hero-media" />
        </div>
      </section>

      <section className="about-proof-band" aria-label="Verified company facts to provide">
        <div className="container about-proof-grid">
          {aboutMaterialPlan.proofStats.map(({ value, label, note }, index) => <article key={label}><small>0{index + 1}</small><strong>{value}</strong><span>{label}<em>{note}</em></span></article>)}
        </div>
      </section>

      <section className="ff-section about-story">
        <div className="container about-story-grid">
          <div className="about-story-copy"><span className="ff-kicker">WHY JW DROPSHIPPING EXISTS</span><h2>Independent brands need more than a tracking number.</h2><p>When factories, inspection, inventory and shipping are managed by different contacts, a small misunderstanding can quickly become a customer-facing problem. Our role is to connect those handoffs into one operating routine with a clear owner.</p><p>That means confirming what “ready to ship” actually means for your product, documenting the details that matter, and keeping decisions close to the people doing the physical work.</p><Link href="/services" className="ff-text-link">Explore our service scope<FiArrowRight /></Link></div>
          <div className="about-story-visual"><MediaCard item={aboutMaterialPlan.media.founderStory} /><div className="about-story-note"><strong>Founder story needed</strong><span>Provide the real founding year, original problem, first warehouse milestone and current direction.</span></div></div>
        </div>
      </section>

      <section id="inside" className="ff-section about-departments">
        <div className="container">
          <div className="ff-heading ff-heading-split ff-heading-dark"><div><span className="ff-kicker ff-kicker-light">ONE JOURNEY · FIVE SPECIALISTS</span><h2>Each handoff belongs to someone who does it every day.</h2></div><p>Clients communicate with one accountable lead, while specialist teams own the work behind sourcing, QC, inventory, packing and delivery.</p></div>
          <div className="about-department-grid">{departments.map(([Icon, title, text], index) => <article key={title} style={{ "--about-index": index }}><span><Icon /></span><small>0{index + 1}</small><h3>{title}</h3><p>{text}</p><i /></article>)}</div>
        </div>
      </section>

      <section className="ff-section about-facility">
        <div className="container">
          <div className="ff-heading ff-heading-split"><div><span className="ff-kicker">INSIDE THE WORKFLOW</span><h2>See where orders are received, checked and dispatched.</h2></div><p>Each stage has a clear owner and a visible handoff.</p></div>
          <div className="about-facility-grid"><MediaCard item={aboutMaterialPlan.media.warehouseWide} className="about-media-wide" /><MediaCard item={aboutMaterialPlan.media.qualityCloseup} /><MediaCard item={aboutMaterialPlan.media.packingFilm} /><MediaCard item={aboutMaterialPlan.media.dispatchPhoto} className="about-media-wide" /></div>
        </div>
      </section>

      <section className="ff-section about-principles">
        <div className="container">
          <div className="ff-heading ff-heading-centered"><span className="ff-kicker">HOW WE WANT THE PARTNERSHIP TO FEEL</span><h2>Clear enough to understand. Flexible enough to grow.</h2><p>These principles shape how the team scopes work, communicates issues and improves recurring operations.</p></div>
          <div className="about-principle-grid">{principles.map(([Icon, title, text], index) => <article key={title}><span><Icon /></span><small>0{index + 1}</small><h3>{title}</h3><p>{text}</p></article>)}</div>
        </div>
      </section>

      <section className="ff-section about-team">
        <div className="container about-team-grid">
          <div><span className="ff-kicker ff-kicker-light">ONE TEAM, CLEAR OWNERSHIP</span><h2>Know who owns each stage.</h2><p>Your account lead connects the specialists responsible for sourcing, quality, warehouse work and delivery.</p><MediaCard item={aboutMaterialPlan.media.teamGroup} className="about-team-photo" /></div>
          <div className="about-role-grid">{teamRoles.map(([role, text], index) => <article key={role}><span><FiUser /></span><small>PORTRAIT 0{index + 1} NEEDED</small><h3>{role}</h3><p>{text}</p></article>)}</div>
        </div>
      </section>

      <section className="ff-section about-verification">
        <div className="container">
          <div className="ff-heading ff-heading-split"><div><span className="ff-kicker">VERIFY THE BUSINESS</span><h2>Make it easy for a serious buyer to check who they are working with.</h2></div><p>Do not publish guessed data. Add the following only after the company confirms the exact legal and operational details.</p></div>
          <div className="about-verification-layout"><div className="about-company-card"><div><FiMapPin /><span><small>COMPANY PROFILE</small><strong>Official details to provide</strong></span></div>{aboutMaterialPlan.companyProfile.map(([label, value]) => <p key={label}><span>{label}</span><strong>{value}</strong></p>)}</div><div className="about-link-grid">{aboutMaterialPlan.links.map(([label, note], index) => <article key={label}><small>LINK 0{index + 1}</small><FiExternalLink /><h3>{label}</h3><p>{note}</p></article>)}</div></div>
        </div>
      </section>

      <section className="ff-section about-faq">
        <div className="container ff-faq-grid"><div className="ff-faq-intro"><span className="ff-kicker">BEFORE WE WORK TOGETHER</span><h2>Questions a careful brand should ask.</h2><p>Trust should come from visible people, defined work and verifiable company information.</p><Link className="ff-btn ff-btn-dark" href="/contact">Ask our team<FiArrowRight /></Link></div><div className="ff-faq-list">{trustQuestions.slice(0, 4).map(([question, answer], index) => <details key={question} open={index === 0}><summary>{question}<span>+</span></summary><p>{answer}</p></details>)}</div></div>
      </section>

      <section className="about-final-cta"><div className="container"><div><span>READY TO DISCUSS YOUR OPERATION?</span><h2>Meet the people who will be responsible for your orders.</h2></div><Link className="ff-btn ff-btn-primary" href="/contact">Start a conversation<FiArrowRight /></Link></div></section>
    </main>
  );
}

import { getFulfillmentCopy } from "@config/fulfillment-content";
import Image from "next/image";
import Link from "next/link";
import {
  FiArrowRight,
  FiBox,
  FiCheck,
  FiClipboard,
  FiGlobe,
  FiPackage,
  FiPlay,
  FiSearch,
  FiShield,
  FiShoppingBag,
  FiTruck,
  FiUsers,
} from "react-icons/fi";

const serviceIcons = {
  sourcing: FiSearch,
  quality: FiClipboard,
  warehousing: FiBox,
  fulfillment: FiTruck,
  branding: FiPackage,
  integration: FiShoppingBag,
};

export default function FulfillmentHome({ lang = "en" }) {
  const { home: c } = getFulfillmentCopy(lang);
  const isZh = lang === "zh";

  return (
    <main className="ff-site">
      <section className="ff-hero">
        <div className="ff-hero-glow" />
        <div className="container ff-hero-grid">
          <div className="ff-hero-copy-wrap">
            <span className="ff-kicker ff-kicker-light">{c.eyebrow}</span>
            <h1>{c.title}</h1>
            <p>{c.lead}</p>
            <div className="ff-actions">
              <Link className="ff-btn ff-btn-primary" href="#quote">{c.primary}<FiArrowRight /></Link>
              <Link className="ff-btn ff-btn-ghost" href="#process">{c.secondary}</Link>
            </div>
            <div className="ff-proof-list">
              {c.proofs.map((item) => <span key={item}><FiCheck />{item}</span>)}
            </div>
          </div>

          <div className="ff-hero-visual">
            <Image src="/images/fulfillment/packaging.jpg" alt="Packaging materials prepared for eCommerce fulfillment" fill priority sizes="(max-width: 1024px) 100vw, 48vw" />
            <div className="ff-hero-shade" />
            <div className="ff-journey-card">
              <small>{c.visualLabel}</small>
              <div>{c.visualSteps.map((step, index) => <span key={step}><b>{index + 1}</b>{step}</span>)}</div>
            </div>
            <div className="ff-floating-badge"><FiGlobe /><span><strong>Worldwide</strong><small>Tracked delivery</small></span></div>
          </div>
        </div>
      </section>

      <section className="ff-platforms">
        <div className="container">
          <p>{c.platformTitle}</p>
          <div>{c.platforms.map((platform) => <span key={platform}>{platform}</span>)}</div>
        </div>
      </section>

      <section className="ff-section ff-problem">
        <div className="container">
          <div className="ff-heading ff-heading-split">
            <div><span className="ff-kicker">{c.problemEyebrow}</span><h2>{c.problemTitle}</h2></div>
            <p>{c.problemLead}</p>
          </div>
          <div className="ff-compare-grid">
            <article className="ff-compare-card ff-compare-muted">
              <small>01</small><h3>{c.without.title}</h3>
              <ul>{c.without.items.map((item) => <li key={item}><span>×</span>{item}</li>)}</ul>
            </article>
            <article className="ff-compare-card ff-compare-accent">
              <small>02</small><h3>{c.with.title}</h3>
              <ul>{c.with.items.map((item) => <li key={item}><FiCheck />{item}</li>)}</ul>
            </article>
          </div>
        </div>
      </section>

      <section id="process" className="ff-section ff-process">
        <div className="container">
          <div className="ff-heading ff-heading-dark">
            <span className="ff-kicker ff-kicker-light">{c.processEyebrow}</span>
            <h2>{c.processTitle}</h2><p>{c.processLead}</p>
          </div>
          <div className="ff-process-list">
            {c.steps.map(([number, title, text]) => (
              <article key={number}>
                <span>{number}</span><div><h3>{title}</h3><p>{text}</p></div><FiArrowRight />
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="ff-section ff-services">
        <div className="container">
          <div className="ff-heading ff-heading-centered">
            <span className="ff-kicker">{c.servicesEyebrow}</span><h2>{c.servicesTitle}</h2><p>{c.servicesLead}</p>
          </div>
          <div className="ff-service-grid">
            {c.services.map(([id, title, text, image], index) => {
              const Icon = serviceIcons[id];
              return (
                <article id={id} className="ff-service-card" key={id}>
                  <div className="ff-service-image"><Image src={image} alt="" fill sizes="(max-width: 720px) 100vw, (max-width: 1100px) 50vw, 33vw" /><span><Icon /></span></div>
                  <div className="ff-service-body"><small>0{index + 1}</small><h3>{title}</h3><p>{text}</p><Link href={`${isZh ? "/zh" : ""}/services#${id}`}>{isZh ? "了解更多" : "Learn more"}<FiArrowRight /></Link></div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="ff-section ff-quality">
        <div className="container ff-quality-grid">
          <div className="ff-quality-media">
            <Image src="/images/fulfillment/packing-team.jpg" alt="Warehouse staff preparing packaging" fill sizes="(max-width: 1024px) 100vw, 50vw" />
            <div className="ff-quality-tag"><FiShield /><span>{isZh ? "质量检查点" : "Quality checkpoint"}</span></div>
          </div>
          <div className="ff-quality-copy">
            <span className="ff-kicker">{c.qcEyebrow}</span><h2>{c.qcTitle}</h2><p>{c.qcLead}</p>
            <ul>{c.qcChecks.map((item) => <li key={item}><FiCheck />{item}</li>)}</ul>
            <Link className="ff-text-link" href="#quote">{isZh ? "咨询质检方案" : "Discuss your QC requirements"}<FiArrowRight /></Link>
          </div>
        </div>
      </section>

      <section className="ff-section ff-team">
        <div className="container">
          <div className="ff-heading ff-heading-split ff-heading-dark">
            <div><span className="ff-kicker ff-kicker-light">{c.teamEyebrow}</span><h2>{c.teamTitle}</h2></div><p>{c.teamLead}</p>
          </div>
          <div className="ff-team-grid">
            <div className="ff-media-placeholder ff-photo-placeholder"><FiUsers /><strong>{c.photoPlaceholder}</strong><small>{isZh ? "替换为公司真实照片" : "Replace with your real company photos"}</small></div>
            <div className="ff-media-placeholder ff-video-placeholder"><span><FiPlay /></span><strong>{c.videoPlaceholder}</strong><small>{isZh ? "替换为仓库与工作流程视频" : "Replace with a warehouse and workflow video"}</small></div>
          </div>
        </div>
      </section>

      <section id="faq" className="ff-section ff-faq">
        <div className="container ff-faq-grid">
          <div className="ff-faq-intro"><span className="ff-kicker">{c.faqEyebrow}</span><h2>{c.faqTitle}</h2><p>{isZh ? "以下是海外卖家在开始合作前最常咨询的问题。" : "The practical questions most independent sellers ask before getting started."}</p><Link className="ff-btn ff-btn-dark" href="#quote">{c.primary}<FiArrowRight /></Link></div>
          <div className="ff-faq-list">{c.faqs.map(([question, answer], index) => <details key={question} open={index === 0}><summary>{question}<span>+</span></summary><p>{answer}</p></details>)}</div>
        </div>
      </section>

      <section id="quote" className="ff-section ff-quote">
        <div className="container ff-quote-grid">
          <div className="ff-quote-copy"><span className="ff-kicker ff-kicker-light">{c.quoteEyebrow}</span><h2>{c.quoteTitle}</h2><p>{c.quoteLead}</p><div><span><FiSearch />{isZh ? "产品与供应商评估" : "Product and supplier review"}</span><span><FiClipboard />{isZh ? "清晰的下一步建议" : "Clear next-step recommendation"}</span><span><FiUsers />{isZh ? "人工顾问跟进" : "Human follow-up"}</span></div></div>
          <form className="ff-form" name="fulfillment-quote" method="POST" action={isZh ? "/zh/thank-you" : "/thank-you"} data-netlify="true">
            <input type="hidden" name="form-name" value="fulfillment-quote" />
            <input type="hidden" name="language" value={lang} />
            <div className="ff-form-row"><label>{c.form.name}<input name="name" required /></label><label>{c.form.email}<input name="email" type="email" required /></label></div>
            <div className="ff-form-row"><label>{c.form.phone}<input name="phone" required /></label><label>{c.form.store}<input name="store" type="url" placeholder="https://" /></label></div>
            <label>{c.form.product}<input name="product-url" type="url" placeholder="https://" /></label>
            <div className="ff-form-row"><label>{c.form.volume}<select name="volume"><option>0–10</option><option>11–50</option><option>51–200</option><option>201–500</option><option>500+</option></select></label><label>{c.form.market}<select name="market"><option>United States</option><option>European Union</option><option>United Kingdom</option><option>Australia / New Zealand</option><option>Worldwide</option><option>Other</option></select></label></div>
            <label>{c.form.message}<textarea name="message" rows="4" /></label>
            <button className="ff-btn ff-btn-primary" type="submit">{c.form.submit}<FiArrowRight /></button><small>{c.form.consent}</small>
          </form>
        </div>
      </section>
    </main>
  );
}

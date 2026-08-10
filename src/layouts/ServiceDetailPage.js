import { servicePages } from "@config/service-page-content";
import { getServiceConversion } from "@config/service-conversion-content";
import { getServiceStory } from "@config/service-story-content";
import Image from "next/image";
import Link from "next/link";
import {
  FiArrowRight,
  FiCheck,
  FiClipboard,
  FiClock,
  FiGlobe,
  FiMessageCircle,
  FiPackage,
  FiSearch,
  FiShield,
} from "react-icons/fi";

const capabilityIcons = [FiSearch, FiShield, FiPackage, FiClipboard, FiGlobe, FiMessageCircle];

function ServiceField({ field }) {
  if (field.type === "select") {
    return <label>{field.label}{field.required ? " *" : ""}<select name={field.name} defaultValue="" required={field.required}><option value="" disabled>Select an option</option>{field.options.map((option) => <option key={option} value={option}>{option}</option>)}</select></label>;
  }

  if (field.type === "textarea") {
    return <label className="sdp-field-wide">{field.label}{field.required ? " *" : ""}<textarea name={field.name} rows="4" required={field.required} placeholder={field.placeholder} /></label>;
  }

  return <label className={field.wide ? "sdp-field-wide" : undefined}>{field.label}{field.required ? " *" : ""}<input name={field.name} type={field.type} placeholder={field.placeholder} required={field.required} /></label>;
}

function ServiceQuoteForm({ service, formConfig }) {
  return (
    <form
      id="service-quote"
      className="sdp-form sdp-form-dynamic"
      name="fulfillment-quote"
      method="POST"
      action="/thank-you"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
    >
      <input type="hidden" name="form-name" value="fulfillment-quote" />
      <input type="hidden" name="service" value={service.menuTitle} />
      <p className="sdp-honeypot"><label>Do not fill this field<input name="bot-field" /></label></p>
      <div className="sdp-form-intro">
        <span><FiMessageCircle />{formConfig.eyebrow}</span>
        <h2>{formConfig.title}</h2>
        <p>{formConfig.lead}</p>
      </div>
      <div className="sdp-form-row">
        <label>Full name *<input name="name" type="text" autoComplete="name" placeholder="Your name" required /></label>
        <label>Work email *<input name="email" type="email" autoComplete="email" placeholder="name@company.com" required /></label>
      </div>
      <div className="sdp-form-row">
        <label>WhatsApp / Phone *<input name="phone" type="text" autoComplete="tel" placeholder="WhatsApp or phone number" required /></label>
        <label>Store URL<input name="store" type="url" autoComplete="url" placeholder="https://yourstore.com" /></label>
      </div>
      <div className="sdp-form-service-fields">
        {formConfig.fields.map((field) => <ServiceField field={field} key={field.name} />)}
      </div>
      <div className="sdp-form-generic-fields">
      <label>Daily order volume
        <select name="volume" defaultValue="" disabled>
          <option value="" disabled>Select a range</option>
          <option>Testing / pre-launch</option>
          <option>1–10 orders</option>
          <option>11–50 orders</option>
          <option>51–200 orders</option>
          <option>200+ orders</option>
        </select>
      </label>
      <label>Tell us about your business *
        <textarea name="message" rows="4" disabled placeholder="Products, destination markets, current challenges and what you need help with." />
      </label>
      </div>
      <button className="ff-btn ff-btn-primary" type="submit">Request my {service.menuTitle} plan<FiArrowRight /></button>
      <div className="sdp-form-trust"><span><FiCheck />No obligation</span><span><FiClock />Reply within one business day</span></div>
      <small>Your details are used only to review and respond to this enquiry.</small>
    </form>
  );
}

export default function ServiceDetailPage({ service }) {
  const related = servicePages.filter((item) => item.slug !== service.slug).slice(0, 3);
  const story = getServiceStory(service.slug);
  const conversion = getServiceConversion(service.slug);

  return (
    <main className="ff-site sdp-page">
      <section className="sdp-hero">
        <Image src={service.image} alt={`${service.menuTitle} workflow illustration`} fill priority sizes="100vw" />
        <div className="sdp-hero-overlay" />
        <div className="container sdp-hero-grid">
          <article className="sdp-hero-card">
            <span className="ff-kicker">{service.eyebrow}</span>
            <h1>{service.title}</h1>
            <p>{service.lead}</p>
            <ul>{service.heroPoints.map((point) => <li key={point}><FiCheck />{point}</li>)}</ul>
            <a className="sdp-hero-jump" href="#service-quote">Build this service plan<FiArrowRight /></a>
          </article>
          <ServiceQuoteForm service={service} formConfig={conversion.form} />
        </div>
      </section>

      <section className="sdp-outcomes">
        <div className="container">{service.outcomes.map(([title, text], index) => <article key={title}><small>0{index + 1}</small><h3>{title}</h3><p>{text}</p></article>)}</div>
      </section>

      <section className={`ff-section sdp-problem sdp-story sdp-story-${story.style}`}>
        <div className="container sdp-problem-grid sdp-story-grid">
          <div className="sdp-story-copy"><span className="ff-kicker">{story.eyebrow}</span><h2>{service.problemTitle}</h2><p>{service.problemLead}</p><Link className="ff-btn ff-btn-dark" href="/#quote">Discuss your requirements<FiArrowRight /></Link></div>
          <div className={`sdp-problem-visual sdp-story-visual${story.imageMode === "contain" ? " sdp-story-visual-contain" : ""}`}>
            <Image src={story.image} alt={story.imageAlt} fill sizes="(max-width: 900px) 100vw, 50vw" />
            <span className="sdp-story-badge"><FiCheck />{story.badge}</span>
            <div className="sdp-story-panel">
              {story.stages.map(([title, text], index) => (
                <article key={title}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <div><strong>{title}</strong><small>{text}</small></div>
                  {index < story.stages.length - 1 && <FiArrowRight aria-hidden="true" />}
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className={`ff-section sdp-capabilities sdp-capabilities-${service.capabilityStyle}`}>
        <div className="container">
          <div className="ff-heading ff-heading-split ff-heading-dark"><div><span className="ff-kicker ff-kicker-light">WHAT WE HANDLE</span><h2>{service.capabilitiesTitle}</h2></div><p>{service.capabilitiesLead}</p></div>
          <div className="sdp-capability-grid">{service.capabilities.map(([title, text], index) => { const Icon = capabilityIcons[index]; return <article key={title}><span><Icon /></span><h3>{title}</h3><p>{text}</p></article>; })}</div>
        </div>
      </section>

      <section className={`ff-section sdp-process sdp-process-${service.processStyle}`}>
        <div className="container">
          <div className="ff-heading ff-heading-split">
            <div><span className="ff-kicker">{service.processEyebrow}</span><h2>{service.processTitle}</h2></div>
            <p>{service.processLead}</p>
          </div>
          <div className="sdp-process-grid">{service.process.map(([number, title, text]) => <article key={number}><span>{number}</span><div><h3>{title}</h3><p>{text}</p></div></article>)}</div>
        </div>
      </section>

      <section className={`ff-section sdp-spotlight sdp-spotlight-${service.spotlight.style}`}>
        <div className="container">
          <div className="ff-heading ff-heading-split">
            <div><span className="ff-kicker">{service.spotlight.eyebrow}</span><h2>{service.spotlight.title}</h2></div>
            <p>{service.spotlight.lead}</p>
          </div>
          <div className="sdp-spotlight-grid">
            {service.spotlight.items.map(([title, text], index) => (
              <article key={title}>
                <span>0{index + 1}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={`ff-section sdp-feature sdp-feature-${story.style}`}>
        <div className="container sdp-feature-grid">
          <div className="sdp-feature-image"><Image src={story.feature.image} alt={story.feature.imageAlt} fill sizes="(max-width: 900px) 100vw, 50vw" /><span><FiShield />{story.feature.badge}</span></div>
          <div><span className="ff-kicker">{story.feature.eyebrow}</span><h2>{service.featureTitle}</h2><p>{service.featureLead}</p><ul>{service.featurePoints.map((point) => <li key={point}><FiCheck />{point}</li>)}</ul><Link className="ff-btn ff-btn-dark" href="/#quote">Build your service plan<FiArrowRight /></Link></div>
        </div>
      </section>

      <section className={`ff-section sdp-case sdp-case-${story.style}`}>
        <div className="container sdp-case-grid">
          <div className="sdp-case-copy">
            <span className="ff-kicker">{conversion.caseStudy.eyebrow}</span>
            <h2>{conversion.caseStudy.title}</h2>
            <p className="sdp-case-profile"><FiGlobe />{conversion.caseStudy.profile}</p>
            <div className="sdp-case-challenge"><small>THE OPERATING CHALLENGE</small><p>{conversion.caseStudy.challenge}</p></div>
            <Link className="ff-btn ff-btn-dark" href="#service-quote">Discuss a similar project<FiArrowRight /></Link>
          </div>
          <div className="sdp-case-board">
            <div className="sdp-case-plan">
              <small>THE SERVICE PLAN</small>
              <ol>{conversion.caseStudy.plan.map((step, index) => <li key={step}><span>0{index + 1}</span>{step}</li>)}</ol>
            </div>
            <div className="sdp-case-proof">
              <small>VISIBLE DELIVERABLES</small>
              <div>{conversion.caseStudy.evidence.map((item) => <span key={item}><FiCheck />{item}</span>)}</div>
            </div>
            <blockquote><FiClipboard /><p>{conversion.caseStudy.outcome}</p></blockquote>
            <p className="sdp-case-note">Representative operating scenario shown without customer-identifying information or unverified performance claims.</p>
          </div>
        </div>
      </section>

      <section className="sdp-platforms">
        <div className="container"><span><FiGlobe />WORKS WITH YOUR ECOMMERCE WORKFLOW</span><div>{service.platforms.map((platform) => <strong key={platform}>{platform}</strong>)}</div></div>
      </section>

      <section className="ff-section sdp-faq">
        <div className="container ff-faq-grid">
          <div className="ff-faq-intro"><span className="ff-kicker">SERVICE FAQ</span><h2>Questions about {service.menuTitle}?</h2><p>The exact operating scope depends on your product, markets, volume and customer promise.</p><Link className="ff-btn ff-btn-dark" href="/#quote">Ask our team<FiArrowRight /></Link></div>
          <div className="ff-faq-list">{service.faqs.map(([question, answer], index) => <details key={question} open={index === 0}><summary>{question}<span>+</span></summary><p>{answer}</p></details>)}</div>
        </div>
      </section>

      <section className="ff-section sdp-related">
        <div className="container"><div className="ff-heading ff-heading-split"><div><span className="ff-kicker">RELATED SERVICES</span><h2>Connect the rest of the order journey.</h2></div><Link href="/services">View all services<FiArrowRight /></Link></div><div className="sdp-related-grid">{related.map((item) => <Link href={`/services/${item.slug}`} key={item.slug}><span>{item.eyebrow}</span><h3>{item.menuTitle}</h3><p>{item.lead}</p><strong>Explore service<FiArrowRight /></strong></Link>)}</div></div>
      </section>

      <section className="sdp-final-cta"><div className="container"><div><span>START WITH YOUR CURRENT PRODUCT OR STORE</span><h2>Build a service scope around the way you actually sell.</h2></div><Link className="ff-btn ff-btn-primary" href="/#quote">Get a free quote<FiArrowRight /></Link></div></section>
    </main>
  );
}

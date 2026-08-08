import Link from "next/link";
import { FiArrowRight, FiCheck, FiMessageCircle } from "react-icons/fi";
import { detailGuides } from "@config/detail-guides";

export default function MarketingDetail({ page }) {
  const guide = detailGuides[page.eyebrow];
  return (
    <main className="detail-page">
      <section className="detail-hero">
        <div className="detail-glow" />
        <div className="container relative z-10">
          <div className="detail-hero-grid">
            <div>
              <span className="smt-eyebrow">{page.eyebrow}</span>
              <h1>{page.title}<span>{page.highlight}</span></h1>
              <p>{page.intro}</p>
              <div className="smt-hero-actions">
                <Link className="smt-button smt-button-primary" href="/#quote">Get a free assessment <FiArrowRight /></Link>
                <Link className="smt-button smt-button-ghost" href={page.secondary.href}>{page.secondary.label}</Link>
              </div>
            </div>
            <div className="detail-hero-card">
              <small>{page.card.label}</small>
              <strong>{page.card.value}</strong>
              <p>{page.card.text}</p>
              <div>{page.card.points.map((point) => <span key={point}><FiCheck /> {point}</span>)}</div>
            </div>
          </div>
        </div>
      </section>

      <section className="detail-overview"><div className="container">
        <div className="detail-heading"><span className="smt-kicker">{page.overview.kicker}</span><h2>{page.overview.title}</h2><p>{page.overview.text}</p></div>
        <div className="detail-card-grid">{page.overview.cards.map((card, index) => <article key={card.title}><span>0{index + 1}</span><h3>{card.title}</h3><p>{card.text}</p></article>)}</div>
      </div></section>

      <section className="detail-dark"><div className="container detail-split">
        <div><span className="smt-kicker light">{page.feature.kicker}</span><h2>{page.feature.title}</h2><p>{page.feature.text}</p></div>
        <div className="detail-list">{page.feature.items.map((item, index) => <div key={item.title}><span>{String(index + 1).padStart(2, "0")}</span><div><h3>{item.title}</h3><p>{item.text}</p></div></div>)}</div>
      </div></section>

      <section className="detail-guide"><div className="container">
        <div className="detail-heading"><span className="smt-kicker">{guide.kicker}</span><h2>{guide.title}</h2><p>{guide.text}</p></div>
        <div className="detail-guide-grid">
          <div className="detail-guide-panel"><small>{guide.leftLabel}</small>{guide.left.map((item) => <div key={item.title}><FiCheck /><span><strong>{item.title}</strong><p>{item.text}</p></span></div>)}</div>
          <div className="detail-guide-panel accent"><small>{guide.rightLabel}</small>{guide.right.map((item) => <div key={item.title}><FiArrowRight /><span><strong>{item.title}</strong><p>{item.text}</p></span></div>)}</div>
        </div>
        <div className="detail-mini-faq"><div><span className="smt-kicker">PAGE-SPECIFIC FAQ</span><h2>Questions worth answering early.</h2></div><div>{guide.faq.map(([question, answer], index) => <details key={question} open={index === 0}><summary>{question}<span>+</span></summary><p>{answer}</p></details>)}</div></div>
      </div></section>

      <section className="detail-results"><div className="container">
        <div className="detail-heading centered"><span className="smt-kicker">WHAT YOU GAIN</span><h2>{page.results.title}</h2><p>{page.results.text}</p></div>
        <div className="detail-result-grid">{page.results.items.map((item) => <article key={item.title}><strong>{item.value}</strong><h3>{item.title}</h3><p>{item.text}</p></article>)}</div>
      </div></section>

      <section className="detail-cta detail-dark"><div className="container"><div><span className="smt-kicker light">READY TO MOVE FORWARD?</span><h2>{page.cta}</h2></div><Link className="smt-button smt-button-primary" href="/#quote">Talk to a specialist <FiMessageCircle /></Link></div></section>
    </main>
  );
}

import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
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

export default function HowItWorksRedesign() {
  const t = useTranslations("HowItWorks");
  const startingIcons = [FiSearch, FiSend, FiClipboard, FiShield];
  const stageIcons = [FiSend, FiSearch, FiShield, FiPackage, FiTruck];
  const trackIcons = [FiSearch, FiClipboard, FiTruck];
  const exceptionIcons = [FiShield, FiClipboard, FiCheckCircle];
  const startingDetails = t.raw("startingDetails");
  const stages = t.raw("stages");
  const checkpoints = t.raw("checkpoints");
  const faqs = t.raw("faqs");
  const hero = t.raw("hero");
  const start = t.raw("start");
  const journey = t.raw("journey");
  const approval = t.raw("approval");
  const tracks = t.raw("tracks");
  const exceptions = t.raw("exceptions");
  const faq = t.raw("faq");
  const final = t.raw("final");
  return (
    <main className="hiw-page">
      <section className="hiw-hero">
        <div className="hiw-hero-copy">
          <p className="hiw-kicker">{hero.kicker}</p>
          <h1>{hero.title}</h1>
          <p>{hero.lead}</p>
          <div className="hiw-actions">
            <Link href="/contact" className="hiw-button hiw-button-primary">{hero.primary} <FiArrowRight /></Link>
            <a href="#five-stages" className="hiw-button hiw-button-ghost">{hero.secondary}</a>
          </div>
          <ul>{hero.proofs.map((proof) => <li key={proof}><FiCheck /> {proof}</li>)}</ul>
          <div className="hiw-hero-live" aria-hidden="true">
            <div className="hiw-hero-live-head">
              <span>{hero.liveLabel}</span>
              <strong>{hero.liveStatus}</strong>
            </div>
            <div className="hiw-hero-live-progress">
              <span />
              <span />
              <span />
              <span />
            </div>
            <div className="hiw-hero-live-text">
              {hero.updates.map((update, index) => <i key={update}><b>{String(index + 1).padStart(2, "0")}</b> {update}</i>)}
            </div>
            <div className="hiw-hero-live-foot">
              <span>{hero.owner}</span>
              <span>{hero.next}</span>
            </div>
          </div>
        </div>
        <div className="hiw-hero-media">
          <div className="hiw-hero-panel" aria-hidden="true">
            <div className="hiw-hero-panel-head">
              <span>{hero.liveLabel}</span>
              <strong>{hero.reviewStatus}</strong>
            </div>
            <div className="hiw-hero-progress">
              <span />
              <span />
              <span />
              <span />
            </div>
            <div className="hiw-hero-review">
              <span>{hero.briefLabel}</span>
              <strong>{hero.brief}</strong>
            </div>
          </div>
          <div className="hiw-hero-board" aria-hidden="true">
            {hero.board.map((item, index) => <span key={item}><b>{String(index + 1).padStart(2, "0")}</b> {item}</span>)}
          </div>
        </div>
      </section>

      <section className="hiw-start">
        <div className="hiw-container hiw-start-grid">
          <div><p className="hiw-kicker">{start.kicker}</p><h2>{start.title}</h2><p>{start.lead}</p></div>
          <ul>{startingDetails.map(({ title, copy }, index) => { const Icon = startingIcons[index]; return <li key={title}><span>{String(index + 1).padStart(2, "0")}</span><Icon /><strong>{title}</strong><p>{copy}</p></li>; })}</ul>
        </div>
      </section>

      <section className="hiw-stages" id="five-stages">
        <div className="hiw-container">
          <header className="hiw-heading"><div><p className="hiw-kicker">{journey.kicker}</p><h2>{journey.title}</h2></div><p>{journey.lead}</p></header>
          <div className="hiw-stage-list">
            {stages.map(({ number, title, kicker, image, intro, provide, handle, receive }, index) => {
              const Icon = stageIcons[index];
              return (
              <article className="hiw-stage" key={number}>
                <div className="hiw-stage-number"><span>{number}</span><Icon /></div>
                <div className="hiw-stage-content">
                  <p className="hiw-kicker">{kicker}</p><h3>{title}</h3><p className="hiw-stage-intro">{intro}</p>
                  <dl><div><dt>{journey.provide}</dt><dd>{provide}</dd></div><div><dt>{journey.handle}</dt><dd>{handle}</dd></div><div><dt>{journey.receive}</dt><dd>{receive}</dd></div></dl>
                </div>
                <div className="hiw-stage-media"><Image src={image} alt="" fill sizes="(max-width: 800px) 100vw, 34vw" /></div>
              </article>
            );})}
          </div>
        </div>
      </section>

      <section className="hiw-approval">
        <div className="hiw-container hiw-approval-grid">
          <div><p className="hiw-kicker">{approval.kicker}</p><h2>{approval.title}</h2><p>{approval.lead}</p><div className="hiw-approval-proof" aria-hidden="true"><span><strong>3</strong> {approval.proofs[0]}</span><span><strong>0</strong> {approval.proofs[1]}</span><span><strong>1</strong> {approval.proofs[2]}</span></div></div>
          <ol>{checkpoints.map(([title, copy], index) => <li key={title}><span>{String(index + 1).padStart(2, "0")}</span><div><h3>{title}</h3><p>{copy}</p></div><FiCheckCircle /></li>)}</ol>
        </div>
      </section>

      <section className="hiw-tracks">
        <div className="hiw-container">
          <header className="hiw-heading"><div><p className="hiw-kicker">{tracks.kicker}</p><h2>{tracks.title}</h2></div><p>{tracks.lead}</p></header>
          <div className="hiw-track-grid">
            {tracks.items.map((item, index) => { const Icon = trackIcons[index]; return <article key={item.title}><Icon /><p className="hiw-kicker">{item.kicker}</p><h3>{item.title}</h3><p>{item.copy}</p><Link href={item.href}>{item.link} <FiArrowRight /></Link></article>; })}
          </div>
        </div>
      </section>

      <section className="hiw-exceptions">
        <div className="hiw-container hiw-exception-grid">
          <div className="hiw-exception-media">
            <Image src="/images/generated/jw-qc-inspection-v3.png" alt={exceptions.imageAlt} fill sizes="(max-width: 850px) 100vw, 48vw" />
            <div className="hiw-exception-status" aria-hidden="true">
              <span>{exceptions.statusLabel}</span>
              <strong>{exceptions.status}</strong>
            </div>
          </div>
          <div className="hiw-exception-copy">
            <p className="hiw-kicker">{exceptions.kicker}</p>
            <h2>{exceptions.title}</h2>
            <p>{exceptions.lead}</p>
            <div className="hiw-exception-flow">
              {exceptions.steps.map(([title, copy], index) => { const Icon = exceptionIcons[index]; return <article key={title}><Icon /><span>{String(index + 1).padStart(2, "0")}</span><strong>{title}</strong><p>{copy}</p></article>; })}
            </div>
            <div className="hiw-exception-note">
              <span>{exceptions.queue}</span>
              <strong>{exceptions.queueStatus}</strong>
            </div>
          </div>
        </div>
      </section>

      <section className="hiw-faq">
        <div className="hiw-container hiw-faq-grid">
          <div><p className="hiw-kicker">{faq.kicker}</p><h2>{faq.title}</h2><p>{faq.lead}</p></div>
          <div className="hiw-accordion">{faqs.map(([question, answer], index) => <details name="hiw-faq" key={question} open={index === 0}><summary>{question}<span aria-hidden="true">⌄</span></summary><p>{answer}</p></details>)}</div>
        </div>
      </section>

      <section className="hiw-final">
        <div className="hiw-container">
          <div className="hiw-final-copy">
            <p className="hiw-kicker">{final.kicker}</p>
            <h2>{final.title}</h2>
            <p>{final.lead}</p>
          </div>
          <div className="hiw-final-guide" aria-hidden="true">
            <span>{final.product}</span>
            <i />
            <span>{final.quote}</span>
          </div>
          <Link href="/contact" className="hiw-button hiw-button-light">{final.button} <FiArrowRight /></Link>
        </div>
      </section>
    </main>
  );
}

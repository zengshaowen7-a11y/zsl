import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import PreparationEntrance from "./components/PreparationEntrance";
import PreparationChecklist from "./components/PreparationChecklist";
import ExceptionDecisionScene from "./components/ExceptionDecisionScene";
import FinalQuoteLauncher from "./components/FinalQuoteLauncher";
import ApprovalEntrance from "./components/ApprovalEntrance";
import HowItWorksTrackSelector from "./components/HowItWorksTrackSelector";
import {
  FiArrowRight,
  FiCheck,
  FiClipboard,
  FiPackage,
  FiSearch,
  FiSend,
  FiShield,
  FiTruck,
} from "react-icons/fi";

export default function HowItWorksRedesign() {
  const t = useTranslations("HowItWorks");
  const stageIcons = [FiSend, FiSearch, FiShield, FiPackage, FiTruck];
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

      <section className="hiw-start hiw-brief" id="what-to-send" aria-labelledby="preparation-title">
        <PreparationEntrance>
          <header className="hiw-brief-heading" data-preparation-reveal>
            <p className="hiw-kicker">{start.kicker}</p>
            <h2 id="preparation-title">{start.title}</h2>
            <p className="hiw-brief-lead">{start.lead}</p>
            <div className="hiw-brief-progress" aria-hidden="true"><span>01 / 04</span><i /></div>
          </header>
          <PreparationChecklist items={startingDetails} />
        </PreparationEntrance>
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

      <section className="hiw-approval hiw-gates" id="approval-checkpoints" aria-labelledby="approval-checkpoints-title">
        <ApprovalEntrance>
          <header className="hiw-gates-heading" data-gate-reveal>
            <p className="hiw-kicker">{approval.kicker}</p>
            <h2 id="approval-checkpoints-title">{approval.title}</h2>
            <p className="hiw-gates-lead">{approval.lead}</p>
          </header>
          <ol className="hiw-gates-list">
            {checkpoints.map(([title, copy], index) => (
              <li key={title} data-gate-reveal style={{ "--gate-delay": `${index * 140}ms` }}>
                <div className="hiw-gate-rail" aria-hidden="true"><span>{String(index + 1).padStart(2, "0")}</span><i /></div>
                <div className="hiw-gate-copy"><h3>{title}</h3><p>{copy}</p></div>
              </li>
            ))}
          </ol>
          <p className="hiw-gates-note"><FiClipboard aria-hidden="true" />{approval.proofs[2]}</p>
        </ApprovalEntrance>
      </section>

      <section className="hiw-tracks" id="current-stage" aria-labelledby="current-stage-title">
        <HowItWorksTrackSelector content={tracks} />
      </section>

      <section className="hiw-exceptions">
        <ExceptionDecisionScene content={exceptions} />
      </section>

      <section className="hiw-faq">
        <div className="hiw-container hiw-faq-grid">
          <div><p className="hiw-kicker">{faq.kicker}</p><h2>{faq.title}</h2><p>{faq.lead}</p></div>
          <div className="hiw-accordion">{faqs.map(([question, answer], index) => <details name="hiw-faq" key={question} open={index === 0}><summary>{question}<span aria-hidden="true">⌄</span></summary><p>{answer}</p></details>)}</div>
        </div>
      </section>

      <section className="hiw-final">
        <FinalQuoteLauncher content={final} />
      </section>
    </main>
  );
}

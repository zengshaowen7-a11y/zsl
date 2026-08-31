import { aboutMaterialPlan } from "@config/about-materials";
import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
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
  const t = useTranslations("About.media");
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
      <span className="about-material-label"><TypeIcon />{item.type} · {item.src ? t("licensed") : t("needed")}</span>
      {video && <span className="about-play"><FiPlay /></span>}
      <div className="about-media-copy"><strong>{item.title}</strong><p>{item.brief}</p><small>{item.credit || item.spec}</small></div>
    </article>
  );
}

export default function FulfillmentAboutPage() {
  const t = useTranslations("About");
  const departments = t.raw("departments");
  const principles = t.raw("principles");
  const teamRoles = t.raw("teamRoles");
  const trustQuestions = t.raw("questions");
  const hero = t.raw("hero");
  const story = t.raw("story");
  const departmentsSection = t.raw("departmentsSection");
  const facility = t.raw("facility");
  const principlesSection = t.raw("principlesSection");
  const team = t.raw("team");
  const verification = t.raw("verification");
  const faq = t.raw("faq");
  const final = t.raw("final");
  const departmentIcons = [FiMessageCircle, FiSearch, FiShield, FiBox, FiTruck];
  const principleIcons = [FiEye, FiClipboard, FiShield, FiHeart];
  return (
    <main className="ff-site about-page">
      <section className="about-hero">
        <div className="about-hero-orbit" />
        <div className="container about-hero-grid">
          <div className="about-hero-copy">
            <span className="ff-kicker ff-kicker-light">{hero.kicker}</span>
            <h1>{hero.title}</h1>
            <p>{hero.lead}</p>
            <div className="ff-actions"><Link className="ff-btn ff-btn-primary" href="/contact">{hero.primary}<FiArrowRight /></Link><a className="ff-btn ff-btn-ghost" href="#inside">{hero.secondary}</a></div>
            <div className="about-hero-points">{hero.points.map((point) => <span key={point}><FiCheck />{point}</span>)}</div>
          </div>
          <MediaCard item={aboutMaterialPlan.media.heroFilm} className="about-hero-media" />
        </div>
      </section>

      <section className="about-proof-band" aria-label={hero.proofLabel}>
        <div className="container about-proof-grid">
          {aboutMaterialPlan.proofStats.map(({ value, label, note }, index) => <article key={label}><small>0{index + 1}</small><strong>{value}</strong><span>{label}<em>{note}</em></span></article>)}
        </div>
      </section>

      <section className="ff-section about-story">
        <div className="container about-story-grid">
          <div className="about-story-copy"><span className="ff-kicker">{story.kicker}</span><h2>{story.title}</h2>{story.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}<Link href="/services" className="ff-text-link">{story.link}<FiArrowRight /></Link></div>
          <div className="about-story-visual"><MediaCard item={aboutMaterialPlan.media.founderStory} /><div className="about-story-note"><strong>{story.noteTitle}</strong><span>{story.note}</span></div></div>
        </div>
      </section>

      <section id="inside" className="ff-section about-departments">
        <div className="container">
          <div className="ff-heading ff-heading-split ff-heading-dark"><div><span className="ff-kicker ff-kicker-light">{departmentsSection.kicker}</span><h2>{departmentsSection.title}</h2></div><p>{departmentsSection.lead}</p></div>
          <div className="about-department-grid">{departments.map(([title, text], index) => { const Icon = departmentIcons[index]; return <article key={title} style={{ "--about-index": index }}><span><Icon /></span><small>0{index + 1}</small><h3>{title}</h3><p>{text}</p><i /></article>; })}</div>
        </div>
      </section>

      <section className="ff-section about-facility">
        <div className="container">
          <div className="ff-heading ff-heading-split"><div><span className="ff-kicker">{facility.kicker}</span><h2>{facility.title}</h2></div><p>{facility.lead}</p></div>
          <div className="about-facility-grid"><MediaCard item={aboutMaterialPlan.media.warehouseWide} className="about-media-wide" /><MediaCard item={aboutMaterialPlan.media.qualityCloseup} /><MediaCard item={aboutMaterialPlan.media.packingFilm} /><MediaCard item={aboutMaterialPlan.media.dispatchPhoto} className="about-media-wide" /></div>
        </div>
      </section>

      <section className="ff-section about-principles">
        <div className="container">
          <div className="ff-heading ff-heading-centered"><span className="ff-kicker">{principlesSection.kicker}</span><h2>{principlesSection.title}</h2><p>{principlesSection.lead}</p></div>
          <div className="about-principle-grid">{principles.map(([title, text], index) => { const Icon = principleIcons[index]; return <article key={title}><span><Icon /></span><small>0{index + 1}</small><h3>{title}</h3><p>{text}</p></article>; })}</div>
        </div>
      </section>

      <section className="ff-section about-team">
        <div className="container about-team-grid">
          <div><span className="ff-kicker ff-kicker-light">{team.kicker}</span><h2>{team.title}</h2><p>{team.lead}</p><MediaCard item={aboutMaterialPlan.media.teamGroup} className="about-team-photo" /></div>
          <div className="about-role-grid">{teamRoles.map(([role, text], index) => <article key={role}><span><FiUser /></span><small>{team.portrait.replace("{number}", `0${index + 1}`)}</small><h3>{role}</h3><p>{text}</p></article>)}</div>
        </div>
      </section>

      <section className="ff-section about-verification">
        <div className="container">
          <div className="ff-heading ff-heading-split"><div><span className="ff-kicker">{verification.kicker}</span><h2>{verification.title}</h2></div><p>{verification.lead}</p></div>
          <div className="about-verification-layout"><div className="about-company-card"><div><FiMapPin /><span><small>{verification.profile}</small><strong>{verification.details}</strong></span></div>{aboutMaterialPlan.companyProfile.map(([label, value]) => <p key={label}><span>{label}</span><strong>{value}</strong></p>)}</div><div className="about-link-grid">{aboutMaterialPlan.links.map(([label, note], index) => <article key={label}><small>{verification.link.replace("{number}", `0${index + 1}`)}</small><FiExternalLink /><h3>{label}</h3><p>{note}</p></article>)}</div></div>
        </div>
      </section>

      <section className="ff-section about-faq">
        <div className="container ff-faq-grid"><div className="ff-faq-intro"><span className="ff-kicker">{faq.kicker}</span><h2>{faq.title}</h2><p>{faq.lead}</p><Link className="ff-btn ff-btn-dark" href="/contact">{faq.button}<FiArrowRight /></Link></div><div className="ff-faq-list">{trustQuestions.slice(0, 4).map(([question, answer], index) => <details key={question} open={index === 0}><summary>{question}<span>+</span></summary><p>{answer}</p></details>)}</div></div>
      </section>

      <section className="about-final-cta"><div className="container"><div><span>{final.kicker}</span><h2>{final.title}</h2></div><Link className="ff-btn ff-btn-primary" href="/contact">{final.button}<FiArrowRight /></Link></div></section>
    </main>
  );
}

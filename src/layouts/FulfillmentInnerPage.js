import { getFulfillmentCopy } from "@config/fulfillment-content";
import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { FiArrowRight, FiCheck, FiImage, FiPlay, FiShield, FiUsers } from "react-icons/fi";

function InnerHero({ copy, lang }) {
  return (
    <section className="ff-inner-hero">
      <div className="ff-hero-glow" />
      <div className="container ff-inner-hero-grid">
        <div><span className="ff-kicker ff-kicker-light">{copy.eyebrow}</span><h1>{copy.title}</h1><p>{copy.lead}</p><Link className="ff-btn ff-btn-primary" href="/contact">{lang === "zh" ? "获取免费报价" : "Get a free quote"}<FiArrowRight /></Link></div>
        <article className="ff-inner-summary"><small>{lang === "zh" ? "服务范围" : "SERVICE SCOPE"}</small><h2>{copy.cardTitle}</h2><p>{copy.cardLead}</p><ul>{copy.cardPoints.map((point) => <li key={point}><FiCheck />{point}</li>)}</ul></article>
      </div>
    </section>
  );
}

export function FulfillmentServices({ lang = "en" }) {
  const all = getFulfillmentCopy(lang);
  const c = all.servicesPage;
  const home = all.home;
  const isZh = lang === "zh";
  return (
    <main className="ff-site">
      <InnerHero copy={c} lang={lang} />
      <section className="ff-section ff-inner-services"><div className="container">
        <div className="ff-heading ff-heading-centered"><span className="ff-kicker">{home.servicesEyebrow}</span><h2>{c.sectionTitle}</h2><p>{home.servicesLead}</p></div>
        <div className="ff-detailed-services">{home.services.map(([id, title, text, image], index) => <article id={id} key={id}><div><Image src={image} alt="" fill sizes="(max-width: 800px) 100vw, 40vw" /></div><section><small>0{index + 1}</small><h3>{title}</h3><p>{text}</p><ul>{serviceDetails[lang][id].map((item) => <li key={item}><FiCheck />{item}</li>)}</ul></section></article>)}</div>
      </div></section>
      <section className="ff-section ff-service-workflow"><div className="container"><div className="ff-heading ff-heading-dark"><span className="ff-kicker ff-kicker-light">{isZh ? "合作流程" : "OPERATING WORKFLOW"}</span><h2>{c.workflowTitle}</h2></div><div className="ff-workflow-grid">{c.workflow.map(([title, text], index) => <article key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>
      <section className="ff-section ff-scope"><div className="container"><div className="ff-heading ff-heading-centered"><span className="ff-kicker">{isZh ? "按阶段选择" : "BUILT TO SCALE"}</span><h2>{c.compareTitle}</h2></div><div className="ff-scope-grid">{c.compare.map(([title, text], index) => <article key={title}><small>0{index + 1}</small><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>
      <section className="ff-inner-cta"><div className="container"><h2>{c.cta}</h2><Link className="ff-btn ff-btn-primary" href="/contact">{isZh ? "提交产品信息" : "Send your product details"}<FiArrowRight /></Link></div></section>
    </main>
  );
}

const serviceDetails = {
  en: {
    sourcing: ["Supplier comparison", "Sample coordination", "MOQ and lead-time review"],
    quality: ["Batch receiving checks", "Variant and appearance review", "Issue photos and reporting"],
    warehousing: ["SKU-based organization", "Packaging material storage", "Inventory visibility"],
    fulfillment: ["Order-level picking", "Packing rule confirmation", "Shipping line selection"],
    branding: ["Boxes, bags and labels", "Thank-you cards and inserts", "Private-label coordination"],
    integration: ["Platform order handoff", "SKU and variant mapping", "Tracking feedback workflow"],
  },
  zh: {
    sourcing: ["供应商对比", "样品协调", "起订量与交期评估"], quality: ["批次入库检查", "规格与外观确认", "异常照片和报告"], warehousing: ["按 SKU 管理", "包材与库存存放", "库存状态可见"], fulfillment: ["按订单拣货", "包装规则确认", "物流渠道选择"], branding: ["盒、袋和标签", "感谢卡和插页", "贴牌生产协调"], integration: ["平台订单交接", "SKU 与规格映射", "物流单号回传流程"],
  },
};

export function FulfillmentAbout({ lang = "en" }) {
  const c = getFulfillmentCopy(lang).aboutPage;
  const isZh = lang === "zh";
  return (
    <main className="ff-site">
      <InnerHero copy={c} lang={lang} />
      <section className="ff-section ff-about-story"><div className="container ff-about-story-grid"><div><span className="ff-kicker">{c.storyEyebrow}</span><h2>{c.storyTitle}</h2><p>{c.storyLead}</p></div><div className="ff-about-image"><Image src="/images/fulfillment/shipping.jpg" alt="Global shipping containers" fill sizes="(max-width: 1024px) 100vw, 50vw" /><span><FiShield />{isZh ? "从中国连接全球市场" : "Connecting China to global markets"}</span></div></div></section>
      <section className="ff-section ff-values"><div className="container"><div className="ff-heading ff-heading-centered"><span className="ff-kicker">{isZh ? "我们的工作原则" : "HOW WE WORK"}</span><h2>{isZh ? "把复杂供应链变成清晰日常运营" : "Turn a complex supply chain into a clear daily operation"}</h2></div><div className="ff-values-grid">{c.values.map(([title, text], index) => <article key={title}><small>0{index + 1}</small><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>
      <section className="ff-section ff-real-team"><div className="container"><div className="ff-heading ff-heading-split ff-heading-dark"><div><span className="ff-kicker ff-kicker-light">{isZh ? "真实团队" : "THE PEOPLE BEHIND THE PARCELS"}</span><h2>{c.teamTitle}</h2></div><p>{c.teamLead}</p></div><div className="ff-team-grid"><div className="ff-media-placeholder"><FiUsers /><strong>{isZh ? "团队合影" : "Team photography"}</strong><small>{isZh ? "替换为真实团队照片" : "Replace with your real team photo"}</small></div><div className="ff-media-placeholder"><span><FiPlay /></span><strong>{isZh ? "仓库参观视频" : "Warehouse walkthrough"}</strong><small>{isZh ? "替换为真实工作视频" : "Replace with your real operations video"}</small></div><div className="ff-media-placeholder ff-small-placeholder"><FiImage /><strong>{isZh ? "工作细节" : "Daily operations"}</strong></div></div></div></section>
      <section className="ff-section ff-operations"><div className="container ff-operations-grid"><div><span className="ff-kicker">{isZh ? "合作体验" : "WHAT YOU CAN EXPECT"}</span><h2>{c.operationsTitle}</h2></div><ul>{c.operations.map((item) => <li key={item}><FiCheck />{item}</li>)}</ul></div></section>
      <section className="ff-inner-cta"><div className="container"><h2>{c.cta}</h2><Link className="ff-btn ff-btn-primary" href="/contact">{isZh ? "联系我们" : "Start a conversation"}<FiArrowRight /></Link></div></section>
    </main>
  );
}

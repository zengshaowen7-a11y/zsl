"use client";

import { getFulfillmentCopy } from "@config/fulfillment-content";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FiArrowUpRight, FiGlobe, FiMail, FiMessageCircle } from "react-icons/fi";

export default function Footer() {
  const pathname = usePathname();
  const isZh = pathname === "/zh" || pathname.startsWith("/zh/");
  const { footer, nav } = getFulfillmentCopy(isZh ? "zh" : "en");
  const home = isZh ? "/zh" : "/";
  const services = isZh ? "/zh/services" : "/services";
  const about = isZh ? "/zh/about-us" : "/about-us";
  return <footer className="ff-footer"><div className="container">
    <div className="ff-footer-main">
      <div className="ff-footer-brand"><Link href={home}><span>F</span>FlowBridge</Link><p>{footer.lead}</p><div><span><FiGlobe />Global fulfillment</span><span><FiMessageCircle />Human support</span></div></div>
      <div><h3>{footer.services}</h3><Link href={`${services}#sourcing`}>{nav.serviceItems[0][0]}</Link><Link href={`${services}#quality`}>{nav.serviceItems[1][0]}</Link><Link href={`${services}#warehousing`}>{nav.serviceItems[2][0]}</Link><Link href={`${services}#fulfillment`}>{nav.serviceItems[3][0]}</Link></div>
      <div><h3>{footer.company}</h3><Link href={home}>{nav.home}</Link><Link href={services}>{nav.services}</Link><Link href={about}>{nav.about}</Link><Link href={`${home}/#faq`.replace("//", "/")}>{isZh ? "常见问题" : "FAQ"}</Link></div>
      <div><h3>{footer.contact}</h3><Link className="ff-footer-quote" href={`${home}/#quote`.replace("//", "/")}>{nav.quote}<FiArrowUpRight /></Link><span className="ff-footer-note"><FiMail />{isZh ? "公司邮箱待补充" : "Company email to be added"}</span></div>
    </div>
    <div className="ff-footer-bottom"><p>{footer.rights}</p><p>{isZh ? "中国采购 · 质量检验 · 全球履约" : "China sourcing · Quality control · Global fulfillment"}</p></div>
  </div></footer>;
}

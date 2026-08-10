import { getFulfillmentCopy } from "@config/fulfillment-content";
import { serviceCatalog } from "@config/service-catalog";
import Link from "next/link";
import { FiArrowUpRight, FiGlobe, FiMail, FiMessageCircle } from "react-icons/fi";

export default function Footer() {
  const { footer, nav } = getFulfillmentCopy("en");

  return (
    <footer className="ff-footer">
      <div className="container">
        <div className="ff-footer-main">
          <div className="ff-footer-brand">
            <Link href="/"><span>F</span>FlowBridge</Link>
            <p>{footer.lead}</p>
            <div>
              <span><FiGlobe />Global fulfillment</span>
              <span><FiMessageCircle />Human support</span>
            </div>
          </div>
          <div>
            <h3>{footer.services}</h3>
            {serviceCatalog.slice(0, 4).map((service) => (
              <Link href={`/services#${service.id}`} key={service.id}>{service.menuTitle}</Link>
            ))}
          </div>
          <div>
            <h3>{footer.company}</h3>
            <Link href="/">{nav.home}</Link>
            <Link href="/services">{nav.services}</Link>
            <Link href="/about-us">{nav.about}</Link>
            <Link href="/#faq">FAQ</Link>
          </div>
          <div>
            <h3>{footer.contact}</h3>
            <Link className="ff-footer-quote" href="/#quote">{nav.quote}<FiArrowUpRight /></Link>
            <span className="ff-footer-note"><FiMail />Company email to be added</span>
          </div>
        </div>
        <div className="ff-footer-bottom">
          <p>{footer.rights}</p>
          <p>China sourcing · Quality control · Global fulfillment</p>
        </div>
      </div>
    </footer>
  );
}

import { getFulfillmentCopy } from "@config/fulfillment-content";
import { serviceCatalog } from "@config/service-catalog";
import Logo from "@components/Logo";
import Link from "next/link";
import { FiArrowUpRight, FiGlobe, FiMessageCircle } from "react-icons/fi";

export default function Footer() {
  const { footer, nav } = getFulfillmentCopy("en");

  return (
    <footer className="ff-footer">
      <div className="container">
        <div className="ff-footer-main">
          <div className="ff-footer-brand">
            <Logo href="/" className="jw-footer-lockup" />
            <p>{footer.lead}</p>
            <div>
              <span><FiGlobe />Global fulfillment</span>
              <span><FiMessageCircle />Human support</span>
            </div>
          </div>
          <div>
            <h3>{footer.services}</h3>
            {serviceCatalog.slice(0, 4).map((service) => (
              <Link href={`/services/${service.slug}`} key={service.id}>{service.menuTitle}</Link>
            ))}
          </div>
          <div>
            <h3>{footer.company}</h3>
            <Link href="/">{nav.home}</Link>
            <Link href="/services">{nav.services}</Link>
            <Link href="/about-us">{nav.about}</Link>
            <Link href="/contact">{nav.contact || "Contact"}</Link>
            <a href="/#faq">FAQ</a>
          </div>
          <div>
            <h3>{footer.contact}</h3>
            <Link className="ff-footer-quote" href="/contact">{nav.quote}<FiArrowUpRight /></Link>
          </div>
        </div>
        <div className="ff-footer-bottom">
          <p>{footer.rights}</p>
          <p>Product sourcing · Quality control · Global fulfillment</p>
        </div>
      </div>
    </footer>
  );
}

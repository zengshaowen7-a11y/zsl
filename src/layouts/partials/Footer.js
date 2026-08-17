import { getFulfillmentCopy } from "@config/fulfillment-content";
import { serviceCatalog } from "@config/service-catalog";
import Logo from "@components/Logo";
import Link from "next/link";
import { FiGlobe, FiMail, FiMapPin, FiMessageCircle, FiPhone } from "react-icons/fi";

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
              <span><FiMessageCircle />Operations Team Support</span>
            </div>
          </div>
          <div>
            <h3>{footer.services}</h3>
            {serviceCatalog.slice(0, 8).map((service) => (
              <Link href={`/services/${service.slug}`} key={service.id}>{service.menuTitle}</Link>
            ))}
          </div>
          <div>
            <h3>{footer.company}</h3>
            <Link href="/">{nav.home}</Link>
            <Link href="/services">{nav.services}</Link>
            <Link href="/how-it-works">How It Works</Link>
            <Link href="/why-us">Why JW</Link>
            <Link href="/testimonials">Testimonials</Link>
            <Link href="/contact">Contact</Link>
          </div>
          <div className="ff-footer-contact">
            <h3>Contact Us</h3>
            <div className="ff-footer-contact-list">
              <p><FiMessageCircle aria-hidden="true" /><span><strong>WhatsApp</strong>+86 191 5771 1156</span></p>
              <p><FiPhone aria-hidden="true" /><span><strong>WeChat</strong>JW-Dropshipping-001</span></p>
              <p><FiMail aria-hidden="true" /><span><strong>Email</strong>hello@jwdropshipping.com</span></p>
              <p><FiMapPin aria-hidden="true" /><span><strong>Our Location</strong>Room 1208, Building A, Future Supply Chain Center, Hangzhou, Zhejiang, China</span></p>
            </div>
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

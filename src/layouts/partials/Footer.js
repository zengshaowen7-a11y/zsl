import { getServiceCatalog } from "@config/service-catalog";
import Logo from "@components/Logo";
import BrandBackdrop from "@layouts/components/BrandBackdrop";
import social from "@config/social.json";
import { Link } from "@/i18n/navigation";
import { useLocale, useTranslations } from "next-intl";
import { FiGlobe, FiMail, FiMapPin, FiMessageCircle } from "react-icons/fi";
import { FaFacebookF, FaInstagram, FaTiktok, FaXTwitter, FaYoutube } from "react-icons/fa6";

const socialLinks = [
  { label: "Facebook — JW Dropshipping", href: social.facebook, Icon: FaFacebookF, color: "#1877f2" },
  { label: "Instagram — JWDROPSHIPPING", href: social.instagram, Icon: FaInstagram, color: "#c13584" },
  { label: "TikTok — JWDROPSHIPPING", href: social.tiktok, Icon: FaTiktok, color: "#00a99d" },
  { label: "X — JWDROPSHIPPING", href: social.twitter, Icon: FaXTwitter, color: "#4b6475" },
  { label: "YouTube — JW DROPSHIPPING", href: social.youtube, Icon: FaYoutube, color: "#ff0000" },
];

export default function Footer() {
  const locale = useLocale();
  const t = useTranslations("Footer");
  const navT = useTranslations("Navigation");
  const serviceCatalog = getServiceCatalog(locale);

  return (
    <footer className="ff-footer jw-scene jw-footer-atmosphere" data-jw-motion="playing">
      <BrandBackdrop variant="network" globe={false} />
      <div className="container">
        <div className="ff-footer-main">
          <div className="ff-footer-brand">
            <Logo href="/" className="jw-footer-lockup" />
            <p>{t("lead")}</p>
            <div>
              <span><FiGlobe />{t("globalFulfillment")}</span>
              <span><FiMessageCircle />{t("operationsSupport")}</span>
            </div>
            <nav className="ff-footer-socials" aria-label="JW Dropshipping social media">
              {socialLinks.map(({ label, href, Icon, color }) => (
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  title={label}
                  style={{ "--social-brand": color }}
                  key={label}
                >
                  <Icon aria-hidden="true" />
                </a>
              ))}
            </nav>
          </div>
          <div>
            <h3>{t("services")}</h3>
            {serviceCatalog.slice(0, 8).map((service) => (
              <Link href={`/services/${service.slug}`} key={service.id}>{service.menuTitle}</Link>
            ))}
          </div>
          <div>
            <h3>{t("company")}</h3>
            <Link href="/">{navT("home")}</Link>
            <Link href="/services">{navT("services")}</Link>
            <Link href="/how-it-works">{navT("howItWorks")}</Link>
            <Link href="/why-us">{navT("whyUs")}</Link>
            <Link href="/testimonials">{navT("testimonials")}</Link>
            <Link href="/contact">{navT("contact")}</Link>
          </div>
          <div className="ff-footer-contact">
            <h3>{t("contactUs")}</h3>
            <div className="ff-footer-contact-list">
              <p><FiMessageCircle aria-hidden="true" /><span><strong>{t("whatsapp")}</strong>+1 314 357 5077</span></p>
              <p><FiMail aria-hidden="true" /><span><strong>{t("email")}</strong>hello@jwdropshipping.com</span></p>
              <p><FiMapPin aria-hidden="true" /><span><strong>{t("locationLabel")}</strong>{t("location")}</span></p>
            </div>
          </div>
        </div>
        <div className="ff-footer-bottom">
          <p>{t("rights")}</p>
          <p>{t("serviceSummary")}</p>
        </div>
      </div>
    </footer>
  );
}

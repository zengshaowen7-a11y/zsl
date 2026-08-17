import config from "@config/config.json";
import Image from "next/image";
import Link from "next/link";

const Logo = ({ href, className = "", onClick }) => (
  <Link
    href={href || config.site.base_url}
    className={`navbar-brand jw-brand-lockup ${className}`.trim()}
    aria-label="JW Dropshipping home"
    onClick={onClick}
  >
    <span className="jw-brand-symbol" aria-hidden="true">
      <Image
        src="/images/brand/jw-symbol-clean.png"
        alt=""
        fill
        priority
        sizes="52px"
      />
    </span>
    <span className="jw-brand-wordmark">
      <Image
        src="/images/brand/jw-wordmark-clean.png"
        alt="JW Dropshipping"
        fill
        priority
        sizes="190px"
      />
    </span>
  </Link>
);

export default Logo;

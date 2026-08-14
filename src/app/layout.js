import config from "@config/config.json";
import theme from "@config/theme.json";
import ScrollReveal from "@layouts/ScrollReveal";
import Footer from "@layouts/partials/Footer";
import Header from "@layouts/partials/Header";
import Providers from "@layouts/partials/Providers";
import "../styles/style.css";
import "../styles/services-heading-scale.css";
import "../styles/service-detail-polish.css";
import "../styles/service-story-layouts.css";
import "../styles/service-conversion.css";
import "../styles/home-polish.css";
import "../styles/brand-refresh.css";
import "../styles/about-polish.css";
import "../styles/contact-page.css";
import "../styles/media-motion.css";
import "../styles/home-testimonials.css";
import "../styles/light-green-theme.css";
import "../styles/site-unified-polish.css";

export const metadata = {
  metadataBase: new URL("https://zsl111.netlify.app"),
  title: "JW Dropshipping | Sourcing & Global Fulfillment",
  description:
    "China product sourcing, quality inspection, warehousing, branded packing and worldwide dropshipping fulfillment for independent eCommerce brands.",
  openGraph: {
    title: "JW Dropshipping | From product sourcing to your customers' doors",
    description:
      "End-to-end sourcing, quality control and global fulfillment for independent eCommerce brands.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "JW Dropshipping | Sourcing & Global Fulfillment",
    description:
      "End-to-end sourcing, quality control and global fulfillment for independent eCommerce brands.",
  },
};

export default function RootLayout({ children }) {
  const pf = theme.fonts.font_family.primary;
  const sf = theme.fonts.font_family.secondary;

  return (
    <html suppressHydrationWarning lang="en">
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=5"
        />
        <link rel="shortcut icon" href={config.site.favicon} />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href={`https://fonts.googleapis.com/css2?family=${pf}${
            sf ? "&family=" + sf : ""
          }&display=swap`}
          rel="stylesheet"
        />
        <meta name="theme-name" content="flowbridge-fulfillment" />
        <meta name="msapplication-TileColor" content="#e8f6ed" />
        <meta
          name="theme-color"
          media="(prefers-color-scheme: light)"
          content="#ffffff"
        />
        <meta
          name="theme-color"
          media="(prefers-color-scheme: dark)"
          content="#e8f6ed"
        />
      </head>
      <body suppressHydrationWarning>
        <Header />
        <ScrollReveal />
        <Providers>{children}</Providers>
        <Footer />
      </body>
    </html>
  );
}

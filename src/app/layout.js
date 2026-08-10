import config from "@config/config.json";
import theme from "@config/theme.json";
import ScrollReveal from "@layouts/ScrollReveal";
import Footer from "@layouts/partials/Footer";
import Header from "@layouts/partials/Header";
import Providers from "@layouts/partials/Providers";
import "../styles/style.css";

export const metadata = {
  metadataBase: new URL("https://zsl111.netlify.app"),
  title: "FlowBridge | China Sourcing & Global Fulfillment",
  description:
    "China product sourcing, quality inspection, warehousing, branded packing and worldwide dropshipping fulfillment for independent eCommerce brands.",
  openGraph: {
    title: "FlowBridge | From China factories to your customers' doors",
    description:
      "End-to-end sourcing, quality control and global fulfillment for independent eCommerce brands.",
    type: "website",
    images: [
      {
        url: "/images/fulfillment/flowbridge-social-preview.png",
        width: 1731,
        height: 909,
        alt: "FlowBridge sourcing, quality control, packing and global delivery journey",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "FlowBridge | China Sourcing & Global Fulfillment",
    description:
      "End-to-end sourcing, quality control and global fulfillment for independent eCommerce brands.",
    images: ["/images/fulfillment/flowbridge-social-preview.png"],
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
        <meta name="msapplication-TileColor" content="#071d33" />
        <meta
          name="theme-color"
          media="(prefers-color-scheme: light)"
          content="#ffffff"
        />
        <meta
          name="theme-color"
          media="(prefers-color-scheme: dark)"
          content="#071d33"
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

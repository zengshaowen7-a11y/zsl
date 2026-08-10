import { getFulfillmentCopy } from "@config/fulfillment-content";
import Link from "next/link";

export default function ThankYouPage() {
  const c = getFulfillmentCopy("en").thanks;
  return <main className="ff-thanks"><div><span>✓</span><h1>{c.title}</h1><p>{c.text}</p><Link className="ff-btn ff-btn-primary" href="/">{c.button}</Link></div></main>;
}

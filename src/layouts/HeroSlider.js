"use client";

import { Link } from "@/i18n/navigation";
import { useEffect, useState } from "react";
import { FiArrowLeft, FiArrowRight, FiCheck, FiZap } from "react-icons/fi";

const slides = [
  { eyebrow:"Shopify × Mabang ERP specialists", title:"Connect your Shopify operations.", highlight:"Scale without the chaos.", copy:"We help cross-border Shopify merchants build a clearer, faster order workflow with Mabang ERP — from assessment to assisted connection." },
  { eyebrow:"Human-led integration support", title:"Turn disconnected tasks into", highlight:"one clear workflow.", copy:"Bring products, orders, inventory and fulfilment responsibilities into a process your team can understand and operate." },
  { eyebrow:"Built for cross-border growth", title:"Spend less time coordinating.", highlight:"More time growing.", copy:"Get practical ERP guidance, responsive specialist support and a connection plan shaped around your real Shopify operation." },
];

export default function HeroSlider() {
  const [active, setActive] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => setActive((value) => (value + 1) % slides.length), 5200);
    return () => clearInterval(timer);
  }, []);
  const move = (direction) => setActive((active + direction + slides.length) % slides.length);

  return <div className="hero-slider">
    <div className="hero-slides">{slides.map((slide,index)=><div className={`hero-slide ${index===active?"active":""}`} aria-hidden={index!==active} key={slide.title}>
      <div className="smt-eyebrow"><FiZap /> {slide.eyebrow}</div>
      <h1>{slide.title}<br/><span>{slide.highlight}</span></h1>
      <p className="smt-hero-copy">{slide.copy}</p>
    </div>)}</div>
    <div className="smt-hero-actions"><Link className="smt-button smt-button-primary" href="/contact">Get a free assessment <FiArrowRight /></Link><a className="smt-button smt-button-ghost" href="#process">See how it works</a></div>
    <div className="smt-proof-row"><span><FiCheck /> Human-led setup</span><span><FiCheck /> Clear service scope</span><span><FiCheck /> Fast response</span></div>
    <div className="hero-slider-controls"><button onClick={()=>move(-1)} aria-label="Previous slide"><FiArrowLeft/></button><div>{slides.map((_,index)=><button className={index===active?"active":""} onClick={()=>setActive(index)} aria-label={`Go to slide ${index+1}`} key={`${active}-${index}`}><span/></button>)}</div><button onClick={()=>move(1)} aria-label="Next slide"><FiArrowRight/></button></div>
  </div>;
}

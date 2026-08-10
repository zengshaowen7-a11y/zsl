"use client";

import { useEffect } from "react";

export default function ChineseTranslator() {
  useEffect(() => {
    const previous = document.documentElement.lang;
    document.documentElement.lang = "zh-CN";
    return () => { document.documentElement.lang = previous || "en"; };
  }, []);
  return null;
}

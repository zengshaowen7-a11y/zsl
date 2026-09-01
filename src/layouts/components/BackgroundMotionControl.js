"use client";

import { useLocale } from "next-intl";
import { FiPause, FiPlay } from "react-icons/fi";

const labels = {
  en: ["Pause background motion", "Resume background motion"],
  de: ["Hintergrundanimation pausieren", "Hintergrundanimation fortsetzen"],
  fr: ["Mettre en pause les animations du fond", "Reprendre les animations du fond"],
  es: ["Pausar animación de fondo", "Reanudar animación de fondo"],
  nl: ["Achtergrondanimatie pauzeren", "Achtergrondanimatie hervatten"],
  pl: ["Wstrzymaj animację tła", "Wznów animację tła"],
  zh: ["暂停背景动效", "继续背景动效"],
};

export default function BackgroundMotionControl({ paused, onToggle }) {
  const locale = useLocale();
  const label = (labels[locale] || labels.en)[paused ? 1 : 0];
  const Icon = paused ? FiPlay : FiPause;

  return (
    <button type="button" className="jw-motion-toggle" onClick={onToggle} aria-label={label} title={label}>
      <Icon aria-hidden="true" />
    </button>
  );
}

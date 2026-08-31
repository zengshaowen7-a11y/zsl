// Interface labels only. The five stages' source copy remains in ServicesOverview.
export const servicesWorkflowUi = {
  en: {
    hint: "Select a stage to see how it works.",
    previous: "Previous stage",
    next: "Next stage",
    restart: "Back to the start",
    stage: "Stage",
    labels: ["Requirements", "Scope", "Preparation", "Fulfillment", "Tracking"],
  },
  de: {
    hint: "Wählen Sie eine Phase und erfahren Sie mehr.",
    previous: "Vorherige Phase",
    next: "Nächste Phase",
    restart: "Zur ersten Phase",
    stage: "Phase",
    labels: [
      "Anforderungen",
      "Leistungsumfang",
      "Vorbereitung",
      "Fulfillment",
      "Tracking",
    ],
  },
  fr: {
    hint: "Sélectionnez une étape pour découvrir son fonctionnement.",
    previous: "Étape précédente",
    next: "Étape suivante",
    restart: "Revenir au début",
    stage: "Étape",
    labels: ["Besoins", "Périmètre", "Préparation", "Exécution", "Suivi"],
  },
  es: {
    hint: "Selecciona una etapa para ver cómo funciona.",
    previous: "Etapa anterior",
    next: "Siguiente etapa",
    restart: "Volver al inicio",
    stage: "Etapa",
    labels: [
      "Requisitos",
      "Alcance",
      "Preparación",
      "Fulfillment",
      "Seguimiento",
    ],
  },
  nl: {
    hint: "Kies een fase en bekijk hoe het werkt.",
    previous: "Vorige fase",
    next: "Volgende fase",
    restart: "Terug naar het begin",
    stage: "Fase",
    labels: [
      "Behoeften",
      "Afspraken",
      "Voorbereiding",
      "Fulfillment",
      "Tracking",
    ],
  },
  pl: {
    hint: "Wybierz etap, aby zobaczyć, jak przebiega współpraca.",
    previous: "Poprzedni etap",
    next: "Następny etap",
    restart: "Wróć do początku",
    stage: "Etap",
    labels: ["Wymagania", "Zakres", "Przygotowanie", "Realizacja", "Śledzenie"],
  },
};

// Existing illustrative site assets, not documentary evidence of a specific project.
export const servicesWorkflowImages = [
  "/images/generated/jw-account-support-v3.png",
  "/images/generated/product-sourcing-hero.webp",
  "/images/generated/jw-qc-inspection-v3.png",
  "/images/generated/jw-branded-packing-v3.png",
  "/images/generated/jw-dispatch-scan-v3.png",
];

export function workflowKeyTarget(key, current, count) {
  if (!count) return null;
  if (key === "ArrowRight") return (current + 1) % count;
  if (key === "ArrowLeft") return (current - 1 + count) % count;
  if (key === "Home") return 0;
  if (key === "End") return count - 1;
  return null;
}

export const qcOutcomeDetails = [
  {
    "checks": "Genehmigte Probe · Spezifikationen",
    "output": "Untersuchungsgrundlage"
  },
  {
    "checks": "Menge · Aussehen · Funktion",
    "output": "Ausnahmeprotokoll"
  },
  {
    "checks": "Fotos · Notizen · Messungen",
    "output": "Nachweispfad"
  },
  {
    "checks": "Pass · Nacharbeiten · Halten",
    "output": "Freigabeentscheidung"
  }
];

export const qcProcessOutputs = [
  "Kontrollvorschriften",
  "Genehmigte Referenz",
  "Auffinden von Daten",
  "Nachweisbericht",
  "Freigaberuf"
];

export const proofContent = {
  "product-sourcing": {
    "eyebrow": "BEISPIEL ZUM VERGLEICHEN VON VERSORGERN",
    "title": "Lieferantenangebote vergleichen.",
    "image": "/images/generated/product-sourcing-hero.webp",
    "columns": [
      "Lieferanten",
      "Stückpreis",
      "MOQ",
      "Vorlaufzeit"
    ],
    "rows": [
      [
        "Lieferant A",
        "$8.40",
        "300",
        "18 Tage"
      ],
      [
        "Lieferant B",
        "$7.95",
        "500",
        "24 Tage"
      ],
      [
        "Lieferant C",
        "$9.10",
        "100",
        "14 Tage"
      ]
    ],
    "note": "Beispielhafter Vergleich. Die tatsächlichen Angebote hängen von der Spezifikation und der Lieferantenbewertung ab."
  },
  "quality-control-inspection": {
    "eyebrow": "BEISPIEL QC RELEASE RECORD",
    "title": "Machen Sie den Release Call.",
    "image": "/images/generated/jw-qc-inspection-v3.png",
    "columns": [
      "Kontrollpunkt",
      "Geprüft",
      "Themen",
      "Status"
    ],
    "rows": [
      [
        "SKU und Variante",
        "50",
        "0",
        "Passiert"
      ],
      [
        "Aussehen",
        "50",
        "2",
        "Überprüfung"
      ],
      [
        "Verpackung",
        "50",
        "0",
        "Passiert"
      ]
    ],
    "note": "Beispielschnittstelle, die zeigt, wie die Ergebnisse vor der Genehmigung organisiert werden können."
  },
  "3pl-fulfillment-services": {
    "eyebrow": "BEISPIEL VORSCHRIFTEN",
    "title": "Der Bestand bleibt sichtbar.",
    "image": "/images/generated/3pl-fulfillment-hero.webp",
    "columns": [
      "SKU",
      "Empfangen",
      "verfügbar",
      "Status"
    ],
    "rows": [
      [
        "JW-BLK- S",
        "500",
        "472",
        "verfügbar"
      ],
      [
        "JW-BLK-M",
        "500",
        "86",
        "Geringer Bestand"
      ],
      [
        "JW-BLK- L",
        "300",
        "0",
        "Neubestellung"
      ]
    ],
    "note": "Illustrative Inventaransicht - der endgültige Workflow hängt vom Lagerumfang ab."
  },
  "pod-fulfillment": {
    "eyebrow": "POD GENEHMIGUNGSGATEN",
    "title": "Halten Sie Kunstwerke, Varianten und physische Genehmigung verbunden.",
    "image": "/images/generated/jw-pod-production-v3.png",
    "columns": [
      "Tor",
      "Erforderlicher Input",
      "Eigentümer",
      "Status"
    ],
    "rows": [
      [
        "Kunstwerk",
        "Druckfertige Datei",
        "Marke",
        "Zugelassen"
      ],
      [
        "Probe",
        "Physikalische Referenz",
        "JW QC",
        "Überprüfung"
      ],
      [
        "Produktion",
        "SKU",
        "Workshop",
        "Warten"
      ]
    ],
    "note": "Beispielfreigabepfad für ein Print-on-Demand-Produkt."
  },
  "private-label": {
    "eyebrow": "BRANDBEREICHSPLANER",
    "title": "Wählen Sie Markenelemente nach Impact, MOQ und Timing.",
    "image": "/images/brand-showcase/paper-packaging-detail.jpg",
    "columns": [
      "Markenelement",
      "Typischer Input",
      "MOQ",
      "Phase"
    ],
    "rows": [
      [
        "Gedruckte Beilage",
        "Kunstwerk",
        "niedrig",
        "Beginn"
      ],
      [
        "Custom Mailer",
        "Größe + Druck",
        "Medium",
        "Waage"
      ],
      [
        "Produktetikett",
        "Produktspezifikation",
        "Sorten",
        "Marke"
      ]
    ],
    "note": "MOQ und Timing werden nach Material- und Lieferantenüberprüfung bestätigt."
  },
  "automatic-order-fulfillment": {
    "eyebrow": "AUFTRAGKONTROLLE",
    "title": "Befehle bereit zum Umzug.",
    "image": "/images/generated/automatic-fulfillment-hero.webp",
    "columns": [
      "Signal",
      "Status",
      "Aktion",
      "Output"
    ],
    "rows": [
      [
        "Neue Bestellung",
        "kartographiert",
        "Freigabe",
        "Fertig"
      ],
      [
        "Anschrift",
        "Fehlend",
        "Halt",
        "Überprüfung"
      ],
      [
        "Verschifft",
        "Gültig",
        "Sync",
        "Verfolgung"
      ]
    ],
    "summary": [
      [
        "Überholspur",
        "Aufträge mit abgebildetem SKUs und kompletten Feldern können sich ohne manuelles Jagen bewegen."
      ],
      [
        "Haltespur",
        "Bestellungen mit fehlenden Details bleiben sichtbar, bevor sie das Packen erreichen."
      ],
      [
        "Sync-Spur",
        "Veröffentlichte Bestellungen halten Tracking und Speicherstatus nach der Übergabe ausgerichtet."
      ]
    ],
    "note": "Beispielkontrollprotokoll. Die Verbindungsmethoden hängen von der Store-Plattform ab."
  },
  "china-fulfillment-center": {
    "eyebrow": "WARENKONTROLLZONE",
    "title": "Karte jede Handoff, bevor es Schiffe.",
    "image": "/images/evidence/warehouse-walkthrough-aisle.jpg",
    "columns": [
      "Zone",
      "Tätigkeit",
      "Kontrolle",
      "Output"
    ],
    "rows": [
      [
        "Empfang",
        "Registerwaren",
        "Eingehender Plan",
        "Eingang"
      ],
      [
        "QC",
        "Prüfcharge",
        "Checkliste",
        "Freigabe"
      ],
      [
        "Versand",
        "Endabtastung",
        "Reihenfolge",
        "Verfolgung"
      ]
    ],
    "note": "Das Betriebslayout wird um Produkt- und Lageranforderungen herum konfiguriert."
  },
  "dropshipping-supplier": {
    "eyebrow": "KONTROLLE DES AUFTRAGS",
    "title": "Halten Sie Produkt-, Verpackungs- und Versandkontext zusammen.",
    "image": "/images/generated/dropshipping-supplier-hero.webp",
    "columns": [
      "Phase",
      "Teamaktion",
      "Kontrolle",
      "Aktualisierung"
    ],
    "rows": [
      [
        "Quelle",
        "Lieferanten bestätigen",
        "Produktbeschreibung",
        "Zitat"
      ],
      [
        "Füllung",
        "Check und Pack",
        "Reihenfolge",
        "Fertig"
      ],
      [
        "Schiff",
        "Carrier Handoff",
        "Endabtastung",
        "Verfolgung"
      ]
    ],
    "summary": [
      [
        "Lieferantendaten",
        "Behalten Sie das Angebot, die Produktreferenz und den Kontaktkontext in einer Auftragsansicht."
      ],
      [
        "Verpackungsregel",
        "Speichern Sie Etiketten, Beilagen und Paketnotizen neben den SKU-Details."
      ],
      [
        "Versandübergabe",
        "Verfolgen Sie den letzten Carrier-Scan und die Statusaktualisierung zusammen."
      ]
    ],
    "note": "Beispiel Betriebsdatensatz für eine Direct-to-Customer-Bestellung."
  }
};

export const processIntroBySlug = {
  "dropshipping-supplier": {
    "title": "Was wir ausrichten, bevor tägliche Bestellungen live gehen.",
    "lead": "Wir halten die Lieferantenaufzeichnung, die Verpackungsregel und die Versandübergabe in einer Betriebsansicht, damit der Workflow leicht zu befolgen ist.",
    "points": [
      [
        "Lieferantendaten",
        "Angebot, Produktreferenz und Kontaktdaten bleiben zusammen."
      ],
      [
        "Verpackungsregel",
        "Etiketten, Beilagen und Paketnotizen folgen dem SKU."
      ],
      [
        "Versandübergabe",
        "Der letzte Carrier-Scan- und Tracking-Status bleibt sichtbar."
      ]
    ]
  },
  "automatic-order-fulfillment": {
    "leftEyebrow": "GENEHMIGUNGSFALL",
    "leftTitle": "Normale Bestellungen benötigen eine Spur.",
    "leftLead": "Shopify Store ersetzt Spreadsheet Warehouse Handoffs",
    "title": "Karten Sie Ihre Order Lane.",
    "lead": "Sagen Sie uns, wo Bestellungen beginnen, welche Daten heute fehlen und wie das Tracking nach dem Versand zurückkehren soll.",
    "points": [
      [
        "01",
        "Karte SKUs zu Lageraufzeichnungen"
      ],
      [
        "02",
        "Split Ausnahmegründe früh"
      ],
      [
        "03",
        "Rückverfolgung durch ein Handoff"
      ]
    ],
    "noteTitle": "Was uns hilft, die Spur zu kartieren",
    "noteLead": "Speicherfelder, SKU-Datensätze und Halteregeln erleichtern das Testen der automatischen Route vor dem Start."
  }
};

export const dropshipProcessStageLabels = [
  "Audit",
  "Lieferanten",
  "Vorschriften",
  "Test",
  "Lebend"
];

export const fitIntroBySlug = {
  "china-fulfillment-center": {
    "title": "Gebaut für Inbound Stock und Export.",
    "lead": "Ein Lagerfluss für Waren, Markenmaterialien und Kundenaufträge.",
    "tag": "WARNSTOFF",
    "asideTitle": "BESTE FITTE",
    "asideLead": "Wenn jede Übergabe einen Platz, eine Spur und einen klaren Besitzer braucht."
  },
  "product-sourcing": {
    "title": "Gebaut für Lieferantenentscheidungen.",
    "lead": "Jeder Pass entfernt Lieferanten, die nicht mit dem Produkt kurz, kommerzielle Bedingungen oder Erfüllungsanforderungen übereinstimmen können.",
    "noteTitle": "WAS DIE QUOTE ÄNDERT",
    "noteLead": "Verwenden Sie ein Produkt Brief so Preis, MOQ, Beispiel Notizen und Vorlaufzeit bleiben auf der gleichen Basis."
  },
  "automatic-order-fulfillment": {
    "title": "Saubere Bestellungen nehmen die Überholspur.",
    "lead": "Normale Aufträge bewegen sich in eine Richtung. Ausnahmen spalten sich früh auf, damit sie den täglichen Fluss nicht blockieren oder verfälschen.",
    "laneTags": [
      "kartographiert",
      "gehalten",
      "Synced"
    ]
  },
  "quality-control-inspection": {
    "title": "Gebaut für Chargen, die vor der Veröffentlichung einen Nachweis benötigen.",
    "lead": "Verwenden Sie diesen Service, wenn das Lager eine dokumentierte Pass-, Überprüfungs- oder Halteentscheidung benötigt, bevor das Inventar weitergeht.",
    "tag": "INSPEKTIONSFIT",
    "asideTitle": "BESTE FITTE",
    "asideLead": "Wenn das Produktrisiko einen sichtbaren Standard und einen klaren nächsten Schritt braucht."
  }
};

export const quoteDetailBySlug = {
  "dropshipping-supplier": {
    "checklist": [
      "Produktlink, Lieferant oder Produktreferenz",
      "Zielmärkte und täglicher Orderflow",
      "Verpackung, Branding und Versandregeln"
    ],
    "note": {
      "title": "Was wir zuerst überprüfen",
      "text": "Wir verwenden Ihren Produkt- und Versandkontext, um den Beschaffungs-, Verpackungs- und Lieferumfang zu gestalten, bevor das Angebot beginnt."
    },
    "titleClass": "sdr-dropshipping-quote-title"
  },
  "3pl-fulfillment-services": {
    "checklist": [
      "SKU Blatt oder Lagerkatalog",
      "Erwartete eingehende Einheiten und Lieferantenquellen",
      "Vorschriften für Lagerung, Bündelung und Verpackung"
    ],
    "note": {
      "title": "Was uns hilft, schneller einzuschätzen",
      "text": "Wenn Sie bereits SKU-Zahlen, Kartonsummen oder Lieferantenpläne haben, können wir Empfang, Lagerung und Versand genauer erfassen."
    }
  },
  "pod-fulfillment": {
    "checklist": [
      "Rohprodukt oder Produktreferenz",
      "Artwork Status und Druckbereich",
      "Erwartetes Volumen und Zielmärkte"
    ],
    "note": {
      "title": "Was uns hilft, POD schneller zu erweitern",
      "text": "Wenn das Kunstwerk noch in Arbeit ist, können wir noch das leere Produkt, den Probenweg, den Variantenmix und die Produktionsschritte überprüfen."
    },
    "titleClass": "sdr-pod-quote-title",
    "titleStyle": {
      "width": "max-Gehalt",
      "maxWidth": "nicht",
      "fontSize": "22px",
      "lineHeight": "1.05",
      "whiteSpace": "Garnelen",
      "textWrap": "Garnelen",
      "letterSpacing": "-0,02m"
    }
  },
  "private-label": {
    "checklist": [
      "Produkt- oder Musterlink",
      "Markenelemente starten zuerst",
      "Voraussichtliche Startmenge und Zeitpunkt"
    ],
    "note": {
      "title": "Was uns hilft, den Markenplan zu erweitern",
      "text": "Teilen Sie die Produktreferenz, die Marken-Touchpoints, die am wichtigsten sind, und das erste Produktionsziel, damit MOQ und Verpackungsentscheidungen praktisch bleiben."
    },
    "titleClass": "sdr-compact-quote-title"
  },
  "product-sourcing": {
    "checklist": [
      "Produktreferenz oder Produktspezifikation",
      "Zielstückkosten und Bestellmenge",
      "Materialien, Verpackung und Must-Have-Details"
    ],
    "note": {
      "title": "Was uns hilft, Lieferanten schneller zu vergleichen",
      "text": "Ein klarer Auftrag erleichtert den Vergleich von Angeboten, Probenahmen und Versandannahmen auf derselben Grundlage."
    },
    "titleClass": "sdr-compact-quote-title"
  },
  "automatic-order-fulfillment": {
    "checklist": [
      "Store-Plattform und Bestellquelle",
      "SKU Karte oder Produktkatalog",
      "Haltegründe und Tracking-Methode"
    ],
    "note": {
      "title": "Was uns hilft, die Spur zu kartieren",
      "text": "Speicherfelder, SKU-Datensätze und Halteregeln erleichtern das Testen der automatischen Route vor dem Start."
    },
    "titleClass": "sdr-compact-quote-title"
  },
  "china-fulfillment-center": {
    "checklist": [
      "Anzahl der Lieferanten oder eingehende Quellen",
      "SKU Anzahl und Karton Zeitplan",
      "Lagerung, QC und Versandanforderungen"
    ],
    "note": {
      "title": "Was uns hilft, das Lagerlayout zu planen",
      "text": "Inbound Flow, Produktmix und Versanderwartungen prägen, wie Empfang, Inspektion und Lagerung arrangiert werden sollten."
    },
    "titleClass": "sdr-compact-quote-title"
  },
  "quality-control-inspection": {
    "checklist": [
      "Produktreferenz oder Produktspezifikation",
      "Inspektionsstufe und Chargengröße",
      "Kritische Fehlerrisiken und Akzeptanzstandard"
    ],
    "note": {
      "title": "Was uns hilft, die Inspektion schneller durchzuführen",
      "text": "Der beste QC-Plan beginnt mit dem Produktstandard, der Phase, die Sie überprüfen möchten, und den Mängeln, die für die Kunden am wichtigsten sind."
    },
    "titleClass": "sdr-compact-quote-title"
  }
};

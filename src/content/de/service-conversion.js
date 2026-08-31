export const serviceConversionContent = {
  "dropshipping-supplier": {
    "form": {
      "eyebrow": "ÜBERPRÜFUNG DES DROPSHIPPINGPROJEKTS",
      "title": "Planen Sie Ihren Dropship Flow",
      "lead": "Teilen Sie die Produkte, Märkte und aktuelle Bestellroutine, damit wir den richtigen Beschaffungs-, Verpackungs- und Lieferumfang identifizieren können.",
      "fields": [
        {
          "name": "product_link",
          "label": "Produkt- oder Lieferantenlink",
          "type": "url",
          "placeholder": "Einfügen einer Produkt- oder Lieferanten-URL",
          "required": true
        },
        {
          "name": "daily_orders",
          "label": "Aktuelle tägliche Bestellungen",
          "type": "select",
          "options": [
            "Vorstart/Test",
            "1–10 Bestellungen",
            "11-50 Bestellungen",
            "51-200 Bestellungen",
            "200+ Bestellungen"
          ],
          "required": true
        },
        {
          "name": "destination_markets",
          "label": "Hauptbestimmungsmärkte",
          "type": "text",
          "placeholder": "z. B. Vereinigte Staaten, Vereinigtes Königreich, Deutschland",
          "required": true
        },
        {
          "name": "workflow_challenge",
          "label": "Was muss verbessert werden?",
          "type": "textarea",
          "placeholder": "Erzählen Sie uns von Lieferantenkoordination, Qualität, Verpackung, Lieferung oder Kundendienstproblemen.",
          "required": true,
          "wide": true
        }
      ]
    },
    "caseStudy": {
      "eyebrow": "VERTRETUNGSFALL",
      "title": "Lieferanten-Chats, ein Workflow.",
      "profile": "Unabhängiges Zubehörgeschäft für nordamerikanische und europäische Kunden",
      "challenge": "Produkt-, verpackungs- und versandupdates wurden über chats verteilt, ohne dass ein einziger besteller.",
      "plan": [
        "Produktreferenz bestätigen",
        "Festlegung von Verpackungs- und Versandregeln",
        "Rückgabestatus und Tracking"
      ],
      "evidence": [
        "Genehmigte Produktreferenz",
        "Packanweisung",
        "Auftrags- und Nachverfolgungsprotokoll"
      ],
      "outcome": "Ein Workflow zeigt den Besitzer, prüft und verfolgt für jede Bestellung."
    }
  },
  "3pl-fulfillment-services": {
    "form": {
      "eyebrow": "ÜBERPRÜFUNG DES WARENBEREICHS",
      "title": "Schätzen Sie Ihren 3PL",
      "lead": "Teilen Sie SKU zählt, gespeicherte Einheiten und täglichen Auftragsfluss, so dass der Lagereingang, die Lagerung und der Versandumfang genau geplant werden können.",
      "fields": [
        {
          "name": "sku_count",
          "label": "Anzahl aktiver SKUs",
          "type": "select",
          "options": [
            "1–10 SKUs",
            "11-50 SKUs",
            "51-200 SKUs",
            "200+ SKUs"
          ],
          "required": true
        },
        {
          "name": "inventory_units",
          "label": "Voraussichtlich gelagerte Einheiten",
          "type": "select",
          "options": [
            "Unter 500 Einheiten",
            "500–2000 Einheiten",
            "2.001–10.000 Einheiten",
            "10.000+ Einheiten"
          ],
          "required": true
        },
        {
          "name": "daily_orders",
          "label": "Durchschnittliche tägliche Bestellungen",
          "type": "select",
          "options": [
            "Unter 10 Bestellungen",
            "10-50 Bestellungen",
            "51-200 Bestellungen",
            "200+ Bestellungen"
          ],
          "required": true
        },
        {
          "name": "warehouse_requirements",
          "label": "Anforderungen an das Lager",
          "type": "textarea",
          "placeholder": "Beschreiben Sie Bündel, Beilagen, Verpackungen, Lagerbedingungen oder Zeitpläne für eingehende Lieferanten.",
          "required": true,
          "wide": true
        }
      ]
    },
    "caseStudy": {
      "eyebrow": "VERTRETER 3PL FALL",
      "title": "Lager zur täglichen Erfüllung.",
      "profile": "Multi-SKU-Marke erhält Aktien von mehreren Lieferanten",
      "challenge": "Massenkartons kamen in Chargen an, aber tägliche Bestellungen erforderten eine genaue Kommissionierung und Verpackung.",
      "plan": [
        "Karte des eingehenden Bestands",
        "Einzelne Markenmaterialien",
        "Pick, Pack und Abgleich"
      ],
      "evidence": [
        "Datensatz für eingehende Abweichungen",
        "SKU Bestandsbuch",
        "Pick-and-pack-Anleitung"
      ],
      "outcome": "Bulk Stock wird zu einer klaren täglichen Fulfillment-Routine."
    }
  },
  "pod-fulfillment": {
    "form": {
      "eyebrow": "POD PRODUKTÜBERPRÜFUNG",
      "title": "Überprüfen Sie Ihre POD Bestellung",
      "lead": "Teilen Sie das Basisprodukt, die Kunstfertigkeit und das erwartete Auftragsmuster, damit wir die Durchführbarkeit von Probenahme, Produktion und Erfüllung beurteilen können.",
      "fields": [
        {
          "name": "pod_product",
          "label": "Produkttyp",
          "type": "select",
          "options": [
            "Bekleidung",
            "Zubehör",
            "Zuhause und Lifestyle",
            "Papierwaren",
            "Sonstiges Erzeugnis"
          ],
          "required": true
        },
        {
          "name": "artwork_status",
          "label": "Artwork-Status",
          "type": "select",
          "options": [
            "Nur Konzept",
            "Dateien in Arbeit",
            "Druckfertige Dateien",
            "Zugelassene physische Probe"
          ],
          "required": true
        },
        {
          "name": "monthly_orders",
          "label": "Erwartete monatliche Bestellungen",
          "type": "select",
          "options": [
            "Unter 100",
            "100–500",
            "501–2000",
            "2,000+"
          ],
          "required": true
        },
        {
          "name": "pod_requirements",
          "label": "Anforderungen an Kunst und Produktion",
          "type": "textarea",
          "placeholder": "Beschreiben Sie Varianten, Druckbereich, Farben, Verpackung und Zielmärkte.",
          "required": true,
          "wide": true
        }
      ]
    },
    "caseStudy": {
      "eyebrow": "VERTRETER POD FALL",
      "title": "Halten Sie Artwork, Produktvarianten und Produktionsgenehmigung verbunden.",
      "profile": "Künstlergeführter Bekleidungsladen startet mehrere Designs in Größen und Farben",
      "challenge": "Jede Bestellung musste mit dem richtigen leeren Produkt, der Grafikdatei und der Druckplatzierung übereinstimmen, bevor sie für die direkte Lieferung verpackt wurde.",
      "plan": [
        "Genehmigen Sie das leere Produkt und den bedruckbaren Bereich",
        "Karten-Artwork-Versionen für kundenorientierte SKUs",
        "Verwenden Sie eine physische Probe als Wiederholungsproduktion Referenz"
      ],
      "evidence": [
        "Artwork-Vorflugblatt",
        "Variable Zuordnungstabelle",
        "Genehmigtes Probenprotokoll"
      ],
      "outcome": "Die Produktion kann einer dokumentierten Referenz folgen, anstatt die Anforderungen von Kunstwerken und Varianten für jeden Auftrag erneut zu interpretieren."
    }
  },
  "private-label": {
    "form": {
      "eyebrow": "ÜBERPRÜFUNG DES BRANDBEREICHS",
      "title": "Planen Sie Ihren Private-Label-Start",
      "lead": "Sagen Sie uns zuerst, welche Produkt- und Marken-Touchpoints wichtig sind, damit wir die MOQ-, Probenahme-, Verpackungs- und Lageranforderungen überprüfen können.",
      "fields": [
        {
          "name": "product_link",
          "label": "Produkt- oder Musterlink",
          "type": "url",
          "placeholder": "Einfügen einer Produktreferenz-URL",
          "required": true
        },
        {
          "name": "brand_scope",
          "label": "Primärer Branding-Bedarf",
          "type": "select",
          "options": [
            "Produktetikett",
            "Gedruckte Beilage",
            "Custom Mailer",
            "Zollstelle",
            "Produktanpassung"
          ],
          "required": true
        },
        {
          "name": "launch_quantity",
          "label": "Voraussichtliche erste Menge",
          "type": "select",
          "options": [
            "Unter 100 Einheiten",
            "100–500 Einheiten",
            "501–2000 Einheiten",
            "2000+ Einheiten"
          ],
          "required": true
        },
        {
          "name": "brand_requirements",
          "label": "Markenanforderungen",
          "type": "textarea",
          "placeholder": "Beschreiben Sie Materialien, Farben, Logo-Platzierung, Unboxing-Ziele und Zielstart-Timing.",
          "required": true,
          "wide": true
        }
      ]
    },
    "caseStudy": {
      "eyebrow": "REPRESENTATIVER PRIVATLABEL-FALL",
      "title": "Phase des Starts.",
      "profile": "Wachsende Marke für Körperpflegezubehör bereitet ihr erstes Markeninventar vor",
      "challenge": "Die Marke wollte ein stärkeres Unboxing-Erlebnis, musste jedoch das Minimum an benutzerdefiniertem Material, Speicherplatz und Startzeitpunkt in Einklang bringen.",
      "plan": [
        "Verpackungselemente zuerst reihen",
        "Etiketten vor größeren Verpackungsverpflichtungen genehmigen",
        "Verbinden Sie gespeicherte Materialien mit der täglichen Verpackungsregel"
      ],
      "evidence": [
        "Shortlist für Markenkomponenten",
        "Physische Verpackungsprobe",
        "Packungsleitfaden auf Auftragsebene"
      ],
      "outcome": "Markenentscheidungen werden zu einem phasenweisen Betriebsplan mit sichtbaren MOQ und Auswirkungen auf das Lager."
    }
  },
  "product-sourcing": {
    "form": {
      "eyebrow": "RÜCKSICHTIGKEIT",
      "title": "Starten Sie eine Lieferantensuche",
      "lead": "Geben Sie uns eine klare Produktbeschreibung, damit Lieferantenangebote, Muster und Fulfillment-Implikationen auf derselben Basis verglichen werden können.",
      "fields": [
        {
          "name": "product_link",
          "label": "Produktreferenz",
          "type": "url",
          "placeholder": "Einfügen eines Produktlinks oder einer Spezifikations-URL",
          "required": true
        },
        {
          "name": "target_price",
          "label": "Zielkosten je Einheit",
          "type": "text",
          "placeholder": "z. B. USD 8–12",
          "required": false
        },
        {
          "name": "order_quantity",
          "label": "Voraussichtliche Bestellmenge",
          "type": "select",
          "options": [
            "Unter 100 Einheiten",
            "100–500 Einheiten",
            "501–2000 Einheiten",
            "2000+ Einheiten"
          ],
          "required": true
        },
        {
          "name": "product_specification",
          "label": "Produktspezifikation",
          "type": "textarea",
          "placeholder": "Beschreiben Sie Material, Größe, Varianten, Verpackung, Zielmarkt und alle nicht verhandelbaren Anforderungen.",
          "required": true,
          "wide": true
        }
      ]
    },
    "caseStudy": {
      "eyebrow": "VERTRETUNGSVERFAHREN",
      "title": "Der Preis ist nicht das Zitat.",
      "profile": "Gründer validiert ein neues Home-Fitness-Zubehör für ein Überseegeschäft",
      "challenge": "In den ersten Angeboten wurden verschiedene Materialien, Verpackungen und Mindestmengen beschrieben, so dass es unmöglich war, die Preise fair zu vergleichen.",
      "plan": [
        "Schreiben Sie einen Lieferanten-ready brief",
        "Normalisierung von Angebotsbedingungen",
        "Prüfproben vor der Herstellung"
      ],
      "evidence": [
        "Vergleichbares Angebotsblatt",
        "Anmerkungen zur Stichprobenüberprüfung",
        "Genehmigte Spezifikation"
      ],
      "outcome": "Die Lieferantenentscheidung umfasst Produktqualität, Produktionsbedingungen, Verpackung und Lieferung und nicht nur den Fabrikpreis."
    }
  },
  "automatic-order-fulfillment": {
    "form": {
      "eyebrow": "ÜBERPRÜFUNG DER ORDNUNG",
      "title": "Karten Sie Ihre Order Lane",
      "lead": "Sagen Sie uns, wo Bestellungen beginnen, welche Daten heute fehlen und wie das Tracking nach dem Versand zurückkehren soll.",
      "fields": [
        {
          "name": "store_platform",
          "label": "Speicherplattform",
          "type": "select",
          "options": [
            "Shopify",
            "WooCommerce",
            "TikTok Shop",
            "Amazon",
            "Etsy",
            "Zolllager"
          ],
          "required": true
        },
        {
          "name": "daily_orders",
          "label": "Durchschnittliche tägliche Bestellungen",
          "type": "select",
          "options": [
            "Unter 10 Bestellungen",
            "10-50 Bestellungen",
            "51-200 Bestellungen",
            "200+ Bestellungen"
          ],
          "required": true
        },
        {
          "name": "current_handoff",
          "label": "Aktuelle Auftragsübergabe",
          "type": "select",
          "options": [
            "Manuelle Meldungen",
            "Tabellenkalkulation oder CSV",
            "App oder Connector",
            "Custom API"
          ],
          "required": true
        },
        {
          "name": "automation_challenge",
          "label": "Hauptherausforderung der Automatisierung",
          "type": "textarea",
          "placeholder": "Beschreiben Sie SKU-Mapping, Adressvalidierung, Bundles, Inventar, Tracking oder Exception-Handling-Anforderungen.",
          "required": true,
          "wide": true
        }
      ]
    },
    "caseStudy": {
      "eyebrow": "GENEHMIGUNGSFALL",
      "title": "Normale Bestellungen benötigen eine Spur.",
      "profile": "Shopify Store ersetzt Spreadsheet Warehouse Handoffs",
      "challenge": "Die meisten Aufträge konnten sich schnell bewegen, aber SKU-Mismatches, Adresslücken und Bundle Notes benötigten eine kontrollierte Pause vor der Erfüllung.",
      "plan": [
        "Karte SKUs zu Lageraufzeichnungen",
        "Split Ausnahmegründe früh",
        "Rückverfolgung durch ein Handoff"
      ],
      "evidence": [
        "SKU Karte",
        "Ausnahmeliste",
        "Prüfergebnisse"
      ],
      "outcome": "Wiederholbare Befehle bewegen sich durch eine saubere Route, während Ausnahmen mit genügend Kontext für eine menschliche Entscheidung pausieren."
    }
  },
  "china-fulfillment-center": {
    "form": {
      "eyebrow": "CHINA WAREHOUSE ÜBERPRÜFUNG",
      "title": "Planen Sie Ihren Warehouse Flow",
      "lead": "Teilen Sie Ihren Lieferanten, SKU und Exportprofil, so dass der Empfang, QC, Lagerung und Versand vor der ersten eingehenden Lieferung abgebildet werden können.",
      "fields": [
        {
          "name": "supplier_count",
          "label": "Aktive Lieferanten",
          "type": "select",
          "options": [
            "1 Lieferant",
            "2–5 Lieferanten",
            "6-15 Lieferanten",
            "15+ Lieferanten"
          ],
          "required": true
        },
        {
          "name": "sku_count",
          "label": "Anzahl SKUs",
          "type": "select",
          "options": [
            "1–10 SKUs",
            "11-50 SKUs",
            "51-200 SKUs",
            "200+ SKUs"
          ],
          "required": true
        },
        {
          "name": "destination_markets",
          "label": "Hauptbestimmungsmärkte",
          "type": "text",
          "placeholder": "z. B. USA, UK und EU",
          "required": true
        },
        {
          "name": "center_requirements",
          "label": "Empfang und Erfüllung von Anforderungen",
          "type": "textarea",
          "placeholder": "Beschreiben Sie Inbound-Frequenz, Lagerung, QC, Kitting, Verpackung und Versandanforderungen.",
          "required": true,
          "wide": true
        }
      ]
    },
    "caseStudy": {
      "eyebrow": "REPRÄSENTATIVER WAREHOUSFALL",
      "title": "Fabrikbestand, bereit zum Schiff.",
      "profile": "Markenkonsolidierende Produkte, Inserts und Verpackungen in einem chinesischen Lager",
      "challenge": "Fabrikgüter, Markenmaterialien und Kundenaufträge kamen zu unterschiedlichen Terminen an und mussten dennoch über einen sauberen Versandweg abreisen.",
      "plan": [
        "Karte jede eingehende Lieferung",
        "Separate QC, Lager- und Packspuren",
        "Fertige Pakete auf dem Weg freigeben"
      ],
      "evidence": [
        "Eingehende Karte",
        "QC-Datensatz",
        "Versandweg"
      ],
      "outcome": "Das Lager verwandelt die Lieferantenproduktion in einen exportbereiten Auftragsfluss mit weniger Übergabefehlern."
    }
  },
  "quality-control-inspection": {
    "form": {
      "eyebrow": "KURZE INSPEKTION",
      "title": "Definieren Sie den Release-Plan",
      "lead": "Sagen Sie uns, was produziert wird, wann es kontrolliert werden sollte und welche Ausfälle am wichtigsten wären.",
      "fields": [
        {
          "name": "product_reference",
          "label": "Produktreferenz",
          "type": "url",
          "placeholder": "Einfügen einer Produkt- oder Spezifikations-URL",
          "required": true
        },
        {
          "name": "inspection_stage",
          "label": "Inspektionsphase",
          "type": "select",
          "options": [
            "Vorproduktion",
            "Während der Produktion",
            "Vorversand",
            "Kontrolle des Eingangslagers",
            "Endgültige Auftragskontrolle"
          ],
          "required": true
        },
        {
          "name": "batch_quantity",
          "label": "Chargenmenge",
          "type": "text",
          "placeholder": "z. B. 1.500 Einheiten",
          "required": true
        },
        {
          "name": "quality_risks",
          "label": "Wichtige Qualitätsrisiken",
          "type": "textarea",
          "placeholder": "Beschreiben Sie Abmessungen, Aussehen, Funktion, Kennzeichnung, Verpackung oder bekannte Mängel.",
          "required": true,
          "wide": true
        }
      ]
    },
    "caseStudy": {
      "eyebrow": "VERTRETENDER QUALITÄTSKONTROLLFALL",
      "title": "Machen Sie die Freigabeentscheidung leicht zu lesen.",
      "profile": "Zubehörpartie, die auf die Genehmigung vor dem Versand wartet",
      "challenge": "Eine visuelle Überprüfung allein würde Passform-, Etikettierungs-, Mengen- und Verpackungsrisiken nicht abdecken, die zu Kundenrückgaben führen könnten.",
      "plan": [
        "Übersetzen Sie die genehmigte Spezifikation in Checkpoints",
        "Ergebnisse aufzeichnen und Fotos ausstellen",
        "Getrennte Abnahme, Überarbeitung und Bestandsaufnahme"
      ],
      "evidence": [
        "Kontrollliste",
        "Feststellung und Fotoaufzeichnung",
        "Freigabeentscheidung"
      ],
      "outcome": "Das Team erhält genügend Beweise, um das betroffene Inventar vor der Erfüllung zu genehmigen, zu überarbeiten oder zu halten."
    }
  }
};

export const serviceComparison = [
  [
    "Dropshipping-Lieferant",
    "Dropshipping Supplier",
    "Stores, die einen Partner hinter jeder Direct-to-Customer-Bestellung benötigen",
    "Flexibel / optional",
    "verfügbar",
    "Workflow auf Auftragsebene"
  ],
  [
    "3pl-fulfillment-services",
    "3PL Erfüllung",
    "Marken halten Lager und Versand Wiederholungsaufträge von mehreren SKUs",
    "Kernanforderung",
    "verfügbar",
    "Empfang + Lagerplan"
  ],
  [
    "pod-fulfillment",
    "POD Erfüllung",
    "Speicher, die kundenspezifische Artikel produzieren, nachdem eine Bestellung aufgegeben wurde",
    "Rohbestand oder On-Demand",
    "Eingebaut in Produkt",
    "Art. + Muster"
  ],
  [
    "Private Label",
    "Private Label",
    "Marken, die Etiketten, Beilagen, Verpackungen oder Produktanpassungen hinzufügen",
    "Gespeicherte Markenmaterialien",
    "Primärer Fokus",
    "Produkt + Markenbrief"
  ],
  [
    "Produktbeschaffung",
    "Produktbeschaffung",
    "Teams vergleichen Lieferanten, Spezifikationen, Muster und kommerzielle Begriffe",
    "Nicht erforderlich, um zu beginnen",
    "Geplant, wenn nötig",
    "Produktspezifikation"
  ],
  [
    "automatic-order-fulfillment",
    "Auftragsautomatisierung",
    "Wachsende Geschäfte ersetzen manuelle Bestellungen und Tracking Handoffs",
    "Verbunden mit Lager",
    "Regelbasiert",
    "Plattform + SKU Karte"
  ],
  [
    "china-fulfillment-center",
    "Fulfillment Center",
    "Marken konsolidieren Fabrikgüter vor globalem Auftragsversand",
    "Kernanforderung",
    "verfügbar",
    "Inbound + SKU Plan"
  ],
  [
    "quality-control-inspection",
    "Qualitätskontrolle",
    "Teams, die Beweise benötigen, bevor sie Produkte genehmigen oder freigeben",
    "Chargen- oder Auftragsstufe",
    "Gegenüber dem Anwendungsbereich geprüft",
    "Spezifikation + Risiken"
  ]
];

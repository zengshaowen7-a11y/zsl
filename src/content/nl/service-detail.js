export const qcOutcomeDetails = [
  {
    "checks": "Goedgekeurde steekproef - specificaties",
    "output": "Referentie inspectie"
  },
  {
    "checks": "Hoeveelheid · uiterlijk · functie",
    "output": "Uitzondering log"
  },
  {
    "checks": "Foto's · notities · metingen",
    "output": "Bewijsspoor"
  },
  {
    "checks": "Pass · rework · hold",
    "output": "Vrijgavebesluit"
  }
];

export const qcProcessOutputs = [
  "Inspectievoorschriften",
  "Goedgekeurde referentie",
  "Gegevens vinden",
  "Bewijsstukken",
  "Release call"
];

export const proofContent = {
  "product-sourcing": {
    "eyebrow": "VOORBEELDSONDERZOEK",
    "title": "Vergelijk leveranciersaanbiedingen.",
    "image": "/images/generated/product-sourcing-hero.webp",
    "columns": [
      "Fabrikant",
      "Eenheidsprijs",
      "MOQ",
      "Loodtijd"
    ],
    "rows": [
      [
        "Fabrikant A",
        "$8.40",
        "300",
        "18 dagen"
      ],
      [
        "Fabrikant B",
        "$7.95",
        "500",
        "24 dagen"
      ],
      [
        "Fabrikant C",
        "$9.10",
        "100",
        "14 dagen"
      ]
    ],
    "note": "Een illustratieve vergelijking. De werkelijke offertes zijn afhankelijk van de specificatie en de beoordeling van de leverancier."
  },
  "quality-control-inspection": {
    "eyebrow": "VOORBEELD QC VRIJGIFTE",
    "title": "Bel de vrijlating.",
    "image": "/images/generated/jw-qc-inspection-v3.png",
    "columns": [
      "Controlepunt",
      "Gecheckt",
      "Problemen",
      "Status"
    ],
    "rows": [
      [
        "SKU en variant",
        "50",
        "0",
        "geslaagd"
      ],
      [
        "Uiterlijk",
        "50",
        "2",
        "Evaluatie"
      ],
      [
        "Verpakking",
        "50",
        "0",
        "geslaagd"
      ]
    ],
    "note": "Voorbeeldinterface toont hoe bevindingen kunnen worden georganiseerd vóór goedkeuring."
  },
  "3pl-fulfillment-services": {
    "eyebrow": "VOORBEELD VAN INVENTARISATIE",
    "title": "De inventaris blijft zichtbaar.",
    "image": "/images/generated/3pl-fulfillment-hero.webp",
    "columns": [
      "SKU",
      "Ontvangen",
      "Beschikbaar",
      "Status"
    ],
    "rows": [
      [
        "JW-BLK- S",
        "500",
        "472",
        "Beschikbaar"
      ],
      [
        "JW-BLK-M",
        "500",
        "86",
        "Voorraad"
      ],
      [
        "JW-BLK- L",
        "300",
        "0",
        "Herschikken"
      ]
    ],
    "note": "Illustratieve inventarisweergave De uiteindelijke workflow is afhankelijk van de magazijnomvang."
  },
  "pod-fulfillment": {
    "eyebrow": "POD GOEDKEURINGSGATTEN",
    "title": "Houd artwork, varianten en fysieke goedkeuring verbonden.",
    "image": "/images/generated/jw-pod-production-v3.png",
    "columns": [
      "Poort",
      "Vereiste invoer",
      "Eigenaar",
      "Status"
    ],
    "rows": [
      [
        "Kunstwerk",
        "Bestand afdrukken",
        "Merk",
        "Goedgekeurd"
      ],
      [
        "Monster",
        "Fysieke referentie",
        "JW QC",
        "Evaluatie"
      ],
      [
        "Produktie",
        "SKU mapping",
        "Workshop",
        "Wachten"
      ]
    ],
    "note": "Voorbeeld goedkeuring pad voor een print-on-demand product."
  },
  "private-label": {
    "eyebrow": "BRANDTOEPASSINGSGEBIEDPLANNER",
    "title": "Kies merkelementen door impact, MOQ en timing.",
    "image": "/images/brand-showcase/paper-packaging-detail.jpg",
    "columns": [
      "Merkelement",
      "Typische invoer",
      "MOQ-impact",
      "Fase"
    ],
    "rows": [
      [
        "Gedrukte insert",
        "Kunstwerk",
        "Laag",
        "Begin"
      ],
      [
        "Aangepaste mailer",
        "Grootte + afdruk",
        "Middel",
        "Schaal"
      ],
      [
        "Productetiket",
        "Productspec",
        "Varieert",
        "Merk"
      ]
    ],
    "note": "MOQ en timing worden bevestigd na materiaal en leverancier beoordeling."
  },
  "automatic-order-fulfillment": {
    "eyebrow": "ORDER CONTROL LOG",
    "title": "Bevel klaar om te gaan.",
    "image": "/images/generated/automatic-fulfillment-hero.webp",
    "columns": [
      "Signaal",
      "Status",
      "Actie",
      "Uitvoer"
    ],
    "rows": [
      [
        "Nieuwe volgorde",
        "Mapped",
        "Loslaten",
        "Klaar"
      ],
      [
        "Adres",
        "Ontbrekend",
        "Wacht.",
        "Evaluatie"
      ],
      [
        "Verscheept",
        "Geldig",
        "Synchroniseren",
        "Tracking"
      ]
    ],
    "summary": [
      [
        "Snelle baan",
        "Bestellingen met in kaart gebrachte SKUs en complete velden kunnen bewegen zonder handmatige achtervolging."
      ],
      [
        "Wacht baan",
        "Bestellingen met ontbrekende details blijven zichtbaar voordat ze bij de verpakking komen."
      ],
      [
        "Lane synchroniseren",
        "Vrijgegeven orders houden tracking en opslag status uitgelijnd na overdracht."
      ]
    ],
    "note": "Voorbeeld controle log. Verbindingsmethoden zijn afhankelijk van het store platform."
  },
  "china-fulfillment-center": {
    "eyebrow": "WAREHOUSE CONTROLEZONES",
    "title": "Kaart elke overdracht voordat het schip.",
    "image": "/images/evidence/warehouse-walkthrough-aisle.jpg",
    "columns": [
      "Gebied",
      "Activiteit",
      "Controle",
      "Uitvoer"
    ],
    "rows": [
      [
        "Ontvangen",
        "Goederenregister",
        "Inkomend plan",
        "Ontvangst"
      ],
      [
        "QC",
        "Inspecteer batch",
        "Checklist",
        "Loslaten"
      ],
      [
        "Verzending",
        "Laatste scan",
        "Orderregel",
        "Tracking"
      ]
    ],
    "note": "De operationele lay-out is geconfigureerd rond product- en magazijnvereisten."
  },
  "dropshipping-supplier": {
    "eyebrow": "ORDER-LEVELCONTROLE",
    "title": "Houd product, verpakking en verzending context samen.",
    "image": "/images/generated/dropshipping-supplier-hero.webp",
    "columns": [
      "Fase",
      "Teamactie",
      "Controle",
      "Bijwerken"
    ],
    "rows": [
      [
        "Bron",
        "Bevestig leverancier",
        "Productbeschrijving",
        "Citaat"
      ],
      [
        "Fulfill",
        "Controleren en verpakken",
        "Orderregel",
        "Klaar"
      ],
      [
        "Vaartuig",
        "Overhandiging van de vervoerder",
        "Laatste scan",
        "Tracking"
      ]
    ],
    "summary": [
      [
        "Leverancier record",
        "Houd de offerte, productreferentie en contactcontext in één orderweergave."
      ],
      [
        "Inpakken regel",
        "Bewaar labels, inserts en pakketnoten naast de SKU details."
      ],
      [
        "Overbrenging",
        "Volg de laatste carrier scan en status update samen."
      ]
    ],
    "note": "Voorbeeld operationele record voor een direct-to-customer order."
  }
};

export const processIntroBySlug = {
  "dropshipping-supplier": {
    "title": "Wat we afstemmen voordat de dagelijkse orders live gaan.",
    "lead": "Wij bewaren de leverancier record, verpakking regel en verzending handoff in één bedrijfsweergave, zodat de workflow blijft gemakkelijk te volgen.",
    "points": [
      [
        "Leverancier record",
        "Quote, productreferentie en contactgegevens blijven bij elkaar."
      ],
      [
        "Inpakken regel",
        "Labels, inserts en pakketnoten volgen de SKU."
      ],
      [
        "Overbrenging",
        "Laatste carrier scan en tracking status blijven zichtbaar."
      ]
    ]
  },
  "automatic-order-fulfillment": {
    "leftEyebrow": "AUTOMATIEZAAK",
    "leftTitle": "Normale orders hebben een rijstrook nodig.",
    "leftLead": "Shopify winkel ter vervanging van spreadsheet magazijn handoffs",
    "title": "Map uw bestelstrook.",
    "lead": "Vertel ons waar bestellingen beginnen, welke gegevens vandaag ontbreken en hoe tracking na verzending moet terugkeren.",
    "points": [
      [
        "01",
        "Kaart SKUs naar magazijn records"
      ],
      [
        "02",
        "Uitzonderingsgronden vroegtijdig splitsen"
      ],
      [
        "03",
        "Return tracking via één handoff"
      ]
    ],
    "noteTitle": "Wat helpt ons de rijstrook in kaart te brengen",
    "noteLead": "Store velden, SKU registreert en houdt regels vast maken de automatische route gemakkelijker te testen voor de lancering."
  }
};

export const dropshipProcessStageLabels = [
  "Controle",
  "Fabrikant",
  "Regels",
  "Test",
  "Levend"
];

export const fitIntroBySlug = {
  "china-fulfillment-center": {
    "title": "Gebouwd voor inkomende voorraad en export.",
    "lead": "Eén magazijnstroom voor goederen, merkmaterialen en klantenorders.",
    "tag": "WAREHUIS FIT",
    "asideTitle": "BESTE FIT",
    "asideLead": "Wanneer elke overdracht een plaats, een rijstrook en een duidelijke eigenaar nodig heeft."
  },
  "product-sourcing": {
    "title": "Gebouwd voor leveranciersbeslissingen.",
    "lead": "Elke pas verwijdert leveranciers die niet kunnen voldoen aan de productkorte, commerciële voorwaarden of eisen voldoen.",
    "noteTitle": "WAT VERANDERT DE VRAAG?",
    "noteLead": "Gebruik één product kort dus prijs, MOQ, sample notes en doorlooptijd blijven op dezelfde basis."
  },
  "automatic-order-fulfillment": {
    "title": "Schone orders nemen de snelle baan.",
    "lead": "Normale orders gaan in één richting. Uitzonderingen splitsten zich vroeg uit zodat ze de dagelijkse stroom niet blokkeren of beschadigen.",
    "laneTags": [
      "Mapped",
      "Zaak",
      "Synchroniseerd"
    ]
  },
  "quality-control-inspection": {
    "title": "Gebouwd voor batches die bewijs nodig hebben voor de release.",
    "lead": "Gebruik deze dienst wanneer het magazijn een gedocumenteerde pas nodig heeft, een beoordeling moet uitvoeren of een beslissing moet nemen voordat de inventaris verder gaat.",
    "tag": "FIT VAN DE CONTROLE",
    "asideTitle": "BESTE FIT",
    "asideLead": "Wanneer productrisico een zichtbare standaard en een duidelijke volgende stap nodig heeft."
  }
};

export const quoteDetailBySlug = {
  "dropshipping-supplier": {
    "checklist": [
      "Productlink, leverancier of productreferentie",
      "Doelmarkten en dagelijkse orderstroom",
      "Verpakking, branding en verzendingsregels"
    ],
    "note": {
      "title": "Wat we eerst bekijken",
      "text": "Wij gebruiken uw product- en verzendcontext om de inkoop-, verpakkings- en leveringsomvang te vormen voordat de offerte begint."
    },
    "titleClass": "sdr-dropshipping-quote-title"
  },
  "3pl-fulfillment-services": {
    "checklist": [
      "SKU sheet of store catalogus",
      "Verwachte inkomende eenheden en leveranciersbronnen",
      "Opslag-, bundel- en verpakkingsvoorschriften"
    ],
    "note": {
      "title": "Wat helpt ons sneller te schatten",
      "text": "Als u al SKU-tellingen, kartonnen totalen of leveranciersschema's heeft, kunnen we de ontvangst, opslag en verzending nauwkeuriger bekijken."
    }
  },
  "pod-fulfillment": {
    "checklist": [
      "Blanco product of productreferentie",
      "Kunstwerkstatus en afdrukgebied",
      "Verwachte volume- en bestemmingsmarkten"
    ],
    "note": {
      "title": "Wat ons helpt POD sneller te benaderen",
      "text": "Als artwork nog aan de gang is, kunnen we het blanco product, sampling path, variant mix en productiestappen nog bekijken."
    },
    "titleClass": "sdr-pod-quote-title",
    "titleStyle": {
      "width": "max-gehalte",
      "maxWidth": "geen",
      "fontSize": "22px",
      "lineHeight": "1.05",
      "whiteSpace": "nu vallen",
      "textWrap": "nu vallen",
      "letterSpacing": "-0,02em"
    }
  },
  "private-label": {
    "checklist": [
      "Product- of monsterkoppeling",
      "Merkelementen om eerst te starten",
      "Verwacht aantal lanceringen en timing"
    ],
    "note": {
      "title": "Wat helpt ons om het merkplan te bekijken",
      "text": "Share the product reference, the brand touchpoints that matter most and the first production target dus MOQ en verpakkingsbeslissingen blijven praktisch."
    },
    "titleClass": "sdr-compact-quote-title"
  },
  "product-sourcing": {
    "checklist": [
      "Referentie of productdossier van het product",
      "Doeleenheidskosten en bestelhoeveelheid",
      "Materialen, verpakking en must-have details"
    ],
    "note": {
      "title": "Wat ons helpt leveranciers sneller te vergelijken",
      "text": "Een duidelijk overzicht maakt offerte-, steekproef- en scheepvaarthypothesen gemakkelijker om op dezelfde basis te vergelijken."
    },
    "titleClass": "sdr-compact-quote-title"
  },
  "automatic-order-fulfillment": {
    "checklist": [
      "Platform en bestelbron opslaan",
      "SKU kaart of product catalogus",
      "Behoud redenen en volgmethode"
    ],
    "note": {
      "title": "Wat helpt ons de rijstrook in kaart te brengen",
      "text": "Store velden, SKU registreert en houdt regels vast maken de automatische route gemakkelijker te testen voor de lancering."
    },
    "titleClass": "sdr-compact-quote-title"
  },
  "china-fulfillment-center": {
    "checklist": [
      "Aantal leveranciers of binnenkomende bronnen",
      "SKU-telling en kartonnen schema",
      "Opslag, QC en verzendingseisen"
    ],
    "note": {
      "title": "Wat ons helpt bij het plannen van het magazijn",
      "text": "Inkomende stroom, productmix en verzendingsverwachtingen vormen de manier waarop ontvangst, inspectie en opslag moeten worden geregeld."
    },
    "titleClass": "sdr-compact-quote-title"
  },
  "quality-control-inspection": {
    "checklist": [
      "Referentie of productdossier van het product",
      "Inspectiefase en partijgrootte",
      "Risico's van kritieke gebreken en acceptatienorm"
    ],
    "note": {
      "title": "Wat ons helpt bij een snellere inspectie",
      "text": "Het beste QC plan begint met de productstandaard, het stadium dat u wilt gecontroleerd en de gebreken die het belangrijkst zijn voor klanten."
    },
    "titleClass": "sdr-compact-quote-title"
  }
};

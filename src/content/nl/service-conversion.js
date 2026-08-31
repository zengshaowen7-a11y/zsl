export const serviceConversionContent = {
  "dropshipping-supplier": {
    "form": {
      "eyebrow": "EVALUATIE VAN HET DROPSHIP-PROJECT",
      "title": "Plan je dropship flow",
      "lead": "Share the products, markets and current order routine, zodat we de juiste sourcing, verpakking en levering scope kunnen identificeren.",
      "fields": [
        {
          "name": "product_link",
          "label": "Product- of leverancierkoppeling",
          "type": "url",
          "placeholder": "Een product- of leverancier-URL plakken",
          "required": true
        },
        {
          "name": "daily_orders",
          "label": "Huidige dagelijkse bestellingen",
          "type": "select",
          "options": [
            "Pre-lancering / testen",
            "10 bestellingen",
            "11.50 bestellingen",
            "51",
            "200+ bestellingen"
          ],
          "required": true
        },
        {
          "name": "destination_markets",
          "label": "Belangrijkste bestemmingsmarkten",
          "type": "text",
          "placeholder": "bv. Verenigde Staten, VK, Duitsland",
          "required": true
        },
        {
          "name": "workflow_challenge",
          "label": "Wat moet er verbeterd worden?",
          "type": "textarea",
          "placeholder": "Vertel ons over leverancierscoördinatie, kwaliteit, verpakking, levering of klantenservice problemen.",
          "required": true,
          "wide": true
        }
      ]
    },
    "caseStudy": {
      "eyebrow": "ZAAK DROPSHIP",
      "title": "Supplier chats, één workflow.",
      "profile": "Onafhankelijke accessoires winkel die Noord-Amerikaanse en Europese klanten",
      "challenge": "Product, verpakking en verzending updates werden verdeeld over chats, zonder een enkele bestelling eigenaar.",
      "plan": [
        "Bevestig productreferentie",
        "Set verpakking en verzending regels",
        "Status retourneren en volgen"
      ],
      "evidence": [
        "Goedgekeurde productreferentie",
        "Verpakkingsinstructies",
        "Order en tracking record"
      ],
      "outcome": "Een workflow toont de eigenaar, controles en tracking voor elke bestelling."
    }
  },
  "3pl-fulfillment-services": {
    "form": {
      "eyebrow": "REIKWIJDTE VAN HET WAREHUIS",
      "title": "Schatting uw 3PL",
      "lead": "Delen SKU telt, opgeslagen eenheden en dagelijkse orderstroom zodat het magazijn ontvangst, opslag en verzending scope nauwkeurig kunnen worden gepland.",
      "fields": [
        {
          "name": "sku_count",
          "label": "Aantal actieve SKUs",
          "type": "select",
          "options": [
            "10 SKUs",
            "11/50 SKUs",
            "51",
            "200+ SKUs"
          ],
          "required": true
        },
        {
          "name": "inventory_units",
          "label": "Verwachte opgeslagen eenheden",
          "type": "select",
          "options": [
            "Minder dan 500 eenheden",
            "500",
            "2,001",
            "10.000+ eenheden"
          ],
          "required": true
        },
        {
          "name": "daily_orders",
          "label": "Gemiddelde dagelijkse bestellingen",
          "type": "select",
          "options": [
            "Onder de 10 bestellingen",
            "Bestellingen",
            "51",
            "200+ bestellingen"
          ],
          "required": true
        },
        {
          "name": "warehouse_requirements",
          "label": "Eisen inzake pakhuizen",
          "type": "textarea",
          "placeholder": "Beschrijf bundels, inserts, verpakking, opslagomstandigheden of inkomende leveranciersschema's.",
          "required": true,
          "wide": true
        }
      ]
    },
    "caseStudy": {
      "eyebrow": "VERTEGENWOORDIGING VAN DE ZAAK 3PL",
      "title": "Voorraad tot dagelijkse vervulling.",
      "profile": "Multi-SKU merk ontvangen voorraad van verschillende leveranciers",
      "challenge": "Bulk dozen kwamen in batches, maar dagelijkse bestellingen nodig nauwkeurige picking en verpakking.",
      "plan": [
        "Kaart inkomende voorraad",
        "Aparte merkmaterialen",
        "Kies, pak en verzoen"
      ],
      "evidence": [
        "Inkomende discrepantie record",
        "SKU voorraadboek",
        "Pick-and-pack instructie"
      ],
      "outcome": "Bulk voorraad verandert in een duidelijke dagelijkse vervulling routine."
    }
  },
  "pod-fulfillment": {
    "form": {
      "eyebrow": "POD PRODUCTOVERZICHT",
      "title": "Bekijk uw POD bestelling",
      "lead": "Share the base product, artwork bereidheid en verwachte order patroon zodat we kunnen beoordelen bemonstering, productie en vervulling haalbaarheid.",
      "fields": [
        {
          "name": "pod_product",
          "label": "Productsoort",
          "type": "select",
          "options": [
            "Kleding",
            "Toebehoren",
            "Huis en levensstijl",
            "Papierwaren",
            "Ander product"
          ],
          "required": true
        },
        {
          "name": "artwork_status",
          "label": "Kunstwerkstatus",
          "type": "select",
          "options": [
            "Alleen concept",
            "Bestanden in behandeling",
            "Afdrukbare bestanden",
            "Goedgekeurd fysiek monster"
          ],
          "required": true
        },
        {
          "name": "monthly_orders",
          "label": "Verwachte maandelijkse bestellingen",
          "type": "select",
          "options": [
            "Onder de 100",
            "100",
            "20.000",
            "2,000+"
          ],
          "required": true
        },
        {
          "name": "pod_requirements",
          "label": "Vereisten inzake kunstwerken en productie",
          "type": "textarea",
          "placeholder": "Beschrijf varianten, print gebied, kleuren, verpakking en bestemming markten.",
          "required": true,
          "wide": true
        }
      ]
    },
    "caseStudy": {
      "eyebrow": "VERTEGENWOORDIGING VAN DE ZAAK POD",
      "title": "Houd artwork, productvarianten en productiegoedkeuring verbonden.",
      "profile": "Artist-led kleding winkel lanceert meerdere ontwerpen over maten en kleuren",
      "challenge": "Elke bestelling moest overeenkomen met het juiste blanco product, artwork file en printplaatsing voordat ze werd verpakt voor directe levering.",
      "plan": [
        "Het blanco product en het afdrukbare gebied goedkeuren",
        "Kaart artwork versies op klantgerichte SKUs",
        "Gebruik een fysiek monster als referentie voor de herhaalde productie"
      ],
      "evidence": [
        "Kunstwerk voor de vlucht",
        "Variantkaarttabel",
        "Goedgekeurde steekproefgegevens"
      ],
      "outcome": "Productie kan een gedocumenteerde referentie volgen in plaats van het interpreteren van kunstwerk en de eisen van de variant weer voor elke bestelling."
    }
  },
  "private-label": {
    "form": {
      "eyebrow": "REIKWIJDTE VAN BRAND",
      "title": "Plan uw private-label lancering",
      "lead": "Vertel ons welk product en merk touchpoints belangrijk zijn, zodat we MOQ, sampling, verpakking en opslagvereisten kunnen beoordelen.",
      "fields": [
        {
          "name": "product_link",
          "label": "Product- of monsterkoppeling",
          "type": "url",
          "placeholder": "Een productreferentie-URL plakken",
          "required": true
        },
        {
          "name": "brand_scope",
          "label": "Primaire branding behoefte",
          "type": "select",
          "options": [
            "Productetiket",
            "Gedrukte insert",
            "Aangepaste mailer",
            "Aangepast vak",
            "Product aanpassing"
          ],
          "required": true
        },
        {
          "name": "launch_quantity",
          "label": "Verwachte eerste hoeveelheid",
          "type": "select",
          "options": [
            "Minder dan 100 eenheden",
            "100",
            "20.000 stuks",
            "2000+ eenheden"
          ],
          "required": true
        },
        {
          "name": "brand_requirements",
          "label": "Merkeisen",
          "type": "textarea",
          "placeholder": "Beschrijf materialen, kleuren, logo plaatsing, unboxing doelen en doel lancering timing.",
          "required": true,
          "wide": true
        }
      ]
    },
    "caseStudy": {
      "eyebrow": "ZAAK PRIVÉ-LABEL",
      "title": "Faseer de lancering.",
      "profile": "Groeiende personal-care accessoires merk voorbereiding van de eerste merk inventaris",
      "challenge": "Het merk wilde een sterkere unboxing ervaring, maar nodig om maatwerk minimums, opslagruimte en lancering timing in evenwicht te brengen.",
      "plan": [
        "Rangverpakkingselementen eerst",
        "Labels goedkeuren voor grotere verpakkingsverplichtingen",
        "Verbind opgeslagen materialen met de dagelijkse verpakkingsregel"
      ],
      "evidence": [
        "Merkcomponent shortlist",
        "Fysiek verpakkingsmonster",
        "Order-level verpakking gids"
      ],
      "outcome": "Brand beslissingen worden een gefaseerd operationeel plan met zichtbare MOQ en magazijn implicaties."
    }
  },
  "product-sourcing": {
    "form": {
      "eyebrow": "ZUURBRIEF",
      "title": "Start een leverancierszoekopdracht",
      "lead": "Geef ons een duidelijke productbrief zodat leveranciersnoteringen, monsters en vervulling implicaties kunnen worden vergeleken op dezelfde basis.",
      "fields": [
        {
          "name": "product_link",
          "label": "Productreferentie",
          "type": "url",
          "placeholder": "Een productlink of specificatie-URL plakken",
          "required": true
        },
        {
          "name": "target_price",
          "label": "Doeleenheidskosten",
          "type": "text",
          "placeholder": "b.v. 8",
          "required": false
        },
        {
          "name": "order_quantity",
          "label": "Verwachte orderhoeveelheid",
          "type": "select",
          "options": [
            "Minder dan 100 eenheden",
            "100",
            "20.000 stuks",
            "2000+ eenheden"
          ],
          "required": true
        },
        {
          "name": "product_specification",
          "label": "Productspecificatie",
          "type": "textarea",
          "placeholder": "Beschrijf materiaal, grootte, varianten, verpakking, doelmarkt en eventuele niet-onderhandelbare eisen.",
          "required": true,
          "wide": true
        }
      ]
    },
    "caseStudy": {
      "eyebrow": "VERTEGENWOORDIGINGSZAAK",
      "title": "Prijs is niet het citaat.",
      "profile": "Oprichter van een nieuw homefitness accessoire voor een buitenlandse winkel",
      "challenge": "Aanvankelijk werden verschillende materialen, verpakkingen en minimumhoeveelheden beschreven, waardoor de prijzen niet eerlijk konden worden vergeleken.",
      "plan": [
        "Schrijf één leverancier-ready brief",
        "Citatentermen normaliseren",
        "Evaluatie van monsters vóór de productie"
      ],
      "evidence": [
        "Vergelijkbare aanhalingstekens",
        "Opmerkingen over de beoordeling van monsters",
        "Goedgekeurde specificatie"
      ],
      "outcome": "Het besluit van de leverancier omvat productkwaliteit, productievoorwaarden, verpakking en levering in plaats van alleen de fabrieksprijs."
    }
  },
  "automatic-order-fulfillment": {
    "form": {
      "eyebrow": "ORDER-FLOW EVALUATIE",
      "title": "Map uw bestelstrook",
      "lead": "Vertel ons waar bestellingen beginnen, welke gegevens vandaag ontbreken en hoe tracking na verzending moet terugkeren.",
      "fields": [
        {
          "name": "store_platform",
          "label": "Platform opslaan",
          "type": "select",
          "options": [
            "Shopify",
            "WooCommerce",
            "TikTok Shop",
            "Amazon",
            "Etsy",
            "Aangepast opslaan"
          ],
          "required": true
        },
        {
          "name": "daily_orders",
          "label": "Gemiddelde dagelijkse bestellingen",
          "type": "select",
          "options": [
            "Onder de 10 bestellingen",
            "Bestellingen",
            "51",
            "200+ bestellingen"
          ],
          "required": true
        },
        {
          "name": "current_handoff",
          "label": "Huidige order overdracht",
          "type": "select",
          "options": [
            "Handmatige berichten",
            "Spreadsheet of CSV",
            "App of stekker",
            "Aangepaste API"
          ],
          "required": true
        },
        {
          "name": "automation_challenge",
          "label": "Belangrijkste automatiseringsuitdaging",
          "type": "textarea",
          "placeholder": "Beschrijf SKU mapping, adresvalidatie, bundels, inventaris, tracking of exception-handling behoeften.",
          "required": true,
          "wide": true
        }
      ]
    },
    "caseStudy": {
      "eyebrow": "AUTOMATIEZAAK",
      "title": "Normale orders hebben een rijstrook nodig.",
      "profile": "Shopify winkel ter vervanging van spreadsheet magazijn handoffs",
      "challenge": "De meeste bestellingen zouden snel kunnen bewegen, maar SKU mismatches, adresseer hiaten en bundelnoten had een gecontroleerde pauze voor vervulling nodig.",
      "plan": [
        "Kaart SKUs naar magazijn records",
        "Uitzonderingsgronden vroegtijdig splitsen",
        "Return tracking via één handoff"
      ],
      "evidence": [
        "SKU-kaart",
        "Uitzonderinglijst",
        "Testvolgorderesultaten"
      ],
      "outcome": "Herhaalbare orders gaan door een schone route terwijl uitzonderingen pauzeren met genoeg context voor een menselijke beslissing."
    }
  },
  "china-fulfillment-center": {
    "form": {
      "eyebrow": "CHINA WAREHOUSE EVALUATIE",
      "title": "Plan je magazijnstroom",
      "lead": "Deel uw leverancier, SKU en exportprofiel zodat ontvangen, QC, opslag en verzending kunnen worden in kaart gebracht voor de eerste inkomende levering.",
      "fields": [
        {
          "name": "supplier_count",
          "label": "Actieve leveranciers",
          "type": "select",
          "options": [
            "1 leverancier",
            "2-5 leveranciers",
            "6",
            "15+ leveranciers"
          ],
          "required": true
        },
        {
          "name": "sku_count",
          "label": "Aantal SKUs",
          "type": "select",
          "options": [
            "10 SKUs",
            "11/50 SKUs",
            "51",
            "200+ SKUs"
          ],
          "required": true
        },
        {
          "name": "destination_markets",
          "label": "Belangrijkste bestemmingsmarkten",
          "type": "text",
          "placeholder": "bv. VS, UK en EU",
          "required": true
        },
        {
          "name": "center_requirements",
          "label": "Vereisten inzake ontvangst en nakoming",
          "type": "textarea",
          "placeholder": "Beschrijf inkomende frequentie, opslag, QC, kitting, verpakking en verzending behoeften.",
          "required": true,
          "wide": true
        }
      ]
    },
    "caseStudy": {
      "eyebrow": "VERTEGENWOORDIGENDE ZAAK WAREHOUSE",
      "title": "Fabrieksvoorraad, klaar voor verzending.",
      "profile": "Brand consoliderende producten, inserts en verpakkingen in één China magazijn",
      "challenge": "Fabrieksartikelen, merkmaterialen en bestellingen van klanten kwamen op verschillende schema's en moesten nog steeds vertrekken via één schone verzendingsroute.",
      "plan": [
        "Kaart elke inkomende levering",
        "Aparte QC, opslag- en verpakkingsbanen",
        "Per route afgewerkte percelen vrijgeven"
      ],
      "evidence": [
        "Inkomende kaart",
        "QC record",
        "Stuurstrook"
      ],
      "outcome": "Het magazijn maakt van leverancier output een export-ready order flow met minder overdracht fouten."
    }
  },
  "quality-control-inspection": {
    "form": {
      "eyebrow": "CONTROLEBRIEF",
      "title": "Definieer het releaseplan",
      "lead": "Vertel ons wat er wordt geproduceerd, wanneer het moet worden geïnspecteerd en welke mislukkingen het belangrijkst zijn.",
      "fields": [
        {
          "name": "product_reference",
          "label": "Productreferentie",
          "type": "url",
          "placeholder": "Een product- of specificatie-URL plakken",
          "required": true
        },
        {
          "name": "inspection_stage",
          "label": "Inspectiefase",
          "type": "select",
          "options": [
            "Preproductie",
            "Tijdens de productie",
            "Voor verzending",
            "Controle van het inkomende magazijn",
            "Laatste bestellingscontrole"
          ],
          "required": true
        },
        {
          "name": "batch_quantity",
          "label": "Lot",
          "type": "text",
          "placeholder": "bv. 1500 stuks",
          "required": true
        },
        {
          "name": "quality_risks",
          "label": "Belangrijke kwaliteitsrisico's",
          "type": "textarea",
          "placeholder": "Beschrijf afmetingen, uiterlijk, functie, etikettering, verpakking of bekende gebreken.",
          "required": true,
          "wide": true
        }
      ]
    },
    "caseStudy": {
      "eyebrow": "ZAAK KWALITEITSCONTROL",
      "title": "Maak de release beslissing gemakkelijk te lezen.",
      "profile": "Accessoire-partij in afwachting van goedkeuring vóór verzending",
      "challenge": "Een visuele controle alleen zou niet betrekking hebben op fit, etikettering, hoeveelheid en verpakking risico's die klanten retourneren.",
      "plan": [
        "Vertaal de goedgekeurde specificatie naar controlepunten",
        "Bevindingen registreren en foto's maken",
        "Afzonderlijk geaccepteerd, herwerkt en bijgehouden inventaris"
      ],
      "evidence": [
        "Controlelijst",
        "Zoeken en fotorecord",
        "Vrijgavebesluit"
      ],
      "outcome": "Het team krijgt genoeg bewijs om de betrokken inventaris goed te keuren, te herwerken of vast te houden voor de vervulling."
    }
  }
};

export const serviceComparison = [
  [
    "dropshipping-leverancier",
    "Dropshipping Leverancier",
    "Winkels die één partner nodig hebben achter elke direct-to-customer bestelling",
    "Flexibel / optioneel",
    "Beschikbaar",
    "Werkstroom op ordeniveau"
  ],
  [
    "3pl-fulfillment-services",
    "3PL Fulfillment",
    "Merken met voorraad en verzending herhaalde bestellingen van meerdere SKUs",
    "Kernvereiste",
    "Beschikbaar",
    "Ontvangst + opslagplan"
  ],
  [
    "pod-fillment",
    "POD Fulfillment",
    "Winkels die aangepaste items produceren nadat een bestelling is geplaatst",
    "Lege voorraad of op aanvraag",
    "Ingebouwd in product",
    "Kunstwerk + monster"
  ],
  [
    "particuliere label",
    "Privé-label",
    "Merken die labels, inserts, verpakking of product aanpassing toevoegen",
    "Merkmaterialen opgeslagen",
    "Primaire focus",
    "Product + merkbeschrijving"
  ],
  [
    "productsourcing",
    "Product sourcing",
    "Teams die leveranciers, specificaties, monsters en commerciële termen vergelijken",
    "Niet vereist om te beginnen",
    "Indien nodig gepland",
    "Productspecificatie"
  ],
  [
    "automatic-order-fulfillment",
    "Automatisch bestellen",
    "Groeiende winkels ter vervanging van handmatige bestelling en tracking handoffs",
    "Verbonden met magazijn",
    "Regelmatig",
    "Platform + SKU-kaart"
  ],
  [
    "china-fulfillment-center",
    "Fulfillment Center",
    "Merken consolideren fabrieksgoederen voor wereldwijde bestelling verzending",
    "Kernvereiste",
    "Beschikbaar",
    "Inkomende + SKU-plan"
  ],
  [
    "quality-control-inspection",
    "Kwaliteitscontrole",
    "Teams die bewijsmateriaal nodig hebben alvorens producten goed te keuren of vrij te geven",
    "Partij- of bestelniveau",
    "Gecontroleerd tegen het toepassingsgebied",
    "Specificatie + risico's"
  ]
];

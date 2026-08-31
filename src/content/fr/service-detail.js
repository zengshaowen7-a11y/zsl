export const qcOutcomeDetails = [
  {
    "checks": "Échantillon approuvé · spécifications",
    "output": "Niveau de référence"
  },
  {
    "checks": "Quantité · apparence · fonction",
    "output": "Registre des exceptions"
  },
  {
    "checks": "Photos · notes · mesures",
    "output": "Piste de preuves"
  },
  {
    "checks": "Passer · retravailler · tenir",
    "output": "Décision de mise en liberté"
  }
];

export const qcProcessOutputs = [
  "Règles de contrôle",
  "Référence approuvée",
  "Résultats",
  "Rapport sur les preuves",
  "Appel de libération"
];

export const proofContent = {
  "product-sourcing": {
    "eyebrow": "COMPARAISON COMPLÉMENTAIRE EXEMPLE",
    "title": "Comparez les offres du fournisseur.",
    "image": "/images/generated/product-sourcing-hero.webp",
    "columns": [
      "Fournisseur",
      "Prix unitaire",
      "AUTRES",
      "Délai"
    ],
    "rows": [
      [
        "Fournisseur A",
        "$8.40",
        "300",
        "18 jours"
      ],
      [
        "Fournisseur B",
        "$7.95",
        "500",
        "24 jours"
      ],
      [
        "Fournisseur C",
        "$9.10",
        "100",
        "14 jours"
      ]
    ],
    "note": "Comparaison illustrée. Les prix réels dépendent des spécifications et de l'examen des fournisseurs."
  },
  "quality-control-inspection": {
    "eyebrow": "EXEMPLE QC ENREGISTREMENT",
    "title": "Faites l'appel.",
    "image": "/images/generated/jw-qc-inspection-v3.png",
    "columns": [
      "Point de contrôle",
      "Vérification",
      "Problèmes",
      "État"
    ],
    "rows": [
      [
        "SKU et variante",
        "50",
        "0",
        "Décédé"
      ],
      [
        "Apparence",
        "50",
        "2",
        "Révision"
      ],
      [
        "Emballage",
        "50",
        "0",
        "Décédé"
      ]
    ],
    "note": "Exemple d'interface montrant comment les constatations peuvent être organisées avant l'approbation."
  },
  "3pl-fulfillment-services": {
    "eyebrow": "EXEMPLE DE VUE INVENTAIRE",
    "title": "L'inventaire reste visible.",
    "image": "/images/generated/3pl-fulfillment-hero.webp",
    "columns": [
      "AUTRES",
      "Reçu",
      "Disponible",
      "État"
    ],
    "rows": [
      [
        "JW-BLK... S",
        "500",
        "472",
        "Disponible"
      ],
      [
        "JW-BLK-M",
        "500",
        "86",
        "Faible stock"
      ],
      [
        "JW-BLK... L",
        "300",
        "0",
        "Réorganiser"
      ]
    ],
    "note": "Vue indicative de l'inventaire — le flux final dépend de la portée de l'entrepôt."
  },
  "pod-fulfillment": {
    "eyebrow": "GAZ D'HOMOLOGATION POD",
    "title": "Gardez l'œuvre d'art, les variantes et l'approbation physique connecté.",
    "image": "/images/generated/jw-pod-production-v3.png",
    "columns": [
      "Porte",
      "Entrée requise",
      "Propriétaire",
      "État"
    ],
    "rows": [
      [
        "Ouvrages",
        "Fichier prêt à imprimer",
        "Marque",
        "Approuvé"
      ],
      [
        "Échantillon",
        "Référence physique",
        "JW QC",
        "Révision"
      ],
      [
        "Production",
        "Cartographie SKU",
        "Atelier",
        "Attendre"
      ]
    ],
    "note": "Exemple de chemin d'approbation pour un produit imprimé à la demande."
  },
  "private-label": {
    "eyebrow": "PLANIFICATEUR DE LA PORTÉE",
    "title": "Choisissez les éléments de marque par impact, MOQ et timing.",
    "image": "/images/brand-showcase/paper-packaging-detail.jpg",
    "columns": [
      "Élément de marque",
      "Type d'entrée",
      "Impact MOQ",
      "Étape"
    ],
    "rows": [
      [
        "Insert imprimé",
        "Ouvrages",
        "Faible",
        "Démarrer"
      ],
      [
        "Messagerie personnalisée",
        "Taille + impression",
        "Moyenne",
        "Échelle"
      ],
      [
        "Étiquette du produit",
        "Spécifications du produit",
        "Variantes",
        "Marque"
      ]
    ],
    "note": "MOQ et le moment sont confirmés après l'examen du matériel et du fournisseur."
  },
  "automatic-order-fulfillment": {
    "eyebrow": "LOG DE CONTRÔLE DE L'ORDRE",
    "title": "Commandes prêtes à bouger.",
    "image": "/images/generated/automatic-fulfillment-hero.webp",
    "columns": [
      "Signal",
      "État",
      "Décision",
      "Produit"
    ],
    "rows": [
      [
        "Nouvel ordre",
        "Cartographié",
        "Libération",
        "Prêt"
      ],
      [
        "Adresse",
        "Manque",
        "Attendez",
        "Révision"
      ],
      [
        "Expédié",
        "Valide",
        "Synchronisation",
        "Suivi"
      ]
    ],
    "summary": [
      [
        "Voie rapide",
        "Les commandes avec SKUs cartographié et les champs complets peuvent se déplacer sans poursuite manuelle."
      ],
      [
        "Voie de retenue",
        "Les commandes avec des détails manquants restent visibles avant d'arriver à l'emballage."
      ],
      [
        "Voie de synchronisation",
        "Les commandes publiées maintiennent le suivi et l'état du stockage alignés après la remise."
      ]
    ],
    "note": "Exemple de journal de contrôle. Les méthodes de connexion dépendent de la plateforme de stockage."
  },
  "china-fulfillment-center": {
    "eyebrow": "ZONES DE CONTRÔLE DE L'EAU",
    "title": "Cartez chaque sortie avant qu'elle ne parte.",
    "image": "/images/evidence/warehouse-walkthrough-aisle.jpg",
    "columns": [
      "Zone",
      "Activité",
      "Contrôle",
      "Produit"
    ],
    "rows": [
      [
        "Réception",
        "Enregistrement des marchandises",
        "Plan d'arrivée",
        "Réception"
      ],
      [
        "AUTRES",
        "Inspecter le lot",
        "Liste de contrôle",
        "Libération"
      ],
      [
        "Expédition",
        "Analyse finale",
        "Règle d'ordre",
        "Suivi"
      ]
    ],
    "note": "Le plan d'exploitation est configuré autour des exigences du produit et de l'entrepôt."
  },
  "dropshipping-supplier": {
    "eyebrow": "CONTRÔLE DU NIVEAU D'ORDRE",
    "title": "Conservez le contexte produit, emballage et expédition ensemble.",
    "image": "/images/generated/dropshipping-supplier-hero.webp",
    "columns": [
      "Étape",
      "Action de l'équipe",
      "Contrôle",
      "Mise à jour"
    ],
    "rows": [
      [
        "Source",
        "Confirmer le fournisseur",
        "Résumé du produit",
        "Citation"
      ],
      [
        "Réalisation",
        "Vérifier et emballer",
        "Règle d'ordre",
        "Prêt"
      ],
      [
        "Navire",
        "Remise du transporteur",
        "Analyse finale",
        "Suivi"
      ]
    ],
    "summary": [
      [
        "Enregistrement du fournisseur",
        "Gardez le devis, la référence du produit et le contexte de contact dans une vue de commande."
      ],
      [
        "Règle d'emballage",
        "Entreposez les étiquettes, les inserts et les notes de colis à côté des détails SKU."
      ],
      [
        "Remise des marchandises",
        "Suivre l'analyse finale du transporteur et la mise à jour du statut ensemble."
      ]
    ],
    "note": "Exemple d'enregistrement d'exploitation pour une commande directe au client."
  }
};

export const processIntroBySlug = {
  "dropshipping-supplier": {
    "title": "Ce que l'on s'aligne avant que les ordres quotidiens partent en direct.",
    "lead": "Nous conservons l'enregistrement du fournisseur, la règle d'emballage et le transfert dans une vue d'exploitation afin que le flux de travail reste facile à suivre.",
    "points": [
      [
        "Enregistrement du fournisseur",
        "Devis, référence du produit et coordonnées restent ensemble."
      ],
      [
        "Règle d'emballage",
        "Les étiquettes, inserts et notes de colis suivent le SKU."
      ],
      [
        "Remise des marchandises",
        "Analyse finale du transporteur et état de suivi restent visibles."
      ]
    ]
  },
  "automatic-order-fulfillment": {
    "leftEyebrow": "AFFAIRE D'AUTORISATION",
    "leftTitle": "Les ordres normaux ont besoin d'une voie.",
    "leftLead": "Shopify magasin remplaçant tableur stock de distribution",
    "title": "Cartez votre ligne de commande.",
    "lead": "Dites-nous où les commandes commencent, quelles données manquent aujourd'hui et comment le suivi devrait revenir après l'expédition.",
    "points": [
      [
        "01",
        "Carte SKUs vers les registres d'entrepôt"
      ],
      [
        "02",
        "Diviser les raisons d'exception tôt"
      ],
      [
        "03",
        "Suivi de retour par une seule prise"
      ]
    ],
    "noteTitle": "Ce qui nous aide à cartographier la voie",
    "noteLead": "Les champs de stockage, les enregistrements SKU et les règles de conservation facilitent le test de l'itinéraire automatique avant le lancement."
  }
};

export const dropshipProcessStageLabels = [
  "Vérification des comptes",
  "Fournisseur",
  "Règles",
  "Essai",
  "Vivre"
];

export const fitIntroBySlug = {
  "china-fulfillment-center": {
    "title": "Construit pour le stock entrant et l'exportation.",
    "lead": "Un entrepôt circule pour les marchandises, les matériaux de marque et les commandes des clients.",
    "tag": "FICHIER DE LA GUERRE",
    "asideTitle": "MEILLEURE",
    "asideLead": "Quand chaque transfert nécessite un endroit, une voie et un propriétaire clair."
  },
  "product-sourcing": {
    "title": "Construit pour les décisions des fournisseurs.",
    "lead": "Chaque laissez-passer enlève les fournisseurs qui ne peuvent pas correspondre au bref de produit, aux conditions commerciales ou aux exigences de respect.",
    "noteTitle": "LES CHANGEMENTS DU QUOTE",
    "noteLead": "Utiliser un produit short so price, MOQ, sample notes and augure time stay on the meme base."
  },
  "automatic-order-fulfillment": {
    "title": "Les ordres propres prennent la voie rapide.",
    "lead": "Les ordres normaux vont dans une direction. Les exceptions se divisent tôt pour ne pas bloquer ou corrompre le flux quotidien.",
    "laneTags": [
      "Cartographié",
      "Arrêts",
      "Synchronisé"
    ]
  },
  "quality-control-inspection": {
    "title": "Construit pour les lots qui ont besoin d'une preuve avant la libération.",
    "lead": "Utilisez ce service lorsque l'entrepôt a besoin d'une carte d'identité, d'un examen ou d'une décision documentée avant de passer à l'inventaire.",
    "tag": "FICHIER D'INSPECTION",
    "asideTitle": "MEILLEURE",
    "asideLead": "Lorsque le risque produit nécessite une norme visible et une étape suivante claire."
  }
};

export const quoteDetailBySlug = {
  "dropshipping-supplier": {
    "checklist": [
      "Lien du produit, fournisseur ou référence du produit",
      "Marchés cibles et flux d'ordre quotidien",
      "Règles d'emballage, de marquage et d'expédition"
    ],
    "note": {
      "title": "Ce que nous examinons en premier",
      "text": "Nous utilisons votre contexte de produit et d'expédition pour façonner le champ d'approvisionnement, d'emballage et de livraison avant le début du devis."
    },
    "titleClass": "sdr-dropshipping-quote-title"
  },
  "3pl-fulfillment-services": {
    "checklist": [
      "Catalogue de feuilles ou de magasins SKU",
      "Unités entrantes et sources de fournisseurs attendus",
      "Règles de stockage, d'emballage et d'emballage"
    ],
    "note": {
      "title": "Ce qui nous aide à estimer plus rapidement",
      "text": "Si vous avez déjà le nombre de SKU, le nombre total de cartons ou les horaires des fournisseurs, nous pouvons visualiser la réception, le stockage et l'expédition plus précisément."
    }
  },
  "pod-fulfillment": {
    "checklist": [
      "Référence du produit blanc ou du produit",
      "Statut de l'œuvre et zone d'impression",
      "Marchés de volume et de destination attendus"
    ],
    "note": {
      "title": "Ce qui nous aide à étendre POD plus rapidement",
      "text": "Si l'œuvre d'art est toujours en cours, nous pouvons encore passer en revue le produit vierge, la voie d'échantillonnage, le mélange de variantes et les étapes de production."
    },
    "titleClass": "sdr-pod-quote-title",
    "titleStyle": {
      "width": "teneur maximale",
      "maxWidth": "aucune",
      "fontSize": "22px",
      "lineHeight": "1.05",
      "whiteSpace": "maintenant",
      "textWrap": "maintenant",
      "letterSpacing": "-0,02em"
    }
  },
  "private-label": {
    "checklist": [
      "Produit ou lien d'échantillonnage",
      "Éléments de marque à lancer en premier",
      "Quantité de lancement prévue et calendrier"
    ],
    "note": {
      "title": "Ce qui nous aide à mettre en œuvre le plan de la marque",
      "text": "Partagez la référence du produit, les points tactiles de marque qui comptent le plus et la première cible de production pour que les décisions de MOQ et d'emballage restent pratiques."
    },
    "titleClass": "sdr-compact-quote-title"
  },
  "product-sourcing": {
    "checklist": [
      "Référence ou spécification du produit",
      "Coût unitaire cible et quantité de commande",
      "Matériaux, emballages et détails obligatoires"
    ],
    "note": {
      "title": "Ce qui nous aide à comparer les fournisseurs plus rapidement",
      "text": "Un mémoire clair facilite la comparaison des hypothèses relatives à la cotation, à l'échantillonnage et à l'expédition."
    },
    "titleClass": "sdr-compact-quote-title"
  },
  "automatic-order-fulfillment": {
    "checklist": [
      "Store plate-forme et source de commande",
      "SKU carte ou catalogue de produits",
      "Motifs et méthode de suivi"
    ],
    "note": {
      "title": "Ce qui nous aide à cartographier la voie",
      "text": "Les champs de stockage, les enregistrements SKU et les règles de conservation facilitent le test de l'itinéraire automatique avant le lancement."
    },
    "titleClass": "sdr-compact-quote-title"
  },
  "china-fulfillment-center": {
    "checklist": [
      "Nombre de fournisseurs ou sources entrantes",
      "Nombre de SKU et programme de carton",
      "Stockage, QC et exigences d'expédition"
    ],
    "note": {
      "title": "Ce qui nous aide à planifier la disposition de l'entrepôt",
      "text": "Le débit entrant, le mélange de produits et les attentes en matière d'expédition façonnent la façon dont la réception, l'inspection et l'entreposage doivent être organisés."
    },
    "titleClass": "sdr-compact-quote-title"
  },
  "quality-control-inspection": {
    "checklist": [
      "Référence ou spécification du produit",
      "Étape d'inspection et taille du lot",
      "Risques de défauts critiques et norme d'acceptation"
    ],
    "note": {
      "title": "Ce qui nous aide à faire une inspection plus rapide",
      "text": "Le meilleur plan QC commence par la norme de produit, l'étape que vous voulez vérifier et les défauts qui comptent le plus pour les clients."
    },
    "titleClass": "sdr-compact-quote-title"
  }
};

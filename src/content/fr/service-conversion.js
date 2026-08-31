export const serviceConversionContent = {
  "dropshipping-supplier": {
    "form": {
      "eyebrow": "EXAMEN DES PROJETS DE DROPPEMENT",
      "title": "Planifiez votre flux de chute",
      "lead": "Partagez les produits, les marchés et la routine de commande actuelle afin que nous puissions identifier le bon approvisionnement, l'emballage et la livraison.",
      "fields": [
        {
          "name": "product_link",
          "label": "Lien entre le produit ou le fournisseur",
          "type": "url",
          "placeholder": "Coller une URL de produit ou de fournisseur",
          "required": true
        },
        {
          "name": "daily_orders",
          "label": "Commandes quotidiennes en cours",
          "type": "select",
          "options": [
            "Pré-lancement/essais",
            "1-10 ordonnances",
            "11–50 ordonnances",
            "51–200 ordonnances",
            "200 + commandes"
          ],
          "required": true
        },
        {
          "name": "destination_markets",
          "label": "Principaux marchés de destination",
          "type": "text",
          "placeholder": "États-Unis, Royaume-Uni, Allemagne",
          "required": true
        },
        {
          "name": "workflow_challenge",
          "label": "Qu'est-ce qui doit être amélioré?",
          "type": "textarea",
          "placeholder": "Parlez-nous de la coordination des fournisseurs, de la qualité, de l'emballage, de la livraison ou des problèmes de service client.",
          "required": true,
          "wide": true
        }
      ]
    },
    "caseStudy": {
      "eyebrow": "AFFAIRE DE DROPSHIPING REPRÉSENTANT",
      "title": "Chats fournisseurs, un flux de travail.",
      "profile": "Magasin d'accessoires indépendants au service des clients nord-américains et européens",
      "challenge": "Les mises à jour du produit, de l'emballage et de l'expédition ont été divisées entre les discussions, sans propriétaire de commande unique.",
      "plan": [
        "Confirmer la référence du produit",
        "Ensemble des règles d'emballage et d'expédition",
        "État de retour et suivi"
      ],
      "evidence": [
        "Référence du produit approuvée",
        "Instructions d ' emballage",
        "Ordre et dossier de suivi"
      ],
      "outcome": "Un workflow montre le propriétaire, les vérifications et le suivi de chaque commande."
    }
  },
  "3pl-fulfillment-services": {
    "form": {
      "eyebrow": "EXAMEN DE LA CHAMP D'APPLICATION",
      "title": "Estimez votre 3PL",
      "lead": "Partager le nombre de SKU, les unités stockées et le débit de commande quotidien afin que l'entrepôt de réception, de stockage et d'expédition puisse être planifié avec précision.",
      "fields": [
        {
          "name": "sku_count",
          "label": "Nombre de SKUs actifs",
          "type": "select",
          "options": [
            "1–10 SKUs",
            "11–50 SKUs",
            "51–200 SKUs",
            "200+ SKUs"
          ],
          "required": true
        },
        {
          "name": "inventory_units",
          "label": "Unités stockées prévues",
          "type": "select",
          "options": [
            "Moins de 500 unités",
            "500 à 2 000 unités",
            "2 001 à 10 000 unités",
            "Plus de 10 000 unités"
          ],
          "required": true
        },
        {
          "name": "daily_orders",
          "label": "Commandes quotidiennes moyennes",
          "type": "select",
          "options": [
            "Moins de 10 ordres",
            "10 à 50 ordonnances",
            "51–200 ordonnances",
            "200 + commandes"
          ],
          "required": true
        },
        {
          "name": "warehouse_requirements",
          "label": "Exigences en matière d ' entrepôt",
          "type": "textarea",
          "placeholder": "Décrire les paquets, les inserts, l'emballage, les conditions de stockage ou les horaires des fournisseurs entrants.",
          "required": true,
          "wide": true
        }
      ]
    },
    "caseStudy": {
      "eyebrow": "CAS DU REPRÉSENTANT 3PL",
      "title": "C'est l'accomplissement quotidien.",
      "profile": "Multi-SKU marque recevant le stock de plusieurs fournisseurs",
      "challenge": "Les cartons en vrac sont arrivés en lots, mais les commandes quotidiennes ont besoin d'une cueillette et d'un emballage précis.",
      "plan": [
        "Carte des stocks entrants",
        "Matériaux de marque distincts",
        "Choisir, emballer et réconcilier"
      ],
      "evidence": [
        "Données relatives aux écarts entrants",
        "Livre d'inventaire SKU",
        "Instructions pour le choix et l'emballage"
      ],
      "outcome": "Les stocks en vrac se transforment en une routine d'accomplissement quotidienne claire."
    }
  },
  "pod-fulfillment": {
    "form": {
      "eyebrow": "EXAMEN DES PRODUITS POD",
      "title": "Vérifiez votre commande POD",
      "lead": "Partagez le produit de base, l'état de préparation des oeuvres d'art et le modèle de commande prévu afin que nous puissions évaluer la faisabilité de l'échantillonnage, de la production et de l'exécution.",
      "fields": [
        {
          "name": "pod_product",
          "label": "Type de produit",
          "type": "select",
          "options": [
            "Appareil",
            "Accessoires",
            "Accueil et mode de vie",
            "Produits en papier",
            "Autres produits"
          ],
          "required": true
        },
        {
          "name": "artwork_status",
          "label": "Statut d'artiste",
          "type": "select",
          "options": [
            "Concept seulement",
            "Fichiers en cours",
            "Fichiers prêts à imprimer",
            "Échantillon physique approuvé"
          ],
          "required": true
        },
        {
          "name": "monthly_orders",
          "label": "Commandes mensuelles attendues",
          "type": "select",
          "options": [
            "Moins de 100 ans",
            "100–500",
            "501–2 000",
            "2,000+"
          ],
          "required": true
        },
        {
          "name": "pod_requirements",
          "label": "Exigences en matière d'art et de production",
          "type": "textarea",
          "placeholder": "Décrivez les variantes, la zone d'impression, les couleurs, l'emballage et les marchés de destination.",
          "required": true,
          "wide": true
        }
      ]
    },
    "caseStudy": {
      "eyebrow": "CAS DU REPRÉSENTANT POD",
      "title": "Gardez connecté l'œuvre d'art, les variantes de produit et l'approbation de production.",
      "profile": "Magasin de vêtements dirigé par l'artiste lançant plusieurs designs à travers les tailles et les couleurs",
      "challenge": "Chaque commande devait correspondre au produit vierge correct, au fichier d'illustration et au placement d'impression avant d'être emballée pour une livraison directe.",
      "plan": [
        "Approuver le produit vierge et la zone imprimable",
        "Carte des versions d'illustration vers SKUs orienté client",
        "Utiliser un échantillon physique comme référence de reproduction"
      ],
      "evidence": [
        "Feuille de prévol des oeuvres d'art",
        "Tableau de correspondance des écarts",
        "Exemple de dossier approuvé"
      ],
      "outcome": "La production peut suivre une référence documentée au lieu d'interpréter à nouveau les exigences d'art et de variante pour chaque commande."
    }
  },
  "private-label": {
    "form": {
      "eyebrow": "EXAMEN DE LA CHAMP D'APPLICATION",
      "title": "Planifiez votre lancement de marque privée",
      "lead": "Dites-nous quels sont les points de contact de produits et de marque qui comptent d'abord afin que nous puissions examiner MOQ, les exigences d'échantillonnage, d'emballage et de stockage.",
      "fields": [
        {
          "name": "product_link",
          "label": "Produit ou lien d'échantillonnage",
          "type": "url",
          "placeholder": "Coller une URL de référence de produit",
          "required": true
        },
        {
          "name": "brand_scope",
          "label": "Besoin primaire de marquage",
          "type": "select",
          "options": [
            "Étiquette du produit",
            "Insert imprimé",
            "Messagerie personnalisée",
            "Boîte personnalisée",
            "Personnalisation des produits"
          ],
          "required": true
        },
        {
          "name": "launch_quantity",
          "label": "Première quantité prévue",
          "type": "select",
          "options": [
            "Moins de 100 unités",
            "100–500 unités",
            "501–2 000 unités",
            "Plus de 2 000 unités"
          ],
          "required": true
        },
        {
          "name": "brand_requirements",
          "label": "Exigences relatives à la marque",
          "type": "textarea",
          "placeholder": "Décrivez les matériaux, les couleurs, le placement du logo, les objectifs de déboxage et le calendrier de lancement cible.",
          "required": true,
          "wide": true
        }
      ]
    },
    "caseStudy": {
      "eyebrow": "CAS DE LABEL PRIVÉ REPRÉSENTANT",
      "title": "Phasez le lancement.",
      "profile": "Marque d'accessoires de soins personnels en croissance préparant son premier inventaire de marques",
      "challenge": "La marque voulait une expérience de déboxage plus forte, mais devait équilibrer les minimums sur mesure, l'espace de stockage et le calendrier de lancement.",
      "plan": [
        "Classement des éléments d'emballage en premier",
        "Approuver les étiquettes avant les engagements plus importants en matière d'emballage",
        "Connectez les matériaux stockés à la règle d'emballage quotidienne"
      ],
      "evidence": [
        "Liste restreinte des composants de marque",
        "Échantillon d ' emballage physique",
        "Guide d'emballage de niveau de commande"
      ],
      "outcome": "Les décisions de marque deviennent un plan d'exploitation échelonné avec des implications visibles pour MOQ et l'entrepôt."
    }
  },
  "product-sourcing": {
    "form": {
      "eyebrow": "BREF DE SOURCE",
      "title": "Lancer une recherche de fournisseur",
      "lead": "Donnez-nous un bref produit clair afin que les devis du fournisseur, les échantillons et les implications de réalisation puissent être comparés sur la même base.",
      "fields": [
        {
          "name": "product_link",
          "label": "Référence du produit",
          "type": "url",
          "placeholder": "Coller un lien de produit ou une URL de spécification",
          "required": true
        },
        {
          "name": "target_price",
          "label": "Coût unitaire cible",
          "type": "text",
          "placeholder": "8 à 12 dollars des États-Unis",
          "required": false
        },
        {
          "name": "order_quantity",
          "label": "Quantité de commande prévue",
          "type": "select",
          "options": [
            "Moins de 100 unités",
            "100–500 unités",
            "501–2 000 unités",
            "Plus de 2 000 unités"
          ],
          "required": true
        },
        {
          "name": "product_specification",
          "label": "Spécification du produit",
          "type": "textarea",
          "placeholder": "Décrire le matériel, la taille, les variantes, l'emballage, le marché cible et toute exigence non négociable.",
          "required": true,
          "wide": true
        }
      ]
    },
    "caseStudy": {
      "eyebrow": "AFFAIRES DE SOURCE REPRÉSENTANTE",
      "title": "Le prix n'est pas le devis.",
      "profile": "Fondateur validant un nouvel accessoire de confort pour un magasin outre-mer",
      "challenge": "Les devis initiaux décrivaient différents matériaux, emballages et quantités minimales, rendant les prix impossibles à comparer équitablement.",
      "plan": [
        "Écrire un mémoire prêt pour le fournisseur",
        "Normaliser les termes de citation",
        "Examiner les échantillons avant la production"
      ],
      "evidence": [
        "Feuille de cotation comparable",
        "Exemples de notes d ' examen",
        "Spécifications approuvées"
      ],
      "outcome": "La décision du fournisseur comprend la qualité du produit, les conditions de production, l'emballage et les implications de livraison plutôt que le prix en usine seulement."
    }
  },
  "automatic-order-fulfillment": {
    "form": {
      "eyebrow": "EXAMEN DE L'ORDRE DU JOUR",
      "title": "Carte de votre ligne de commande",
      "lead": "Dites-nous où les commandes commencent, quelles données manquent aujourd'hui et comment le suivi devrait revenir après l'expédition.",
      "fields": [
        {
          "name": "store_platform",
          "label": "Plateforme de stockage",
          "type": "select",
          "options": [
            "Autres",
            "Autres",
            "Autres",
            "Autres",
            "Autres",
            "Magasin personnalisé"
          ],
          "required": true
        },
        {
          "name": "daily_orders",
          "label": "Commandes quotidiennes moyennes",
          "type": "select",
          "options": [
            "Moins de 10 ordres",
            "10 à 50 ordonnances",
            "51–200 ordonnances",
            "200 + commandes"
          ],
          "required": true
        },
        {
          "name": "current_handoff",
          "label": "Remise des commandes actuelles",
          "type": "select",
          "options": [
            "Messages manuels",
            "Feuille de calcul ou CSV",
            "App ou connecteur",
            "Personnalisé API"
          ],
          "required": true
        },
        {
          "name": "automation_challenge",
          "label": "Défi principal de l'automatisation",
          "type": "textarea",
          "placeholder": "Décrire la cartographie SKU, la validation de l'adresse, les paquets, l'inventaire, le suivi ou la gestion des exceptions.",
          "required": true,
          "wide": true
        }
      ]
    },
    "caseStudy": {
      "eyebrow": "AFFAIRE D'AUTORISATION",
      "title": "Les ordres normaux ont besoin d'une voie.",
      "profile": "Shopify magasin remplaçant tableur stock de distribution",
      "challenge": "La plupart des commandes peuvent se déplacer rapidement, mais SKU des erreurs, d'aborder les lacunes et les notes groupées ont besoin d'une pause contrôlée avant l'exécution.",
      "plan": [
        "Carte SKUs vers les registres d'entrepôt",
        "Diviser les raisons d'exception tôt",
        "Suivi de retour par une seule prise"
      ],
      "evidence": [
        "Carte de SKU",
        "Liste des exceptions",
        "Résultats des essais"
      ],
      "outcome": "Les ordres répétables passent par un itinéraire propre tandis que les exceptions s'arrêtent avec suffisamment de contexte pour une décision humaine."
    }
  },
  "china-fulfillment-center": {
    "form": {
      "eyebrow": "EXAMEN DE L'ÉCOLE DE LA CHINE",
      "title": "Planifiez le débit de votre entrepôt",
      "lead": "Partagez votre fournisseur, SKU et profil d'exportation afin de recevoir, QC, stockage et expédition peuvent être cartographiés avant la première livraison entrante.",
      "fields": [
        {
          "name": "supplier_count",
          "label": "Fournisseurs actifs",
          "type": "select",
          "options": [
            "1 fournisseur",
            "2 à 5 fournisseurs",
            "6-15 fournisseurs",
            "Plus de 15 fournisseurs"
          ],
          "required": true
        },
        {
          "name": "sku_count",
          "label": "Nombre de SKUs",
          "type": "select",
          "options": [
            "1–10 SKUs",
            "11–50 SKUs",
            "51–200 SKUs",
            "200+ SKUs"
          ],
          "required": true
        },
        {
          "name": "destination_markets",
          "label": "Principaux marchés de destination",
          "type": "text",
          "placeholder": "États-Unis, Royaume-Uni et UE",
          "required": true
        },
        {
          "name": "center_requirements",
          "label": "Exigences en matière de réception et de réalisation",
          "type": "textarea",
          "placeholder": "Décrivez la fréquence d'entrée, le stockage, QC, les besoins de kitting, d'emballage et d'expédition.",
          "required": true,
          "wide": true
        }
      ]
    },
    "caseStudy": {
      "eyebrow": "AFFAIRE DE RÉFÉRENCE REPRÉSENTANTE",
      "title": "Stock d'usine, prêt à expédier.",
      "profile": "Consolidation de la marque produits, inserts et emballages dans un entrepôt en Chine",
      "challenge": "Les marchandises d'usine, les matériaux de marque et les commandes des clients sont arrivés à différents horaires et ont dû toujours partir par un itinéraire d'expédition propre.",
      "plan": [
        "Carte de chaque livraison entrante",
        "Voies de stockage et d'emballage séparées QC",
        "Relâcher les colis finis par itinéraire"
      ],
      "evidence": [
        "Carte d'arrivée",
        "Enregistrement QC",
        "Voie d'expédition"
      ],
      "outcome": "L'entrepôt transforme la production du fournisseur en un flux de commande prêt à l'exportation avec moins d'erreurs de retrait."
    }
  },
  "quality-control-inspection": {
    "form": {
      "eyebrow": "BREF D'INSPECTION",
      "title": "Définir le plan de publication",
      "lead": "Dites-nous ce qui est produit, quand il devrait être inspecté et quels échecs seraient les plus importants.",
      "fields": [
        {
          "name": "product_reference",
          "label": "Référence du produit",
          "type": "url",
          "placeholder": "Coller un produit ou une URL de spécification",
          "required": true
        },
        {
          "name": "inspection_stage",
          "label": "Étape de l'inspection",
          "type": "select",
          "options": [
            "Préproduction",
            "En cours de production",
            "Préexpédition",
            "Contrôle de l'entrepôt entrant",
            "Vérification de la commande finale"
          ],
          "required": true
        },
        {
          "name": "batch_quantity",
          "label": "Quantité du lot",
          "type": "text",
          "placeholder": "Par exemple, 1 500 unités",
          "required": true
        },
        {
          "name": "quality_risks",
          "label": "Risques importants pour la qualité",
          "type": "textarea",
          "placeholder": "Décrire les dimensions, l'apparence, la fonction, l'étiquetage, l'emballage ou les défauts connus.",
          "required": true,
          "wide": true
        }
      ]
    },
    "caseStudy": {
      "eyebrow": "AFFAIRE DE QUALITÉ REPRÉSENTATIVE-CONTROL",
      "title": "Rendre la décision de libération facile à lire.",
      "profile": "Lot accessoire en attente d'approbation avant expédition",
      "challenge": "Un contrôle visuel à lui seul ne couvrirait pas les risques d'ajustement, d'étiquetage, de quantité et d'emballage qui pourraient créer des retours de clients.",
      "plan": [
        "Traduire la spécification approuvée en points de contrôle",
        "Enregistrer les constatations et les photos",
        "Inventaire séparé accepté, retravaillé et tenu"
      ],
      "evidence": [
        "Liste de contrôle",
        "Recherche et enregistrement de photos",
        "Décision de mise en liberté"
      ],
      "outcome": "L'équipe obtient suffisamment de preuves pour approuver, retravailler ou tenir l'inventaire touché avant d'être remplie."
    }
  }
};

export const serviceComparison = [
  [
    "dropshipping-fournisseur",
    "Fournisseur de décrochage",
    "Magasins ayant besoin d'un partenaire derrière chaque commande directe au client",
    "Flexible / optionnel",
    "Disponible",
    "Déroulement des commandes"
  ],
  [
    "3pl-fulfillment-services",
    "3PL Exécution",
    "Marques détenant le stock et l'expédition commandes répétées de multiple SKUs",
    "Besoins essentiels",
    "Disponible",
    "Plan de réception + stockage"
  ],
  [
    "pod-remplissement",
    "POD Exécution",
    "Magasins produisant des articles personnalisés après la commande",
    "Stock blanc ou sur demande",
    "Construit en produit",
    "Ouvrages + échantillon"
  ],
  [
    "marque privée",
    "Étiquette privée",
    "Marques ajoutant des étiquettes, inserts, emballages ou personnalisation de produits",
    "Matériaux de marque stockés",
    "Priorité",
    "Produit + slip marque"
  ],
  [
    "approvisionnement en produits",
    "Produit d'approvisionnement",
    "Équipes comparant fournisseurs, spécifications, échantillons et conditions commerciales",
    "Pas besoin de commencer",
    "Prévu si nécessaire",
    "Spécification du produit"
  ],
  [
    "automatic-order-fulfillment",
    "Automatisation des commandes",
    "La croissance des magasins remplace la commande manuelle et le suivi des commandes",
    "Connecté à l'entrepôt",
    "Règles",
    "Plateforme + carte SKU"
  ],
  [
    "china-fulfillment-center",
    "Centre d'exécution",
    "Marques consolidant les produits d'usine avant l'expédition de commande globale",
    "Besoins essentiels",
    "Disponible",
    "Plan SKU entrant"
  ],
  [
    "quality-control-inspection",
    "Contrôle qualité",
    "Équipes ayant besoin de preuves avant d'approuver ou de libérer des produits",
    "Lot ou niveau d'ordre",
    "Vérification par rapport à la portée",
    "Spécification + risques"
  ]
];

export const serviceConversionContent = {
  "dropshipping-supplier": {
    "form": {
      "eyebrow": "EXAMEN DEL PROYECTO DE REDACCIÓN",
      "title": "Planifique su flujo de goteo",
      "lead": "Comparta los productos, los mercados y la rutina de pedidos actuales para que podamos identificar el margen de suministro, embalaje y entrega adecuado.",
      "fields": [
        {
          "name": "product_link",
          "label": "Enlace de producto o proveedor",
          "type": "url",
          "placeholder": "Pruebe un producto o URL del proveedor",
          "required": true
        },
        {
          "name": "daily_orders",
          "label": "Órdenes diarias actuales",
          "type": "select",
          "options": [
            "Pre-lanzamiento / prueba",
            "1 a 10 órdenes",
            "11 a 50 órdenes",
            "51 a 200 órdenes",
            "200+ órdenes"
          ],
          "required": true
        },
        {
          "name": "destination_markets",
          "label": "Principales mercados de destino",
          "type": "text",
          "placeholder": "Estados Unidos, Reino Unido, Alemania",
          "required": true
        },
        {
          "name": "workflow_challenge",
          "label": "¿Qué necesita mejorar?",
          "type": "textarea",
          "placeholder": "Cuéntanos sobre la coordinación de proveedores, calidad, embalaje, entrega o problemas de servicio al cliente.",
          "required": true,
          "wide": true
        }
      ]
    },
    "caseStudy": {
      "eyebrow": "CASO DE DROPSIS REPRESENTANTE",
      "title": "chats de proveedor, un flujo de trabajo.",
      "profile": "Tienda de accesorios independientes para clientes norteamericanos y europeos",
      "challenge": "Las actualizaciones de productos, embalajes y envíos se dividieron en chats, sin un solo propietario del pedido.",
      "plan": [
        "Confirmación de referencia del producto",
        "Establecer reglas de embalaje y envío",
        "Estado de retorno y seguimiento"
      ],
      "evidence": [
        "Referencia del producto aprobada",
        "Instrucciones de embalaje",
        "Registro de pedidos y seguimiento"
      ],
      "outcome": "Un flujo de trabajo muestra al propietario, cheques y seguimiento de cada pedido."
    }
  },
  "3pl-fulfillment-services": {
    "form": {
      "eyebrow": "REVISIÓN DE LA ESCUELA",
      "title": "Estima tu 3PL",
      "lead": "Compartir SKU cuenta, unidades almacenadas y flujo de pedidos diarios para que el almacén reciba, almacenamiento y alcance de envío se pueda planificar con precisión.",
      "fields": [
        {
          "name": "sku_count",
          "label": "Número de SKUs activo",
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
          "label": "Unidades almacenadas previstas",
          "type": "select",
          "options": [
            "Menos de 500 unidades",
            "500 a 2.000 unidades",
            "2.001 a 10.000 unidades",
            "10.000 unidades más"
          ],
          "required": true
        },
        {
          "name": "daily_orders",
          "label": "Promedio de pedidos diarios",
          "type": "select",
          "options": [
            "Bajo 10 órdenes",
            "10 a 50 órdenes",
            "51 a 200 órdenes",
            "200+ órdenes"
          ],
          "required": true
        },
        {
          "name": "warehouse_requirements",
          "label": "Necesidades de almacén",
          "type": "textarea",
          "placeholder": "Describir paquetes, insertos, embalajes, condiciones de almacenamiento o calendarios de proveedores de entrada.",
          "required": true,
          "wide": true
        }
      ]
    },
    "caseStudy": {
      "eyebrow": "CASE REPRESENTATIVE 3PL",
      "title": "Stock to daily fulfillment.",
      "profile": "Multi-SKU marca que recibe stock de varios proveedores",
      "challenge": "Cartones a granel llegaron en lotes, pero los pedidos diarios necesitaban recoger y empacar con precisión.",
      "plan": [
        "Map inbound stock",
        "Materiales de marca separados",
        "Elige, empaca y reconcilia"
      ],
      "evidence": [
        "Registro de discrepancias",
        "Ligero de inventario SKU",
        "Instrucciones de selección y paquete"
      ],
      "outcome": "El stock a granel se convierte en una rutina de cumplimiento diaria clara."
    }
  },
  "pod-fulfillment": {
    "form": {
      "eyebrow": "EXAMEN DE PRODUCTOS POD",
      "title": "Revisa tu pedido POD",
      "lead": "Comparta el producto base, la preparación del arte y el patrón de orden esperado para poder evaluar la viabilidad de muestreo, producción y cumplimiento.",
      "fields": [
        {
          "name": "pod_product",
          "label": "Tipo de producto",
          "type": "select",
          "options": [
            "Ropa",
            "Accesorios",
            "Hogar y estilo de vida",
            "Artículos de papel",
            "Otros productos"
          ],
          "required": true
        },
        {
          "name": "artwork_status",
          "label": "Estado del arte",
          "type": "select",
          "options": [
            "Concepto únicamente",
            "Archivos en progreso",
            "Archivos listos para imprimir",
            "Muestra física aprobada"
          ],
          "required": true
        },
        {
          "name": "monthly_orders",
          "label": "Órdenes mensuales previstas",
          "type": "select",
          "options": [
            "Menos de 100",
            "100 a 500",
            "501–2.000",
            "2,000+"
          ],
          "required": true
        },
        {
          "name": "pod_requirements",
          "label": "Artwork and production requirements",
          "type": "textarea",
          "placeholder": "Describir variantes, área de impresión, colores, envases y mercados de destino.",
          "required": true,
          "wide": true
        }
      ]
    },
    "caseStudy": {
      "eyebrow": "CASE REPRESENTATIVE POD",
      "title": "Mantenga la obra, las variantes de productos y la aprobación de la producción conectadas.",
      "profile": "Tienda de ropa dirigida por artistas lanzando múltiples diseños a través de tamaños y colores",
      "challenge": "Cada pedido tenía que coincidir con el producto en blanco correcto, el archivo de arte y la colocación de impresión antes de ser empaquetado para la entrega directa.",
      "plan": [
        "Aprobar el producto en blanco y el área imprimible",
        "Mapa versiones de obras de arte a SKUs",
        "Use una muestra física como referencia de reproducción repetida"
      ],
      "evidence": [
        "Hoja de trabajo previa al vuelo",
        "Cuadro de cartografía variable",
        "Registro de muestras aprobado"
      ],
      "outcome": "La producción puede seguir una referencia documentada en lugar de interpretar las obras de arte y los requisitos de variante de nuevo para cada orden."
    }
  },
  "private-label": {
    "form": {
      "eyebrow": "BRAND SCOPE REVIEW",
      "title": "Planifique su lanzamiento de etiquetas privadas",
      "lead": "Cuéntanos qué productos y puntos de contacto importan primero para poder revisar MOQ, muestreo, embalaje y requisitos de almacenamiento.",
      "fields": [
        {
          "name": "product_link",
          "label": "Enlace de producto o muestra",
          "type": "url",
          "placeholder": "Pruebe una URL de referencia del producto",
          "required": true
        },
        {
          "name": "brand_scope",
          "label": "Necesidad de marcación primaria",
          "type": "select",
          "options": [
            "Etiquetas del producto",
            "Inserto impreso",
            "Correo electrónico personalizado",
            "Caja personalizada",
            "Personalización de productos"
          ],
          "required": true
        },
        {
          "name": "launch_quantity",
          "label": "Primera cantidad esperada",
          "type": "select",
          "options": [
            "Menos de 100 unidades",
            "100 a 500 unidades",
            "501 a 2.000 unidades",
            "2.000 unidades más"
          ],
          "required": true
        },
        {
          "name": "brand_requirements",
          "label": "Requisitos de marca",
          "type": "textarea",
          "placeholder": "Describir materiales, colores, colocación de logotipos, objetivos de desmontaje y tiempo de lanzamiento objetivo.",
          "required": true,
          "wide": true
        }
      ]
    },
    "caseStudy": {
      "eyebrow": "CASO PRIVADO-LABEL REPRESENTANTE",
      "title": "Fase el lanzamiento.",
      "profile": "Creciendo accesorios de cuidado personal marca preparando su primer inventario de marca",
      "challenge": "La marca quería una experiencia más fuerte sin boxeo pero necesitaba equilibrar mínimos de material personalizado, espacio de almacenamiento y tiempo de lanzamiento.",
      "plan": [
        "Primero elementos de embalaje Rank",
        "Aprobar etiquetas antes de compromisos de embalaje más grandes",
        "Conectar materiales almacenados a la regla de embalaje diaria"
      ],
      "evidence": [
        "Lista de componentes de la marca",
        "Muestra de embalaje físico",
        "Guía de embalaje de nivel de orden"
      ],
      "outcome": "Las decisiones de marca se convierten en un plan operativo gradual con las implicaciones visibles de MOQ y almacén."
    }
  },
  "product-sourcing": {
    "form": {
      "eyebrow": "SOURCING BRIEF",
      "title": "Iniciar una búsqueda del proveedor",
      "lead": "Dénos un informe de producto claro para que las cotizaciones de proveedores, muestras y implicaciones de cumplimiento puedan compararse en la misma base.",
      "fields": [
        {
          "name": "product_link",
          "label": "Referencia del producto",
          "type": "url",
          "placeholder": "Pruebe un enlace de producto o URL de especificación",
          "required": true
        },
        {
          "name": "target_price",
          "label": "Costo por unidad de destino",
          "type": "text",
          "placeholder": "8 a 12 dólares de los EE.UU.",
          "required": false
        },
        {
          "name": "order_quantity",
          "label": "Cantidad prevista del pedido",
          "type": "select",
          "options": [
            "Menos de 100 unidades",
            "100 a 500 unidades",
            "501 a 2.000 unidades",
            "2.000 unidades más"
          ],
          "required": true
        },
        {
          "name": "product_specification",
          "label": "Especificación del producto",
          "type": "textarea",
          "placeholder": "Describir material, tamaño, variantes, embalaje, mercado objetivo y cualquier requisito no negociable.",
          "required": true,
          "wide": true
        }
      ]
    },
    "caseStudy": {
      "eyebrow": "CASO DE MANTENIMIENTO REPRESENTANTE",
      "title": "El precio no es la cita.",
      "profile": "Fundador validando un nuevo accesorio a la vivienda para una tienda de ultramar",
      "challenge": "Las citas iniciales describieron diferentes materiales, embalajes y cantidades mínimas, haciendo que los precios imposibles de comparar con justicia.",
      "plan": [
        "Escribe un breve proveedor",
        "Normalizar los términos de cotización",
        "Examinar muestras antes de la producción"
      ],
      "evidence": [
        "Ficha comparativa",
        "Notas de revisión de muestras",
        "Especificación aprobada"
      ],
      "outcome": "La decisión del proveedor incluye calidad de producto, términos de producción, implicaciones de embalaje y entrega en lugar de precio de fábrica."
    }
  },
  "automatic-order-fulfillment": {
    "form": {
      "eyebrow": "EXAMEN ORDER-FLOW",
      "title": "Mapa de su carril de pedido",
      "lead": "Díganos dónde comienzan las órdenes, qué datos faltan hoy y cómo el seguimiento debe regresar después del envío.",
      "fields": [
        {
          "name": "store_platform",
          "label": "Plataforma de tiendas",
          "type": "select",
          "options": [
            "Shopify",
            "WooCommerce",
            "TikTok Shop",
            "Amazon",
            "Etsy",
            "Tienda personalizada"
          ],
          "required": true
        },
        {
          "name": "daily_orders",
          "label": "Promedio de pedidos diarios",
          "type": "select",
          "options": [
            "Bajo 10 órdenes",
            "10 a 50 órdenes",
            "51 a 200 órdenes",
            "200+ órdenes"
          ],
          "required": true
        },
        {
          "name": "current_handoff",
          "label": "Paso del orden actual",
          "type": "select",
          "options": [
            "Mensajes manuales",
            "hoja de cálculo o CSV",
            "App o conector",
            "Custom API"
          ],
          "required": true
        },
        {
          "name": "automation_challenge",
          "label": "Desafío de automatización principal",
          "type": "textarea",
          "placeholder": "Describir el mapeo SKU, validación de direcciones, paquetes, inventario, seguimiento o necesidades de gestión de excepciones.",
          "required": true,
          "wide": true
        }
      ]
    },
    "caseStudy": {
      "eyebrow": "CASO DE AUTOMACIÓN",
      "title": "Las órdenes normales necesitan un carril.",
      "profile": "Shopify tienda de sustitución de hojas de cálculo",
      "challenge": "La mayoría de los pedidos podían moverse rápidamente, pero los desajustes SKU, subsanar las brechas y las notas del paquete necesitaban una pausa controlada antes del cumplimiento.",
      "plan": [
        "Mapa SKUs a registros de almacén",
        "Dividir razones de excepción temprano",
        "Regresar el seguimiento a través de un desvío"
      ],
      "evidence": [
        "SKU mapa",
        "Lista de excepciones",
        "Resultados de ensayo"
      ],
      "outcome": "Las órdenes repetibles pasan por una ruta limpia, mientras que las excepciones se detienen con suficiente contexto para una decisión humana."
    }
  },
  "china-fulfillment-center": {
    "form": {
      "eyebrow": "CHINA WAREHOUSE REVIEW",
      "title": "Planifique su flujo de almacén",
      "lead": "Comparta su proveedor, SKU y perfil de exportación para recibir, QC, el almacenamiento y el envío se pueden mapear antes de la primera entrega de entrada.",
      "fields": [
        {
          "name": "supplier_count",
          "label": "Proveedores activos",
          "type": "select",
          "options": [
            "1 proveedor",
            "2 a 5 proveedores",
            "6 a 15 proveedores",
            "15+ proveedores"
          ],
          "required": true
        },
        {
          "name": "sku_count",
          "label": "Número de SKUs",
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
          "label": "Principales mercados de destino",
          "type": "text",
          "placeholder": "EE.UU., Reino Unido y UE",
          "required": true
        },
        {
          "name": "center_requirements",
          "label": "Requisitos de recepción y cumplimiento",
          "type": "textarea",
          "placeholder": "Describir frecuencia de entrada, almacenamiento, QC, kitting, embalaje y necesidades de envío.",
          "required": true,
          "wide": true
        }
      ]
    },
    "caseStudy": {
      "eyebrow": "CASE DE AGUA REPRESENTIVA",
      "title": "Stock de fábrica, listo para enviar.",
      "profile": "Marca consolidando productos, insertos y embalajes en un almacén de China",
      "challenge": "Los productos de fábrica, los materiales de marca y las órdenes de los clientes llegaron en diferentes horarios y todavía tenían que salir a través de una ruta de despacho limpia.",
      "plan": [
        "Mapa de cada entrega de entrada",
        "QC separado, carriles de almacenamiento y embalaje",
        "Liberar paquetes terminados por ruta"
      ],
      "evidence": [
        "Mapa de entrada",
        "Registro QC",
        "Carril de separación"
      ],
      "outcome": "El almacén convierte la salida del proveedor en un flujo de pedido listo para la exportación con menos errores de entrega."
    }
  },
  "quality-control-inspection": {
    "form": {
      "eyebrow": "INSPECTION BRIEF",
      "title": "Define el plan de liberación",
      "lead": "Díganos lo que se está produciendo, cuando debe ser inspeccionado y qué fallos importarían más.",
      "fields": [
        {
          "name": "product_reference",
          "label": "Referencia del producto",
          "type": "url",
          "placeholder": "Pruebe un producto o URL de especificación",
          "required": true
        },
        {
          "name": "inspection_stage",
          "label": "Etapa de inspección",
          "type": "select",
          "options": [
            "Pre-producción",
            "Durante la producción",
            "Pre-shipment",
            "Comprobación de almacén",
            "Comprobación de orden final"
          ],
          "required": true
        },
        {
          "name": "batch_quantity",
          "label": "Cantidad de lote",
          "type": "text",
          "placeholder": "por ejemplo 1.500 unidades",
          "required": true
        },
        {
          "name": "quality_risks",
          "label": "Riesgos de calidad importantes",
          "type": "textarea",
          "placeholder": "Describir dimensiones, apariencia, función, etiquetado, embalaje o problemas de defecto conocidos.",
          "required": true,
          "wide": true
        }
      ]
    },
    "caseStudy": {
      "eyebrow": "CASO DE CALIDAD-CONTROL REPRESENTANTE",
      "title": "Haga la decisión de liberación fácil de leer.",
      "profile": "Lote accesorio pendiente de aprobación previa al envío",
      "challenge": "Un control visual por sí solo no cubriría los riesgos de ajuste, etiquetado, cantidad y embalaje que podrían crear rendimientos del cliente.",
      "plan": [
        "Traducir la especificación aprobada en los puestos de control",
        "Grabar hallazgos y publicar fotos",
        "Separado aceptado, reelaborado y mantenido inventario"
      ],
      "evidence": [
        "Lista de verificación de la inspección",
        "Encontrar y grabar fotos",
        "Decisión de liberación"
      ],
      "outcome": "El equipo obtiene suficientes pruebas para aprobar, volver a trabajar o mantener el inventario afectado antes del cumplimiento."
    }
  }
};

export const serviceComparison = [
  [
    "dropshipping-supplier",
    "Proveedor de dropshipping",
    "Tiendas que necesitan un socio detrás de cada pedido directo a cliente",
    "Flexible / opcional",
    "Disponible",
    "Corriente de trabajo a nivel de orden"
  ],
  [
    "3pl-fulfillment-services",
    "3PL Fulfillment",
    "Marcas que sostienen stock y pedidos de repetición de envío de múltiples SKUs",
    "Necesidades básicas",
    "Disponible",
    "Plan de recepción + almacenamiento"
  ],
  [
    "llenado de pod",
    "POD Fulfillment",
    "Tiendas que producen artículos personalizados después de que se coloca un pedido",
    "Stock de blanco o bajo demanda",
    "Construido en producto",
    "Artwork + muestra"
  ],
  [
    "private-label",
    "Private Label",
    "Marcas que agregan etiquetas, insertos, embalaje o personalización de productos",
    "Materiales de marca almacenados",
    "Enfoque primario",
    "Product + brand brief"
  ],
  [
    "fuente de productos",
    "Sourcing de producto",
    "Equipos que comparan proveedores, especificaciones, muestras y términos comerciales",
    "No es necesario comenzar",
    "Planificado si es necesario",
    "Especificación del producto"
  ],
  [
    "automatic-order-fulfillment",
    "Automatización de pedidos",
    "Tiendas de cultivo que reemplazan el orden manual y las entregas de seguimiento",
    "Conectado al almacén",
    "Basado en normas",
    "Plataforma + mapa SKU"
  ],
  [
    "china-fulfillment-center",
    "Fulfillment Center",
    "Marcas consolidando bienes de fábrica antes del envío de pedidos globales",
    "Necesidades básicas",
    "Disponible",
    "Plan Inbound + SKU"
  ],
  [
    "quality-control-inspection",
    "Control de calidad",
    "Equipos que necesitan pruebas antes de aprobar o liberar productos",
    "Nivel de lote o pedido",
    "Comprobada contra el alcance",
    "Especificación + riesgos"
  ]
];

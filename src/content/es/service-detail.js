export const qcOutcomeDetails = [
  {
    "checks": "Muestra aprobada · especificaciones",
    "output": "Base de referencia de la inspección"
  },
  {
    "checks": "Cantidad · apariencia · función",
    "output": "Salvo tronco"
  },
  {
    "checks": "Fotos · notas · mediciones",
    "output": "Ruta de la evidencia"
  },
  {
    "checks": "Paso · retrabajo · retención",
    "output": "Decisión de liberación"
  }
];

export const qcProcessOutputs = [
  "Normas de inspección",
  "Referencia aprobada",
  "Encontrar un registro",
  "Informe de prueba",
  "Llamada de liberación"
];

export const proofContent = {
  "product-sourcing": {
    "eyebrow": "EXAMPLEA SUPPLIER COMPARISON",
    "title": "Compara las ofertas de proveedores.",
    "image": "/images/generated/product-sourcing-hero.webp",
    "columns": [
      "proveedor",
      "Precio unitario",
      "MOQ",
      "Tiempo de arrendamiento"
    ],
    "rows": [
      [
        "Proveedor A",
        "$8.40",
        "300",
        "18 días"
      ],
      [
        "Proveedor B",
        "$7.95",
        "500",
        "24 días"
      ],
      [
        "Proveedor C",
        "$9.10",
        "100",
        "14 días"
      ]
    ],
    "note": "Comparación ilustrativa. Las cotizaciones reales dependen de la especificación y la revisión del proveedor."
  },
  "quality-control-inspection": {
    "eyebrow": "EXAMPLE QC RELEASE RECORD",
    "title": "Haz la llamada de liberación.",
    "image": "/images/generated/jw-qc-inspection-v3.png",
    "columns": [
      "Punto de control",
      "Revisado",
      "Cuestiones",
      "Situación"
    ],
    "rows": [
      [
        "SKU y variante",
        "50",
        "0",
        "Pasado"
      ],
      [
        "Apariencia",
        "50",
        "2",
        "Examen"
      ],
      [
        "Embalaje",
        "50",
        "0",
        "Pasado"
      ]
    ],
    "note": "Interfaz de ejemplo que muestra cómo se pueden organizar los resultados antes de la aprobación."
  },
  "3pl-fulfillment-services": {
    "eyebrow": "EXAMEN INVENTORIO",
    "title": "El inventario permanece visible.",
    "image": "/images/generated/3pl-fulfillment-hero.webp",
    "columns": [
      "SKU",
      "Recibidos",
      "Disponible",
      "Situación"
    ],
    "rows": [
      [
        "JW-BLK- S",
        "500",
        "472",
        "Disponible"
      ],
      [
        "JW-BLK-M",
        "500",
        "86",
        "Bajo stock"
      ],
      [
        "JW-BLK- L",
        "300",
        "0",
        "Reordenado"
      ]
    ],
    "note": "Vista del inventario ilustrativo: el flujo de trabajo final depende del alcance del almacén."
  },
  "pod-fulfillment": {
    "eyebrow": "POD APROVAL GATES",
    "title": "Mantenga el arte, las variantes y la aprobación física conectada.",
    "image": "/images/generated/jw-pod-production-v3.png",
    "columns": [
      "Puerta",
      "Entrada necesaria",
      "Propietario",
      "Situación"
    ],
    "rows": [
      [
        "Obras de arte",
        "Archivo listo para impresión",
        "Marca",
        "Aprobado"
      ],
      [
        "Muestra",
        "Referencia física",
        "JW QC",
        "Examen"
      ],
      [
        "Producción",
        "Cartografía SKU",
        "Taller",
        "Esperando"
      ]
    ],
    "note": "Ejemplo de ruta de aprobación para un producto de impresión a demanda."
  },
  "private-label": {
    "eyebrow": "BRAND SCOPE PLANNER",
    "title": "Elija elementos de marca por impacto, MOQ y tiempo.",
    "image": "/images/brand-showcase/paper-packaging-detail.jpg",
    "columns": [
      "Elemento de marca",
      "Entrada típica",
      "Impacto MOQ",
      "Etapa"
    ],
    "rows": [
      [
        "Inserto impreso",
        "Obras de arte",
        "Baja",
        "Comienzo"
      ],
      [
        "Correo electrónico personalizado",
        "Tamaño + impresión",
        "Mediana",
        "Escala"
      ],
      [
        "Etiquetas del producto",
        "Especie de producto",
        "Variaciones",
        "Marca"
      ]
    ],
    "note": "MOQ y el tiempo se confirman después de la revisión del material y del proveedor."
  },
  "automatic-order-fulfillment": {
    "eyebrow": "ORDER CONTROL LOG",
    "title": "Ordenes listas para moverse.",
    "image": "/images/generated/automatic-fulfillment-hero.webp",
    "columns": [
      "Signal",
      "Situación",
      "Medida",
      "Producto"
    ],
    "rows": [
      [
        "Nuevo orden",
        "Mapped",
        "Liberación",
        "Listo"
      ],
      [
        "Dirección",
        "Falta",
        "Espera.",
        "Examen"
      ],
      [
        "Cambia",
        "Valide",
        "Sync",
        "Seguimiento"
      ]
    ],
    "summary": [
      [
        "Carril rápido",
        "Los pedidos con SKUs mapeados y campos completos se pueden mover sin persiguiendo manualmente."
      ],
      [
        "Mantén el carril",
        "Las órdenes con detalles perdidos permanecen visibles antes de llegar a empacar."
      ],
      [
        "Sincronización",
        "Los pedidos liberados mantienen el seguimiento y el estado de la tienda alineados después de la entrega."
      ]
    ],
    "note": "Registro de control de ejemplo. Los métodos de conexión dependen de la plataforma de la tienda."
  },
  "china-fulfillment-center": {
    "eyebrow": "WAREHOUSE CONTROL ZONES",
    "title": "Mapa cada entrega antes de que navegue.",
    "image": "/images/evidence/warehouse-walkthrough-aisle.jpg",
    "columns": [
      "Zona",
      "Actividad",
      "Control",
      "Producto"
    ],
    "rows": [
      [
        "Recepción",
        "Bienes de registro",
        "Plan de acción",
        "Receipt"
      ],
      [
        "QC",
        "Inspección de lote",
        "Lista de verificación",
        "Liberación"
      ],
      [
        "Despacho",
        "Escaneos finales",
        "Regla de orden",
        "Seguimiento"
      ]
    ],
    "note": "El diseño operativo se configura alrededor de los requisitos de producto y almacén."
  },
  "dropshipping-supplier": {
    "eyebrow": "ORDER-LEVEL CONTROL",
    "title": "Mantenga el contexto del producto, embalaje y envío juntos.",
    "image": "/images/generated/dropshipping-supplier-hero.webp",
    "columns": [
      "Etapa",
      "Acción del equipo",
      "Control",
      "Actualización"
    ],
    "rows": [
      [
        "Fuente",
        "Confirmar proveedor",
        "Resumen del producto",
        "Cita"
      ],
      [
        "Fulfill",
        "Check and pack",
        "Regla de orden",
        "Listo"
      ],
      [
        "Nave",
        "Entrega del transportista",
        "Escaneos finales",
        "Seguimiento"
      ]
    ],
    "summary": [
      [
        "Registro de proveedores",
        "Mantenga la cita, referencia de producto y contexto de contacto en una vista de orden."
      ],
      [
        "Regla de embalaje",
        "Almacene etiquetas, insertos y notas de paquete junto a los detalles SKU."
      ],
      [
        "Entrega del buque",
        "Seguimiento del escaneo final del transportista y actualización de estado juntos."
      ]
    ],
    "note": "Ejemplo de registro operativo para un orden directo al cliente."
  }
};

export const processIntroBySlug = {
  "dropshipping-supplier": {
    "title": "Lo que alineamos antes de que las órdenes diarias vayan en vivo.",
    "lead": "Mantenemos el registro del proveedor, regla de embalaje y entrega de envío en una vista de operación para que el flujo de trabajo se mantenga fácil de seguir.",
    "points": [
      [
        "Registro de proveedores",
        "Cotización, referencia de producto y detalles de contacto permanecer juntos."
      ],
      [
        "Regla de embalaje",
        "Etiquetas, insertos y notas de paquete siguen el SKU."
      ],
      [
        "Entrega del buque",
        "El escaneo final y el estado de seguimiento permanecen visibles."
      ]
    ]
  },
  "automatic-order-fulfillment": {
    "leftEyebrow": "CASO DE AUTOMACIÓN",
    "leftTitle": "Las órdenes normales necesitan un carril.",
    "leftLead": "Shopify tienda de sustitución de hojas de cálculo",
    "title": "Mapee su carril de pedido.",
    "lead": "Díganos dónde comienzan las órdenes, qué datos faltan hoy y cómo el seguimiento debe regresar después del envío.",
    "points": [
      [
        "01",
        "Mapa SKUs a registros de almacén"
      ],
      [
        "02",
        "Dividir razones de excepción temprano"
      ],
      [
        "03",
        "Regresar el seguimiento a través de un desvío"
      ]
    ],
    "noteTitle": "Lo que nos ayuda a mapear el carril",
    "noteLead": "Los campos de tiendas, los registros SKU y las reglas de mantenimiento hacen que la ruta automática sea más fácil de probar antes del lanzamiento."
  }
};

export const dropshipProcessStageLabels = [
  "Auditoría",
  "proveedor",
  "Reglas",
  "Prueba",
  "Vivir"
];

export const fitIntroBySlug = {
  "china-fulfillment-center": {
    "title": "Construido para el stock de entrada y exportación.",
    "lead": "Un flujo de almacén para mercancías, materiales de marca y pedidos de clientes.",
    "tag": "WAREHOUSE FIT",
    "asideTitle": "MEJOR FIT",
    "asideLead": "Cuando cada entrega necesita un lugar, un carril y un propietario claro."
  },
  "product-sourcing": {
    "title": "Construido para decisiones de proveedores.",
    "lead": "Cada pase elimina los proveedores que no pueden coincidir con los requisitos del producto breve, términos comerciales o cumplimiento.",
    "noteTitle": "LO QUE CAMBIA LA CAJA",
    "noteLead": "Utilice un breve producto para que precio, MOQ, notas de muestra y tiempo de conducción permanezcan en la misma base."
  },
  "automatic-order-fulfillment": {
    "title": "Las órdenes limpias toman el carril rápido.",
    "lead": "Las órdenes normales se mueven en una dirección. Las excepciones se separan temprano para que no bloqueen o corrompan el flujo diario.",
    "laneTags": [
      "Mapped",
      "Soldado",
      "Sin embargo"
    ]
  },
  "quality-control-inspection": {
    "title": "Construido para lotes que necesitan pruebas antes de la liberación.",
    "lead": "Utilice este servicio cuando el almacén necesite un pase documentado, revisar o tomar decisión antes de que el inventario se mueva.",
    "tag": "INSPECTION FIT",
    "asideTitle": "MEJOR FIT",
    "asideLead": "Cuando el riesgo de producto necesita un estándar visible y un paso siguiente claro."
  }
};

export const quoteDetailBySlug = {
  "dropshipping-supplier": {
    "checklist": [
      "Enlace de producto, proveedor o referencia de producto",
      "Mercados de destino y flujo de orden diario",
      "Normas de embalaje, marca y envío"
    ],
    "note": {
      "title": "Lo que revisamos primero",
      "text": "Utilizamos su contexto de producto y envío para configurar el alcance de suministro, embalaje y entrega antes de que comience la cotización."
    },
    "titleClass": "sdr-dropshipping-quote-title"
  },
  "3pl-fulfillment-services": {
    "checklist": [
      "SKU sábanas o catálogo de tiendas",
      "Unidades de entrada esperadas y fuentes de proveedores",
      "Reglas de almacenamiento, paquete y embalaje"
    ],
    "note": {
      "title": "Lo que nos ayuda a estimar más rápido",
      "text": "Si ya tiene los conteos SKU, los totales de cartón o los horarios de proveedores, podemos llegar a recibir, almacenar y enviar con más precisión."
    }
  },
  "pod-fulfillment": {
    "checklist": [
      "Blanco producto o referencia del producto",
      "Estado de la obra y área de impresión",
      "Mercados de volumen y destino previstos"
    ],
    "note": {
      "title": "Lo que nos ayuda a alcanzar POD más rápido",
      "text": "Si el arte todavía está en progreso, todavía podemos revisar el producto en blanco, el camino de muestreo, la mezcla variante y los pasos de producción."
    },
    "titleClass": "sdr-pod-quote-title",
    "titleStyle": {
      "width": "max-content",
      "maxWidth": "ninguno",
      "fontSize": "22px",
      "lineHeight": "1.05",
      "whiteSpace": "ahora mismo",
      "textWrap": "ahora mismo",
      "letterSpacing": "-0.02em"
    }
  },
  "private-label": {
    "checklist": [
      "Enlace de producto o muestra",
      "Elementos de marca para lanzar primero",
      "Cantidad y tiempo de lanzamiento previstos"
    ],
    "note": {
      "title": "Lo que nos ayuda a ampliar el plan de marca",
      "text": "Comparta la referencia del producto, los puntos de contacto de marca que más importan y el primer objetivo de producción para que MOQ y las decisiones de empaquetado se mantengan prácticas."
    },
    "titleClass": "sdr-compact-quote-title"
  },
  "product-sourcing": {
    "checklist": [
      "Referencia o especificación del producto",
      "Costo de la unidad de destino y cantidad de pedido",
      "Materiales, embalaje y detalles de necesidad"
    ],
    "note": {
      "title": "Lo que nos ayuda a comparar proveedores más rápido",
      "text": "Un informe claro hace que las hipótesis de cotización, muestreo y envío sean más fáciles de comparar sobre la misma base."
    },
    "titleClass": "sdr-compact-quote-title"
  },
  "automatic-order-fulfillment": {
    "checklist": [
      "Plataforma de tiendas y fuente de pedidos",
      "SKU mapa o catálogo de productos",
      "Sostenga razones y método de seguimiento"
    ],
    "note": {
      "title": "Lo que nos ayuda a mapear el carril",
      "text": "Los campos de tiendas, los registros SKU y las reglas de mantenimiento hacen que la ruta automática sea más fácil de probar antes del lanzamiento."
    },
    "titleClass": "sdr-compact-quote-title"
  },
  "china-fulfillment-center": {
    "checklist": [
      "Proveedores cuentan o fuentes de entrada",
      "SKU cuenta y horario de cartón",
      "Almacenamiento, QC y requisitos de envío"
    ],
    "note": {
      "title": "Lo que nos ayuda a planificar el diseño del almacén",
      "text": "Flujo de entrada, mezcla de productos y expectativas de envío dan forma a cómo se debe organizar la recepción, inspección y almacenamiento."
    },
    "titleClass": "sdr-compact-quote-title"
  },
  "quality-control-inspection": {
    "checklist": [
      "Referencia o especificación del producto",
      "Etapa de inspección y tamaño del lote",
      "Riesgos críticos de defecto y estándar de aceptación"
    ],
    "note": {
      "title": "Lo que nos ayuda a la inspección de alcance más rápido",
      "text": "El mejor plan QC comienza con el estándar del producto, la etapa que desea comprobar y los defectos que más importan a los clientes."
    },
    "titleClass": "sdr-compact-quote-title"
  }
};

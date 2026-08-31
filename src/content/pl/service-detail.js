export const qcOutcomeDetails = [
  {
    "checks": "Zatwierdzona próbka · specyfikacje",
    "output": "Poziom referencyjny inspekcji"
  },
  {
    "checks": "Ilość · wygląd · funkcja",
    "output": "Dziennik wyjątków"
  },
  {
    "checks": "Zdjęcia · notatki · pomiary",
    "output": "Ślad dowodowy"
  },
  {
    "checks": "Przejście · rework · hold",
    "output": "Decyzja o zwolnieniu"
  }
];

export const qcProcessOutputs = [
  "Zasady kontroli",
  "Zatwierdzone odniesienie",
  "Znalezienie rekordu",
  "Sprawozdanie z dowodów",
  "Release call"
];

export const proofContent = {
  "product-sourcing": {
    "eyebrow": "PRZYKŁADOWY KOMPARISON WSPARCIA",
    "title": "Porównaj oferty dostawców.",
    "image": "/images/generated/product-sourcing-hero.webp",
    "columns": [
      "Dostawca",
      "Cena jednostkowa",
      "MOQ",
      "Czas wiodący"
    ],
    "rows": [
      [
        "Dostawca A",
        "$8.40",
        "300",
        "18 dni"
      ],
      [
        "Dostawca B",
        "$7.95",
        "500",
        "24 dni"
      ],
      [
        "Dostawca C",
        "$9.10",
        "100",
        "14 dni"
      ]
    ],
    "note": "Ilustracyjne porównanie. Rzeczywiste notowania zależą od specyfikacji i przeglądu dostawcy."
  },
  "quality-control-inspection": {
    "eyebrow": "PRZYKŁAD QC RECORD",
    "title": "Wykonaj telefon.",
    "image": "/images/generated/jw-qc-inspection-v3.png",
    "columns": [
      "Punkt kontrolny",
      "Kontrola",
      "Kwestie",
      "Stan"
    ],
    "rows": [
      [
        "SKU i wariant",
        "50",
        "0",
        "Przeszedł"
      ],
      [
        "Wygląd",
        "50",
        "2",
        "Przegląd"
      ],
      [
        "Rodzaj opakowania",
        "50",
        "0",
        "Przeszedł"
      ]
    ],
    "note": "Przykład interfejsu pokazującego, w jaki sposób ustalenia mogą być organizowane przed zatwierdzeniem."
  },
  "3pl-fulfillment-services": {
    "eyebrow": "PRZYKŁAD WIDOCZNY",
    "title": "Inwentarz pozostaje widoczny.",
    "image": "/images/generated/3pl-fulfillment-hero.webp",
    "columns": [
      "SKU",
      "Otrzymane",
      "Dostępne",
      "Stan"
    ],
    "rows": [
      [
        "JW- BLK - S",
        "500",
        "472",
        "Dostępne"
      ],
      [
        "JW- BLK- M",
        "500",
        "86",
        "Niskie zapasy"
      ],
      [
        "JW- BLK - L",
        "300",
        "0",
        "Zmiana kolejności"
      ]
    ],
    "note": "Ilustracyjny widok inwentarza - końcowy przepływ pracy zależy od zakresu magazynu."
  },
  "pod-fulfillment": {
    "eyebrow": "STATKI HOMOLOGACYJNE POD",
    "title": "Utrzymuj połączone grafiki, warianty i fizyczne zatwierdzenie.",
    "image": "/images/generated/jw-pod-production-v3.png",
    "columns": [
      "Brama",
      "Wymagane wejście",
      "Właściciel",
      "Stan"
    ],
    "rows": [
      [
        "Sztuka",
        "Plik gotowy do wydruku",
        "Marka",
        "Zatwierdzone"
      ],
      [
        "Próbka",
        "Odniesienie fizyczne",
        "JW QC",
        "Przegląd"
      ],
      [
        "Produkcja",
        "Mapowanie SKU",
        "Warsztaty",
        "Czekam."
      ]
    ],
    "note": "Przykładowa ścieżka zatwierdzania produktu na żądanie."
  },
  "private-label": {
    "eyebrow": "PLANER ZAKRESU BRAND",
    "title": "Wybierz elementy marki po uderzeniu, MOQ i czasie.",
    "image": "/images/brand-showcase/paper-packaging-detail.jpg",
    "columns": [
      "Element marki",
      "Typowe wejście",
      "Uderzenie MOQ",
      "Etap"
    ],
    "rows": [
      [
        "Wydrukowana wkładka",
        "Sztuka",
        "Niski",
        "Start"
      ],
      [
        "Mailer użytkownika",
        "Rozmiar + druk",
        "Średni",
        "Skala"
      ],
      [
        "Etykieta produktu",
        "Specyfikacja produktu",
        "Zmienne",
        "Marka"
      ]
    ],
    "note": "MOQ i czas są potwierdzone po przeglądzie materiału i dostawcy."
  },
  "automatic-order-fulfillment": {
    "eyebrow": "LOG KONTROLI ZAMKNIĘCIA",
    "title": "Rozkazy gotowe.",
    "image": "/images/generated/automatic-fulfillment-hero.webp",
    "columns": [
      "Sygnał",
      "Stan",
      "Działanie",
      "Wyjście"
    ],
    "rows": [
      [
        "Nowy porządek",
        "Odwzorowane",
        "Zwolnienie",
        "Gotowe"
      ],
      [
        "Adres",
        "Brak",
        "Trzymaj.",
        "Przegląd"
      ],
      [
        "Przesyłane",
        "Ważny",
        "Sync",
        "Śledzenie"
      ]
    ],
    "summary": [
      [
        "Szybki pas",
        "Zamówienia z mapowanym SKUs i kompletne pola mogą poruszać się bez ręcznego gonienia."
      ],
      [
        "Utrzymać pas",
        "Zamówienia z brakującymi szczegółami pozostają widoczne zanim dotrą do pakowania."
      ],
      [
        "Synchronizacja",
        "Wydane zlecenia śledzą i przechowują status ustalony po przekazaniu."
      ]
    ],
    "note": "Przykładowy dziennik kontrolny. Metody łączenia zależą od platformy sklepu."
  },
  "china-fulfillment-center": {
    "eyebrow": "STREFY KONTROLI WAREHOUSU",
    "title": "Mapowanie każdego przekazania przed statkiem.",
    "image": "/images/evidence/warehouse-walkthrough-aisle.jpg",
    "columns": [
      "Obszar",
      "Działalność",
      "Kontrola",
      "Wyjście"
    ],
    "rows": [
      [
        "Odbieranie",
        "Rejestr towarów",
        "Plan przybycia",
        "Odbiór"
      ],
      [
        "QC",
        "Grupa kontrolna",
        "Lista kontrolna",
        "Zwolnienie"
      ],
      [
        "Wysyłka",
        "Skan końcowy",
        "Reguła zamówienia",
        "Śledzenie"
      ]
    ],
    "note": "Układ operacyjny jest konfigurowany wokół wymagań produktu i magazynu."
  },
  "dropshipping-supplier": {
    "eyebrow": "KONTROLA POZIOMU ZARZĄDZANIA",
    "title": "Przechowywać produkt, pakowania i transportu kontekst razem.",
    "image": "/images/generated/dropshipping-supplier-hero.webp",
    "columns": [
      "Etap",
      "Działanie zespołu",
      "Kontrola",
      "Aktualizacja"
    ],
    "rows": [
      [
        "Źródło",
        "Potwierdź dostawcę",
        "Brief produktu",
        "Cytat"
      ],
      [
        "Wypełnij",
        "Sprawdzanie i pakowanie",
        "Reguła zamówienia",
        "Gotowe"
      ],
      [
        "Statek",
        "Przekazywanie ładunków",
        "Skan końcowy",
        "Śledzenie"
      ]
    ],
    "summary": [
      [
        "Rejestr dostawców",
        "Należy zachować cytat, odniesienie do produktu i kontekst kontaktowy w jednym rzędzie."
      ],
      [
        "Reguła pakowania",
        "Należy przechowywać etykiety, wkładki i kartki obok szczegółów SKU."
      ],
      [
        "Przekazanie przesyłki",
        "Śledź ostateczny skan przewoźnika i status aktualizacji razem."
      ]
    ],
    "note": "Przykład rekordu operacyjnego dla zamówienia typu direct- to- client."
  }
};

export const processIntroBySlug = {
  "dropshipping-supplier": {
    "title": "To, co ustawiamy przed codziennymi rozkazami.",
    "lead": "Prowadzimy rejestr dostawców, zasady pakowania i przekazywania przesyłki w jednym widoku operacyjnym, tak aby przepływ pracy pozostaje łatwy do przestrzegania.",
    "points": [
      [
        "Rejestr dostawców",
        "Cytat, odniesienie do produktu i dane kontaktowe pozostają razem."
      ],
      [
        "Reguła pakowania",
        "Etykiety, wkładki i notatki paczek są zgodne z SKU."
      ],
      [
        "Przekazanie przesyłki",
        "Ostateczny skan nośnika i status śledzenia pozostają widoczne."
      ]
    ]
  },
  "automatic-order-fulfillment": {
    "leftEyebrow": "SPRAWA AUTOMACJI",
    "leftTitle": "Normalne rozkazy potrzebują pasa.",
    "leftLead": "Sklep Shopify zastępujący arkusze kalkulacyjne",
    "title": "Mapa pasa zamówień.",
    "lead": "Powiedz nam, gdzie zaczynają się zamówienia, czego brakuje dzisiaj i jak śledzenie powinno wrócić po wysłaniu.",
    "points": [
      [
        "01",
        "Mapa SKUs do zapisów magazynowych"
      ],
      [
        "02",
        "Podział przyczyn wyjątku na wczesnym etapie"
      ],
      [
        "03",
        "Powrót śledzenia przez jeden przekazanie"
      ]
    ],
    "noteTitle": "Co pomaga nam mapować pas",
    "noteLead": "Pola przechowywania, rekordy SKU i zasady przechowywania ułatwiają automatyczne testowanie przed startem."
  }
};

export const dropshipProcessStageLabels = [
  "Kontrola",
  "Dostawca",
  "Zasady",
  "Badanie",
  "Żywe"
];

export const fitIntroBySlug = {
  "china-fulfillment-center": {
    "title": "Zbudowany dla przychodzących zapasów i eksportu.",
    "lead": "Jeden magazyn przepływu towarów, materiałów marki i zamówień klientów.",
    "tag": "WAREHOUSE FIT",
    "asideTitle": "BEST FIT",
    "asideLead": "Kiedy każde przekazanie potrzebuje miejsca, pasa i jasnego właściciela."
  },
  "product-sourcing": {
    "title": "Zbudowany dla decyzji dostawcy.",
    "lead": "Każda karta usuwa dostawców, którzy nie mogą dopasować produktu krótki, warunki handlowe lub spełnienie wymagań.",
    "noteTitle": "CO ZMIENIA PYTANIE?",
    "noteLead": "Użyj jednego produktu krótki, więc cena, MOQ, próbki i czas prowadzenia pobytu na tej samej podstawie."
  },
  "automatic-order-fulfillment": {
    "title": "Czyste rozkazy.",
    "lead": "Normalne rozkazy poruszają się w jednym kierunku. Wyjątki dzielą się wcześnie, aby nie blokować lub uszkodzić codziennego przepływu.",
    "laneTags": [
      "Odwzorowane",
      "Held",
      "Synded"
    ]
  },
  "quality-control-inspection": {
    "title": "Zbudowany dla partii, które wymagają dowodu przed zwolnieniem.",
    "lead": "Korzystanie z tej usługi, gdy magazyn potrzebuje udokumentowanej przepustki, przeglądu lub zachować decyzję przed inwentaryzacją przenosi się.",
    "tag": "FIT KONTROLI",
    "asideTitle": "BEST FIT",
    "asideLead": "Gdy ryzyko produktu wymaga widocznego standardu i jasny następny krok."
  }
};

export const quoteDetailBySlug = {
  "dropshipping-supplier": {
    "checklist": [
      "Związek, dostawca lub odniesienie do produktu",
      "Rynki docelowe i dzienny przepływ zleceń",
      "Zasady pakowania, znakowania i wysyłki"
    ],
    "note": {
      "title": "Co najpierw przeglądamy?",
      "text": "Używamy Twojego produktu i kontekstu wysyłki do kształtowania zaopatrzenia, pakowania i dostawy przed rozpoczęciem cytatu."
    },
    "titleClass": "sdr-dropshipping-quote-title"
  },
  "3pl-fulfillment-services": {
    "checklist": [
      "Katalog arkuszy lub magazynów SKU",
      "Oczekiwane jednostki przychodzące i źródła dostaw",
      "Zasady przechowywania, pakowania i pakowania"
    ],
    "note": {
      "title": "Co pomaga nam oszacować szybciej",
      "text": "Jeśli masz już SKU liczby, kartonowe sumy lub harmonogramy dostawcy, możemy zakres odbioru, przechowywania i wysyłki dokładniej."
    }
  },
  "pod-fulfillment": {
    "checklist": [
      "Pusty produkt lub odniesienie do produktu",
      "Status graficzny i obszar druku",
      "Przewidywana wielkość i rynki docelowe"
    ],
    "note": {
      "title": "Co pomaga nam zakresu POD szybciej",
      "text": "Jeśli prace graficzne są nadal w toku, nadal możemy dokonać przeglądu pustego produktu, ścieżki pobierania próbek, kombinacji wariantów i etapów produkcji."
    },
    "titleClass": "sdr-pod-quote-title",
    "titleStyle": {
      "width": "max- content",
      "maxWidth": "brak",
      "fontSize": "22px",
      "lineHeight": "1.05",
      "whiteSpace": "teraz rap",
      "textWrap": "teraz rap",
      "letterSpacing": "- 0, 02em"
    }
  },
  "private-label": {
    "checklist": [
      "Produkt lub ogniwo próbki",
      "Elementy marki do uruchomienia jako pierwsze",
      "Oczekiwana ilość i czas rozpoczęcia eksploatacji"
    ],
    "note": {
      "title": "Co pomaga nam w zakresie planu marki",
      "text": "Podziel się referencją produktu, marką touchpoints, które mają największe znaczenie i pierwszym celem produkcji, więc MOQ i decyzje dotyczące pakowania pozostają praktyczne."
    },
    "titleClass": "sdr-compact-quote-title"
  },
  "product-sourcing": {
    "checklist": [
      "Numer referencyjny lub specyfikacja produktu",
      "Docelowy koszt jednostkowy i ilość zamówienia",
      "Materiały, opakowania i muszą zawierać szczegółowe informacje"
    ],
    "note": {
      "title": "Co pomaga nam porównać dostawców szybciej",
      "text": "Wyraźne zestawienie ułatwi porównywanie założeń dotyczących cytowania, pobierania próbek i wysyłki na tej samej podstawie."
    },
    "titleClass": "sdr-compact-quote-title"
  },
  "automatic-order-fulfillment": {
    "checklist": [
      "Platforma magazynowa i źródło zamówień",
      "Mapa SKU lub katalog produktów",
      "Utrzymać powody i metodę śledzenia"
    ],
    "note": {
      "title": "Co pomaga nam mapować pas",
      "text": "Pola przechowywania, rekordy SKU i zasady przechowywania ułatwiają automatyczne testowanie przed startem."
    },
    "titleClass": "sdr-compact-quote-title"
  },
  "china-fulfillment-center": {
    "checklist": [
      "Liczba dostawców lub źródła przychodzące",
      "Liczba SKU i schemat kartonowy",
      "Wymogi dotyczące przechowywania, QC i wysyłki"
    ],
    "note": {
      "title": "Co pomaga nam zaplanować układ magazynu",
      "text": "Przepływ przychodzący, koszyk produktów i oczekiwania wysyłki kształtują sposób, w jaki należy zorganizować odbiór, inspekcję i składowanie."
    },
    "titleClass": "sdr-compact-quote-title"
  },
  "quality-control-inspection": {
    "checklist": [
      "Numer referencyjny lub specyfikacja produktu",
      "Etap inspekcji i wielkość partii",
      "Krytyczne ryzyko defektów i norma akceptacji"
    ],
    "note": {
      "title": "Co pomaga nam zakres inspekcji szybciej",
      "text": "Najlepszy plan QC rozpoczyna się od standardu produktu, etapu chcesz sprawdzić i wady, które mają największe znaczenie dla klientów."
    },
    "titleClass": "sdr-compact-quote-title"
  }
};

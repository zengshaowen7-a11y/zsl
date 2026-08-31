export const serviceConversionContent = {
  "dropshipping-supplier": {
    "form": {
      "eyebrow": "PRZEGLĄD PROJEKTU DROPSHIPPING",
      "title": "Zaplanuj przepływ statku",
      "lead": "Podziel się produktami, rynkami i rutyną bieżącego zamówienia, abyśmy mogli określić właściwy zakres zaopatrzenia, pakowania i dostawy.",
      "fields": [
        {
          "name": "product_link",
          "label": "Związek produktów lub dostawców",
          "type": "url",
          "placeholder": "Wklej adres URL produktu lub dostawcy",
          "required": true
        },
        {
          "name": "daily_orders",
          "label": "Bieżące dzienne zamówienia",
          "type": "select",
          "options": [
            "Wstępne uruchomienie / testowanie",
            "1- 10 zamówień",
            "11- 50 zamówień",
            "51- 200 zamówień",
            "200 + zamówienia"
          ],
          "required": true
        },
        {
          "name": "destination_markets",
          "label": "Główne rynki docelowe",
          "type": "text",
          "placeholder": "np. Stany Zjednoczone, Wielka Brytania, Niemcy",
          "required": true
        },
        {
          "name": "workflow_challenge",
          "label": "Co należy poprawić?",
          "type": "textarea",
          "placeholder": "Powiedz nam o koordynacji dostawcy, jakości, pakowania, dostawy lub obsługi klienta.",
          "required": true,
          "wide": true
        }
      ]
    },
    "caseStudy": {
      "eyebrow": "PRZEDSTAWICIELNA SPRAWA DROPSHIPPING",
      "title": "Czaty dostawców, jeden przepływ pracy.",
      "profile": "Niezależny sklep z akcesoriami obsługujący klientów z Ameryki Północnej i Europy",
      "challenge": "Aktualizacje produktów, pakowania i wysyłki zostały podzielone na czaty, bez jednego właściciela zamówienia.",
      "plan": [
        "Potwierdź odniesienie do produktu",
        "Ustaw zasady pakowania i wysyłki",
        "Status powrotu i śledzenie"
      ],
      "evidence": [
        "Zatwierdzone odniesienie do produktu",
        "Instrukcja pakowania",
        "Zamówienie i zapis śledzenia"
      ],
      "outcome": "Jeden przepływ pracy pokazuje właściciela, sprawdza i śledzi dla każdego zamówienia."
    }
  },
  "3pl-fulfillment-services": {
    "form": {
      "eyebrow": "PRZEGLĄD ZAKRESU OBSZARÓW WIEJSKICH",
      "title": "Szacuj 3PL",
      "lead": "Udostępnianie SKU liczy, przechowywane jednostki i codzienny przepływ zamówień, dzięki czemu zakres odbioru, przechowywania i wysyłki magazynu można zaplanować dokładnie.",
      "fields": [
        {
          "name": "sku_count",
          "label": "Liczba aktywnych SKUs",
          "type": "select",
          "options": [
            "1- 10 SKUs",
            "11- 50 SKUs",
            "51- 200 SKUs",
            "200 + SKUs"
          ],
          "required": true
        },
        {
          "name": "inventory_units",
          "label": "Przewidywane składowane jednostki",
          "type": "select",
          "options": [
            "Mniej niż 500 jednostek",
            "500- 2000 jednostek",
            "2,001- 10,000 jednostek",
            "10 000 + jednostki"
          ],
          "required": true
        },
        {
          "name": "daily_orders",
          "label": "Średnie dzienne zamówienia",
          "type": "select",
          "options": [
            "Na 10 zamówień",
            "10- 50 zamówień",
            "51- 200 zamówień",
            "200 + zamówienia"
          ],
          "required": true
        },
        {
          "name": "warehouse_requirements",
          "label": "Wymogi dotyczące składu",
          "type": "textarea",
          "placeholder": "Opisać pakiety, wkładki, opakowania, warunki przechowywania lub przychodzące harmonogramy dostawców.",
          "required": true,
          "wide": true
        }
      ]
    },
    "caseStudy": {
      "eyebrow": "PRZEDSTAWICIELNA SPRAWA 3PL",
      "title": "Na co dzień.",
      "profile": "Multi-SKU marka otrzymująca akcje od kilku dostawców",
      "challenge": "Pudełka zbiorcze przybyły w partiach, ale codzienne zamówienia wymagały dokładnego zbierania i pakowania.",
      "plan": [
        "Mapa przychodzących zasobów",
        "Oddzielne materiały marki",
        "Pick, pack and govern"
      ],
      "evidence": [
        "Rejestr rozbieżności przychodzących",
        "Rejestr inwentarza SKU",
        "Instrukcja pakowania"
      ],
      "outcome": "Luzem zamienia się w codzienną rutynę."
    }
  },
  "pod-fulfillment": {
    "form": {
      "eyebrow": "PRZEGLĄD PRODUKTÓW POD",
      "title": "Przegląd zamówienia POD",
      "lead": "Podziel się produktem bazowym, gotowością do prac artystycznych i oczekiwanym wzorem zamówienia, abyśmy mogli ocenić możliwość pobrania próbek, produkcji i spełnienia.",
      "fields": [
        {
          "name": "pod_product",
          "label": "Rodzaj produktu",
          "type": "select",
          "options": [
            "Apparel",
            "Dodatki",
            "Dom i styl życia",
            "Wyroby papierowe",
            "Inne produkty"
          ],
          "required": true
        },
        {
          "name": "artwork_status",
          "label": "Status dzieła",
          "type": "select",
          "options": [
            "Tylko koncepcja",
            "Pliki w toku",
            "Pliki gotowe do wydruku",
            "Zatwierdzona próbka fizyczna"
          ],
          "required": true
        },
        {
          "name": "monthly_orders",
          "label": "Oczekiwane zlecenia miesięczne",
          "type": "select",
          "options": [
            "poniżej 100",
            "100- 500",
            "501- 2000",
            "2,000+"
          ],
          "required": true
        },
        {
          "name": "pod_requirements",
          "label": "Prace artystyczne i wymogi produkcyjne",
          "type": "textarea",
          "placeholder": "Opisz warianty, obszar druku, kolory, opakowania i rynki docelowe.",
          "required": true,
          "wide": true
        }
      ]
    },
    "caseStudy": {
      "eyebrow": "PRZEDSTAWICIELNA SPRAWA POD",
      "title": "Utrzymuj połączone grafiki, warianty produktów i aprobatę produkcji.",
      "profile": "Artystyczny sklep odzieżowy uruchamia wiele wzorów różnych rozmiarach i kolorach",
      "challenge": "Każde zamówienie musiało pasować do prawidłowego pustego produktu, pliku graficznego i miejsca wydruku przed pakowaniem do bezpośredniej dostawy.",
      "plan": [
        "Zatwierdzenie pustego produktu i obszaru druku",
        "Mapa grafiki wersje do użytkownika zwrócone do SKUs",
        "Użyj próbki fizycznej jako odniesienia do produkcji powtarzalnej"
      ],
      "evidence": [
        "Arturacja wstępna",
        "Tabela odwzorowania wariantu",
        "Zatwierdzony zapis próby"
      ],
      "outcome": "Produkcja może być zgodna z udokumentowanym odniesieniem zamiast interpretowania grafiki i wymagań wariantowych ponownie dla każdego zamówienia."
    }
  },
  "private-label": {
    "form": {
      "eyebrow": "PRZEGLĄD ZAKRESU BRAND",
      "title": "Zaplanuj uruchomienie prywatnej etykiety",
      "lead": "Powiedz nam, który produkt i marka dotykowe znaczenie najpierw, więc możemy przeglądać MOQ, pobieranie próbek, pakowania i przechowywania wymagań.",
      "fields": [
        {
          "name": "product_link",
          "label": "Produkt lub ogniwo próbki",
          "type": "url",
          "placeholder": "Wklej adres referencyjny produktu",
          "required": true
        },
        {
          "name": "brand_scope",
          "label": "Podstawowa potrzeba znakowania",
          "type": "select",
          "options": [
            "Etykieta produktu",
            "Wydrukowana wkładka",
            "Mailer użytkownika",
            "Własne pole",
            "Dostosowanie produktu"
          ],
          "required": true
        },
        {
          "name": "launch_quantity",
          "label": "Spodziewana pierwsza ilość",
          "type": "select",
          "options": [
            "Poniżej 100 jednostek",
            "100- 500 jednostek",
            "501- 2000 jednostek",
            "2000 + jednostki"
          ],
          "required": true
        },
        {
          "name": "brand_requirements",
          "label": "Wymogi dotyczące marki",
          "type": "textarea",
          "placeholder": "Opisz materiały, kolory, umiejscowienie logo, cele odbojowe i czas startu.",
          "required": true,
          "wide": true
        }
      ]
    },
    "caseStudy": {
      "eyebrow": "ETYKIETA REPREZENTACYJNA",
      "title": "Faza startu.",
      "profile": "Rosnąca marka akcesoriów pielęgnacyjnych przygotowująca swój pierwszy markowy inwentarz",
      "challenge": "Marka chciała silniejszego odboksu doświadczenia, ale potrzebne do zrównoważenia niestandardowych minimów materiałów, miejsca przechowywania i czasu uruchomienia.",
      "plan": [
        "Pierwszy element opakowania",
        "Zatwierdzenie etykiet przed większymi zobowiązaniami w zakresie pakowania",
        "Podłącz przechowywane materiały do zasady codziennego pakowania"
      ],
      "evidence": [
        "Lista skrócona komponentów marki",
        "Próbka opakowania fizycznego",
        "Przewodnik po opakowaniach na poziomie zamówień"
      ],
      "outcome": "Decyzje marki stają się etapowym planem operacyjnym z widocznymi implikacjami MOQ i magazynem."
    }
  },
  "product-sourcing": {
    "form": {
      "eyebrow": "SOURCING BRIEF",
      "title": "Rozpoczęcie wyszukiwania dostawców",
      "lead": "Daj nam jeden jasny produkt krótki, więc notowania dostawców, próbki i implikacje spełnienia można porównać na tej samej podstawie.",
      "fields": [
        {
          "name": "product_link",
          "label": "Numer referencyjny produktu",
          "type": "url",
          "placeholder": "Wklej link produktu lub specyfikację URL",
          "required": true
        },
        {
          "name": "target_price",
          "label": "Docelowe koszty jednostkowe",
          "type": "text",
          "placeholder": "np. 8- 12 USD",
          "required": false
        },
        {
          "name": "order_quantity",
          "label": "Spodziewana ilość zamówienia",
          "type": "select",
          "options": [
            "Poniżej 100 jednostek",
            "100- 500 jednostek",
            "501- 2000 jednostek",
            "2000 + jednostki"
          ],
          "required": true
        },
        {
          "name": "product_specification",
          "label": "Specyfikacja produktu",
          "type": "textarea",
          "placeholder": "Opisz materiał, rozmiar, warianty, opakowania, rynek docelowy i wszelkie niezbywalne wymagania.",
          "required": true,
          "wide": true
        }
      ]
    },
    "caseStudy": {
      "eyebrow": "PRZEDSTAWICIELNA SPRAWA ZASOBÓW",
      "title": "Cena nie jest cytatem.",
      "profile": "Założyciel zatwierdzający nowy sprzęt fitness do użytku domowego dla sklepu zagranicznego",
      "challenge": "Wstępne notowania opisały różne materiały, opakowania i minimalne ilości, co uniemożliwiło uczciwe porównanie cen.",
      "plan": [
        "Napisz jeden arkusz",
        "Normalizacja terminów cytowania",
        "Przegląd próbek przed produkcją"
      ],
      "evidence": [
        "Porównywalny arkusz notowań",
        "Uwagi do przeglądu próbki",
        "Zatwierdzona specyfikacja"
      ],
      "outcome": "Decyzja dostawcy obejmuje jakość produktu, warunki produkcji, wpływ opakowania i dostawy, a nie tylko cenę fabryczną."
    }
  },
  "automatic-order-fulfillment": {
    "form": {
      "eyebrow": "PRZEGLĄD ZAPEWNIANIA",
      "title": "Map your order lane",
      "lead": "Powiedz nam, gdzie zaczynają się zamówienia, czego brakuje dzisiaj i jak śledzenie powinno wrócić po wysłaniu.",
      "fields": [
        {
          "name": "store_platform",
          "label": "Platforma magazynowa",
          "type": "select",
          "options": [
            "Shopify",
            "WooCommerce",
            "TikTok Shop",
            "Amazon",
            "Etsy",
            "Sklep"
          ],
          "required": true
        },
        {
          "name": "daily_orders",
          "label": "Średnie dzienne zamówienia",
          "type": "select",
          "options": [
            "Na 10 zamówień",
            "10- 50 zamówień",
            "51- 200 zamówień",
            "200 + zamówienia"
          ],
          "required": true
        },
        {
          "name": "current_handoff",
          "label": "Przekazanie bieżącego zamówienia",
          "type": "select",
          "options": [
            "Komunikaty ręczne",
            "Arkusz kalkulacyjny lub CSV",
            "Aplikacja lub złącze",
            "Własny API"
          ],
          "required": true
        },
        {
          "name": "automation_challenge",
          "label": "Główne wyzwanie automatyki",
          "type": "textarea",
          "placeholder": "Opisz potrzeby związane z mapowaniem SKU, walidacją adresów, pakietami, inwentaryzacją, śledzeniem lub obsługą wyłączeń.",
          "required": true,
          "wide": true
        }
      ]
    },
    "caseStudy": {
      "eyebrow": "SPRAWA AUTOMACJI",
      "title": "Normalne rozkazy potrzebują pasa.",
      "profile": "Sklep Shopify zastępujący arkusze kalkulacyjne",
      "challenge": "Większość zamówień może poruszać się szybko, ale SKU niedopasowanie, usunięcie luk i notatek pakietowych potrzebował kontrolowanej pauzy przed wypełnieniem.",
      "plan": [
        "Mapa SKUs do zapisów magazynowych",
        "Podział przyczyn wyjątku na wczesnym etapie",
        "Powrót śledzenia przez jeden przekazanie"
      ],
      "evidence": [
        "Mapa SKU",
        "Lista wyjątków",
        "Wyniki zlecenia"
      ],
      "outcome": "Powtarzalne zamówienia przechodzą czystą drogą, podczas gdy wyjątki zatrzymują się z wystarczającym kontekstem dla decyzji człowieka."
    }
  },
  "china-fulfillment-center": {
    "form": {
      "eyebrow": "PRZEGLĄD CHIŃSKI",
      "title": "Zaplanuj przepływ magazynu",
      "lead": "Podziel się swoim dostawcą, SKU i profilu eksportu, tak otrzymując, QC, przechowywania i wysyłki można mapować przed pierwszą dostawą przychodzącą.",
      "fields": [
        {
          "name": "supplier_count",
          "label": "Aktywni dostawcy",
          "type": "select",
          "options": [
            "1 dostawca",
            "2-5 dostawców",
            "6- 15 dostawców",
            "15 + dostawcy"
          ],
          "required": true
        },
        {
          "name": "sku_count",
          "label": "Numer SKUs",
          "type": "select",
          "options": [
            "1- 10 SKUs",
            "11- 50 SKUs",
            "51- 200 SKUs",
            "200 + SKUs"
          ],
          "required": true
        },
        {
          "name": "destination_markets",
          "label": "Główne rynki docelowe",
          "type": "text",
          "placeholder": "np. USA, UK i UE",
          "required": true
        },
        {
          "name": "center_requirements",
          "label": "Wymogi dotyczące przyjmowania i wypełniania",
          "type": "textarea",
          "placeholder": "Opisz częstotliwość przylotu, przechowywanie, QC, potrzeby Kitting, pakowania i wysyłki.",
          "required": true,
          "wide": true
        }
      ]
    },
    "caseStudy": {
      "eyebrow": "PRZYPADK REPREZENTACJI",
      "title": "Fabryka gotowa do wysyłki.",
      "profile": "Marka konsolidujące produkty, wkładki i opakowania w jednym magazynie Chiny",
      "challenge": "Towary fabryczne, materiały markowe i zamówienia klientów dotarły na różne harmonogramy i nadal musiały opuścić jedną czystą trasę wysyłki.",
      "plan": [
        "Mapa każdej dostawy przychodzącej",
        "Oddzielne pasy QC, składowanie i pakowanie",
        "Udostępnianie gotowych paczek drogą"
      ],
      "evidence": [
        "Mapa przychodząca",
        "Rekord QC",
        "Pas nadawczy"
      ],
      "outcome": "Magazyn zmienia produkcję dostawcy w gotowy do eksportu przepływ zamówień z mniejszą ilością błędów przekazania."
    }
  },
  "quality-control-inspection": {
    "form": {
      "eyebrow": "BRIEF KONTROLI",
      "title": "Zdefiniuj plan wydania",
      "lead": "Powiedz nam, co jest produkowane, kiedy powinno być sprawdzane i jakie porażki będą miały największe znaczenie.",
      "fields": [
        {
          "name": "product_reference",
          "label": "Numer referencyjny produktu",
          "type": "url",
          "placeholder": "Wklej URL produktu lub specyfikacji",
          "required": true
        },
        {
          "name": "inspection_stage",
          "label": "Etap inspekcji",
          "type": "select",
          "options": [
            "Produkcja wstępna",
            "Podczas produkcji",
            "Przed wysyłką",
            "Kontrola składu przychodzącego",
            "Kontrola ostatecznego zamówienia"
          ],
          "required": true
        },
        {
          "name": "batch_quantity",
          "label": "Ilość partii",
          "type": "text",
          "placeholder": "np. 1500 jednostek",
          "required": true
        },
        {
          "name": "quality_risks",
          "label": "Ważne zagrożenia jakości",
          "type": "textarea",
          "placeholder": "Opis wymiarów, wyglądu, funkcji, oznakowania, pakowania lub znanych wad.",
          "required": true,
          "wide": true
        }
      ]
    },
    "caseStudy": {
      "eyebrow": "REPREZENTACYJNA SPRAWA KONTROLI",
      "title": "Ułatw odczytanie decyzji o wydaniu.",
      "profile": "Akcesoria do zatwierdzenia przed wysyłką",
      "challenge": "Sama kontrola wzrokowa nie obejmowałaby ryzyka dopasowania, etykietowania, ilości i pakowania, które mogłyby stworzyć zwrot z inwestycji.",
      "plan": [
        "Przetłumacz zatwierdzoną specyfikację do punktów kontrolnych",
        "Rejestrowanie wyników i wydawanie zdjęć",
        "Oddzielny przyjęty, przepracowany i przechowywany inwentarz"
      ],
      "evidence": [
        "Lista kontrolna inspekcji",
        "Znalezienie i zapis zdjęć",
        "Decyzja o zwolnieniu"
      ],
      "outcome": "Zespół ma wystarczająco dowodów, aby zatwierdzić, przepracować lub utrzymać zmieniony inwentarz przed wypełnieniem."
    }
  }
};

export const serviceComparison = [
  [
    "dropshipping- dostawca",
    "Dostawca Dropshipping",
    "Sklepy potrzebują jednego partnera za każdym bezpośrednim zamówieniem klienta",
    "Elastyczna / opcjonalna",
    "Dostępne",
    "Przepływ pracy na poziomie zlecenia"
  ],
  [
    "3pl-fulfillment-services",
    "Spełnienie 3PL",
    "Znaki posiadania zapasów i wysyłki powtarzają zamówienia z wielu SKUs",
    "Wymóg podstawowy",
    "Dostępne",
    "Odbieranie + plan składowania"
  ],
  [
    "pod- spełnienie",
    "Spełnienie POD",
    "Sklepy produkujące niestandardowe przedmioty po złożeniu zamówienia",
    "Puste zapasy lub na żądanie",
    "Wbudowany w produkt",
    "Sztuka + próbka"
  ],
  [
    "etykieta prywatna",
    "Etykieta prywatna",
    "Znaki dodające etykiety, wkładki, opakowania lub dostosowanie produktu",
    "Składowane materiały markowe",
    "Główny nacisk",
    "Produkt + krótka marka"
  ],
  [
    "product- sourcing",
    "Zażywanie produktów",
    "Zespoły porównujące dostawców, specyfikacje, próbki i warunki handlowe",
    "Nie wymaga się rozpoczęcia",
    "Planowane w razie potrzeby",
    "Specyfikacja produktu"
  ],
  [
    "automatic-order-fulfillment",
    "Automatyzacja zamówień",
    "Rosnące sklepy zastępujące ręczne zamówienia i przekazy śledzenia",
    "Połączone z magazynem",
    "W oparciu o zasady",
    "Platforma + mapa SKU"
  ],
  [
    "china-fulfillment-center",
    "Centrum Wypełniania",
    "Znaki konsolidujące towary fabryczne przed wysyłką zamówienia globalnego",
    "Wymóg podstawowy",
    "Dostępne",
    "Plan przybycia + SKU"
  ],
  [
    "quality-control-inspection",
    "Kontrola jakości",
    "Zespoły potrzebujące dowodów przed zatwierdzeniem lub uwolnieniem produktów",
    "Poziom partii lub zamówienia",
    "Kontrola pod kątem zakresu",
    "Specyfikacja + ryzyko"
  ]
];

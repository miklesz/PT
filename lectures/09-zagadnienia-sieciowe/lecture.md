<!-- .slide: class="title-slide" -->

# Podstawowe zagadnienia sieciowe

---

## Plan wykładu

- definicja i funkcje sieci komputerowej,
- rodzaje sieci,
- topologie fizyczne i logiczne,
- topologie: punkt-punkt, magistrala, pierścień, gwiazda, hierarchia i siatka.

---

## Sieć komputerowa

Sieć komputerowa to zbiór połączonych urządzeń, które wymieniają dane i współdzielą zasoby według ustalonych protokołów.

Możliwa jest między innymi komunikacja użytkowników, dostęp do usług, współdzielenie plików, urządzeń i połączenia z Internetem.

---

## Rodzaje sieci

<div class="packet"><span>PAN<br>osobista</span><span>LAN<br>lokalna</span><span>MAN<br>miejska</span><span>WAN<br>rozległa</span></div>

Podział zależy przede wszystkim od zasięgu i sposobu zarządzania infrastrukturą.

---

<!-- .slide: class="section-slide" -->

# Topologie

---

## Topologia punkt-punkt

<div class="packet"><span>Węzeł A</span><span>dedykowane łącze</span><span>Węzeł B</span></div>

- **Permanent/dedicated:** łącze stale zestawione.
- **Switched:** połączenie zestawiane na żądanie przez sieć pośrednią.

---

## Topologia magistrali

<div class="packet"><span>A</span><span>Wspólny kabel</span><span>B</span><span>Wspólny kabel</span><span>C</span></div>

- Wszystkie stacje współdzielą medium.
- Prosta i historycznie tania, ale podatna na kolizje oraz awarię wspólnego segmentu.
- Klasyczny Ethernet koncentryczny był przykładem takiej topologii.

---

## Materiał: magistrala

<video controls preload="metadata"><source src="media/slide-021-media1.mp4" type="video/mp4"></video>

---

## Topologia pierścienia

<div class="packet"><span>A → B</span><span>B → C</span><span>C → D</span><span>D → A</span></div>

- Dane przechodzą kolejno przez węzły.
- W pierścieniu podwójnym drugi kierunek może zapewniać redundancję.
- Przykładem historycznym był Token Ring.

---

## Materiał: pierścień

<video controls preload="metadata"><source src="media/slide-024-media2.mp4" type="video/mp4"></video>

---

## Topologia gwiazdy

- Wszystkie urządzenia łączą się z centralnym punktem.
- Awaria pojedynczego kabla zwykle odcina tylko jedno urządzenie.
- Awaria punktu centralnego wpływa na całą sieć.

<div class="packet"><span>Host A</span><span>Przełącznik</span><span>Host B</span><span>Host C</span></div>

---

## Koncentrator a przełącznik

<div class="columns"><div>

**Koncentrator (hub)**

Powiela sygnał do wszystkich portów; medium pozostaje współdzielone.

</div><div>

**Przełącznik (switch)**

Kieruje ramkę do właściwego portu; umożliwia równoległą komunikację.

</div></div>

---

## Materiał: gwiazda z koncentratorem

<video controls preload="metadata"><source src="media/slide-030-media3.mp4" type="video/mp4"></video>

---

## Materiał: gwiazda z przełącznikiem

<video controls preload="metadata"><source src="media/slide-031-media4.mp4" type="video/mp4"></video>

---

## Materiał: gwiazda z MSAU

<video controls preload="metadata"><source src="media/slide-032-media5.mp4" type="video/mp4"></video>

---

## Topologie hierarchiczne

- Łączą mniejsze topologie w większą strukturę.
- Przykłady: pierścień-gwiazda, gwiazda-magistrala, magistrala-drzewo.
- Ułatwiają skalowanie, segmentację i zarządzanie dużą siecią.

---

## Topologia siatki

<div class="columns"><div>

**Częściowa siatka**

Tylko najważniejsze węzły mają wiele połączeń. To kompromis między kosztem i redundancją.

</div><div>

**Pełna siatka**

Każdy węzeł łączy się z każdym. Zapewnia wysoką odporność, ale liczba łączy rośnie bardzo szybko.

</div></div>

---

## Wybór topologii

Zależy od:

- wymaganej niezawodności,
- liczby urządzeń,
- kosztu okablowania i sprzętu,
- łatwości rozbudowy,
- charakteru ruchu oraz wymagań bezpieczeństwa.

---

## Podsumowanie

- Topologia opisuje organizację połączeń w sieci.
- Gwiazda ze switchem dominuje we współczesnych LAN.
- Hierarchie i siatki zapewniają skalowalność lub redundancję, zależnie od potrzeb.

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

<div class="network-scale">
  <div class="pan"><strong>PAN</strong>osobista<br><small>telefon, zegarek</small></div>
  <div class="lan"><strong>LAN / WLAN</strong>lokalna<br><small>dom, biuro, budynek</small></div>
  <div class="man"><strong>MAN</strong>miejska<br><small>kampus, miasto</small></div>
  <div class="wan"><strong>WAN</strong>rozległa<br><small>kraje, kontynenty</small></div>
</div>

Podział zależy przede wszystkim od zasięgu i sposobu zarządzania infrastrukturą.

---

<!-- .slide: class="section-slide" -->

# Topologie

---

## Jak czytać topologie?

Topologia opisuje układ połączeń między urządzeniami, a nie tylko ich położenie na rysunku.

![Przykładowe topologie sieci](media/image3.png)

---

## Topologia punkt-punkt

<div class="p2p-diagram">
  <div class="p2p-node">Węzeł A</div><div class="p2p-link"><span>dedykowane łącze</span></div><div class="p2p-node">Węzeł B</div>
</div>

<div class="columns"><div>

**Łącze stałe**

Zestawione na stałe między tymi samymi dwoma punktami.

</div><div>

**Łącze komutowane**

Tworzone na żądanie przez sieć pośrednią, a po zakończeniu zwalniane.

</div></div>

---

## Topologia liniowa

Węzły są połączone kolejno; urządzenia pośrednie przekazują ruch dalej.

![Topologia liniowa](media/image5.png)

Awaria przewodu albo urządzenia pośredniego może odłączyć dalszą część łańcucha.

---

## Topologia magistrali

<div class="bus-diagram">
  <div class="bus-title">Wspólny kabel</div><div class="bus-line"></div>
  <div class="bus-end left-end">T</div><div class="bus-end right-end">T</div>
  <div class="bus-station station-one">A</div><div class="bus-station station-two">B</div><div class="bus-station station-three">C</div>
</div>

- Wszystkie stacje współdzielą medium.
- Prosta i historycznie tania, ale podatna na kolizje oraz awarię wspólnego segmentu.
- Klasyczny Ethernet koncentryczny był przykładem takiej topologii.

---

## Materiał: magistrala

<video controls preload="metadata" poster="media/image7.png"><source src="media/slide-021-media1.mp4" type="video/mp4"></video>

---

## Topologia pierścienia

<div class="ring-diagram">
  <div class="ring-track"></div><div class="ring-direction">↻<small>kierunek obiegu danych</small></div>
  <div class="ring-node node-a">A</div><div class="ring-node node-b">B</div><div class="ring-node node-c">C</div><div class="ring-node node-d">D</div>
</div>

- Dane przechodzą kolejno przez węzły.
- W pierścieniu podwójnym drugi kierunek może zapewniać redundancję.
- Przykładem historycznym był Token Ring.

---

## Materiał: pierścień

<video controls preload="metadata" poster="media/image9.png"><source src="media/slide-024-media2.mp4" type="video/mp4"></video>

---

## Pierścień podwójny

Dwa niezależne kierunki transmisji mogą utrzymać łączność po przerwaniu jednego z odcinków.

![Topologia pierścienia podwójnego](media/image10.png)

---

## Topologia gwiazdy

- Wszystkie urządzenia łączą się z centralnym punktem.
- Awaria pojedynczego kabla zwykle odcina tylko jedno urządzenie.
- Awaria punktu centralnego wpływa na całą sieć.

<div class="star-diagram" role="img" aria-label="Topologia gwiazdy: trzy hosty są połączone osobnymi łączami z centralnym przełącznikiem.">
  <div class="star-link star-link-a"></div><div class="star-link star-link-b"></div><div class="star-link star-link-c"></div>
  <div class="star-host star-host-a">Host A</div><div class="star-host star-host-b">Host B</div><div class="star-host star-host-c">Host C</div>
  <div class="star-switch"><strong>Przełącznik</strong><small>punkt centralny</small></div>
  <p>Osobne łącze dla każdego hosta</p>
</div>

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

<video controls preload="metadata" poster="media/image12.png"><source src="media/slide-030-media3.mp4" type="video/mp4"></video>

---

## Materiał: gwiazda z przełącznikiem

<video controls preload="metadata" poster="media/image12.png"><source src="media/slide-031-media4.mp4" type="video/mp4"></video>

---

## Materiał: gwiazda z MSAU

<video controls preload="metadata" poster="media/image13.png"><source src="media/slide-032-media5.mp4" type="video/mp4"></video>

---

## Topologie hierarchiczne

- Łączą mniejsze topologie w większą strukturę.
- Przykłady: pierścień-gwiazda, gwiazda-magistrala, magistrala-drzewo.
- Ułatwiają skalowanie, segmentację i zarządzanie dużą siecią.

<div class="media-gallery">
  <img src="media/image14.png" alt="Topologia hierarchiczna">
  <img src="media/image15.png" alt="Topologia pierścień-gwiazda">
  <img src="media/image16.png" alt="Topologia gwiazda-magistrala">
  <img src="media/image17.png" alt="Topologia magistrala-drzewo">
</div>

---

## Topologia siatki

<div class="columns"><div>

**Częściowa siatka**

Tylko najważniejsze węzły mają wiele połączeń. To kompromis między kosztem i redundancją.

</div><div>

**Pełna siatka**

Każdy węzeł łączy się z każdym. Zapewnia wysoką odporność, ale liczba łączy rośnie bardzo szybko.

</div></div>

<div class="media-gallery">
  <img src="media/image18.png" alt="Częściowa topologia siatki">
  <img src="media/image19.png" alt="Pełna topologia siatki">
</div>

---

## Ile łączy ma pełna siatka?

<div class="mesh-formula">
  <div class="formula">c = <span class="mesh-fraction"><i>n² − n</i><small>2</small></span></div>
  <div class="formula-legend"><strong>n</strong> liczba węzłów <strong>c</strong> liczba łączy</div>
</div>

Każde łącze łączy parę różnych węzłów, a tę samą parę liczymy tylko raz.

<div class="mesh-example"><strong>Przykład: 5 węzłów</strong><span>c = 5 × 4 / 2 = <b>10 łączy</b></span></div>

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

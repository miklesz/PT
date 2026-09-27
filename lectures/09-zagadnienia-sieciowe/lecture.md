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

## Mapa połączeń Internetu z 2015 roku

<div class="media-gallery single-visual"><img src="media/image2.png" alt="Wizualizacja części połączeń Internetu według danych z 11 lipca 2015 roku"></div>

<p class="credits">Historyczna wizualizacja projektu Opte. Linie łączą węzły sieci; nie jest to aktualna mapa ani mapa geograficzna.</p>

---

## Organizacja sieci: serwer i równorzędni

W sieci z **serwerem** wybrane urządzenie udostępnia usługi lub dane pozostałym, np. pliki, drukarkę albo bazę danych. Zarządzanie można centralizować.

W sieci **peer-to-peer** komputery mogą bezpośrednio udostępniać zasoby sobie nawzajem. Rola urządzenia zależy od usługi; nie musi istnieć jeden centralny serwer.

---

## Rodzaje sieci

<div class="network-scale">
  <div class="pan"><strong>PAN</strong>osobista<br><small>telefon, zegarek</small></div>
  <div class="lan"><strong>LAN / WLAN</strong>lokalna<br><small>dom, biuro, budynek</small></div>
  <div class="man"><strong>MAN</strong>miejska<br><small>kampus, miasto</small></div>
  <div class="wan"><strong>WAN</strong>rozległa<br><small>kraje, kontynenty</small></div>
</div>

<p class="credits">PAN to sieć osobista (*Personal Area Network*), LAN/WLAN — lokalna (przewodowa lub bezprzewodowa), MAN — miejska, a WAN — rozległa.</p>

---

<!-- .slide: class="section-slide" -->

# Topologie

---

## Jak czytać topologie?

Topologia opisuje układ połączeń między urządzeniami, a nie tylko ich położenie na rysunku.

![Przykładowe topologie sieci](media/image3.png)

---

## Topologia punkt-punkt

Najprostsza topologia: jedno bezpośrednie łącze między dwoma punktami.

<div class="p2p-diagram">
  <div class="p2p-node">Węzeł A</div><div class="p2p-link"><span>dedykowane łącze</span></div><div class="p2p-node">Węzeł B</div>
</div>

<img src="media/image4.png" alt="Schemat topologii punkt-punkt: dwa telefony połączone bezpośrednio przewodem" height="265">

---

## Łącze stałe a komutowane

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

## Magistrala: zalety i ograniczenia

**Zalety:** krótki wspólny kabel, brak urządzenia centralnego, niski koszt historycznych instalacji i możliwość wyłączenia pojedynczej stacji bez przerwania kabla.

**Ograniczenia:** tylko jedna transmisja w danym czasie, kolizje, trudne wykrywanie usterek, słaba skalowalność i bezpieczeństwo. Awaria głównego kabla odcina cały segment.

---

## Topologia pierścienia

<div class="ring-diagram">
  <div class="ring-track"></div><div class="ring-direction">↻<small>kierunek obiegu danych</small></div>
  <div class="ring-node node-a">A</div><div class="ring-node node-b">B</div><div class="ring-node node-c">C</div><div class="ring-node node-d">D</div>
</div>

- Dane przechodzą kolejno przez węzły.
- W pierścieniu podwójnym drugi kierunek może zapewniać redundancję.
- Przykładem historycznym był Token Ring, w którym prawo nadawania przekazuje się jako znacznik (*token*).

---

## Materiał: pierścień

<video controls preload="metadata" poster="media/image9.png"><source src="media/slide-024-media2.mp4" type="video/mp4"></video>

---

## Pierścień: zalety i ograniczenia

Pierścień może korzystać ze stosunkowo krótkiego okablowania. W prostym wariancie awaria stacji lub odcinka może jednak zatrzymać transmisję, a diagnostyka, dołączanie stacji i rekonfiguracja bywają pracochłonne.

Warianty z mechanizmami obejścia awarii lub drugim pierścieniem ograniczają te problemy; zależy to od konkretnej technologii.

---

## Pierścień podwójny

Dwa niezależne kierunki transmisji mogą utrzymać łączność po przerwaniu jednego z odcinków.

<div class="double-ring-diagram" role="img" aria-label="Podwójna topologia pierścienia z węzłami A, B, C i D oraz dwoma przeciwnymi kierunkami obiegu danych.">
  <div class="double-ring-track outer"></div><div class="double-ring-track inner"></div>
  <div class="double-ring-direction clockwise">↻<small>pierścień 1</small></div><div class="double-ring-direction counterclockwise">↺<small>pierścień 2</small></div>
  <div class="double-ring-node node-a">A</div><div class="double-ring-node node-b">B</div><div class="double-ring-node node-c">C</div><div class="double-ring-node node-d">D</div>
</div>

<p class="double-ring-note">Drugi pierścień zapewnia alternatywną drogę transmisji.</p>

---

## Pierścień podwójny: kompromis

Druga droga może utrzymać działanie po przerwaniu pojedynczego odcinka i pozwala na wysoką przepustowość. Ceną są bardziej złożone urządzenia, diagnostyka i procedury rekonfiguracji.

---

## Topologia gwiazdy

- Wszystkie urządzenia łączą się z centralnym punktem.
- Awaria pojedynczego kabla zwykle odcina tylko jedno urządzenie.
- Awaria punktu centralnego wpływa na całą sieć.

<div class="star-diagram" role="img" aria-label="Topologia gwiazdy: trzy hosty są połączone osobnymi łączami z centralnym przełącznikiem.">
  <div class="star-link star-link-a"></div><div class="star-link star-link-b"></div><div class="star-link star-link-c"></div>
  <div class="star-host star-host-a">Host A</div><div class="star-host star-host-b">Host B</div><div class="star-host star-host-c">Host C</div>
  <div class="star-switch"><strong>Przełącznik</strong><small>punkt centralny</small></div>
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

## Gwiazda: zalety i ograniczenia

Oddzielne łącza ułatwiają rozbudowę, konserwację i wskazanie uszkodzonego kabla. Awaria jednego komputera zwykle nie zatrzymuje pozostałych.

Potrzeba więcej kabli i portów niż w magistrali. Awaria centralnego koncentratora lub przełącznika odcina podłączone do niego stacje.

---

## Materiał: gwiazda z koncentratorem

<video controls preload="metadata" poster="media/image12.png"><source src="media/slide-030-media3.mp4" type="video/mp4"></video>

---

## Materiał: gwiazda z przełącznikiem

<video controls preload="metadata" poster="media/image12.png"><source src="media/slide-031-media4.mp4" type="video/mp4"></video>

---

## Materiał: gwiazda z MSAU

MSAU (*Multistation Access Unit*) to koncentrator używany historycznie w sieciach Token Ring.

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

## Topologie mieszane: jak są połączone?

- **Pierścień-gwiazda:** stacje dołączają do punktów centralnych, a te tworzą pierścień. Odłączenie pojedynczej stacji nie musi przerwać obiegu danych.
- **Gwiazda-magistrala:** grupy stacji tworzą gwiazdy, których punkty centralne łączy wspólny odcinek magistrali.
- **Magistrala-drzewo:** połączenia rozgałęziają się hierarchicznie; uszkodzenie odcinka wyższego poziomu może odciąć całe poddrzewo.

Te nazwy opisują fizyczny układ połączeń; odporność na awarie zależy jeszcze od urządzeń i sposobu przekazywania ruchu.

---

## Topologia hierarchiczna: kompromis

Rozgałęzienia pozwalają rozbudowywać sieć i porządkować jej segmenty. Awaria pojedynczej stacji lub lokalnego kabla nie musi wpływać na całość.

Sieć wymaga wielu połączeń, a elementy wyższego poziomu stają się punktami krytycznymi. Znalezienie usterki w dużej strukturze może być trudne bez dokumentacji i monitoringu.

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

## Siatka: zalety i ograniczenia

Połączenia nadmiarowe dają alternatywną drogę po awarii węzła albo łącza. Jest to przydatne również w niektórych sieciach bezprzewodowych.

Pełna siatka wymaga jednak wielu portów i połączeń, a jej budowa i utrzymanie są kosztowne. Dlatego często stosuje się siatkę częściową.

---

## Ile łączy ma pełna siatka?

<div class="mesh-formula">
  <div class="formula">c = <span class="mesh-fraction"><i>n² − n</i><small>2</small></span></div>
  <div class="formula-legend"><strong>n</strong> liczba węzłów <strong>c</strong> liczba łączy</div>
</div>

Każde łącze łączy parę różnych węzłów, a tę samą parę liczymy tylko raz.

<div class="code-lab mesh-lab">
  <label>Liczba węzłów <i>n</i><input class="mesh-nodes" type="number" min="2" max="1000" step="1" value="5" inputmode="numeric"></label>
  <div class="lab-result mesh-result"></div>
</div>

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

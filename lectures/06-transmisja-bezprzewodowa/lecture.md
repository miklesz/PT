<!-- .slide: class="title-slide" -->

# Media transmisyjne: transmisja bezprzewodowa

Mikołaj Leszczuk

---

## Plan wykładu

- sieci bezprzewodowe i ich infrastruktura,
- PAN, WLAN, MAN oraz IoT,
- Wi-Fi i rodzina IEEE 802.11,
- WiMAX, LoRa i przyszłość standardów.

---

<!-- .slide: class="section-slide" -->

# Sieci bezprzewodowe

---

## Definicja

Bezprzewodowa sieć komputerowa przesyła dane przez fale radiowe lub inne medium bezprzewodowe, zamiast przez przewody między wszystkimi węzłami.

---

## WLAN

WLAN (*Wireless Local Area Network*) to bezprzewodowa sieć lokalna. Najczęściej buduje się ją w technologii Wi-Fi, opartej na standardach IEEE 802.11.

---

## Przykładowa infrastruktura WLAN

![Schemat sieci bezprzewodowej z punktem dostępowym](media/image1.png)

---

## Urządzenia infrastruktury

<div class="columns"><div>

- karta sieciowa lub moduł radiowy,
- punkt dostępowy albo router,
- antena wewnętrzna lub zewnętrzna,
- kontroler zarządzający punktami dostępowymi w większej sieci,
- łącze przewodowe do sieci szkieletowej.

</div><div>

<img src="media/image2.jpg" alt="Router Wi-Fi" height="360">

</div></div>

---

## Karty, anteny i osprzęt

Karta radiowa może być wbudowana w urządzenie albo podłączona zewnętrznie, np. przez USB. Starsze komputery wykorzystywały także karty PCI i PCMCIA.

Punkt dostępowy współpracuje z anteną, a instalacja może wymagać kabli antenowych, złączy, przejściówek lub rozdzielaczy. Te elementy nie są medium między stacjami, ale nadal należą do infrastruktury sieci bezprzewodowej.

---

## Materiał wideo: czym jest WLAN?

<p class="video-intro">Na przykładzie laptopa i domowego rutera film pokazuje, jak ruter tworzy bezprzewodową sieć lokalną i może przez nią udostępniać Internet.</p>

<video controls preload="metadata"><source src="media/videos/DAR52r0lEtw.mp4" type="video/mp4"></video>

---

## Zalety i ograniczenia

<div class="columns"><div>

**Zalety**

- mobilność,
- szybkie wdrożenie,
- łatwa rozbudowa,
- dostęp w miejscach trudnych dla kabli.

</div><div>

**Ograniczenia**

- współdzielone widmo,
- zakłócenia i tłumienie,
- zasięg zależny od otoczenia,
- konieczność właściwego zabezpieczenia.

</div></div>

---

## Typy sieci

<div class="network-scale">
  <div class="pan"><strong>PAN</strong><br>osobista</div>
  <div class="lan"><strong>LAN / WLAN</strong><br>lokalna</div>
  <div class="man"><strong>MAN</strong><br>miejska</div>
  <div class="wan"><strong>WAN</strong><br>rozległa</div>
</div>

<p class="credits">PAN: <em>Personal Area Network</em>; LAN: <em>Local Area Network</em>; WLAN: <em>Wireless LAN</em>; MAN: <em>Metropolitan Area Network</em>; WAN: <em>Wide Area Network</em>.</p>

---

## Zakresy sieci - szersza perspektywa

![Skale od sieci nanoskopowej do WAN](media/image5.png)

---

## Materiał wideo: rodzaje sieci

<p class="video-intro">Animacja porównuje zasięg sieci od urządzeń osobistych po sieci rozległe. Pokazuje też sieć kampusową i sieć pamięci masowej.</p>

<video controls preload="metadata"><source src="media/videos/4_zSIXb7tLQ.mp4" type="video/mp4"></video>

---

## PAN i Internet rzeczy (IoT)

IoT (*Internet of Things*) to sieć połączonych czujników i urządzeń wykonujących zadania bez stałej obsługi człowieka.

- **Bluetooth:** połączenia osobiste, urządzenia peryferyjne i audio.
- **Zigbee:** protokół dla energooszczędnych czujników i automatyki, oparty na radiu IEEE 802.15.4. IEEE to *Institute of Electrical and Electronics Engineers*.
- **Z-Wave:** domowa automatyka.
- **Thread:** łączy urządzenia IoT z użyciem IPv6 (*Internet Protocol version 6*).

---

## Moduły małej mocy dla IoT

<div class="columns"><div>

Niewielki moduł radiowy może być częścią czujnika, sterownika lub urządzenia noszonego. W takich zastosowaniach ważniejsze od wysokiej przepływności bywają zasięg i zużycie energii.

</div><div>

<img src="media/image8.png" alt="Mały moduł radiowy" height="340">

</div></div>

---

## Sieć czujników noszonych na ciele

<p class="video-intro">Na przykładzie czujników noszonych na ciele film pokazuje, jak dane trafiają do urządzenia zbierającego, np. w monitorowaniu zdrowia.</p>

<video controls preload="metadata"><source src="media/videos/iw9pQeFhN74.mp4" type="video/mp4"></video>

---

## Wi-Fi a IEEE 802.15.4

<p class="video-intro">Film porównuje Wi-Fi z radiem IEEE 802.15.4. Zigbee i Thread używają tego samego standardu radiowego, ale mają różne stosy sieciowe. Podane 54 Mb/s nie jest limitem Wi-Fi.</p>

<video controls preload="metadata"><source src="media/videos/buV11ZPJ7MQ.mp4" type="video/mp4"></video>

---

## Bluetooth i Z-Wave

<div class="media-gallery">
  <img src="media/image10.png" alt="Logo Bluetooth">
  <img src="media/image11.jpg" alt="Logo Z-Wave">
</div>

---

## Osobiste sieci radiowe: kontekst historyczny

- Wczesny Bluetooth pracował w paśmie 2,4 GHz i oferował do około 723 kb/s w jednym kierunku. Nowsze odmiany mają inne szybkości i zastosowania.
- Z-Wave rozwijał automatykę domową jako sieć o małej mocy, z możliwością przekazywania komunikatów między urządzeniami.
- Thread wykorzystuje radio IEEE 802.15.4; uwierzytelnianie i szyfrowanie są częścią jego projektu.

---

## Materiał wideo: Z-Wave

<p class="video-intro">Film pokazuje zastosowania Z-Wave w domu, m.in. do obsługi zamków, oświetlenia i termostatów.</p>

<video controls preload="metadata"><source src="media/videos/vhzLYmiwNTk.mp4" type="video/mp4"></video>

---

## Materiał wideo: Thread

<p class="video-intro">Film pokazuje, jak urządzenia Thread tworzą domową sieć kratową i przekazują dane przez inne węzły.</p>

<video controls preload="metadata"><source src="media/videos/KElUxj12IIY.mp4" type="video/mp4"></video>

---

<!-- .slide: class="section-slide" -->

# IEEE 802.11 i Wi-Fi

---

## Pasma Wi-Fi

<div class="columns"><div>

**2,4 GHz**

Dobry zasięg, duże zatłoczenie, szeroka zgodność urządzeń.

</div><div>

**5 GHz i 6 GHz**

Więcej kanałów i większa przepływność; zwykle krótszy zasięg.

</div></div>

**Wi-Fi 6E** to Wi-Fi 6 z obsługą pasma 6 GHz. W UE dla radiowych sieci lokalnych zharmonizowano zakres [5945-6425 MHz](https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX%3A02021D1067-20250522).

---

## Kanały w paśmie 2,4 GHz

Kanały 20 MHz częściowo się nakładają. Typowy zestaw bez nakładania: **1, 6, 11**.

<p class="small">Dostępność kanałów zależy od przepisów danego kraju.</p>

<img src="media/image17.png" alt="Nakładanie się kanałów Wi-Fi 2,4 GHz" style="max-height:39vh">

---

## Sprzęt Wi-Fi - dawniej i dziś

<div class="media-gallery">
  <img src="media/image16.png" alt="Przenośne urządzenie Wi-Fi">
  <img src="media/image20.jpg" alt="Karta sieciowa WLAN">
  <img src="media/image15.jpg" alt="Współczesny router Wi-Fi">
</div>

---
## Rozwój Wi-Fi

<div class="wifi-speed-chart">
  <div style="--bar-height: 1.2em; --bar-color: #2b6cb0; --bar-border: #1d4f82"><span class="rate">2 Mb/s</span><span class="bar"></span><strong>802.11</strong><span class="year">1997</span></div>
  <div style="--bar-height: 2.3em; --bar-color: #007c91; --bar-border: #005868"><span class="rate">11 Mb/s</span><span class="bar"></span><strong>Wi-Fi 1</strong><span class="year">1999</span></div>
  <div style="--bar-height: 3.4em; --bar-color: #32815d; --bar-border: #245b42"><span class="rate">54 Mb/s</span><span class="bar"></span><strong>Wi-Fi 2</strong><span class="year">1999</span></div>
  <div style="--bar-height: 3.4em; --bar-color: #4f8a43; --bar-border: #38632f"><span class="rate">54 Mb/s</span><span class="bar"></span><strong>Wi-Fi 3</strong><span class="year">2003</span></div>
  <div style="--bar-height: 4.7em; --bar-color: #8b9238; --bar-border: #626728"><span class="rate">600 Mb/s</span><span class="bar"></span><strong>Wi-Fi 4</strong><span class="year">2009</span></div>
  <div style="--bar-height: 6em; --bar-color: #bf8a2e; --bar-border: #87611f"><span class="rate">6,93 Gb/s</span><span class="bar"></span><strong>Wi-Fi 5</strong><span class="year">2013</span></div>
  <div style="--bar-height: 6.4em; --bar-color: #c66f2b; --bar-border: #8c4f1f"><span class="rate">9,61 Gb/s</span><span class="bar"></span><strong>Wi-Fi 6 / 6E</strong><span class="year">2021</span></div>
  <div style="--bar-height: 6.95em; --bar-color: #b8443f; --bar-border: #822f2c"><span class="rate">23,1 Gb/s</span><span class="bar"></span><strong>Wi-Fi 7</strong><span class="year">2024</span></div>
</div>

<div class="future-standard"><strong>P802.11bn - projekt IEEE</strong><span>Nacisk na niezawodność. Projektu nie porównujemy na wykresie maksymalnych szybkości.</span></div>

<p class="credits">Maksymalna szybkość PHY (<em>physical layer</em>) jednego łącza, w skali logarytmicznej. Lata odpowiadają oznaczeniom IEEE, nie startowi certyfikacji.</p>

---

## Wybrane standardy IEEE 802.11

<div class="wifi-standard-table">
  <div class="head">Standard</div><div class="head">Rok w oznaczeniu</div><div class="head">Pasmo</div><div class="head">Kanał</div><div class="head rate">Maks. PHY</div>
  <div>802.11 (pierwsza wersja)</div><div>1997</div><div>2,4 GHz / podczerwień</div><div>zależnie od wariantu</div><div class="rate">2 Mb/s</div>
  <div>802.11a</div><div>1999</div><div>5 GHz</div><div>20 MHz</div><div class="rate">54 Mb/s</div>
  <div>802.11b</div><div>1999</div><div>2,4 GHz</div><div>22 MHz</div><div class="rate">11 Mb/s</div>
  <div>802.11g</div><div>2003</div><div>2,4 GHz</div><div>20 MHz</div><div class="rate">54 Mb/s</div>
  <div>802.11n</div><div>2009</div><div>2,4 / 5 GHz</div><div>20 / 40 MHz</div><div class="rate">600 Mb/s</div>
  <div>802.11ad</div><div>2012</div><div>60 GHz</div><div>2160 MHz</div><div class="rate">6,76 Gb/s</div>
  <div>802.11ac</div><div>2013</div><div>5 GHz</div><div>20–160 MHz</div><div class="rate">6,93 Gb/s</div>
  <div>802.11ax</div><div>2021</div><div>2,4 / 5 / 6 GHz</div><div>20–160 MHz</div><div class="rate">9,61 Gb/s</div>
  <div>802.11be</div><div>2024</div><div>2,4 / 5 / 6 GHz</div><div>do 320 MHz w 6 GHz</div><div class="rate">23,1 Gb/s</div>
</div>

<p class="credits">Maksima PHY dla jednego łącza. Rzeczywista przepływność zależy od konfiguracji i warunków radiowych. IEEE opublikowało 802.11be-2024 w 2025 r.</p>

---

## Starsze generacje Wi-Fi: zgodność i ograniczenia

- Wersja 802.11 z 1997 r. przewidywała zarówno radio, jak i transmisję podczerwoną; rozwój WLAN skupił się później na radiu.
- 802.11g współpracowało z urządzeniami 802.11b w paśmie 2,4 GHz, ale obecność starszych stacji mogła spowalniać sieć.
- Urządzenia 802.11a pracowały w 5 GHz i nie mogły łączyć się z urządzeniami obsługującymi wyłącznie 2,4 GHz.
- Przy słabym sygnale urządzenia mogły obniżać szybkość transmisji radiowej.

---

## Materiał wideo: 802.11b, g i n

<p class="video-intro">Porównanie 802.11b, g i n pokazuje wyniki pomiaru w kilku odległościach. To wyniki tej konfiguracji, nie maksymalne szybkości standardów.</p>

<video controls preload="metadata"><source src="media/videos/KysPKUBo1u4.mp4" type="video/mp4"></video>

---

## Producenckie rozszerzenia dawnego Wi-Fi

**802.11b+** i **Super G** to nazwy rozwiązań producentów, nie standardów IEEE. Oferowały wyższe szybkości, m.in. przez łączenie kanałów, ale nie gwarantowały współpracy urządzeń różnych firm.

---

## MIMO: wiele anten po obu stronach

MIMO (*Multiple Input Multiple Output*) może przenosić kilka strumieni równolegle, gdy pozwalają na to sprzęt i warunki radiowe.

<div class="columns"><div>

<img src="media/image21.png" alt="Schemat konfiguracji SISO, SIMO, MISO i MIMO" style="max-height:340px;max-width:100%;margin:0 auto">

</div><div class="small">

- **SISO:** jedna antena nadawcza, jedna odbiorcza.
- **SIMO:** jedna nadawcza, wiele odbiorczych.
- **MISO:** wiele nadawczych, jedna odbiorcza.
- **MIMO:** wiele nadawczych i odbiorczych.

</div></div>

---

## MU-MIMO w 802.11ac

<p class="credits">MU-MIMO (<em>Multi-User MIMO</em>) rozdziela równoległe strumienie między kilku użytkowników. W 802.11ac działa w kierunku od punktu dostępowego do stacji.</p>

![Rozdzielanie strumieni do wielu użytkowników](media/image22.png)

---

## Co zmieniły 802.11n, ac i ax

- **802.11n:** MIMO i kanały 20/40 MHz.
- **802.11ac:** w paśmie 5 GHz: kanały do **160 MHz**, do **ośmiu strumieni przestrzennych** i modulacja **256-QAM** (*Quadrature Amplitude Modulation*).
- **802.11ax:** OFDMA (*Orthogonal Frequency-Division Multiple Access*) i planowanie transmisji w zatłoczonych sieciach, a także **1024-QAM**. Większa przepływność wymaga odpowiednio dobrych warunków radiowych.

---

## Materiał wideo: 802.11n a 802.11ac

<p class="video-intro">Animacja NETGEAR porównuje 802.11ac z wcześniejszymi generacjami i ilustruje kształtowanie wiązki w kierunku urządzeń.</p>

<video controls preload="metadata"><source src="media/videos/DsWJ-ei5jrc.mp4" type="video/mp4"></video>

---

## Wi-Fi 6: podział kanału w OFDMA

<p class="video-intro">MU-MIMO rozdziela strumienie przestrzenne. Animacja Qualcomm pokazuje drugi sposób obsługi wielu urządzeń: OFDMA przydziela im różne części pasma kanału.</p>

<video controls preload="metadata"><source src="media/videos/HgIJmdzNyIQ.mp4" type="video/mp4"></video>

---

## Wi-Fi 7: skąd bierze się poprawa?

- **Kanał do 320 MHz** w paśmie 6 GHz mieści więcej danych, gdy dostępne jest odpowiednio szerokie pasmo.
- **4096-QAM** przenosi więcej bitów na symbol niż 1024-QAM, ale wymaga dobrego sygnału.
- **MLO** (*Multi-Link Operation*) pozwala korzystać z kilku łączy, np. w 5 i 6 GHz. Zależnie od trybu może zwiększać szybkość lub ograniczać opóźnienia.

<p class="credits">Wi-Fi Alliance uruchomiła certyfikację w 2024 r. IEEE opublikowało 802.11be-2024 w lipcu 2025 r.</p>

---

## 60 GHz i 802.11ad / ay

- Bardzo duża przepływność na krótkim dystansie.
- Silne tłumienie i słaba penetracja przeszkód.
- Zastosowania: łącza punkt-punkt, dokowanie bezprzewodowe, krótkodystansowe transmisje multimedialne.
- 802.11ay rozwinął 802.11ad m.in. przez łączenie kanałów i transmisję wieloantenową MIMO; osiągalny zasięg i szybkość zależą od sprzętu oraz warunków propagacji.

---

## WiGig i pasmo 60 GHz

![Logo Wireless Gigabit Alliance](media/image25.png)

---

## Materiał wideo: Wi-Fi przy 60 GHz

<p class="video-intro">Animacja pokazuje przykładowe zastosowania WiGig (802.11ad) w paśmie 60 GHz, m.in. szybką transmisję na krótkim dystansie.</p>

<video controls preload="metadata"><source src="media/videos/zcfuTD3z7aA.mp4" type="video/mp4"></video>

---

## 802.11ah: Wi-Fi HaLow

IEEE 802.11ah przenosi Wi-Fi do pasm **poniżej 1 GHz** (dostępne częstotliwości zależą od kraju). Niższa częstotliwość sprzyja większemu zasięgowi niż typowe pasma 2,4 i 5 GHz, kosztem mniejszej przepływności.

Standard przewidziano między innymi dla czujników i urządzeń Internetu rzeczy, w których ważne są oszczędzanie energii oraz obsługa wielu stacji.

---

## Inne rozszerzenia IEEE 802.11

- **802.11d / h / j:** dostosowanie pracy radiowej do wymagań regionalnych.
- **802.11e:** mechanizmy jakości obsługi i priorytetów ruchu.
- **802.11i:** mechanizmy bezpieczeństwa sieci WLAN.
- **802.11f:** historyczna specyfikacja współpracy punktów dostępowych.
- **802.11aj:** regionalny wariant dla pasma 45 GHz.

Są to rozszerzenia rodziny 802.11, a nie kolejne generacje oznaczane nazwami Wi-Fi 4, 5, 6 i 7.

---

## Kompatybilność i certyfikacja

- Zgodność standardu radiowego nie zawsze oznacza pełną zgodność funkcji urządzeń.
- Certyfikat Wi-Fi Alliance ułatwia przewidywalną współpracę produktów.
- Planowanie sieci wymaga doboru pasma, kanałów, mocy i zabezpieczeń.

---

## Pozostałe grupy IEEE 802

- **802.15:** bezprzewodowe sieci osobiste, w tym 802.15.4 dla urządzeń małej mocy.
- **802.16 / 802.16e:** szerokopasmowy dostęp radiowy WiMAX, także mobilny.
- **802.18:** doradztwo w sprawach regulacji radiowych.
- **802.20:** mobilny szerokopasmowy dostęp radiowy.
- **802.22:** regionalne sieci bezprzewodowe.

To historyczny przegląd rodzin standardów, nie lista technologii równie popularnych dziś.

---

<!-- .slide: class="section-slide" -->

# Sieci miejskie i dalekiego zasięgu

---

## WiMAX

- WiMAX (*Worldwide Interoperability for Microwave Access*): rodzina IEEE 802.16 dla szerokopasmowych sieci metropolitalnych.
- Przeznaczona do dostępu bezprzewodowego na większych obszarach niż WLAN.
- Historycznie ważna alternatywa dla dostępu przewodowego, obecnie wyparta w wielu zastosowaniach przez sieci komórkowe.

---

## WiMAX - infrastruktura

<div class="columns"><div>

Stacje bazowe wykorzystują anteny sektorowe do obsługi różnych kierunków. Łącza dosyłowe łączą stacje z resztą sieci operatora.

</div><div>

<img src="media/image31.jpg" alt="Stacje bazowe WiMAX" height="350">

</div></div>

---

## Materiał wideo: WiMAX

<p class="video-intro">Archiwalna animacja Intela pokazuje, jak stacje bazowe WiMAX miały zapewniać mobilny dostęp szerokopasmowy na obszarze ich pokrycia.</p>

<video controls preload="metadata"><source src="media/videos/KQdc5AdJqCg.mp4" type="video/mp4"></video>

---

## LoRa i LoRaWAN

LoRa (*Long Range*) to technika radiowa dalekiego zasięgu, a LoRaWAN (*Long Range Wide Area Network*) określa sieciowy sposób jej użycia.

- Mała przepływność, daleki zasięg i niskie zużycie energii.
- Przeznaczone dla czujników, telemetrii i IoT.
- Wykorzystują częstotliwości poniżej 1 GHz, zależne od regionu, np. okolice 868 MHz w Europie i 915 MHz w Ameryce Północnej.

---

## LoRa: pochodzenie i pasma

LoRa opracowała firma Cycleo; w 2012 r. przejął ją Semtech.

Typowe pasma i dopuszczalna moc zależą od lokalnych przepisów. Przykładowych częstotliwości nie należy traktować jako uniwersalnych.

---

## LoRa - urządzenie i obszary zastosowań

<div class="media-gallery">
  <img src="media/image33.jpg" alt="Moduł LoRa">
  <img src="media/image26.png" alt="Zastosowania Internetu rzeczy">
</div>

---

## Materiał wideo: LoRa

<p class="video-intro">Animacja pokazuje, jak czujniki w budynkach i miastach mogą przekazywać dane przez wspólną infrastrukturę LoRa.</p>

<video controls preload="metadata"><source src="media/videos/m6IvwcjcxQc.mp4" type="video/mp4"></video>

---

## Co dalej z IEEE 802?

- **Opublikowany: 802.11bf-2025.** Urządzenia WLAN mogą wykorzystywać zmiany sygnału radiowego do wykrywania zmian w otoczeniu, np. ruchu.
- **W opracowaniu: P802.11bn.** Celem jest bardziej niezawodna transmisja, m.in. mniej strat i krótsze opóźnienia w trudnych warunkach radiowych.

<p class="credits">Stan na listopad 2026 r.: <a href="https://ieee802.org/11/overview.html">opublikowane standardy</a> i <a href="https://www.ieee802.org/11/Reports/802.11_Timelines.htm">harmonogram projektów IEEE</a>.</p>

---

## Jak IEEE widziało rozwój sieci

<p class="video-intro">W archiwalnym materiale członkowie IEEE omawiają kierunki rozwoju sieci. To perspektywa z czasu nagrania, nie aktualna lista planów.</p>

<video controls preload="metadata"><source src="media/videos/fRnGP41TE2s.mp4" type="video/mp4"></video>

---

## Podsumowanie

- Bezprzewodowość daje mobilność, ale wymaga planowania radiowego i zabezpieczeń.
- IEEE 802.11 ewoluował od podstawowego WLAN do wielopasmowej, wysokowydajnej infrastruktury.
- PAN, WiMAX i LoRa odpowiadają na odmienne potrzeby zasięgu, energii i przepływności.

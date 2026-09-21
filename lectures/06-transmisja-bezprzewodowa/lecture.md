<!-- .slide: class="title-slide" -->

# Media transmisyjne: transmisja bezprzewodowa

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

Kluczowe elementy: urządzenia końcowe, punkty dostępowe, anteny, kontrolery i łącze do sieci szkieletowej.

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

Rosnący zasięg: od urządzeń osobistych po sieci łączące odległe lokalizacje.

---

## PAN i Internet rzeczy

- **Bluetooth:** połączenia osobiste, urządzenia peryferyjne i audio.
- **ZigBee / IEEE 802.15.4:** energooszczędne czujniki i automatyka.
- **Z-Wave:** domowa automatyka.
- **Thread:** sieć mesh dla urządzeń IoT, oparta na IPv6.

---

## WLAN

WLAN (*Wireless Local Area Network*) zapewnia lokalny dostęp radiowy. Najczęściej kojarzymy ją z Wi-Fi, czyli implementacjami standardów IEEE 802.11.

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

---

## Rozwój Wi-Fi: 1997–2003

<div class="timeline">
  <div><strong>IEEE 802.11</strong><br>1997<br><br>2,4 GHz, do 2 Mb/s</div>
  <div><strong>Wi-Fi 1</strong><br>802.11b, 1999<br><br>2,4 GHz, do 11 Mb/s</div>
  <div><strong>Wi-Fi 2</strong><br>802.11a, 1999<br><br>5 GHz, do 54 Mb/s</div>
  <div><strong>Wi-Fi 3</strong><br>802.11g, 2003<br><br>2,4 GHz, do 54 Mb/s</div>
</div>

---

## Rozwój Wi-Fi: 2009–2024

<div class="timeline">
  <div><strong>Wi-Fi 4</strong><br>802.11n, 2009<br><br>MIMO, 2,4/5 GHz</div>
  <div><strong>Wi-Fi 5</strong><br>802.11ac, 2013<br><br>większa przepływność w 5 GHz</div>
  <div><strong>Wi-Fi 6 / 6E</strong><br>802.11ax, 2021<br><br>OFDMA; 6 GHz w 6E</div>
  <div><strong>Wi-Fi 7</strong><br>802.11be, 2024<br><br>kanały 320 MHz, Multi-Link Operation</div>
</div>

---

## Starsze generacje i zgodność

- **802.11b i 802.11g:** pracują w paśmie 2,4 GHz; 802.11g zachowuje zgodność wsteczną z 802.11b.
- **802.11a:** wykorzystuje 5 GHz, więc nie współpracuje radiowo z urządzeniami wyłącznie 2,4 GHz.
- Historyczne standardy są istotne przy obsłudze starszych urządzeń i planowaniu kompatybilności.

---

## 802.11n, ac i ax

- **802.11n:** MIMO, kanały 20/40 MHz.
- **802.11ac:** szerokie kanały w 5 GHz i wielostrumieniowość.
- **802.11ax:** poprawa wydajności w zatłoczonych środowiskach, OFDMA i planowanie transmisji.

---

## 60 GHz i 802.11ad / ay

- Bardzo duża przepływność na krótkim dystansie.
- Silne tłumienie i słaba penetracja przeszkód.
- Zastosowania: łącza punkt-punkt, dokowanie bezprzewodowe, krótkodystansowe transmisje multimedialne.

---

## Kompatybilność i certyfikacja

- Zgodność standardu radiowego nie zawsze oznacza pełną zgodność funkcji urządzeń.
- Certyfikat Wi-Fi Alliance ułatwia przewidywalną współpracę produktów.
- Planowanie sieci wymaga doboru pasma, kanałów, mocy i zabezpieczeń.

---

<!-- .slide: class="section-slide" -->

# Sieci miejskie i dalekiego zasięgu

---

## WiMAX

- Rodzina IEEE 802.16 dla szerokopasmowych sieci metropolitalnych.
- Przeznaczona do dostępu bezprzewodowego na większych obszarach niż WLAN.
- Historycznie ważna alternatywa dla dostępu przewodowego, obecnie wyparta w wielu zastosowaniach przez sieci komórkowe.

---

## LoRa i LoRaWAN

- Mała przepływność, daleki zasięg i niskie zużycie energii.
- Przeznaczone dla czujników, telemetrii i IoT.
- Nie zastępują Wi-Fi: optymalizują inny kompromis między zasięgiem, energią i ilością danych.

---

## Co dalej z IEEE 802?

- bardziej efektywne użycie widma,
- większa pojemność w gęstych sieciach,
- współdziałanie Wi-Fi z sieciami komórkowymi,
- rozwój urządzeń IoT i sieci o małej mocy.

---

## Podsumowanie

- Bezprzewodowość daje mobilność, ale wymaga planowania radiowego i zabezpieczeń.
- IEEE 802.11 ewoluował od podstawowego WLAN do wielopasmowej, wysokowydajnej infrastruktury.
- PAN, WiMAX i LoRa odpowiadają na odmienne potrzeby zasięgu, energii i przepływności.

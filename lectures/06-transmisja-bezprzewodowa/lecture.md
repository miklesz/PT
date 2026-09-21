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

## Rozwój Wi-Fi

| Generacja | IEEE | Najważniejsza cecha |
| --- | --- | --- |
| Wi-Fi 4 | 802.11n | MIMO, 2,4/5 GHz |
| Wi-Fi 5 | 802.11ac | wysokie przepływności w 5 GHz |
| Wi-Fi 6 / 6E | 802.11ax | OFDMA, pojemność, 6 GHz w 6E |
| Wi-Fi 7 | 802.11be | szersze kanały i Multi-Link Operation |

---

## Od 802.11b do 802.11g

- **802.11b:** 2,4 GHz, do 11 Mb/s.
- **802.11a:** 5 GHz, do 54 Mb/s.
- **802.11g:** 2,4 GHz, do 54 Mb/s i zgodność wsteczna z 802.11b.

To historyczne standardy, ważne dla zrozumienia kompatybilności starszych urządzeń.

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

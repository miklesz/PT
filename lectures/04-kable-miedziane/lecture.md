<!-- .slide: class="title-slide" -->

# Warstwa fizyczna: przekaz elektryczny

## Kable miedziane w telekomunikacji i teleinformatyce

---

## Plan wykładu

- kabel koncentryczny i jego złącza,
- para skręcona: budowa, rodzaje i zastosowania,
- kable specjalne,
- RJ-45 oraz Token Ring.

---

<!-- .slide: class="section-slide" -->

# Kabel koncentryczny

---

## Budowa kabla koncentrycznego

<div class="packet"><span>Przewód miedziany</span><span>Izolacja wewnętrzna</span><span>Oplot / ekran</span><span>Powłoka zewnętrzna</span></div>

- Angielska nazwa: *coaxial cable*.
- Ekran ogranicza wpływ zakłóceń elektromagnetycznych.
- W sieciach komputerowych został w większości wyparty przez skrętkę.

---

## Złącza koncentryczne

<div class="columns"><div>

**BNC**

*Bayonet Neill-Concelman*; dawniej sieci koncentryczne, dziś nadal aparatura pomiarowa.

</div><div>

**N**

Złącze stosowane dla sygnałów wysokiej częstotliwości, do około 18 GHz.

</div></div>

---

<!-- .slide: class="section-slide" -->

# Para skręcona

---

## Skrętka: podstawy

- Angielska nazwa: *twisted pair*.
- Osiem miedzianych żył tworzy cztery pary.
- Każda para jest skręcona w odmienny sposób, co ogranicza przesłuchy i zakłócenia.
- Izolacja żył jest zwykle polietylenowa, a wspólna powłoka z PVC.

---

## Gdzie stosujemy skrętkę?

- sieci telefoniczne,
- sieci komputerowe,
- okablowanie strukturalne w budynkach.

Jej popularność wynika z dobrego stosunku możliwości do ceny oraz łatwości instalacji.

---

## Rodzaje skrętek

| Typ | Ekranowanie | Typowe zastosowanie |
| --- | --- | --- |
| UTP | brak | standardowe sieci LAN |
| FTP | folia i przewód uziemiający | większe zakłócenia, dłuższe odcinki |
| STP | ekran, często ekranowanie par | wymagające środowiska EMC |
| S/FTP | folia oraz dodatkowy ekran | wysoka odporność na zakłócenia |

---

## UTP

- *Unshielded Twisted Pair*.
- Brak ekranowania żył.
- Najczęściej stosowany kabel w lokalnych sieciach komputerowych.

---

## Materiał: skrętka UTP

<video controls preload="metadata"><source src="media/slide-017-media1.mp4" type="video/mp4"></video>

---

## FTP

- *Foiled Twisted Pair*.
- Ekranowanie folią oraz przewód uziemiający.
- Większa odporność na zewnętrzne zakłócenia elektromagnetyczne.

---

## STP i S/FTP

- **STP:** ekran w postaci oplotu oraz powłoki; możliwe indywidualne ekranowanie par.
- **S/FTP:** dodatkowy ekran z siatki miedzianej lub folii aluminiowej.
- Stosowane, gdy ważna jest zgodność EMC oraz ograniczenie emisji EMI.

---

## Kable specjalne

<div class="columns"><div>

**W ziemi**

Kable z wypełnieniem żelowym zwiększają odporność na warunki atmosferyczne i zakłócenia.

</div><div>

**Przewieszki**

Kable z linką nośną prowadzi się między budynkami; dostępne są warianty UTP i FTP.

</div></div>

---

<!-- .slide: class="section-slide" -->

# RJ-45 i Ethernet

---

## RJ-45

- Ośmioprzewodowe złącze systemów okablowania strukturalnego.
- Standardy: ISO 8877, ISO/IEC 11801, EN 50173.
- Występuje w panelach krosowych, gniazdach stanowiskowych, kartach sieciowych i kablach połączeniowych.
- Dostępne są wersje ekranowane i nieekranowane.

---

## Materiał: podłączanie RJ-45

<video controls preload="metadata"><source src="media/slide-029-media2.mp4" type="video/mp4"></video>

---

## Piny RJ-45

<div class="packet"><span>1</span><span>2</span><span>3</span><span>4</span><span>5</span><span>6</span><span>7</span><span>8</span></div>

W kablu prostym kolejność żył jest taka sama na obu końcach. Kabel skrzyżowany zamienia pary transmisyjne, co historycznie pozwalało łączyć dwa podobne urządzenia bez przełącznika.

---

## Okablowanie Ethernet UTP

<video controls preload="metadata"><source src="media/slide-032-media3.mp4" type="video/mp4"></video>

---

## Materiał: zaciskanie RJ-45

<video controls preload="metadata"><source src="media/slide-036-media4.mp4" type="video/mp4"></video>

---

## Materiał: okablowanie Ethernet

<video controls preload="metadata"><source src="media/slide-037-media5.mp4" type="video/mp4"></video>

---

## Token Ring

- IEEE 802.5, *Token Ring Access Method*.
- Historyczne rozwiązanie ze złączem hermafrodytycznym.
- Złącza były duże, złożone i mniej wygodne niż współczesne rozwiązania Ethernet.

---

## Podsumowanie

- Koncentryk jest odpornym, ale historycznym medium sieciowym.
- Skrętka dominuje w sieciach LAN dzięki cenie, łatwości instalacji i różnym wariantom ekranowania.
- RJ-45 pozostaje podstawowym złączem Ethernetu w okablowaniu miedzianym.

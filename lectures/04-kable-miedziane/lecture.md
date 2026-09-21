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

<div class="coax-layout"><div>

<div class="coax-cross-section">
  <div class="coax-insulation"><div class="coax-shield"><div class="coax-core"></div></div></div>
</div>
<div class="coax-legend">
  <span class="outer">Powłoka zewnętrzna</span><span class="shield">Oplot / ekran</span>
  <span class="insulation">Izolacja wewnętrzna</span><span class="core">Przewód miedziany</span>
</div>

</div><div>

- Angielska nazwa: *coaxial cable*.
- Ekran ogranicza wpływ zakłóceń elektromagnetycznych.
- W sieciach komputerowych został w większości wyparty przez skrętkę.

</div></div>

---

## Złącze BNC

<div class="columns"><div>

*Bayonet Neill-Concelman*; dawniej sieci koncentryczne, dziś nadal aparatura pomiarowa.

</div><div>

<img src="media/image4.png" alt="Złącze BNC" height="300">

</div></div>

---

## Złącze N

<div class="columns"><div>

Złącze stosowane dla sygnałów wysokiej częstotliwości, typowo do około 18 GHz. Jest większe i mechanicznie solidniejsze od BNC.

</div><div>

<img src="media/image5.png" alt="Złącze N" height="300">

</div></div>

---

<!-- .slide: class="section-slide" -->

# Para skręcona

---

## Skrętka: podstawy

<div class="columns"><div>

- Angielska nazwa: *twisted pair*.
- Osiem miedzianych żył tworzy cztery pary.
- Każda para jest skręcona w odmienny sposób, co ogranicza przesłuchy i zakłócenia.
- Izolacja żył jest zwykle polietylenowa, a wspólna powłoka z PVC.

</div><div>

![Para skręcona](media/image7.png)

</div></div>

---

## Gdzie stosujemy skrętkę?

<div class="columns"><div>

- sieci telefoniczne,
- sieci komputerowe,
- okablowanie strukturalne w budynkach.

Jej popularność wynika z dobrego stosunku możliwości do ceny oraz łatwości instalacji.

</div><div>

![Skrętka w sieci Ethernet](media/image8.png)

</div></div>

---

## Rodzaje skrętek

<div class="columns"><div>

**UTP**

Bez ekranowania. Najczęstszy wariant w typowych sieciach LAN.

**FTP / F/UTP**

Folia otacza cały kabel. Przydatna, gdy potrzebna jest dodatkowa ochrona przed zakłóceniami.

</div><div>

**STP**

Określenie handlowe dla kabla ekranowanego; dokładną budowę należy sprawdzić w dokumentacji producenta.

**S/FTP**

Ekran z oplotu wokół kabla oraz folia wokół każdej pary. Stosowany w środowiskach o większych wymaganiach EMC.

</div></div>

---

## Przykłady skrętek

<div class="media-gallery">
  <img src="media/image9.png" alt="Skrętka UTP">
  <img src="media/image13.png" alt="Skrętka ekranowana">
  <img src="media/image16.png" alt="Kabel ekranowany">
</div>

---

## UTP

<div class="columns"><div>

- *Unshielded Twisted Pair*.
- Brak ekranowania żył.
- Najczęściej stosowany kabel w lokalnych sieciach komputerowych.

</div><div>

![Kabel UTP](media/image14.png)

</div></div>

---

## Materiał: skrętka UTP

<video controls preload="metadata" poster="media/image15.png"><source src="media/slide-017-media1.mp4" type="video/mp4"></video>

---

## FTP

<div class="columns"><div>

- *Foiled Twisted Pair*.
- Ekranowanie folią oraz przewód uziemiający.
- Większa odporność na zewnętrzne zakłócenia elektromagnetyczne.

</div><div>

![Skrętka FTP](media/image17.png)

</div></div>

---

## STP i S/FTP

<div class="columns"><div>

- **STP:** ekran w postaci oplotu oraz powłoki; możliwe indywidualne ekranowanie par.
- **S/FTP:** dodatkowy ekran z siatki miedzianej lub folii aluminiowej.
- Stosowane, gdy ważna jest zgodność EMC oraz ograniczenie emisji EMI.

</div><div>

![Przykład ekranowanego okablowania](media/image18.png)

</div></div>

---

## Kable ziemne

<div class="columns"><div>

Kable z wypełnieniem żelowym zwiększają odporność na warunki atmosferyczne i zakłócenia.

</div><div>

<img src="media/image19.png" alt="Kabel ziemny" height="360">

</div></div>

---

## Przewieszki

<div class="columns"><div>

Kable z linką nośną prowadzi się między budynkami; dostępne są warianty UTP i FTP.

</div><div>

<img src="media/image20.png" alt="Przewieszka między budynkami" height="360">

</div></div>

---

<!-- .slide: class="section-slide" -->

# 8P8C (potocznie RJ-45) i Ethernet

---

## Złącze 8P8C (potocznie „RJ-45”)

<div class="columns"><div>

- Ośmioprzewodowe złącze systemów okablowania strukturalnego.
- W praktyce Ethernetu określenie „RJ-45” jest powszechne, choć technicznie chodzi zwykle o złącze 8P8C.
- Standardy: ISO 8877, ISO/IEC 11801, EN 50173.
- Występuje w panelach krosowych, gniazdach stanowiskowych, kartach sieciowych i kablach połączeniowych.
- Dostępne są wersje ekranowane i nieekranowane.

</div><div>

<img src="media/image21.png" alt="Gniazdo RJ-45" height="200">
<img src="media/image22.png" alt="Wtyk RJ-45" height="200">
<img src="media/image10.png" alt="Wtyk RJ-45 na przewodzie" height="160">
<img src="media/image11.png" alt="Karta sieciowa z gniazdem RJ-45" height="160">
<img src="media/image12.png" alt="Przewody Ethernet" height="160">

</div></div>

---

## Materiał: podłączanie RJ-45

<video controls preload="metadata" poster="media/image23.png"><source src="media/slide-029-media2.mp4" type="video/mp4"></video>

---

## Piny RJ-45

<div class="columns"><div>

<div class="packet"><span>1</span><span>2</span><span>3</span><span>4</span><span>5</span><span>6</span><span>7</span><span>8</span></div>

W kablu prostym kolejność żył jest taka sama na obu końcach. Kabel skrzyżowany zamienia pary transmisyjne, co historycznie pozwalało łączyć dwa podobne urządzenia bez przełącznika.

</div><div>

![Kolory żył we wtyku RJ-45](media/image25.png)
![Schemat zakończenia przewodów](media/image27.png)
![Schemat kabla skrzyżowanego](media/image28.png)
![Budowa ekranowanego przewodu](media/image29.png)

</div></div>

---

## Okablowanie Ethernet UTP

<video controls preload="metadata" poster="media/image26.png"><source src="media/slide-032-media3.mp4" type="video/mp4"></video>

---

## Materiał: zaciskanie RJ-45

<video controls preload="metadata" poster="media/image30.png"><source src="media/slide-036-media4.mp4" type="video/mp4"></video>

---

## Materiał: okablowanie Ethernet

<video controls preload="metadata" poster="media/image31.png"><source src="media/slide-037-media5.mp4" type="video/mp4"></video>

---

## Token Ring

<div class="columns"><div>

- IEEE 802.5, *Token Ring Access Method*.
- Historyczne rozwiązanie ze złączem hermafrodytycznym.
- Złącza były duże, złożone i mniej wygodne niż współczesne rozwiązania Ethernet.

</div><div>

<img src="media/image33.png" alt="Złącze Token Ring" height="150">
<img src="media/image34.png" alt="Kabel Token Ring" height="150">
<img src="media/image35.png" alt="Urządzenie Token Ring" height="150">

</div></div>

---

## Podsumowanie

- Koncentryk jest odpornym, ale historycznym medium sieciowym.
- Skrętka dominuje w sieciach LAN dzięki cenie, łatwości instalacji i różnym wariantom ekranowania.
- RJ-45 pozostaje podstawowym złączem Ethernetu w okablowaniu miedzianym.

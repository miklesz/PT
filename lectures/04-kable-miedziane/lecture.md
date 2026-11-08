<!-- .slide: class="title-slide" -->

# Warstwa fizyczna: przekaz elektryczny

## Kable miedziane w telekomunikacji i teleinformatyce

Mikołaj Leszczuk

---

## Plan wykładu

- kabel koncentryczny i jego złącza,
- para skręcona: budowa, rodzaje i zastosowania (w tym 100VG-AnyLAN),
- kable specjalne,
- RJ-45 oraz Token Ring.

---

<!-- .slide: class="section-slide" -->

# Kabel koncentryczny

---

## Budowa kabla koncentrycznego

<div class="coax-layout"><div>

<div class="coax-cross-section">
  <div class="coax-shield"><div class="coax-insulation"><div class="coax-core"></div></div></div>
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

Na zdjęciach: u góry **wtyk**, u dołu **gniazdo**.

</div><div>

<img src="media/image5.png" alt="Złącze N: wtyk" height="270">
<img src="media/image6.png" alt="Złącze N: gniazdo" height="270">

</div></div>

---

<!-- .slide: class="section-slide" -->

# Para skręcona

---

## Skrętka: podstawy

<div class="columns"><div>

- Angielska nazwa: *twisted pair*.
- Osiem miedzianych żył tworzy cztery pary.
- Izolacja żył jest zwykle polietylenowa, a wspólna powłoka z PVC (*polyvinyl chloride*, polichlorek winylu).

</div><div>

![Para skręcona](media/image7.png)

</div></div>

---

## Dlaczego przewody są skręcone?

<p class="video-intro">Skręcanie żył pomaga ograniczyć zarówno zakłócenia odbierane przez parę, jak i zakłócenia, które para emituje.</p>

<video data-youtube-fallback controls playsinline preload="metadata" poster="media/local-replacements/twisted-pair.jpg"><source src="media/local-replacements/twisted-pair.mp4" type="video/mp4"></video>

<p class="credits video-original"><a href="https://www.youtube.com/watch?v=P7WfY9P2uNY&amp;t=25s" target="_blank" rel="noopener noreferrer">Obejrzyj oryginał na YouTube</a></p>

<p class="credits">Audio University / Kyle Mathias · Why Are Wires Twisted? · fragment 00:25.920–04:15.360</p>

<p class="small">Różny skok skrętu poszczególnych par dodatkowo ogranicza przesłuch między nimi. Film pokazuje model idealnej linii symetrycznej; w praktyce tłumienie zakłóceń nie jest całkowite.</p>

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

## Historyczne zastosowania kategorii skrętki

<p class="video-intro">Film zestawia kategorie skrętki z historycznymi zastosowaniami: od telefonii i LocalTalk po Fast Ethernet. To przykłady, nie dzisiejsza tabela doboru kabli.</p>

<video controls preload="metadata" poster="media/image31.png"><source src="media/slide-037-media5.mp4" type="video/mp4"></video>

---

## Skrętka zakończona złączem

<div class="media-gallery">
  <img src="media/image10.png" alt="Kabel połączeniowy z wtykiem modularnym">
  <img src="media/image12.png" alt="Zbliżenie wtyków na końcach skrętki">
</div>

---

## Skrętka w 100VG-AnyLAN (IEEE 802.12)

- Wariant na nieekranowanej skrętce 100 Ω wykorzystywał cztery pary kategorii 3, 4 lub 5 i wtyk 8P8C (potocznie RJ-45), taki jak w okablowaniu Ethernetu.
- Sieć pracowała z szybkością 100 Mb/s i używała metody *Demand Priority*: koncentrator przydzielał stacjom dostęp do medium z uwzględnieniem priorytetu.
- Taki sam wtyk nie zapewniał zgodności portów z Ethernetem IEEE 802.3.

<p class="small">Standard jest <a href="https://standards.ieee.org/ieee/802.12/1172/">wycofany</a>. Przewidywał również warianty na ekranowanym kablu 150 Ω i na światłowodzie.</p>

---

## Ekranowanie skrętki: U/UTP, F/UTP i S/FTP

<p class="video-intro">Oznaczenie przed ukośnikiem opisuje ekran całego kabla, a oznaczenie po nim dotyczy par. Film porównuje kable bez ekranu, z folią i z oplotem.</p>

<video data-youtube-fallback controls playsinline preload="metadata" poster="media/local-replacements/cable-shielding.jpg"><source src="media/local-replacements/cable-shielding.mp4" type="video/mp4"></video>

<p class="credits video-original"><a href="https://www.youtube.com/watch?v=Gf2shRh-5GU&amp;t=95s" target="_blank" rel="noopener noreferrer">Obejrzyj oryginał na YouTube</a></p>

<p class="credits">Professor Messer · Cable Connectivity · 01:35-03:22 · po angielsku</p>

<!-- study-only:start -->

---

## Rodzaje skrętek: UTP i FTP

<div class="small">

**UTP — Unshielded Twisted Pair**

Bez ekranowania. Najczęstszy wariant w typowych sieciach lokalnych (LAN, *Local Area Network*).

**FTP / F/UTP — Foiled Twisted Pair**

Folia otacza cały kabel. Przydatna, gdy potrzebna jest dodatkowa ochrona przed zakłóceniami.

</div>

---

## Rodzaje skrętek: STP i S/FTP

<div class="columns"><div>

**STP — Shielded Twisted Pair**

Określenie handlowe dla kabla ekranowanego; dokładną budowę należy sprawdzić w dokumentacji producenta.

</div><div>

**S/FTP — Screened/Foiled Twisted Pair**

Ekran z oplotu wokół kabla oraz folia wokół każdej pary. Stosowany w środowiskach o większych wymaganiach EMC (*electromagnetic compatibility*, kompatybilność elektromagnetyczna).

</div></div>

<!-- study-only:end -->

---

## Przykłady skrętek

<div class="media-gallery">
  <img src="media/image9.png" alt="Skrętka UTP">
  <img src="media/image13.png" alt="Skrętka ekranowana">
  <img src="media/image16.png" alt="Kabel ekranowany">
</div>

<!-- study-only:start -->

---

## UTP

<div class="columns"><div>

- *Unshielded Twisted Pair*.
- Brak ekranowania żył.
- Najczęściej stosowany kabel w lokalnych sieciach komputerowych.

</div><div>

![Kabel UTP](media/image14.png)

</div></div>

<!-- study-only:end -->

---

## Materiał: skrętka UTP

<p class="video-intro">Na przekroju widać cztery pary, kolorową izolację żył i wspólną powłokę. Podane w filmie szybkości ilustrują starsze zastosowania.</p>

<video controls preload="metadata" poster="media/image15.png"><source src="media/slide-017-media1.mp4" type="video/mp4"></video>

<!-- study-only:start -->

---

## FTP

<div class="columns"><div>

- *Foiled Twisted Pair*.
- Ekranowanie folią oraz przewód uziemiający.
- Większa odporność na zewnętrzne zakłócenia elektromagnetyczne.

</div><div>

![Skrętka FTP](media/image17.png)

</div></div>

<!-- study-only:end -->

---

## Ekranowanie w praktyce

<div class="columns"><div>

Oznaczenie STP (*Shielded Twisted Pair*) nie mówi, gdzie znajduje się ekran. O sposobie połączenia ekranu decyduje projekt instalacji, a nie samo oznaczenie kabla.

</div><div>

![Przykład ekranowanego okablowania](media/image18.png)

</div></div>

---

## Skrętka bez ekranu i z folią

<div class="media-gallery four">
  <figure><img src="media/image14.png" alt="Kabel UTP"><figcaption>Bez ekranu</figcaption></figure>
  <figure><img src="media/image17.png" alt="Skrętka z ekranem z folii"><figcaption>Z ekranem z folii</figcaption></figure>
</div>

---

## Kable ziemne

<div class="columns"><div>

Wypełnienie żelowe ogranicza wnikanie i wzdłużne rozchodzenie się wilgoci w kablu prowadzonym na zewnątrz lub w ziemi. Ochrona przed zakłóceniami elektromagnetycznymi zależy od konstrukcji par i ekranowania, nie od samego żelu.

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

# RJ-45 i Ethernet

---

## Złącze RJ-45

<div class="columns"><div>

- Ośmioprzewodowe złącze systemów okablowania strukturalnego.
- Normy międzynarodowe: ISO 8877, ISO/IEC 11801 i EN 50173.
- Dostępne są wersje ekranowane i nieekranowane.

</div><div>

<img src="media/image22.png" alt="Wtyk RJ-45" height="360">

</div></div>

---

## Gdzie spotykamy RJ-45?

<div class="columns"><div>

- w panelach krosowych,
- w gniazdach stanowiskowych,
- w kartach sieciowych,
- w kablach połączeniowych Ethernet.

</div><div>

<img src="media/image11.png" alt="Karta sieciowa z gniazdem RJ-45" height="360">

</div></div>

---

## Jak wtyk RJ-45 łączy się z gniazdem

<p class="video-intro">Film zestawia wtyk z gniazdem i pokazuje, jak styki obu elementów trafiają na siebie po włożeniu wtyku.</p>

<video controls preload="metadata" poster="media/image23.png"><source src="media/slide-029-media2.mp4" type="video/mp4"></video>

---

## Piny RJ-45

<div class="columns"><div>

W dokumentacji technicznej można spotkać oznaczenie **8P8C**: osiem pozycji i osiem styków złącza.

<div class="packet"><span>1</span><span>2</span><span>3</span><span>4</span><span>5</span><span>6</span><span>7</span><span>8</span></div>

Numerację ogląda się od strony styków wtyku, przy zatrzasku skierowanym w dół.

</div><div>

<img src="media/image26.png" alt="Kolory żył we wtyku RJ-45" height="360">

</div></div>

---

## Rozkład żył: T568A i T568B

<p class="video-intro">Na dwóch schematach T568A i T568B porównaj położenie par zielonej i pomarańczowej. Niebieska i brązowa pozostają na swoich miejscach.</p>

<video controls preload="metadata"><source src="media/slide-032-media3.mp4" type="video/mp4"></video>

---

## Kabel prosty

<div class="columns"><div>

Kolejność żył jest taka sama na obu końcach kabla. To standardowy kabel łączący urządzenie końcowe z przełącznikiem.

</div><div>

<img src="media/image27.png" alt="Schemat kabla prostego" height="360">

</div></div>

---

## Kabel skrzyżowany

<div class="columns"><div>

Pary transmisyjne są zamienione między końcami kabla. Historycznie umożliwiało to bezpośrednie połączenie dwóch podobnych urządzeń bez przełącznika.

W pokazanym wariancie T568A/T568B zamieniają się piny 1 i 3 oraz 2 i 6.

</div><div>

<img src="media/image29.png" alt="Schemat kabla skrzyżowanego" height="360">

</div></div>

---

## Wtyki i zaciskarki

<div class="columns"><div>

**Wtyk ekranowany** ma metalową obudowę połączoną z ekranem kabla.

<img src="media/image30.png" alt="Ekranowane wtyki modularne" height="260">

</div><div>

**Zaciskarka** mocuje styki wtyku na żyłach kabla. Narzędzia mogą obsługiwać także mniejsze wtyki telefoniczne.

<img src="media/image31.png" alt="Zaciskarki do wtyków modularnych" height="260">

</div></div>

---

## Materiał: zaciskanie RJ-45

<p class="video-intro">Animacja pokazuje kolejność pracy: zdjęcie powłoki, wyrównanie żył, wsunięcie ich do wtyku i zaciśnięcie styków.</p>

<video controls preload="metadata" poster="media/image30.png"><source src="media/slide-036-media4.mp4" type="video/mp4"></video>

---

## Jak sprawdzić skrętkę po zaciśnięciu?

<p class="video-intro">Dla kabla prostego tester powinien pokazać tę samą kolejność 1-8 na obu końcach. Film pokazuje też wynik dla źle połączonych żył.</p>

<video data-youtube-fallback controls playsinline preload="metadata" poster="media/local-replacements/rj45-tester.jpg"><source src="media/local-replacements/rj45-tester.mp4" type="video/mp4"></video>

<p class="credits video-original"><a href="https://www.youtube.com/watch?v=QMpWkkqX1eM&amp;t=264s" target="_blank" rel="noopener noreferrer">Obejrzyj oryginał na YouTube</a></p>

<p class="credits">Switched On Network · How to Crimp Cat5 / Cat6 Network Patch Cables · 04:24-05:00 · po angielsku</p>

<p class="small">Prosty tester sprawdza ciągłość i kolejność połączeń pinów. Nie potwierdza kategorii ani przepustowości kabla.</p>

---

## Tester skrętki: trzy rodzaje usterek

<p class="video-intro">Tester sygnalizuje usterkę osobną kontrolką: <strong>Miswire</strong> to żyła na niewłaściwym pinie, <strong>Open</strong> to przerwa, a <strong>Short</strong> to zwarcie.</p>

<video data-youtube-fallback controls playsinline preload="metadata" poster="media/local-replacements/rj45-faults.jpg"><source src="media/local-replacements/rj45-faults.mp4" type="video/mp4"></video>

<p class="credits video-original"><a href="https://www.youtube.com/watch?v=blj04uc38nI&amp;t=24s" target="_blank" rel="noopener noreferrer">Obejrzyj oryginał na YouTube</a></p>

<p class="credits">Klein Tools · LAN Explorer · 00:24-01:25 · po angielsku</p>

---

## Token Ring

<div class="columns"><div>

- IEEE 802.5, *Token Ring Access Method*.
- Złącze IBM było hermafrodytyczne: dwa jednakowe końce można było połączyć i zablokować klipsem.
- Większe gabaryty niż w przypadku RJ-45 ograniczały liczbę portów w panelu krosowym, a złożona konstrukcja podnosiła koszt złącza.

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

<!-- .slide: class="title-slide" -->

# Transmisja sygnałów w systemach dostępu wielokrotnego

Mikołaj Leszczuk

---

## Plan wykładu

- kanał telekomunikacyjny i medium dzielone,
- dostęp losowy: ALOHA i szczelinowy ALOHA,
- nasłuchiwanie nośnej: CSMA,
- zapobieganie i wykrywanie kolizji: CSMA/CA oraz CSMA/CD.

---

## Medium dzielone

W medium dzielonym wiele stacji korzysta z jednego kanału transmisyjnego. Gdy dwie stacje nadają jednocześnie, ich sygnały mogą utworzyć **kolizję**.

<div class="shared-medium">
  <div class="shared-channel"><span class="channel-title">Wspólny kanał radiowy</span></div>
  <div class="radio-station station-a"><div class="node">A</div><strong>Stacja A</strong><span class="role">nadaje</span></div>
  <div class="radio-station station-b"><div class="node">B</div><strong>Stacja B</strong><span class="role">odbiera kanał</span></div>
  <div class="radio-station station-c"><div class="node">C</div><strong>Stacja C</strong><span class="role">odbiera kanał</span></div>
</div>

---

## Praca w medium dzielonym

<div class="media-gallery four">
  <figure><img src="media/image1.gif" alt="Nadawanie w medium dzielonym - etap 1"><figcaption>1. Gotowość stacji</figcaption></figure>
  <figure><img src="media/image2.gif" alt="Nadawanie w medium dzielonym - etap 2"><figcaption>2. Stacja A nadaje</figcaption></figure>
  <figure><img src="media/image3.gif" alt="Nadawanie w medium dzielonym - etap 3"><figcaption>3. Sygnał dociera do wszystkich</figcaption></figure>
  <figure><img src="media/image4.gif" alt="Nadawanie w medium dzielonym - etap 4"><figcaption>4. Adresat przyjmuje ramkę</figcaption></figure>
</div>

---

## Kto odbiera ramkę w medium dzielonym?

W klasycznym Ethernecie na wspólnym kablu zbiór stacji, których transmisje mogą się wzajemnie zderzyć, tworzy **domenę kolizyjną**.

- Nagłówek ramki zawiera docelowy adres **MAC** (*Media Access Control*).
- Terminatory na końcach dawnej magistrali pochłaniały energię sygnału, ograniczając odbicia.

---

## Metody dostępu

<div class="columns"><div>

**Sporne**

Stacje samodzielnie próbują uzyskać dostęp. Kolizje są możliwe, ale protokół określa reakcję.

</div><div>

**Kontrolowane**

Dostęp jest przydzielany według ustalonej reguły. Ogranicza to kolizje kosztem dodatkowej organizacji transmisji.

</div></div>

---

## Historyczne metody kontrolowane

- **Przepytywanie:** urządzenie centralne pyta stacje, czy chcą nadawać.
- **Przekazywanie znacznika:** prawo nadawania przechodzi między stacjami w magistrali albo pierścieniu.
- **Pierścień szczelinowy:** po pierścieniu krążą szczeliny gotowe na dane.
- **Wtrącany rejestr:** stacja wprowadza własne dane do obiegu pierścienia.

---

<!-- .slide: class="section-slide" -->

# ALOHA

---

## Skąd wzięło się ALOHA?

Metodę opracowano dla sieci ALOHAnet na Uniwersytecie Hawajskim. Stacje radiowe współdzieliły kanał i przesyłały dane do centralnej stacji, więc potrzebowały reguły ponawiania transmisji po kolizji.

<img src="media/image5.gif" alt="Wyspy Hawajskie, między którymi łączność zapewniał ALOHAnet" height="300">

---

## Zwykłe ALOHA

- Nadaj, gdy masz dane.
- Jeżeli nie nadejdzie potwierdzenie, uznaj kolizję.
- Odczekaj losowy czas i spróbuj ponownie.

To prosty protokół, ale przy większym obciążeniu często dochodzi do kolizji.

---

## ALOHA: potwierdzenie odbioru

<div class="media-gallery single-visual">
  <img src="media/image6.png" alt="Potwierdzenie w ALOHA">
</div>

---

## ALOHA: kolizje

<div class="media-gallery single-visual">
  <img src="media/image7.png" alt="Kolizje w ALOHA">
</div>

---

## ALOHA: kiedy ramki się nakładają?

Kolizja występuje, gdy ramka innej stacji rozpocznie się w takim momencie, że jej sygnał nakłada się na choćby część rozpatrywanej ramki. W zwykłym ALOHA możliwy okres kolizji jest dłuższy niż w wariancie szczelinowym.

<img src="media/image8.png" alt="Okno czasowe, w którym druga ramka może kolidować z pierwszą w ALOHA" height="280">

---

## Szczelinowy ALOHA

- Czas dzieli się na szczeliny.
- Stacja może rozpocząć nadawanie tylko na początku szczeliny.
- Zmniejsza to obszar, w którym transmisje mogą się nakładać, i poprawia wykorzystanie kanału.

---

## Szczelinowy ALOHA: przebieg transmisji

<div class="media-gallery single-visual">
  <img src="media/image9.png" alt="Szczelinowy ALOHA">
</div>

---

<!-- .slide: class="section-slide" -->

# CSMA

---

## CSMA: nasłuchiwanie nośnej

*Carrier Sense Multiple Access*:

1. stacja sprawdza, czy medium jest zajęte,
2. jeśli jest wolne, może rozpocząć nadawanie,
3. jeśli jest zajęte, czeka zgodnie z regułą protokołu.

Kolizja pozostaje możliwa z powodu opóźnienia propagacji.
Sygnał potrzebuje czasu na dotarcie do drugiego końca sieci i z powrotem; ten czas obiegu to **RTT** (*round-trip time*).

---

## Jednoczesna chęć nadawania

<img src="media/image10.png" alt="Dwie stacje podejmują próbę nadawania w tym samym czasie" height="430">

---

## Warianty CSMA

- **1-persistent:** nadaj natychmiast, gdy medium stanie się wolne.
- **non-persistent:** odczekaj losowo i sprawdź ponownie.
- **p-persistent:** w pracy szczelinowej nadaj z prawdopodobieństwem `p`.

Wybór jest kompromisem między opóźnieniem a ryzykiem kolizji.

---

<!-- .slide: class="section-slide" -->

# CSMA/CA

---

## Unikanie kolizji

<p class="video-intro">W Wi-Fi trudno wykryć kolizję podczas nadawania. Film pokazuje, jak CSMA/CA (<em>Carrier Sense Multiple Access with Collision Avoidance</em>) ogranicza to ryzyko przez nasłuch i odczekanie.</p>

<video data-youtube-fallback controls playsinline preload="metadata" poster="media/local-replacements/csma-ca.jpg"><source src="media/local-replacements/csma-ca.mp4" type="video/mp4"></video>

<p class="credits video-original"><a href="https://www.youtube.com/watch?v=iKn0GzF5-IU&amp;t=252s" target="_blank" rel="noopener noreferrer">Obejrzyj oryginał na YouTube</a></p>

<p class="credits">PowerCert Animated Videos · CSMA/CD and CSMA/CA Explained · fragment 04:12.830–05:03.300</p>

<p class="small">Opcjonalne RTS/CTS (<em>Request to Send / Clear to Send</em>) rezerwuje medium. Losowy czas oczekiwania to <em>backoff</em>; ACK to potwierdzenie odbioru.</p>

---

## Dlaczego Wi-Fi unika kolizji?

Węzeł radiowy może nie słyszeć innego węzła, choć oba zakłócają odbiornik docelowy. To klasyczny problem **ukrytego terminala**.

<div class="hidden-terminal">
  <div class="radio-link link-a"></div><div class="radio-link link-b"></div>
  <div class="hidden-link">A i B nie słyszą się wzajemnie</div>
  <div class="hidden-node access-point">Punkt dostępowy</div>
  <div class="hidden-node station-left">Stacja A</div>
  <div class="hidden-node station-right">Stacja B</div>
</div>

---

<!-- .slide: class="section-slide" -->

# CSMA/CD

---

## Wykrywanie kolizji

<p class="video-intro">Film pokazuje, jak CSMA/CD (<em>Carrier Sense Multiple Access with Collision Detection</em>) wykrywa kolizję na wspólnym łączu Ethernet i ponawia transmisję po odczekaniu.</p>

<video data-youtube-fallback controls playsinline preload="metadata" poster="media/local-replacements/csma-cd.jpg"><source src="media/local-replacements/csma-cd.mp4" type="video/mp4"></video>

<p class="credits video-original"><a href="https://www.youtube.com/watch?v=iKn0GzF5-IU&amp;t=38s" target="_blank" rel="noopener noreferrer">Obejrzyj oryginał na YouTube</a></p>

<p class="credits">PowerCert Animated Videos · CSMA/CD and CSMA/CA Explained · fragment 00:38.260–03:40.700</p>

<p class="small">Brak wykrytej kolizji nie gwarantuje dostarczenia ramki. CSMA/CD dotyczy medium współdzielonego i pracy półdupleksowej. Dzisiejszy Ethernet przełączany zwykle pracuje w pełnym dupleksie.</p>

<!-- study-only:start -->

---

## Przebieg kolizji w CSMA/CD

W klasycznym Ethernecie współdzielonym stacja monitoruje medium również podczas własnego nadawania. Po wykryciu kolizji przerywa ramkę i wysyła **jam sequence**, aby inne stacje także rozpoznały kolizję.

Nadawcy ponawiają próbę po losowym czasie.

<!-- study-only:end -->

---

## Sekwencja zagłuszająca i kontrola ramki

W przykładzie sekwencja zagłuszająca ma **32 bity**. Uszkodzona ramka zostaje odrzucona, bo nie przechodzi kontroli FCS/CRC.

---

## Kolizja w CSMA/CD: propagacja

<div class="media-gallery csma-cd-gallery">
  <img src="media/image14.png" alt="Kolizja CSMA/CD - rozpoczęcie transmisji">
  <img src="media/image15.png" alt="Kolizja CSMA/CD - druga stacja rozpoczyna transmisję">
</div>

---

## Kolizja w CSMA/CD: wykrycie

<div class="media-gallery csma-cd-gallery">
  <img src="media/image16.png" alt="Kolizja CSMA/CD - wykrycie zderzenia sygnałów">
  <img src="media/image17.png" alt="Kolizja CSMA/CD - obie stacje mają świadomość kolizji">
</div>

---

## Minimalny rozmiar ramki

Nadawca musi jeszcze transmitować, kiedy ewentualny sygnał kolizji zdąży do niego wrócić z najdalszego punktu sieci. Z tego wynika minimalny rozmiar ramki Ethernetu.

W klasycznym Ethernecie ramka ma co najmniej **64 bajty** od adresu docelowego do FCS, a pole danych co najmniej **46 bajtów**. Limit zasięgu segmentu i liczba wzmacniaczy wynikają z czasu propagacji w obie strony.

<!-- study-only:start -->

---

## CSMA/CD a pełny dupleks

W pełnym dupleksie oba końce mogą nadawać równocześnie bez kolizji, więc CSMA/CD nie jest potrzebne.

---

## CSMA/CD: decyzja po kolizji

<div class="media-gallery">
  <img src="media/image12.png" alt="Uproszczony algorytm CSMA/CD">
  <img src="media/image13.png" alt="Przepływ decyzji CSMA/CD">
</div>

<!-- study-only:end -->

---

## Porównanie

<div class="comparison-grid">
  <div><strong>ALOHA</strong>nadaj, potem reaguj<br>proste systemy radiowe</div>
  <div><strong>CSMA</strong>nasłuchaj przed nadaniem<br>współdzielone LAN</div>
  <div><strong>CSMA/CA</strong>staraj się uniknąć kolizji<br>Wi-Fi</div>
  <div><strong>CSMA/CD</strong>wykryj kolizję podczas nadawania<br>historyczny Ethernet współdzielony</div>
</div>

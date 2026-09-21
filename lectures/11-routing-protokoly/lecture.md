<!-- .slide: class="title-slide" -->

# Routing: protokoły

---

## Plan wykładu

- protokoły i usługi związane z warstwą sieciową,
- IP i jego nagłówek,
- adresacja i konfiguracja hosta,
- DNS,
- BGP oraz routing między systemami autonomicznymi.

---

## Warstwa sieciowa

Warstwa trzecia odpowiada za dostarczanie pakietów między sieciami. Jej podstawowe zadania to adresowanie logiczne, wybór trasy i przekazywanie pakietów.

![Budowa pakietu warstwy sieciowej](media/image1.png)

---

## IPX i IP

<div class="columns"><div>

**IPX — Internetwork Packet Exchange**

Historyczny protokół sieciowy używany między innymi w środowiskach Novell NetWare.

</div><div>

**IP — Internet Protocol**

Podstawowy protokół warstwy sieciowej Internetu. Współdziała z TCP (*Transmission Control Protocol*), UDP (*User Datagram Protocol*) oraz protokołami routingu.

</div></div>

---

## Zadania IP

- adresowanie źródła i celu,
- przesyłanie datagramów między sieciami,
- przekazywanie pakietów przez rutery,
- fragmentacja w IPv4, gdy jest konieczna.

IP jest protokołem bezpołączeniowym i nie gwarantuje dostarczenia, kolejności ani braku duplikatów.

---

## Nagłówek IPv4

<svg class="ipv4-header-svg" viewBox="0 0 1120 520" role="img" aria-label="Schemat nagłówka IPv4 z polami ułożonymi w wierszach po 32 bity.">
  <style>
    .ipv4-header-svg .bit { font: 15px sans-serif; fill: #4f5f68; }
    .ipv4-header-svg .label { font: 700 20px sans-serif; fill: #172f3d; }
    .ipv4-header-svg .detail { font: 14px sans-serif; fill: #4f5f68; }
    .ipv4-header-svg .field { stroke: #176b80; stroke-width: 2; }
  </style>
  <text class="bit" x="100" y="28">0</text><text class="bit" x="1095" y="28" text-anchor="end">31 bit</text>
  <g transform="translate(100,42)">
    <rect class="field" x="0" y="0" width="125" height="66" fill="#dceef2"/><text class="label" x="62" y="29" text-anchor="middle">Wersja</text><text class="detail" x="62" y="51" text-anchor="middle">4 bity</text>
    <rect class="field" x="125" y="0" width="125" height="66" fill="#dceef2"/><text class="label" x="187" y="29" text-anchor="middle">IHL</text><text class="detail" x="187" y="51" text-anchor="middle">4 bity</text>
    <rect class="field" x="250" y="0" width="188" height="66" fill="#e7edf6"/><text class="label" x="344" y="29" text-anchor="middle">DSCP</text><text class="detail" x="344" y="51" text-anchor="middle">6 bitów</text>
    <rect class="field" x="438" y="0" width="63" height="66" fill="#e7edf6"/><text class="label" x="469" y="29" text-anchor="middle">ECN</text><text class="detail" x="469" y="51" text-anchor="middle">2</text>
    <rect class="field" x="501" y="0" width="499" height="66" fill="#f7e8d1"/><text class="label" x="750" y="29" text-anchor="middle">Długość całkowita</text><text class="detail" x="750" y="51" text-anchor="middle">16 bitów: rozmiar całego pakietu</text>

    <rect class="field" x="0" y="66" width="500" height="66" fill="#eff0df"/><text class="label" x="250" y="95" text-anchor="middle">Identyfikacja</text><text class="detail" x="250" y="117" text-anchor="middle">16 bitów: łączy fragmenty jednego pakietu</text>
    <rect class="field" x="500" y="66" width="94" height="66" fill="#eff0df"/><text class="label" x="547" y="95" text-anchor="middle">Flagi</text><text class="detail" x="547" y="117" text-anchor="middle">3</text>
    <rect class="field" x="594" y="66" width="406" height="66" fill="#eff0df"/><text class="label" x="797" y="95" text-anchor="middle">Przesunięcie fragmentu</text><text class="detail" x="797" y="117" text-anchor="middle">13 bitów</text>

    <rect class="field" x="0" y="132" width="250" height="66" fill="#f7e8d1"/><text class="label" x="125" y="161" text-anchor="middle">TTL</text><text class="detail" x="125" y="183" text-anchor="middle">8 bitów: liczba skoków</text>
    <rect class="field" x="250" y="132" width="250" height="66" fill="#f7e8d1"/><text class="label" x="375" y="161" text-anchor="middle">Protokół</text><text class="detail" x="375" y="183" text-anchor="middle">8 bitów: TCP, UDP, ICMP</text>
    <rect class="field" x="500" y="132" width="500" height="66" fill="#f7e8d1"/><text class="label" x="750" y="161" text-anchor="middle">Suma kontrolna nagłówka</text><text class="detail" x="750" y="183" text-anchor="middle">16 bitów</text>

    <rect class="field" x="0" y="198" width="1000" height="60" fill="#dceef2"/><text class="label" x="500" y="234" text-anchor="middle">Adres źródłowy · 32 bity</text>
    <rect class="field" x="0" y="258" width="1000" height="60" fill="#e7edf6"/><text class="label" x="500" y="294" text-anchor="middle">Adres docelowy · 32 bity</text>
    <rect class="field" x="0" y="318" width="1000" height="54" fill="#f1f4f5" stroke-dasharray="7 5"/><text class="label" x="500" y="351" text-anchor="middle">Opcje i dopełnienie · występują tylko, gdy IHL &gt; 5</text>
  </g>
</svg>

<p class="credits">Każdy z trzech pierwszych wierszy ma 32 bity. Za nagłówkiem występują dane pakietu.</p>

---

## IHL, DSCP i ECN

<div class="columns"><div>

**IHL — Internet Header Length**

Określa długość nagłówka IP.

</div><div>

**DSCP — Differentiated Services Code Point**

Oznacza priorytet obsługi pakietu.

</div><div>

**ECN — Explicit Congestion Notification**

Pozwala sygnalizować przeciążenie bez odrzucenia pakietu.

</div></div>

---

## Ważne pola IPv4

- **TTL — Time To Live:** ogranicza liczbę skoków; każdy ruter zmniejsza go o jeden.
- **Protocol:** wskazuje protokół wyższej warstwy, np. TCP, UDP albo ICMP (*Internet Control Message Protocol*).
- **Fragmentation:** identyfikacja, flagi i przesunięcie umożliwiają składanie fragmentów.
- **Header checksum:** kontroluje poprawność samego nagłówka.

---

## Fragmentacja

Jeżeli pakiet IPv4 jest większy niż MTU (*Maximum Transmission Unit*, największa jednostka danych przenoszona przez łącze) i nie ma ustawionej flagi *Don't Fragment*, może zostać podzielony na fragmenty. Fragmenty są składane przez host docelowy.

W praktyce preferuje się unikanie fragmentacji przez odpowiedni dobór MTU i mechanizmy *Path MTU Discovery*.

---

## Adres IPv4

Adres IPv4 ma 32 bity, zwykle zapisane jako cztery oktety, np. `192.0.2.25`.

Maska albo długość prefiksu rozdziela część sieciową i hosta, np. `192.0.2.0/24`.

---

## Konfiguracja hosta

Host potrzebuje zwykle:

- adresu IP i prefiksu,
- bramy domyślnej,
- serwerów DNS,
- opcjonalnie informacji przekazanych automatycznie przez DHCP (*Dynamic Host Configuration Protocol*).

---

## Brama domyślna

Gdy cel nie należy do lokalnej sieci, host wysyła pakiet do bramy domyślnej. Ruter podejmuje dalszą decyzję trasowania.

<div class="packet"><span>Host</span><span>Brama domyślna</span><span>Internet</span><span>Sieć docelowa</span></div>

![Sieć lokalna, ruter i Internet](media/image11.png)

---

## DNS

DNS (*Domain Name System*) tłumaczy nazwy, np. `example.org`, na adresy IP i przechowuje inne rekordy związane z domeną.

<div class="columns"><div>

**Resolver**

Przyjmuje zapytanie od hosta i szuka odpowiedzi.

</div><div>

**Serwery autorytatywne**

Utrzymują rekordy dla konkretnych stref DNS.

</div></div>

---

## Rekordy DNS

<div class="comparison-grid">
  <div><strong>A / AAAA</strong>adres IPv4 / IPv6 hosta</div>
  <div><strong>CNAME</strong>alias nazwy</div>
  <div><strong>MX</strong>serwer pocztowy domeny</div>
  <div><strong>NS</strong>serwer autorytatywny strefy</div>
  <div><strong>TXT</strong>dane tekstowe, m.in. polityki domeny</div>
</div>

---

<!-- .slide: class="section-slide" -->

# BGP

---

## System autonomiczny

System autonomiczny (AS) to zbiór sieci zarządzanych według wspólnej polityki routingu. Internet jest siecią wielu AS-ów.

Każdy AS ma numer ASN (*Autonomous System Number*).

---

## BGP-4

*Border Gateway Protocol* jest protokołem routingu między systemami autonomicznymi. Działa nad TCP, ale steruje wyborem tras między AS-ami.

- wymienia osiągalne prefiksy,
- korzysta z polityki, nie tylko najkrótszego kosztu,
- używa atrybutów tras: `AS_PATH` (lista przebytych AS-ów), `LOCAL_PREF` (lokalna preferencja) i `MED` (*Multi-Exit Discriminator*, sugestia preferowanego wejścia do sąsiedniego AS).

---

## Dlaczego BGP jest inne?

Routing wewnątrz jednej organizacji może optymalizować metrykę techniczną. Routing między operatorami i dużymi sieciami musi uwzględniać także biznesową politykę tranzytu (odpłatnego przenoszenia ruchu), peeringu (bezpośredniej wymiany ruchu) i bezpieczeństwa.

---

## Podsumowanie

- IP dostarcza datagramy między sieciami, ale nie gwarantuje ich dostarczenia.
- Prawidłowa konfiguracja hosta obejmuje adres, prefiks, bramę i DNS.
- DNS mapuje nazwy na dane potrzebne aplikacjom.
- BGP kieruje ruchem między systemami autonomicznymi Internetu.

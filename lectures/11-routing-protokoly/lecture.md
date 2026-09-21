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

<div class="packet"><span>Wersja / IHL</span><span>DSCP / ECN</span><span>Długość całkowita</span><span>Identyfikacja</span><span>Flagi / przesunięcie fragmentu</span><span>TTL</span><span>Protokół</span><span>Suma kontrolna</span></div>

Następnie występują adresy źródłowy i docelowy, opcje oraz dane.

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

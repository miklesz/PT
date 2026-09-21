<!-- .slide: class="title-slide" -->

# Kodowanie sygnałów

---

## Plan wykładu

- podstawowe pojęcia kodowe,
- odległość Hamminga i waga kodu,
- maski telekomunikacyjne i właściwości sygnału,
- HDB, kod „2 z 5” oraz kody splotowe.

---

## Kod i słowo kodowe

Kod przypisuje symbolom źródłowym ciągi symboli kodowych. **Słowo kodowe** jest wynikiem takiego przypisania.

Cele kodowania obejmują między innymi reprezentację informacji, synchronizację transmisji oraz wykrywanie i korekcję błędów.

---

## Odległość Hamminga

Odległość Hamminga to liczba pozycji, na których dwa ciągi o tej samej długości się różnią.

`d(10001, 10000) = 1`
`d(00010, 10100) = 3`

Minimalna odległość kodu określa jego zdolność do wykrywania i korekcji błędów.

---

## Wzór na odległość Hamminga

![Wzór na odległość Hamminga](media/image1.png)

---

## Materiał: odległość Hamminga

<video controls preload="metadata"><source src="media/videos/P02mJhS9qQ4.mp4" type="video/mp4"></video>

---

## Waga kodu

Waga słowa kodowego jest liczbą jego niezerowych symboli. Dla kodów binarnych oznacza po prostu liczbę jedynek.

`w(10110100) = 4`

---

## Kody systematyczne i niesystematyczne

<div class="columns"><div>

**Systematyczne**

Słowo kodowe zawiera wprost bity informacji oraz bity kontrolne.

</div><div>

**Niesystematyczne**

Bity informacji nie są w słowie kodowym bezpośrednio rozpoznawalne; całość jest przekształcona.

</div></div>

---

## Maska telekomunikacyjna

Maska określa dopuszczalne granice parametrów sygnału w czasie, np. amplitudy i narastania zboczy.

Pomiar jest poprawny, gdy rzeczywisty przebieg pozostaje w granicach wyznaczonych przez maskę.

---

## Maska telekomunikacyjna: PDH 140 Mb/s

<div class="media-gallery single-visual">
  <img src="media/image3.png" alt="Maska telekomunikacyjna dla PDH 140 Mb/s">
</div>

---

## Maska telekomunikacyjna: PCM 2 Mb/s

<div class="media-gallery single-visual">
  <img src="media/image4.png" alt="Maska telekomunikacyjna dla PCM 2 Mb/s">
</div>

---

## Pożądane właściwości kodu transmisyjnego

- ograniczone składowe stałe,
- możliwość odzyskania zegara,
- mała liczba długich serii zer lub jedynek,
- odporność na błędy,
- rozsądna nadmiarowość i przepływność.

---

## HDB

Kody HDB (*High Density Bipolar*) zastępują długie serie zer wzorcami zawierającymi impulsy naruszające regułę bipolarności.

Pozwala to utrzymać synchronizację, nawet gdy źródło generuje długi ciąg zer.

![Przykładowy przebieg kodu HDB](media/image5.png)

---

## Synchronizacja w HDB3

W HDB3 ciąg czterech zer może zostać zastąpiony wzorcem:

<div class="hdb3-wave" aria-label="Wzorzec B00V: dwa impulsy o tej samej dodatniej polaryzacji oddzielone zerami">
  <div class="hdb3-cell pulse-b"><strong>B</strong><span>+V</span></div>
  <div class="hdb3-cell"><strong>0</strong><span>0 V</span></div>
  <div class="hdb3-cell"><strong>0</strong><span>0 V</span></div>
  <div class="hdb3-cell pulse-v"><strong>V</strong><span>+V</span></div>
</div>

<div class="hdb3-legend"><span><strong>B</strong> zwykły impuls zgodny z AMI</span><span><strong>V</strong> celowe naruszenie polaryzacji</span></div>

Ponieważ `B` i `V` mają tu tę samą polaryzację dodatnią, dekoder rozpoznaje `B00V` jako zastąpione zera, a nie dane użytkownika.

---

## Kod stałowagowy „2 z 5”

- Każde słowo ma pięć bitów, z których dokładnie dwa mają wartość `1`.
- Jest to kod nieliniowy i stałowagowy.
- Nie każde pięciobitowe słowo jest prawidłowe, co umożliwia wykrywanie części błędów.

---

## Odporność na błędy kodu „2 z 5”

Jeżeli podczas transmisji zmieni się pojedynczy bit, liczba jedynek przestaje wynosić dwa. Dekoder może wtedy wykryć błąd, choć nie musi umieć go poprawić.

---

## Koder i dekoder „2 z 5”

<div class="columns"><div>

**Koder**

Mapuje symbol wejściowy na jedno z dopuszczalnych słów o wadze dwa.

</div><div>

**Dekoder**

Sprawdza wagę słowa, rozpoznaje kod i sygnalizuje nieprawidłową kombinację.

</div></div>

---

## Schemat kodera „2 z 5”

<div class="media-gallery single-visual">
  <img src="media/image10.png" alt="Schemat kodera kodu 2 z 5">
</div>

---

## Schemat dekodera „2 z 5”

<div class="media-gallery single-visual">
  <img src="media/image11.png" alt="Schemat dekodera kodu 2 z 5">
</div>

---

## Zastosowanie kodu „2 z 5”

Jednym z historycznych zastosowań jest kod kreskowy *Interleaved 2 of 5*, używany między innymi do oznaczania przesyłek i produktów.

![Przykład kodu kreskowego Interleaved 2 of 5](media/image9.png)

---

## Kod splotowy

Kodowanie splotowe (*convolutional coding*) tworzy ciąg wyjściowy zależny od bieżących i wcześniejszych bitów wejściowych.

Stan kodera jest pamięcią wcześniejszych symboli, a dekodowanie wybiera najbardziej prawdopodobną sekwencję wejściową.

---

## Kodowanie splotowe: intuicja

<div class="convolutional-flow">
  <div class="flow-step"><strong>Wejście</strong><code>u(k)</code><small>bieżący bit</small></div>
  <div class="flow-arrow">→</div>
  <div class="flow-step"><strong>Rejestr</strong><code>u(k−1), u(k−2)</code><small>bity z poprzednich chwil</small></div>
  <div class="flow-arrow">→</div>
  <div class="flow-step"><strong>Generatory</strong><code>XOR mod 2</code><small>wybrane bity są sumowane</small></div>
  <div class="flow-arrow">→</div>
  <div class="flow-step"><strong>Wyjście</strong><code>c₁(k), c₂(k)</code><small>bity kodowe</small></div>
</div>

Rejestr pamięta wcześniejsze bity, dlatego wynik zależy od bieżącego bitu i historii wejścia. Nadmiarowe bity zwiększają szansę poprawnego odtworzenia informacji po błędach transmisji.

---

## Przykład kodera splotowego `1/2`

<div class="convolutional-circuit">
  <div class="tap input-tap"><code>u(k)</code><small>bieżący bit</small></div>
  <div class="circuit-arrow">→</div>
  <div class="tap"><code>u(k−1)</code><small>opóźnienie 1</small></div>
  <div class="circuit-arrow">→</div>
  <div class="tap"><code>u(k−2)</code><small>opóźnienie 2</small></div>
  <div class="generator-output"><strong>Generator 1</strong><code>c₁(k) = u(k) ⊕ u(k−1) ⊕ u(k−2)</code></div>
  <div class="generator-output"><strong>Generator 2</strong><code>c₂(k) = u(k) ⊕ u(k−2)</code></div>
</div>

W każdej chwili jeden bit wejściowy tworzy dwa bity wyjściowe; stosunek szybkości kodu wynosi więc `1/2`.

---

## Systematyczne a niesystematyczne kodowanie splotowe

- W wersji systematycznej jeden z bitów wyjściowych jest kopią bitu wejściowego.
- W wersji niesystematycznej wszystkie bity wyjściowe są kombinacjami bieżącego i zapamiętanych bitów.
- Oba podejścia są używane zależnie od wymagań systemu i dekodera.

---

## Podsumowanie

- Odległość Hamminga i waga pomagają opisać właściwości kodu.
- Kody transmisyjne mogą wspierać synchronizację i odporność na błędy.
- HDB, „2 z 5” i kody splotowe rozwiązują różne problemy transmisyjne.

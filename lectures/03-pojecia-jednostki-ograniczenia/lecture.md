<!-- .slide: class="title-slide" -->

# Podstawowe pojęcia, jednostki i ograniczenia

Mikołaj Leszczuk

---

## Plan wykładu

- sygnał,
- decybel i jednostki pochodne,
- przepustowość oraz przepływność,
- twierdzenie Kotielnikowa-Shannona,
- prawa Moore'a, Sarnoffa i Metcalfe'a.

---

<!-- .slide: class="section-slide" -->

# Sygnał

---

## Czym jest sygnał?

Sygnał to abstrakcyjny model mierzalnej wielkości zmieniającej się w czasie, generowanej przez zjawisko fizyczne albo system.

- opisujemy go matematycznie, na przykład funkcją czasu,
- może nieść informację,
- umożliwia przepływ strumienia informacji.

---

<!-- .slide: class="section-slide" -->

# Decybel

---

## Decybel: po co?

**dB** to logarytmiczna jednostka miary. Używamy jej, gdy:

- wielkości zmieniają się liniowo w bardzo szerokim zakresie,
- interesują nas zmiany względne,
- porównujemy poziomy rejestrowane przez ludzkie zmysły, np. dźwięk.

---

## Skala logarytmiczna

<div class="packet"><span>−30 dB<br>0,001</span><span>−10 dB<br>0,1</span><span>0 dB<br>1</span><span>10 dB<br>10</span><span>20 dB<br>100</span><span>30 dB<br>1000</span></div>

Dla stosunku wielkości `X`:

`dB = 10 · log10(X)`

---

## Jednostki pochodne

<div class="columns"><div>

Decybel występuje zwykle względem poziomu odniesienia, np.:

- **dBm**: względem 1 mW,
- **dBW**: względem 1 W,
- **dBi**: zysk anteny względem anteny izotropowej,
- **dBµV**: względem 1 µV.

</div><div>

![Znaczenie jednostek dB](media/image1.png)

</div></div>

---

<!-- .slide: class="section-slide" -->

# Przepustowość i przepływność

---

## Dwa podobne, ale różne pojęcia

<div class="columns"><div>

**Przepustowość**

Maksymalna ilość informacji, którą może przesłać kanał lub łącze w jednostce czasu. To cecha toru transmisyjnego.

</div><div>

**Przepływność**

Natężenie strumienia danych faktycznie przepływającego przez kanał, ang. *bit rate* lub *bitrate*.

</div></div>

---

## Wspólna jednostka, różne znaczenie

- Obie wielkości wyraża się w bitach na sekundę albo bajtach na sekundę.
- Potocznie przepustowość bywa błędnie nazywana „szybkością” sieci.
- Przepływność może być niższa od przepustowości wskutek protokołów, zakłóceń i obciążenia.

---

<!-- .slide: class="section-slide" -->

# Granice i prawa

---

## Twierdzenie Kotielnikowa-Shannona

<div class="columns"><div>

Jeżeli sygnał ciągły nie ma składowych o częstotliwości równej lub większej niż `B`, można go wiernie odtworzyć z próbek pobranych nie rzadziej niż co:

`1 / (2B)`

Inne nazwy: twierdzenie Whittakera-Nyquista-Kotielnikowa-Shannona albo twierdzenie o próbkowaniu.

</div><div>

![Pasmo sygnału ograniczone do B](media/image2.png)

</div></div>

---

## Prawo Moore'a

<div class="columns"><div>

- Prawo empiryczne opisujące wykładniczy wzrost ekonomicznie optymalnej liczby tranzystorów w układach scalonych.
- Gordon Moore w 1965 r. zaobserwował podwojenie co około 12 miesięcy.
- W późniejszym ujęciu przyjmowano około 24 miesięcy.

</div><div>

![Wykres liczby tranzystorów](media/image3.png)

</div></div>

---

## Gordon Moore i rozwój układów scalonych

<div class="columns"><div>

![Ekspozycja poświęcona prawu Moore'a](media/image4.png)

</div><div>

![Gordon Moore](media/image6.jpg)

</div></div>

---

## Dlaczego wzrost ma znaczenie?

<div class="columns"><div>

Wzrost liczby tranzystorów umożliwiał budowę coraz szybszych, mniejszych i tańszych urządzeń. Prawo Moore'a nie jest prawem fizyki, lecz użytecznym opisem długotrwałego trendu technologicznego.

</div><div>

![Prezentacja prawa Moore'a](media/image5.png)

</div></div>

---

## Prawo Sarnoffa

<div class="columns"><div>

> Wartość sieci telekomunikacyjnej jest proporcjonalna do liczby jej odbiorców.

Dotyczy przede wszystkim sieci nadawczych: radia, telewizji i portali, w których każdy nowy odbiorca zwiększa wartość sieci liniowo.

</div><div>

![Prawo Sarnoffa](media/image7.jpeg)

</div></div>

---

## Prawo Metcalfe'a

<div class="columns"><div>

> Użyteczność sieci telekomunikacyjnej rośnie proporcjonalnie do kwadratu liczby podłączonych urządzeń lub użytkowników.

</div><div>

![Prawo Metcalfe'a](media/image9.jpeg)

</div></div>

---

## Skąd bierze się wzrost kwadratowy?

<div class="columns"><div>

- Dla dwóch użytkowników istnieje jedno połączenie.
- Każdy kolejny użytkownik może połączyć się z wszystkimi wcześniejszymi.
- Liczba potencjalnych relacji rośnie znacznie szybciej niż sama liczba użytkowników.

<div class="packet"><span>2 użytkowników<br>1 połączenie</span><span>3 użytkowników<br>3 połączenia</span><span>4 użytkowników<br>6 połączeń</span><span>n użytkowników<br>n(n−1)/2 połączeń</span></div>

</div><div>

![Liczba połączeń w sieci](media/image8.png)

</div></div>

---

## Podsumowanie

- Sygnał jest modelem wielkości niosącej informację.
- Decybel wygodnie opisuje szerokie zakresy i zmiany względne.
- Przepustowość jest właściwością kanału, przepływność opisuje faktyczny strumień danych.
- Próbkowanie, rozwój układów oraz wartość sieci mają swoje rozpoznawalne prawa i ograniczenia.

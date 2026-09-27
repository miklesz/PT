<!-- .slide: class="title-slide" -->

# Media transmisyjne: światłowody

---

## Plan wykładu

- czym jest światłowód,
- zalety transmisji optycznej,
- światłowody jedno- i wielomodowe,
- tłumienie, zgięcia i dyspersja.

---

<!-- .slide: class="section-slide" -->

# Światłowód

---

## Co to jest światłowód?

<div class="fiber-layout"><div>

<div class="fiber-cross-section"><div class="fiber-cladding"><div class="fiber-core"></div></div></div>
<div class="fiber-legend">
  <span class="coating">Powłoka ochronna</span><span class="cladding">Płaszcz</span><span class="core">Rdzeń</span>
</div>

</div><div>

Światłowód prowadzi światło wewnątrz włókna o odpowiednio dobranych właściwościach optycznych.

Informacja jest kodowana jako modulowana wiązka światła, zwykle pochodząca z lasera albo diody LED (*light-emitting diode*, dioda elektroluminescencyjna).

</div></div>

---

## Dlaczego transmisja optyczna?

<div class="columns"><div>

- bardzo duża przepustowość,
- małe tłumienie na dużych odległościach,
- odporność na zakłócenia elektromagnetyczne,
- brak emisji elektromagnetycznej,
- małe rozmiary i masa kabla.

</div><div>

![Zalety światłowodu](media/zalety-swiatlowodu.png)

</div></div>

---

## Ewolucja światłowodów

Wczesne próby prowadzenia promieniowania podczerwonego wykorzystywały metalowe rurki o wypolerowanych ściankach. Współczesne światłowody to dielektryczne włókna, najczęściej szklane, z warstwami ochronnymi.

Włókno prowadzi światło dlatego, że współczynnik załamania płaszcza jest mniejszy niż współczynnik załamania rdzenia.

---

## Materiał: ewolucja światłowodów

<video controls preload="metadata"><source src="media/slide-007-media1.mp4" type="video/mp4"></video>

---

## Laser jako źródło światła

<div class="columns"><div>

Laser może dostarczyć intensywną, łatwą do modulowania wiązkę światła. W światłowodzie sygnał pozostaje prowadzony przez rdzeń dzięki całkowitemu wewnętrznemu odbiciu.

</div><div>

![Światło prowadzone we włóknie](media/laser-wlokno.png)
![Złącze światłowodowe](media/laser-zlacza.png)

</div></div>

---

## Materiał: laser jako źródło światła

<video controls preload="metadata"><source src="media/slide-009-media2.mp4" type="video/mp4"></video>

---

## Odporność na błędy

<video controls preload="metadata"><source src="media/slide-012-media3.mp4" type="video/mp4"></video>

---

## Zasięg i trwałość łącza optycznego

- Małe tłumienie pozwala budować odcinki bez wzmacniacza liczące dziesiątki kilometrów; w starszych przykładach podawano **80–100 km**. Rzeczywisty zasięg zależy od włókna, długości fali, nadajnika i budżetu mocy.
- Projektowa trwałość kabla bywa liczona w dekadach; oryginalny wykład podawał **25 lat**, lecz nie jest to gwarancja dla każdego kabla i sposobu instalacji.
- Jedno włókno może przenosić wiele kanałów i usług, a sygnał optyczny można wzmacniać.

---

<!-- .slide: class="section-slide" -->

# Mody propagacji

---

## Podział światłowodów

<div class="columns"><div>

**Wielomodowe**

Wiele dróg propagacji światła w rdzeniu. Typowe dla krótszych odcinków i sieci lokalnych.

</div><div>

**Jednomodowe**

Jedna dominująca droga propagacji. Mała dyspersja i zastosowanie w długich łączach.

</div><div>

![Włókna jedno- i wielomodowe](media/typy-swiatlowodow.png)

</div></div>

---

## Wielomodowe: gradientowe i skokowe

<div class="columns"><div>

**Gradientowe**

Współczynnik załamania zmienia się stopniowo, co ogranicza różnice czasu przejścia modów.

</div><div>

**Skokowe**

Współczynnik zmienia się skokowo na granicy rdzenia i płaszcza; różne drogi mają wyraźnie różną długość.

</div></div>

---

## Materiał: wielomodowość

<video controls preload="metadata"><source src="media/slide-021-media4.mp4" type="video/mp4"></video>

---

## Światłowód jednomodowy

- Ma mały rdzeń i prowadzi zasadniczo jeden mod.
- Ogranicza dyspersję międzymodową.
- Jest podstawą łączy dalekiego zasięgu i sieci szkieletowych.

---

## Materiał: światłowód jednomodowy

<video controls preload="metadata"><source src="media/slide-025-media5.mp4" type="video/mp4"></video>

---

<!-- .slide: class="section-slide" -->

# Straty i tłumienie

---

## Tłumienie sygnału

Tłumienie określa, o ile maleje moc optyczna sygnału podczas propagacji. W praktyce liczą się między innymi:

- absorpcja w materiale,
- rozpraszanie,
- niedoskonałości włókna,
- zgięcia i połączenia.

---

## Straty materiałowe

Szkło kwarcowe (`SiO₂`) nie jest idealnie jednorodne. Fluktuacje gęstości i współczynnika załamania rozpraszają światło, a domieszki mogą je pochłaniać.

W oryginalnym wykładzie rozróżniono **rozpraszanie Rayleigha** oraz **absorpcję**. Ich wpływ zależy od długości fali, dlatego dobiera się odpowiednie okna transmisyjne.

---

## Zanieczyszczenia i okna transmisyjne

Zanieczyszczenia metalami, m.in. żelazem, miedzią i chromem, oraz grupy `OH⁻` zwiększają absorpcję. Jej wartość zależy od rodzaju i stężenia domieszek.

Typowe okna transmisyjne leżą w pobliżu **850 nm**, **1310 nm** i **1550 nm**. Dobór okna uwzględnia zarówno tłumienie, jak i dyspersję oraz dostępne źródła światła.

---

## Rozpraszanie Rayleigha: przykład

Oryginalny wykład podaje dla czystego szkła kwarcowego orientacyjne składowe tłumienia od rozpraszania:

| Długość fali | 850 nm | 1300 nm | 1550 nm |
| --- | ---: | ---: | ---: |
| Tłumienie Rayleigha | 1,53 dB/km | 0,28 dB/km | 0,138 dB/km |

Są to wartości **samego rozpraszania**, a nie pełne tłumienie dowolnego rzeczywistego kabla. Absorpcja i niedoskonałości zwiększają straty.

---

## Straty falowodowe

<video controls preload="metadata"><source src="media/slide-031-media6.mp4" type="video/mp4"></video>

---

## Mikro-zgięcia

- Niewielkie, miejscowe odkształcenia włókna.
- Mogą wynikać z nacisku, naprężeń i niedoskonałości konstrukcji kabla.
- Powodują dodatkową utratę mocy.

---

## Materiał: mikro-zgięcia

<video controls preload="metadata"><source src="media/slide-033-media7.mp4" type="video/mp4"></video>

---

## Makro-zgięcia

- Widoczne zgięcia kabla o zbyt małym promieniu.
- Część światła przestaje spełniać warunek całkowitego wewnętrznego odbicia i ucieka z rdzenia.

---

## Materiał: makro-zgięcia

<video controls preload="metadata"><source src="media/slide-035-media8.mp4" type="video/mp4"></video>

---

## Inne przyczyny strat

- koncentracja zanieczyszczeń w szkle,
- straty na złączach i spawach,
- niewłaściwy montaż,
- starzenie materiału i wpływ środowiska.

---

## Materiał: tłumienie

<video controls preload="metadata"><source src="media/slide-039-media9.mp4" type="video/mp4"></video>

---

<!-- .slide: class="section-slide" -->

# Dyspersja

---

## Czym jest dyspersja?

Dyspersja rozszerza impuls w czasie. Gdy sąsiednie impulsy zaczynają się nakładać, rośnie ryzyko błędnej interpretacji danych.

---

## Typy dyspersji

<div class="columns"><div>

**Międzymodowa**

Różne mody w światłowodzie wielomodowym przemierzają różne drogi i docierają w różnym czasie.

</div><div>

**Chromatyczna**

Różne długości fali poruszają się z różną prędkością; obejmuje dyspersję materiałową i falowodową.

</div></div>

---

## Dyspersja chromatyczna

- **Materiałowa:** współczynnik załamania zależy od długości fali.
- **Falowodowa:** właściwości propagacji wynikają także z geometrii rdzenia i płaszcza.
- Obie ograniczają maksymalną odległość i przepływność łącza.

---

## Dyspersja materiałowa

Współczynnik załamania szkła zależy od długości fali. Źródło emituje pewien zakres długości fal, więc składowe impulsu docierają do odbiornika w różnym czasie.

W typowym włóknie krzemionkowym dyspersja materiałowa jest niewielka w okolicy **1300 nm**. Nie oznacza to, że cała dyspersja chromatyczna włókna wynosi tam zero.

---

## Dyspersja falowodowa

Część pola optycznego propaguje także w płaszczu. Udział tej części zmienia się z długością fali, dlatego geometria rdzenia i płaszcza wpływa na opóźnienie składowych impulsu.

Dyspersję chromatyczną można modyfikować przez konstrukcję włókna; w praktyce rozpatruje się sumę wkładów materiałowego i falowodowego.

---

## Materiały: dyspersja

<video controls preload="metadata"><source src="media/slide-051-media10.mp4" type="video/mp4"></video>

---

## Materiał: dyspersja chromatyczna

<video controls preload="metadata"><source src="media/slide-052-media11.mp4" type="video/mp4"></video>

---

## Podsumowanie

- Światłowód daje dużą przepustowość i odporność na zakłócenia.
- Wybór włókna jedno- albo wielomodowego jest związany z odległością i wymaganiami łącza.
- Tłumienie i dyspersja są podstawowymi ograniczeniami transmisji optycznej.

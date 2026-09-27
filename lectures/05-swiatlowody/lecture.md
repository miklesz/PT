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
Jest **falowodem optycznym**: prowadzi promieniowanie świetlne wzdłuż rdzenia.

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

## Odporność i tłumienie światłowodu

- Światłowód jest odporny na zewnętrzne zakłócenia elektromagnetyczne, bo sygnał przenosi światło, a nie prąd w przewodzie.
- Dla typowego włókna jednomodowego przy długości fali około 1550 nm tłumienie może wynosić około **0,2 dB/km**. Nie jest to wartość stała dla każdego włókna i każdej długości fali.
- Niska stopa błędów zależy także od nadajnika, odbiornika, połączeń i zapasu mocy całego toru.

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

**Wielomodowe (MMF, *multimode fiber*)**

Wiele dróg propagacji światła w rdzeniu. Typowe dla krótszych odcinków i sieci lokalnych.
W omawianych przykładach średnica rdzenia wynosi **50 lub 62,5 µm**.

</div><div>

**Jednomodowe (SMF, *single-mode fiber*)**

Jedna dominująca droga propagacji. Mała dyspersja i zastosowanie w długich łączach.
Średnica rdzenia jest znacznie mniejsza, w przybliżeniu **5–10 µm**.

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

## Dlaczego profil gradientowy pomaga?

- Rdzeń ma warstwy o różnym domieszkowaniu: współczynnik załamania jest największy przy osi i maleje ku płaszczowi.
- Promień biegnący dalej od osi pokonuje dłuższą drogę, ale w obszarze o mniejszym współczynniku załamania rozchodzi się szybciej.
- Czasy przejścia różnych modów stają się do siebie bardziej zbliżone, co ogranicza dyspersję międzymodową.

---

## Bieg promieni: włókno gradientowe

<img src="media/image9.png" alt="Łukowe drogi promieni we włóknie gradientowym" height="390">

---

## Dlaczego profil skokowy rozmywa impuls?

W rdzeniu skokowym promienie wprowadzone pod różnymi kątami odbijają się na granicy rdzenia i płaszcza. W tym samym materiale poruszają się z podobną prędkością, lecz pokonują różne długości drogi.

Docierają więc do końca włókna w różnym czasie. Poszerzenie impulsu ogranicza odstęp między kolejnymi impulsami, a przez to przepływność i zasięg łącza.

---

## Bieg promieni: włókno skokowe

<img src="media/image10.png" alt="Zygzakowate drogi promieni we włóknie skokowym" height="390">

---

## Materiał: wielomodowość

<video controls preload="metadata"><source src="media/slide-021-media4.mp4" type="video/mp4"></video>

---

## Światłowód jednomodowy

- Ma mały rdzeń i prowadzi zasadniczo jeden mod.
- Ogranicza dyspersję międzymodową.
- W typowych łączach wykorzystuje źródło laserowe; odbiornik rejestruje mod podstawowy.
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

Źródłem strat są odstępstwa od idealnej geometrii włókna:

- zmiany średnicy rdzenia,
- nierównomierny rozkład współczynnika załamania,
- lokalne deformacje i zgięcia włókna.

Szczególnie ważne są mikro- i makro-zgięcia.

---

## Materiał: straty falowodowe

<video controls preload="metadata"><source src="media/slide-031-media6.mp4" type="video/mp4"></video>

---

## Mikro-zgięcia

- Niewielkie, miejscowe odkształcenia włókna.
- Mogą wynikać z nacisku, naprężeń i niedoskonałości konstrukcji kabla.
- Mogą powstawać podczas produkcji włókna lub późniejszego montażu.
- Powodują mieszanie modów i ucieczkę części światła do płaszcza, czyli dodatkową utratę mocy.
- We włóknie jednomodowym zaburzają rozkład pola modu podstawowego i również mogą zwiększać tłumienie.

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
- straty na złączach i spawach, zwłaszcza przy przesunięciu osi, rozsunięciu lub kątowym niedopasowaniu czół włókien,
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

## Dyspersja międzymodowa

W rdzeniu wielomodowym impuls jest sumą modów biegnących różnymi drogami. Włókno skokowe daje im szczególnie różne czasy przejścia, więc impuls na wyjściu staje się szerszy i zwykle słabszy.

Włókno gradientowe ogranicza tę różnicę czasów, a dzięki temu pozwala zwiększyć użyteczne pasmo transmisji. Zniekształcenie rośnie z długością włókna.

---

## Dyspersja chromatyczna

- **Materiałowa:** współczynnik załamania zależy od długości fali.
- **Falowodowa:** właściwości propagacji wynikają także z geometrii rdzenia i płaszcza.
- Obie ograniczają maksymalną odległość i przepływność łącza.
- Występuje zarówno we włóknach jednomodowych, jak i wielomodowych; w tych drugich dochodzi także dyspersja międzymodowa.

---

## Dyspersja materiałowa

Współczynnik załamania szkła zależy od długości fali. Źródło emituje pewien zakres długości fal, więc składowe impulsu docierają do odbiornika w różnym czasie.

W typowym włóknie krzemionkowym dyspersja materiałowa jest niewielka w okolicy **1300 nm**. Nie oznacza to, że cała dyspersja chromatyczna włókna wynosi tam zero.

---

## Dlaczego zmieniano długość fali?

Pierwsze systemy pracowały w okolicy **830–900 nm**. Przejście w okolice **1300 nm** ograniczało dyspersję materiałową, a rozwój produkcji włókien zmniejszał tam tłumienie. Później zaczęto szeroko wykorzystywać okolice **1550 nm**, gdzie tłumienie szkła kwarcowego jest bardzo małe.

Oryginalny wykład ilustrował tę historię wartościami około **3–5 dB/km** przy 850 nm, **0,5–1 dB/km** przy 1300 nm i **0,2 dB/km** przy 1550 nm. To przykłady historycznych włókien, a nie parametry gwarantowane dla każdego współczesnego łącza.

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

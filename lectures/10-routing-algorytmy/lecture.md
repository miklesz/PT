<!-- .slide: class="title-slide" -->

# Routing: algorytmy

---

## Plan wykładu

- routing i rola rutera,
- warstwa sieciowa,
- algorytm Dijkstry,
- Ford-Fulkerson i Dinic,
- związek algorytmów z protokołami warstwy sieciowej.

---

## Routing

Routing to wybór drogi, którą pakiet ma dotrzeć do sieci lub hosta docelowego. Ruter przekazuje pakiety między różnymi sieciami na podstawie tablicy routingu.

---

## Ruter

- odbiera pakiet przez interfejs wejściowy,
- analizuje adres docelowy,
- wybiera trasę zgodnie z tablicą routingu i metryką,
- przekazuje pakiet przez właściwy interfejs wyjściowy.

<div class="routing-path" role="img" aria-label="Pakiet przechodzi z sieci A przez ruter R1, sieć tranzytową B i ruter R2 do sieci C.">
  <div class="routing-network source"><strong>Sieć A</strong><small>źródłowa</small></div>
  <div class="routing-arrow">→<small>pakiet</small></div>
  <div class="routing-router"><strong>R1</strong><small>ruter</small></div>
  <div class="routing-arrow">→</div>
  <div class="routing-network transit"><strong>Sieć B</strong><small>tranzytowa</small></div>
  <div class="routing-arrow">→</div>
  <div class="routing-router"><strong>R2</strong><small>ruter</small></div>
  <div class="routing-arrow">→</div>
  <div class="routing-network destination"><strong>Sieć C</strong><small>docelowa</small></div>
</div>

---

## Warstwa sieciowa

Jej zadania obejmują adresowanie logiczne, wybór trasy, przekazywanie pakietów między sieciami oraz obsługę problemów z dostarczeniem danych.

W Internecie kluczowym protokołem tej warstwy jest IP.

---

## Tablica routingu

| Prefiks docelowy | Następny skok | Interfejs | Metryka |
| --- | --- | --- | --- |
| `10.0.0.0/24` | bezpośrednio | LAN 1 | 0 |
| `192.0.2.0/24` | `10.0.0.2` | LAN 1 | 10 |
| domyślna | `10.0.0.1` | WAN | 100 |

Najbardziej szczegółowy pasujący prefiks ma pierwszeństwo.

---

<!-- .slide: class="section-slide" -->

# Algorytm Dijkstry

---

## Edsger W. Dijkstra (1930–2002)

<div class="columns"><div>

![Edsger W. Dijkstra](media/image1.png)

</div><div>

Edsger W. Dijkstra opisał algorytm najkrótszej ścieżki w 1959 roku.

W routingu algorytm ten jest podstawą obliczeń SPF w protokołach stanu łącza, takich jak OSPF.

</div></div>

---

## Problem najkrótszej ścieżki

Mamy graf z nieujemnymi wagami krawędzi. Celem jest znalezienie najkrótszej drogi z węzła źródłowego do pozostałych węzłów.

Wagi mogą oznaczać koszt, opóźnienie, liczbę skoków lub inną metrykę.

---

## Dijkstra: kroki

1. Nadaj źródłu odległość `0`, pozostałym nieskończoność.
2. Wybierz nieodwiedzony węzeł o najmniejszej znanej odległości.
3. Zaktualizuj odległości jego sąsiadów przez relaksację krawędzi.
4. Oznacz węzeł jako odwiedzony.
5. Powtarzaj, aż nie ma osiągalnych węzłów.

---

## Dijkstra: kolejne iteracje

<div class="algorithm-demo dijkstra-demo">
  <svg viewBox="0 0 760 300" role="img" aria-label="Graf do demonstracji kolejnych iteracji algorytmu Dijkstry.">
    <g class="algo-edge" data-edge="sa"><line x1="95" y1="160" x2="220" y2="80"/><text x="154" y="108">15</text></g>
    <g class="algo-edge" data-edge="sd"><line x1="95" y1="160" x2="220" y2="240"/><text x="154" y="222">9</text></g>
    <g class="algo-edge" data-edge="da"><line x1="250" y1="218" x2="250" y2="102"/><text x="264" y="164">4</text></g>
    <g class="algo-edge" data-edge="dc"><line x1="278" y1="230" x2="380" y2="173"/><text x="328" y="191">2</text></g>
    <g class="algo-edge" data-edge="ac"><line x1="278" y1="91" x2="380" y2="147"/><text x="328" y="108">7</text></g>
    <g class="algo-edge" data-edge="cb"><line x1="430" y1="147" x2="532" y2="91"/><text x="480" y="108">6</text></g>
    <g class="algo-edge" data-edge="ab"><line x1="280" y1="80" x2="530" y2="80"/><text x="405" y="69">6</text></g>
    <g class="algo-edge" data-edge="bt"><line x1="580" y1="91" x2="665" y2="147"/><text x="624" y="108">5</text></g>
    <g class="algo-node" data-node="s"><circle cx="70" cy="160" r="25"/><text class="node-name" x="70" y="166">s</text><text class="node-distance" x="70" y="205">0</text></g>
    <g class="algo-node" data-node="a"><circle cx="250" cy="80" r="25"/><text class="node-name" x="250" y="86">a</text><text class="node-distance" x="250" y="125">∞</text></g>
    <g class="algo-node" data-node="d"><circle cx="250" cy="240" r="25"/><text class="node-name" x="250" y="246">d</text><text class="node-distance" x="250" y="285">∞</text></g>
    <g class="algo-node" data-node="c"><circle cx="405" cy="160" r="25"/><text class="node-name" x="405" y="166">c</text><text class="node-distance" x="405" y="205">∞</text></g>
    <g class="algo-node" data-node="b"><circle cx="555" cy="80" r="25"/><text class="node-name" x="555" y="86">b</text><text class="node-distance" x="555" y="125">∞</text></g>
    <g class="algo-node" data-node="t"><circle cx="690" cy="160" r="25"/><text class="node-name" x="690" y="166">t</text><text class="node-distance" x="690" y="205">∞</text></g>
  </svg>
  <div class="algorithm-controls"><button class="dijkstra-prev" type="button" title="Poprzednia iteracja" aria-label="Poprzednia iteracja">←</button><strong class="dijkstra-caption"></strong><button class="dijkstra-next" type="button" title="Następna iteracja" aria-label="Następna iteracja">→</button></div>
  <p class="algorithm-hint">Klikaj strzałki, aby przejść przez kolejne iteracje.</p>
  <p class="dijkstra-explanation"></p>
</div>

---

## Przykład relaksacji

Jeśli bieżący koszt do `A` wynosi `4`, a krawędź `A → B` ma wagę `3`, kandydat dla `B` wynosi `7`.

`dist(B) = min(dist(B), dist(A) + w(A,B))`

`w(A,B)` to **waga krawędzi** prowadzącej z `A` do `B` (w tym przykładzie: `3`).

---

## Właściwości Dijkstry

- Działa dla wag nieujemnych.
- Po wyborze węzła o najmniejszym koszcie jego wynik jest ostateczny.
- Stanowi podstawę algorytmów stanu łącza, takich jak SPF w OSPF.

---

<!-- .slide: class="section-slide" -->

# Przepływ w sieci

---

## Ford-Fulkerson

Ford-Fulkerson rozwiązuje problem **maksymalnego przepływu**, a nie najkrótszej ścieżki.

- Każda krawędź ma pojemność.
- Szukamy ścieżek powiększających od źródła do ujścia.
- Zwiększamy przepływ o minimalną wolną pojemność na znalezionej ścieżce.

---

## Ford-Fulkerson: ścieżka powiększająca

<div class="algorithm-demo flow-demo">
  <div class="flow-lab">
  <svg viewBox="0 0 700 270" role="img" aria-label="Sieć przepływowa z węzłami s, a, b, c, d i t.">
    <defs><marker id="flow-arrow" markerUnits="userSpaceOnUse" markerWidth="9" markerHeight="9" refX="7" refY="4.5" orient="auto"><path d="M0,0 L8,4.5 L0,9 Z"/></marker></defs>
    <g class="flow-edge" data-edge="sa"><line x1="88" y1="150" x2="234" y2="82" marker-end="url(#flow-arrow)"/><text x="158" y="103">3</text></g>
    <g class="flow-edge" data-edge="sc"><line x1="88" y1="155" x2="234" y2="218" marker-end="url(#flow-arrow)"/><text x="158" y="207">2</text></g>
    <g class="flow-edge" data-edge="ab"><line x1="275" y1="92" x2="405" y2="92" marker-end="url(#flow-arrow)"/><text x="340" y="80">3</text></g>
    <g class="flow-edge" data-edge="ad"><line x1="270" y1="105" x2="410" y2="210" marker-end="url(#flow-arrow)"/><text x="338" y="172">5</text></g>
    <g class="flow-edge" data-edge="cd"><line x1="270" y1="220" x2="410" y2="220" marker-end="url(#flow-arrow)"/><text x="340" y="209">1</text></g>
    <g class="flow-edge" data-edge="bt"><line x1="445" y1="96" x2="594" y2="145" marker-end="url(#flow-arrow)"/><text x="520" y="108">4</text></g>
    <g class="flow-edge" data-edge="dt"><line x1="445" y1="208" x2="594" y2="158" marker-end="url(#flow-arrow)"/><text x="520" y="191">7</text></g>
    <g class="flow-node source"><circle cx="65" cy="155" r="26"/><text x="65" y="162">s</text></g><g class="flow-node"><circle cx="250" cy="80" r="26"/><text x="250" y="87">a</text></g><g class="flow-node"><circle cx="250" cy="220" r="26"/><text x="250" y="227">c</text></g><g class="flow-node"><circle cx="430" cy="80" r="26"/><text x="430" y="87">b</text></g><g class="flow-node"><circle cx="430" cy="220" r="26"/><text x="430" y="227">d</text></g><g class="flow-node sink"><circle cx="620" cy="155" r="26"/><text x="620" y="162">t</text></g>
  </svg>
  <div class="flow-matrix-panel">
    <strong>Macierz pojemności</strong>
    <small>wiersz: skąd, kolumna: dokąd</small>
    <table class="flow-matrix" aria-label="Macierz pojemności krawędzi">
      <thead><tr><th></th><th>s</th><th>a</th><th>b</th><th>c</th><th>d</th><th>t</th></tr></thead>
      <tbody>
        <tr><th>s</th><td>–</td><td data-edge="sa">3</td><td>0</td><td data-edge="sc">2</td><td>0</td><td>0</td></tr>
        <tr><th>a</th><td>0</td><td>–</td><td data-edge="ab">3</td><td>0</td><td data-edge="ad">5</td><td>0</td></tr>
        <tr><th>b</th><td>0</td><td>0</td><td>–</td><td>0</td><td>0</td><td data-edge="bt">4</td></tr>
        <tr><th>c</th><td>0</td><td>0</td><td>0</td><td>–</td><td data-edge="cd">1</td><td>0</td></tr>
        <tr><th>d</th><td>0</td><td>0</td><td>0</td><td>0</td><td>–</td><td data-edge="dt">7</td></tr>
        <tr><th>t</th><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>–</td></tr>
      </tbody>
    </table>
  </div>
  </div>
  <div class="algorithm-controls"><button class="flow-prev" type="button" title="Poprzedni krok" aria-label="Poprzedni krok">←</button><strong class="flow-caption"></strong><button class="flow-next" type="button" title="Następny krok" aria-label="Następny krok">→</button></div>
  <p class="algorithm-hint">Klikaj strzałki, aby śledzić wybór ścieżki i odpowiadające mu pola macierzy.</p>
  <p class="flow-explanation"></p>
</div>

---

## Sieć rezydualna

Po przesłaniu części przepływu pozostaje sieć rezydualna:

- pokazuje, ile przepływu można jeszcze wysłać,
- zawiera też krawędzie wsteczne, pozwalające skorygować wcześniejszą decyzję.

---

## Dinic

Algorytm Dinica usprawnia znajdowanie maksymalnego przepływu:

1. buduje graf poziomów algorytmem BFS,
2. wyszukuje przepływ blokujący w tym grafie,
3. powtarza do braku ścieżki z źródła do ujścia.

---

## Dinic: graf poziomów

<div class="algorithm-demo dinic-demo">
  <svg viewBox="0 0 760 250" role="img" aria-label="Graf poziomów algorytmu Dinica: źródło, dwa poziomy pośrednie i ujście.">
    <g class="level-band"><rect x="15" y="25" width="105" height="190"/><text x="67" y="48">poziom 0</text></g><g class="level-band"><rect x="175" y="25" width="145" height="190"/><text x="247" y="48">poziom 1</text></g><g class="level-band"><rect x="390" y="25" width="145" height="190"/><text x="462" y="48">poziom 2</text></g><g class="level-band"><rect x="635" y="25" width="105" height="190"/><text x="687" y="48">poziom 3</text></g>
    <g class="dinic-edge highlighted"><line x1="102" y1="125" x2="210" y2="83"/><text x="154" y="91">5</text></g><g class="dinic-edge highlighted"><line x1="102" y1="125" x2="210" y2="167"/><text x="154" y="169">5</text></g><g class="dinic-edge highlighted"><line x1="280" y1="83" x2="425" y2="83"/><text x="350" y="71">5</text></g><g class="dinic-edge"><line x1="280" y1="167" x2="425" y2="83"/><text x="350" y="116">5</text></g><g class="dinic-edge highlighted"><line x1="280" y1="167" x2="425" y2="167"/><text x="350" y="155">5</text></g><g class="dinic-edge highlighted"><line x1="495" y1="83" x2="652" y2="125"/><text x="572" y="91">5</text></g><g class="dinic-edge highlighted"><line x1="495" y1="167" x2="652" y2="125"/><text x="572" y="169">5</text></g>
    <g class="dinic-node"><circle cx="80" cy="125" r="22"/><text x="80" y="132">s</text></g><g class="dinic-node"><circle cx="250" cy="80" r="22"/><text x="250" y="87">x</text></g><g class="dinic-node"><circle cx="250" cy="170" r="22"/><text x="250" y="177">y</text></g><g class="dinic-node"><circle cx="465" cy="80" r="22"/><text x="465" y="87">u</text></g><g class="dinic-node"><circle cx="465" cy="170" r="22"/><text x="465" y="177">w</text></g><g class="dinic-node"><circle cx="680" cy="125" r="22"/><text x="680" y="132">t</text></g>
  </svg>
  <p><strong>BFS</strong> wyznacza poziomy. Następnie szukany jest przepływ blokujący wyłącznie po krawędziach prowadzących do kolejnego poziomu.</p>
</div>

---

## Dijkstra, Ford-Fulkerson, Dinic

<div class="comparison-grid">
  <div><strong>Dijkstra</strong>najkrótsza ścieżka<br>minimalny koszt dojścia</div>
  <div><strong>Ford-Fulkerson</strong>maksymalny przepływ<br>największy możliwy przepływ</div>
  <div><strong>Dinic</strong>maksymalny przepływ<br>wydajniejsze przetwarzanie przepływu</div>
</div>

---

## Od algorytmów do protokołów

Algorytmy są modelem decyzji trasowania. Protokoły routingu określają, jak rutery wymieniają informacje, budują widok sieci i aktualizują tablice.

---

## Podsumowanie

- Ruter kieruje pakiety według tablicy routingu.
- Dijkstra znajduje najkrótsze ścieżki przy nieujemnych wagach.
- Ford-Fulkerson i Dinic dotyczą maksymalnego przepływu.
- Następny krok to protokoły routingu używane w rzeczywistych sieciach.

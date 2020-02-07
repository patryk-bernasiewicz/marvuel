# MarVuel

## Krótki opis

Aplikacja wyświetla kafelki z obrazkami superbohaterów i złoczyńców ze świata Marvela. Każdy kafelek można kliknąć i na osobnej stronie przeczytać opis oraz zobaczyć maksymalnie 6 najnowszych komiksów, w których pojawiła się dana postać.

Na stronie głównej funkcjonuje infinite scroll, każda ze "stron" zajmuje 16 kafelków. Wyniki są przechowywane w `localStorage` w ramach cache. Zapytania z uwzględnieniem wyszukiwarki nie są cache'owane.

Część komponentów jest wczytywana techniką lazy loading - np. lista kafelków na stronie głównej lub cała podstrona z opisem postaci.

Szacowany czas pracy nad apką: 12 pełnych godzin. W rzeczywistości: ok. 20 godzin z dużymi przerwami na jedzenie, Netfliksa i gry.

## Wersja Live

Wersja live dostępna jest do podglądu pod adresem [marvuel-patrykb.netlify.com](https://marvuel-patrykb.netlify.com/).

## Instalacja

```
yarn install
```

### Serwowanie

```
yarn serve
```

### Budowanie i minifikacja

```
yarn build
```

### Testy jednostkowe

```
yarn test:unit
```

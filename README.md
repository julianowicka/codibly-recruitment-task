## Opis (PL)

Proste SPA w React + TypeScript prezentujące listę „produktów" (kolory) z publicznego API. Wiersze tabeli mają tło na podstawie pola `color`, a kliknięcie w wiersz otwiera modal ze szczegółami. Filtrowanie po `id` oraz paginacja (5 elementów na stronę).

Domyślne API: https://reqres.in/api/products (pola: `id`, `name`, `year`, `color`, `pantone_value`).

### Jak uruchomić

Szybki start z lokalnym mock API:
```bash
npm install
npm run dev  -  Uruchamia mock API + aplikację równolegle
```

Alternatywnie krok po kroku:
- Wymagany Node 16+ (zalecane LTS)
- Instalacja: `npm install`
- Opcje uruchomienia:
  - `npm start` - start apki
  - `npm run mock-api` lub `npm run start:mock` - Mock API
- Build: `npm run build`
- Testy: `npm test`

### Funkcjonalności

- **Filtrowanie po ID**: Pole akceptuje tylko cyfry, resetuje paginację
- **Paginacja**: Previous/Next dla list (5 elementów/strona), ukryta przy filtrowaniu
- **Modal szczegółów**: Kliknięcie w wiersz tabeli
- **Obsługa błędów**: Wyświetla status i URL przy problemach z API

### Rozwój i testowanie

- `npm run lint` - sprawdź kod (ESLint)  
- `npm run format` - formatowanie (Prettier)
- `npm test` - uruchom testy jednostkowe

---

## Task description:


[LIVE DEMO](https://codibly.herokuapp.com/)

The goal of the task is to implement SPA application with just one view. You should use the below API endpoint to display the paginated list of products. At the top of the view, there should be text input, which allows the user to filter results by id. The input should accept only numbers, other signs should not even appear. Below this input user should see a table displaying the following items’ properties: id, name, and year. Additionally, the background colour of each row should be taken from the colour property. After clicking on a row a modal should be displayed and should present all item data. The table should display 5 items per page. Under the table, there should be a pagination component, which allows switching between pages with “next” and “previous” arrows.

Please remember about handling situations when API endpoint returns a 4XX or 5XX error. In such a case the user should be informed about the error.

Apart from React, the technology stack totally ups to you, the same applies to styling. As a result of the task, we expect a link to a repository on GitHub, GitLab, or bitbucket. Your app should start after running `npm install` & `npm start`.

## Extra requirement (optional):

Please reflect pagination and filtering in the address URL, so users can copy and share the URL with each other.

### API endpoint

- https://reqres.in/api/unknown

### Requirements

- React
- Typescript
- git
- github/gitlab/bitbucket

### Nice to have

- Unit tests
- Redux/Context API or other state management library

## Tips

- per_page field lets you set the number of items per page
- page field lets you set the page number of results
- id field lets you filter results by id
- Proposed styling library(contains also icons): https://mui.com/

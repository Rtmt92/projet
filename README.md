![logo efrei](image.png)

# Simple country API with typescript

## Fonctionalitées principales
- Fonctionalité 1: obtenir des information détaillé d'un pays recherché grace a son nom;

- Fonctionalité 2: obtenir des information détaillé d'un pays recherché grace a son code alpha-2 
(Pour plus d'informations, veuillez consulter [le site suivant ](https://fr.wikipedia.org/wiki/ISO_3166-1)).

- Fonctionalité 3: obtenir des information détaillé d'un pays recherché grace a sa capitale.

(Attention: le nom du pays doit etre en anglais !!!!).

## Instructions d'instalation
1. clonez le depot: `git clone https://github.com`
2. Installez les dependances suivantes: 
    - `npm init -y`
    - `npm install typescript --save-dev`
    - `npx tsc --init`
    - `npm install axios`
    - `npm install @types/express @types/node`
    - `npm install express`


## Configuration requise
- "@types/express": "^4.17.21",
- "@types/node": "^20.11.16",
- "axios": "^1.6.7",
- "express": "^4.18.2"

## Exemples d'utilisation

### Exemple 1 Search France
WARNING: Use english language to interact with the api.This is an example to search information of France.
```bash
`http://localhost:3001/name/france`
```

### Exemple 2 search informations of australia with his capital name
WARNING: Use english language to interact with the api. This is an example to search information of Australia.
```bash
`http://localhost:3001/capital/canberra`
```

### Exemple 3 search a country by his alpha-2 code
WARNING: Use english language to interact with the api. This is an example to search information of Algeria.
```bash
`http://localhost:3000/alpha/dz`
```


[ lien vers l'api](https://restcountries.com/)



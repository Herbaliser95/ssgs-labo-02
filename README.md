# Labo-String: CLI per Utilità su Stringhe

Questo progetto fornisce una base per una semplice Command-Line Interface (CLI) Node.js che offre diverse utilità per la manipolazione di stringhe.


## Funzionalità Principali (Previste)

- Inversione di una stringa.
- Verifica se una stringa è palindroma.
- Troncamento di una stringa a una lunghezza massima specificata.
- Conteggio delle occorrenze di ciascun carattere in una stringa.

## Prerequisiti

Assicurati di avere installato Node.js (versione 16 o superiore) e npm. Puoi verificare la versione di Node.js con il seguente comando:

```
node -v
```

## Installazione

1. Clona la repository:
   ```
   git clone https://github.com/Herbaliser95/labo-string.git
   ```
2. Accedi alla cartella del progetto:
   ```
   cd labo-string
   ```
3. Installa le dipendenze:
   ```
   npm install
   ```

## Uso

Per avviare l'applicazione, utilizza il seguente comando:

```
npm start <numero_funzione> <stringa_input> [parametro_aggiuntivo]
```


Dove `<numero_funzione>` è il numero della funzione che desideri eseguire (1-4), `<stringa_input>` è la stringa su cui vuoi operare e `[parametro_aggiuntivo]` è un parametro facoltativo per la funzione 3, che rappresenta il numero massimo di caratteri dopo il troncamento.

Per eseguire i test, utilizza il comando:

```
npm test
```

## Operazioni disponibili:

1. Inversione di una stringa

2. Verifica se una stringa è palindroma

3. Troncamento di una stringa a una lunghezza massima specificata

4. Conteggio delle occorrenze di ciascun carattere in una stringa

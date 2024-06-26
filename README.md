# ESERCIZIO: Carosello Array di Oggetti

Consegna:
Dato un array di oggetti letterali con:

- url dell'immagine
- titolo
- descrizione
  Creare un carosello come nella foto allegata.

## Milestone 1:

Nel markup allegato rimuoviamo i contenuti statici e usiamo l’array di oggetti letterali per popolare dinamicamente il carosello.
Al click dell'utente sulle frecce verso sinistra o destra, l'immagine attiva con i relativi titolo e testo diventerà visibile.

### Svolgimento:

- rimuovo i contenuti html
- catturo il div container
- per ogni elemento dell'array
  - creo l'elemento comprensivo di foto e descrizione
  - aggiungo gli elementi nel DOM
- gestisco i pulsanti:
  - imposto l'immagine di partenza
  - catturo i bottoni
  - tramite una funzione aggiungo/tolgo la classe active

## Milestone 2:

Aggiungere il **ciclo infinito** del carosello. Ovvero se la miniatura attiva è la prima e l'utente clicca la freccia verso destra, la miniatura che deve attivarsi sarà l'ultima e viceversa per l'ultima miniatura se l'utente clicca la freccia verso sinistra.

## BONUS 1:

Aggiungere le thumbnails (sottoforma di miniatura) ed al click attivare l’immagine corrispondente.

## BONUS 2:

Aggiungere funzionalità di autoplay: dopo un certo periodo di tempo (3 secondi) l’immagine attiva dovrà cambiare alla successiva.

## BONUS 3:

Aggiungere bottoni di start/stop e di inversione del meccanismo di autoplay.

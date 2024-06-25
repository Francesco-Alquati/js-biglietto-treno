Ciao ragazzi,
esercizio di oggi: calcolo del prezzo del biglietto del treno
cartella/repo js-biglietto-treno
Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.
Ricordatevi di fare il file README.md in cui scomponete il problema in sotto problemi
Numero minimo di push: 6
Buon pranzo a dopo.


SCOMPOSIZIONE DEL PROBLEMA 

1 - Creo una variabile per il numero di chilometri percorsi a cui assegno il valore restituito da un prompt;
2 - Creo una variabile per l'età a cui assegno il valore restituito da un prompt;
3 - Creo una variabile il cui valore sarà dato dal calcolo del prezzo fisso al km per i km percorsi;
4 - Creo una variabile per lo sconto a cui assegno il valore 0;
5 - Costruisco la condizione per la variabile età nella quale assegno nuovi valori alla variabile dello sconto in base all'età del
passeggero;
6 - Costruisco la condizione per stabilire il prezzo del biglietto incluso un eventuale sconto;
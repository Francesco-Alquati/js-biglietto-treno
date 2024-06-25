// CHIEDO ALLUTENTE DI INSERIRE IL NUMERO DI KM CHE VUOLE PERCORRERE E LA SUA ETà
let km = prompt('Quanti KM vuoi percorrere?');
let eta = prompt('Quanti anni hai?');

// CALCOLO DEL PREZZO AL KM 
let prezzo = (km * 0.21);
console.log(prezzo);

// CALCOLO DELLO SCONTO PER FASCE DI ETà
let perc_sconto = 0;
if (eta < 18) {
    perc_sconto = ((20 *  prezzo) / 100);
    
}
else if (eta > 65) {
    perc_sconto = ((40 *  prezzo) / 100);
}
console.log(perc_sconto);

// CALCOLO IL PREZZO DEL BIGLIETTO FINALE CON O SENZA SCONTO
let prezzo_finale = prezzo;
if(perc_sconto != 0) {
    prezzo_finale = prezzo - perc_sconto;
    console.log(prezzo_finale);
}

// PREZZO DEL BIGLIETTO 
prezzo_finale = prezzo_finale.toFixed(2);
console.log(prezzo_finale);

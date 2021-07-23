// Pari e Dispari
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.

//  CHIEDO ALL'UTENTE PARI O DISPARI E DI SCEGLIERE UN NUMERO
var scelta_utente = prompt('Scegli pari o dispari');
var numero_utente = parseInt(prompt('inserisci un numero da 1 a 10'));
console.log('utente ha scelto' + ' ' + scelta_utente + ' e il numero' + ' ' + + numero_utente);
// GENERO NUMERO RANDOM PER IL COMPUTER
function numeroRnd (min, max) {
    var numero_pc = Math.floor(Math.random() * (max - min)) + min;
    return numero_pc;
}

var numero_pc = numeroRnd(9, 10);
console.log('il numero random del pc' + ' ' + numero_pc);

// SOMMA DEI DUE NUMERI
var somma = numero_utente + numero_pc;
console.log(somma + ' ' + 'questa è la somma dei due numeri');

// STABILIAMO SE LA SOMMA DEI DUE NUMERI è PARI O DISPARI E VEDIAMO CHI HA VINTO
function vittoria (num) {
    if (num % 2 == 0) {
        return 'Pari vince';
    }else {
        return 'dispari vince';
    }
    
}

var risultato = vittoria(somma);
console.log(risultato);
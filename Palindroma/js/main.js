// Palindroma
// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma

// CHIEDO ALL'UTENTE UNA PAROLA
var parola_utente = prompt('inserisci una parola');
console.log('La parola scelta è' + ' ' + parola_utente);
// CERO UNA FUNZIONE PER CAPIRE SE LA PAROLA INSERITA E' UNA PAROLA PALINDROMA O NO
function palindrome (word1, word2) {
   if (word1 == word2) {
       return 'la parola è palindroma'
   }else{
       return 'la parola non è palindroma'
   }
}

// CREAO ARRAY DA PAROLA UTENTE
var array = parola_utente.split("");
console.log(array);

// CREO ARRAY REVERSE
var array_reverse = array.reverse().join("");
console.log(array_reverse);

var result = palindrome(parola_utente, array_reverse);
console.log(result);


// CHIEDO ALL'UTENTE UNA PAROLA
var parola_utente = prompt('inserisci una parola');
console.log('La parola scelta è' + ' ' + parola_utente);

// CERO UNA FUNZIONE PER CAPIRE SE LA PAROLA INSERITA E' UNA PAROLA PALINDROMA O NO
function reverse (str) {
    var stringa = ''
    for (var i = 0; i < str.length; i++) {
        stringa = str[i] + stringa;
    }
    return stringa

}

function palindrome (word1) {
    if (word1 == reverse(word1)) {
        return 'la parola è palindroma'
    }else{
        return 'la parola non è palindroma'
    }
 }

var result = palindrome(parola_utente);
console.log(result);
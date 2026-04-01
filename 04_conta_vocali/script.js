/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = 'javascript';


// Dichiara la funzione qui.
const contaVocali = word =>{
    let count = 0;
    for(i=0 ; i<word.length ; i++){
        let vocale = word[i].toLowerCase();
        if(vocale === 'a' || vocale === 'e' || vocale === 'o' || vocale === 'i' || vocale === 'u'){
            count++;
        }
    }
    return count;
}

// Invoca la funzione qui e stampa il risultato in console

console.log(contaVocali(word));


//Risultato atteso se si passa 'javascript': 3 (a, a, i)
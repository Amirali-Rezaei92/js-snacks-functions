/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito. 
Il saluto deve essere :
buongiorno se è mattina (fino alle 13), 
buon pomeriggio se è pomeriggio (fino alle 17) 
e buonasera se è sera (oltre le 17)
*/

const nome = 'Mario';


// Dichiara la funzione qui.

const saluta = nome =>{
    let message = '';
    const ora = new Date().getHours();
    if(ora <13){
        message = `Buongiorno ${nome}`;
    }else if(ora<17){
        message = `Buon pomeriggio ${nome}`;
    }else {
        message = `Sera ${nome}`;
    }
    return message;
}

// Invoca la funzione qui e stampa il risultato in console

console.log(saluta(nome));


//Risultato atteso se si passa 'Mario' alle 18: // Buonasera Mario.
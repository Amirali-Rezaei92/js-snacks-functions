/* Scrivi una funzione che accetti un array di nomi e restituisca nuovo un array con le iniziali di ogni parola dell'array fornito */

const names = ["Anna", "Luca", "Marco", "Adele", "Giovanni", "Alessandra"];


// Dichiara la funzione qui.
const prendiIniziali = (names) => {
    const iniziali = [];
    for (let i = 0; i < names.length; i++) {
        const nome = names[i];
        const iniziale = nome[0];
        iniziali.push(iniziale);
    }
    return iniziali;
};

// Invoca la funzione qui e stampa il risultato in console


console.log(prendiIniziali(names));


//Risultato atteso: ["A", "L", "M", "A", "G", "A"]
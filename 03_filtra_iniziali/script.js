/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];


// Dichiara la funzione qui.

const filtraPerLettera = (names)=>{
    const lettera = names[0][0].toLowerCase();
    let risulto = [];
    for(i=1 ; i<names.length ; i++){
        let nome = names[i];
        let iniziale = nome[0];
        if(iniziale.toLowerCase() === lettera){
            risulto.push(nome);
        }
    }
    return risulto;
}


// Invoca la funzione qui e stampa il risultato in console

console.log(filtraPerLettera(names));

//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]


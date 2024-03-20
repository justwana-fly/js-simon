// Visualizzare in pagina 5 numeri casuali ( tra 1 e 100) non duplicati.
function generaNumeriCasuali() {
    const randomsNum = [];
    while (randomsNum.length < 5) {
        const num = Math.floor(Math.random() * 100) + 1;
        if (!randomsNum.includes(num)) {
            randomsNum.push(num);
        }
    }
    return randomsNum;
}

const numeriCasuali = generaNumeriCasuali();
const mioId = document.getElementById("output")
mioId.innerHTML = numeriCasuali

// Da lì parte un timer di 5 secondi.
setTimeout(function() {
    mioId.innerHTML = ""; // Rimuovi il contenuto HTML
}, 5000); // timer 5 sec

 // Funzione per controllare i numeri inseriti dall'utente
 
function controlla() {
    const numeri = [];
    // Recupera i numeri inseriti dall'utente
    numeri.push(parseInt(document.getElementById('numero1').value));
    numeri.push(parseInt(document.getElementById('numero2').value));
    numeri.push(parseInt(document.getElementById('numero3').value));
    numeri.push(parseInt(document.getElementById('numero4').value));
    numeri.push(parseInt(document.getElementById('numero5').value));

    const numeriIndovinati = [];
    // Confronta i numeri inseriti con i numeri casuali
    for (let numero of numeri) {
        if (numeriCasuali.includes(numero)) {
            numeriIndovinati.push(numero);
        }
    }

     // Mostra un messaggio all'utente con i numeri indovinati
    alert("Hai indovinato " + numeriIndovinati.length + " numeri: " + numeriIndovinati.join(", "));
}





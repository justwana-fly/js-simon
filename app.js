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


setTimeout(function() {
    const inputContainer = document.getElementById("input-container");
    inputContainer.innerHTML = `
        <input type="text" id="numero1" class="numero-input" placeholder="Inserisci il primo numero">
        <input type="text" id="numero2" class="numero-input" placeholder="Inserisci il secondo numero">
        <input type="text" id="numero3" class="numero-input" placeholder="Inserisci il terzo numero">
        <input type="text" id="numero4" class="numero-input" placeholder="Inserisci il quarto numero">
        <input type="text" id="numero5" class="numero-input" placeholder="Inserisci il quinto numero">
        <button onclick="controlla()">Controlla</button>
    `;
}, 5000);

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
         const MioRisultato = document.getElementById("risultato");
         MioRisultato.innerHTML = ("Hai indovinato " + numeriIndovinati.length + " numeri: " + numeriIndovinati.join(", "));
        
    }
 


 





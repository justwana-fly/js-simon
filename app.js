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
    // Rimuovi i numeri generati
    numeriCasuali.length = 0;
    mioId.innerHTML = ""; // Rimuovi il contenuto HTML
}, 5000); // timer 5 sec


// Dopo i 30 secondi i numeri scompaiono e l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt() ( o meglio caselle di input).

// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.




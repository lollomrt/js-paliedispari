//Definisco la funzione generatrice di un numero random, intero e compreso tra UN MINIMO ED UN MASSIMO
function numeroRandom(min, max) {
    let numeroComputer = Math.floor(Math.random() * max + 1)
    return numeroComputer
}
//Creo una funzione che mi verifichi se la somma è pari o dispari
function controlloSomma(num) {
    if (num % 2 == 0 ) {
        num = "pari"
        return "pari"
    } else {
        num = "dispari"
        return "dispari"
    }
}
let scelta
let numeroUser

const cta = document.getElementById("cta")
cta.addEventListener ("click", function(){
    //Dare all'utente la possibilità di scegliere tra pari o dispari.
    scelta = document.getElementById("seleziona-pari-dispari").value 
    console.log(scelta)
    
    //Dare all'utente la possibilità di scegliere un numero da 1 a 5.
    numeroUser = parseInt(document.getElementById("numero").value)
    console.log(numeroUser)

    // Richiamo la funzione per la generazione di un numero intero compreso tra 1 e 5
    let numeroComputer = numeroRandom(1,5)
    console.log(numeroComputer)

    //Creao una variabile somma che mi vada a sommare il numero inserito dall'utente ed il numero random generato
    let somma = parseInt(numeroUser + numeroComputer)
    console.log(somma)

    //Richiamo la funzione all'esterno ed assegno il suo valore alla variabile pariOdispari
    let pariOdispari = controlloSomma(somma)
    console.log(pariOdispari)

    //Controllo se l'utente ha vinto:
    //SE ha inserito pari ed esce una somma pari --> Hai vinto!
    if (scelta == "pari" && pariOdispari == "pari"){
        alert("HAI VINTO - LA SOMMA È PARI!")
    } //SE ha inserito dispari ed esce una somma dispari --> Hai vinto!
    else if (scelta == "dispari" && pariOdispari == "dispari"){
        alert("HAI VINTO - LA SOMMA È DISPARI!")
    } //ALTRIMENTI --> Hai perso! 
    else {
        alert("HAI PERSO :(")
    }
})
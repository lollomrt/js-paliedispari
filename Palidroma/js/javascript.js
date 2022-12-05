// Definisco la funzione
function parolaPalindroma(word) 
{
    let parolaPalindroma = parola.toLowerCase().split("").reverse().join("")
    return parolaPalindroma
}
// Creo un prompt per l'inserimento parola
let parola = prompt("Inserisci una parola").toLowerCase()
// Richiamo la funzione
let parolaInversa = parolaPalindroma(parola)
// Confronto le due variabili
if (parola == parolaInversa){
    alert("la parola inserita è Palindroma")
} else {
    alert("La parola inserita NON è Palindroma")
}
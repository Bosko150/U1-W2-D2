/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/
let number1 = 10;
let number2 = 11;
if (number1 > number2) {
  console.log(number1 + " è più grande di " + number2);
} else if (number1 === number2) {
  console.log("i due numeri sono uguali");
} else {
  console.log(number2 + " è più grande di " + number1);
}

/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/

let inputNumber = 4;
if (inputNumber !== 5) {
  console.log("not equal");
}

/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: usa l'operatore modulo)
*/
let divisible = 15;
if (divisible % 5 === 0) {
  console.log(divisible + " è divisibile per 5");
} else {
  console.log(divisible + " non è divisibile per 5");
}

/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

number1 = 2;
number2 = 10;
if (
  number1 === 8 ||
  number2 === 8 ||
  number1 + number2 === 8 ||
  number1 - number2 === 8 ||
  number2 - number1 === 8
) {
  console.log("true");
}

/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

let totalShoppingCart = 45;
if (totalShoppingCart >= 50) {
  console.log("l'ammontare totale è " + totalShoppingCart);
} else {
  totalShoppingCart += 10;
  console.log("l'ammontare totale è " + totalShoppingCart);
}

/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/
totalShoppingCart = 200;
let sale = (totalShoppingCart / 100) * 20;
let totalpromo = totalShoppingCart - sale;
if (totalShoppingCart - sale >= 50) {
  console.log("l'ammontare totale è " + totalpromo);
} else {
  totalpromo += 10;
  console.log("l'ammontare totale è " + totalpromo);
}

/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

let a = 5;
let b = 4;
let c = 8;
if (a > b && a > c && b > c) {
  console.log(a, b, c);
} else if (b > a && b > c && a > c) {
  console.log(b, a, c);
} else if (c > a && c > b && a > b) {
  console.log(c, a, b);
} else if (a > b && a > c && c > b) {
  console.log(a, c, b);
} else if (b > a && b > c && c > a) {
  console.log(b, c, a);
} else if (c > a && c > b && b > a) {
  console.log(c, b, a);
}
/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/

let type = 5;
if (typeof type == "number") {
  console.log("la variabile è un numero");
} else {
  console.log("la variabile non è un numero");
}

/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

let even = 20;
if (even % 2 === 0) {
  console.log(even + " è pari");
} else {
  console.log(even + " è dispari");
}
/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
  let val = 7
  if (val < 10) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }
*/

let val = 15;
if (val < 5) {
  console.log("Meno di 5");
} else if (val < 10) {
  console.log("Meno di 10");
} else if (val >= 10) {
  console.log("Uguale a 10 o maggiore");
}

/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

const me = {
  name: "John",
  lastName: "Doe",
  skills: ["javascript", "html", "css"],
};
me.city = "Toronto";
console.log(me);

/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/

delete me.lastName;
console.log(me);

/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/

me.skills.pop;
console.log(me);

/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/

const emptyarray = [];
emptyarray.push(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
console.log(emptyarray);

/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/

emptyarray.splice(9, 1, 100);
console.log(emptyarray);

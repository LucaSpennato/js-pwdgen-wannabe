// prendiamo prima i dati, const perchè son dati sacrosanti
const userName = prompt (`Inserisci il tuo nome`);

const userSurname = prompt (`Inserisci il tuo cognome`)

const userColor = prompt (`inserisci il tuo colore preferito`);

// const non funziona perchè non è modificabile in alcun modo!
let userFavoriteNumber = prompt (`Inserisci un numero`);
userFavoriteNumber = parseInt(userFavoriteNumber);

// verifichiamo in console
console.log (userName);
console.log (userSurname);
console.log (userColor);
console.log (userFavoriteNumber);
console.log (userSuperSafePassword);

// tests
let currentYear = 2022;

let userAge = prompt (`Inserisci la tua età`);
userAge = parseInt (userAge);

// calcolatore dell'anno di nascita
let userBirthYear = currentYear - userAge;
userBirthYear = parseInt (userBirthYear);


// console
console.log (currentYear);
console.log (userAge);
console.log (userBirthYear);


// calcolo finale
const userSuperSafePassword = userName + userSurname + userColor + userFavoriteNumber;


// mostriamo all'utente la password creata
document.getElementById(`safest-pwd-ever`).innerHTML = userSuperSafePassword;
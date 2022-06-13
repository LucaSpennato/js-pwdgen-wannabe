// prendiamo prima i dati, const perchè son dati sacrosanti
const userName = prompt ('Inserisci il tuo nome');

const userSurname = prompt ('Inserisci il tuo cognome')

const userColor = prompt ('inserisci il tuo colore preferito');

// const non funziona perchè non è modificabile in alcun modo!
let userFavoriteNumber = prompt ('Inserisci un numero');
userFavoriteNumber = parseInt(userFavoriteNumber);

// verifichiamo in console
console.log (userName);
console.log (userSurname);
console.log (userColor);
console.log (userFavoriteNumber);

// tests
let currentYear = 2022;

let userAge = prompt ('Inserisci la tua età');
userAge = parseInt (userAge);

// calcolatore dell'anno di nascita
let userBirthYear = currentYear - userAge;
userBirthYear = parseInt (userBirthYear);

// creiamo una sorta di numero supersicuro combinando userBirthYear, userAge e userFavoriteNumber perchè si
let numberOtronic = ((currentYear - userBirthYear) + (userAge - userFavoriteNumber));

// console
console.log (currentYear);
console.log (userAge);
console.log (userBirthYear);
console.log (numberOtronic);


// calcolo finale
const userSuperSafePassword = userName + userSurname + userColor + numberOtronic;
console.log (userSuperSafePassword);

// mostriamo all'utente la password creata
document.getElementById('safest-pwd-ever').innerHTML = userSuperSafePassword;

// dati utente gelosamente custoditi
document.getElementById('safe-stolen-name').innerHTML = userName;
document.getElementById('safe-stolen-surname').innerHTML = userSurname;
document.getElementById('safe-stolen-birth-year').innerHTML = userBirthYear;

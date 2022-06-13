// prendiamo prima i dati, const perchè son dati sacrosanti
const userName = prompt (`Inserisci il tuo nome`);

const userSurname = prompt (`Inserisci il tuo cognome`)

const userColor = prompt (`inserisci il tuo colore preferito`);

// const non funziona perchè non è modificabile in alcun modo!
let userFavoriteNumber = prompt (`Inserisci un numero`);
userFavoriteNumber = parseInt(userFavoriteNumber);

// let 4 fun
let userSuperSafePassword = userName + userSurname + userColor + userFavoriteNumber;

// verifichiamo in console
console.log (userName);
console.log (userSurname);
console.log (userColor);
console.log (userFavoriteNumber);
console.log (userSuperSafePassword);

// mostriamo all'utente la password creata
document.getElementById(`safest-pwd-ever`).innerHTML = userSuperSafePassword;
// prendiamo prima i dati, const perchè son dati sacrosanti
const userName = prompt (`Inserisci il tuo nome`);

const userSurname = prompt (`Inserisci il tuo cognome`)

const userColor = prompt (`inserisci il tuo colore preferito`);

// verifichiamo in console
console.log (userName);
console.log (userSurname);
console.log (userColor);

// let 4 fun
let userSuperSafePassword = userName + userSurname + userColor;
console.log (userSuperSafePassword);
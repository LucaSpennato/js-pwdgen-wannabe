// prendiamo prima i dati, const perchè son dati sacrosanti
const userName = prompt (`Inserisci il tuo nome`);

const userSurname = prompt (`Inserisci il tuo cognome`)

const userColor = prompt (`inserisci il tuo colore preferito`);


// numbers for more saefty
let variablePasswordNumbersGenerator = (22);
console.log (variablePasswordNumbersGenerator);

// let 4 fun
let userSuperSafePassword = userName + userSurname + userColor + variablePasswordNumbersGenerator;


// verifichiamo in console
console.log (userName);
console.log (userSurname);
console.log (userColor);
console.log (userSuperSafePassword);
// Desenvolva um algoritmo que é capaz de inverter uma palavra.

let word = 'tryber';
let palavraInvertida = "";

for(let i = word.length - 1; i >= 0; i -= 1){
        palavraInvertida = palavraInvertida + word[i];
} console.log(palavraInvertida);
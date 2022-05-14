// Nosso jogo

let gameTurma23 = [4, 57, 17, 8, 28, 33];

// console.log("Bolão da Turma 23:", gameTurma23);

// Números Sorteados

let number1 = Math.floor(Math.random() * 60) + 1;
let number2 = Math.floor(Math.random() * 60) + 1;
let number3 = Math.floor(Math.random() * 60) + 1;
let number4 = Math.floor(Math.random() * 60) + 1;
let number5 = Math.floor(Math.random() * 60) + 1;
let number6 = Math.floor(Math.random() * 60) + 1;

let megaSenaNumbers = [number1, number2, number3, number4, number5, number6];

// console.log("Números Sorteados:", megaSenaNumbers);

let numeroDeAcertos = 0;

for(let index = 0; index < gameTurma23.length; index += 1){
    
    let numeroApostado = gameTurma23[index];
    // console.log("Número Apostado:", gameTurma23[index]);

    for(let gameIndex = 0; gameIndex < megaSenaNumbers.length; gameIndex += 1){
        let = numeroSorteado = megaSenaNumbers[gameIndex];
        // console.log("Mega Sena:", megaSenaNumbers[gameIndex]);

        // console.log(numeroApostado, numeroSorteado);

            if(numeroApostado === numeroSorteado){
                numeroDeAcertos += 1;
            }

    }

}
console.log("Números da sorte:", gameTurma23);
console.log("Números sorteados:", megaSenaNumbers);
console.log("Número de acertos:", numeroDeAcertos);
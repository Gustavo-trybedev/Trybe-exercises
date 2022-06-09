// Crie uma função que receba um número e retorne seu fatorial.
// Ex: 5! = 5x4x3x2x1 = 120

const fatorial = (number) => {
    let result = 1;
    for (let i = 1; i <= number; i += 1) {
        result *= i;
    }
    return result;
}

console.log(fatorial(4));

// Crie uma função que receba uma frase e retorne a maior palavra.
// Ex: "A melhor forma de se prever o futuro é inventar o passado"
// Retorna: "inventar"

const maiorPalavra = (phrase) => {
    const wordArray = phrase.split(' ');
    let max = 0;
    let result = '';
    for (const word of wordArray) {
        if (word.length > max) {
            max = word.length;
            result = word;
        }
    }
    return result;
}

console.log(maiorPalavra('A melhor forma de se prever o futuro é inventar o passado'));

// Crie uma página com um contador de cliques
// Sua página deve conter:
// Um botão ao qual será associado um event listener;
// Uma variável clickCount no arquivo JavaScript que acumule o número de clicks no botão;
// Um campo no HTML que vá atualizando a quantidade de clicks no botão conforme a variável clickCount é atualizada.


const button = document.querySelector('#button');
const counter = document.querySelector('#click-counter');
let clickCount = 0;

button.addEventListener('click', () => { counter.innerHTML = clickCount += 1; });

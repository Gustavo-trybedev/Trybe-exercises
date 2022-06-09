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

// Função 1: Escreva uma função que substitua a letra 'x' em uma frase.
// A função deverá receber um nome por parâmetro;
// Declare dentro da função uma variável com o nome frase, do tipo const e com o valor igual a 'Tryber x aqui!';
// A função deverá retornar uma nova frase onde o x da frase 'Tryber x aqui!' seja substituído pelo nome passado por parâmetro.
// Exemplo:
// Parâmetro: 'Bebeto'
// Retorno: 'Tryber Bebeto aqui!'

const replaceX = (name) => {
    const frase = 'Tryber x aqui!';
    return frase.replace('x', name);
}
console.log(replaceX('Bebeto'));

// Função 2: Escreva uma função que irá receber o retorno da Função 1 por parâmetro e retornará uma nova string.
// A função deverá receber o retorno da Função 1 por parâmetro;
// Declare dentro da função uma variável com o nome skills, do tipo const;
// A variável skills deverá ser um array contendo três strings com tecnologias que você já aprendeu.
// Concatene o valor retornado da Função 1, a frase 'Minhas três principais habilidades são:' e o valor da variável skills.
// Exemplo de retorno:
// Tryber Bebeto aqui!
// Minhas três principais habilidades são:
// JavaScript
// HTML
// CSS

const concat = (name) => {
    const skills = ['JavaScript', 'HTML', 'CSS'];
    return `Tryber ${name} aqui ! Minhas principais habilidades são: ${skills}`;
}
console.log(concat('Bebeto'));
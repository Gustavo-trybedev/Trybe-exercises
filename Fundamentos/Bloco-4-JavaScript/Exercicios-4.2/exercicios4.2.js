let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// 1) Percorra o array imprimindo todos os valores nele contidos com a função console.log();

for(let index = 0; index < numbers.length; index += 1){
    //console.log(numbers[index]);
}

// 2) Some todos os valores contidos no array e imprima o resultado;

let soma = null;

for(index = 0; index < numbers.length; index += 1){
   soma += numbers[index];
   somaTotal = soma;
  
} console.log("A soma de todos os elementos é de: ", somaTotal);


// 3) Calcule e imprima a média aritmética dos valores contidos no array;

let mediaArit = null;

for(index = 0; index < numbers.length; index += 1){

mediaArit = (somaTotal/index)

} console.log("A média aritmética dos elementos é de: ", mediaArit);


// 4) Caso o valor final seja maior que 20, imprima a mensagem: "valor maior que 20". Caso não seja, imprima a mensagem: "valor menor ou igual a 20";

if(mediaArit > 20){
    console.log("Valor maior que 20");
} else{
    console.log("Valor menor ou igual a 20");
};

// 5) 🚀 Utilizando for, descubra qual o maior valor contido no array e imprima-o;

let maiorValor = null;

for(index = 0; index < numbers.length; index += 1){
    maiorValor = Math.max(...numbers);
} console.log("O maior valor da array é o número: ", maiorValor);

// 6) Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado";

let impar = null;

for(index = 0; index < numbers.length; index += 1){
    if(numbers[index]% 2 == 1){
        impar +=1;
    }
}

if(impar === 0){
    console.log("Nenhum valor ímpar encontrado");
} else{
    console.log("A quantidade de númeors ímpares é de: ", impar);
}

// 7) Utilizando for, descubra qual o menor valor contido no array e imprima-o;

let menorValor = null;

for(index = 0; index < numbers.length; index += 1){
    menorValor = Math.min(...numbers);
} console.log("O menor valor da array é o número: ", menorValor);

// 8) Utilizando for, crie um array que vá de 1 até 25 e imprima o resultado;

let n = [];

for(i=1; i <= 25; i += 1){
    n.push(i);
} console.log("Array de 1 a 25: ", n);

// 9) Utilizando o array criado no exercício anterior imprima o resultado da divisão de cada um dos elementos por 2.

let resto = [];

for(j=0; j < n.length; j += 1){
    resto.push(n[j] /2);

} console.log(resto);
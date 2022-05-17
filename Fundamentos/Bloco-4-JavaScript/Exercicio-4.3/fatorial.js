// Crie um algoritmo que retorne o fatorial de 10.

let n = 10
let fatorial = 1;

for(let index = n; index > 1; index -= 1){
    fatorial *= index;
}
console.log(fatorial);
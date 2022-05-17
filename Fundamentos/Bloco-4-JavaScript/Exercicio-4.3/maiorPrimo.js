// Um número primo é aquele divisível apenas por 1 e por ele mesmo. Sabendo disso, escreva um algoritmo que retorne o maior número primo entre 0 e 50.

let primos = new Array();

for(let j = 1; j <= 50; j += 1){
   let contador = 0;
   for(let i = 1; i <= j; i += 1){
       if (j % 1 == 0){
           contador++;
       }
   }

   if (contador == 2){
       primos.push(j)
   }
} 
console.log(primos);
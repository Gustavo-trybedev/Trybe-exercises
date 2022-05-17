// Escreva dois algoritmos: um que retorne a maior palavra deste array e outro que retorne a menor. Considere o número de caracteres de cada palavra.

let array = ['java', 'javascript', 'python', 'html', 'css'];
let maior = "";
let menor = array[0];

for(let i = 0; i < array.length; i += 1){
    if(array[i].length > maior.length){
        maior=array[i];
        
    };

    if (array[i].length < menor.length){
        menor=array[i];
       
    };
}

console.log("maior: " + maior);
console.log("menor: " + menor);

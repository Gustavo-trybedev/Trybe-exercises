const custo = 1200;
const venda = 1850;

let custoReal = custo * 1.2;
let lucro = (venda - custoReal)*1000;

if(custo < 0){
    console.log("ERROR: Valor Inválido");
} else{
    console.log(lucro);
}
let salarioBruto = 8500.67;
let salarioLiquido;
let inss;
let IR;

console.log("Seu salário bruto é de: R$", salarioBruto);

if(salarioBruto <= 1556.94){
    inss = (salarioBruto * 0.08);
    console.log("O INSS descontado será de: R$", inss);
} else if(salarioBruto > 1556.94 && salarioBruto <= 2594.92){
    inss = (salarioBruto * 0.09);
    console.log("O INSS descontado será de: R$", inss);
}else if(salarioBruto > 2594.92 && salarioBruto <= 5189.82){
    inss = (salarioBruto * 0.11);
    console.log("O INSS descontado será de: R$", inss);
}else{
    inss = 570.88;
    console.log("O INSS descontado será de: R$", inss);
}

let salarioBase = salarioBruto - inss;

console.log("O salário base para desconto no IR será de:",salarioBase);

if(salarioBase <= 1903.98){
    console.log("Você está isento do imposto de renda");
} else if(salarioBase > 1903.98 && salarioBase <= 2826.65){
    IR = (salarioBase * 0.075)
    salarioLiquido = ((salarioBase - IR) + (142.80));
} else if(salarioBase > 2826.65 && salarioBase <= 3751.05){
    IR = (salarioBase * 0.15)
    salarioLiquido = ((salarioBase - IR) + (354.80));
} else if(salarioBase > 3751.05 && salarioBase <= 4664.68){
    IR = (salarioBase * 0.225)
    salarioLiquido = ((salarioBase - IR) + (636.13));
} else{
    IR = (salarioBase * 0.275)
    salarioLiquido = ((salarioBase - IR) + (869.36));
}

console.log("O imposto que será descontado do seu salário será de: R$", IR);
console.log("Seu salário líquido, com desconto de INSS e IR será de: R$", salarioLiquido);
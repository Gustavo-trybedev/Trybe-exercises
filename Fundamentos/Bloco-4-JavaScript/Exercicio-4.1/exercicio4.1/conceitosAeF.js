let notaAluno = 60;

if(notaAluno > 100 || notaAluno < 0){
    console.log("ERROR: Valor inválido");
} else if (notaAluno >= 90){
    console.log("Conceito A");
} else if(notaAluno >= 80 && notaAluno < 90){
    console.log("Conceito B");
} else if(notaAluno >= 70 && notaAluno < 80){
    console.log("Conceito C");
} else if(notaAluno >= 60 && notaAluno < 70){
    console.log("Conceito D");
} else if(notaAluno >= 50 && notaAluno < 60){
    console.log("Conceito E");
} else {
    console.log("Conceito F");
};





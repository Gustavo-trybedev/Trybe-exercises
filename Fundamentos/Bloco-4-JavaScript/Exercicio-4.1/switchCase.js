let situaçãoConcurso = "Lista";

switch (situaçãoConcurso){

    case "Aprovada": 
    console.log("Parabéns, você foi aprovado");
    break;
    
    case 'Lista':
        console.log("Você está na nossa lista de espera");
        break;

    case "Reprovado":
        console.log("Você foi reprovado");
        break;

    default:
        console.log("valor não identificado");

}


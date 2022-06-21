function verifyIsNumber(value1, value2) { // função que verifica se os campos estão preenchidos e se são números
    if (!value1 || !value2) {  // verifica se os campos estão preenchidos
        throw new Error('Os dois campos precisam estar preenchidos');
    }

    if (isNaN(value1) || isNaN(value2)) { // verifica se os campos preenchidos são números
        throw new Error('Os valores precisam ser numéricos');
    }
}

function sum() {
    try {
        const value1 = document.getElementById('value1').value; // captura valor do input 1
        const value2 = document.getElementById('value2').value; // captura valor do input 2
        verifyIsNumber(value1, value2); // chama função e verifica condições
        const result = parseInt(value1) + parseInt(value2); // soma os valores caso passem na verificação anterior
        document.getElementById('result').innerHTML = `Resultado: ${result}`; // altera texto com o resultado da soma
    }
    catch (error) { // retorna texto do erro caso não passe na verificação
        document.getElementById('result').innerHTML = `Erro: ${error.message}`; 
    }
    finally {
        document.getElementById('value1').value = ''; // limpa o campo do input 1
        document.getElementById('value2').value = ''; // limpa o campo do input 2
    }
}
window.onload = () => {
    const button = document.getElementById('button'); // adiciona evento de clique no botão e chama função sum
    button.addEventListener('click', sum);
}



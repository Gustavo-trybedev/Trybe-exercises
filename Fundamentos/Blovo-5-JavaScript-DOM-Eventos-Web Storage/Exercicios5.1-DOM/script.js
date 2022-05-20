
/*
Aqui você vai modificar os elementos já existentes utilizando apenas as funções:
- document.getElementById()
- document.getElementsByClassName()
- document.getElementsByTagName()
Crie uma função que mude o texto na tag <p> para uma descrição de como você se vê daqui a 2 anos. (Não gaste tempo pensando no texto e sim realizando o exercício)
Crie uma função que mude a cor do quadrado amarelo para o verde da Trybe (rgb(76,164,109)).
Crie uma função que mude a cor do quadrado vermelho para branco.
Crie uma função que corrija o texto da tag <h1>.
Crie uma função que modifique todo o texto da tag <p> para maiúsculo.
Crie uma função que exiba o conteúdo de todas as tags <p> no console.
*/

function changeParagraph() {
    let paragraph = document.getElementsByTagName('p')[1];
    paragraph.innerText = "Espero estar trabalhando"

}

changeParagraph();

function greenSquare() {
    let newColor = document.getElementsByClassName('main-content')[0];
    newColor.style.background = 'rgb(76,164,109)';

}

greenSquare();

function whiteSquare() {
    let color = document.getElementsByClassName('center-content')[0];
    color.style.background = 'white';

}

whiteSquare();

function correction() {
    let titulo = document.getElementsByClassName('title')[0];

    titulo.innerText = "Exercício 5.1 - Java-Script";
}

correction();


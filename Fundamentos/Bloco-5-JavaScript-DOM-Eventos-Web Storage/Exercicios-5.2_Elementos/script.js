// 🚀 1) Adicione a tag h1 com o texto Exercício 5.2 - JavaScript DOM como filho da tag body;

let bodyHTML = document.querySelector('body');

let firstH1 = document.createElement('h1');

firstH1.innerHTML = 'Exercicio 5.2 - Javascript DOM';

bodyHTML.appendChild(firstH1);

// 🚀 2) Adicione a tag main com a classe main-content como filho da tag body;

let main = document.createElement('main');

main.className = 'main-content';

bodyHTML.appendChild(main);

// 🚀 3) Adicione a tag section com a classe center-content como filho da tag main criada no passo 2;

let centerSection = document.createElement('section');

centerSection.className = 'center-content';

main.appendChild(centerSection);

// 🚀 4) Adicione a tag p como filho do section criado no passo 3 e coloque algum texto;

let firstParagraph = document.createElement('p');

firstParagraph.innerHTML = 'Primeiro parágrafo';

centerSection.appendChild(firstParagraph);

// 🚀 5) Adicione a tag section com a classe left-content como filho da tag main criada no passo 2;

let leftSection = document.createElement('section');

leftSection.className = 'left-content';

main.appendChild(leftSection);

// 6) 🚀 Adicione a tag section com a classe right-content como filho da tag main criada no passo 2;

let rightSection = document.createElement('section');

rightSection.className = 'right-content';

main.appendChild(rightSection);

// 7) 🚀 Adicione uma imagem com src configurado para o valor https://picsum.photos/200 e classe small-image. Esse elemento deve ser filho do section criado no passo 5;

let leftImage = document.createElement('img');

leftImage.src = 'https://picsum.photos/200';

leftImage.className = 'small-image';

leftSection.appendChild(leftImage);

// 8) 🚀 Adicione uma lista não ordenada com os valores de 1 a 10 por extenso, ou seja, um, dois, três, ... como valores da lista. Essa lista deve ser filha do section criado no passo 6;

let firstList = document.createElement('ul');
let listNumbers = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eigth', 'nine', 'ten'];
rightSection.appendChild(firstList);

for (let number in listNumbers) {
    let listItem = document.createElement('li');
    listItem.innerText = listNumbers[number];
    firstList.appendChild(listItem);
}

// 9) 🚀 Adicione 3 tags h3, todas sendo filhas do main criado no passo 2.

for (let index = 1; index <= 3; index += 1) {
    let subtitle = document.createElement('h3');
    subtitle.innerText = index;
    main.appendChild(subtitle);
}

// PARTE 2

// 🚀 1) Adicione a classe title na tag h1 criada;

firstH1.className = 'title';

// 🚀 2) Adicione a classe description nas 3 tags h3 criadas;

let description = document.querySelectorAll('h3');

for (let index = 0; index < 3; index += 1) {
    description[index].className = 'description';
}

// 🚀 3) Remova a section criado no passo 5 (aquele que possui a classe left-content). Utilize a função .removeChild();

main.removeChild(leftSection);

// 🚀 4) Centralize a section criado no passo 6 (aquele que possui a classe right-content). Dica: para centralizar, basta configurar o margin-right: auto da section;

rightSection.style.margin = 'auto';

// 🚀 5) Troque a cor de fundo do elemento pai da section criada no passo 3 (aquela que possui a classe center-content) para a cor verde;

centerSection.style.backgroundColor = 'green';

// 🚀 6) Remova os dois últimos elementos (nove e dez) da lista criada no passo 8.

firstList.lastChild.remove();
firstList.lastChild.remove();

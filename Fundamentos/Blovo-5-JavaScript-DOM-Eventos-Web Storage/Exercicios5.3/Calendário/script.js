function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');

    for (let index = 0; index < weekDays.length; index += 1) {
        const days = weekDays[index];
        const dayListItem = document.createElement('li');
        dayListItem.innerHTML = days;

        weekDaysList.appendChild(dayListItem);
    };
};

createDaysOfTheWeek();

// Escreva seu código abaixo.

// Exercício 1: O array dezDaysList contém os dois últimos dias de novembro e os dias do mês de dezembro. Desenvolva uma função que crie dinamicamente cada dia do calendário e os adicione como filhos/filhas da tag <ul> com ID "days". Note que os dias 29 e 30 de novembro estão no array pois representam respectivamente Domingo e Segunda-feira.
// Os dias devem estar contidos em uma tag <li>, e todos devem ter a classe day. Ex: <li class="day">3</li>
// Os dias 24, 25 e 31 são feriados e, além da classe day, devem conter também a classe holiday. Ex: <li class="day holiday">24</li>
// Os dias 4, 11, 18 e 25 são Sexta-feira. Eles devem conter a classe day e a classe friday. Ex: <li class="day friday">4</li>

const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

function createDaysOfTheMonth() {

    const getDaysList = document.querySelector('#days');

    for (let index = 0; index < dezDaysList.length; index += 1) {
        let dayItem = document.createElement('li');
        dayItem.innerText = dezDaysList[index];
        dayItem.classList.add('day');
        getDaysList.appendChild(dayItem)

        if (dezDaysList[index] === 24 || dezDaysList[index] === 25 || dezDaysList[index] === 31) {
            dayItem.classList.add('holiday');
        };
        if (dezDaysList[index] === 4 || dezDaysList[index] === 11 || dezDaysList[index] === 18 || dezDaysList[index] === 25) {
            dayItem.classList.add('friday');
        }
    }
}
createDaysOfTheMonth();

// 🚀 Exercício 2: Implemente uma função que receba como parâmetro a string "Feriados" e crie dinamicamente um botão com o nome "Feriados".
// Adicione a este botão a ID "btn-holiday".
// Adicione este botão como filho/filha da tag <div> com classe "buttons-container".

function createHolidayButton(buttonName) {
    let buttonsContainer = document.querySelector('.buttons-container');
    let newButton = document.createElement('button');
    let newButtonID = 'btn-holiday';

    newButton.innerHTML = buttonName;
    newButton.id = newButtonID;
    buttonsContainer.appendChild(newButton);

    // newButton.id = 'btn-holiday';
};

createHolidayButton('Feriados');

// 🚀 Exercício 3: Implemente uma função que adicione ao botão "Feriados" um evento de "click" que muda a cor de fundo dos dias que possuem a classe "holiday".
// É interessante que este botão possua também a lógica inversa. Ao ser clicado novamente ele retorna à configuração inicial com a cor "rgb(238,238,238)".

function displayHolidays() {


    let getHolidaybutton = document.querySelector('#btn-holiday');
    let getHolidays = document.querySelectorAll('.holiday');
    let backgroundColor = 'rgb(238,238,238)';
    let newColor = 'green';

    getHolidaybutton.addEventListener('click', function () {
        for (let index = 0; index < getHolidays.length; index += 1) {
            if (getHolidays[index].style.backgroundColor === newColor) {
                getHolidays[index].style.backgroundColor = backgroundColor;
                getHolidays[index].style.color = '#666';

            } else {
                getHolidays[index].style.backgroundColor = newColor;
                getHolidays[index].style.color = 'white';
            }
        }
    })
};

displayHolidays();

// 🚀 Exercício 4: Implemente uma função que receba como parâmetro a string "Sexta-feira" e crie dinamicamente um botão com o nome "Sexta-feira".
// Adicione a este botão o ID "btn-friday".
// Adicione este botão como filho/filha da tag <div> com classe "buttons-container".


function createFridayButton(buttonName) {
    let buttonsContainer = document.querySelector('.buttons-container');
    let newButton = document.createElement('button');
    let newButtonID = 'btn-friday';

    newButton.innerHTML = buttonName;
    newButton.id = newButtonID;
    buttonsContainer.appendChild(newButton);
};

createFridayButton('Sexta-Feira');

// 🚀 Exercício 5: Implemente uma função que adicione ao botão "Sexta-feira" um evento de "click" que modifica o texto exibido nos dias que são Sexta-feira.
// É interessante que este botão possua também a lógica inversa. Ao ser clicado novamente ele retorna à configuração inicial exibindo os dias.

function displayFridays() {


    let getFridaybutton = document.querySelector('#btn-friday');
    let getFridays = document.querySelectorAll('.friday');
    let newFridayText = 'Sextou BB';
    let fridaysArray = [4, 11, 18, 25]


    getFridaybutton.addEventListener('click', function () {
        for (let index = 0; index < getFridays.length; index += 1) {
            if (getFridays[index].innerHTML != newFridayText) {
                getFridays[index].innerHTML = newFridayText;
            } else {
                getFridays[index].innerHTML = fridaysArray[index];
            }
        }
    })
};

displayFridays();

// Implemente duas funções que criem um efeito de "zoom". Ao passar o ponteiro do mouse em um dia do mês no calendário, o texto desse dia deve aumentar e, quando o ponteiro do mouse sair do dia, o texto deve retornar ao tamanho original.
// Dica - Propriedade: event.target.

function increaseZoomDay() {
    let dezDaysList = document.querySelector('#days');
    dezDaysList.addEventListener('mouseover', function (event) {
        event.target.style.fontSize = '30px';
        event.target.style.fontWeight = '600';
    })
};

function decreaseZoomDay() {
    let dezDaysList = document.querySelector('#days');
    dezDaysList.addEventListener('mouseout', function (event) {
        event.target.style.fontSize = '20px';
        event.target.style.fontWeight = '200';
    })
};

increaseZoomDay();
decreaseZoomDay();

// 🚀 Exercício 7: Implemente uma função que adiciona uma tarefa personalizada ao calendário. A função deve receber como parâmetro a string com o nome da tarefa (ex: "cozinhar") e criar dinamicamente um elemento com a tag <span> contendo a tarefa.
// O elemento criado deverá ser adicionado como filho/filha da tag <div> que possui a classe "my-tasks".

function addTask(task) {
    let myTasks = document.querySelector('.my-tasks');
    let newTask = document.createElement('span');
    myTasks.appendChild(newTask);
    newTask.innerHTML = 'Cozinhar';
}

addTask();

// 🚀 Exercício 8: Implemente uma função que adiciona uma legenda com cor para a tarefa criada no exercício anterior. Esta função deverá receber como parâmetro uma string ("cor") e criar dinamicamente um elemento de tag <div> com a classe task.
// O parâmetro cor deverá ser utilizado como cor de fundo da <div> criada.
// O elemento criado deverá ser adicionado como filho/filha da tag <div> que possui a classe "my-tasks".
const firstLi = document.getElementById('first-li');
const secondLi = document.getElementById('second-li');
const thirdLi = document.getElementById('third-li');
const input = document.getElementById('input');
const myWebpage = document.getElementById('my-spotrybefy');



// 1.2. Note que uma das caixas está um pouco acima das outras. Por que isso ocorre? 

// Pois está sendo usado o comando translateY na caixa especificada.


// 2. Crie uma função que adicione a classe 'tech' ao elemento `li` quando for clicado.

function addTech (evento) {
  const elementoTech = document.querySelector('.tech');
  elementoTech.classList.remove('tech');
  evento.target.classList.add('tech');
  input.value = '';
}

firstLi.addEventListener('click', addTech);
secondLi.addEventListener('click', addTech);
thirdLi.addEventListener('click', addTech);


// 3. Crie uma função que, ao digitar na caixa de texto, altere o texto do elemento com a classe 'tech';

function textChange (evento) {
  const elementoTech = document.querySelector('.tech');
  elementoTech.innerText = evento.target.value;
}

input.addEventListener('input', textChange);

// 4. Crie uma função que, ao clicar duas vezes em 'Meu top 3 do Spotrybefy', ele
// redirecione para alguma página;
// 4.1. Que tal redirecionar para seu portfólio?

myWebpage.addEventListener('dblclick', function() {
  window.location.replace('https://www.youtube.com/watch?v=CD-E-LDc384&ab_channel=Metallica');
})

// 5. Crie uma função que, ao passar o mouse sobre 'Meu top 3 do Spotrybefy', altere a cor do mesmo;

myWebpage.addEventListener('mouseover', function() {
  myWebpage.style.color = 'red';
});

myWebpage.addEventListener('mouseleave', function() {
  myWebpage.style.color = 'white';
});


function resetText(event) {
  // O Event é passado como um parâmetro para a função.
  event.target.innerText = 'Opção reiniciada';
  // O event possui várias propriedades, porém a mais usada é o event.target,
  // que retorna o objeto que disparou o evento.
}

firstLi.addEventListener('dblclick', resetText);

// Não precisa passar o parâmetro dentro da callback resetText. O próprio navegador fará esse trabalho por você, não é legal? Desse jeito, o event.target na nossa função retornará o objeto 'firstLi'.
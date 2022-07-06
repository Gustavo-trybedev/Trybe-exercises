const pushNumber1 = (list, number) => list.push(number);

let numbers1 = [];

pushNumber1(numbers1, 1);
pushNumber1(numbers1, 2);
pushNumber1(numbers1, 3);

console.log(numbers1);

// --------------------------------

const pushNumber = (list, number) => list.push(number);

let numbers = [];

setTimeout(() => pushNumber(numbers, 1), 3000);
pushNumber(numbers, 2);
pushNumber(numbers, 3);

console.log(numbers); // O retorno é [2, 3]

// --------------------------------

const pushNumber2 = (list, number) => list.push(number);

let numbers2 = [];

setTimeout(() => pushNumber2(numbers2, 1), 3000);
pushNumber2(numbers2, 2);
pushNumber2(numbers2, 3);

setTimeout(() => console.log(numbers), 3000);
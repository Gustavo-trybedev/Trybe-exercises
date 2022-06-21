const lesson1 = {
    materia: 'Matemática',
    numeroEstudantes: 20,
    professor: 'Maria Clara',
    turno: 'manhã',
};

const lesson2 = {
    materia: 'História',
    numeroEstudantes: 20,
    professor: 'Carlos',
};

const lesson3 = {
    materia: 'Matemática',
    numeroEstudantes: 10,
    professor: 'Maria Clara',
    turno: 'noite',
};

// 1) Crie uma função para adicionar o turno da noite na lesson2. Essa função deve possuir três parâmetros, sendo eles: o objeto a ser modificado, a chave que deverá ser adicionada e o valor dela.

const addTurn = (obj, key, value) => {
    obj[key] = value;
};

addTurn(lesson2, 'turno', 'noite');

// 2) Crie uma função para listar as keys de um objeto. Essa função deve receber um objeto como parâmetro.

const listKeys = (obj) => Object.keys(obj);
console.log(listKeys(lesson1));

// 3) Crie uma função para mostrar o tamanho de um objeto.

const objLength = (obj) => Object.keys(obj).length;
console.log(objLength(lesson1));

// 4) Crie uma função para listar os valores de um objeto. Essa função deve receber um objeto como parâmetro.

const objValues = (obj) => Object.values(obj);
console.log(objValues(lesson1));


// 5) Crie um objeto de nome allLessons, que deve agrupar todas as aulas através do Object.assign. Cada chave desse novo objeto será uma aula, sendo essas chaves: lesson1, lesson2 e lesson3. Ao executar o comando console.log(allLessons), a saída deverá ser a seguinte:

const allLessons = Object.assign({}, { lesson1, lesson2, lesson3 });
console.log(Object.entries(allLessons));

// 6) Usando o objeto criado no exercício 5, crie uma função que retorne o número total de estudantes em todas as aulas.

const getNumberOfStudents = (obj) => {
    let total = 0;
    const array = Object.keys(obj);
    for (index in array) {
        total += obj[array[index]].numeroEstudantes;
    }
    return total;
};

console.log(getNumberOfStudents(allLessons));

// 7) Crie uma função que obtenha o valor da chave de acordo com a sua posição no objeto.

const getValueByNumber = (obj, number) => Object.values(obj)[number];
console.log(getValueByNumber);

// 8) Crie uma função que verifique se o par (chave / valor) existe na função. Essa função deve possuir três parâmetros, sendo eles: o objeto, o nome da chave e o valor da chave.

const verifyPair = (obj, key, value) => {
    const arr = Object.entries(obj);

    let isEqual = false;

    for (let index in arr) {
        if (arr[index][0] === key && arr[index][1] === value) {
            isEqual = true;
        }
        return isEqual;
    };

}
console.log(verifyPair(lesson2, 'professor', 'Carlos'));

// Bônus
// 🚀 1) Crie uma função para contar quantos estudantes assistiram às aulas de Matemática. Use o objeto criado no exercício 5.

const getNumberOfStudentsMath = (obj) => {
    let total = 0;
    const array = Object.keys(obj);
    for (index in array) {
        if (obj[array[index]].materia === 'Matemática') {
            total += obj[array[index]].numeroEstudantes;
        }
    }
    return total;
}
console.log(getNumberOfStudents(allLessons));

// 🚀 2) Crie uma função que deverá retornar um objeto que representa o relatório do professor ou professora, as aulas que ele ou ela ministrou e o número total de estudantes. Use o objeto criado no exercício 5:

const getInfo = (obj, name) => {
    const allLessons = [];
    let allStudent = 0;
    const array = Object.values(obj);
    for (index in array) {
        if (array[index].professor === name) {
            allLessons.push(array[index].materia)
            allStudent += array[index].numeroEstudantes;
        }
    }
    return { lessons: allLessons, estudantes: allStudent };
}

const createReport = (allLessons, name) => {
    const report = {};
    report.professor = name;
    Object.assign(report, getInfo(allLessons, name));
    return report;
}
console.log(createReport(allLessons, 'Maria Clara'));
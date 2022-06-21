// O método Object.keys é utilizado para listar as chaves de um objeto, retornando-as em um array.
// Cada entrada do array retornado será uma string com o valor de cada chave do objeto.

// const coolestTvShow = {
//     name: "BoJack Horseman",
//     genre: "adult animation",
//     createdBy: "Raphael Bob-Waksberg",
//     favoriteCharacter: "Princess Carolyn",
//     quote: "Princess Carolyn always lands on her feet.",
//     seasons: 6,
//   };

// console.log(Object.keys(coolestTvShow));

// Tente criar uma função que exiba as habilidades do objeto student. Cada habilidade deve ser exibida no formato "Nome da habilidade, Nível: valor da chave referente à habilidade". 

const student1 = {
    Html: 'Muito Bom',
    Css: 'Bom',
    JavaScript: 'Ótimo',
    SoftSkills: 'Ótimo',
};

const student2 = {
    Html: 'Bom',
    Css: 'Ótimo',
    JavaScript: 'Ruim',
    SoftSkills: 'Ótimo',
    Git: 'Bom', // chave adicionada
};

const listOfSkills = (student) => {
    const skills = Object.keys(student);

    for (const index in skills) {
        console.log(`Nome da habilidade: ${skills[index]}, Nível: ${student[skills[index]]}`);
    }
}

console.log('Estudante 1');
listOfSkills(student1);

console.log(('Estudante 2'));
listOfSkills(student2);
// O Object.values segue a mesma lógica que o Object.keys, a diferença está em que ele lista os valores de cada chave.

// const coolestTvShow = {
//     name: "BoJack Horseman",
//     genre: "adult animation",
//     createdBy: "Raphael Bob-Waksberg",
//     favoriteCharacter: "Princess Carolyn",
//     quote: "Princess Carolyn always lands on her feet.",
//     seasons: 6,
//   };
  
//   for (const property in coolestTvShow) {
//     console.log(coolestTvShow[property]); // --> Listagem das chaves utilizando For In
//   }

//   const coolestTvShow = {
//     name: "BoJack Horseman",
//     genre: "adult animation",
//     createdBy: "Raphael Bob-Waksberg",
//     favoriteCharacter: "Princess Carolyn",
//     quote: "Princess Carolyn always lands on her feet.",
//     seasons: 6,
//   };

//   console.log(Object.values(coolestTvShow)); // --> Listagem dos valores das chaves utilizando Object.values

// Exemplo 2:

const student = {
    Html: 'Muito Bom',
    Css: 'Bom',
    JavaScript: 'Ótimo',
    SoftSkill: 'Ótimo',
  };
  
  const listSkillsValuesWithFor = (student) => { // Função que retorna array com skills do estudante utilizando For e método push.
    const skills = [];
    for(skill in student) {
      skills.push(student[skill]);
    }
  
    return skills;
  };
  
  const listSkillsValuesWithValues = (student) => Object.values(student); // Função que retorna skills do estudante com Object.values
  
  // Sem Object.values
  console.log(listSkillsValuesWithFor(student)); // Log para exibir array criado com skills
  
  // Com Object.values
  console.log(listSkillsValuesWithValues(student)); // Log para exibir o resultado da função com Object.values
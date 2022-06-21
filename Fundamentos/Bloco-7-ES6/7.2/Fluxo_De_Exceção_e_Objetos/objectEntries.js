// Este retorna um array cujos elementos são também arrays para cada conjunto chave e valor do objeto. 

// const coolestTvShow = {
//     name: "BoJack Horseman",
//     genre: "adult animation",
//     createdBy: "Raphael Bob-Waksberg",
//     favoriteCharacter: "Princess Carolyn",
//     quote: "Princess Carolyn always lands on her feet.",
//     seasons: 6,
//   };
  
//   console.log(Object.entries(coolestTvShow));
  
  // [
  //   [ 'name', 'BoJack Horseman' ],
  //   [ 'genre', 'adult animation' ],
  //   [ 'createdBy', 'Raphael Bob-Waksberg' ],
  //   [ 'favoriteCharacter', 'Princess Carolyn' ],
  //   [ 'quote', 'Princess Carolyn always lands on her feet.' ],
  //   [ 'seasons', 6 ]
  // ]
  
  // --> O retorno foi um array de arrays. Onde a primeira entrada de cada array é a chave do objeto em formato de string, e, o segundo valor é seu respectivo valor, que pode ser uma string ou outro tipo de dado.

  const países = {
    França: 'Paris',
    Brasil: 'Brasília',
    Espanha: 'Madrid',
    Portugal: 'Lisboa',
  };

  const pairKeyValue = Object.entries(países);
  
  for(index in pairKeyValue) {
    console.log('--------');
    console.log('País:', pairKeyValue[index][0]);
    console.log('Capital:', pairKeyValue[index][1]);
  };
  
  // console.log(pairKeyValue);
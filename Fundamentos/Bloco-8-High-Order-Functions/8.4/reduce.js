// Todos os exercícios devem ser realizados utilizando reduce, e se necessário outra HOF, a informação será citada no enunciado.
// 1 - Dada uma matriz, transforme em um array.

const arrays = [
    ['1', '2', '3'],
    [true],
    [4, 5, 6],
];

const flatten = (arr) => arrays.reduce((acc, curr) => acc.concat(curr), []);
// console.log(flatten(arrays));


// Para os exercícios 2, 3 e 4 considere o seguinte array:

const books = [
    {
        id: 1,
        name: 'As Crônicas de Gelo e Fogo',
        genre: 'Fantasia',
        author: {
            name: 'George R. R. Martin',
            birthYear: 1948,
        },
        releaseYear: 1991,
    },
    {
        id: 2,
        name: 'O Senhor dos Anéis',
        genre: 'Fantasia',
        author: {
            name: 'J. R. R. Tolkien',
            birthYear: 1892,
        },
        releaseYear: 1954,
    },
    {
        id: 3,
        name: 'Fundação',
        genre: 'Ficção Científica',
        author: {
            name: 'Isaac Asimov',
            birthYear: 1920,
        },
        releaseYear: 1951,
    },
    {
        id: 4,
        name: 'Duna',
        genre: 'Ficção Científica',
        author: {
            name: 'Frank Herbert',
            birthYear: 1920,
        },
        releaseYear: 1965,
    },
    {
        id: 5,
        name: 'A Coisa',
        genre: 'Terror',
        author: {
            name: 'Stephen King',
            birthYear: 1947,
        },
        releaseYear: 1986,
    },
    {
        id: 6,
        name: 'O Chamado de Cthulhu',
        genre: 'Terror',
        author: {
            name: 'H. P. Lovecraft',
            birthYear: 1890,
        },
        releaseYear: 1928,
    },
];

// 2 - Crie uma string com os nomes de todas as pessoas autoras. Exemplo: 'George R. R. Martin; J. R. R. Tolkien; Isaac Asimov; Frank Herbert; Stephen King; H. P. Lovecraft' 

const reduceNames = books.reduce((acc, curr) => `${acc}${curr.author.name}; `, []);
console.log(reduceNames);

// 🚀 3- Calcule a média de idade que as pessoas autoras tinham quando seus respectivos livros foram lançados. 

const mediaIdade = () => {
    const numberOfBooks = books.length;
    const somaIdades = books.reduce((sum, book) => sum + (book.releaseYear - book.author.birthYear), 0);

    return somaIdades / numberOfBooks;
}
console.log(mediaIdade());

// 🚀 4- Encontre o livro com o maior nome. 

const longestNamedBook = () => {
    return books.reduce((biggerBook, currentBook) => {
        if (currentBook.name.length > biggerBook.name.length) {
            return currentBook;
        }
        return biggerBook;
    })
};
console.log(longestNamedBook());

// 🚀 5- Dada o array de nomes, retorne a quantidade de vezes em que aparecem a letra a maiúscula ou minúscula.

const names = [
    'Aanemarie', 'Adervandes', 'Akifusa',
    'Abegildo', 'Adicellia', 'Aladonata',
    'Abeladerco', 'Adieidy', 'Alarucha',
  ];
  
// const countLetterA = (names) => {
//     const count = names.reduce((acc, curr) => {
//         const countA = curr.match(/a/gi).length;
//         return acc + countA;
//     }, 0);
//     return count;
// }
// console.log(countLetterA(names));

function containsA() {
    return names.reduce((acc, curr) =>
       acc + curr.split('').reduce((acumulator, current) => {
          if (current === 'a' || current === 'A') return acumulator + 1;
          return acumulator;
       }, 0), 0);
  }
console.log(containsA());

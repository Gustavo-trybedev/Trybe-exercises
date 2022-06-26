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

// Adicione o código do exercício aqui:

//   🚀 1 - Encontre o nome da primeira pessoa autora do livro nascida no ano de 1947. Dica: use a função find.

const authorBornIn1947 = () => books.find((item) => item.author.birthYear === 1947).author.name;
console.log(authorBornIn1947());

// 2 - Retorne o nome do livro de menor nome. Dica: use a função forEach.

const smallerName = () => {
    let nameBook;
    books.forEach((book) => {
        if (!nameBook || book.name.length < nameBook.length) {
            nameBook = book.name;
        }
    });
    return nameBook;
}
console.log(smallerName());

// 3 - Encontre o primeiro livro cujo nome possui 26 caracteres. Dica: use a função find.

const getNamedBook = () => books.find((book) => book.name.length === 26);
console.log(getNamedBook());

// 4 - Ordene os livros por data de lançamento em ordem decrescente.

const sortBooks = () => books.sort((a, b) => b.releaseYear - a.releaseYear);
console.log(sortBooks());

// 🚀 5 - Faça uma função que retorne true, se todas as pessoas autoras nasceram no século XX, ou false, caso contrário.

const everyoneWasBornOnSecXX = () => books.every((author) => author.author.birthYear >= 2000);
console.log(everyoneWasBornOnSecXX());

// 🚀 6 - Faça uma função que retorne true, se algum livro foi lançado na década de 80, e false, caso contrário.

const someBookWasReleaseOnThe80s = () => books.some((book) => book.releaseYear >= 1980 && book.releaseYear < 1990);
console.log(someBookWasReleaseOnThe80s());

// 7 - Faça uma função que retorne true, caso nenhum author tenha nascido no mesmo ano, e false, caso contrário.

const sameBirthYear = () => books.some((author) => author.author.birthYear === books.every((author) => author.author.birthYear === author.author.birthYear));
console.log(sameBirthYear());
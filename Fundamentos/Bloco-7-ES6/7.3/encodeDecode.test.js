

// Teste se as demais letras/números não são convertidos para cada caso;
// Teste se a string que é retornada pelas funções têm o mesmo número de caracteres que a string passada como parâmetro.

const { encode, decode } = require('./encodeDecode.js');

describe('Testa funções encode e decode', () => {

    // Se a função encode é definida
    it('A função encode é definida', () => {
        expect('encode').toBeDefined();
    });

    // Se encode é uma função
    it('encode é uma função', () => {
        expect(typeof encode).toEqual('function');
    });

    // Para a função encode teste se as vogais a, e, i, o, u são convertidas em 1, 2, 3, 4 e 5, respectivamente;
    it('Se vogais A é trocadas por número 1', () => {
        expect(encode('ana')).toEqual('1n1');
    });

    it('Se vogais E é trocadas por número 2', () => {
        expect(encode('ele')).toEqual('2l2');
    });

    it('Se vogais I é trocadas por número 3', () => {
        expect(encode('xixi')).toEqual('x3x3');
    });

    it('Se vogais O é trocadas por número 4', () => {
        expect(encode('ovo')).toEqual('4v4');
    });

    it('Se vogais U é trocadas por número 5', () => {
        expect(encode('nu')).toEqual('n5');
    });

    it('checa se o retorno da função tem o mesmo número de caracteres', () => {
        expect(encode('trybe').length).toEqual(5);
    });

    // Se a função decode é definida
    it('a função decode é definida', () => {
        expect(decode).toBeDefined();
    });

    // Se decode é uma função
    it('decode é uma função', () => {
        expect(typeof decode).toEqual('function');
    });

    // Para a função decode teste se os números 1, 2, 3, 4 e 5 são convertidos nas vogais a, e, i, o, u, respectivamente;

    it('Se vogais A é trocadas por número 1', () => {
        expect(decode('1n1')).toEqual('ana');
    });

    it('Se vogais E é trocadas por número 2', () => {
        expect(decode('2l2')).toEqual('ele');
    });

    it('Se vogais I é trocadas por número 3', () => {
        expect(decode('x3x3')).toEqual('xixi');
    });

    it('Se vogais O é trocadas por número 4', () => {
        expect(decode('4v4')).toEqual('ovo');
    });

    it('Se vogais U é trocadas por número 5', () => {
        expect(decode('n5')).toEqual('nu');
    });

    it('checa se o retorno da função tem o mesmo número de caracteres', () => {
        expect(decode('trybe').length).toEqual(5);
    });
});
const sum = require('./sum.js');

describe('Sum function', () => {

    // Teste se o retorno de sum(4, 5) é 9
    // Teste se o retorno de sum(0, 0) é 0

    it('Return the result of sum', () => {
        expect(sum(4, 5)).toBe(9);
        expect(sum(0, 0)).toBe(0);
    });

    // Teste se a função sum lança um erro quando os parâmetros são 4 e "5"(string 5)
    // Teste se a mensagem de erro é "parameters must be numbers" quando realizar a chamada sum(4, "5")

    it('Alert an error if get a string by parameter', () => {
        expect(() => sum(4, '5')).toThrowError();
        expect(() => sum(4, '5')).toThrowError('parameters must be numbers');
    });

});
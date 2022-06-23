const myFizzBuzz = require('./myFizzBuzz.js');

describe('myFizzBuzz function', () => {

    it('Testa função myFizzBuzz', () => {

        // Faça uma chamada com um número divisível por 3 e 5 e verifique se o retorno é o esperado
        expect(myFizzBuzz(15)).toBe('fizzbuzz');

        // Faça uma chamada com um número divisível por 3 e verifique se o retorno é o esperado
        expect(myFizzBuzz(9)).toBe('fizz');

        // Faça uma chamada com um número divisível por 5 e verifique se o retorno é o esperado
        expect(myFizzBuzz(10)).toBe('buzz');

        // Faça uma chamada com um número que não é divisível por 3 ou 5 e verifique se o retorno é o esperado
        expect(myFizzBuzz(17)).toBe(17);

        // Faça uma chamada com um parâmetro que não é um número e verifique se o retorno é o esperado
        expect(myFizzBuzz('pamonha')).toBe(false);
    });
});
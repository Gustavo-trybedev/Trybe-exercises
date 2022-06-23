const { exportAllDeclaration } = require('@babel/types');
const myRemove = require('./myRemove.js');

describe('myRemove function', () => {

    // Verifique se a chamada myRemove([1, 2, 3, 4], 3) retorna o array esperado
    it('retorna array removendo item correto', () => {
        expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
    });
});


// Verifique se a chamada myRemove([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4]
// Verifique se a chamada myRemove([1, 2, 3, 4], 5) retorna o array esperado
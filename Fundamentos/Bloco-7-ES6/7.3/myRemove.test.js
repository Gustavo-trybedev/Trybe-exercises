const { exportAllDeclaration } = require('@babel/types');
const myRemove = require('./myRemove.js');

describe('myRemove function', () => {


    it('retorna array removendo item correto', () => {

        // Verifique se a chamada myRemove([1, 2, 3, 4], 3) retorna o array esperado
        expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);

        // Verifique se a chamada myRemove([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4]
        expect(myRemove([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
        
        // Verifique se a chamada myRemove([1, 2, 3, 4], 5) retorna o array esperado
        expect(myRemove([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
    });
});




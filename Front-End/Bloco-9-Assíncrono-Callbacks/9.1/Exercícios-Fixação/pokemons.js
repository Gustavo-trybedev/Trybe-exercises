// 8 - Para o próximo exercício, você vai sentir na pele o primeiro dia de um treinador Pokémon! No laboratório do Professor Carvalho, você é informado de que existem três pokémons disponíveis: Bulbasaur, Charmander e Squirtle. Complete a chamada da função getPokemonDetails de modo que ela retorne os detalhes do pokémon que você escolheu. PS: é possível que o sistema do Professor Carvalho apresente erros, então não se esqueça de tratá-los também, combinado?

const pokemons = [
    {
      name: 'Bulbasaur',
      type: 'Grass',
      ability: 'Razor Leaf',
    },
    {
      name: 'Charmander',
      type: 'Fire',
      ability: 'Ember',
    },
    {
      name: 'Squirtle',
      type: 'Water',
      ability: 'Water Gun',
    },
  ];
  
  function getPokemonDetails(filter, callback) {
    setTimeout(() => {
      if (pokemons.find(filter) === undefined) {
        return callback(new Error('Não temos esse pokémon para você :('), null);
      }
      const pokemon = pokemons.find(filter);
  
      const { name, type, ability } = pokemon;
  
      const messageFromProfOak = `Olá, seu pokémon é o ${name}, o tipo dele é ${type} e a habilidade principal dele é ${ability}`;
  
      callback(null, messageFromProfOak);
    }, 2000);
  }
  
  getPokemonDetails();
  
  module.exports = {
    getPokemonDetails,
  };
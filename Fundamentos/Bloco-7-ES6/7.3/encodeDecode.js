//ENCODE
function encode(phrase) {
    let encodedPhraseNumbers = [];
    let encodedPhrase = '';
  
    for (let letter of phrase) {
      switch (letter) {
      case 'a':
        letter = 1;
        break;
      case 'e':
        letter = 2;
        break;
      case 'i':
        letter = 3;
        break;
      case 'o':
        letter = 4;
        break;
      case 'u':
        letter = 5;
        break;
      }
      encodedPhraseNumbers.push(letter);
    }
  
    for (let i = 0; i < encodedPhraseNumbers.length; i += 1) {
      encodedPhrase += encodedPhraseNumbers[i];
    }
  
    return encodedPhrase;
  }


// DECODE
  function decode(encodedPhrase) {
    let decodedPhraseNumbers = [];
    let decodedPhrase = '';
  
    for (let letter of encodedPhrase) {
      switch (letter) {
      case '1':
        letter = 'a';
        break;
      case '2':
        letter = 'e';
        break;
      case '3':
        letter = 'i';
        break;
      case '4':
        letter = 'o';
        break;
      case '5':
        letter = 'u';
        break;
      }
      decodedPhraseNumbers.push(letter);
    }
  
    for (let i = 0; i < decodedPhraseNumbers.length; i += 1) {
      decodedPhrase += decodedPhraseNumbers[i];
    }
  
    return decodedPhrase;
  }

  module.exports = {encode, decode};
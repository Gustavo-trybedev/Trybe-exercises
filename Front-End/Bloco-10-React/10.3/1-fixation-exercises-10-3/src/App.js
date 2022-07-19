import Image from './Image';
import staringCat from './cat/staringCat.jpg';
import React from 'react';
import './App.css';

function App() {
return (
  <main>
    <Image source={staringCat} alternativeText="Cute cat staring" />
  </main>
)
}

export default App;

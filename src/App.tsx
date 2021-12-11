import React from 'react';
import IdentifyCar from "./components/IdentifyCar";
import ChooseDamage from "./components/ChooseDamage";
import ContactOption from "./components/ContactOption";
import './App.css'

function App() {
  return (
    <div>
      <h1>Car damage form.</h1>
      <IdentifyCar />
      <ChooseDamage />
      <ContactOption />
    </div>
  );
}

export default App;

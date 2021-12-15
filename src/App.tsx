import React, {useState} from 'react';
import IdentifyCar from "./components/IdentifyCar";
import ChooseDamage from "./components/ChooseDamage";
import ContactOption from "./components/ContactOption";
import {CarDamageAppState} from "./model/state";
import Initial from "./components/Initial";
import Loader from "react-loader-spinner";
import './App.css'
import {useSelector} from "react-redux";

function App() {
  const state = useSelector<{ type: 'INITIAL' }, CarDamageAppState>(state => state)

  switch (state.type){
      case "INITIAL":
          return <Initial />
      case "IDENTIFY_CAR":
          return <IdentifyCar stateOfMachine={state}/>
      case "CHOOSE_DAMAGE":
          return <ChooseDamage stateOfMachine={state}/>
      case "CONTACT_OPTION":
          return <ContactOption stateOfMachine={state}/>
      case "CHAT_SELLER":
          alert('Chat with seller! Car with plate number ' + state.plateNumber + ' has damage: ' + state.chosenDamage)
          return null
      case "CALL_SELLER":
          alert('Call with seller! Car with plate number ' + state.plateNumber + ' has damage: ' + state.chosenDamage)
          return null
      case "LOADING":
          return (
              <Loader
                  type="Puff"
                  color="#00BFFF"
                  height={100}
                  width={100}
                  timeout={3000}
              />
          )
      default:
          const leftover = state
          return null
  }
}

export default App;

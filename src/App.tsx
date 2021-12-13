import React, {useState} from 'react';
import IdentifyCar from "./components/IdentifyCar";
import ChooseDamage from "./components/ChooseDamage";
import ContactOption from "./components/ContactOption";
import {CarDamageAppState} from "./model/state";
import Initial from "./components/Initial";
import Loader from "react-loader-spinner";
import './App.css'

function App() {
  const [carDamageAppState, setCarDamageAppState] = useState<CarDamageAppState>({
      type: "INITIAL"
  })

  switch (carDamageAppState.type){
      case "INITIAL":
          return <Initial setStateOfMachine={setCarDamageAppState}/>
      case "IDENTIFY_CAR":
          return <IdentifyCar setStateOfMachine={setCarDamageAppState}  stateOfMachine={carDamageAppState}/>
      case "CHOOSE_DAMAGE":
          return <ChooseDamage setStateOfMachine={setCarDamageAppState}  stateOfMachine={carDamageAppState}/>
      case "CONTACT_OPTION":
          return <ContactOption setStateOfMachine={setCarDamageAppState}  stateOfMachine={carDamageAppState}/>
      case "CHAT_SELLER":
          alert('Chat with seller! Car with plate number ' + carDamageAppState.plateNumber + ' has damage: ' + carDamageAppState.chosenDamage)
          return null
      case "CALL_SELLER":
          alert('Call with seller! Car with plate number ' + carDamageAppState.plateNumber + ' has damage: ' + carDamageAppState.chosenDamage)
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
          const leftover = carDamageAppState
          return null
  }
}

export default App;

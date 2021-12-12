import React from "react";
import {CarDamageAppState} from "../model/state";
import {assertState} from "../model/assertState";

const IdentifyCar: React.FC<{
    setStateOfMachine: (newStateOfMachine: CarDamageAppState) => void,
    stateOfMachine: CarDamageAppState
}> = ({setStateOfMachine, stateOfMachine}) => {
    console.log(stateOfMachine.type)
    const inputRef = React.createRef<HTMLInputElement>()
    const handleForm = () => {
        assertState(stateOfMachine, "IDENTIFY_CAR")
        if  (inputRef.current && inputRef.current.value.length === 4) {
            setStateOfMachine({
                type: "CHOOSE_DAMAGE",
                plateNumber: parseInt(inputRef.current.value)
            })
        } else {
            alert('You mas pass proper 4 digit plate number of car!')
        }
    }

    return (
        <div>
            <h2>Enter car's plate number:</h2>
            <form>
                <input type="number" ref={inputRef} />
                <button onClick={handleForm} type="button">
                    Submit
                </button>
            </form>
        </div>
    )
}

export  default IdentifyCar

import React from "react";
import {CarDamageAppState} from "../model/state";
import {assertState} from "../model/assertState";
import handleAsyncData from "../utils/restFaker";

const IdentifyCar: React.FC<{
    setStateOfMachine: (newStateOfMachine: CarDamageAppState) => void,
    stateOfMachine: CarDamageAppState
}> = ({setStateOfMachine, stateOfMachine}) => {
    assertState(stateOfMachine, "IDENTIFY_CAR")
    if(stateOfMachine.error)  alert('Enter proper plate number!')
    const inputRef = React.createRef<HTMLInputElement>()
    const handleForm = async () => {
        setStateOfMachine({type: "LOADING"})
        if  (inputRef.current) {
            try{
                const plateNumber = await handleAsyncData(inputRef.current.value, false)
                setStateOfMachine({
                    type: "CHOOSE_DAMAGE",
                    plateNumber: parseInt(plateNumber as string)
                })
            } catch (e) {
                setStateOfMachine({
                    type: "IDENTIFY_CAR",
                    error: true
                })
            }

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

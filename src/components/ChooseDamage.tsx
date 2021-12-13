import React from "react";
import {CarDamageAppState, damageType} from "../model/state";
import {assertState} from "../model/assertState";

const ChooseDamage: React.FC<{
    setStateOfMachine: (newStateOfMachine: CarDamageAppState) => void,
    stateOfMachine: CarDamageAppState
}> = ({setStateOfMachine, stateOfMachine}) => {
    assertState(stateOfMachine, "CHOOSE_DAMAGE")
    const inputRef = React.createRef<HTMLSelectElement>()

    const handleForm = () => {
        if  (inputRef.current) {
            setStateOfMachine({
                type: "CONTACT_OPTION",
                plateNumber: stateOfMachine.plateNumber,
                chosenDamage: inputRef.current.value as damageType,
                error: false
            })
        }
    }

    return (
        <div>
            <h2>Select damage that apply to your car:</h2>
            <form>
                <select ref={inputRef}>
                    <option value="windshield">
                        windshield
                    </option>
                    <option value="wheels">
                        wheels
                    </option>
                    <option value="engine">
                        engine
                    </option>
                </select>
                <button onClick={handleForm} type="button">
                    Submit
                </button>
            </form>
        </div>
    )
}

export default ChooseDamage

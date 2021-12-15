import React from "react";
import {CarDamageAppState, damageType} from "../model/state";
import {assertState} from "../model/assertState";
import {useDispatch} from "react-redux";
import {chooseContact} from "../store/actions";

const ChooseDamage: React.FC<{
    stateOfMachine: CarDamageAppState
}> = ({ stateOfMachine}) => {
    assertState(stateOfMachine, "CHOOSE_DAMAGE")
    const inputRef = React.createRef<HTMLSelectElement>()
    const dispatch = useDispatch()

    const handleForm = () => {
        if  (inputRef.current) {
            dispatch(chooseContact( stateOfMachine.plateNumber, false, inputRef.current.value as damageType))
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

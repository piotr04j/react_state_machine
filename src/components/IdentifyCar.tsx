import React from "react";
import {CarDamageAppState} from "../model/state";
import {assertState} from "../model/assertState";
import handleAsyncData from "../utils/restFaker";
import {useDispatch} from "react-redux";
import {chooseDamage, loading, verifyPlateNumber} from "../store/actions";

const IdentifyCar: React.FC<{
    stateOfMachine: CarDamageAppState
}> = ({ stateOfMachine}) => {
    assertState(stateOfMachine, "IDENTIFY_CAR")
    const dispatch = useDispatch()
    const inputRef = React.createRef<HTMLInputElement>()

    if(stateOfMachine.error)  alert('Enter proper plate number!')

    const handleForm = async () => {
        if  (inputRef.current && inputRef.current.value.length === 4) {
            dispatch(loading())
            try{
                const plateNumber = await handleAsyncData(inputRef.current.value) as number
                dispatch(chooseDamage(plateNumber))
            } catch (e) {
                dispatch(verifyPlateNumber(true))
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

export default IdentifyCar


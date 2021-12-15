import React from "react";
import {CarDamageAppState, damageType} from "../model/state";
import {assertState} from "../model/assertState";
import handleAsyncData from "../utils/restFaker";
import {useDispatch} from "react-redux";
import {callSeller, chatSeller, chooseContact} from "../store/actions";

const ContactOption: React.FC<{
    stateOfMachine: CarDamageAppState
}> = ({ stateOfMachine}) => {
    assertState(stateOfMachine, "CONTACT_OPTION")
    const inputRef = React.createRef<HTMLSelectElement>()
    const dispatch = useDispatch()

    if(stateOfMachine.error)  alert('We have an issue! Try again later.')

    const handleForm = async () => {
        if  (inputRef.current) {
            dispatch({type: "LOADING"})
            try {
                const contactWayInputValue =  inputRef.current.value
                if (contactWayInputValue === "call") {
                    dispatch(callSeller(stateOfMachine.plateNumber, false, stateOfMachine.chosenDamage))
                } else {
                    dispatch(chatSeller(stateOfMachine.plateNumber, false, stateOfMachine.chosenDamage))
                }
            } catch (e) {
                dispatch(chooseContact( stateOfMachine.plateNumber, true, inputRef.current.value as damageType))
            }
        }
    }


    return (
        <div>
            <h2>Select damage that apply to your car:</h2>
            <form>
                <select ref={inputRef}>
                    <option value="call">
                        Call
                    </option>
                    <option value="chat">
                        Chat
                    </option>
                </select>
                <button onClick={handleForm} type="button">
                    Submit
                </button>
            </form>
        </div>
    )
}

export default ContactOption

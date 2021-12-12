import React from "react";
import {CarDamageAppState, damageType} from "../model/state";
import {assertState} from "../model/assertState";

const ContactOption: React.FC<{
    setStateOfMachine: (newStateOfMachine: CarDamageAppState) => void,
    stateOfMachine: CarDamageAppState
}> = ({setStateOfMachine, stateOfMachine}) => {
    const inputRef = React.createRef<HTMLSelectElement>()
    const handleForm = () => {
        assertState(stateOfMachine, "CONTACT_OPTION")
        if  (inputRef.current) {
            const contactWay =  inputRef.current.value === "call" ? "CALL_SELLER" : "CHAT_SELLER"
            setStateOfMachine({
                type: contactWay,
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

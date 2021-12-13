import React from "react";
import {CarDamageAppState, damageType} from "../model/state";
import {assertState} from "../model/assertState";
import handleAsyncData from "../utils/restFaker";

const ContactOption: React.FC<{
    setStateOfMachine: (newStateOfMachine: CarDamageAppState) => void,
    stateOfMachine: CarDamageAppState
}> = ({setStateOfMachine, stateOfMachine}) => {
    assertState(stateOfMachine, "CONTACT_OPTION")
    const inputRef = React.createRef<HTMLSelectElement>()

    if(stateOfMachine.error)  alert('We have an issue! Try again later.')

    const handleForm = async () => {
        setStateOfMachine({type: "LOADING"})
        if  (inputRef.current) {
            setStateOfMachine({type: "LOADING"})
            try {
                const contactWayInputValue =  inputRef.current.value
                const contactWay= await handleAsyncData(contactWayInputValue === "call" ? "CALL_SELLER" : "CHAT_SELLER") as "CALL_SELLER" | "CHAT_SELLER"
                setStateOfMachine({
                    type: contactWay,
                    plateNumber: stateOfMachine.plateNumber,
                    chosenDamage: stateOfMachine.chosenDamage,
                    error: false
                })
            } catch (e) {
                setStateOfMachine({
                    type: "CONTACT_OPTION",
                    plateNumber: stateOfMachine.plateNumber,
                    chosenDamage: stateOfMachine.chosenDamage,
                    error: true
                })
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

import React from "react";
import {CarDamageAppState, damageType} from "../model/state";
import {assertState} from "../model/assertState";
import handleAsyncData from "../utils/restFaker";
import {useDispatch} from "react-redux";
import {callSeller, chatSeller, chooseContact, contactWithSeller} from "../store/actions";

const ContactOption: React.FC<{
    stateOfMachine: CarDamageAppState
}> = ({ stateOfMachine}) => {
    assertState(stateOfMachine, "CONTACT_OPTION")
    const inputRef = React.createRef<HTMLSelectElement>()
    const dispatch = useDispatch()

    if(stateOfMachine.error)  alert('We have an issue! Try again later.')

    const handleForm = async () => {
        if  (inputRef.current) {
            dispatch(contactWithSeller(inputRef.current.value as "call" | "chat"))
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

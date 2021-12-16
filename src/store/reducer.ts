import {Reducer} from "redux";
import {CarDamageAppState} from "../model/state";
import {Actions} from "./actions";
import {assertState} from "../model/assertState";

const reducer: Reducer = (state: CarDamageAppState = { type: "INITIAL"}, action: Actions) => {
    switch (action.type) {
        case "INITIAL":
            state = { type: "INITIAL"}
            return state
        case "LOADING":
            state = { type: "LOADING"}
            return state
        case "IDENTIFY_CAR":
            assertState(state, "INITIAL", "IDENTIFY_CAR")
            state = { type: "IDENTIFY_CAR", error: action.payload.error }
            return state
        case "CHOOSE_DAMAGE":
            assertState(state,  "LOADING")
            state = { type: "CHOOSE_DAMAGE", plateNumber: action.payload.plateNumber }
            return state
        case "CONTACT_OPTION":
            assertState(state, "CHOOSE_DAMAGE", "CONTACT_OPTION")
            state = { type: "CONTACT_OPTION", error: action.payload.error, plateNumber: action.payload.plateNumber, chosenDamage: action.payload.chooseDamage }
            return state
        case "CALL_SELLER":
            assertState(state, "LOADING")
            state = { type: "CALL_SELLER", plateNumber: action.payload.plateNumber, chosenDamage: action.payload.chooseDamage }
            return state
        case "CHAT_SELLER":
            assertState(state, "LOADING")
            state = { type: "CHAT_SELLER",  plateNumber: action.payload.plateNumber, chosenDamage: action.payload.chooseDamage }
            return state
        default:
            const leftover = action
            return state
    }
}

export default reducer

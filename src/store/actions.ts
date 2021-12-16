import {CarDamageAppState, damageType} from "../model/state";
import handleAsyncData from "../utils/restFaker";
import {assertState} from "../model/assertState";
import {Dispatch} from "redux";

export const initial = () => ({type: "INITIAL" as const})
export const identifyCar = (error: boolean) => ({type: "IDENTIFY_CAR" as const, payload: { error }})
export const chooseDamage = (plateNumber: number) => ({type: "CHOOSE_DAMAGE" as const, payload: { plateNumber }})
export const chooseContact = (plateNumber: number, error: boolean, chooseDamage: damageType) => {
    return {
        type: "CONTACT_OPTION" as const,
        payload: {
            plateNumber,
            error,
            chooseDamage
        }
    }
}
export const callSeller = (plateNumber: number, error: boolean, chooseDamage: damageType) => {
    return {
        type: "CALL_SELLER" as const,
        payload: {
            plateNumber,
            error,
            chooseDamage
        }
    }  as const
}
export const chatSeller = (plateNumber: number, error: boolean, chooseDamage: damageType) => {
    return {
        type: "CHAT_SELLER" as const,
        payload: {
            plateNumber,
            error,
            chooseDamage
        }
    }
}
export const loading = () => ({type: "LOADING" as const})

export const verifyPlateNumber =  (plateNumber: number) => {
    return async (dispatch: Dispatch, getState: () => CarDamageAppState) => {
        const state = getState()
        assertState(state, "IDENTIFY_CAR")
        dispatch(loading())
        try{
            const plate = await handleAsyncData(plateNumber) as number
            dispatch(chooseDamage(plate))
        } catch (e) {
            dispatch(identifyCar(true))
        }
    }

}

export const contactWithSeller = (contactWay: "call" | "chat") => {
    return async (dispatch: Dispatch, getState: () => CarDamageAppState) => {
        const state = getState()
        assertState(state, "CONTACT_OPTION")
        dispatch({type: "LOADING"})
        try {
            if (contactWay === "call") {
                dispatch(callSeller(state.plateNumber, false, state.chosenDamage))
            } else {
                dispatch(chatSeller(state.plateNumber, false, state.chosenDamage))
            }
        } catch (e) {
            dispatch(chooseContact(state.plateNumber, true, state.chosenDamage))
        }
    }
}

export type Actions =
    | ReturnType<typeof initial>
    | ReturnType<typeof verifyPlateNumber>
    | ReturnType<typeof chooseDamage>
    | ReturnType<typeof chooseContact>
    | ReturnType<typeof callSeller>
    | ReturnType<typeof chatSeller>
    | ReturnType<typeof loading>

import {damageType} from "../model/state";

//TODO use thunk
export const initial = () => ({type: "INITIAL" as const})
export const verifyPlateNumber = (error: boolean) => ({type: "IDENTIFY_CAR" as const, payload: { error }})
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

export type Actions =
    | ReturnType<typeof initial>
    | ReturnType<typeof verifyPlateNumber>
    | ReturnType<typeof chooseDamage>
    | ReturnType<typeof chooseContact>
    | ReturnType<typeof callSeller>
    | ReturnType<typeof chatSeller>
    | ReturnType<typeof loading>

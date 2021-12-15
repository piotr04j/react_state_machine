import {damageType} from "../model/state";

export const initial = () => ({type: "INITIAL"})
export const verifyPlateNumber = (error: boolean) => ({type: "IDENTIFY_CAR", payload: { error }})
export const chooseDamage = (plateNumber: number) => ({type: "CHOOSE_DAMAGE", payload: { plateNumber }})
export const chooseContact = (plateNumber: number, error: boolean, chooseDamage: damageType) => {
    return {
        type: "CONTACT_OPTION",
        payload: {
            plateNumber,
            error,
            chooseDamage
        }
    }
}
export const callSeller = (plateNumber: number, error: boolean, chooseDamage: damageType) => {
    return {
        type: "CALL_SELLER",
        payload: {
            plateNumber,
            error,
            chooseDamage
        }
    }
}
export const chatSeller = (plateNumber: number, error: boolean, chooseDamage: damageType) => {
    return {
        type: "CHAT_SELLER",
        payload: {
            plateNumber,
            error,
            chooseDamage
        }
    }
}
export const loading = () => ({type: 'LOADING'})


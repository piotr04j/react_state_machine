export type CarDamageAppState =
    | {
    type: "INITIAL"
}
    | {
    type: "IDENTIFY_CAR",
    error: boolean
}   | {
    type: "CHOOSE_DAMAGE"
    plateNumber: number
}
    | {
    type: "CONTACT_OPTION",
    error: boolean
} & carData
    | {
    type: "CHAT_SELLER"
} & carData
    | {
    type: "CALL_SELLER"
} & carData
   | {
    type: "LOADING"
}

type carData = {
    plateNumber: number,
    chosenDamage: damageType
}

export type damageType = "windshield" | "wheels" | "engine"

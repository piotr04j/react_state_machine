import React from "react";
import {CarDamageAppState} from "../model/state";

const Initial: React.FC<{setStateOfMachine: (newStateOfMachine: CarDamageAppState) => void}> = ({setStateOfMachine}) => {

    return (
        <div>
            <h2>We are sorry about your car has been damage. Please fill form to handle this problem.</h2>
            <button onClick={() => setStateOfMachine({ type: "IDENTIFY_CAR", error: false})}>
                Start
            </button>
        </div>
    )
}

export  default Initial

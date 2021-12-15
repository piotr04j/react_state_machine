import React from "react";
import {CarDamageAppState} from "../model/state";
import {useDispatch} from "react-redux";
import {verifyPlateNumber} from "../store/actions";

const Initial: React.FC = () => {
    const dispatch = useDispatch()

    return (
        <div>
            <h2>We are sorry about your car has been damage. Please fill form to handle this problem.</h2>
            <button onClick={() => dispatch(verifyPlateNumber(false))}>
                Start
            </button>
        </div>
    )
}

export  default Initial

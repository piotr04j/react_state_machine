import React from "react";
import {useDispatch} from "react-redux";
import {identifyCar, verifyPlateNumber} from "../store/actions";

const Initial: React.FC = () => {
    const dispatch = useDispatch()

    return (
        <div>
            <h2>We are sorry about your car has been damage. Please fill form to handle this problem.</h2>
            <button onClick={() => dispatch(identifyCar(false))}>
                Start
            </button>
        </div>
    )
}

export  default Initial

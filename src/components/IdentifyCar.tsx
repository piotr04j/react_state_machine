import React from "react";

const IdentifyCar: React.FC = () => {

    return (
        <div>
            <h2>Enter car's plate number:</h2>
            <form>
                <input type="number" />
                <button>
                    Submit
                </button>
            </form>
        </div>
    )
}

export  default IdentifyCar

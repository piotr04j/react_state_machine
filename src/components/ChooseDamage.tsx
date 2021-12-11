import React from "react";

const ChooseDamage: React.FC = () => {
    return (
        <div>
            <h2>Select damage that apply to your car:</h2>
            <form>
                <select>
                    <option>
                        windshield
                    </option>
                    <option>
                        wheels
                    </option>
                    <option>
                        engine
                    </option>
                </select>
            </form>
        </div>
    )
}

export default ChooseDamage

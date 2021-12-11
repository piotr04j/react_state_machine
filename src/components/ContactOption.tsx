import React from "react";

const ContactOption: React.FC = () => {
    return (
        <div>
            <h2>Select damage that apply to your car:</h2>
            <form>
                <select>
                    <option>
                        Call
                    </option>
                    <option>
                        Chat
                    </option>
                </select>
            </form>
        </div>
    )
}

export default ContactOption

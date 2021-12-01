import React from 'react';
import gear from "../assets/images/gear.svg";

function Settings({setDisabled}) {
    return (
        <button className="settings"
                onClick={() => setDisabled(prevState => !prevState)}>
            <img src={gear} alt="Settings"/>
        </button>
    );
}

export default Settings;
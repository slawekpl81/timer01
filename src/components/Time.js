import React from 'react';

function Time({minutes, handleMinutes, seconds, handleSeconds, disabled}) {
    return (
        <div className="time">
            <div className="minutes">
                <input type="text"
                       value={minutes}
                       onChange={handleMinutes}
                       disabled={disabled}/>
            </div>
            <div className="colon">:</div>
            <div className="seconds">
                <input type="text"
                       value={seconds}
                       onChange={handleSeconds}
                       disabled={disabled}/>
            </div>
        </div>
    );
}

export default Time;
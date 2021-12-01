import React from 'react';

function Start({handleStart, working}) {
    return (
        <button className="start"
                onClick={handleStart}>
            {working ? 'stop' : 'start'}
        </button>
    );
}

export default Start;
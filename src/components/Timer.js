import React, {useEffect, useState} from 'react';
import Time from "./Time";
import Start from "./Start";
import Settings from "./Settings";

function Timer({setRed}) {
    const [working, setWorking] = useState(false);
    const [disabled, setDisabled] = useState(true);
    const [minutes, setMinutes] = useState('15');
    const [seconds, setSeconds] = useState('00');
    const handleTime = event => {
        setWorking(false);
        let temp = event.target.value;
        if (temp.length > 2) temp = temp.slice(-2);
        if (temp.length === 0) temp = '00';
        if (isNaN(Number(temp))) temp = '00';
        return temp;
    }
    const handleMinutes = event => {
        setMinutes(handleTime(event));
    }
    const handleSeconds = event => {
        let temp = handleTime(event)
        if (Number(temp) > 59) temp = '00';
        setSeconds(temp);
    }
    const handleStart = () => {
        setWorking(prevState => !prevState);
        setDisabled(true);
    }
    useEffect(() => {
            let tempSec = Number(seconds);
            let tempMin = Number(minutes);
            if (tempSec <= 0 && tempMin <= 0) {
                setWorking(false);
                setSeconds('00');
                setMinutes('00');
                setRed(true);
            } else setRed(false);
            const timer = setTimeout(() => {
                if (working) {
                    tempSec--;
                    if (tempSec < 0) {
                        tempSec = 59;
                        tempMin--;
                    }
                    setSeconds(tempSec.toString());
                    setMinutes(tempMin.toString());
                }
            }, 1000);
            return () => clearTimeout(timer);
        }
    )

    return (
        <div className="timer">
            <Time minutes={minutes}
                  handleMinutes={handleMinutes}
                  seconds={seconds}
                  handleSeconds={handleSeconds}
                  disabled={disabled}
            />
            <Start handleStart={handleStart}
                   working={working}/>
            <Settings setDisabled={setDisabled}/>
        </div>
    );
}

export default Timer;
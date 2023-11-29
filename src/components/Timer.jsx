import React, { useState } from "react";

// let seconds = 0;
let testNum = 0;

const Timer = () => {
    const [valueSetingTimer, setValueSetingTimer] = useState("");
    const [secondsCounter, setSecondsCounter] = useState(
        "00 : 00 : 00 - Ваше время истекло"
    );
    const [seconds, setSeconds] = useState(0);

    console.log({ setValueSetingTimer });
    console.log({ setSecondsCounter });
    console.log({ setSeconds });

    function testing1() {
        setSecondsCounter.value = setValueSetingTimer(valueSetingTimer);
        setSecondsCounter(secondsCounter + 1);
        console.log(secondsCounter);
        return secondsCounter;
    }

    function testing2() {
        setSeconds(seconds + 1);
        console.log(seconds);
        return seconds;
    }

    function testing3() {
        let testNum = valueSetingTimer;
        testNum += 1;
        console.log(testNum);
        return testNum;
    }

    return (
        <div>
            <br />
            <h2>{valueSetingTimer} test</h2>
            <input
                placeholder="Введите секунды"
                type="text"
                value={valueSetingTimer}
                onChange={(event) => setValueSetingTimer(event.target.value)}
            />

            <button onClick={testing1}>Start</button>
            <button onClick={testing2}>Start</button>
            <button onClick={testing3}>Start</button>

            <br />
            <br />

            <span>{secondsCounter} test</span>
            <br />

            <span>{seconds} test2</span>
            <br />
            <span>{testNum} test3</span>
        </div>
    );
};

export default Timer;

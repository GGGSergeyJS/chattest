import React, { useState, useEffect } from "react";
import MyInput from "./UI/input/MyInput.jsx";
import MyButton from "./UI/button/MyButton.jsx";

const Timer = () => {
    const [inputValue, setInputValue] = useState("");
    const [seconds, setSeconds] = useState("");
    const [initialSeconds, setInitialSeconds] = useState("");
    const [isActive, setIsActive] = useState(false);
    const [alert, setAlert] = useState("Таймер обратного отсчета");
    const [isButtonDisabled, setIsButtonDisabled] = useState(false);

    useEffect(() => {
        let intervalTimer;

        if (isActive && seconds > 0) {
            intervalTimer = setInterval(() => {
                setSeconds((prevSeconds) => prevSeconds - 1);
            }, 1000);
        }

        return () => clearInterval(intervalTimer);
    }, [isActive, seconds, initialSeconds]);

    const handleInputChange = (event) => {
        const { value } = event.target;
        setInputValue(value);
        setInitialSeconds(value);
    };

    const addZero = (digitTimer) => {
        if (digitTimer <= 9) {
            return "0" + digitTimer;
        } else {
            return digitTimer;
        }
    };

    function replaceEndingWord(num, endingWord) {
        let twoDigitNum = Math.abs(num) % 100;
        let singleDigitNum = twoDigitNum % 10;
        if (twoDigitNum > 10 && twoDigitNum < 20) {
            return endingWord[2];
        }
        if (singleDigitNum > 1 && singleDigitNum < 5) {
            return endingWord[1];
        }
        if (singleDigitNum === 1) {
            return endingWord[0];
        }
        return endingWord[2];
    }

    function replaceHourDigitToWord(hoursDigit) {
        let hoursWord = "";

        switch (hoursDigit) {
            case 0:
                hoursWord = "Ноль";
                break;
            case 1:
                hoursWord = "Один";
                break;
            case 2:
                hoursWord = "Два";
                break;
            case 3:
                hoursWord = "Три";
                break;
            case 4:
                hoursWord = "Четыре";
                break;
            case 5:
                hoursWord = "Пять";
                break;
            case 6:
                hoursWord = "Шесть";
                break;
            case 7:
                hoursWord = "Семь";
                break;
            case 8:
                hoursWord = "Восемь";
                break;
            case 9:
                hoursWord = "Девять";
                break;
            case 10:
                hoursWord = "Десять";
                break;
            case 11:
                hoursWord = "Одиннадцать";
                break;
            case 12:
                hoursWord = "Двенадцать";
                break;
            case 13:
                hoursWord = "Тринадцать";
                break;
            case 14:
                hoursWord = "Четырнадцать";
                break;
            case 15:
                hoursWord = "Пятнадцать";
                break;
            case 16:
                hoursWord = "Шестнадцать";
                break;
            case 17:
                hoursWord = "Семнадцать";
                break;
            case 18:
                hoursWord = "Восемнадцать";
                break;
            case 19:
                hoursWord = "Девятнадцать";
                break;
            case 20:
                hoursWord = "Двадцать";
                break;
            case 21:
                hoursWord = "Двадцать один";
                break;
            case 22:
                hoursWord = "Двадцать два";
                break;
            case 23:
                hoursWord = "Двадцать три";
                break;
            default:
        }
        return hoursWord;
    }

    const startTimer = () => {
        if (initialSeconds >= 86400) {
            setAlert("Введите число меньше, чем 86400");
            setTimeout(() => {
                resetTimer();
            }, 1000);
        } else if (initialSeconds <= 0) {
            setAlert("Введите число больше нуля");
            setTimeout(() => {
                resetTimer();
            }, 1000);
        } else if (isNaN(initialSeconds)) {
            setAlert("Введите число цифрами");
            setTimeout(() => {
                resetTimer();
            }, 1000);
        } else if (!Number.isInteger(+initialSeconds)) {
            setAlert("Введите целое число");
            setTimeout(() => {
                resetTimer();
            }, 1000);
        } else if (/^0\d+/.test(initialSeconds)) {
            setAlert("Введите число без ведущих нулей");
            setTimeout(() => {
                resetTimer();
            }, 1000);
        } else if (!isButtonDisabled) {
            setSeconds(parseInt(initialSeconds, 10));
            setIsActive(true);
            setInputValue("");
            setIsButtonDisabled(true);
        }
    };

    const stopTimer = () => {
        setIsActive(false);
        setInitialSeconds(seconds);
        setIsButtonDisabled(false);
    };

    const resetTimer = () => {
        setIsActive(false);
        setSeconds("");
        setInitialSeconds("");
        setInputValue("");
        setAlert("Таймер обратного отсчета");
        setIsButtonDisabled(false);
    };

    const formatTime = (time) => {
        const hours = Math.floor((time / (60 * 60)) % 24);
        const minutes = addZero(Math.floor(time / 60) % 60);
        const remainingSeconds = addZero(time % 60);

        if (seconds === 0) {
            return (
                setSeconds(""),
                setAlert("00 : 00 : 00 - Ваше время истекло"),
                setTimeout(() => {
                    resetTimer();
                }, 3000)
            );
        } else {
            return `${addZero(hours)}:${minutes}:${remainingSeconds} -
            ${replaceHourDigitToWord(hours)}
            ${replaceEndingWord(hours, [
                "час",
                "часа",
                "часов",
            ])}, ${minutes} ${replaceEndingWord(minutes, [
                "минута",
                "минуты",
                "минут",
            ])}, ${remainingSeconds} ${replaceEndingWord(remainingSeconds, [
                "секунда",
                "секунды",
                "секунд",
            ])}.`;
        }
    };

    return (
        <div style={{ width: 600 }}>
            <hr style={{ margin: "15px 0" }} />
            <h2>{alert}</h2>
            <hr style={{ margin: "15px 0" }} />
            <MyInput
                placeholder="Введите секунды"
                type="text"
                value={inputValue}
                onChange={handleInputChange}
            />
            <MyButton
                style={{
                    opacity: isButtonDisabled ? 0.5 : 1,
                    cursor: isButtonDisabled ? "not-allowed" : "pointer",
                }}
                onClick={startTimer}
                disabled={isButtonDisabled}
            >
                Старт
            </MyButton>
            <MyButton style={{ marginLeft: 5 }} onClick={stopTimer}>
                Стоп
            </MyButton>
            <MyButton style={{ marginLeft: 5 }} onClick={resetTimer}>
                Сброс
            </MyButton>
            <hr style={{ margin: "15px 0" }} />
            <h2>{formatTime(seconds)}</h2>
            <hr style={{ margin: "15px 0" }} />
        </div>
    );
};

export default Timer;

import { useEffect, useState } from "react";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import "./App.css";
import Modal from "./components/Modal/Modal";
function App() {
    let initialMinutes = 2;
    let initialSeconds = 0;
    const [over, setOver] = useState(false);
    const [stop, setStop] = useState(false);
    const [[minutes, seconds], setTime] = useState([
        initialMinutes,
        initialSeconds,
    ]);
    const [attension, setAttension] = useState("");
    const tick = () => {
        if (over || stop) return;
        if (minutes === 0 && seconds === 0) {
            setOver(true);
            setStop(true);
            setTime([0, 0]);
        } else if (seconds === 0) {
            setTime([minutes - 1, 59]);
        } else {
            setTime([minutes, seconds - 1]);
            if (minutes === 0 && seconds === 20) {
                setAttension("orange");
            }
        }
    };

    useEffect(() => {
        const timerID = setInterval(() => tick(), 1000);
        return () => clearInterval(timerID); // Очистка интервала
    }, [minutes, seconds, over, stop]);

    return (
        <>
            {stop ? (
                <Modal
                    over={over}
                    closeModal={() => {
                        setStop(!stop);
                    }}
                ></Modal>
            ) : (
                <div className={"backForModal"}>
                    <Header
                        minutes={minutes}
                        seconds={seconds}
                        over={over}
                        setOver={setOver}
                        setStop={setStop}
                        attension={attension} // Передаем цветовое состояние
                    />
                    <Main over={over}></Main>
                </div>
            )}
        </>
    );
}

export default App;

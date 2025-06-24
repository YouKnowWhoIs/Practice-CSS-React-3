import { useEffect, useState } from "react";
import "../../style/timer/timer.css";

function Timer() {
  const [seconds, setSeconds] = useState(0);
  const [isStart, setIsStart] = useState(true);

  useEffect(() => {
    if (!isStart) return;

    const timer = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [isStart]);

  const handleStart = () => {
    setIsStart(true);
  };

  const handleStop = () => {
    setIsStart(false);
  };

  const handleReset = () => {
    setSeconds(0);
    setIsStart(true);
  };

  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;

  return (
    <div id="timer">
      <p>
        {seconds >= 60 ? `${minutes} хв : ` : ""}
        {`${
          remainingSeconds < 10 ? `0${remainingSeconds}` : remainingSeconds
        } сек`}
      </p>
      <div className="conteinerBtn">
        <button type="button" onClick={handleStop}>
          Стоп
        </button>
        <button type="button" onClick={handleStart}>
          Старт
        </button>
        <button type="button" onClick={handleReset}>
          Скинути
        </button>
      </div>
    </div>
  );
}

export default Timer;

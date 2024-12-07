import "./Clock.css";
import { useEffect, useState } from "react";
import {
  defaultBreakTime,
  defaultSessionTime,
  minTime,
  maxTime,
  interval,
} from "../../utils/constants.js";
import TimeSetter from "../TimeSetter/TimeSetter";
import Display from "../Display/Display.jsx";

function Clock() {
  const [breakTime, setBreakTime] = useState(defaultBreakTime);
  const [sessionTime, setSessionTime] = useState(defaultSessionTime);
  const [currentTime, setCurrentTime] = useState(defaultSessionTime);
  const [timerRunning, setTimerRunning] = useState(false);
  const [timeType, setTimeType] = useState("Session");

  useEffect(() => {
    const interval = setInterval(() => decrementcurrentTimer(), 1000);

    return () => clearInterval(interval);
  }, [currentTime, timerRunning]);

  const resetClock = () => {
    setBreakTime(defaultBreakTime);
    setSessionTime(defaultSessionTime);
    setCurrentTime(defaultSessionTime);
    setTimerRunning(false);
    setTimeType("Session");

    document.getElementById("beep").pause();
    document.getElementById("beep").currentTime = 0;
  };

  const startStopClock = () => {
    setTimerRunning(!timerRunning);
  };

  const changeBreakTime = (time) => {
    if (timerRunning) return;
    setBreakTime(time);
  };

  const changeSessionTime = (time) => {
    if (timerRunning) return;
    setSessionTime(time);
    setCurrentTime(time);
  };

  const decrementcurrentTimer = () => {
    if (!timerRunning) return;

    if (currentTime === 0) {
      document.getElementById("beep").play().catch(console.error);

      if (timeType === "Session") {
        setTimeType("Break");
        setCurrentTime(breakTime);
      } else {
        setTimeType("Session");
        setCurrentTime(sessionTime);
      }
    } else {
      setCurrentTime(currentTime - 1);
    }
  };

  return (
    <div className="clock">
      <div className="clock__setters row">
        <div className="clock__break col-sm-4 d-flex flex-column align-items-center">
          <h4 id="break-label" className="clock__break-label">
            Break Length
          </h4>
          <TimeSetter
            time={breakTime}
            setTime={changeBreakTime}
            min={minTime}
            max={maxTime}
            interval={interval}
            type={"break"}
          />
        </div>
        <div className="clock__setters-divider col-sm-4"> </div>
        <div className="clock__work col-sm-4 d-flex flex-column align-items-center">
          <h4 id="session-label" className="clock__work-label">
            Session Length
          </h4>
          <TimeSetter
            time={sessionTime}
            setTime={changeSessionTime}
            min={minTime}
            max={maxTime}
            interval={interval}
            type={"session"}
          />
        </div>
      </div>
      <Display
        currentTime={currentTime}
        timerRunning={timerRunning}
        onStartStop={startStopClock}
        onReset={resetClock}
        timeType={timeType}
      />
      <audio
        id="beep"
        src="https://cdn.freecodecamp.org/testable-projects-fcc/audio/BeepSound.wav"
      ></audio>
    </div>
  );
}

export default Clock;

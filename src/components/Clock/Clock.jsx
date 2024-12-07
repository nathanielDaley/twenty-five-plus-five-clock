import "./Clock.css";
import { useEffect, useState } from "react";
import {
  defaultBreakTime,
  defaultWorkTime,
  minTime,
  maxTime,
  interval,
} from "../../utils/constants.js";
import TimeSetter from "../TimeSetter/TimeSetter";
import Display from "../Display/Display.jsx";

function Clock() {
  const [breakTime, setBreakTime] = useState(defaultBreakTime);
  const [workTime, setWorkTime] = useState(defaultWorkTime);
  const [sessionTime, setSessionTime] = useState(defaultWorkTime);
  const [timerRunning, setTimerRunning] = useState(false);
  const [timeType, setTimeType] = useState("Work");

  useEffect(() => {
    const interval = setInterval(() => decrementSessionTimer(), 1000);

    return () => clearInterval(interval);
  }, [sessionTime, timerRunning]);

  const resetClock = () => {
    setBreakTime(defaultBreakTime);
    setWorkTime(defaultWorkTime);
    setSessionTime(defaultWorkTime);
    setTimerRunning(false);

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

  const changeWorkTime = (time) => {
    if (timerRunning) return;
    setWorkTime(time);
    setSessionTime(time);
  };

  const decrementSessionTimer = () => {
    if (!timerRunning) return;
    let newSessionTime = Math.floor(sessionTime - 1);
    if (newSessionTime <= 0) {
      newSessionTime = 0;

      document.getElementById("beep").play().catch(console.error);

      if (timeType === "Work") {
        setTimeType("Break");
        setSessionTime(breakTime);
      } else {
        setTimeType("Work");
        setSessionTime(workTime);
      }
    } else {
      setSessionTime(newSessionTime);
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
          <h4 is="session-label" className="clock__work-label">
            Work Length
          </h4>
          <TimeSetter
            time={workTime}
            setTime={changeWorkTime}
            min={minTime}
            max={maxTime}
            interval={interval}
            type={"work"}
          />
        </div>
      </div>
      <Display
        sessionTime={sessionTime}
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

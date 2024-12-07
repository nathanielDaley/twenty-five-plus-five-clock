import "./Clock.css";
import { useState } from "react";
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

  const resetClock = () => {
    console.log("reset");
  };

  const startStopClock = () => {
    console.log("start-stop");
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
            setTime={setBreakTime}
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
            setTime={setWorkTime}
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
      />
      <audio
        id="beep"
        src="https://cdn.freecodecamp.org/testable-projects-fcc/audio/BeepSound.wav"
      ></audio>
    </div>
  );
}

export default Clock;

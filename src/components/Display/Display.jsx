import "./Display.css";
import { FaPause, FaPlay, FaUndo } from "react-icons/fa";

function Display({ sessionTime, timerRunning, onStartStop, onReset }) {
  const minutes = Math.floor(sessionTime / 60);
  const seconds = Math.floor(sessionTime % 60);
  return (
    <div className="display d-flex flex-column align-items-center">
      <h4 id="timer-label" className="display__label">
        {`${minutes} : ${seconds === 0 ? "00" : seconds}`}
      </h4>
      <span
        id="time-left"
        className="display__time-left"
        style={{ color: `${timerRunning ? "red" : "white"}` }}
      ></span>
      <div className="display__buttons">
        <button
          id="start_stop"
          className="btn btn-primary"
          onClick={onStartStop}
        >
          {timerRunning ? <FaPause /> : <FaPlay />}
        </button>
        <button id="reset" className="btn btn-primary ms-2" onClick={onReset}>
          <FaUndo />
        </button>
      </div>
    </div>
  );
}

export default Display;

import "./Display.css";
import { FaPause, FaPlay, FaUndo } from "react-icons/fa";

function Display({
  currentTime,
  timerRunning,
  onStartStop,
  onReset,
  timeType,
}) {
  const minutes = Math.floor(currentTime / 60);
  const seconds = Math.floor(currentTime % 60);

  const formattedTime = `${minutes.toString().padStart(2, "0")}:${seconds
    .toString()
    .padStart(2, "0")}`;

  return (
    <div className="display d-flex flex-column align-items-center">
      <h4 id="timer-label" className={`display__label fs-2`}>
        {timeType}
      </h4>
      <span
        id="time-left"
        className={`display__timer fs-1 ${
          timerRunning ? "text-danger" : "text-dark"
        }`}
      >
        {`${formattedTime}`}
      </span>
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

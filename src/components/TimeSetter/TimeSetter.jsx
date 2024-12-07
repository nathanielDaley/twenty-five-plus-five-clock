import "./TimeSetter.css";
import { FaArrowDown, FaArrowUp } from "react-icons/fa";

function TimeSetter({ time, setTime, min, max, interval, type }) {
  return (
    <div className="time-setter d-flex justify-content-center">
      <button
        onClick={() => (time > min ? setTime(time - interval) : null)}
        id={`${type}-decrement`}
        className="btn btn-primary"
      >
        <FaArrowDown />
      </button>
      <span id={`${type}-length`} className="fs-2 ms-2 me-2">
        {time / interval}
      </span>
      <button
        onClick={() => (time < max ? setTime(time + interval) : null)}
        id={`${type}-increment`}
        className="btn btn-primary"
      >
        <FaArrowUp />
      </button>
    </div>
  );
}

export default TimeSetter;

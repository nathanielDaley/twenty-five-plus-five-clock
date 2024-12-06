import { useState } from "react";
import {
  defaultBreakTime,
  defaultWorkTime,
  minTime,
  maxTime,
  interval,
} from "../../utils/constants.js";

function Clock() {
  const [breakTime, setBreakTime] = useState(defaultBreakTime);
  const [workTime, setWorkTime] = useState(defaultWorkTime);
  const [sessionTime, setSessionTime] = useState(0);

  return <div className="clock">test</div>;
}

export default Clock;

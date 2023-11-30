import React, { useEffect, useMemo, useState } from "react";
import { GameStatus } from "../types";

interface StopWatchProps {
  gameStatus: GameStatus;
}

const StopWatch: React.FC<StopWatchProps> = ({ gameStatus }) => {
  const [counter, setCounter] = useState(0);

  const timeUnits = useMemo(() => {
    const minutes = Math.floor(counter / 60);
    const sec = Math.floor(counter) % 60;
    return { minutes, sec };
  }, [counter]);

  useEffect(() => {
    if (gameStatus === GameStatus.started)
      setTimeout(() => setCounter(counter + 0.125), 125);
    else if (gameStatus === GameStatus.notStarted) {
      setCounter(0);
    }
  }, [gameStatus, counter]);

  return (
    <div>
      {timeUnits.minutes < 10 ? `0${timeUnits.minutes}` : timeUnits.minutes}:
      {timeUnits.sec < 10 ? `0${timeUnits.sec}` : timeUnits.sec}
    </div>
  );
};

export default StopWatch;

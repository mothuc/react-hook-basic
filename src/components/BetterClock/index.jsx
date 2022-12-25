import React from "react";
import useClock from "../../hooks/useClock";

function BetterClock(props) {
  const { timeString } = useClock();
  return (
    <div style={{backgroundColor: "blue", textAlign: 'center'}}>
      <p>Better Clock</p>
      <p style={{ fontSize: "42px" }}>{timeString}</p>
    </div>
  );
}

export default BetterClock;

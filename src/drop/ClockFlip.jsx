import React, { useState, useEffect } from "react";
import { Box } from "@mui/material";


const FlipClock = ({ size }) => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 60000); // Update every minute

    return () => clearInterval(interval); // Clear interval on unmount
  }, []);

  const formatTime = (date) => {
    let hours = date.getHours();
    const minutes = date.getMinutes().toString().padStart(2, "0");
    const ampm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12;
    hours = hours ? hours : 12; // 12:00 is displayed as 12, not 0
    const hoursStr = hours.toString().padStart(2, "0");
    return { hours: hoursStr, minutes, ampm };
  };

  const { hours, minutes, ampm } = formatTime(time);

  return (
    <Box
      style={{
        width: size.width,
        height: size.height,
        backgroundColor: "none",
        color: "white",
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        fontFamily: "monospace",
        borderRadius: "8px",
        overflow: "hidden",
      }}
    >
      <FlipUnit unit={hours[0]} size={size} />
      <FlipUnit unit={hours[1]} size={size} />
      <span>:</span>
      <FlipUnit unit={minutes[0]} size={size} />
      <FlipUnit unit={minutes[1]} size={size} />
      <span>{ampm}</span>
    </Box>
  );
};

const FlipUnit = ({ unit, size }) => {
  return (
    <div
      className="flip-unit"
      style={{
        width: size.width * 0.2,
        height: size.height * 0.6,
        fontSize: `${size.width * 0.15}px`,
        backgroundColor: "none",
        color: "white",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
        borderRadius: "4px",
        overflow: "hidden",
      }}
    >
      {unit}
    </div>
  );
};

export default FlipClock;

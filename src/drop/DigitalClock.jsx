import { useState, useEffect } from "react";
import { Box } from "@mui/material";

const DigitalClock = ({ size }) => {
  const [time, setTime] = useState(new Date());

  // Update time every second
  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, []);

  const formatTime = (date) => {
    const hours = date.getHours().toString().padStart(2, "0");
    const minutes = date.getMinutes().toString().padStart(2, "0");
    const seconds = date.getSeconds().toString().padStart(2, "0");
    return `${hours}:${minutes}:${seconds}`;
  };

  return (
    <Box
      style={{
        width: size.width,
        height: size.height,
        backgroundColor: "none",
        color: "white",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontSize: `${size.width * 0.2}px`,
        fontFamily: "monospace",
        borderRadius: "8px",
      }}
    >
      {formatTime(time)}
    </Box>
  );
};

export default DigitalClock;

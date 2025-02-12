// import React from 'react'
// import { useEffect, useState } from "react";

// const AnalogClock = () => {
//   const [time, setTime] = useState(new Date());
//   const [size, setSize] = useState({ width: 200, height: 200 });

//   useEffect(() => {
//     const timerId = setInterval(() => {
//       setTime(new Date());
//     }, 1000);
//     return () => clearInterval(timerId);
//   }, []);

//   return (
//     <div className="clock">
//     <div
//       className="hour_hand"
//       style={{
//         transform: `rotateZ(${time.getHours() * 30}deg)`,
//       }}
//     />
//     <div
//       className="min_hand"
//       style={{
//         transform: `rotateZ(${time.getMinutes() * 6}deg)`,
//       }}
//     />
//     <div
//       className="sec_hand"
//       style={{
//         transform: `rotateZ(${time.getSeconds() * 6}deg)`,
//       }}
//     />
//     <span className="twelve">12</span>
//     <span className="one">1</span>
//     <span className="two">2</span>
//     <span className="three">3</span>
//     <span className="four">4</span>
//     <span className="five">5</span>
//     <span className="six">6</span>
//     <span className="seven">7</span>
//     <span className="eight">8</span>
//     <span className="nine">9</span>
//     <span className="ten">10</span>
//     <span className="eleven">11</span>
//   </div>
//   )
// }

// export default AnalogClock

import React, { useEffect, useState } from "react";
import { Rnd } from "react-rnd";
import "../Home.css";
import { Box } from "@mui/material";

const AnalogClock = ({ size }) => {
  const [time, setTime] = useState(new Date());
  // const [size, setSize] = useState({ width: 150, height: 150 });

  useEffect(() => {
    const timerId = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(timerId);
  }, []);

  return (
    // <div
    //   style={{
    //     width: "100%",
    //     height: "60vh",
    //     position: "relative",
        
    //   }}
    // >
    //   <Rnd
    //     default={{
    //       x: 100,
    //       y: 100,
    //       width: size.width,
    //       height: size.height,
    //     }}
    //     minWidth={100}
    //     minHeight={50}
    //     bounds="parent"
    //     enableResizing={{
    //       top: true,
    //       right: true,
    //       bottom: true,
    //       left: true,
    //       topRight: true,
    //       bottomRight: true,
    //       bottomLeft: true,
    //       topLeft: true,
    //     }}
    //     onResize={(e, direction, ref) => {
    //       setSize({ width: ref.offsetWidth, height: ref.offsetHeight });
    //     }}
    //     style={{
    //       display: "flex",
    //       justifyContent: "center",
    //       alignItems: "center",
    //       border: "1px solid white",
    //     }}
    //   >
    
        <Box
        minWidth={50}
        minHeight={50}
        className="clock"
        style={{
          width: size.width,
          height: size.height,
          position: "relative",
          borderRadius: "100%",
          background: "black",
        }}
        >
          {/* Hour Hand */}
          <div
            className="hour_hand"
            style={{
              width: "6px",
              height: `${size.height * 0.3}px`,
              background: "white",
              position: "absolute",
              left: "50%",
              top: "20%",
              transformOrigin: "bottom center",
              transform: `rotateZ(${
                time.getHours() * 30 + time.getMinutes() / 2
              }deg)`,
            }}
          />

          {/* Minute Hand */}
          <div
            className="min_hand"
            style={{
              width: "4px",
              height: `${size.height * 0.4}px`,
              background: "white",
              position: "absolute",
              left: "50%",
              top: "10%",
              transformOrigin: "bottom center",
              transform: `rotateZ(${time.getMinutes() * 6}deg)`,
            }}
          />
          <div
            className="sec_hand"
            style={{
              transform: `rotateZ(${time.getSeconds() * 6}deg)`,
            }}
          />
          <span className="twelve">12</span>
          <span className="one">1</span>
          <span className="two">2</span>
          <span className="three">3</span>
          <span className="four">4</span>
          <span className="five">5</span>
          <span className="six">6</span>
          <span className="seven">7</span>
          <span className="eight">8</span>
          <span className="nine">9</span>
          <span className="ten">10</span>
          <span className="eleven">11</span>
        </Box>
    //   </Rnd>
    // </div>
  );
};

export default AnalogClock;

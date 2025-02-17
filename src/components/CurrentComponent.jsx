// import { Box } from '@mui/material';
// import React, { useState } from 'react'
// import { useDrop } from "react-dnd";
// import AnalogClock from "../drop/AnalogClock";
// import { Rnd } from "react-rnd";
// import DraggableText from "../drop/DraggableText";
// import DigitalClock from "../drop/DigitalClock";
// import FlipClock from "../drop/ClockFlip";

// const CurrentComponent = ({videocontents,videoBoxColor}) => {

//       const [droppedItems, setDroppedItems] = useState([]);
//       const [size, setSize] = useState({ width: 150, height: 150 });

//       const [{ isOver }, drop] = useDrop(() => ({
//         accept: ["TEXT", "CLOCK"], // ✅ Accept both "TEXT" and "CLOCK"
//         drop: (item) => {
//           setDroppedItems((prev) => [...prev, item]); // Store item object
//         },
//         collect: (monitor) => ({
//           isOver: monitor.isOver(),
//         }),
//       }));

//   return (
//     <Box
//     ref={drop}
//     className="video_box"
//     style={{ ...videocontents, backgroundColor: videoBoxColor }}
//   >
//     <div
//       style={{
//         width: "100%",
//         height: "100%",
//         position: "relative",
//         border: "1px solid #ccc",
//       }}
//     >
//       {droppedItems.map((item, index) => (
//         <Rnd
//           key={index}
//           bounds="parent"
//           minWidth={100}
//           minHeight={100}
//           enableResizing={{
//             top: true,
//             right: true,
//             bottom: true,
//             left: true,
//             topRight: true,
//             bottomRight: true,
//             bottomLeft: true,
//             topLeft: true,
//           }}
//           style={{
//             display: "flex",
//             justifyContent: "center",
//             alignItems: "center",
//             background: "none",
//             // border: "2px solid #fff",
//             // border: isOver ? "2px solid #fff" : "transparent",

//             cursor: "move",
//           }}
//           size={size}
//           onResizeStop={(e, direction, ref) => {
//             setSize({
//               width: ref.offsetWidth,
//               height: ref.offsetHeight,
//             });
//           }}
//           className="rnd_div"
//         >
//           <Box key={index}>
//             {item.type === "analog" ? (
//               <AnalogClock size={size} />
//             ) : item.type === "digital" ? (
//               <DigitalClock size={size} />
//             ) : item.type === "flip" ? (
//               <FlipClock size={size} />
//             ) : item.type === "text" ? (
//               <Box className="dragText">
//                 <input type="text" placeholder="Text" />
//               </Box>
//             ) : (
//               <Box>test</Box>
//             )}
//           </Box>
//         </Rnd>
//       ))}
//     </div>
//   </Box>
//   )
// }

// export default CurrentComponent

import zIndex from "@mui/material/styles/zIndex";
import { borderRadius, Box, padding } from "@mui/system";
import React, { useState } from "react";
import { useDrop } from "react-dnd";
import AnalogClock from "../drop/AnalogClock";
import { Rnd } from "react-rnd";
import DigitalClock from "../drop/DigitalClock";
import FlipClock from "../drop/ClockFlip";
import { Transform } from "@mui/icons-material";
import DeleteIcon from "@mui/icons-material/Delete";
import Element from "./Element";

const CurrentComponent = ({
  info,
  current_component,
  removeComponent,
  videocontents,
}) => {
  const randValue = Math.floor(Math.random() * 100 + 1);
  let html = "";

  if (info.name === "main_frame") {
    html = (
      <Box
        onClick={() => info.setCurrentComponent(info)}
        //    ref={drop}
        className="video_box"
        style={{
          ...videocontents,
          height: info.height + "px",
          width: info.width + "px",
          background: info.color,
          zIndex: info.z_index,
          image: info.image,
          backgroundImage: `url(${info.image})`,
        }}
      ></Box>
    );
  }

 

  if (info.name === "shape" && info.type === "rectangle") {
    html = (
      <Box
        // className="shape group relative"
        id={randValue}
        onClick={() => info.setCurrentComponent(info)}
        style={{
          height: info.height + "px",
          width: info.width + "px",
          background: info.color,
          opacity: info.opacity,
          left: info.left + "px",
          top: info.top + "px",
          Transform: info.rotate ? `rotate(${info.rotate}deg)` : `rotate(0deg)`,
          zIndex: info.z_index,
        }}
        className="absolute group hover:border-[2px] hover:border-indigo-500"
      >
        <Element id={randValue} info={info} exId="" />
        {current_component.id === info.id && (
          <div onClick={() => removeComponent(info.id)}>
            <DeleteIcon sx={{ cursor: "pointer", color: "gray" }} />
          </div>
        )}
      </Box>
    );
  }
  if (info.name === "shape" && info.type === "circle") {
    html = (
      <Box
        // className="shape"
        id={randValue}
        onClick={() => info.setCurrentComponent(info)}
        style={{
          left: info.left + "px",
          top: info.top + "px",

          Transform: info.rotate ? `rotate(${info.rotate}deg)` : `rotate(0deg)`,
          zIndex: info.z_index,
        }}
        className="absolute group hover:border-[2px] hover:border-indigo-500"
      >
        <Element id={randValue} info={info} exId={`${randValue}c`} />
        <Box
          id={`${randValue}c`}
          className="rounded-full"
          style={{
            height: info.width + "px",
            width: info.width + "px",
            background: info.color,
            opacity: info.opacity,
          }}
        >
          {current_component.id === info.id && (
            <div onClick={() => removeComponent(info.id)}>
              <DeleteIcon sx={{ cursor: "pointer", color: "gray" }} />
            </div>
          )}
        </Box>
      </Box>
    );
  }

  if (info.name === "shape" && info.type === "triangle") {
    html = (
      <Box
        id={randValue}
        onClick={() => info.setCurrentComponent(info)}
        style={{
          left: info.left + "px",
          top: info.top + "px",

          Transform: info.rotate ? `rotate(${info.rotate}deg)` : `rotate(0deg)`,
          zIndex: info.z_index,
        }}
        className="absolute group hover:border-[2px] hover:border-indigo-500"
      >
        <Element id={randValue} info={info} exId={`${randValue}t`} />
        {current_component.id === info.id && (
          <div onClick={() => removeComponent(info.id)}>
            <DeleteIcon sx={{ cursor: "pointer", color: "gray" }} />
          </div>
        )}
        <Box
          id={`${randValue}t`}
          style={{
            height: info.width + "px",
            width: info.width + "px",
            background: info.color,
            opacity: info.opacity,
            clipPath: "polygon(50% 0,100% 100%,0 100% )",
          }}
        ></Box>
      </Box>
    );
  }
  if (info.name === "shape" && info.type === "ellipse") {
    html = (
      <Box
        id={randValue}
        onClick={() => info.setCurrentComponent(info)}
        style={{
          left: info.left + "px",
          top: info.top + "px",

          Transform: info.rotate ? `rotate(${info.rotate}deg)` : `rotate(0deg)`,
          zIndex: info.z_index,
        }}
        className="absolute group hover:border-[2px] hover:border-indigo-500"
      >
        <Element id={randValue} info={info} exId={`${randValue}e`} />
        <Box
          id={`${randValue}e`}
          className="rounded-full"
          style={{
            borderRadius: "50%",
            height: info.height + "px",
            width: info.width + "px",
            background: info.color,
            opacity: info.opacity,
          }}
        >
          {current_component.id === info.id && (
            <div onClick={() => removeComponent(info.id)}>
              <DeleteIcon sx={{ cursor: "pointer", color: "gray" }} />
            </div>
          )}
        </Box>
      </Box>
    );
  }
  if (info.name === "shape" && info.type === "pentagon") {
    html = (
      <Box
        id={randValue}
        onClick={() => info.setCurrentComponent(info)}
        style={{
          left: info.left + "px",
          top: info.top + "px",

          Transform: info.rotate ? `rotate(${info.rotate}deg)` : `rotate(0deg)`,
          zIndex: info.z_index,
        }}
        className="absolute group hover:border-[2px] hover:border-indigo-500"
      >
        <Element id={randValue} info={info} exId={`${randValue}p`} />
        {current_component.id === info.id && (
          <div onClick={() => removeComponent(info.id)}>
            <DeleteIcon sx={{ cursor: "pointer", color: "gray" }} />
          </div>
        )}
        <Box
          id={`${randValue}p`}
          style={{
            height: info.width + "px",
            width: info.width + "px",
            background: info.color,
            opacity: info.opacity,
            clipPath: "polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)",
          }}
        ></Box>
      </Box>
    );
  }
  if (info.name === "shape" && info.type === "hexagon") {
    html = (
      <Box
        id={randValue}
        onClick={() => info.setCurrentComponent(info)}
        style={{
          left: info.left + "px",
          top: info.top + "px",

          Transform: info.rotate ? `rotate(${info.rotate}deg)` : `rotate(0deg)`,
          zIndex: info.z_index,
        }}
        className="absolute group hover:border-[2px] hover:border-indigo-500"
      >
        <Element id={randValue} info={info} exId={`${randValue}h`} />
        {current_component.id === info.id && (
          <div onClick={() => removeComponent(info.id)}>
            <DeleteIcon sx={{ cursor: "pointer", color: "gray" }} />
          </div>
        )}
        <Box
          id={`${randValue}h`}
          style={{
            height: info.width + "px",
            width: info.width + "px",
            background: info.color,
            opacity: info.opacity,
            clipPath: "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)",
          }}
        ></Box>
      </Box>
    );
  }
 
  if (info.name === "shape" && info.type === "line") {
    html = (
      <Box
        id={randValue}
        onClick={() => info.setCurrentComponent(info)}
        style={{
          left: info.left + "px",
          top: info.top + "px",
          Transform: info.rotate ? `rotate(${info.rotate}deg)` : `rotate(0deg)`,
          zIndex: info.z_index,
        }}
        className="absolute group hover:border-[2px] hover:border-indigo-500"
      >
        <Element id={randValue} info={info} exId={`${randValue}l`} />
        <Box
          id={`${randValue}l`}
          style={{
            height: info.height + "px",
            width: info.width + "px",
            background: info.color,
            opacity: info.opacity,
            left: info.left + "px",
            top: info.top + "px",
            Transform: info.rotate ? `rotate(${info.rotate}deg)` : `rotate(0deg)`,
            zIndex: info.z_index,
          }}
        >
          {current_component.id === info.id && (
            <div onClick={() => removeComponent(info.id)}>
              <DeleteIcon sx={{ cursor: "pointer", color: "gray" }} />
            </div>
          )}
        </Box>
      </Box>
    );
  }
  return html;
};

export default CurrentComponent;

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
import { borderColor, borderRadius, Box, padding } from "@mui/system";
import React, { useState } from "react";
import { useDrop } from "react-dnd";
import AnalogClock from "../drop/AnalogClock";
import { Rnd } from "react-rnd";
import DigitalClock from "../drop/DigitalClock";
import FlipClock from "../drop/ClockFlip";
import { Transform } from "@mui/icons-material";
import DeleteIcon from "@mui/icons-material/Delete";
import Element from "./Element";
import { BorderStyle, BorderWidth } from "react-bootstrap-icons";
import { useEffect } from "react";

const CurrentComponent = ({
  info,
  current_component,
  removeComponent,
  videocontents,
}) => {




  const [dateTime, setDateTime] = useState(new Date());

  // Update date and time every second
  useEffect(() => {
    const interval = setInterval(() => {
      setDateTime(new Date());
    }, 1000);

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, []);

  // Format date as MM/DD/YYYY
  const formatDate = (date) => {
    const month = (date.getMonth() + 1).toString().padStart(2, "0"); // Months are zero-based
    const day = date.getDate().toString().padStart(2, "0");
    const year = date.getFullYear();
    return `${month}/${day}/${year}`;
  };

  // Format time as HH:MM:SS
  const formatTime = (date) => {
    const hours = date.getHours().toString().padStart(2, "0");
    const minutes = date.getMinutes().toString().padStart(2, "0");
    const seconds = date.getSeconds().toString().padStart(2, "0");
    return `${hours}:${minutes}:${seconds}`;
  };


  const randValue = Math.floor(Math.random() * 100 + 1);
  let html = "";

  if (info.name === "main_frame") {
    html = (
      <Box
        onClick={() => info.setCurrentComponent(info)}
        //    ref={drop}
        className="video_box"
        style={{
          height: info.height + "px",
          width: info.width + "px",
          background: info.color,
          zIndex: info.z_index,
          image: info.image,
          backgroundImage: `url(${info.image})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
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
          outlineWidth: info.outlineWidth + "px",
          outlineStyle: info.outlineStyle,
          outlineColor: info.outline,
          borderRadius:info.borderRadius +'px',
          transform: info.rotate ? `rotate(${info.rotate}deg)` : `rotate(0deg)`,
          zIndex: info.z_index,
        }}
        className="absolute group hover:border-[2px] hover:border-indigo-500"
      >
        <Element id={randValue} info={info} exId="" />
        {current_component.id === info.id && (
          <div
            onClick={() => removeComponent(info.id)}
            className="px-1 bg-white absolute top-0 hidden group-hover:block cursor-pointer rounded-sm"
          >
            <DeleteIcon
              sx={{ cursor: "pointer", color: "gray", fontSize: "20px" }}
            />
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

          
          transform: info.rotate ? `rotate(${info.rotate}deg)` : `rotate(0deg)`,
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
            outlineWidth: info.outlineWidth + "px",
          outlineStyle: info.outlineStyle,
          outlineColor: info.outline,
          // borderRadius:info.borderRadius +'px',
            background: info.color,
            opacity: info.opacity,
          }}
        ></Box>
        {current_component.id === info.id && (
          <div
            onClick={() => removeComponent(info.id)}
            className="px-1 bg-white absolute top-0 hidden group-hover:block cursor-pointer rounded-sm"
          >
            <DeleteIcon
              sx={{ cursor: "pointer", color: "gray", fontSize: "20px" }}
            />
          </div>
        )}
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
          transform: info.rotate ? `rotate(${info.rotate}deg)` : `rotate(0deg)`,
          zIndex: info.z_index,
        }}
        className="absolute group hover:border-[2px] hover:border-indigo-500"
      >
        <Element id={randValue} info={info} exId={`${randValue}t`} />

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
        {current_component.id === info.id && (
          <div
            onClick={() => removeComponent(info.id)}
            className="px-1 bg-white absolute top-0 hidden group-hover:block cursor-pointer rounded-sm"
          >
            <DeleteIcon
              sx={{ cursor: "pointer", color: "gray", fontSize: "20px" }}
            />
          </div>
        )}
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
          transform: info.rotate ? `rotate(${info.rotate}deg)` : `rotate(0deg)`,
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
            outlineWidth: info.outlineWidth + "px",
          outlineStyle: info.outlineStyle,
          outlineColor: info.outline,
            background: info.color,
            opacity: info.opacity,
          }}
        ></Box>
        {current_component.id === info.id && (
          <div
            onClick={() => removeComponent(info.id)}
            className="px-1 bg-white absolute top-0 hidden group-hover:block cursor-pointer rounded-sm"
          >
            <DeleteIcon
              sx={{ cursor: "pointer", color: "gray", fontSize: "20px" }}
            />
          </div>
        )}
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

          transform: info.rotate ? `rotate(${info.rotate}deg)` : `rotate(0deg)`,
          zIndex: info.z_index,
        }}
        className="absolute group hover:border-[2px] hover:border-indigo-500"
      >
        <Element id={randValue} info={info} exId={`${randValue}p`} />

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
        {current_component.id === info.id && (
          <div
            onClick={() => removeComponent(info.id)}
            className="px-1 bg-white absolute top-0 hidden group-hover:block cursor-pointer rounded-sm"
          >
            <DeleteIcon
              sx={{ cursor: "pointer", color: "gray", fontSize: "20px" }}
            />
          </div>
        )}
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

          transform: info.rotate ? `rotate(${info.rotate}deg)` : `rotate(0deg)`,
          zIndex: info.z_index,
        }}
        className="absolute group hover:border-[2px] hover:border-indigo-500"
      >
        <Element id={randValue} info={info} exId={`${randValue}h`} />

        <Box
          id={`${randValue}h`}
          style={{
            height: info.width + "px",
            width: info.width + "px",
            background: info.color,
            opacity: info.opacity,
            clipPath:
              "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)",
          }}
        ></Box>
        {current_component.id === info.id && (
          <div
            onClick={() => removeComponent(info.id)}
            className="px-1 bg-white absolute top-0 hidden group-hover:block cursor-pointer rounded-sm"
          >
            <DeleteIcon
              sx={{ cursor: "pointer", color: "gray", fontSize: "20px" }}
            />
          </div>
        )}
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
          ransform: info.rotate ? `rotate(${info.rotate}deg)` : `rotate(0deg)`,
          zIndex: info.z_index,
        }}
        className="absolute group hover:border-[2px] hover:border-indigo-500"
      >
        <Element id={randValue} info={info} exId={`${randValue}l`} />
        <Box
          id={`${randValue}l`}
          style={{
            // height: info.lineheight + "px",
            width: info.width + "px",
            borderWidth: info.lineheight +'px', 
            borderColor: info.color,
            opacity: info.opacity,
            left: info.left + "px",
            top: info.top + "px",
            borderStyle:info.borderStyle,          
            transform: info.rotate
              ? `rotate(${info.rotate}deg)`
              : `rotate(0deg)`,
            zIndex: info.z_index,
          }}
        >
          {current_component.id === info.id && (
            <div
              onClick={() => removeComponent(info.id)}
              className="px-1 bg-white absolute top-0 hidden group-hover:block cursor-pointer rounded-sm"
            >
              <DeleteIcon
                sx={{ cursor: "pointer", color: "gray", fontSize: "20px" }}
              />
            </div>
          )}
        </Box>
      </Box>
    );
  }

  if (info.name === "text") {
    html = (
      <Box
        id={randValue}
        onClick={() => info.setCurrentComponent(info)}
        style={{
          left: info.left + "px",
          top: info.top + "px",
          transform: info.rotate ? `rotate(${info.rotate}deg)` : `rotate(0deg)`,
          zIndex: info.z_index,
          padding: info.padding + "px",
          color: info.color,
          opacity: info.opacity,
        }}
        className="absolute group hover:border-[2px] hover:border-indigo-500"
      >
        <Element id={randValue} info={info} exId="" />
        {current_component.id === info.id && (
          <div
            onClick={() => removeComponent(info.id)}
            className="px-1 bg-white absolute top-0 hidden group-hover:block cursor-pointer rounded-sm"
          >
            <DeleteIcon
              sx={{ cursor: "pointer", color: "gray", fontSize: "20px" }}
            />
          </div>
        )}
        <div className="w-full h-full flex justify-center items-center">
        <h2
          style={{ fontSize: info.font + "px", fontWeight: info.weight }}
         
        >
          {info.title}
        </h2>
        </div>
      </Box>
    );
  }

  if (info.name === "datetime") {
    html = (
      <Box
        id={randValue}
        onClick={() => info.setCurrentComponent(info)}
        style={{
          left: info.left + "px",
          top: info.top + "px",
          transform: info.rotate ? `rotate(${info.rotate}deg)` : `rotate(0deg)`,
          zIndex: info.z_index,
          padding: info.padding + "px",
          color: info.color,
          opacity: info.opacity,
        }}
        className="absolute group hover:border-[2px] hover:border-indigo-500"
      >
        <Element id={randValue} info={info} exId="" />
        {current_component.id === info.id && (
          <div
            onClick={() => removeComponent(info.id)}
            className="px-1 bg-white absolute top-0 hidden group-hover:block cursor-pointer rounded-sm"
          >
            <DeleteIcon
              sx={{ cursor: "pointer", color: "gray", fontSize: "20px" }}
            />
          </div>
        )}
        <div className="w-full h-full flex justify-center items-center">
        
        <h2
          style={{ fontSize: info.font + "px", fontWeight: info.weight }}
     
        >
          {formatDate(dateTime)}  {formatTime(dateTime)}
          {/* {info.date} 
          {' '} {info.time} */}
      
        </h2>
        </div>
      </Box>
    );
  }
  return html;
};

export default CurrentComponent;

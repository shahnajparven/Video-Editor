import { Box } from "@mui/material";
import React, { useState } from "react";
import { Rnd } from "react-rnd";

const DraggableText = () => {
  const [size, setSize] = useState({ width: 100, height: 50 });
  return (
    <div
      // style={{
      //   width: "100%",
      //   height: "60vh",
      //   position: "relative",
      // }}
    >
    <Rnd
      default={{
        x: 100,
        y: 100,
        width: size.width,
        height: size.height,
      }}
      minWidth={100}
      minHeight={50}
      bounds="parent"
      enableResizing={{
        top: true,
        right: true,
        bottom: true,
        left: true,
        topRight: true,
        bottomRight: true,
        bottomLeft: true,
        topLeft: true,
      }}
      onResize={(e, direction, ref) => {
        setSize({ width: ref.offsetWidth, height: ref.offsetHeight });
      }}
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        border: "1px solid white",
      }}
    >
      <Box className="dragText">
        <input type="text" placeholder="Text" />
      </Box>
    </Rnd>
    </div>
  );
};
export default DraggableText;

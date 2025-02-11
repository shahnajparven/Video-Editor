import React, { useState } from "react";
import { Rnd } from "react-rnd";

const Test = () => {
  const [elements, setElements] = useState([
    { id: 1, x: 100, y: 100, width: 200, height: 200 },
    { id: 2, x: 400, y: 100, width: 150, height: 150 },
  ]);

  const handleDragStop = (id, e, d) => {
    setElements((prev) =>
      prev.map((el) => (el.id === id ? { ...el, x: d.x, y: d.y } : el))
    );
  };

  const handleResizeStop = (id, e, direction, ref, delta, position) => {
    setElements((prev) =>
      prev.map((el) =>
        el.id === id
          ? {
              ...el,
              width: ref.offsetWidth,
              height: ref.offsetHeight,
              x: position.x,
              y: position.y,
            }
          : el
      )
    );
  };

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        position: "relative",
        border: "1px solid #ccc",
      }}
    >
      {elements.map((el) => (
        <Rnd
          key={el.id}
          size={{ width: el.width, height: el.height }}
          position={{ x: el.x, y: el.y }}
          onDragStop={(e, d) => handleDragStop(el.id, e, d)}
          onResizeStop={(e, direction, ref, delta, position) =>
            handleResizeStop(el.id, e, direction, ref, delta, position)
          }
          bounds="parent"
          minWidth={100}
          minHeight={100}
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
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            background: "lightblue",
            border: "2px solid blue",
            cursor: "move",
          }}
        >
          <div>
            <p>Element {el.id}</p>
            <p>Width: {el.width}px</p>
            <p>Height: {el.height}px</p>
          </div>
        </Rnd>
      ))}
    </div>
  );
};

export default Test;
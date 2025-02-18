import "./Home.css";
import Header from "../src/header/Header";
import Dashboard from "../src/Dashboard";
import RightComponent from "./RightComponent";
import { Box, Typography } from "@mui/material";
import { useState } from "react";
import DnDProvider from "./drop/DnDProvider";
import Test from "./drop/GrapesEditor";
import { SketchPicker } from "react-color";
import Rectangle from "./components/Rectangle";

// import ClockContainer from './drop/GrapesEditor';

// import GrapesEditor from './drop/GrapesEditor';

function Home() {
  const [mainColor, setMainColor] = useState("");
  const [color, setColor] = useState("");
  const [hexColor, setHexColor] = useState("#000000");
  const [showPicker, setShowPicker] = useState(false);
  const [current_component, setCurrentComponent] = useState("");
  const [image, setImage] = useState("");

  const handleColorChange = (mainColor) => {
    setMainColor(mainColor.hex);
    setHexColor(mainColor.hex);
  };
  const showSketchPicker = () => {
    setShowPicker(!showPicker);
  };

  const [components, setComponents] = useState([
    {
      name: "main_frame",
      type: "react",
      id: Math.floor(Math.random() * 100 + 1),
      height: 400,
      width: 600,
      z_index: 1,
      color: "#fff",
      image: "",
      setCurrentComponent: (a) => setCurrentComponent(a),
    },
  ]);

  const remove_background = () => {
    const com = components.find((c) => c.id === current_component.id);
    const temp = components.filter((c) => c.id !== current_component.id);
    com.image = "";
    setImage("");
    setComponents([...temp, com]);
  };
  return (
    <DnDProvider>
      <Header />
      <Box
        sx={{
          width: "100%",
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "center",
        }}
      >
        <Box width={"75%"}>
          <Dashboard
            image={image}
            setImage={setImage}
            remove_background={remove_background}
            color={color}
            setColor={setColor}
            videoBoxColor={mainColor}
            current_component={current_component}
            setCurrentComponent={setCurrentComponent}
            components={components}
            setComponents={setComponents}
          />
        </Box>
        <Box width={"25%"}>
          {current_component ? (
            current_component.name === "main_frame" ? (
              <RightComponent
                // color={color}
                setColor={setColor}
                hexColor={hexColor}
                setHexColor={setHexColor}
                showSketchPicker={showSketchPicker}
                handleColorChange={handleColorChange}
                showPicker={showPicker}
                remove_background={remove_background}
                current_component={current_component}
              />
            ) : current_component.type === "rectangle" ? (
              <Box>
                <Rectangle
                  color={color}
                  setHexColor={setHexColor}
                  setColor={setColor}
                  hexColor={hexColor}
                  current_component={current_component}
                />
              </Box>
            ) : current_component.type === "circle" ? (
              <Box>
                {/* Circle Component */}

                <Rectangle
                  color={color}
                  setHexColor={setHexColor}
                  setColor={setColor}
                  hexColor={hexColor}
                  current_component={current_component}
                />
              </Box>
            ) : current_component.type === "triangle" ? (
              <Box>
                {/* Circle Component */}

                <Rectangle
                  color={color}
                  setHexColor={setHexColor}
                  setColor={setColor}
                  hexColor={hexColor}
                  current_component={current_component}
                />
              </Box>
            ) : current_component.type === "ellipse" ? (
              <Box>
                {/* Circle Component */}

                <Rectangle
                  color={color}
                  setHexColor={setHexColor}
                  setColor={setColor}
                  hexColor={hexColor}
                  current_component={current_component}
                />
              </Box>
            ) : current_component.type === "pentagon" ? (
              <Box>
                {/* Circle Component */}

                <Rectangle
                  color={color}
                  setHexColor={setHexColor}
                  setColor={setColor}
                  hexColor={hexColor}
                  current_component={current_component}
                />
              </Box>
            ) : current_component.type === "hexagon" ? (
              <Box>
                {/* Circle Component */}

                <Rectangle
                  color={color}
                  setHexColor={setHexColor}
                  setColor={setColor}
                  hexColor={hexColor}
                  current_component={current_component}
                />
              </Box>
            ) : current_component.type === "line" ? (
              <Box>
                {/* Circle Component */}

                <Rectangle
                  color={color}
                  setHexColor={setHexColor}
                  setColor={setColor}
                  hexColor={hexColor}
                  current_component={current_component}
                />
              </Box>
            ) : current_component.name === "text" ? (
              <Box>
                {/* Circle Component */}

                <Rectangle
                  color={color}
                  setHexColor={setHexColor}
                  setColor={setColor}
                  hexColor={hexColor}
                  current_component={current_component}
                />
              </Box>
            ) : (
              <Box>default</Box>
            )
          ) : (
            // Initial state when current_component is not set
            <RightComponent
              // color={color}
              hexColor={hexColor}
              showSketchPicker={showSketchPicker}
              handleColorChange={handleColorChange}
              showPicker={showPicker}
              current_component={current_component}
            />
          )}
        </Box>
      </Box>
    </DnDProvider>
  );
}
export default Home;

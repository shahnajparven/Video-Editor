import "./Home.css";
import Header from "../src/header/Header";
import Dashboard from "../src/Dashboard";
import RightComponent from "./RightComponent";
import { Box, Typography } from "@mui/material";
import { useState } from "react";
import DnDProvider from "./drop/DnDProvider";
import Test from "./drop/GrapesEditor";
import { SketchPicker } from "react-color";
// import ClockContainer from './drop/GrapesEditor';

// import GrapesEditor from './drop/GrapesEditor';

function Home() {
  const [mainColor, setMainColor] = useState("");
  const [color, setColor] = useState("#000000");
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
                color={color}
                setColor={setColor}
                hexColor={hexColor}
                setHexColor={setHexColor}
                showSketchPicker={showSketchPicker}
                handleColorChange={handleColorChange}
                showPicker={showPicker}
                remove_background={remove_background}
              />
            ) : current_component.type === "rectangle" ? (
              <Box>
                <Box className="p-5">
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "flex-start",
                      alignItems: "center",
                      gap: "0px",
                      border: "1px solid #ccc",
                    }}
                  >
                    <label
                      className="w-[40px] h-[40px] cursor-pointer"
                      style={{
                        backgroundColor: color,
                         border:'1px solid #ccc'
                      }}
                      htmlFor="color"
                    ></label>
                    <input
                      onChange={(e) => {
                        setColor(e.target.value);
                        setHexColor(e.target.value);
                      }}
                      type="color"
                      className="invisible"
                      id="color"
                    />
                    <Box>
                      <Typography
                        sx={{ fontSize: "14px", textAlign: "center" }}
                      >
                        {hexColor}
                      </Typography>
                    </Box>
                  </Box>
                </Box>
                {current_component.name == "main_frame" && image && (
                  <div>
                    <button onClick={remove_background}>
                      Remove background
                    </button>
                  </div>
                )}
              </Box>
            ) : current_component.type === "circle" ? (
              <Box>
                {/* Circle Component */}

                <Box>
                <Box className="p-5">
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "flex-start",
                      alignItems: "center",
                      gap: "0px",
                      border: "1px solid #ccc",
                    }}
                  >
                    <label
                      className="w-[40px] h-[40px] cursor-pointer"
                      style={{
                        backgroundColor: color,
                         border:'1px solid #ccc'
                      }}
                      htmlFor="color"
                    ></label>
                    <input
                      onChange={(e) => {
                        setColor(e.target.value);
                        setHexColor(e.target.value);
                      }}
                      type="color"
                      className="invisible"
                      id="color"
                    />
                    <Box>
                      <Typography
                        sx={{ fontSize: "14px", textAlign: "center" }}
                      >
                        {hexColor}
                      </Typography>
                    </Box>
                  </Box>
                </Box>
                {current_component.name == "main_frame" && image && (
                  <div>
                    <button onClick={remove_background}>
                      Remove background
                    </button>
                  </div>
                )}
              </Box>
                circle
              </Box>
            ) : (
              <Box>default</Box>
            )
          ) : (
            // Initial state when current_component is not set
            <RightComponent
              colors={mainColor}
              hexColor={hexColor}
              showSketchPicker={showSketchPicker}
              handleColorChange={handleColorChange}
              showPicker={showPicker}
            />
          )}
        </Box>
      </Box>
    </DnDProvider>
  );
}
export default Home;

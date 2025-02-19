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

function Home() {
  const [mainColor, setMainColor] = useState("");
  const [color, setColor] = useState("");
  const [outline, setOutline] = useState("");
  const [hexColor, setHexColor] = useState("#000000");
  const [showPicker, setShowPicker] = useState(false);
  const [current_component, setCurrentComponent] = useState("");
  const [image, setImage] = useState("");
  const [opacity, setOpacity] = useState("");
  const [outlineWidth, setOutlinewidth] = useState("");
  const [borderRadius, setBorderRadius] = useState("");

  const [top, setTop] = useState("");
  const [left, setLeft] = useState("");

  const [width, setWidth] = useState("");
  const [height, setHeight] = useState("");

  const [rotate, setRotate] = useState(0);
  const [transform, setTransform] = useState(0);
  const [lineheight, setLineheight] = useState("");
  const [borderStyle, setBorderStyle] = useState("");

  const [text, setText] = useState("");

  const [font, setFont] = useState("");
  const [weight, setWeight] = useState("");
  const [padding, setPadding] = useState("");

  const handleChangeBorderStyle = (selectedOption) => {
    setBorderStyle(selectedOption.value);
    setCurrentComponent({
      ...current_component,
      borderStyle: selectedOption.value,
    });
    console.log(selectedOption.value, "borderStyle");
  };




  const opacityHandler = (e) => {
    setOpacity(parseFloat(e.target.value));
  };

  const outlinewidthHandler = (e) => {
    setOutlinewidth(e.target.value);
  };
  const borderRadiusHandler = (e) => {
    setBorderRadius(e.target.value);
  };

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
      width: 650,
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
            outline={outline}
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
            setOpacity={setOpacity}
            opacity={opacity}
            setOutlinewidth={setOutlinewidth}
            outlineWidth={outlineWidth}
            borderRadius={borderRadius}
            setBorderRadius={setBorderRadius}
            setTop={setTop}
            top={top}
            setLeft={setLeft}
            left={left}
            setWidth={setWidth}
            width={width}
            height={height}
            setHeight={setHeight}
            setRotate={setRotate}
            rotate={rotate}
            setTransform={setTransform}
            setLineheight={setLineheight}
            lineheight={lineheight}
            setBorderStyle={setBorderStyle}
            borderStyle={borderStyle}
            setText={setText}
            text={text}
            setFont={setFont}
            setWeight={setWeight}
            setPadding={setPadding}
            font={font}
            weight={weight}
            padding={padding}
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
                {/* rectangle Component */}
                <Rectangle
                  color={color}
                  setHexColor={setHexColor}
                  setColor={setColor}
                  hexColor={hexColor}
                  current_component={current_component}
                  setOutline={setOutline}
                  outline={outline}
                  opacityHandler={opacityHandler}
                  outlinewidthHandler={outlinewidthHandler}
                  borderRadiusHandler={borderRadiusHandler}
                  setTop={setTop}
                  setLeft={setLeft}
                  setHeight={setHeight}
                  setWidth={setWidth}
                  setTransform={setTransform}
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
                  setOutline={setOutline}
                  outline={outline}
                  opacityHandler={opacityHandler}
                  outlinewidthHandler={outlinewidthHandler}
                  borderRadiusHandler={borderRadiusHandler}
                  setTop={setTop}
                  setLeft={setLeft}
                  setHeight={setHeight}
                  setWidth={setWidth}
                  setTransform={setTransform}
                />
              </Box>
            ) : current_component.type === "triangle" ? (
              <Box>
                {/* triangle Component */}

                <Rectangle
                  color={color}
                  setHexColor={setHexColor}
                  setColor={setColor}
                  hexColor={hexColor}
                  current_component={current_component}
                  setOutline={setOutline}
                  outline={outline}
                  opacityHandler={opacityHandler}
                  outlinewidthHandler={outlinewidthHandler}
                  borderRadiusHandler={borderRadiusHandler}
                  setTop={setTop}
                  setLeft={setLeft}
                  setHeight={setHeight}
                  setWidth={setWidth}
                  setTransform={setTransform}
                />
              </Box>
            ) : current_component.type === "ellipse" ? (
              <Box>
                {/* ellipse Component */}

                <Rectangle
                  color={color}
                  setHexColor={setHexColor}
                  setColor={setColor}
                  hexColor={hexColor}
                  current_component={current_component}
                  setOutline={setOutline}
                  outline={outline}
                  opacityHandler={opacityHandler}
                  outlinewidthHandler={outlinewidthHandler}
                  borderRadiusHandler={borderRadiusHandler}
                  setTop={setTop}
                  setLeft={setLeft}
                  setHeight={setHeight}
                  setWidth={setWidth}
                  setTransform={setTransform}
                />
              </Box>
            ) : current_component.type === "pentagon" ? (
              <Box>
                {/* pentagon Component */}

                <Rectangle
                  color={color}
                  setHexColor={setHexColor}
                  setColor={setColor}
                  hexColor={hexColor}
                  current_component={current_component}
                  setOutline={setOutline}
                  outline={outline}
                  opacityHandler={opacityHandler}
                  outlinewidthHandler={outlinewidthHandler}
                  borderRadiusHandler={borderRadiusHandler}
                  setTop={setTop}
                  setLeft={setLeft}
                  setHeight={setHeight}
                  setWidth={setWidth}
                  setTransform={setTransform}
                />
              </Box>
            ) : current_component.type === "hexagon" ? (
              <Box>
                {/* hexagon Component */}

                <Rectangle
                  color={color}
                  setHexColor={setHexColor}
                  setColor={setColor}
                  hexColor={hexColor}
                  current_component={current_component}
                  setOutline={setOutline}
                  outline={outline}
                  opacityHandler={opacityHandler}
                  outlinewidthHandler={outlinewidthHandler}
                  borderRadiusHandler={borderRadiusHandler}
                  setTop={setTop}
                  setLeft={setLeft}
                  setHeight={setHeight}
                  setWidth={setWidth}
                  setTransform={setTransform}
                />
              </Box>
            ) : current_component.type === "line" ? (
              <Box>
                {/* line Component */}

                <Rectangle
                  color={color}
                  setHexColor={setHexColor}
                  setColor={setColor}
                  hexColor={hexColor}
                  current_component={current_component}
                  setOutline={setOutline}
                  outline={outline}
                  opacityHandler={opacityHandler}
                  outlinewidthHandler={outlinewidthHandler}
                  borderRadiusHandler={borderRadiusHandler}
                  setTop={setTop}
                  setLeft={setLeft}
                  setHeight={setHeight}
                  setWidth={setWidth}
                  setTransform={setTransform}
                  setLineheight={setLineheight}
                  handleChangeBorderStyle={handleChangeBorderStyle}
                />
              </Box>
            ) : current_component.name === "text" ? (
              <Box>
                {/* text Component */}

                <Rectangle
                  color={color}
                  setHexColor={setHexColor}
                  setColor={setColor}
                  hexColor={hexColor}
                  current_component={current_component}
                  setOutline={setOutline}
                  outline={outline}
                  opacityHandler={opacityHandler}
                  setCurrentComponent={setCurrentComponent}
                  setText={setText}
                  setFont={setFont}
                  setWeight={setWeight}
                />
              </Box>
            ) : current_component.name === "datetime" ? (
              <Box>
                {/* text Component */}

                <Rectangle
                   color={color}
                   setHexColor={setHexColor}
                   setColor={setColor}
                   hexColor={hexColor}
                   current_component={current_component}
                   setOutline={setOutline}
                   outline={outline}
                   opacityHandler={opacityHandler}
                   setCurrentComponent={setCurrentComponent}
                   setText={setText}
                   setFont={setFont}
                   setWeight={setWeight}
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

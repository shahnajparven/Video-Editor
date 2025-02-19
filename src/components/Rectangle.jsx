import { Box, Checkbox, Typography } from "@mui/material";
import React from "react";
import { useState } from "react";
import Select from "react-select";
import GridViewIcon from "@mui/icons-material/GridView";
const Rectangle = ({
  setColor,
  setHexColor,
  hexColor,
  current_component,
  setOutline,
  opacityHandler,
  outlinewidthHandler,
  borderRadiusHandler,
  setTop,
  setLeft,
  setWidth,
  setHeight,
  setTransform,
  setLineheight,
  handleChangeBorderStyle,
  setCurrentComponent,
  setText,
  setWeight,
  setFont
}) => {
  const [showBorderRedius, setShowBorderRedius] = useState(false);
  const [showDuration, setShowDuration] = useState(false);
  const [showOutline, setShowOutline] = useState(false);
  const [activeDiv, setActiveDiv] = useState(1);

  const handleCollapseClick = (divNumber) => {
    setActiveDiv(divNumber);
  };
  const [selectedOption, setSelectedOption] = useState(null);

  const options = [
    { value: "default", label: "Default Layout" },
    { value: "layout1", label: "Untitled 2025-02-01 01:29:28" },
    { value: "layout2", label: "Untitled 2025-02-01 12:43:21" },
    { value: "layout3", label: "Untitled 2025-02-01 21:14:13" },
  ];

  const lineStyleOptions = [
    { value: "solid", label: "Solid" },
    { value: "dotted", label: "Dotted" },
    { value: "dashed", label: "Dashed" },
    { value: "double", label: "Double" },
  ];


  return (
    <div className="p-5">
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          borderBottom: "1px solid #6874dd",
          marginBottom: "20px",
        }}
      >
        <Box
          sx={{
            width: "100%",
            textAlign: "center",
            fontSize: "14px",
            fontWeight: "bold",
            color: "#6874dd",
            padding: "2px",
            cursor: "pointer",
          }}
          style={{
            borderBottom: activeDiv === 1 ? "4px solid #6874dd" : "none",
          }}
          onClick={() => handleCollapseClick(1)}
        >
          Appearance
        </Box>
        <Box
          onClick={() => handleCollapseClick(2)}
          sx={{
            width: "100%",
            textAlign: "center",
            color: "#6874dd",
            fontWeight: "bold",
            cursor: "pointer",
            fontSize: "14px",
          }}
          style={{
            borderBottom: activeDiv === 2 ? "4px solid #6874dd" : "none",
          }}
        >
          Advanced
        </Box>
        <Box
          onClick={() => handleCollapseClick(3)}
          sx={{
            width: "100%",
            textAlign: "center",
            color: "#6874dd",
            cursor: "pointer",
          }}
          style={{
            borderBottom: activeDiv === 3 ? "4px solid #6874dd" : "none",
          }}
        >
          <GridViewIcon fontSize="20px" />
        </Box>
      </Box>

      <Box style={{ display: activeDiv === 1 ? "block" : "none" }}>
        <Box sx={{ height: "70vh", overflow: "auto" }}>
        {current_component.name === "text" ? (
          <Box className='w-full flex gap-2 flex-col justify-start items-start'>
            <textarea onChange={(e)=> setCurrentComponent({... current_component,
            title:e.target.value
          })}
          className="w-full border bg-transparent outline-none p-2 rounded-md" type='text' value={current_component.title}/>
          <button onClick={()=> setText(current_component.title)} className="px-4 py-2 bg-gray-500 text-xs text-white rounded-sm">Add</button>
          </Box>
        ):null}
          
          <Box>
            {(current_component.name === "text" ||
            current_component.name === "datetime" ) ? (
              <Typography
                sx={{ fontSize: "14px", padding: "5px", fontWeight: "bold" }}
              >
                Font Color
              </Typography>
            ) : current_component.type === "line" ? (
              <Typography
                sx={{ fontSize: "14px", padding: "5px", fontWeight: "bold" }}
              >
                {" "}
                Color
              </Typography>
            ) : (
              <Typography
                sx={{ fontSize: "14px", padding: "5px", fontWeight: "bold" }}
              >
                {" "}
                Background Color
              </Typography>
            )}
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
                  background: `${
                    current_component.color &&
                    current_component.color !== "#fff"
                      ? current_component.color
                      : "gray"
                  }`,
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
                <Typography sx={{ fontSize: "14px", textAlign: "center" }}>
                  {hexColor}
                </Typography>
              </Box>
            </Box>
          </Box>
          
          <Box
            sx={{
              marginTop: 2,
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
              gap: "10px",
            }}
          >
            <Typography
              sx={{ fontSize: "14px", padding: "5px", fontWeight: "bold" }}
            >
              {" "}
              Opacity
            </Typography>
            <Box>
              <input
                onChange={opacityHandler}
                className="w-[70px] border border-gray-700 bg-transparent outline-none px-2 rpunded-md"
                type="number"
                step={0.1}
                min={0.1}
                max={1}
                value={current_component.opacity}
              />
            </Box>
          </Box>
          {current_component.type === "line" ? (
            <Box>
              <Box marginTop={2}>
                <Typography
                  sx={{ fontSize: "14px", padding: "5px", fontWeight: "bold" }}
                >
                  {" "}
                  Width
                </Typography>
                <Box className="right_part_input">
                  <input
                    onChange={(e) => setLineheight(e.target.value)}
                    type="number"
                    min={0}
                    max={1000}
                    value={current_component.lineheight}
                  />
                </Box>
              </Box>
              <Box marginTop={2}>
                <Typography
                  sx={{ fontSize: "14px", padding: "5px", fontWeight: "bold" }}
                >
                  {" "}
                  Style
                </Typography>
                <Box className="accordian">
                  <Box className="w-72 mx-auto my-2">
                    <Select
                      options={lineStyleOptions}
                      onChange={handleChangeBorderStyle}                     
                      value={lineStyleOptions.find(option => option.value === current_component.borderStyle)}
                    />
                  </Box>
                </Box>
              </Box>
              <Box marginTop={2}>
                <Typography
                  sx={{ fontSize: "14px", padding: "5px", fontWeight: "bold" }}
                >
                  {" "}
                  Tip1 Type
                </Typography>
                <Box className="accordian">
                  <Box className="w-72 mx-auto my-2">
                    <Select
                      options={options}
                      value={selectedOption}
                      onChange={setSelectedOption}
                      placeholder="Select a layout..."
                      isSearchable
                    />
                  </Box>
                </Box>
              </Box>
            </Box>
          ) : (
            <Box
              sx={{
                display: "flex",
                gap: "5px",
                alignItems: "center",
                textAlign: "center",
                margin: "10px 0px",
              }}
            >
              <Checkbox size="small" sx={{ p: "0px!important" }} />
              {current_component.name === "text" ||
              current_component.name === "datetime" ? (
                <Typography fontSize={"14px"} fontWeight={"bold"}>
                  Use gradient for the text?
                </Typography>
              ) : (
                <Typography fontSize={"14px"} fontWeight={"bold"}>
                  Use gradient as background?
                </Typography>
              )}
            </Box>
          )}
          {current_component.type === "rectangle" ? (
            <Box>
              <Box
                sx={{
                  display: "flex",
                  gap: "5px",
                  alignItems: "center",
                  textAlign: "center",
                  margin: "10px 0px",
                }}
              >
                <Checkbox
                  size="small"
                  sx={{ p: "0px!important" }}
                  checked={showBorderRedius} // Bind to state
                  onChange={(e) => setShowBorderRedius(e.target.checked)}
                />
                <Typography fontSize={"14px"} fontWeight={"bold"}>
                  Round Border
                </Typography>
              </Box>
              {showBorderRedius && (
                <Box>
                  <Box>
                    <Typography
                      sx={{
                        fontSize: "14px",
                        padding: "5px",
                        fontWeight: "bold",
                      }}
                    >
                      Border Radius
                    </Typography>
                    <Box className="right_part_input">
                      <input
                        onChange={borderRadiusHandler}
                        type="number"
                        step={1}
                        min={0}
                        max={100}
                        value={current_component.borderRadius}
                      />
                    </Box>
                  </Box>
                </Box>
              )}
            </Box>
          ) : null}
          {current_component.type === "circle" ||
          current_component.type === "pentagon" ||
          current_component.type === "hexagon" ? (
            <Box>
              <Box
                sx={{
                  display: "flex",
                  gap: "5px",
                  alignItems: "center",
                  textAlign: "center",
                  margin: "10px 0px",
                }}
              >
                <Checkbox size="small" sx={{ p: "0px!important" }} />
                <Typography fontSize={"14px"} fontWeight={"bold"}>
                  Fit to area
                </Typography>
              </Box>
            </Box>
          ) : null}
          {(current_component.name === "text" ||
          current_component.name === "datetime" ) ? (
            <Box>
              <Box
                sx={{
                  display: "flex",
                  gap: "5px",
                  alignItems: "center",
                  textAlign: "center",
                  margin: "10px 0px",
                }}
              >
                <Checkbox size="small" sx={{ p: "0px!important" }} />
                <Typography fontSize={"14px"} fontWeight={"bold"}>
                  Fit to selection
                </Typography>
              </Box>
              <Box marginTop={2}>
                <Typography
                  sx={{ fontSize: "14px", padding: "5px", fontWeight: "bold" }}
                >
                  Font Family
                </Typography>
                <Box className="accordian">
                  <Box className="w-72 mx-auto my-2">
                    <Select
                      options={options}
                      value={selectedOption}
                      onChange={setSelectedOption}
                      placeholder="Select a layout..."
                      isSearchable
                    />
                  </Box>
                </Box>
              </Box>
              <Box marginTop={2}>
                <Typography
                  sx={{ fontSize: "14px", padding: "5px", fontWeight: "bold" }}
                >
                  {" "}
                  Font Size
                </Typography>
                <Box className="right_part_input">
                  <input  onChange={(e)=> setFont(e.target.value)}
                    type="number"
                    step={1}
                    min={0}
                    max={100}
                    value={current_component.font}/>
                </Box>
              </Box>
              <Box marginTop={2}>
                <Typography
                  sx={{ fontSize: "14px", padding: "5px", fontWeight: "bold" }}
                >
                  Font Weight
                </Typography>
                <Box className="right_part_input">
                  <input onChange={(e)=> setWeight(e.target.value)}
                    type="number"
                    step={100}
                    min={100}
                    max={900}
                    value={current_component.weight}/>
                </Box>
              </Box>

              <Box
                sx={{
                  display: "flex",
                  gap: "5px",
                  alignItems: "center",
                  textAlign: "center",
                  margin: "10px 0px",
                }}
              >
                <Checkbox size="small" sx={{ p: "0px!important" }} />
                <Typography fontSize={"14px"} fontWeight={"bold"}>
                  Bold
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  gap: "5px",
                  alignItems: "center",
                  textAlign: "center",
                  margin: "10px 0px",
                }}
              >
                <Checkbox size="small" sx={{ p: "0px!important" }} />
                <Typography fontSize={"14px"} fontWeight={"bold"}>
                  Italics
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  gap: "5px",
                  alignItems: "center",
                  textAlign: "center",
                  margin: "10px 0px",
                }}
              >
                <Checkbox size="small" sx={{ p: "0px!important" }} />
                <Typography fontSize={"14px"} fontWeight={"bold"}>
                  Underline
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  gap: "5px",
                  alignItems: "center",
                  textAlign: "center",
                  margin: "10px 0px",
                }}
              >
                <Checkbox size="small" sx={{ p: "0px!important" }} />
                <Typography fontSize={"14px"} fontWeight={"bold"}>
                  Text Wrap
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  gap: "5px",
                  alignItems: "center",
                  textAlign: "center",
                  margin: "10px 0px",
                }}
              >
                <Checkbox size="small" sx={{ p: "0px!important" }} />
                <Typography fontSize={"14px"} fontWeight={"bold"}>
                  Show Overflow
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  gap: "5px",
                  alignItems: "center",
                  textAlign: "center",
                  margin: "10px 0px",
                }}
              >
                <Checkbox size="small" sx={{ p: "0px!important" }} />
                <Typography fontSize={"14px"} fontWeight={"bold"}>
                  Text Shadow
                </Typography>
              </Box>

              <Box marginTop={2}>
                <Typography
                  sx={{ fontSize: "14px", padding: "5px", fontWeight: "bold" }}
                >
                  Horizontal Align
                </Typography>
                <Box className="accordian">
                  <Box className="w-72 mx-auto my-2">
                    <Select
                      options={options}
                      value={selectedOption}
                      onChange={setSelectedOption}
                      placeholder="Select a layout..."
                      isSearchable
                    />
                  </Box>
                </Box>
              </Box>
              <Box marginTop={2}>
                <Typography
                  sx={{ fontSize: "14px", padding: "5px", fontWeight: "bold" }}
                >
                  Vertical Align
                </Typography>
                <Box className="accordian">
                  <Box className="w-72 mx-auto my-2">
                    <Select
                      options={options}
                      value={selectedOption}
                      onChange={setSelectedOption}
                      placeholder="Select a layout..."
                      isSearchable
                    />
                  </Box>
                </Box>
              </Box>
            </Box>
          ) : current_component.type === "line" ? (
            <Box marginTop={2}>
              <Typography
                sx={{ fontSize: "14px", padding: "5px", fontWeight: "bold" }}
              >
                Tip2 Type
              </Typography>
              <Box className="accordian">
                <Box className="w-72 mx-auto my-2">
                  <Select
                    options={options}
                    value={selectedOption}
                    onChange={setSelectedOption}
                    placeholder="Select a layout..."
                    isSearchable
                  />
                </Box>
              </Box>
            </Box>
          ) : (
            <Box
              sx={{
                display: "flex",
                gap: "5px",
                alignItems: "center",
                textAlign: "center",
                margin: "10px 0px",
              }}
            >
              <Checkbox
                size="small"
                sx={{ p: "0px!important" }}
                checked={showOutline} // Bind to state
                onChange={(e) => setShowOutline(e.target.checked)}
              />
              <Typography fontSize={"14px"} fontWeight={"bold"}>
                Show Outline
              </Typography>
            </Box>
          )}
          {showOutline && (
            <Box>
              <Box>
                <Typography
                  sx={{ fontSize: "14px", padding: "5px", fontWeight: "bold" }}
                >
                  {" "}
                  Outline Color
                </Typography>
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
                      background: `${
                        current_component.outline &&
                        current_component.outline !== "#fff"
                          ? current_component.outline
                          : "gray"
                      }`,
                    }}
                    htmlFor="outline"
                  ></label>
                  <input
                    onChange={(e) => {
                      setOutline(e.target.value);
                      setHexColor(e.target.value);
                    }}
                    type="color"
                    className="invisible"
                    id="outline"
                  />
                  <Box>
                    <Typography sx={{ fontSize: "14px", textAlign: "center" }}>
                      {hexColor}
                    </Typography>
                  </Box>
                </Box>
              </Box>

              <Box>
                <Typography
                  sx={{ fontSize: "14px", padding: "5px", fontWeight: "bold" }}
                >
                  Outline Width
                </Typography>
                <Box className="right_part_input">
                  <input
                    onChange={outlinewidthHandler}
                    type="number"
                    step={1}
                    min={0}
                    max={10}
                    value={current_component.outlineWidth}
                  />
                </Box>
              </Box>
            </Box>
          )}
        </Box>
      </Box>

      <Box style={{ display: activeDiv === 2 ? "block" : "none" }}>
        <Box sx={{ height: "70vh", overflow: "auto" }}>
          <Box>
            <Typography
              sx={{ fontSize: "14px", padding: "5px", fontWeight: "bold" }}
            >
              Element Name
            </Typography>
            <Box className="right_part_input">
              <input type="text" />
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              gap: "5px",
              alignItems: "center",
              textAlign: "center",
              margin: "10px 0px",
            }}
          >
            <Checkbox
              size="small"
              sx={{ p: "0px!important" }}
              checked={showDuration} // Bind to state
              onChange={(e) => setShowDuration(e.target.checked)}
            />
            <Typography fontSize={"14px"} fontWeight={"bold"}>
              Set a duration?
            </Typography>
          </Box>
          {showDuration && (
            <Box>
              <Box>
                <Typography
                  sx={{ fontSize: "14px", padding: "5px", fontWeight: "bold" }}
                >
                  Duration
                </Typography>
                <Box className="right_part_input">
                  <input type="number" step={1} min={0} max={100} />
                </Box>
              </Box>
            </Box>
          )}

          <Box marginTop={2}>
            <Typography
              sx={{ fontSize: "14px", padding: "5px", fontWeight: "bold" }}
            >
              {" "}
              Enable Stats Collection?
            </Typography>
            {/* <Box className='right_part_input'><input type="text"/></Box> */}

            <Box className="accordian">
              <Box className="w-72 mx-auto my-2">
                <Select
                  options={options}
                  value={selectedOption}
                  onChange={setSelectedOption}
                  placeholder="Select a layout..."
                  isSearchable
                />
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box style={{ display: activeDiv === 3 ? "block" : "none" }}>
        <Box sx={{ height: "70vh", overflow: "auto" }}>
          <Box>
            <Typography
              sx={{ fontSize: "14px", padding: "5px", fontWeight: "bold" }}
            >
              Element Layer
            </Typography>
            <Box className="right_part_input">
              <input type="number" value={0} />
            </Box>
          </Box>
          <Box>
            <Typography
              sx={{ fontSize: "14px", padding: "5px", fontWeight: "bold" }}
            >
              Canvas Layer
            </Typography>
            <Box className="right_part_input">
              <input type="number" value={0} />
            </Box>
          </Box>
          <Box>
            <Typography
              sx={{ fontSize: "14px", padding: "5px", fontWeight: "bold" }}
            >
              Top
            </Typography>
            <Box className="right_part_input">
              <input
                onChange={(e) => setTop(e.target.value)}
                type="number"
                step={1}
                min={0}
                max={1000}
                value={current_component.top}
              />
            </Box>
          </Box>
          <Box>
            <Typography
              sx={{ fontSize: "14px", padding: "5px", fontWeight: "bold" }}
            >
              Left
            </Typography>
            <Box className="right_part_input">
              <input
                onChange={(e) => setLeft(e.target.value)}
                type="number"
                min={0}
                max={1000}
                value={current_component.left}
              />
            </Box>
          </Box>
          <Box>
            <Typography
              sx={{ fontSize: "14px", padding: "5px", fontWeight: "bold" }}
            >
              Width
            </Typography>
            <Box className="right_part_input">
              <input
                onChange={(e) => setWidth(e.target.value)}
                type="number"
                min={0}
                max={1000}
                value={current_component.width}
              />
            </Box>
          </Box>
          <Box>
            <Typography
              sx={{ fontSize: "14px", padding: "5px", fontWeight: "bold" }}
            >
              Height
            </Typography>
            {current_component.type === "line" ? (
              <Box className="right_part_input">
                <input
                  onChange={(e) => setLineheight(e.target.value)}
                  type="number"
                  min={0}
                  max={1000}
                  value={current_component.lineheight}
                />
              </Box>
            ) : (
              <Box className="right_part_input">
                <input
                  onChange={(e) => setHeight(e.target.value)}
                  type="number"
                  min={0}
                  max={1000}
                  value={current_component.height}
                />
              </Box>
            )}
          </Box>
          <Box>
            <Typography
              sx={{ fontSize: "14px", padding: "5px", fontWeight: "bold" }}
            >
              Rotation
            </Typography>
            <Box className="right_part_input">
              <input
                onChange={(e) => setTransform(e.target.value)}
                type="number"
                min={0}
                max={1000}
                value={current_component.rotate}
              />
            </Box>
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default Rectangle;

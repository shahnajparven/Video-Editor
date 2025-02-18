import { Box, Checkbox, Typography } from "@mui/material";
import React from "react";
import { useState } from "react";
import Select from "react-select";
import GridViewIcon from "@mui/icons-material/GridView";
const Rectangle = ({
  color,
  setColor,
  setHexColor,
  hexColor,
  current_component,
}) => {
  const [activeDiv, setActiveDiv] = useState(1);

  const handleCollapseClick = (divNumber) => {
    setActiveDiv(divNumber);
  };

  const options= [
    { value: "default", label: "Default Layout" },
    { value: "layout1", label: "Untitled 2025-02-01 01:29:28" },
    { value: "layout2", label: "Untitled 2025-02-01 12:43:21" },
    { value: "layout3", label: "Untitled 2025-02-01 21:14:13" },
  ]; 

  const [selectedOption, setSelectedOption] = useState(null);
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
        <Box>
          <Typography
            sx={{ fontSize: "14px", padding: "5px", fontWeight: "bold" }}
          >
            {" "}
            Background Color
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
                background: `${current_component.color && current_component.color !== '#fff' ? current_component.color : 'gray'}`,
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
            display: "flex",
            gap: "5px",
            alignItems: "center",
            textAlign: "center",
            margin: "10px 0px",
          }}
        >
          <Checkbox size="small" sx={{ p: "0px!important" }} />
          <Typography fontSize={"14px"} fontWeight={"bold"}>
            Use gradient as background?
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
          Round Border
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
          Show Outline
          </Typography>
        </Box>

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
                background: `${current_component.color && current_component.color !== '#fff' ? current_component.color : 'gray'}`,
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

        <Box>
            <Typography
              sx={{ fontSize: "14px", padding: "5px", fontWeight: "bold" }}
            >
             Outline Width
            </Typography>
            <Box className="right_part_input">
              <input type="number" value={0} />
            </Box>
          </Box>
      </Box>

      <Box style={{ display: activeDiv === 2 ? "block" : "none" }}>
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
          <Checkbox size="small" sx={{ p: "0px!important" }} />
          <Typography fontSize={"14px"} fontWeight={"bold"}>
          Set a duration?
          </Typography>
        </Box>

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
      <Box style={{ display: activeDiv === 3 ? "block" : "none" }}>
      <Box sx={{height:'70vh',overflow:'auto'}}>
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
              <input type="number" value={0} />
            </Box>
          </Box>
          <Box>
            <Typography
              sx={{ fontSize: "14px", padding: "5px", fontWeight: "bold" }}
            >
             Left
            </Typography>
            <Box className="right_part_input">
              <input type="number" value={0} />
            </Box>
          </Box>
          <Box>
            <Typography
              sx={{ fontSize: "14px", padding: "5px", fontWeight: "bold" }}
            >
            Width
            </Typography>
            <Box className="right_part_input">
              <input type="number" value={0} />
            </Box>
          </Box>
          <Box>
            <Typography
              sx={{ fontSize: "14px", padding: "5px", fontWeight: "bold" }}
            >
            Height
            </Typography>
            <Box className="right_part_input">
              <input type="number" value={0} />
            </Box>
          </Box>
          <Box>
            <Typography
              sx={{ fontSize: "14px", padding: "5px", fontWeight: "bold" }}
            >
            Rotation
            </Typography>
            <Box className="right_part_input">
              <input type="number" value={0} />
            </Box>
          </Box>
      </Box>
      </Box>
    </div>
  );
};

export default Rectangle;

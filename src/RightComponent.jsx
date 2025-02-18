import {
  Box,
  Button,
  Checkbox,
  Typography,
} from "@mui/material";
import { SketchPicker } from "react-color";
import ReportProblemIcon from "@mui/icons-material/ReportProblem";
import CloseIcon from "@mui/icons-material/Close";
import UploadIcon from "@mui/icons-material/Upload";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import SendIcon from "@mui/icons-material/Send";
import { useState } from "react";
import Select from "react-select";
import AnalogClock from "./drop/AnalogClock";
import DraggableText from "./drop/DraggableText";



function RightComponent({
  // color,
  hexColor,
  setHexColor,
  setColor,
  remove_background,
  current_component
}) {
  const [activeDiv, setActiveDiv] = useState(1);

  const handleCollapseClick = (divNumber) => {
    setActiveDiv(divNumber);
  };

  const options = [
    { value: "default", label: "Default Layout" },
    { value: "layout1", label: "Untitled 2025-02-01 01:29:28" },
    { value: "layout2", label: "Untitled 2025-02-01 12:43:21" },
    { value: "layout3", label: "Untitled 2025-02-01 21:14:13" },
  ];


  

  const [selectedOption, setSelectedOption] = useState(null);
  return (
    <>
      <Box className="right_side">
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
            General
          </Box>
          <Box
            onClick={() => handleCollapseClick(2)}
            sx={{
              width: "100%",
              textAlign: "center",
              color: "#6874dd",
              cursor: "pointer",
            }}
            style={{
              borderBottom: activeDiv === 2 ? "4px solid #6874dd" : "none",
            }}
          >
            <SendIcon fontSize="20px" />
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
            {/* <Box
              sx={{
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "center",
                gap: "10px",
                border: "1px solid #ccc",
              }}
            >
              <Box
                onClick={showSketchPicker}
                style={{
                  width: "40px",
                  height: "40px",
                  backgroundColor: colors,
                }}
              ></Box>
              <Box>
                <Typography sx={{ fontSize: "14px", textAlign: "center" }}>
                  {hexColor}
                </Typography>
              </Box>
            </Box> */}
             <Box>
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
                        background: `${current_component.color && current_component.color !== '#fff' ? current_component.color : 'gray'}`
                      
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
            {/* {showPicker && (
              <SketchPicker
                color={color}
                onChangeComplete={handleColorChange} // Trigger when the color is fully selected
              />
            )} */}
          </Box>

          <Box marginTop={1}>
            <Typography
              sx={{ fontSize: "14px", padding: "5px", fontWeight: "bold" }}
            >
              {" "}
              Background Image
            </Typography>
            <Box
              sx={{
                border: "1px solid #ccc",
                textAlign: "center",
                p: "10px 50px",
              }}
            >
              <ReportProblemIcon />
              <Typography fontSize={"14px"}>
                {" "}
                No Image set, add from Toolbox or Upload!
              </Typography>
            </Box>
            
            <Button
              className="upload_button"
              sx={{ textTransform: "capitalize" }}
              variant="contained"
              component="label"
            >
              Upload
              <input type="file" hidden />
            </Button>
            <Button
            onClick={remove_background}
              className="remove_button"
              sx={{ textTransform: "capitalize" }}
              ariant="contained"
              component="label"
            >
              <CloseIcon fontSize="30px" sx={{ color: "#fff" }} />
              <Typography variant="span" fontSize={"14px"} color="#fff">
                {" "}
                Remove{" "}
              </Typography>
            </Button>
          </Box>
          <Box marginTop={2}>
            <Typography
              sx={{ fontSize: "14px", padding: "5px", fontWeight: "bold" }}
            >
              {" "}
              Resolution
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
              Layer
            </Typography>
            <Box className="right_part_input">
              <input type="number" value={0} />
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
              Automatically apply Transitions?
            </Typography>
          </Box>
        </Box>

        <Box style={{ display: activeDiv === 2 ? "block" : "none" }}>
          <Box marginTop={2}>
            <Typography
              sx={{ fontSize: "14px", padding: "5px", fontWeight: "bold" }}
            >
              {" "}
              Layout Actions
            </Typography>
            <Box padding={2} border={"1px dashed #6874dd"} textAlign="center">
              No actions to show
            </Box>
          </Box>

          <Box marginTop={2}>
            <Typography
              sx={{ fontSize: "14px", padding: "5px", fontWeight: "bold" }}
            >
              {" "}
              Other Actions
            </Typography>
            <Box padding={2} border={"1px dashed #6874dd"} textAlign="center">
              No actions to show
            </Box>

            </Box>
           

        </Box>
      </Box>
    </>
  );
}

export default RightComponent;

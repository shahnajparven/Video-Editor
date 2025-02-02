import { Accordion, AccordionDetails, AccordionSummary, Box, Button, Checkbox, Typography } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import { SketchPicker } from "react-color";
import ReportProblemIcon from '@mui/icons-material/ReportProblem';
import CloseIcon from '@mui/icons-material/Close';
import UploadIcon from '@mui/icons-material/Upload';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
function RightComponent({color,hexColor,showPicker,showSketchPicker,handleColorChange}) {
 

  return (
    <>
      <Box className="right_side">
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "10px",
            borderBottom: "2px solid gray",
            marginBottom: "20px",
          }}
        >
          <Box
            sx={{
              width: "100%",
              textAlign: "center",
              fontSize: "14px",
              fontWeight: "bold",
              color: "#121A5E",
            }}
          >
            General
          </Box>
          <Box sx={{ width: "100%", textAlign: "center", color: "#121A5E" }}>
            <SendIcon fontSize="20px" />
          </Box>
        </Box>
        <Box>
          <Typography
            sx={{ fontSize: "14px", padding: "5px", fontWeight: "bold" }}
          >
            {" "}
            Background Color
          </Typography>
          <Box  sx={{
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
            gap: "10px",
            border: "1px solid #ccc",
          }}>
          <Box onClick={showSketchPicker}
            style={{ width: "40px", height: "40px", backgroundColor: color }}
          >
          </Box>
          <Box>
            <Typography sx={{fontSize:'14px',textAlign:"center"}}>{hexColor}</Typography>
          </Box>
          </Box>
          {showPicker && (
          <SketchPicker
            color={color}
            onChangeComplete={handleColorChange} // Trigger when the color is fully selected
          />
          )}
 
        </Box>

        <Box marginTop={1}>
        <Typography
            sx={{ fontSize: "14px", padding: "5px", fontWeight: "bold" }}
          >
            {" "}
            Background Image
          </Typography>
          <Box sx={{border:'1px solid #ccc',textAlign:'center',p:'15px 50px'}}>
            <ReportProblemIcon/>
          <Typography fontSize={'14px'}> No Image set, add from Toolbox or Upload!</Typography>
          </Box>
          <button className="upload_button"><UploadIcon fontSize="30px"/>  <Typography variant="span" fontSize={'14px'}> Upload</Typography></button>
           <button  className="remove_button"><CloseIcon  fontSize="30px"/><Typography variant="span" fontSize={'14px'}> Remove </Typography></button>
        </Box>
        <Box marginTop={2}>
        <Typography
            sx={{ fontSize: "14px", padding: "5px", fontWeight: "bold" }}
          >
            {" "}
            Resolution
          </Typography>
          {/* <Box className='right_part_input'><input type="text"/></Box> */}

          <Box className='accordian'>

      <Accordion>
        <AccordionSummary
          expandIcon={<ArrowDropDownIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography component="span" sx={{fontSize:'14px',padding:'5px 5px',color:'gray',cursor:'pointer'}}> 4k cinema</Typography>
        </AccordionSummary>
        <AccordionDetails>
         
          <Box className='select_list'>Untitled 2025-02-01 12:43:21</Box>
          <Box className='select_list'>Untitled 2025-02-02 12:43:22</Box>
          <Box className='select_list'>Untitled 2025-02-03 12:43:29</Box>
        </AccordionDetails>
      </Accordion>
    </Box>
        </Box>
        <Box marginTop={2}>
        <Typography
            sx={{ fontSize: "14px", padding: "5px", fontWeight: "bold" }}
          >
            {" "}
            Layer
          </Typography>
        <Box className='right_part_input'><input type="number" value={0}/></Box>
        </Box>

        <Box sx={{display:'flex',gap:'5px',textAlign:'start!important',margin:'10px 0px'}}><Checkbox  size="small" sx={{p:'0px!important'}} /> 
        <Typography fontSize={'14px'} fontWeight={'bold'}>Automatically apply Transitions?
        </Typography></Box>
      </Box>
    </>
  );
}

export default RightComponent;

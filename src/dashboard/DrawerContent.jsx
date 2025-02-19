import { Avatar, Box, Checkbox, IconButton, Typography } from "@mui/material";
import React, { useEffect,useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import Grid from "@mui/material/Grid";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import HourglassEmptyIcon from "@mui/icons-material/HourglassEmpty";
import CodeIcon from "@mui/icons-material/Code";
import VideoFileIcon from "@mui/icons-material/VideoFile";
import VideocamIcon from "@mui/icons-material/Videocam";
import LanIcon from "@mui/icons-material/Lan";
import PublicIcon from "@mui/icons-material/Public";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import DashboardIcon from "@mui/icons-material/Dashboard";
import DatasetIcon from "@mui/icons-material/Dataset";
import { FaMastodon } from "react-icons/fa";
import AssignmentIcon from "@mui/icons-material/Assignment";
import CoffeeIcon from "@mui/icons-material/Coffee";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import WifiIcon from "@mui/icons-material/Wifi";
import { IoBarChartSharp } from "react-icons/io5";
import CloudIcon from "@mui/icons-material/Cloud";
import { PiChartLineUpBold } from "react-icons/pi";
import { TbCalendarTime } from "react-icons/tb";
import { MdRectangle } from "react-icons/md";
import { FaCircle } from "react-icons/fa";
import { IoTriangle } from "react-icons/io5";
import { BsFillPentagonFill } from "react-icons/bs";
import { BsFillHexagonFill } from "react-icons/bs";
import { TfiLayoutLineSolid } from "react-icons/tfi";
import { RxText } from "react-icons/rx";
import FileUploadIcon from "@mui/icons-material/FileUpload";
import FormatListNumberedIcon from "@mui/icons-material/FormatListNumbered";
import MonitorIcon from "@mui/icons-material/Monitor";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import FontDownloadIcon from "@mui/icons-material/FontDownload";
import RoomIcon from "@mui/icons-material/Room";
import LocalAtmIcon from "@mui/icons-material/LocalAtm";
import PercentIcon from "@mui/icons-material/Percent";
import ImportExportIcon from "@mui/icons-material/ImportExport";
import FlagIcon from "@mui/icons-material/Flag";
import ImageIcon from "@mui/icons-material/Image";
import CodeOffIcon from "@mui/icons-material/CodeOff";
import { ImSortNumbericDesc } from "react-icons/im";
import Person2Icon from "@mui/icons-material/Person2";
import ScreenshotMonitorIcon from "@mui/icons-material/ScreenshotMonitor";
import ListIcon from "@mui/icons-material/List";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import BackHandIcon from "@mui/icons-material/BackHand";
import InventoryIcon from "@mui/icons-material/Inventory";
import EmailIcon from "@mui/icons-material/Email";
import InsertLinkIcon from "@mui/icons-material/InsertLink";
import SwapVertIcon from "@mui/icons-material/SwapVert";
import DeviceThermostatIcon from "@mui/icons-material/DeviceThermostat";
import StarsIcon from "@mui/icons-material/Stars";
import SpeedIcon from "@mui/icons-material/Speed";
import NearMeIcon from "@mui/icons-material/NearMe";
import AirIcon from "@mui/icons-material/Air";
import logo from "../assets/logo.png";
// import { useDrag, useDrop } from "react-dnd";
import { useDrag, useDrop } from "react-dnd";



export const DrawerContent = ({ activeContent, handleDrawerClose,createShape,setImage,add_text,add_DateTime }) => {
  const [open, setOpen] = useState();
  const [activeDiv, setActiveDiv] = useState();

  const clockFunction = () => {
    setOpen(true);
    setActiveDiv("clock");
  };
  const countdownFunction = () => {
    setOpen(true);
    setActiveDiv("countdown");
  };

  const worldclockFunction = () => {
    setOpen(true);
    setActiveDiv("worldclock");
  };

  const calender = () => {
    setOpen(true);
    setActiveDiv("calender");
  };
  const currencies = () => {
    setOpen(true);
    setActiveDiv("currencies");
  };
  const dashboards = () => {
    setOpen(true);
    setActiveDiv("dashboards");
  };
  const dataset = () => {
    setOpen(true);
    setActiveDiv("dataset");
  };
  const mastodon = () => {
    setOpen(true);
    setActiveDiv("mastodon");
  };

  const menuboardCategory = () => {
    setOpen(true);
    setActiveDiv("menuboardCategory");
  };
  const menuboardProduct = () => {
    setOpen(true);
    setActiveDiv("menuboardProduct");
  };
  const notifications = () => {
    setOpen(true);
    setActiveDiv("notifications");
  };
  const rssTicker = () => {
    setOpen(true);
    setActiveDiv("rssTicker");
  };
  const stocks = () => {
    setOpen(true);
    setActiveDiv("stocks");
  };
  const weather = () => {
    setOpen(true);
    setActiveDiv("weather");
  };
  const handleAllFunctionClose = () => {
    setOpen(false);
  };



   const [time, setTime] = useState(new Date());
  
    useEffect(() => {
      const timerId = setInterval(() => {
        setTime(new Date());
      }, 1000);
  
      return () => clearInterval(timerId); // Cleanup interval when unmounted
    }, []); // Run only on mount
  
  
      // 🔹 Make Clock Draggable
      // const [{ isDragging }, dragRef] = useDrag(() => ({
      //     type: "CLOCK",
      //     item: { id: "analog-clock" },
      //     collect: (monitor) => ({
      //       isDragging: monitor.isDragging(),
      //     }),
      //   }))


      const [droppedItems, setDroppedItems] = useState([]);

      // 🔹 Make Analog Clock Draggable
      const [{ isDraggingAnalog }, dragAnalogRef] = useDrag(() => ({
        type: "CLOCK",
        item: { id: `analog-clock-${Date.now()}`, type: "analog" },
        collect: (monitor) => ({
          isDraggingAnalog: monitor.isDragging(),
        }),
      }));
    
      // 🔹 Make Digital Clock Draggable
      const [{ isDraggingDigital }, dragDigitalRef] = useDrag(() => ({
        type: "CLOCK",
        item: { id: `digital-clock-${Date.now()}`, type: "digital" },
        collect: (monitor) => ({
          isDraggingDigital: monitor.isDragging(),
        }),
      }));


       // 🔹 Make flip Clock Draggable
       const [{ isDraggingFlip }, dragFlipRef] = useDrag(() => ({
        type: "CLOCK",
        item: { id: `flip-clock-${Date.now()}`, type: "flip" },
        collect: (monitor) => ({
          isDraggingFlip: monitor.isDragging(),
        }),
      }));
     
  // 🔹Text field Draggable
  const [{ isDraggingText }, dragTextRef] = useDrag(() => ({
    type: "TEXT",
    item: {  type: "text" },
    collect: (monitor) => ({
      isDraggingText: monitor.isDragging(),
    }),
  }));

  return (
    <Box>
      <Box
        className={`dashboard_box ${
          activeContent === "dashboard" ? "show" : "hide"
        }`}
      >
        {open ? (
          <Box>
            <Box className={activeDiv === "clock" ? "show" : "hide"}>
              <Box
                sx={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  padding: "5px",
                  bgcolor: "#6874dd",
                }}
              >
                <Typography color="#fff">Clock</Typography>{" "}
                <IconButton onClick={handleAllFunctionClose}>
                  <ArrowBackIcon sx={{ color: "#fff" }} />
                </IconButton>
              </Box>
              <Box>
                <Box sx={{ marginTop: 2, marginBottom: 2 }}>
                  <Grid container spacing={1}>
                    <Grid item xs={6}>
                      <Box ref={dragAnalogRef} sx={{ opacity: isDraggingAnalog ? 0.5 : 1 }}>
                        <Box
                          border={"1px solid #ddd"}
                          padding={"8px"}
                          borderRadius={"4px"}
                        >
                          <Box
                            sx={{
                              display: "flex",
                              flexDirection: "column",
                              justifyContent: "flex-stat",
                              alignItems: "center",
                              gap: "5px",
                              bgcolor: "#6874dd",
                            }}
                          >
                            <Box>
                              <img src={logo} height={60} width={60} />
                            </Box>
                          </Box>
                        </Box>
                        <Typography
                          fontSize={"14px"}
                          color="#676363"
                          textAlign={"center"}
                        >
                          Clock-Analogue
                        </Typography>
                      </Box>
                    </Grid>
                    <Grid item xs={6}>
                      <Box ref={dragDigitalRef} sx={{ opacity: isDraggingDigital ? 0.5 : 1 }}>
                        <Box
                          border={"1px solid #ddd"}
                          padding={"8px"}
                          borderRadius={"4px"}
                        >
                          <Box
                            sx={{
                              display: "flex",
                              flexDirection: "column",
                              justifyContent: "flex-stat",
                              alignItems: "center",
                              gap: "5px",
                              bgcolor: "#6874dd",
                            }}
                          >
                            <Box>
                              <img src={logo} height={60} width={60} />
                            </Box>
                          </Box>
                        </Box>
                        <Typography
                          fontSize={"14px"}
                          color="#676363"
                          textAlign={"center"}
                        >
                          Clock-Digital
                        </Typography>
                      </Box>
                    </Grid>
                    <Grid item xs={6}>
                      <Box ref={dragFlipRef} sx={{ opacity: isDraggingFlip ? 0.5 : 1 }}>
                        <Box
                          border={"1px solid #ddd"}
                          padding={"8px"}
                          borderRadius={"4px"}
                        >
                          <Box
                            sx={{
                              display: "flex",
                              flexDirection: "column",
                              justifyContent: "flex-stat",
                              alignItems: "center",
                              gap: "5px",
                              bgcolor: "#6874dd",
                            }}
                          >
                            <Box>
                              <img src={logo} height={60} width={60} />
                            </Box>
                          </Box>
                        </Box>
                        <Typography
                          fontSize={"14px"}
                          color="#676363"
                          textAlign={"center"}
                        >
                          Clock-Flip
                        </Typography>
                      </Box>
                    </Grid>
                  </Grid>
                </Box>
              </Box>
            </Box>

            <Box className={activeDiv === "countdown" ? "show" : "hide"}>
              <Box
                sx={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  padding: "5px",
                  bgcolor: "#6874dd",
                }}
              >
                <Typography color="#fff">Countdown</Typography>{" "}
                <IconButton onClick={handleAllFunctionClose}>
                  <ArrowBackIcon sx={{ color: "#fff" }} />
                </IconButton>
              </Box>
              <Box sx={{ marginTop: 2, marginBottom: 2 }}>
                <Grid container spacing={1}>
                  <Grid item xs={6}>
                    <Box>
                      <Box
                        border={"1px solid #ddd"}
                        padding={"8px"}
                        borderRadius={"4px"}
                      >
                        <Box
                          sx={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "flex-stat",
                            alignItems: "center",
                            gap: "5px",
                            bgcolor: "#6874dd",
                          }}
                        >
                          <Box>
                            <img src={logo} height={60} width={60} />
                          </Box>
                        </Box>
                      </Box>
                      <Typography
                        fontSize={"14px"}
                        color="#676363"
                        textAlign={"center"}
                      >
                        Countdown-clock
                      </Typography>
                    </Box>
                  </Grid>
                  <Grid item xs={6}>
                    <Box>
                      <Box
                        border={"1px solid #ddd"}
                        padding={"8px"}
                        borderRadius={"4px"}
                      >
                        <Box
                          sx={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "flex-stat",
                            alignItems: "center",
                            gap: "5px",
                            bgcolor: "#6874dd",
                          }}
                        >
                          <Box>
                            <img src={logo} height={60} width={60} />
                          </Box>
                        </Box>
                      </Box>
                      <Typography
                        fontSize={"14px"}
                        color="#676363"
                        textAlign={"center"}
                      >
                        Countdown-Days
                      </Typography>
                    </Box>
                  </Grid>
                  <Grid item xs={6}>
                    <Box>
                      <Box
                        border={"1px solid #ddd"}
                        padding={"8px"}
                        borderRadius={"4px"}
                      >
                        <Box
                          sx={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "flex-stat",
                            alignItems: "center",
                            gap: "5px",
                            bgcolor: "#6874dd",
                          }}
                        >
                          <Box>
                            <img src={logo} height={60} width={60} />
                          </Box>
                        </Box>
                      </Box>
                      <Typography
                        fontSize={"14px"}
                        color="#676363"
                        textAlign={"center"}
                      >
                        Countdown-Table
                      </Typography>
                    </Box>
                  </Grid>
                  <Grid item xs={6}>
                    <Box>
                      <Box
                        border={"1px solid #ddd"}
                        padding={"8px"}
                        borderRadius={"4px"}
                      >
                        <Box
                          sx={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "flex-stat",
                            alignItems: "center",
                            gap: "5px",
                            bgcolor: "#6874dd",
                          }}
                        >
                          <Box>
                            <img src={logo} height={60} width={60} />
                          </Box>
                        </Box>
                      </Box>
                      <Typography
                        fontSize={"14px"}
                        color="#676363"
                        textAlign={"center"}
                      >
                        Countdown-Text
                      </Typography>
                    </Box>
                  </Grid>
                </Grid>
              </Box>
            </Box>

            <Box className={activeDiv === "worldclock" ? "show" : "hide"}>
              <Box
                sx={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  padding: "5px",
                  bgcolor: "#6874dd",
                }}
              >
                <Typography color="#fff">World Clock</Typography>{" "}
                <IconButton onClick={handleAllFunctionClose}>
                  <ArrowBackIcon sx={{ color: "#fff" }} />
                </IconButton>
              </Box>
              <Box>
                <Box sx={{ marginTop: 2, marginBottom: 2 }}>
                  <Grid container spacing={1}>
                    <Grid item xs={6}>
                      <Box>
                        <Box
                          border={"1px solid #ddd"}
                          padding={"8px"}
                          borderRadius={"4px"}
                        >
                          <Box
                            sx={{
                              display: "flex",
                              flexDirection: "column",
                              justifyContent: "flex-stat",
                              alignItems: "center",
                              gap: "5px",
                              bgcolor: "#6874dd",
                            }}
                          >
                            <Box>
                              <img src={logo} height={60} width={60} />
                            </Box>
                          </Box>
                        </Box>
                        <Typography
                          fontSize={"14px"}
                          color="#676363"
                          textAlign={"center"}
                        >
                          World Clock <br />
                          -Analogue
                        </Typography>
                      </Box>
                    </Grid>
                    <Grid item xs={6}>
                      <Box>
                        <Box
                          border={"1px solid #ddd"}
                          padding={"8px"}
                          borderRadius={"4px"}
                        >
                          <Box
                            sx={{
                              display: "flex",
                              flexDirection: "column",
                              justifyContent: "flex-stat",
                              alignItems: "center",
                              gap: "5px",
                              bgcolor: "#6874dd",
                            }}
                          >
                           <Box>
                            <img src={logo} height={60} width={60}/>
                            </Box>
                          </Box>
                        </Box>
                        <Typography
                          fontSize={"14px"}
                          color="#676363"
                          textAlign={"center"}
                        >
                          World Clock <br />- Time/Date
                        </Typography>
                      </Box>
                    </Grid>
                    <Grid item xs={6}>
                      <Box>
                        <Box
                          border={"1px solid #ddd"}
                          padding={"8px"}
                          borderRadius={"4px"}
                        >
                          <Box
                            sx={{
                              display: "flex",
                              flexDirection: "column",
                              justifyContent: "flex-stat",
                              alignItems: "center",
                              gap: "5px",
                              bgcolor: "#6874dd",
                            }}
                          >
                          <Box>
                            <img src={logo} height={60} width={60}/>
                            </Box>
                          </Box>
                        </Box>
                        <Typography
                          fontSize={"14px"}
                          color="#676363"
                          textAlign={"center"}
                        >
                          World Clock <br /> - Text
                        </Typography>
                      </Box>
                    </Grid>
                  </Grid>
                </Box>
              </Box>
            </Box>

            <Box className={activeDiv === "calender" ? "show" : "hide"}>
              <Box
                sx={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  padding: "5px",
                  bgcolor: "#6874dd",
                }}
              >
                <Typography color="#fff">Calender</Typography>{" "}
                <IconButton onClick={handleAllFunctionClose}>
                  <ArrowBackIcon sx={{ color: "#fff" }} />
                </IconButton>
              </Box>
              <Box padding={"0px 10px 50px 10px"}>
                <Box>
                  <Typography
                    sx={{
                      fontSize: "14px",
                      padding: "5px",
                      fontWeight: "bold",
                    }}
                  >
                    {" "}
                    Search
                  </Typography>
                  <Box className="input_box">
                    <input type="text" />
                  </Box>
                </Box>
                <Box marginTop={2}>
                  <Typography sx={{ fontSize: "14px", padding: "5px" }}>
                    {" "}
                    ELEMENTS
                  </Typography>
                  <Box>
                    <Box sx={{ flexGrow: 1 }}>
                      <Grid container spacing={1}>
                        <Grid item xs={6}>
                          <Box
                            border={"1px solid #ddd"}
                            padding={"15px 8px"}
                            borderRadius={"4px"}
                          >
                            <Box
                              sx={{
                                display: "flex",
                                justifyContent: "flex-stat",
                                alignItems: "center",
                                gap: "5px",
                                
                              }}
                            >
                              <FontDownloadIcon
                                fontSize="18px"
                                sx={{ color: "#676363" }}
                              />{" "}
                              <Typography
                                fontSize={"14px"}
                                sx={{ color: "#676363" }}
                              >
                                Summary
                              </Typography>
                            </Box>
                          </Box>
                        </Grid>
                        <Grid item xs={6}>
                          <Box
                            border={"1px solid #ddd"}
                            padding={"15px 8px"}
                            borderRadius={"4px"}
                          >
                            <Box
                              sx={{
                                display: "flex",
                                justifyContent: "flex-stat",
                                alignItems: "center",
                                gap: "5px",
                               
                              }}
                            >
                              <FontDownloadIcon
                                fontSize="18px"
                                sx={{ color: "#676363" }}
                              />{" "}
                              <Typography
                                fontSize={"14px"}
                                sx={{ color: "#676363" }}
                              >
                                Description
                              </Typography>
                            </Box>
                          </Box>
                        </Grid>
                        <Grid item xs={6}>
                          <Box
                            border={"1px solid #ddd"}
                            padding={"15px 8px"}
                            borderRadius={"4px"}
                          >
                            <Box
                              sx={{
                                display: "flex",
                                justifyContent: "flex-stat",
                                alignItems: "center",
                                gap: "5px",
                                
                              }}
                            >
                              <CalendarMonthIcon
                                fontSize="18px"
                                sx={{ color: "#676363" }}
                              />
                              <Typography
                                fontSize={"14px"}
                                sx={{ color: "#676363" }}
                              >
                                Start Date
                              </Typography>
                            </Box>
                          </Box>
                        </Grid>
                        <Grid item xs={6}>
                          <Box
                            border={"1px solid #ddd"}
                            padding={"15px 8px"}
                            borderRadius={"4px"}
                          >
                            <Box
                              sx={{
                                display: "flex",
                                justifyContent: "flex-stat",
                                alignItems: "center",
                                gap: "5px",
                              }}
                            >
                              <CalendarMonthIcon
                                fontSize="18px"
                                sx={{ color: "#676363" }}
                              />{" "}
                              <Typography
                                fontSize={"14px"}
                                sx={{ color: "#676363" }}
                              >
                                End Date
                              </Typography>
                            </Box>
                          </Box>
                        </Grid>

                        <Grid item xs={6}>
                          <Box
                            border={"1px solid #ddd"}
                            padding={"15px 8px"}
                            borderRadius={"4px"}
                          >
                            <Box
                              sx={{
                                display: "flex",
                                justifyContent: "flex-stat",
                                alignItems: "center",
                                gap: "5px",
                              }}
                            >
                              <RoomIcon
                                fontSize="18px"
                                sx={{ color: "#676363" }}
                              />{" "}
                              <Typography
                                fontSize={"14px"}
                                sx={{ color: "#676363" }}
                              >
                                Location
                              </Typography>
                            </Box>
                          </Box>
                        </Grid>
                      </Grid>
                    </Box>
                  </Box>
                </Box>

                <Box sx={{ marginTop: 2, marginBottom: 2 }}>
                  <Typography sx={{ fontSize: "14px", padding: "5px" }}>
                    {" "}
                    ELEMENTS
                  </Typography>
                  <Grid container spacing={1}>
                    <Grid item xs={6}>
                      <Box>
                        <Box
                          border={"1px solid #ddd"}
                          padding={"8px"}
                          borderRadius={"4px"}
                        >
                          <Box
                            sx={{
                              display: "flex",
                              flexDirection: "column",
                              justifyContent: "flex-stat",
                              alignItems: "center",
                              gap: "5px",
                              bgcolor: "#6874dd",
                            }}
                          >
                            <Box>
                            <img src={logo} height={60} width={60}/>
                            </Box>
                          </Box>
                        </Box>
                        <Typography
                          fontSize={"14px"}
                          color="#676363"
                          textAlign={"center"}
                          fontWeight={"bold"}
                        >
                          Calender Detailed <br />
                          Event
                        </Typography>
                      </Box>
                    </Grid>
                    <Grid item xs={6}>
                      <Box>
                        <Box
                          border={"1px solid #ddd"}
                          padding={"8px"}
                          borderRadius={"4px"}
                        >
                          <Box
                            sx={{
                              display: "flex",
                              flexDirection: "column",
                              justifyContent: "flex-stat",
                              alignItems: "center",
                              gap: "5px",
                              bgcolor: "#6874dd",
                            }}
                          >
                            <Box>
                            <img src={logo} height={60} width={60}/>
                            </Box>
                          </Box>
                        </Box>
                        <Typography
                          fontSize={"14px"}
                          color="#676363"
                          textAlign={"center"}
                          fontWeight={"bold"}
                        >
                          Calender Simple <br />
                          Event
                        </Typography>
                      </Box>
                    </Grid>
                    <Grid item xs={6}>
                      <Box>
                        <Box
                          border={"1px solid #ddd"}
                          padding={"8px"}
                          borderRadius={"4px"}
                        >
                          <Box
                            sx={{
                              display: "flex",
                              flexDirection: "column",
                              justifyContent: "flex-stat",
                              alignItems: "center",
                              gap: "5px",
                              bgcolor: "#6874dd",
                            }}
                          >
                           <Box>
                            <img src={logo} height={60} width={60}/>
                            </Box>
                          </Box>
                        </Box>
                        <Typography
                          fontSize={"14px"}
                          color="#676363"
                          textAlign={"center"}
                          fontWeight={"bold"}
                        >
                          Calender Event <br />
                          Row
                        </Typography>
                      </Box>
                    </Grid>
                  </Grid>
                </Box>

                <Box sx={{ marginTop: 2, marginBottom: 2 }}>
                  <Typography sx={{ fontSize: "14px", padding: "5px" }}>
                    {" "}
                    STATIC TEMPLATES
                  </Typography>
                  <Grid container spacing={1}>
                    <Grid item xs={6}>
                      <Box>
                        <Box
                          border={"1px solid #ddd"}
                          padding={"8px"}
                          borderRadius={"4px"}
                        >
                          <Box
                            sx={{
                              display: "flex",
                              flexDirection: "column",
                              justifyContent: "flex-stat",
                              alignItems: "center",
                              gap: "5px",
                              bgcolor: "#6874dd",
                            }}
                          >
                            <Box>
                            <img src={logo} height={60} width={60}/>
                            </Box>
                          </Box>
                        </Box>
                        <Typography
                          fontSize={"14px"}
                          color="#676363"
                          textAlign={"center"}
                          fontWeight={"bold"}
                        >
                          Daily Calender
                          <br />
                          Light
                        </Typography>
                      </Box>
                    </Grid>
                    <Grid item xs={6}>
                      <Box>
                        <Box
                          border={"1px solid #ddd"}
                          padding={"8px"}
                          borderRadius={"4px"}
                        >
                          <Box
                            sx={{
                              display: "flex",
                              flexDirection: "column",
                              justifyContent: "flex-stat",
                              alignItems: "center",
                              gap: "5px",
                              bgcolor: "#6874dd",
                            }}
                          >
                            <Box>
                            <img src={logo} height={60} width={60}/>
                            </Box>
                          </Box>
                        </Box>
                        <Typography
                          fontSize={"14px"}
                          color="#676363"
                          textAlign={"center"}
                          fontWeight={"bold"}
                        >
                          Daily Calender
                          <br />
                          Dark
                        </Typography>
                      </Box>
                    </Grid>
                    <Grid item xs={6}>
                      <Box>
                        <Box
                          border={"1px solid #ddd"}
                          padding={"8px"}
                          borderRadius={"4px"}
                        >
                          <Box
                            sx={{
                              display: "flex",
                              flexDirection: "column",
                              justifyContent: "flex-stat",
                              alignItems: "center",
                              gap: "5px",
                              bgcolor: "#6874dd",
                            }}
                          >
                           <Box>
                            <img src={logo} height={60} width={60}/>
                            </Box>
                          </Box>
                        </Box>
                        <Typography
                          fontSize={"14px"}
                          color="#676363"
                          textAlign={"center"}
                          fontWeight={"bold"}
                        >
                          Weekly Calender
                          <br />
                          Light
                        </Typography>
                      </Box>
                    </Grid>
                    {/* <Grid item xs={6}>
                      <Box>
                        <Box
                          border={"1px solid #ddd"}
                          padding={"8px"}
                          borderRadius={"4px"}
                        >
                          <Box
                            sx={{
                              display: "flex",
                              flexDirection: "column",
                              justifyContent: "flex-stat",
                              alignItems: "center",
                              gap: "5px",
                            }}
                          >
                            <Box>
                            <img src={logo} height={60} width={60}/>
                            </Box>
                          </Box>
                        </Box>
                        <Typography
                          fontSize={"14px"}
                          color="#676363"
                          textAlign={"center"}
                          fontWeight={'bold'}
                        >
                         Weekly Calender<br/>Dark
                        </Typography>
                      </Box>
                    </Grid>
                    <Grid item xs={6}>
                      <Box>
                        <Box
                          border={"1px solid #ddd"}
                          padding={"8px"}
                          borderRadius={"4px"}
                        >
                          <Box
                            sx={{
                              display: "flex",
                              flexDirection: "column",
                              justifyContent: "flex-stat",
                              alignItems: "center",
                              gap: "5px",
                            }}
                          >
                            <Box>
                            <img src={logo} height={60} width={60}/>
                            </Box>
                          </Box>
                        </Box>
                        <Typography
                          fontSize={"14px"}
                          color="#676363"
                          textAlign={"center"}
                          fontWeight={'bold'}
                        >
                         Monthly Calende <br/> Light
                        </Typography>
                      </Box>
                    </Grid>
                    <Grid item xs={6}>
                      <Box>
                        <Box
                          border={"1px solid #ddd"}
                          padding={"8px"}
                          borderRadius={"4px"}
                        >
                          <Box
                            sx={{
                              display: "flex",
                              flexDirection: "column",
                              justifyContent: "flex-stat",
                              alignItems: "center",
                              gap: "5px",
                            }}
                          >
                            <Box>
                            <img src={logo} height={60} width={60}/>
                            </Box>
                          </Box>
                        </Box>
                        <Typography
                          fontSize={"14px"}
                          color="#676363"
                          textAlign={"center"}
                          fontWeight={'bold'}
                        >
                          Monthly Calende <br/> Dark
                        </Typography>
                      </Box>
                    </Grid>
                    <Grid item xs={6}>
                      <Box>
                        <Box
                          border={"1px solid #ddd"}
                          padding={"8px"}
                          borderRadius={"4px"}
                        >
                          <Box
                            sx={{
                              display: "flex",
                              flexDirection: "column",
                              justifyContent: "flex-stat",
                              alignItems: "center",
                              gap: "5px",
                            }}
                          >
                            <Box>
                            <img src={logo} height={60} width={60}/>
                            </Box>
                          </Box>
                        </Box>
                        <Typography
                          fontSize={"14px"}
                          color="#676363"
                          textAlign={"center"}
                          fontWeight={'bold'}
                        >
                          Schedule Calende <br/> Light
                        </Typography>
                      </Box>
                    </Grid>
                    <Grid item xs={6}>
                      <Box>
                        <Box
                          border={"1px solid #ddd"}
                          padding={"8px"}
                          borderRadius={"4px"}
                        >
                          <Box
                            sx={{
                              display: "flex",
                              flexDirection: "column",
                              justifyContent: "flex-stat",
                              alignItems: "center",
                              gap: "5px",
                            }}
                          >
                            <Box>
                            <img src={logo} height={60} width={60}/>
                            </Box>
                          </Box>
                        </Box>
                        <Typography
                          fontSize={"14px"}
                          color="#676363"
                          textAlign={"center"}
                          fontWeight={'bold'}
                        >
                         Schedule Calende <br/> Dark
                        </Typography>
                      </Box>
                    </Grid> */}
                  </Grid>
                </Box>
              </Box>
            </Box>

            <Box className={activeDiv === "currencies" ? "show" : "hide"}>
              <Box
                sx={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  padding: "5px",
                  bgcolor: "#6874dd",
                }}
              >
                <Typography color="#fff">Curriencies</Typography>{" "}
                <IconButton onClick={handleAllFunctionClose}>
                  <ArrowBackIcon sx={{ color: "#fff" }} />
                </IconButton>
              </Box>
              <Box padding={"0px 10px 50px 10px"}>
                <Box>
                  <Typography
                    sx={{
                      fontSize: "14px",
                      padding: "5px",
                      fontWeight: "bold",
                    }}
                  >
                    {" "}
                    Search
                  </Typography>
                  <Box className="input_box">
                    <input type="text" />
                  </Box>
                </Box>
                <Box marginTop={2}>
                  <Typography sx={{ fontSize: "14px", padding: "5px" }}>
                    {" "}
                    ELEMENTS
                  </Typography>
                  <Box>
                    <Box sx={{ flexGrow: 1 }}>
                      <Grid container spacing={1}>
                        <Grid item xs={6}>
                          <Box
                            border={"1px solid #ddd"}
                            padding={"15px 8px"}
                            borderRadius={"4px"}
                          >
                            <Box
                              sx={{
                                display: "flex",
                                justifyContent: "flex-stat",
                                alignItems: "center",
                                gap: "5px",
                              }}
                            >
                              <FontDownloadIcon
                                fontSize="18px"
                                sx={{ color: "#676363" }}
                              />{" "}
                              <Typography
                                fontSize={"14px"}
                                sx={{ color: "#676363" }}
                              >
                                Currency <br />
                                Name
                              </Typography>
                            </Box>
                          </Box>
                        </Grid>
                        <Grid item xs={6}>
                          <Box
                            border={"1px solid #ddd"}
                            padding={"15px 8px"}
                            borderRadius={"4px"}
                          >
                            <Box
                              sx={{
                                display: "flex",
                                justifyContent: "flex-stat",
                                alignItems: "center",
                                gap: "5px",
                              }}
                            >
                              <LocalAtmIcon
                                fontSize="18px"
                                sx={{ color: "#676363" }}
                              />{" "}
                              <Typography
                                fontSize={"14px"}
                                sx={{ color: "#676363" }}
                              >
                                Last Trade <br />
                                Price
                              </Typography>
                            </Box>
                          </Box>
                        </Grid>
                        <Grid item xs={6}>
                          <Box
                            border={"1px solid #ddd"}
                            padding={"15px 8px"}
                            borderRadius={"4px"}
                          >
                            <Box
                              sx={{
                                display: "flex",
                                justifyContent: "flex-stat",
                                alignItems: "center",
                                gap: "5px",
                              }}
                            >
                              <PercentIcon
                                fontSize="18px"
                                sx={{ color: "#676363" }}
                              />
                              <Typography
                                fontSize={"14px"}
                                sx={{ color: "#676363" }}
                              >
                                Change <br />
                                PercentIcon
                              </Typography>
                            </Box>
                          </Box>
                        </Grid>
                        <Grid item xs={6}>
                          <Box
                            border={"1px solid #ddd"}
                            padding={"15px 8px"}
                            borderRadius={"4px"}
                          >
                            <Box
                              sx={{
                                display: "flex",
                                justifyContent: "flex-stat",
                                alignItems: "center",
                                gap: "5px",
                              }}
                            >
                              <ImportExportIcon
                                fontSize="18px"
                                sx={{ color: "#676363" }}
                              />{" "}
                              <Typography
                                fontSize={"14px"}
                                sx={{ color: "#676363" }}
                              >
                                Change <br />
                                Icon
                              </Typography>
                            </Box>
                          </Box>
                        </Grid>

                        <Grid item xs={6}>
                          <Box
                            border={"1px solid #ddd"}
                            padding={"15px 8px"}
                            borderRadius={"4px"}
                          >
                            <Box
                              sx={{
                                display: "flex",
                                justifyContent: "flex-stat",
                                alignItems: "center",
                                gap: "5px",
                              }}
                            >
                              <FlagIcon
                                fontSize="18px"
                                sx={{ color: "#676363" }}
                              />{" "}
                              <Typography
                                fontSize={"14px"}
                                sx={{ color: "#676363" }}
                              >
                                Currency <br />
                                Logo
                              </Typography>
                            </Box>
                          </Box>
                        </Grid>
                      </Grid>
                    </Box>
                  </Box>
                </Box>

                <Box sx={{ marginTop: 2, marginBottom: 2 }}>
                  <Typography sx={{ fontSize: "14px", padding: "5px" }}>
                    {" "}
                    STENCILS
                  </Typography>
                  <Grid container spacing={1}>
                    <Grid item xs={6}>
                      <Box>
                        <Box
                          border={"1px solid #ddd"}
                          padding={"8px"}
                          borderRadius={"4px"}
                        >
                          <Box
                            sx={{
                              display: "flex",
                              flexDirection: "column",
                              justifyContent: "flex-stat",
                              alignItems: "center",
                              gap: "5px",
                              bgcolor: "#6874dd",
                            }}
                          >
                            <Box>
                            <img src={logo} height={60} width={60}/>
                            </Box>
                          </Box>
                        </Box>
                        <Typography
                          fontSize={"13px"}
                          color="#676363"
                          textAlign={"center"}
                          fontWeight={"bold"}
                        >
                          Curriency-Single 1
                        </Typography>
                      </Box>
                    </Grid>
                    <Grid item xs={6}>
                      <Box>
                        <Box
                          border={"1px solid #ddd"}
                          padding={"8px"}
                          borderRadius={"4px"}
                        >
                          <Box
                            sx={{
                              display: "flex",
                              flexDirection: "column",
                              justifyContent: "flex-stat",
                              alignItems: "center",
                              gap: "5px",
                              bgcolor: "#6874dd",
                            }}
                          >
                            <Box>
                            <img src={logo} height={60} width={60}/>
                            </Box>
                          </Box>
                        </Box>
                        <Typography
                          fontSize={"13px"}
                          color="#676363"
                          textAlign={"center"}
                          fontWeight={"bold"}
                        >
                          Curriency-Single 2
                        </Typography>
                      </Box>
                    </Grid>
                    <Grid item xs={6}>
                      <Box>
                        <Box
                          border={"1px solid #ddd"}
                          padding={"8px"}
                          borderRadius={"4px"}
                        >
                          <Box
                            sx={{
                              display: "flex",
                              flexDirection: "column",
                              justifyContent: "flex-stat",
                              alignItems: "center",
                              gap: "5px",
                              bgcolor: "#6874dd",
                            }}
                          >
                           <Box>
                            <img src={logo} height={60} width={60}/>
                            </Box>
                          </Box>
                        </Box>
                        <Typography
                          fontSize={"13px"}
                          color="#676363"
                          textAlign={"center"}
                          fontWeight={"bold"}
                        >
                          Curriency-Single 3
                        </Typography>
                      </Box>
                    </Grid>
                    <Grid item xs={6}>
                      <Box>
                        <Box
                          border={"1px solid #ddd"}
                          padding={"8px"}
                          borderRadius={"4px"}
                        >
                          <Box
                            sx={{
                              display: "flex",
                              flexDirection: "column",
                              justifyContent: "flex-stat",
                              alignItems: "center",
                              gap: "5px",
                              bgcolor: "#6874dd",
                            }}
                          >
                           <Box>
                            <img src={logo} height={60} width={60}/>
                            </Box>
                          </Box>
                        </Box>
                        <Typography
                          fontSize={"13px"}
                          color="#676363"
                          textAlign={"center"}
                          fontWeight={"bold"}
                        >
                          Curriency-Single 4
                        </Typography>
                      </Box>
                    </Grid>
                    <Grid item xs={6}>
                      <Box>
                        <Box
                          border={"1px solid #ddd"}
                          padding={"8px"}
                          borderRadius={"4px"}
                        >
                          <Box
                            sx={{
                              display: "flex",
                              flexDirection: "column",
                              justifyContent: "flex-stat",
                              alignItems: "center",
                              gap: "5px",
                              bgcolor: "#6874dd",
                            }}
                          >
                          <Box>
                            <img src={logo} height={60} width={60}/>
                            </Box>
                          </Box>
                        </Box>
                        <Typography
                          fontSize={"13px"}
                          color="#676363"
                          textAlign={"center"}
                          fontWeight={"bold"}
                        >
                          Curriency-group 1
                        </Typography>
                      </Box>
                    </Grid>
                    <Grid item xs={6}>
                      <Box>
                        <Box
                          border={"1px solid #ddd"}
                          padding={"8px"}
                          borderRadius={"4px"}
                        >
                          <Box
                            sx={{
                              display: "flex",
                              flexDirection: "column",
                              justifyContent: "flex-stat",
                              alignItems: "center",
                              gap: "5px",
                              bgcolor: "#6874dd",
                            }}
                          >
                           <Box>
                            <img src={logo} height={60} width={60}/>
                            </Box>
                          </Box>
                        </Box>
                        <Typography
                          fontSize={"13px"}
                          color="#676363"
                          textAlign={"center"}
                          fontWeight={"bold"}
                        >
                          Curriency-group 2
                        </Typography>
                      </Box>
                    </Grid>
                  </Grid>
                </Box>

                <Box sx={{ marginTop: 2, marginBottom: 2 }}>
                  <Typography sx={{ fontSize: "14px", padding: "5px" }}>
                    {" "}
                    STATIC TEMPLATES
                  </Typography>
                  <Grid container spacing={1}>
                    <Grid item xs={6}>
                      <Box>
                        <Box
                          border={"1px solid #ddd"}
                          padding={"8px"}
                          borderRadius={"4px"}
                        >
                          <Box
                            sx={{
                              display: "flex",
                              flexDirection: "column",
                              justifyContent: "flex-stat",
                              alignItems: "center",
                              gap: "5px",
                              bgcolor: "#6874dd",
                            }}
                          >
                           <Box>
                            <img src={logo} height={60} width={60}/>
                            </Box>
                          </Box>
                        </Box>
                        <Typography
                          fontSize={"13px"}
                          color="#676363"
                          textAlign={"center"}
                          fontWeight={"bold"}
                        >
                          Curriences 1
                        </Typography>
                      </Box>
                    </Grid>
                    <Grid item xs={6}>
                      <Box>
                        <Box
                          border={"1px solid #ddd"}
                          padding={"8px"}
                          borderRadius={"4px"}
                        >
                          <Box
                            sx={{
                              display: "flex",
                              flexDirection: "column",
                              justifyContent: "flex-stat",
                              alignItems: "center",
                              gap: "5px",
                              bgcolor: "#6874dd",
                            }}
                          >
                           <Box>
                            <img src={logo} height={60} width={60}/>
                            </Box>
                          </Box>
                        </Box>
                        <Typography
                          fontSize={"13px"}
                          color="#676363"
                          textAlign={"center"}
                          fontWeight={"bold"}
                        >
                          Curriences 2
                        </Typography>
                      </Box>
                    </Grid>
                  </Grid>
                </Box>
              </Box>
            </Box>

            <Box className={activeDiv === "dashboards" ? "show" : "hide"}>
              <Box
                sx={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  padding: "5px",
                  bgcolor: "#6874dd",
                }}
              >
                <Typography color="#fff">Dashboards</Typography>{" "}
                <IconButton onClick={handleAllFunctionClose}>
                  <ArrowBackIcon sx={{ color: "#fff" }} />
                </IconButton>
              </Box>
              <Box padding={"0px 10px 50px 10px"}>
                <Box>
                  <Typography
                    sx={{
                      fontSize: "14px",
                      padding: "5px",
                      fontWeight: "bold",
                    }}
                  >
                    {" "}
                    Search
                  </Typography>
                  <Box className="input_box">
                    <input type="text" />
                  </Box>
                </Box>

                <Box sx={{ marginTop: 2, marginBottom: 2 }}>
                  <Typography sx={{ fontSize: "14px", padding: "5px" }}>
                    {" "}
                    STATIC TEMPLATES
                  </Typography>
                  <Grid container spacing={1}>
                    <Grid item xs={6}>
                      <Box
                        border={"1px solid #ddd"}
                        padding={"15px 8px"}
                        borderRadius={"4px"}
                      >
                        <Box
                          sx={{
                            display: "flex",
                            justifyContent: "flex-stat",
                            alignItems: "center",
                            gap: "5px",
                          }}
                        >
                          <ImageIcon
                            fontSize="18px"
                            sx={{ color: "#676363" }}
                          />{" "}
                          <Typography
                            fontSize={"14px"}
                            sx={{ color: "#676363" }}
                          >
                            Dashboard <br />
                            Image
                          </Typography>
                        </Box>
                      </Box>
                    </Grid>
                  </Grid>
                </Box>
              </Box>
            </Box>
            <Box className={activeDiv === "dataset" ? "show" : "hide"}>
              <Box
                sx={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  padding: "5px",
                  bgcolor: "#6874dd",
                }}
              >
                <Typography color="#fff">Data Set</Typography>{" "}
                <IconButton onClick={handleAllFunctionClose}>
                  <ArrowBackIcon sx={{ color: "#fff" }} />
                </IconButton>
              </Box>
              <Box padding={"0px 10px 50px 10px"}>
                <Box>
                  <Typography
                    sx={{
                      fontSize: "14px",
                      padding: "5px",
                      fontWeight: "bold",
                    }}
                  >
                    {" "}
                    Search
                  </Typography>
                  <Box className="input_box">
                    <input type="text" />
                  </Box>
                </Box>
                <Box marginTop={2}>
                  <Typography sx={{ fontSize: "14px", padding: "5px" }}>
                    {" "}
                    ELEMENTS
                  </Typography>
                  <Box>
                    <Box sx={{ flexGrow: 1 }}>
                      <Grid container spacing={1}>
                        <Grid item xs={6}>
                          <Box
                            border={"1px solid #ddd"}
                            padding={"15px 8px"}
                            borderRadius={"4px"}
                          >
                            <Box
                              sx={{
                                display: "flex",
                                justifyContent: "flex-stat",
                                alignItems: "center",
                                gap: "5px",
                              }}
                            >
                              <FontDownloadIcon
                                fontSize="18px"
                                sx={{ color: "#676363" }}
                              />{" "}
                              <Typography
                                fontSize={"14px"}
                                sx={{ color: "#676363" }}
                              >
                                String
                              </Typography>
                            </Box>
                          </Box>
                        </Grid>
                        <Grid item xs={6}>
                          <Box
                            border={"1px solid #ddd"}
                            padding={"15px 8px"}
                            borderRadius={"4px"}
                          >
                            <Box
                              sx={{
                                display: "flex",
                                justifyContent: "flex-stat",
                                alignItems: "center",
                                gap: "5px",
                              }}
                            >
                              <ImSortNumbericDesc
                                fontSize="18px"
                                color="#676363"
                              />{" "}
                              <Typography
                                fontSize={"14px"}
                                sx={{ color: "#676363" }}
                              >
                                Number
                              </Typography>
                            </Box>
                          </Box>
                        </Grid>
                        <Grid item xs={6}>
                          <Box
                            border={"1px solid #ddd"}
                            padding={"15px 8px"}
                            borderRadius={"4px"}
                          >
                            <Box
                              sx={{
                                display: "flex",
                                justifyContent: "flex-stat",
                                alignItems: "center",
                                gap: "5px",
                              }}
                            >
                              <CalendarMonthIcon
                                fontSize="18px"
                                sx={{ color: "#676363" }}
                              />
                              <Typography
                                fontSize={"14px"}
                                sx={{ color: "#676363" }}
                              >
                                Date
                              </Typography>
                            </Box>
                          </Box>
                        </Grid>
                        <Grid item xs={6}>
                          <Box
                            border={"1px solid #ddd"}
                            padding={"15px 8px"}
                            borderRadius={"4px"}
                          >
                            <Box
                              sx={{
                                display: "flex",
                                justifyContent: "flex-stat",
                                alignItems: "center",
                                gap: "5px",
                              }}
                            >
                              <ImageIcon
                                fontSize="18px"
                                sx={{ color: "#676363" }}
                              />{" "}
                              <Typography
                                fontSize={"14px"}
                                sx={{ color: "#676363" }}
                              >
                                Image
                              </Typography>
                            </Box>
                          </Box>
                        </Grid>

                        <Grid item xs={6}>
                          <Box
                            border={"1px solid #ddd"}
                            padding={"15px 8px"}
                            borderRadius={"4px"}
                          >
                            <Box
                              sx={{
                                display: "flex",
                                justifyContent: "flex-stat",
                                alignItems: "center",
                                gap: "5px",
                              }}
                            >
                              <CodeOffIcon
                                fontSize="18px"
                                sx={{ color: "#676363" }}
                              />{" "}
                              <Typography
                                fontSize={"14px"}
                                sx={{ color: "#676363" }}
                              >
                                HTML
                              </Typography>
                            </Box>
                          </Box>
                        </Grid>
                      </Grid>
                    </Box>
                  </Box>
                </Box>

                <Box sx={{ marginTop: 2, marginBottom: 2 }}>
                  <Typography sx={{ fontSize: "14px", padding: "5px" }}>
                    {" "}
                    STATIC TEMPLATES
                  </Typography>
                  <Grid container spacing={1}>
                    <Grid item xs={6}>
                      <Box>
                        <Box
                          border={"1px solid #ddd"}
                          padding={"8px"}
                          borderRadius={"4px"}
                        >
                          <Box
                            sx={{
                              display: "flex",
                              flexDirection: "column",
                              justifyContent: "flex-stat",
                              alignItems: "center",
                              gap: "5px",
                              bgcolor: "#6874dd",
                            }}
                          >
                            <Box>
                            <img src={logo} height={60} width={60}/>
                            </Box>
                          </Box>
                        </Box>
                        <Typography
                          fontSize={"13px"}
                          color="#676363"
                          textAlign={"center"}
                          fontWeight={"bold"}
                        >
                          Plan Table
                          <br />
                          (Customizable)
                        </Typography>
                      </Box>
                    </Grid>
                    <Grid item xs={6}>
                      <Box>
                        <Box
                          border={"1px solid #ddd"}
                          padding={"8px"}
                          borderRadius={"4px"}
                        >
                          <Box
                            sx={{
                              display: "flex",
                              flexDirection: "column",
                              justifyContent: "flex-stat",
                              alignItems: "center",
                              gap: "5px",
                              bgcolor: "#6874dd",
                            }}
                          >
                            <Box>
                            <img src={logo} height={60} width={60}/>
                            </Box>
                          </Box>
                        </Box>
                        <Typography
                          fontSize={"13px"}
                          color="#676363"
                          textAlign={"center"}
                          fontWeight={"bold"}
                        >
                          A Light Green
                          <br />
                          Background with
                          <br />
                          Darker Green <br />
                          Border,.White
                          <br />
                          Heading Text
                        </Typography>
                      </Box>
                    </Grid>
                    <Grid item xs={6}>
                      <Box>
                        <Box
                          border={"1px solid #ddd"}
                          padding={"8px"}
                          borderRadius={"4px"}
                        >
                          <Box
                            sx={{
                              display: "flex",
                              flexDirection: "column",
                              justifyContent: "flex-stat",
                              alignItems: "center",
                              gap: "5px",
                              bgcolor: "#6874dd",
                            }}
                          >
                           <Box>
                            <img src={logo} height={60} width={60}/>
                            </Box>
                          </Box>
                        </Box>
                        <Typography
                          fontSize={"13px"}
                          color="#676363"
                          textAlign={"center"}
                          fontWeight={"bold"}
                        >
                          Simple white
                          <br /> table with rounded <br />
                          rows
                        </Typography>
                      </Box>
                    </Grid>
                    <Grid item xs={6}>
                      <Box>
                        <Box
                          border={"1px solid #ddd"}
                          padding={"8px"}
                          borderRadius={"4px"}
                        >
                          <Box
                            sx={{
                              display: "flex",
                              flexDirection: "column",
                              justifyContent: "flex-stat",
                              alignItems: "center",
                              gap: "5px",
                              bgcolor: "#6874dd",
                            }}
                          >
                           <Box>
                            <img src={logo} height={60} width={60}/>
                            </Box>
                          </Box>
                        </Box>
                        <Typography
                          fontSize={"14px"}
                          color="#676363"
                          textAlign={"center"}
                          fontWeight={"bold"}
                        >
                          Striped blue table
                          <br /> with darker blue <br />
                          header
                        </Typography>
                      </Box>
                    </Grid>
                    <Grid item xs={6}>
                      <Box>
                        <Box
                          border={"1px solid #ddd"}
                          padding={"8px"}
                          borderRadius={"4px"}
                        >
                          <Box
                            sx={{
                              display: "flex",
                              flexDirection: "column",
                              justifyContent: "flex-stat",
                              alignItems: "center",
                              gap: "5px",
                              bgcolor: "#6874dd",
                            }}
                          >
                           <Box>
                            <img src={logo} height={60} width={60}/>
                            </Box>
                          </Box>
                        </Box>
                        <Typography
                          fontSize={"14px"}
                          color="#676363"
                          textAlign={"center"}
                          fontWeight={"bold"}
                        >
                          White Striped <br />
                          table with <br />
                          orange header
                        </Typography>
                      </Box>
                    </Grid>
                    <Grid item xs={6}>
                      <Box>
                        <Box
                          border={"1px solid #ddd"}
                          padding={"8px"}
                          borderRadius={"4px"}
                        >
                          <Box
                            sx={{
                              display: "flex",
                              flexDirection: "column",
                              justifyContent: "flex-stat",
                              alignItems: "center",
                              gap: "5px",
                              bgcolor: "#6874dd",
                            }}
                          >
                          <Box>
                            <img src={logo} height={60} width={60}/>
                            </Box>
                          </Box>
                        </Box>
                        <Typography
                          fontSize={"14px"}
                          color="#676363"
                          textAlign={"center"}
                          fontWeight={"bold"}
                        >
                          White and gray <br />
                          table with <br />
                          split row
                        </Typography>
                      </Box>
                    </Grid>
                    <Grid item xs={6}>
                      <Box>
                        <Box
                          border={"1px solid #ddd"}
                          padding={"8px"}
                          borderRadius={"4px"}
                        >
                          <Box
                            sx={{
                              display: "flex",
                              flexDirection: "column",
                              justifyContent: "flex-stat",
                              alignItems: "center",
                              gap: "5px",
                              bgcolor: "#6874dd",
                            }}
                          >
                          <Box>
                            <img src={logo} height={60} width={60}/>
                            </Box>
                          </Box>
                        </Box>
                        <Typography
                          fontSize={"14px"}
                          color="#676363"
                          textAlign={"center"}
                          fontWeight={"bold"}
                        >
                          A dark table
                          <br /> with round borders <br />
                          and yellow <br />
                          heading text
                        </Typography>
                      </Box>
                    </Grid>
                    <Grid item xs={6}>
                      <Box>
                        <Box
                          border={"1px solid #ddd"}
                          padding={"8px"}
                          borderRadius={"4px"}
                        >
                          <Box
                            sx={{
                              display: "flex",
                              flexDirection: "column",
                              justifyContent: "flex-stat",
                              alignItems: "center",
                              gap: "5px",
                              bgcolor: "#6874dd",
                            }}
                          >
                            <Box>
                            <img src={logo} height={60} width={60}/>
                            </Box>
                          </Box>
                        </Box>
                        <Typography
                          fontSize={"14px"}
                          color="#676363"
                          textAlign={"center"}
                          fontWeight={"bold"}
                        >
                          Round cells with
                          <br /> multi colors and <br />a full coloured <br />{" "}
                          header
                        </Typography>
                      </Box>
                    </Grid>
                  </Grid>
                </Box>
              </Box>
            </Box>
            <Box className={activeDiv === "mastodon" ? "show" : "hide"}>
              <Box
                sx={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  padding: "5px",
                  bgcolor: "#6874dd",
                }}
              >
                <Typography color="#fff">Mastodon</Typography>{" "}
                <IconButton onClick={handleAllFunctionClose}>
                  <ArrowBackIcon sx={{ color: "#fff" }} />
                </IconButton>
              </Box>
              <Box padding={"0px 10px 50px 10px"}>
                <Box>
                  <Typography
                    sx={{
                      fontSize: "14px",
                      padding: "5px",
                      fontWeight: "bold",
                    }}
                  >
                    {" "}
                    Search
                  </Typography>
                  <Box className="input_box">
                    <input type="text" />
                  </Box>
                </Box>
                <Box marginTop={2}>
                  <Typography sx={{ fontSize: "14px", padding: "5px" }}>
                    {" "}
                    ELEMENTS
                  </Typography>
                  <Box>
                    <Box sx={{ flexGrow: 1 }}>
                      <Grid container spacing={1}>
                        <Grid item xs={6}>
                          <Box
                            border={"1px solid #ddd"}
                            padding={"15px 8px"}
                            borderRadius={"4px"}
                          >
                            <Box
                              sx={{
                                display: "flex",
                                justifyContent: "flex-stat",
                                alignItems: "center",
                                gap: "5px",
                              }}
                            >
                              <Person2Icon
                                fontSize="18px"
                                sx={{ color: "#676363" }}
                              />{" "}
                              <Typography
                                fontSize={"14px"}
                                sx={{ color: "#676363" }}
                              >
                                Profile Photo
                              </Typography>
                            </Box>
                          </Box>
                        </Grid>
                        <Grid item xs={6}>
                          <Box
                            border={"1px solid #ddd"}
                            padding={"15px 8px"}
                            borderRadius={"4px"}
                          >
                            <Box
                              sx={{
                                display: "flex",
                                justifyContent: "flex-stat",
                                alignItems: "center",
                                gap: "5px",
                              }}
                            >
                              <FontDownloadIcon
                                fontSize="18px"
                                sx={{ color: "#676363" }}
                              />{" "}
                              <Typography
                                fontSize={"14px"}
                                sx={{ color: "#676363" }}
                              >
                                Description
                              </Typography>
                            </Box>
                          </Box>
                        </Grid>
                        <Grid item xs={6}>
                          <Box
                            border={"1px solid #ddd"}
                            padding={"15px 8px"}
                            borderRadius={"4px"}
                          >
                            <Box
                              sx={{
                                display: "flex",
                                justifyContent: "flex-stat",
                                alignItems: "center",
                                gap: "5px",
                              }}
                            >
                              <ScreenshotMonitorIcon
                                fontSize="18px"
                                sx={{ color: "#676363" }}
                              />{" "}
                              <Typography
                                fontSize={"14px"}
                                sx={{ color: "#676363" }}
                              >
                                Screen name
                              </Typography>
                            </Box>
                          </Box>
                        </Grid>
                        <Grid item xs={6}>
                          <Box
                            border={"1px solid #ddd"}
                            padding={"15px 8px"}
                            borderRadius={"4px"}
                          >
                            <Box
                              sx={{
                                display: "flex",
                                justifyContent: "flex-stat",
                                alignItems: "center",
                                gap: "5px",
                              }}
                            >
                              <AccountCircleIcon
                                fontSize="18px"
                                sx={{ color: "#676363" }}
                              />
                              <Typography
                                fontSize={"14px"}
                                sx={{ color: "#676363" }}
                              >
                                useruame
                              </Typography>
                            </Box>
                          </Box>
                        </Grid>
                        <Grid item xs={6}>
                          <Box
                            border={"1px solid #ddd"}
                            padding={"15px 8px"}
                            borderRadius={"4px"}
                          >
                            <Box
                              sx={{
                                display: "flex",
                                justifyContent: "flex-stat",
                                alignItems: "center",
                                gap: "5px",
                              }}
                            >
                              <CalendarMonthIcon
                                fontSize="18px"
                                sx={{ color: "#676363" }}
                              />{" "}
                              <Typography
                                fontSize={"14px"}
                                sx={{ color: "#676363" }}
                              >
                                Date
                              </Typography>
                            </Box>
                          </Box>
                        </Grid>

                        <Grid item xs={6}>
                          <Box
                            border={"1px solid #ddd"}
                            padding={"15px 8px"}
                            borderRadius={"4px"}
                          >
                            <Box
                              sx={{
                                display: "flex",
                                justifyContent: "flex-stat",
                                alignItems: "center",
                                gap: "5px",
                              }}
                            >
                              <ImageIcon
                                fontSize="18px"
                                sx={{ color: "#676363" }}
                              />{" "}
                              <Typography
                                fontSize={"14px"}
                                sx={{ color: "#676363" }}
                              >
                                Post Photo
                              </Typography>
                            </Box>
                          </Box>
                        </Grid>
                      </Grid>
                    </Box>
                  </Box>
                </Box>

                <Box sx={{ marginTop: 2, marginBottom: 2 }}>
                  <Typography sx={{ fontSize: "14px", padding: "5px" }}>
                    {" "}
                    STENCILS
                  </Typography>
                  <Grid container spacing={1}>
                    <Grid item xs={6}>
                      <Box>
                        <Box
                          border={"1px solid #ddd"}
                          padding={"8px"}
                          borderRadius={"4px"}
                        >
                          <Box
                            sx={{
                              display: "flex",
                              flexDirection: "column",
                              justifyContent: "flex-stat",
                              alignItems: "center",
                              gap: "5px",
                              bgcolor: "#6874dd",
                            }}
                          >
                           <Box>
                            <img src={logo} height={60} width={60}/>
                            </Box>
                          </Box>
                        </Box>
                        <Typography
                          fontSize={"14px"}
                          color="#676363"
                          textAlign={"center"}
                          fontWeight={"bold"}
                        >
                          Post
                        </Typography>
                      </Box>
                    </Grid>
                    <Grid item xs={6}>
                      <Box>
                        <Box
                          border={"1px solid #ddd"}
                          padding={"8px"}
                          borderRadius={"4px"}
                        >
                          <Box
                            sx={{
                              display: "flex",
                              flexDirection: "column",
                              justifyContent: "flex-stat",
                              alignItems: "center",
                              gap: "5px",
                              bgcolor: "#6874dd",
                            }}
                          >
                            <Box>
                            <img src={logo} height={60} width={60}/>
                            </Box>
                          </Box>
                        </Box>
                        <Typography
                          fontSize={"14px"}
                          color="#676363"
                          textAlign={"center"}
                          fontWeight={"bold"}
                        >
                          Vintage Photo
                        </Typography>
                      </Box>
                    </Grid>
                    <Grid item xs={6}>
                      <Box>
                        <Box
                          border={"1px solid #ddd"}
                          padding={"8px"}
                          borderRadius={"4px"}
                        >
                          <Box
                            sx={{
                              display: "flex",
                              flexDirection: "column",
                              justifyContent: "flex-stat",
                              alignItems: "center",
                              gap: "5px",
                              bgcolor: "#6874dd",
                            }}
                          >
                           <Box>
                            <img src={logo} height={60} width={60}/>
                            </Box>
                          </Box>
                        </Box>
                        <Typography
                          fontSize={"14px"}
                          color="#676363"
                          textAlign={"center"}
                          fontWeight={"bold"}
                        >
                          Post-Dark
                        </Typography>
                      </Box>
                    </Grid>
                  </Grid>
                </Box>

                <Box sx={{ marginTop: 2, marginBottom: 2 }}>
                  <Typography sx={{ fontSize: "14px", padding: "5px" }}>
                    {" "}
                    STATIC TEMPLATES
                  </Typography>
                  <Grid container spacing={1}>
                    <Grid item xs={6}>
                      <Box>
                        <Box
                          border={"1px solid #ddd"}
                          padding={"8px"}
                          borderRadius={"4px"}
                        >
                          <Box
                            sx={{
                              display: "flex",
                              flexDirection: "column",
                              justifyContent: "flex-stat",
                              alignItems: "center",
                              gap: "5px",
                              bgcolor: "#6874dd",
                            }}
                          >
                            <Box>
                            <img src={logo} height={60} width={60}/>
                            </Box>
                          </Box>
                        </Box>
                        <Typography
                          fontSize={"14px"}
                          color="#676363"
                          textAlign={"center"}
                          fontWeight={"bold"}
                        >
                          Template 1-Text,
                          <br />
                          Profile image
                        </Typography>
                      </Box>
                    </Grid>
                    <Grid item xs={6}>
                      <Box>
                        <Box
                          border={"1px solid #ddd"}
                          padding={"8px"}
                          borderRadius={"4px"}
                        >
                          <Box
                            sx={{
                              display: "flex",
                              flexDirection: "column",
                              justifyContent: "flex-stat",
                              alignItems: "center",
                              gap: "5px",
                              bgcolor: "#6874dd",
                            }}
                          >
                            <Box>
                            <img src={logo} height={60} width={60}/>
                            </Box>
                          </Box>
                        </Box>
                        <Typography
                          fontSize={"14px"}
                          color="#676363"
                          textAlign={"center"}
                          fontWeight={"bold"}
                        >
                          Template 1-Text,
                          <br />
                          Profile image,
                          <br />
                          Photo
                        </Typography>
                      </Box>
                    </Grid>
                    <Grid item xs={6}>
                      <Box>
                        <Box
                          border={"1px solid #ddd"}
                          padding={"8px"}
                          borderRadius={"4px"}
                        >
                          <Box
                            sx={{
                              display: "flex",
                              flexDirection: "column",
                              justifyContent: "flex-stat",
                              alignItems: "center",
                              gap: "5px",
                              bgcolor: "#6874dd",
                            }}
                          >
                            <Box>
                            <img src={logo} height={60} width={60}/>
                            </Box>
                          </Box>
                        </Box>
                        <Typography
                          fontSize={"14px"}
                          color="#676363"
                          textAlign={"center"}
                          fontWeight={"bold"}
                        >
                          Template 3-Text
                        </Typography>
                      </Box>
                    </Grid>
                    <Grid item xs={6}>
                      <Box>
                        <Box
                          border={"1px solid #ddd"}
                          padding={"8px"}
                          borderRadius={"4px"}
                        >
                          <Box
                            sx={{
                              display: "flex",
                              flexDirection: "column",
                              justifyContent: "flex-stat",
                              alignItems: "center",
                              gap: "5px",
                              bgcolor: "#6874dd",
                            }}
                          >
                            <Box>
                            <img src={logo} height={60} width={60}/>
                            </Box>
                          </Box>
                        </Box>
                        <Typography
                          fontSize={"14px"}
                          color="#676363"
                          textAlign={"center"}
                          fontWeight={"bold"}
                        >
                          Template 4-Text,
                          <br />
                          Profile image
                        </Typography>
                      </Box>
                    </Grid>
                    <Grid item xs={6}>
                      <Box>
                        <Box
                          border={"1px solid #ddd"}
                          padding={"8px"}
                          borderRadius={"4px"}
                        >
                          <Box
                            sx={{
                              display: "flex",
                              flexDirection: "column",
                              justifyContent: "flex-stat",
                              alignItems: "center",
                              gap: "5px",
                              bgcolor: "#6874dd",
                            }}
                          >
                            <Box>
                            <img src={logo} height={60} width={60}/>
                            </Box>
                          </Box>
                        </Box>
                        <Typography
                          fontSize={"14px"}
                          color="#676363"
                          textAlign={"center"}
                          fontWeight={"bold"}
                        >
                          Template 5-Text,
                          <br />
                          Profile image
                        </Typography>
                      </Box>
                    </Grid>
                    <Grid item xs={6}>
                      <Box>
                        <Box
                          border={"1px solid #ddd"}
                          padding={"8px"}
                          borderRadius={"4px"}
                        >
                          <Box
                            sx={{
                              display: "flex",
                              flexDirection: "column",
                              justifyContent: "flex-stat",
                              alignItems: "center",
                              gap: "5px",
                              bgcolor: "#6874dd",
                            }}
                          >
                            <Box>
                            <img src={logo} height={60} width={60}/>
                            </Box>
                          </Box>
                        </Box>
                        <Typography
                          fontSize={"14px"}
                          color="#676363"
                          textAlign={"center"}
                          fontWeight={"bold"}
                        >
                          Template 6-Text,
                          <br />
                          Profile image
                        </Typography>
                      </Box>
                    </Grid>
                    <Grid item xs={6}>
                      <Box>
                        <Box
                          border={"1px solid #ddd"}
                          padding={"8px"}
                          borderRadius={"4px"}
                        >
                          <Box
                            sx={{
                              display: "flex",
                              flexDirection: "column",
                              justifyContent: "flex-stat",
                              alignItems: "center",
                              gap: "5px",
                              bgcolor: "#6874dd",
                            }}
                          >
                            <Box>
                            <img src={logo} height={60} width={60}/>
                            </Box>
                          </Box>
                        </Box>
                        <Typography
                          fontSize={"14px"}
                          color="#676363"
                          textAlign={"center"}
                          fontWeight={"bold"}
                        >
                          Template 7-Text,
                          <br />
                          Profile image
                        </Typography>
                      </Box>
                    </Grid>
                    <Grid item xs={6}>
                      <Box>
                        <Box
                          border={"1px solid #ddd"}
                          padding={"8px"}
                          borderRadius={"4px"}
                        >
                          <Box
                            sx={{
                              display: "flex",
                              flexDirection: "column",
                              justifyContent: "flex-stat",
                              alignItems: "center",
                              gap: "5px",
                              bgcolor: "#6874dd",
                            }}
                          >
                            <Box>
                            <img src={logo} height={60} width={60}/>
                            </Box>
                          </Box>
                        </Box>
                        <Typography
                          fontSize={"14px"}
                          color="#676363"
                          textAlign={"center"}
                          fontWeight={"bold"}
                        >
                          Template 8-Text,
                          <br />
                          Profile image
                        </Typography>
                      </Box>
                    </Grid>
                    <Grid item xs={6}>
                      <Box>
                        <Box
                          border={"1px solid #ddd"}
                          padding={"8px"}
                          borderRadius={"4px"}
                        >
                          <Box
                            sx={{
                              display: "flex",
                              flexDirection: "column",
                              justifyContent: "flex-stat",
                              alignItems: "center",
                              gap: "5px",
                              bgcolor: "#6874dd",
                            }}
                          >
                            <Box>
                            <img src={logo} height={60} width={60}/>
                            </Box>
                          </Box>
                        </Box>
                        <Typography
                          fontSize={"14px"}
                          color="#676363"
                          textAlign={"center"}
                          fontWeight={"bold"}
                        >
                          Template 9-Text,
                          <br />
                          logo
                        </Typography>
                      </Box>
                    </Grid>
                    <Grid item xs={6}>
                      <Box>
                        <Box
                          border={"1px solid #ddd"}
                          padding={"8px"}
                          borderRadius={"4px"}
                        >
                          <Box
                            sx={{
                              display: "flex",
                              flexDirection: "column",
                              justifyContent: "flex-stat",
                              alignItems: "center",
                              gap: "5px",
                              bgcolor: "#6874dd",
                            }}
                          >
                            <Box>
                            <img src={logo} height={60} width={60}/>
                            </Box>
                          </Box>
                        </Box>
                        <Typography
                          fontSize={"14px"}
                          color="#676363"
                          textAlign={"center"}
                          fontWeight={"bold"}
                        >
                          Template 10-Text,
                          <br />
                          Photo,logo
                        </Typography>
                      </Box>
                    </Grid>
                    <Grid item xs={6}>
                      <Box>
                        <Box
                          border={"1px solid #ddd"}
                          padding={"8px"}
                          borderRadius={"4px"}
                        >
                          <Box
                            sx={{
                              display: "flex",
                              flexDirection: "column",
                              justifyContent: "flex-stat",
                              alignItems: "center",
                              gap: "5px",
                              bgcolor: "#6874dd",
                            }}
                          >
                            <Box>
                            <img src={logo} height={60} width={60}/>
                            </Box>
                          </Box>
                        </Box>
                        <Typography
                          fontSize={"14px"}
                          color="#676363"
                          textAlign={"center"}
                          fontWeight={"bold"}
                        >
                          Template 11-Text,
                          <br />
                          logo
                        </Typography>
                      </Box>
                    </Grid>
                    <Grid item xs={6}>
                      <Box>
                        <Box
                          border={"1px solid #ddd"}
                          padding={"8px"}
                          borderRadius={"4px"}
                        >
                          <Box
                            sx={{
                              display: "flex",
                              flexDirection: "column",
                              justifyContent: "flex-stat",
                              alignItems: "center",
                              gap: "5px",
                              bgcolor: "#6874dd",
                            }}
                          >
                            <Box>
                            <img src={logo} height={60} width={60}/>
                            </Box>
                          </Box>
                        </Box>
                        <Typography
                          fontSize={"14px"}
                          color="#676363"
                          textAlign={"center"}
                          fontWeight={"bold"}
                        >
                          Template 12-Text,
                          <br />
                          Profile image,logo
                        </Typography>
                      </Box>
                    </Grid>
                    <Grid item xs={6}>
                      <Box>
                        <Box
                          border={"1px solid #ddd"}
                          padding={"8px"}
                          borderRadius={"4px"}
                        >
                          <Box
                            sx={{
                              display: "flex",
                              flexDirection: "column",
                              justifyContent: "flex-stat",
                              alignItems: "center",
                              gap: "5px",
                              bgcolor: "#6874dd",
                            }}
                          >
                            <Box>
                            <img src={logo} height={60} width={60}/>
                            </Box>
                          </Box>
                        </Box>
                        <Typography
                          fontSize={"14px"}
                          color="#676363"
                          textAlign={"center"}
                          fontWeight={"bold"}
                        >
                          Metro Social
                        </Typography>
                      </Box>
                    </Grid>
                  </Grid>
                </Box>
              </Box>
            </Box>
            <Box
              className={activeDiv === "menuboardCategory" ? "show" : "hide"}
            >
              <Box
                sx={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  padding: "5px",
                  bgcolor: "#6874dd",
                }}
              >
                <Typography color="#fff">Menu Board Category</Typography>{" "}
                <IconButton onClick={handleAllFunctionClose}>
                  <ArrowBackIcon sx={{ color: "#fff" }} />
                </IconButton>
              </Box>
              <Box padding={"0px 10px 50px 10px"}>
                <Box>
                  <Typography
                    sx={{
                      fontSize: "14px",
                      padding: "5px",
                      fontWeight: "bold",
                    }}
                  >
                    {" "}
                    Search
                  </Typography>
                  <Box className="input_box">
                    <input type="text" />
                  </Box>
                </Box>
                <Box marginTop={2}>
                  <Typography sx={{ fontSize: "14px", padding: "5px" }}>
                    {" "}
                    ELEMENTS
                  </Typography>
                  <Box>
                    <Box sx={{ flexGrow: 1 }}>
                      <Grid container spacing={1}>
                        <Grid item xs={6}>
                          <Box
                            border={"1px solid #ddd"}
                            padding={"15px 8px"}
                            borderRadius={"4px"}
                          >
                            <Box
                              sx={{
                                display: "flex",
                                justifyContent: "flex-stat",
                                alignItems: "center",
                                gap: "5px",
                              }}
                            >
                              <FontDownloadIcon
                                fontSize="18px"
                                sx={{ color: "#676363" }}
                              />{" "}
                              <Typography
                                fontSize={"14px"}
                                sx={{ color: "#676363" }}
                              >
                                Name
                              </Typography>
                            </Box>
                          </Box>
                        </Grid>
                        <Grid item xs={6}>
                          <Box
                            border={"1px solid #ddd"}
                            padding={"15px 8px"}
                            borderRadius={"4px"}
                          >
                            <Box
                              sx={{
                                display: "flex",
                                justifyContent: "flex-stat",
                                alignItems: "center",
                                gap: "5px",
                              }}
                            >
                              <FontDownloadIcon
                                fontSize="18px"
                                sx={{ color: "#676363" }}
                              />{" "}
                              <Typography
                                fontSize={"14px"}
                                sx={{ color: "#676363" }}
                              >
                                Description
                              </Typography>
                            </Box>
                          </Box>
                        </Grid>
                        <Grid item xs={6}>
                          <Box
                            border={"1px solid #ddd"}
                            padding={"15px 8px"}
                            borderRadius={"4px"}
                          >
                            <Box
                              sx={{
                                display: "flex",
                                justifyContent: "flex-stat",
                                alignItems: "center",
                                gap: "5px",
                              }}
                            >
                              <ImageIcon
                                fontSize="18px"
                                sx={{ color: "#676363" }}
                              />
                              <Typography
                                fontSize={"14px"}
                                sx={{ color: "#676363" }}
                              >
                                Category <br />
                                Photo
                              </Typography>
                            </Box>
                          </Box>
                        </Grid>
                      </Grid>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>
            <Box className={activeDiv === "menuboardProduct" ? "show" : "hide"}>
              <Box
                sx={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  padding: "5px",
                  bgcolor: "#6874dd",
                }}
              >
                <Typography color="#fff">Menu Board Product</Typography>{" "}
                <IconButton onClick={handleAllFunctionClose}>
                  <ArrowBackIcon sx={{ color: "#fff" }} />
                </IconButton>
              </Box>
              <Box padding={"0px 10px 50px 10px"}>
                <Box>
                  <Typography
                    sx={{
                      fontSize: "14px",
                      padding: "5px",
                      fontWeight: "bold",
                    }}
                  >
                    {" "}
                    Search
                  </Typography>
                  <Box className="input_box">
                    <input type="text" />
                  </Box>
                </Box>
                <Box marginTop={2}>
                  <Typography sx={{ fontSize: "14px", padding: "5px" }}>
                    {" "}
                    ELEMENTS
                  </Typography>
                  <Box>
                    <Box sx={{ flexGrow: 1 }}>
                      <Grid container spacing={1}>
                        <Grid item xs={6}>
                          <Box
                            border={"1px solid #ddd"}
                            padding={"15px 8px"}
                            borderRadius={"4px"}
                          >
                            <Box
                              sx={{
                                display: "flex",
                                justifyContent: "flex-stat",
                                alignItems: "center",
                                gap: "5px",
                              }}
                            >
                              <FontDownloadIcon
                                fontSize="18px"
                                sx={{ color: "#676363" }}
                              />{" "}
                              <Typography
                                fontSize={"14px"}
                                sx={{ color: "#676363" }}
                              >
                                Name
                              </Typography>
                            </Box>
                          </Box>
                        </Grid>
                        <Grid item xs={6}>
                          <Box
                            border={"1px solid #ddd"}
                            padding={"15px 8px"}
                            borderRadius={"4px"}
                          >
                            <Box
                              sx={{
                                display: "flex",
                                justifyContent: "flex-stat",
                                alignItems: "center",
                                gap: "5px",
                              }}
                            >
                              <FontDownloadIcon
                                fontSize="18px"
                                sx={{ color: "#676363" }}
                              />{" "}
                              <Typography
                                fontSize={"14px"}
                                sx={{ color: "#676363" }}
                              >
                                Description
                              </Typography>
                            </Box>
                          </Box>
                        </Grid>
                        <Grid item xs={6}>
                          <Box
                            border={"1px solid #ddd"}
                            padding={"15px 8px"}
                            borderRadius={"4px"}
                          >
                            <Box
                              sx={{
                                display: "flex",
                                justifyContent: "flex-stat",
                                alignItems: "center",
                                gap: "5px",
                              }}
                            >
                              <LocalAtmIcon
                                fontSize="18px"
                                sx={{ color: "#676363" }}
                              />
                              <Typography
                                fontSize={"14px"}
                                sx={{ color: "#676363" }}
                              >
                                Price
                              </Typography>
                            </Box>
                          </Box>
                        </Grid>
                        <Grid item xs={6}>
                          <Box
                            border={"1px solid #ddd"}
                            padding={"15px 8px"}
                            borderRadius={"4px"}
                          >
                            <Box
                              sx={{
                                display: "flex",
                                justifyContent: "flex-stat",
                                alignItems: "center",
                                gap: "5px",
                              }}
                            >
                              <BackHandIcon
                                fontSize="18px"
                                sx={{ color: "#676363" }}
                              />{" "}
                              <Typography
                                fontSize={"14px"}
                                sx={{ color: "#676363" }}
                              >
                                Allergy Info
                              </Typography>
                            </Box>
                          </Box>
                        </Grid>

                        <Grid item xs={6}>
                          <Box
                            border={"1px solid #ddd"}
                            padding={"15px 8px"}
                            borderRadius={"4px"}
                          >
                            <Box
                              sx={{
                                display: "flex",
                                justifyContent: "flex-stat",
                                alignItems: "center",
                                gap: "5px",
                              }}
                            >
                              <ImageIcon
                                fontSize="18px"
                                sx={{ color: "#676363" }}
                              />{" "}
                              <Typography
                                fontSize={"14px"}
                                sx={{ color: "#676363" }}
                              >
                                Photo
                              </Typography>
                            </Box>
                          </Box>
                        </Grid>

                        <Grid item xs={6}>
                          <Box
                            border={"1px solid #ddd"}
                            padding={"15px 8px"}
                            borderRadius={"4px"}
                          >
                            <Box
                              sx={{
                                display: "flex",
                                justifyContent: "flex-stat",
                                alignItems: "center",
                                gap: "5px",
                              }}
                            >
                              <ListIcon
                                fontSize="18px"
                                sx={{ color: "#676363" }}
                              />{" "}
                              <Typography
                                fontSize={"14px"}
                                sx={{ color: "#676363" }}
                              >
                                Option Name
                              </Typography>
                            </Box>
                          </Box>
                        </Grid>

                        <Grid item xs={6}>
                          <Box
                            border={"1px solid #ddd"}
                            padding={"15px 8px"}
                            borderRadius={"4px"}
                          >
                            <Box
                              sx={{
                                display: "flex",
                                justifyContent: "flex-stat",
                                alignItems: "center",
                                gap: "5px",
                              }}
                            >
                              <LocalAtmIcon
                                fontSize="18px"
                                sx={{ color: "#676363" }}
                              />{" "}
                              <Typography
                                fontSize={"14px"}
                                sx={{ color: "#676363" }}
                              >
                                Option Value
                              </Typography>
                            </Box>
                          </Box>
                        </Grid>

                        <Grid item xs={6}>
                          <Box
                            border={"1px solid #ddd"}
                            padding={"15px 8px"}
                            borderRadius={"4px"}
                          >
                            <Box
                              sx={{
                                display: "flex",
                                justifyContent: "flex-stat",
                                alignItems: "center",
                                gap: "5px",
                              }}
                            >
                              <InventoryIcon
                                fontSize="18px"
                                sx={{ color: "#676363" }}
                              />{" "}
                              <Typography
                                fontSize={"14px"}
                                sx={{ color: "#676363" }}
                              >
                                Calories
                              </Typography>
                            </Box>
                          </Box>
                        </Grid>
                      </Grid>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>
            <Box className={activeDiv === "notifications" ? "show" : "hide"}>
              <Box
                sx={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  padding: "5px",
                  bgcolor: "#6874dd",
                }}
              >
                <Typography color="#fff">Notifications</Typography>{" "}
                <IconButton onClick={handleAllFunctionClose}>
                  <ArrowBackIcon sx={{ color: "#fff" }} />
                </IconButton>
              </Box>
              <Box padding={"0px 10px 50px 10px"}>
                <Box>
                  <Typography
                    sx={{
                      fontSize: "14px",
                      padding: "5px",
                      fontWeight: "bold",
                    }}
                  >
                    {" "}
                    Search
                  </Typography>
                  <Box className="input_box">
                    <input type="text" />
                  </Box>
                </Box>
                <Box marginTop={2}>
                  <Typography sx={{ fontSize: "14px", padding: "5px" }}>
                    {" "}
                    ELEMENTS
                  </Typography>
                  <Box>
                    <Box sx={{ flexGrow: 1 }}>
                      <Grid container spacing={1}>
                        <Grid item xs={6}>
                          <Box
                            border={"1px solid #ddd"}
                            padding={"15px 8px"}
                            borderRadius={"4px"}
                          >
                            <Box
                              sx={{
                                display: "flex",
                                justifyContent: "flex-stat",
                                alignItems: "center",
                                gap: "5px",
                              }}
                            >
                              <FontDownloadIcon
                                fontSize="18px"
                                sx={{ color: "#676363" }}
                              />{" "}
                              <Typography
                                fontSize={"14px"}
                                sx={{ color: "#676363" }}
                              >
                                Subject
                              </Typography>
                            </Box>
                          </Box>
                        </Grid>
                        <Grid item xs={6}>
                          <Box
                            border={"1px solid #ddd"}
                            padding={"15px 8px"}
                            borderRadius={"4px"}
                          >
                            <Box
                              sx={{
                                display: "flex",
                                justifyContent: "flex-stat",
                                alignItems: "center",
                                gap: "5px",
                              }}
                            >
                              <EmailIcon
                                fontSize="18px"
                                sx={{ color: "#676363" }}
                              />{" "}
                              <Typography
                                fontSize={"14px"}
                                sx={{ color: "#676363" }}
                              >
                                Body
                              </Typography>
                            </Box>
                          </Box>
                        </Grid>
                        <Grid item xs={6}>
                          <Box
                            border={"1px solid #ddd"}
                            padding={"15px 8px"}
                            borderRadius={"4px"}
                          >
                            <Box
                              sx={{
                                display: "flex",
                                justifyContent: "flex-stat",
                                alignItems: "center",
                                gap: "5px",
                              }}
                            >
                              <CalendarMonthIcon
                                fontSize="18px"
                                sx={{ color: "#676363" }}
                              />
                              <Typography
                                fontSize={"14px"}
                                sx={{ color: "#676363" }}
                              >
                                Date
                              </Typography>
                            </Box>
                          </Box>
                        </Grid>
                        <Grid item xs={6}>
                          <Box
                            border={"1px solid #ddd"}
                            padding={"15px 8px"}
                            borderRadius={"4px"}
                          >
                            <Box
                              sx={{
                                display: "flex",
                                justifyContent: "flex-stat",
                                alignItems: "center",
                                gap: "5px",
                              }}
                            >
                              <CalendarMonthIcon
                                fontSize="18px"
                                sx={{ color: "#676363" }}
                              />{" "}
                              <Typography
                                fontSize={"14px"}
                                sx={{ color: "#676363" }}
                              >
                                Create Date
                              </Typography>
                            </Box>
                          </Box>
                        </Grid>
                      </Grid>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>
            <Box className={activeDiv === "rssTicker" ? "show" : "hide"}>
              <Box
                sx={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  padding: "5px",
                  bgcolor: "#6874dd",
                }}
              >
                <Typography color="#fff">RSS Ticker</Typography>{" "}
                <IconButton onClick={handleAllFunctionClose}>
                  <ArrowBackIcon sx={{ color: "#fff" }} />
                </IconButton>
              </Box>
              <Box padding={"0px 10px 50px 10px"}>
                <Box>
                  <Typography
                    sx={{
                      fontSize: "14px",
                      padding: "5px",
                      fontWeight: "bold",
                    }}
                  >
                    {" "}
                    Search
                  </Typography>
                  <Box className="input_box">
                    <input type="text" />
                  </Box>
                </Box>
                <Box marginTop={2}>
                  <Typography sx={{ fontSize: "14px", padding: "5px" }}>
                    {" "}
                    ELEMENTS
                  </Typography>
                  <Box>
                    <Box sx={{ flexGrow: 1 }}>
                      <Grid container spacing={1}>
                        <Grid item xs={6}>
                          <Box
                            border={"1px solid #ddd"}
                            padding={"15px 8px"}
                            borderRadius={"4px"}
                          >
                            <Box
                              sx={{
                                display: "flex",
                                justifyContent: "flex-stat",
                                alignItems: "center",
                                gap: "5px",
                              }}
                            >
                              <FontDownloadIcon
                                fontSize="18px"
                                sx={{ color: "#676363" }}
                              />{" "}
                              <Typography
                                fontSize={"14px"}
                                sx={{ color: "#676363" }}
                              >
                                Title
                              </Typography>
                            </Box>
                          </Box>
                        </Grid>
                        <Grid item xs={6}>
                          <Box
                            border={"1px solid #ddd"}
                            padding={"15px 8px"}
                            borderRadius={"4px"}
                          >
                            <Box
                              sx={{
                                display: "flex",
                                justifyContent: "flex-stat",
                                alignItems: "center",
                                gap: "5px",
                              }}
                            >
                              <FontDownloadIcon
                                fontSize="18px"
                                sx={{ color: "#676363" }}
                              />{" "}
                              <Typography
                                fontSize={"14px"}
                                sx={{ color: "#676363" }}
                              >
                                Summary
                              </Typography>
                            </Box>
                          </Box>
                        </Grid>
                        <Grid item xs={6}>
                          <Box
                            border={"1px solid #ddd"}
                            padding={"15px 8px"}
                            borderRadius={"4px"}
                          >
                            <Box
                              sx={{
                                display: "flex",
                                justifyContent: "flex-stat",
                                alignItems: "center",
                                gap: "5px",
                              }}
                            >
                              <FontDownloadIcon
                                fontSize="18px"
                                sx={{ color: "#676363" }}
                              />{" "}
                              <Typography
                                fontSize={"14px"}
                                sx={{ color: "#676363" }}
                              >
                                Content
                              </Typography>
                            </Box>
                          </Box>
                        </Grid>
                        <Grid item xs={6}>
                          <Box
                            border={"1px solid #ddd"}
                            padding={"15px 8px"}
                            borderRadius={"4px"}
                          >
                            <Box
                              sx={{
                                display: "flex",
                                justifyContent: "flex-stat",
                                alignItems: "center",
                                gap: "5px",
                              }}
                            >
                              <Person2Icon
                                fontSize="18px"
                                sx={{ color: "#676363" }}
                              />{" "}
                              <Typography
                                fontSize={"14px"}
                                sx={{ color: "#676363" }}
                              >
                                Author
                              </Typography>
                            </Box>
                          </Box>
                        </Grid>
                        <Grid item xs={6}>
                          <Box
                            border={"1px solid #ddd"}
                            padding={"15px 8px"}
                            borderRadius={"4px"}
                          >
                            <Box
                              sx={{
                                display: "flex",
                                justifyContent: "flex-stat",
                                alignItems: "center",
                                gap: "5px",
                              }}
                            >
                              <CalendarMonthIcon
                                fontSize="18px"
                                sx={{ color: "#676363" }}
                              />
                              <Typography
                                fontSize={"14px"}
                                sx={{ color: "#676363" }}
                              >
                                Date
                              </Typography>
                            </Box>
                          </Box>
                        </Grid>
                        <Grid item xs={6}>
                          <Box
                            border={"1px solid #ddd"}
                            padding={"5px 8px"}
                            borderRadius={"4px"}
                          >
                            <Box
                              sx={{
                                display: "flex",
                                justifyContent: "flex-stat",
                                alignItems: "center",
                                gap: "5px",
                              }}
                            >
                              <CalendarMonthIcon
                                fontSize="18px"
                                sx={{ color: "#676363" }}
                              />{" "}
                              <Typography
                                fontSize={"14px"}
                                sx={{ color: "#676363" }}
                              >
                                Published <br />
                                Date
                              </Typography>
                            </Box>
                          </Box>
                        </Grid>

                        <Grid item xs={6}>
                          <Box
                            border={"1px solid #ddd"}
                            padding={"15px 8px"}
                            borderRadius={"4px"}
                          >
                            <Box
                              sx={{
                                display: "flex",
                                justifyContent: "flex-stat",
                                alignItems: "center",
                                gap: "5px",
                              }}
                            >
                              <ImageIcon
                                fontSize="18px"
                                sx={{ color: "#676363" }}
                              />{" "}
                              <Typography
                                fontSize={"14px"}
                                sx={{ color: "#676363" }}
                              >
                                Image
                              </Typography>
                            </Box>
                          </Box>
                        </Grid>
                        <Grid item xs={6}>
                          <Box
                            border={"1px solid #ddd"}
                            padding={"15px 8px"}
                            borderRadius={"4px"}
                          >
                            <Box
                              sx={{
                                display: "flex",
                                justifyContent: "flex-stat",
                                alignItems: "center",
                                gap: "5px",
                              }}
                            >
                              <InsertLinkIcon
                                fontSize="18px"
                                sx={{ color: "#676363" }}
                              />{" "}
                              <Typography
                                fontSize={"14px"}
                                sx={{ color: "#676363" }}
                              >
                                Link
                              </Typography>
                            </Box>
                          </Box>
                        </Grid>
                        <Grid item xs={6}>
                          <Box
                            border={"1px solid #ddd"}
                            padding={"15px 8px"}
                            borderRadius={"4px"}
                          >
                            <Box
                              sx={{
                                display: "flex",
                                justifyContent: "flex-stat",
                                alignItems: "center",
                                gap: "5px",
                              }}
                            >
                              <InsertLinkIcon
                                fontSize="18px"
                                sx={{ color: "#676363" }}
                              />{" "}
                              <Typography
                                fontSize={"14px"}
                                sx={{ color: "#676363" }}
                              >
                                PermaLink
                              </Typography>
                            </Box>
                          </Box>
                        </Grid>
                      </Grid>
                    </Box>
                  </Box>
                </Box>

                <Box sx={{ marginTop: 2, marginBottom: 2 }}>
                  <Typography sx={{ fontSize: "14px", padding: "5px" }}>
                    {" "}
                    STATIC TEMPLATES
                  </Typography>
                  <Grid container spacing={1}>
                    <Grid item xs={6}>
                      <Box>
                        <Box
                          border={"1px solid #ddd"}
                          padding={"8px"}
                          borderRadius={"4px"}
                        >
                          <Box
                            sx={{
                              display: "flex",
                              flexDirection: "column",
                              justifyContent: "flex-stat",
                              alignItems: "center",
                              gap: "5px",
                              bgcolor: "#6874dd",
                            }}
                          >
                            <Box>
                            <img src={logo} height={60} width={60}/>
                            </Box>
                          </Box>
                        </Box>
                        <Typography
                          fontSize={"13px"}
                          color="#676363"
                          textAlign={"center"}
                          fontWeight={"bold"}
                        >
                          Image Only
                        </Typography>
                      </Box>
                    </Grid>
                    <Grid item xs={6}>
                      <Box>
                        <Box
                          border={"1px solid #ddd"}
                          padding={"8px"}
                          borderRadius={"4px"}
                        >
                          <Box
                            sx={{
                              display: "flex",
                              flexDirection: "column",
                              justifyContent: "flex-stat",
                              alignItems: "center",
                              gap: "5px",
                              bgcolor: "#6874dd",
                            }}
                          >
                            <Box>
                            <img src={logo} height={60} width={60}/>
                            </Box>
                          </Box>
                        </Box>
                        <Typography
                          fontSize={"13px"}
                          color="#676363"
                          textAlign={"center"}
                          fontWeight={"bold"}
                        >
                          Image overlaid
                          <br />
                          with the Feed <br />
                          Content on the <br />
                          left
                        </Typography>
                      </Box>
                    </Grid>
                    <Grid item xs={6}>
                      <Box>
                        <Box
                          border={"1px solid #ddd"}
                          padding={"8px"}
                          borderRadius={"4px"}
                        >
                          <Box
                            sx={{
                              display: "flex",
                              flexDirection: "column",
                              justifyContent: "flex-stat",
                              alignItems: "center",
                              gap: "5px",
                              bgcolor: "#6874dd",
                            }}
                          >
                            <Box>
                            <img src={logo} height={60} width={60}/>
                            </Box>
                          </Box>
                        </Box>
                        <Typography
                          fontSize={"13px"}
                          color="#676363"
                          textAlign={"center"}
                          fontWeight={"bold"}
                        >
                          Image overlaid
                          <br />
                          with the Title
                        </Typography>
                      </Box>
                    </Grid>
                    <Grid item xs={6}>
                      <Box>
                        <Box
                          border={"1px solid #ddd"}
                          padding={"8px"}
                          borderRadius={"4px"}
                        >
                          <Box
                            sx={{
                              display: "flex",
                              flexDirection: "column",
                              justifyContent: "flex-stat",
                              alignItems: "center",
                              gap: "5px",
                              bgcolor: "#6874dd",
                            }}
                          >
                            <Box>
                            <img src={logo} height={60} width={60}/>
                            </Box>
                          </Box>
                        </Box>
                        <Typography
                          fontSize={"13px"}
                          color="#676363"
                          textAlign={"center"}
                          fontWeight={"bold"}
                        >
                          Prominent title
                          <br />
                          with description <br />
                          and name <br />
                          separator
                        </Typography>
                      </Box>
                    </Grid>
                    <Grid item xs={6}>
                      <Box>
                        <Box
                          border={"1px solid #ddd"}
                          padding={"8px"}
                          borderRadius={"4px"}
                        >
                          <Box
                            sx={{
                              display: "flex",
                              flexDirection: "column",
                              justifyContent: "flex-stat",
                              alignItems: "center",
                              gap: "5px",
                              bgcolor: "#6874dd",
                            }}
                          >
                            <Box>
                            <img src={logo} height={60} width={60}/>
                            </Box>
                          </Box>
                        </Box>
                        <Typography
                          fontSize={"13px"}
                          color="#676363"
                          textAlign={"center"}
                          fontWeight={"bold"}
                        >
                          Title only
                        </Typography>
                      </Box>
                    </Grid>
                    <Grid item xs={6}>
                      <Box
                        border={"1px solid #ddd"}
                        padding={"5px 8px"}
                        borderRadius={"4px"}
                      >
                        <Box
                          sx={{
                            display: "flex",
                            justifyContent: "flex-stat",
                            alignItems: "center",
                            gap: "5px",
                          }}
                        >
                          <Typography
                            fontSize={"13px"}
                            sx={{ color: "#676363" }}
                          >
                            Articles Shown <br />
                            in marquee
                          </Typography>
                        </Box>
                      </Box>
                    </Grid>
                  </Grid>
                </Box>
              </Box>
            </Box>
            <Box className={activeDiv === "stocks" ? "show" : "hide"}>
              <Box
                sx={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  padding: "5px",
                  bgcolor: "#6874dd",
                }}
              >
                <Typography color="#fff">Stocks</Typography>{" "}
                <IconButton onClick={handleAllFunctionClose}>
                  <ArrowBackIcon sx={{ color: "#fff" }} />
                </IconButton>
              </Box>
              <Box padding={"0px 10px 50px 10px"}>
                <Box>
                  <Typography
                    sx={{
                      fontSize: "14px",
                      padding: "5px",
                      fontWeight: "bold",
                    }}
                  >
                    {" "}
                    Search
                  </Typography>
                  <Box className="input_box">
                    <input type="text" />
                  </Box>
                </Box>
                <Box marginTop={2}>
                  <Typography sx={{ fontSize: "14px", padding: "5px" }}>
                    {" "}
                    ELEMENTS
                  </Typography>
                  <Box>
                    <Box sx={{ flexGrow: 1 }}>
                      <Grid container spacing={1}>
                        <Grid item xs={6}>
                          <Box
                            border={"1px solid #ddd"}
                            padding={"15px 8px"}
                            borderRadius={"4px"}
                          >
                            <Box
                              sx={{
                                display: "flex",
                                justifyContent: "flex-stat",
                                alignItems: "center",
                                gap: "5px",
                              }}
                            >
                              <FontDownloadIcon
                                fontSize="18px"
                                sx={{ color: "#676363" }}
                              />{" "}
                              <Typography
                                fontSize={"14px"}
                                sx={{ color: "#676363" }}
                              >
                                Name
                              </Typography>
                            </Box>
                          </Box>
                        </Grid>
                        <Grid item xs={6}>
                          <Box
                            border={"1px solid #ddd"}
                            padding={"15px 8px"}
                            borderRadius={"4px"}
                          >
                            <Box
                              sx={{
                                display: "flex",
                                justifyContent: "flex-stat",
                                alignItems: "center",
                                gap: "5px",
                              }}
                            >
                              <FontDownloadIcon
                                fontSize="18px"
                                sx={{ color: "#676363" }}
                              />{" "}
                              <Typography
                                fontSize={"14px"}
                                sx={{ color: "#676363" }}
                              >
                                Symble
                              </Typography>
                            </Box>
                          </Box>
                        </Grid>
                        <Grid item xs={6}>
                          <Box
                            border={"1px solid #ddd"}
                            padding={"15px 8px"}
                            borderRadius={"4px"}
                          >
                            <Box
                              sx={{
                                display: "flex",
                                justifyContent: "flex-stat",
                                alignItems: "center",
                                gap: "5px",
                              }}
                            >
                              <LocalAtmIcon
                                fontSize="18px"
                                sx={{ color: "#676363" }}
                              />
                              <Typography
                                fontSize={"14px"}
                                sx={{ color: "#676363" }}
                              >
                                Last Trade <br />
                                Price
                              </Typography>
                            </Box>
                          </Box>
                        </Grid>
                        <Grid item xs={6}>
                          <Box
                            border={"1px solid #ddd"}
                            padding={"15px 8px"}
                            borderRadius={"4px"}
                          >
                            <Box
                              sx={{
                                display: "flex",
                                justifyContent: "flex-stat",
                                alignItems: "center",
                                gap: "5px",
                              }}
                            >
                              <PercentIcon
                                fontSize="18px"
                                sx={{ color: "#676363" }}
                              />{" "}
                              <Typography
                                fontSize={"14px"}
                                sx={{ color: "#676363" }}
                              >
                                Change <br />
                                percentage
                              </Typography>
                            </Box>
                          </Box>
                        </Grid>

                        <Grid item xs={6}>
                          <Box
                            border={"1px solid #ddd"}
                            padding={"15px 8px"}
                            borderRadius={"4px"}
                          >
                            <Box
                              sx={{
                                display: "flex",
                                justifyContent: "flex-stat",
                                alignItems: "center",
                                gap: "5px",
                              }}
                            >
                              <SwapVertIcon
                                fontSize="18px"
                                sx={{ color: "#676363" }}
                              />{" "}
                              <Typography
                                fontSize={"14px"}
                                sx={{ color: "#676363" }}
                              >
                                Stock Icon
                              </Typography>
                            </Box>
                          </Box>
                        </Grid>
                      </Grid>
                    </Box>
                  </Box>
                </Box>

                <Box sx={{ marginTop: 2, marginBottom: 2 }}>
                  <Typography sx={{ fontSize: "14px", padding: "5px" }}>
                    {" "}
                    STENCILS
                  </Typography>
                  <Grid container spacing={1}>
                    <Grid item xs={6}>
                      <Box>
                        <Box
                          border={"1px solid #ddd"}
                          padding={"8px"}
                          borderRadius={"4px"}
                        >
                          <Box
                            sx={{
                              display: "flex",
                              flexDirection: "column",
                              justifyContent: "flex-stat",
                              alignItems: "center",
                              gap: "5px",
                              bgcolor: "#6874dd",
                            }}
                          >
                            <Box>
                            <img src={logo} height={60} width={60}/>
                            </Box>
                          </Box>
                        </Box>
                        <Typography
                          fontSize={"13px"}
                          color="#676363"
                          textAlign={"center"}
                          fontWeight={"bold"}
                        >
                          Stocks-Single 1
                        </Typography>
                      </Box>
                    </Grid>
                    <Grid item xs={6}>
                      <Box>
                        <Box
                          border={"1px solid #ddd"}
                          padding={"8px"}
                          borderRadius={"4px"}
                        >
                          <Box
                            sx={{
                              display: "flex",
                              flexDirection: "column",
                              justifyContent: "flex-stat",
                              alignItems: "center",
                              gap: "5px",
                              bgcolor: "#6874dd",
                            }}
                          >
                            <Box>
                            <img src={logo} height={60} width={60}/>
                            </Box>
                          </Box>
                        </Box>
                        <Typography
                          fontSize={"14px"}
                          color="#676363"
                          textAlign={"center"}
                          fontWeight={"bold"}
                        >
                          Stocks-Single 2
                        </Typography>
                      </Box>
                    </Grid>
                    <Grid item xs={6}>
                      <Box>
                        <Box
                          border={"1px solid #ddd"}
                          padding={"8px"}
                          borderRadius={"4px"}
                        >
                          <Box
                            sx={{
                              display: "flex",
                              flexDirection: "column",
                              justifyContent: "flex-stat",
                              alignItems: "center",
                              gap: "5px",
                              bgcolor: "#6874dd",
                            }}
                          >
                            <Box>
                            <img src={logo} height={60} width={60}/>
                            </Box>
                          </Box>
                        </Box>
                        <Typography
                          fontSize={"14px"}
                          color="#676363"
                          textAlign={"center"}
                          fontWeight={"bold"}
                        >
                          Stocks-Group 1
                        </Typography>
                      </Box>
                    </Grid>
                  </Grid>
                </Box>

                <Box sx={{ marginTop: 2, marginBottom: 2 }}>
                  <Typography sx={{ fontSize: "14px", padding: "5px" }}>
                    {" "}
                    STATIC TEMPLATES
                  </Typography>
                  <Grid container spacing={1}>
                    <Grid item xs={6}>
                      <Box>
                        <Box
                          border={"1px solid #ddd"}
                          padding={"8px"}
                          borderRadius={"4px"}
                        >
                          <Box
                            sx={{
                              display: "flex",
                              flexDirection: "column",
                              justifyContent: "flex-stat",
                              alignItems: "center",
                              gap: "5px",
                              bgcolor: "#6874dd",
                            }}
                          >
                            <Box>
                            <img src={logo} height={60} width={60}/>
                            </Box>
                          </Box>
                        </Box>
                        <Typography
                          fontSize={"14px"}
                          color="#676363"
                          textAlign={"center"}
                          fontWeight={"bold"}
                        >
                          Stocks 1
                        </Typography>
                      </Box>
                    </Grid>
                    <Grid item xs={6}>
                      <Box>
                        <Box
                          border={"1px solid #ddd"}
                          padding={"8px"}
                          borderRadius={"4px"}
                        >
                          <Box
                            sx={{
                              display: "flex",
                              flexDirection: "column",
                              justifyContent: "flex-stat",
                              alignItems: "center",
                              gap: "5px",
                              bgcolor: "#6874dd",
                            }}
                          >
                            <Box>
                            <img src={logo} height={60} width={60}/>
                            </Box>
                          </Box>
                        </Box>
                        <Typography
                          fontSize={"14px"}
                          color="#676363"
                          textAlign={"center"}
                          fontWeight={"bold"}
                        >
                          Stocks 2
                        </Typography>
                      </Box>
                    </Grid>
                  </Grid>
                </Box>
              </Box>
            </Box>
            <Box className={activeDiv === "weather" ? "show" : "hide"}>
              <Box
                sx={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  padding: "5px",
                  bgcolor: "#6874dd",
                }}
              >
                <Typography color="#fff">Weather</Typography>{" "}
                <IconButton onClick={handleAllFunctionClose}>
                  <ArrowBackIcon sx={{ color: "#fff" }} />
                </IconButton>
              </Box>
              <Box padding={"0px 10px 50px 10px"}>
                <Box>
                  <Typography
                    sx={{
                      fontSize: "14px",
                      padding: "5px",
                      fontWeight: "bold",
                    }}
                  >
                    {" "}
                    Search
                  </Typography>
                  <Box className="input_box">
                    <input type="text" />
                  </Box>
                </Box>
                <Box marginTop={2}>
                  <Typography sx={{ fontSize: "14px", padding: "5px" }}>
                    {" "}
                    ELEMENTS
                  </Typography>
                  <Box>
                    <Box sx={{ flexGrow: 1 }}>
                      <Grid container spacing={1}>
                        <Grid item xs={6}>
                          <Box
                            border={"1px solid #ddd"}
                            padding={"15px 8px"}
                            borderRadius={"4px"}
                          >
                            <Box
                              sx={{
                                display: "flex",
                                justifyContent: "flex-stat",
                                alignItems: "center",
                                gap: "5px",
                              }}
                            >
                              <FontDownloadIcon
                                fontSize="18px"
                                sx={{ color: "#676363" }}
                              />{" "}
                              <Typography
                                fontSize={"14px"}
                                sx={{ color: "#676363" }}
                              >
                                Summary
                              </Typography>
                            </Box>
                          </Box>
                        </Grid>
                        <Grid item xs={6}>
                          <Box
                            border={"1px solid #ddd"}
                            padding={"15px 8px"}
                            borderRadius={"4px"}
                          >
                            <Box
                              sx={{
                                display: "flex",
                                justifyContent: "flex-stat",
                                alignItems: "center",
                                gap: "5px",
                              }}
                            >
                              <RoomIcon
                                fontSize="18px"
                                sx={{ color: "#676363" }}
                              />{" "}
                              <Typography
                                fontSize={"14px"}
                                sx={{ color: "#676363" }}
                              >
                                Location
                              </Typography>
                            </Box>
                          </Box>
                        </Grid>
                        <Grid item xs={6}>
                          <Box
                            border={"1px solid #ddd"}
                            padding={"15px 8px"}
                            borderRadius={"4px"}
                          >
                            <Box
                              sx={{
                                display: "flex",
                                justifyContent: "flex-stat",
                                alignItems: "center",
                                gap: "5px",
                              }}
                            >
                              <DeviceThermostatIcon
                                fontSize="18px"
                                sx={{ color: "#676363" }}
                              />
                              <Typography
                                fontSize={"14px"}
                                sx={{ color: "#676363" }}
                              >
                                Temparature
                              </Typography>
                            </Box>
                          </Box>
                        </Grid>
                        <Grid item xs={6}>
                          <Box
                            border={"1px solid #ddd"}
                            padding={"15px 8px"}
                            borderRadius={"4px"}
                          >
                            <Box
                              sx={{
                                display: "flex",
                                justifyContent: "flex-stat",
                                alignItems: "center",
                                gap: "5px",
                              }}
                            >
                              <DeviceThermostatIcon
                                fontSize="18px"
                                sx={{ color: "#676363" }}
                              />{" "}
                              <Typography
                                fontSize={"14px"}
                                sx={{ color: "#676363" }}
                              >
                                Min <br /> Temparature
                              </Typography>
                            </Box>
                          </Box>
                        </Grid>

                        <Grid item xs={6}>
                          <Box
                            border={"1px solid #ddd"}
                            padding={"15px 8px"}
                            borderRadius={"4px"}
                          >
                            <Box
                              sx={{
                                display: "flex",
                                justifyContent: "flex-stat",
                                alignItems: "center",
                                gap: "5px",
                              }}
                            >
                              <DeviceThermostatIcon
                                fontSize="18px"
                                sx={{ color: "#676363" }}
                              />{" "}
                              <Typography
                                fontSize={"14px"}
                                sx={{ color: "#676363" }}
                              >
                                Max <br /> Temparature
                              </Typography>
                            </Box>
                          </Box>
                        </Grid>
                        <Grid item xs={6}>
                          <Box
                            border={"1px solid #ddd"}
                            padding={"15px 8px"}
                            borderRadius={"4px"}
                          >
                            <Box
                              sx={{
                                display: "flex",
                                justifyContent: "flex-stat",
                                alignItems: "center",
                                gap: "5px",
                              }}
                            >
                              <PercentIcon
                                fontSize="18px"
                                sx={{ color: "#676363" }}
                              />{" "}
                              <Typography
                                fontSize={"14px"}
                                sx={{ color: "#676363" }}
                              >
                                Humidity <br /> Percent
                              </Typography>
                            </Box>
                          </Box>
                        </Grid>
                        <Grid item xs={6}>
                          <Box
                            border={"1px solid #ddd"}
                            padding={"15px 8px"}
                            borderRadius={"4px"}
                          >
                            <Box
                              sx={{
                                display: "flex",
                                justifyContent: "flex-stat",
                                alignItems: "center",
                                gap: "5px",
                              }}
                            >
                              <StarsIcon
                                fontSize="18px"
                                sx={{ color: "#676363" }}
                              />{" "}
                              <Typography
                                fontSize={"14px"}
                                sx={{ color: "#676363" }}
                              >
                                Icon
                              </Typography>
                            </Box>
                          </Box>
                        </Grid>
                        <Grid item xs={6}>
                          <Box
                            border={"1px solid #ddd"}
                            padding={"15px 8px"}
                            borderRadius={"4px"}
                          >
                            <Box
                              sx={{
                                display: "flex",
                                justifyContent: "flex-stat",
                                alignItems: "center",
                                gap: "5px",
                              }}
                            >
                              <NearMeIcon
                                fontSize="18px"
                                sx={{ color: "#676363" }}
                              />{" "}
                              <Typography
                                fontSize={"14px"}
                                sx={{ color: "#676363" }}
                              >
                                Wind <br /> Direction
                              </Typography>
                            </Box>
                          </Box>
                        </Grid>
                        <Grid item xs={6}>
                          <Box
                            border={"1px solid #ddd"}
                            padding={"15px 8px"}
                            borderRadius={"4px"}
                          >
                            <Box
                              sx={{
                                display: "flex",
                                justifyContent: "flex-stat",
                                alignItems: "center",
                                gap: "5px",
                              }}
                            >
                              <SpeedIcon
                                fontSize="18px"
                                sx={{ color: "#676363" }}
                              />{" "}
                              <Typography
                                fontSize={"14px"}
                                sx={{ color: "#676363" }}
                              >
                                Wind Speed
                              </Typography>
                            </Box>
                          </Box>
                        </Grid>
                        <Grid item xs={6}>
                          <Box
                            border={"1px solid #ddd"}
                            padding={"15px 8px"}
                            borderRadius={"4px"}
                          >
                            <Box
                              sx={{
                                display: "flex",
                                justifyContent: "flex-stat",
                                alignItems: "center",
                                gap: "5px",
                              }}
                            >
                              <AirIcon
                                fontSize="18px"
                                sx={{ color: "#676363" }}
                              />{" "}
                              <Typography
                                fontSize={"14px"}
                                sx={{ color: "#676363" }}
                              >
                                Wind Speed <br /> Unit
                              </Typography>
                            </Box>
                          </Box>
                        </Grid>
                        <Grid item xs={6}>
                          <Box
                            border={"1px solid #ddd"}
                            padding={"15px 8px"}
                            borderRadius={"4px"}
                          >
                            <Box
                              sx={{
                                display: "flex",
                                justifyContent: "flex-stat",
                                alignItems: "center",
                                gap: "5px",
                              }}
                            >
                              <FontDownloadIcon
                                fontSize="18px"
                                sx={{ color: "#676363" }}
                              />{" "}
                              <Typography
                                fontSize={"14px"}
                                sx={{ color: "#676363" }}
                              >
                                Attribute
                              </Typography>
                            </Box>
                          </Box>
                        </Grid>
                        <Grid item xs={6}>
                          <Box
                            border={"1px solid #ddd"}
                            padding={"15px 8px"}
                            borderRadius={"4px"}
                          >
                            <Box
                              sx={{
                                display: "flex",
                                justifyContent: "flex-stat",
                                alignItems: "center",
                                gap: "5px",
                              }}
                            >
                              <ImageIcon
                                fontSize="18px"
                                sx={{ color: "#676363" }}
                              />{" "}
                              <Typography
                                fontSize={"14px"}
                                sx={{ color: "#676363" }}
                              >
                                Image
                              </Typography>
                            </Box>
                          </Box>
                        </Grid>
                        <Grid item xs={6}>
                          <Box
                            border={"1px solid #ddd"}
                            padding={"15px 8px"}
                            borderRadius={"4px"}
                          >
                            <Box
                              sx={{
                                display: "flex",
                                justifyContent: "flex-stat",
                                alignItems: "center",
                                gap: "5px",
                              }}
                            >
                              <CalendarMonthIcon
                                fontSize="18px"
                                sx={{ color: "#676363" }}
                              />{" "}
                              <Typography
                                fontSize={"14px"}
                                sx={{ color: "#676363" }}
                              >
                                Date
                              </Typography>
                            </Box>
                          </Box>
                        </Grid>
                      </Grid>
                    </Box>
                  </Box>
                </Box>

                <Box sx={{ marginTop: 2, marginBottom: 2 }}>
                  <Typography sx={{ fontSize: "14px", padding: "5px" }}>
                    {" "}
                    STENCILS
                  </Typography>
                  <Grid container spacing={1}>
                    <Grid item xs={6}>
                      <Box>
                        <Box
                          border={"1px solid #ddd"}
                          padding={"8px"}
                          borderRadius={"4px"}
                        >
                          <Box
                            sx={{
                              display: "flex",
                              flexDirection: "column",
                              justifyContent: "flex-stat",
                              alignItems: "center",
                              gap: "5px",
                              bgcolor: "#6874dd",
                            }}
                          >
                            <Box>
                            <img src={logo} height={60} width={60}/>
                            </Box>
                          </Box>
                        </Box>
                        <Typography
                          fontSize={"14px"}
                          color="#676363"
                          textAlign={"center"}
                          fontWeight={"bold"}
                        >
                          Forecast 1
                        </Typography>
                      </Box>
                    </Grid>
                    <Grid item xs={6}>
                      <Box>
                        <Box
                          border={"1px solid #ddd"}
                          padding={"8px"}
                          borderRadius={"4px"}
                        >
                          <Box
                            sx={{
                              display: "flex",
                              flexDirection: "column",
                              justifyContent: "flex-stat",
                              alignItems: "center",
                              gap: "5px",
                              bgcolor: "#6874dd",
                            }}
                          >
                            <Box>
                            <img src={logo} height={60} width={60}/>
                            </Box>
                          </Box>
                        </Box>
                        <Typography
                          fontSize={"14px"}
                          color="#676363"
                          textAlign={"center"}
                          fontWeight={"bold"}
                        >
                          Daily 1
                        </Typography>
                      </Box>
                    </Grid>
                    <Grid item xs={6}>
                      <Box>
                        <Box
                          border={"1px solid #ddd"}
                          padding={"8px"}
                          borderRadius={"4px"}
                        >
                          <Box
                            sx={{
                              display: "flex",
                              flexDirection: "column",
                              justifyContent: "flex-stat",
                              alignItems: "center",
                              gap: "5px",
                              bgcolor: "#6874dd",
                            }}
                          >
                            <Box>
                            <img src={logo} height={60} width={60}/>
                            </Box>
                          </Box>
                        </Box>
                        <Typography
                          fontSize={"14px"}
                          color="#676363"
                          textAlign={"center"}
                          fontWeight={"bold"}
                        >
                          Daily 2
                        </Typography>
                      </Box>
                    </Grid>
                    <Grid item xs={6}>
                      <Box>
                        <Box
                          border={"1px solid #ddd"}
                          padding={"8px"}
                          borderRadius={"4px"}
                        >
                          <Box
                            sx={{
                              display: "flex",
                              flexDirection: "column",
                              justifyContent: "flex-stat",
                              alignItems: "center",
                              gap: "5px",
                              bgcolor: "#6874dd",
                            }}
                          >
                            <Box>
                            <img src={logo} height={60} width={60}/>
                            </Box>
                          </Box>
                        </Box>
                        <Typography
                          fontSize={"14px"}
                          color="#676363"
                          textAlign={"center"}
                          fontWeight={"bold"}
                        >
                          Daily 3
                        </Typography>
                      </Box>
                    </Grid>
                    <Grid item xs={6}>
                      <Box>
                        <Box
                          border={"1px solid #ddd"}
                          padding={"8px"}
                          borderRadius={"4px"}
                        >
                          <Box
                            sx={{
                              display: "flex",
                              flexDirection: "column",
                              justifyContent: "flex-stat",
                              alignItems: "center",
                              gap: "5px",
                              bgcolor: "#6874dd",
                            }}
                          >
                            <Box>
                            <img src={logo} height={60} width={60}/>
                            </Box>
                          </Box>
                        </Box>
                        <Typography
                          fontSize={"14px"}
                          color="#676363"
                          textAlign={"center"}
                          fontWeight={"bold"}
                        >
                          Daily 4
                        </Typography>
                      </Box>
                    </Grid>
                  </Grid>
                </Box>

                <Box sx={{ marginTop: 2, marginBottom: 2 }}>
                  <Typography sx={{ fontSize: "14px", padding: "5px" }}>
                    {" "}
                    STATIC TEMPLATES
                  </Typography>
                  <Grid container spacing={1}>
                    <Grid item xs={6}>
                      <Box>
                        <Box
                          border={"1px solid #ddd"}
                          padding={"8px"}
                          borderRadius={"4px"}
                        >
                          <Box
                            sx={{
                              display: "flex",
                              flexDirection: "column",
                              justifyContent: "flex-stat",
                              alignItems: "center",
                              gap: "5px",
                              bgcolor: "#6874dd",
                            }}
                          >
                            <Box>
                            <img src={logo} height={60} width={60}/>
                            </Box>
                          </Box>
                        </Box>
                        <Typography
                          fontSize={"14px"}
                          color="#676363"
                          textAlign={"center"}
                          fontWeight={"bold"}
                        >
                          LandScape-
                          <br />
                          Current day,
                          <br />4 day forecast
                        </Typography>
                      </Box>
                    </Grid>
                    <Grid item xs={6}>
                      <Box>
                        <Box
                          border={"1px solid #ddd"}
                          padding={"8px"}
                          borderRadius={"4px"}
                        >
                          <Box
                            sx={{
                              display: "flex",
                              flexDirection: "column",
                              justifyContent: "flex-stat",
                              alignItems: "center",
                              gap: "5px",
                              bgcolor: "#6874dd",
                            }}
                          >
                            <Box>
                            <img src={logo} height={60} width={60}/>
                            </Box>
                          </Box>
                        </Box>
                        <Typography
                          fontSize={"14px"}
                          color="#676363"
                          textAlign={"center"}
                          fontWeight={"bold"}
                        >
                          LandScape-
                          <br />
                          Current day,
                          <br />
                          Summary
                        </Typography>
                      </Box>
                    </Grid>
                    <Grid item xs={6}>
                      <Box>
                        <Box
                          border={"1px solid #ddd"}
                          padding={"8px"}
                          borderRadius={"4px"}
                        >
                          <Box
                            sx={{
                              display: "flex",
                              flexDirection: "column",
                              justifyContent: "flex-stat",
                              alignItems: "center",
                              gap: "5px",
                              bgcolor: "#6874dd",
                            }}
                          >
                            <Box>
                            <img src={logo} height={60} width={60}/>
                            </Box>
                          </Box>
                        </Box>
                        <Typography
                          fontSize={"14px"}
                          color="#676363"
                          textAlign={"center"}
                          fontWeight={"bold"}
                        >
                          LandScape-
                          <br />
                          Current day
                        </Typography>
                      </Box>
                    </Grid>
                    <Grid item xs={6}>
                      <Box>
                        <Box
                          border={"1px solid #ddd"}
                          padding={"8px"}
                          borderRadius={"4px"}
                        >
                          <Box
                            sx={{
                              display: "flex",
                              flexDirection: "column",
                              justifyContent: "flex-stat",
                              alignItems: "center",
                              gap: "5px",
                              bgcolor: "#6874dd",
                            }}
                          >
                            <Box>
                            <img src={logo} height={60} width={60}/>
                            </Box>
                          </Box>
                        </Box>
                        <Typography
                          fontSize={"14px"}
                          color="#676363"
                          textAlign={"center"}
                          fontWeight={"bold"}
                        >
                          LandScape-
                          <br />
                          Current day,
                          <br />
                          detailed,4
                          <br />
                          day forecast
                        </Typography>
                      </Box>
                    </Grid>
                    <Grid item xs={6}>
                      <Box>
                        <Box
                          border={"1px solid #ddd"}
                          padding={"8px"}
                          borderRadius={"4px"}
                        >
                          <Box
                            sx={{
                              display: "flex",
                              flexDirection: "column",
                              justifyContent: "flex-stat",
                              alignItems: "center",
                              gap: "5px",
                              bgcolor: "#6874dd",
                            }}
                          >
                            <Box>
                            <img src={logo} height={60} width={60}/>
                            </Box>
                          </Box>
                        </Box>
                        <Typography
                          fontSize={"14px"}
                          color="#676363"
                          textAlign={"center"}
                          fontWeight={"bold"}
                        >
                          Portrait-
                          <br />
                          Current day,
                          <br />2 day forecast
                        </Typography>
                      </Box>
                    </Grid>
                    <Grid item xs={6}>
                      <Box>
                        <Box
                          border={"1px solid #ddd"}
                          padding={"8px"}
                          borderRadius={"4px"}
                        >
                          <Box
                            sx={{
                              display: "flex",
                              flexDirection: "column",
                              justifyContent: "flex-stat",
                              alignItems: "center",
                              gap: "5px",
                              bgcolor: "#6874dd",
                            }}
                          >
                            <Box>
                            <img src={logo} height={60} width={60}/>
                            </Box>
                          </Box>
                        </Box>
                        <Typography
                          fontSize={"14px"}
                          color="#676363"
                          textAlign={"center"}
                          fontWeight={"bold"}
                        >
                          LandScape-
                          <br />
                          Current day table,
                          <br />4 day forecast
                        </Typography>
                      </Box>
                    </Grid>
                    <Grid item xs={6}>
                      <Box>
                        <Box
                          border={"1px solid #ddd"}
                          padding={"8px"}
                          borderRadius={"4px"}
                        >
                          <Box
                            sx={{
                              display: "flex",
                              flexDirection: "column",
                              justifyContent: "flex-stat",
                              alignItems: "center",
                              gap: "5px",
                              bgcolor: "#6874dd",
                            }}
                          >
                            <Box>
                            <img src={logo} height={60} width={60}/>
                            </Box>
                          </Box>
                        </Box>
                        <Typography
                          fontSize={"14px"}
                          color="#676363"
                          textAlign={"center"}
                          fontWeight={"bold"}
                        >
                          Square-
                          <br />
                          Current day
                        </Typography>
                      </Box>
                    </Grid>
                    <Grid item xs={6}>
                      <Box>
                        <Box
                          border={"1px solid #ddd"}
                          padding={"8px"}
                          borderRadius={"4px"}
                        >
                          <Box
                            sx={{
                              display: "flex",
                              flexDirection: "column",
                              justifyContent: "flex-stat",
                              alignItems: "center",
                              gap: "5px",
                              bgcolor: "#6874dd",
                            }}
                          >
                            <Box>
                            <img src={logo} height={60} width={60}/>
                            </Box>
                          </Box>
                        </Box>
                        <Typography
                          fontSize={"14px"}
                          color="#676363"
                          textAlign={"center"}
                          fontWeight={"bold"}
                        >
                          LandScape-
                          <br />
                          Current day,
                          <br />4 day forecast
                        </Typography>
                      </Box>
                    </Grid>
                    <Grid item xs={6}>
                      <Box>
                        <Box
                          border={"1px solid #ddd"}
                          padding={"8px"}
                          borderRadius={"4px"}
                        >
                          <Box
                            sx={{
                              display: "flex",
                              flexDirection: "column",
                              justifyContent: "flex-stat",
                              alignItems: "center",
                              gap: "5px",
                              bgcolor: "#6874dd",
                            }}
                          >
                            <Box>
                            <img src={logo} height={60} width={60}/>
                            </Box>
                          </Box>
                        </Box>
                        <Typography
                          fontSize={"14px"}
                          color="#676363"
                          textAlign={"center"}
                          fontWeight={"bold"}
                        >
                          Portrait-
                          <br />
                          Current day,detailed,
                          <br />4 day forecast
                        </Typography>
                      </Box>
                    </Grid>
                    <Grid item xs={6}>
                      <Box>
                        <Box
                          border={"1px solid #ddd"}
                          padding={"8px"}
                          borderRadius={"4px"}
                        >
                          <Box
                            sx={{
                              display: "flex",
                              flexDirection: "column",
                              justifyContent: "flex-stat",
                              alignItems: "center",
                              gap: "5px",
                              bgcolor: "#6874dd",
                            }}
                          >
                            <Box>
                            <img src={logo} height={60} width={60}/>
                            </Box>
                          </Box>
                        </Box>
                        <Typography
                          fontSize={"14px"}
                          color="#676363"
                          textAlign={"center"}
                          fontWeight={"bold"}
                        >
                          LandScape-Current
                          <br /> day detailed
                          <br />4 day forecast
                        </Typography>
                      </Box>
                    </Grid>
                    <Grid item xs={6}>
                      <Box>
                        <Box
                          border={"1px solid #ddd"}
                          padding={"8px"}
                          borderRadius={"4px"}
                        >
                          <Box
                            sx={{
                              display: "flex",
                              flexDirection: "column",
                              justifyContent: "flex-stat",
                              alignItems: "center",
                              gap: "5px",
                              bgcolor: "#6874dd",
                            }}
                          >
                            <Box>
                            <img src={logo} height={60} width={60}/>
                            </Box>
                          </Box>
                        </Box>
                        <Typography
                          fontSize={"14px"}
                          color="#676363"
                          textAlign={"center"}
                          fontWeight={"bold"}
                        >
                          Portrait-
                          <br />
                          Current day,
                          <br />3 day forecast
                        </Typography>
                      </Box>
                    </Grid>
                    <Grid item xs={6}>
                      <Box>
                        <Box
                          border={"1px solid #ddd"}
                          padding={"8px"}
                          borderRadius={"4px"}
                        >
                          <Box
                            sx={{
                              display: "flex",
                              flexDirection: "column",
                              justifyContent: "flex-stat",
                              alignItems: "center",
                              gap: "5px",
                              bgcolor: "#6874dd",
                            }}
                          >
                            <Box>
                            <img src={logo} height={60} width={60}/>
                            </Box>
                          </Box>
                        </Box>
                        <Typography
                          fontSize={"14px"}
                          color="#676363"
                          textAlign={"center"}
                          fontWeight={"bold"}
                        >
                          LandScape-Current
                          <br /> day detailed
                          <br />3 day forecast
                        </Typography>
                      </Box>
                    </Grid>
                    <Grid item xs={6}>
                      <Box>
                        <Box
                          border={"1px solid #ddd"}
                          padding={"8px"}
                          borderRadius={"4px"}
                        >
                          <Box
                            sx={{
                              display: "flex",
                              flexDirection: "column",
                              justifyContent: "flex-stat",
                              alignItems: "center",
                              gap: "5px",
                              bgcolor: "#6874dd",
                            }}
                          >
                            <Box>
                            <img src={logo} height={60} width={60}/>
                            </Box>
                          </Box>
                        </Box>
                        <Typography
                          fontSize={"14px"}
                          color="#676363"
                          textAlign={"center"}
                          fontWeight={"bold"}
                        >
                          LandScape-Current
                          <br /> day detailed
                          <br />4 day forecast
                        </Typography>
                      </Box>
                    </Grid>
                    <Grid item xs={6}>
                      <Box>
                        <Box
                          border={"1px solid #ddd"}
                          padding={"8px"}
                          borderRadius={"4px"}
                        >
                          <Box
                            sx={{
                              display: "flex",
                              flexDirection: "column",
                              justifyContent: "flex-stat",
                              alignItems: "center",
                              gap: "5px",
                              bgcolor: "#6874dd",
                            }}
                          >
                            <Box>
                            <img src={logo} height={60} width={60}/>
                            </Box>
                          </Box>
                        </Box>
                        <Typography
                          fontSize={"14px"}
                          color="#676363"
                          textAlign={"center"}
                          fontWeight={"bold"}
                        >
                          Portrait-
                          <br />
                          Current day details,
                          <br />4 day forecast
                        </Typography>
                      </Box>
                    </Grid>
                    <Grid item xs={6}>
                      <Box>
                        <Box
                          border={"1px solid #ddd"}
                          padding={"8px"}
                          borderRadius={"4px"}
                        >
                          <Box
                            sx={{
                              display: "flex",
                              flexDirection: "column",
                              justifyContent: "flex-stat",
                              alignItems: "center",
                              gap: "5px",
                              bgcolor: "#6874dd",
                            }}
                          >
                            <Box>
                            <img src={logo} height={60} width={60}/>
                            </Box>
                          </Box>
                        </Box>
                        <Typography
                          fontSize={"14px"}
                          color="#676363"
                          textAlign={"center"}
                          fontWeight={"bold"}
                        >
                          Square-Forecast
                          <br />
                          squared with <br />
                          background
                        </Typography>
                      </Box>
                    </Grid>
                    <Grid item xs={6}>
                      <Box>
                        <Box
                          border={"1px solid #ddd"}
                          padding={"8px"}
                          borderRadius={"4px"}
                        >
                          <Box
                            sx={{
                              display: "flex",
                              flexDirection: "column",
                              justifyContent: "flex-stat",
                              alignItems: "center",
                              gap: "5px",
                              bgcolor: "#6874dd",
                            }}
                          >
                            <Box>
                            <img src={logo} height={60} width={60}/>
                            </Box>
                          </Box>
                        </Box>
                        <Typography
                          fontSize={"14px"}
                          color="#676363"
                          textAlign={"center"}
                          fontWeight={"bold"}
                        >
                          Square-detailed
                          <br />
                          weather
                        </Typography>
                      </Box>
                    </Grid>
                    <Grid item xs={6}>
                      <Box>
                        <Box
                          border={"1px solid #ddd"}
                          padding={"8px"}
                          borderRadius={"4px"}
                        >
                          <Box
                            sx={{
                              display: "flex",
                              flexDirection: "column",
                              justifyContent: "flex-stat",
                              alignItems: "center",
                              gap: "5px",
                              bgcolor: "#6874dd",
                            }}
                          >
                            <Box>
                            <img src={logo} height={60} width={60}/>
                            </Box>
                          </Box>
                        </Box>
                        <Typography
                          fontSize={"14px"}
                          color="#676363"
                          textAlign={"center"}
                          fontWeight={"bold"}
                        >
                          Scale-Weather
                          <br />
                          background only
                        </Typography>
                      </Box>
                    </Grid>
                    <Grid item xs={6}>
                      <Box>
                        <Box
                          border={"1px solid #ddd"}
                          padding={"8px"}
                          borderRadius={"4px"}
                        >
                          <Box
                            sx={{
                              display: "flex",
                              flexDirection: "column",
                              justifyContent: "flex-stat",
                              alignItems: "center",
                              gap: "5px",
                              bgcolor: "#6874dd",
                            }}
                          >
                            <Box>
                            <img src={logo} height={60} width={60}/>
                            </Box>
                          </Box>
                        </Box>
                        <Typography
                          fontSize={"14px"}
                          color="#676363"
                          textAlign={"center"}
                          fontWeight={"bold"}
                        >
                          LandScape-
                          <br />
                          weather fullscreen
                        </Typography>
                      </Box>
                    </Grid>
                  </Grid>
                </Box>
              </Box>
            </Box>
          </Box>
        ) : (
          <Box>
            <Box>
              <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
                <IconButton onClick={handleDrawerClose}>
                  <CloseIcon fontSize="30px" />
                </IconButton>
              </Box>
              <Typography
                sx={{ fontSize: "14px", padding: "5px", fontWeight: "bold" }}
              >
                {" "}
                Search
              </Typography>
              <Box className="input_box">
                <input type="text" />
              </Box>
            </Box>
            <Box className="drawer_item_description">
              <Box marginTop={2}>
                <Typography sx={{ fontSize: "14px", padding: "5px" }}>
                  {" "}
                  WIDGETS
                </Typography>
                <Box>
                  <Box sx={{ flexGrow: 1 }}>
                    <Grid container spacing={1}>
                      <Grid item xs={6}>
                        <Box
                      
                          border={"1px solid #ddd"}
                          padding={"15px 8px"}
                          borderRadius={"4px"}
                          onClick={clockFunction}
                        >
                          <Box
                            sx={{
                              display: "flex",
                              justifyContent: "flex-stat",
                              alignItems: "center",
                              gap: "5px",
                              cursor:'pointer'
                            }}
                          >
                            <AccessTimeIcon
                              fontSize="18px"
                              sx={{ color: "#676363" }}
                            />{" "}
                            <Typography
                              fontSize={"14px"}
                              sx={{ color: "#676363" }}
                            >
                              Clock
                            </Typography>
                          </Box>
                        </Box>
                      </Grid>
                      <Grid item xs={6}>
                        <Box
                          border={"1px solid #ddd"}
                          padding={"15px 8px"}
                          borderRadius={"4px"}
                          onClick={countdownFunction}
                        >
                          <Box
                            sx={{
                              display: "flex",
                              justifyContent: "flex-stat",
                              alignItems: "center",
                              gap: "5px",
                               cursor:'pointer'
                            }}
                          >
                            <HourglassEmptyIcon
                              fontSize="18px"
                              sx={{ color: "#676363" }}
                            />{" "}
                            <Typography
                              fontSize={"14px"}
                              sx={{ color: "#676363" }}
                            >
                              Countdown
                            </Typography>
                          </Box>
                        </Box>
                      </Grid>
                      <Grid item xs={6}>
                        <Box
                          border={"1px solid #ddd"}
                          padding={"15px 8px"}
                          borderRadius={"4px"}
                        >
                          <Box
                            sx={{
                              display: "flex",
                              justifyContent: "flex-stat",
                              alignItems: "center",
                              gap: "5px",
                               cursor:'pointer'
                            }}
                          >
                            <CodeIcon
                              fontSize="18px"
                              sx={{ color: "#676363" }}
                            />
                            <Typography
                              fontSize={"14px"}
                              sx={{ color: "#676363" }}
                            >
                              Embedded
                            </Typography>
                          </Box>
                        </Box>
                      </Grid>
                      <Grid item xs={6}>
                        <Box
                          border={"1px solid #ddd"}
                          padding={"15px 8px"}
                          borderRadius={"4px"}
                        >
                          <Box
                            sx={{
                              display: "flex",
                              justifyContent: "flex-stat",
                              alignItems: "center",
                              gap: "5px",
                               cursor:'pointer'
                            }}
                          >
                            <VideocamIcon
                              fontSize="18px"
                              sx={{ color: "#676363" }}
                            />{" "}
                            <Typography
                              fontSize={"14px"}
                              sx={{ color: "#676363" }}
                            >
                              HLS
                            </Typography>
                          </Box>
                        </Box>
                      </Grid>

                      <Grid item xs={6}>
                        <Box
                          border={"1px solid #ddd"}
                          padding={"15px 8px"}
                          borderRadius={"4px"}
                        >
                          <Box
                            sx={{
                              display: "flex",
                              justifyContent: "flex-stat",
                              alignItems: "center",
                              gap: "5px",
                              cursor:'pointer'
                            }}
                          >
                            <VideoFileIcon
                              fontSize="18px"
                              sx={{ color: "#676363" }}
                            />{" "}
                            <Typography
                              fontSize={"14px"}
                              sx={{ color: "#676363" }}
                            >
                              Local Video
                            </Typography>
                          </Box>
                        </Box>
                      </Grid>
                      <Grid item xs={6}>
                        <Box
                          border={"1px solid #ddd"}
                          padding={"15px 8px"}
                          borderRadius={"4px"}
                        >
                          <Box
                            sx={{
                              display: "flex",
                              justifyContent: "flex-stat",
                              alignItems: "center",
                              gap: "5px",
                              cursor:'pointer'
                            }}
                          >
                            <VideocamIcon
                              fontSize="18px"
                              sx={{ color: "#676363" }}
                            />{" "}
                            <Typography
                              fontSize={"14px"}
                              sx={{ color: "#676363" }}
                            >
                              Video In
                            </Typography>
                          </Box>
                        </Box>
                      </Grid>
                      <Grid item xs={6}>
                        <Box
                          border={"1px solid #ddd"}
                          padding={"15px 8px"}
                          borderRadius={"4px"}
                        >
                          <Box
                            sx={{
                              display: "flex",
                              justifyContent: "flex-stat",
                              alignItems: "center",
                              gap: "5px",
                               cursor:'pointer'
                            }}
                          >
                            <LanIcon
                              fontSize="18px"
                              sx={{ color: "#676363" }}
                            />{" "}
                            <Typography
                              fontSize={"14px"}
                              sx={{ color: "#676363" }}
                            >
                              Webpage
                            </Typography>
                          </Box>
                        </Box>
                      </Grid>
                      <Grid item xs={6}>
                        <Box
                          border={"1px solid #ddd"}
                          padding={"15px 8px"}
                          borderRadius={"4px"}
                          onClick={worldclockFunction}
                        >
                          <Box
                            sx={{
                              display: "flex",
                              justifyContent: "flex-stat",
                              alignItems: "center",
                              gap: "5px",
                               cursor:'pointer'
                            }}
                          >
                            <PublicIcon
                              fontSize="18px"
                              sx={{ color: "#676363" }}
                            />{" "}
                            <Typography
                              fontSize={"14px"}
                              sx={{ color: "#676363" }}
                            >
                              World Clock
                            </Typography>
                          </Box>
                        </Box>
                      </Grid>
                    </Grid>
                  </Box>
                </Box>
              </Box>

              <Box marginTop={2}>
                <Typography sx={{ fontSize: "14px", padding: "5px" }}>
                  {" "}
                  DATA WIDGETS
                </Typography>
                <Box>
                  <Box sx={{ flexGrow: 1 }}>
                    <Grid container spacing={1}>
                      <Grid item xs={6}>
                        <Box
                          border={"1px solid #ddd"}
                          padding={"15px 8px"}
                          borderRadius={"4px"}
                          onClick={calender}
                        >
                          <Box
                            sx={{
                              display: "flex",
                              justifyContent: "flex-stat",
                              alignItems: "center",
                              gap: "5px",
                               cursor:'pointer'
                            }}
                          >
                            <CalendarMonthIcon
                              fontSize="18px"
                              sx={{ color: "#676363" }}
                            />{" "}
                            <Typography
                              fontSize={"14px"}
                              sx={{ color: "#676363" }}
                            >
                              Calender
                            </Typography>
                          </Box>
                        </Box>
                      </Grid>
                      <Grid item xs={6}>
                        <Box
                          border={"1px solid #ddd"}
                          padding={"15px 8px"}
                          borderRadius={"4px"}
                          onClick={currencies}
                        >
                          <Box
                            sx={{
                              display: "flex",
                              justifyContent: "flex-stat",
                              alignItems: "center",
                              gap: "5px",
                               cursor:'pointer'
                            }}
                          >
                            <PiChartLineUpBold color="#676363" />

                            <Typography
                              fontSize={"14px"}
                              sx={{ color: "#676363" }}
                            >
                              Currencies
                            </Typography>
                          </Box>
                        </Box>
                      </Grid>
                      <Grid item xs={6}>
                        <Box
                          border={"1px solid #ddd"}
                          padding={"15px 8px"}
                          borderRadius={"4px"}
                          onClick={dashboards}
                        >
                          <Box
                            sx={{
                              display: "flex",
                              justifyContent: "flex-stat",
                              alignItems: "center",
                              gap: "5px",
                               cursor:'pointer'
                            }}
                          >
                            <DashboardIcon
                              fontSize="18px"
                              sx={{ color: "#676363" }}
                            />
                            <Typography
                              fontSize={"14px"}
                              sx={{ color: "#676363" }}
                            >
                              Dashboards
                            </Typography>
                          </Box>
                        </Box>
                      </Grid>
                      <Grid item xs={6}>
                        <Box
                          border={"1px solid #ddd"}
                          padding={"15px 8px"}
                          borderRadius={"4px"}
                          onClick={dataset}
                        >
                          <Box
                            sx={{
                              display: "flex",
                              justifyContent: "flex-stat",
                              alignItems: "center",
                              gap: "5px",
                               cursor:'pointer'
                            }}
                          >
                            <DatasetIcon
                              fontSize="18px"
                              sx={{ color: "#676363" }}
                            />
                            <Typography
                              fontSize={"14px"}
                              sx={{ color: "#676363" }}
                            >
                              Data Set
                            </Typography>
                          </Box>
                        </Box>
                      </Grid>

                      <Grid item xs={6}>
                        <Box
                          border={"1px solid #ddd"}
                          padding={"15px 8px"}
                          borderRadius={"4px"}
                          onClick={mastodon}
                        >
                          <Box
                            sx={{
                              display: "flex",
                              justifyContent: "flex-stat",
                              alignItems: "center",
                              gap: "5px",
                               cursor:'pointer'
                            }}
                          >
                            <FaMastodon color="#676363" />
                            <Typography
                              fontSize={"14px"}
                              sx={{ color: "#676363" }}
                            >
                              Mastodon
                            </Typography>
                          </Box>
                        </Box>
                      </Grid>
                      <Grid item xs={6}>
                        <Box
                          border={"1px solid #ddd"}
                          padding={"5px 8px"}
                          borderRadius={"4px"}
                          onClick={menuboardCategory}
                        >
                          <Box
                            sx={{
                              display: "flex",
                              justifyContent: "flex-stat",
                              alignItems: "center",
                              gap: "5px",
                               cursor:'pointer'
                            }}
                          >
                            <AssignmentIcon
                              fontSize="18px"
                              sx={{ color: "#676363" }}
                            />
                            <Typography
                              fontSize={"14px"}
                              sx={{ color: "#676363" }}
                            >
                              Menu Board
                              <br /> Category
                            </Typography>
                          </Box>
                        </Box>
                      </Grid>
                      <Grid item xs={6}>
                        <Box
                          border={"1px solid #ddd"}
                          padding={"5px 8px"}
                          borderRadius={"4px"}
                          onClick={menuboardProduct}
                        >
                          <Box
                            sx={{
                              display: "flex",
                              justifyContent: "flex-stat",
                              alignItems: "center",
                              gap: "5px",
                               cursor:'pointer'
                            }}
                          >
                            <CoffeeIcon
                              fontSize="18px"
                              sx={{ color: "#676363" }}
                            />
                            <Typography
                              fontSize={"14px"}
                              sx={{ color: "#676363" }}
                            >
                              Menu Board
                              <br /> Product
                            </Typography>
                          </Box>
                        </Box>
                      </Grid>
                      <Grid item xs={6}>
                        <Box
                          border={"1px solid #ddd"}
                          padding={"15px 8px"}
                          borderRadius={"4px"}
                          onClick={notifications}
                        >
                          <Box
                            sx={{
                              display: "flex",
                              justifyContent: "flex-stat",
                              alignItems: "center",
                              gap: "5px",
                               cursor:'pointer'
                            }}
                          >
                            <NotificationsNoneIcon
                              fontSize="18px"
                              sx={{ color: "#676363" }}
                            />
                            <Typography
                              fontSize={"14px"}
                              sx={{ color: "#676363" }}
                            >
                              Notification
                            </Typography>
                          </Box>
                        </Box>
                      </Grid>

                      <Grid item xs={6}>
                        <Box
                          border={"1px solid #ddd"}
                          padding={"15px 8px"}
                          borderRadius={"4px"}
                          onClick={rssTicker}
                        >
                          <Box
                            sx={{
                              display: "flex",
                              justifyContent: "flex-stat",
                              alignItems: "center",
                              gap: "5px",
                               cursor:'pointer'
                            }}
                          >
                            <WifiIcon
                              fontSize="18px"
                              sx={{ color: "#676363" }}
                            />
                            <Typography
                              fontSize={"14px"}
                              sx={{ color: "#676363" }}
                            >
                              RSS Ticker
                            </Typography>
                          </Box>
                        </Box>
                      </Grid>
                      <Grid item xs={6}>
                        <Box
                          border={"1px solid #ddd"}
                          padding={"15px 8px"}
                          borderRadius={"4px"}
                          onClick={stocks}
                        >
                          <Box
                            sx={{
                              display: "flex",
                              justifyContent: "flex-stat",
                              alignItems: "center",
                              gap: "5px",
                               cursor:'pointer'
                            }}
                          >
                            <IoBarChartSharp color="#676363" />
                            <Typography
                              fontSize={"14px"}
                              sx={{ color: "#676363" }}
                            >
                              Stocks
                            </Typography>
                          </Box>
                        </Box>
                      </Grid>
                      <Grid item xs={6}>
                        <Box
                          border={"1px solid #ddd"}
                          padding={"15px 8px"}
                          borderRadius={"4px"}
                          onClick={weather}
                        >
                          <Box
                            sx={{
                              display: "flex",
                              justifyContent: "flex-stat",
                              alignItems: "center",
                              gap: "5px",
                               cursor:'pointer'
                            }}
                          >
                            <CloudIcon
                              fontSize="18px"
                              sx={{ color: "#676363" }}
                            />
                            <Typography
                              fontSize={"14px"}
                              sx={{ color: "#676363" }}
                            >
                              Weather
                            </Typography>
                          </Box>
                        </Box>
                      </Grid>
                    </Grid>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        )}
      </Box>
      <Box
        className={`FontDownloadIcon_box ${
          activeContent === "fontDownload" ? "show" : "hide"
        }`}
      >
        <Box>
          <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
            <IconButton onClick={handleDrawerClose}>
              <CloseIcon fontSize="30px" />
            </IconButton>
          </Box>
          <Typography
            sx={{ fontSize: "14px", padding: "5px", fontWeight: "bold" }}
          >
            {" "}
            Search
          </Typography>
          <Box className="input_box">
            <input type="text" />
          </Box>
        </Box>
        <Box className="drawer_item_description">
          <Box marginTop={2}>
            <Typography sx={{ fontSize: "14px", padding: "5px" }}>
              {" "}
              ELEMENTS
            </Typography>
            <Box>
              <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={1}>
                  <Grid item xs={6}>
                    <Box
                    // ref={dragTextRef} sx={{ opacity: isDraggingText ? 0.5 : 1 }}
                    onClick={()=>add_text('text','title')}
                      border={"1px solid #ddd"}
                      padding={"8px"}
                      borderRadius={"4px"}
                    >
                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "flex-stat",
                          alignItems: "center",
                          gap: "5px",
                        }}
                      >
                        <RxText size="40px" />{" "}
                        <Typography fontSize={"14px"} sx={{ color: "#676363" }}>
                          Text
                        </Typography>
                      </Box>
                    </Box>
                  </Grid>
                  <Grid item xs={6}>
                    <Box
                     onClick={()=>add_DateTime('datetime','date','time')}
                      border={"1px solid #ddd"}
                      padding={"8px"}
                      borderRadius={"4px"}
                    >
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "flex-stat",
                          flexDirection: "column",
                          alignItems: "center",
                          gap: "5px",
                        }}
                      >
                        <TbCalendarTime size="40px" />{" "}
                        <Typography fontSize={"14px"} sx={{ color: "#676363" }}>
                          Date/Time
                        </Typography>
                      </Box>
                    </Box>
                  </Grid>
                  <Grid item xs={6}>
                    <Box
                     onClick={()=>createShape('shape','line')}
                      border={"1px solid #ddd"}
                      padding={"8px"}
                      borderRadius={"4px"}
                    >
                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "flex-stat",
                          alignItems: "center",
                          gap: "5px",
                        }}
                      >
                        <TfiLayoutLineSolid size="50px" />{" "}
                        <Typography fontSize={"14px"} sx={{ color: "#676363" }}>
                          Line
                        </Typography>
                      </Box>
                    </Box>
                  </Grid>
                  <Grid item xs={6}>
                    <Box
                    onClick={()=>createShape('shape','rectangle')}
                      border={"1px solid #ddd"}
                      padding={"8px"}
                      borderRadius={"4px"}
                    >
                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "flex-stat",
                          alignItems: "center",
                          gap: "5px",
                        }}
                      >
                        <MdRectangle size="50px" />{" "}
                        <Typography fontSize={"14px"} sx={{ color: "#676363" }}>
                          Rectangle
                        </Typography>
                      </Box>
                    </Box>
                  </Grid>

                  <Grid item xs={6}>
                    <Box
                     onClick={()=>createShape('shape','circle')}
                      border={"1px solid #ddd"}
                      padding={"8px"}
                      borderRadius={"4px"}
                    >
                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "flex-stat",
                          alignItems: "center",
                          gap: "5px",
                        }}
                      >
                        <FaCircle size="50px" />{" "}
                        <Typography fontSize={"14px"} sx={{ color: "#676363" }}>
                          Circle
                        </Typography>
                      </Box>
                    </Box>
                  </Grid>
                  <Grid item xs={6}>
                    <Box
                    onClick={()=>createShape('shape','ellipse')}
                      border={"1px solid #ddd"}
                      padding={"8px"}
                      borderRadius={"4px"}
                    >
                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "flex-stat",
                          alignItems: "center",
                          gap: "5px",
                        }}
                      >
                        <Box
                          sx={{
                            bgcolor: "#212121",
                            width: "60px",
                            height: "40px",
                            borderRadius: "50%",
                          }}
                        />{" "}
                        <Typography fontSize={"14px"} sx={{ color: "#676363" }}>
                          Ellipse
                        </Typography>
                      </Box>
                    </Box>
                  </Grid>
                  <Grid item xs={6}>
                    <Box
                     onClick={()=>createShape('shape','triangle')}
                      border={"1px solid #ddd"}
                      padding={"8px"}
                      borderRadius={"4px"}
                    >
                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "flex-stat",
                          alignItems: "center",
                          gap: "5px",
                        }}
                      >
                        <IoTriangle size="50px" />{" "}
                        <Typography fontSize={"14px"} sx={{ color: "#676363" }}>
                          Triangle
                        </Typography>
                      </Box>
                    </Box>
                  </Grid>
                  <Grid item xs={6}>
                    <Box
                    onClick={()=>createShape('shape','pentagon')}
                      border={"1px solid #ddd"}
                      padding={"8px"}
                      borderRadius={"4px"}
                    >
                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "flex-stat",
                          alignItems: "center",
                          gap: "5px",
                        }}
                      >
                        <BsFillPentagonFill size="50px" />{" "}
                        <Typography fontSize={"14px"} sx={{ color: "#676363" }}>
                          Pentagon
                        </Typography>
                      </Box>
                    </Box>
                  </Grid>
                  <Grid item xs={6}>
                    <Box
                     onClick={()=>createShape('shape','hexagon')}
                      border={"1px solid #ddd"}
                      padding={"8px"}
                      borderRadius={"4px"}
                    >
                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "flex-stat",
                          alignItems: "center",
                          gap: "5px",
                        }}
                      >
                        <BsFillHexagonFill size="50px" />{" "}
                        <Typography fontSize={"14px"} sx={{ color: "#676363" }}>
                          Hexagon
                        </Typography>
                      </Box>
                    </Box>
                  </Grid>
                </Grid>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box
        className={`Image_box ${activeContent === "Image" ? "show" : "hide"}`}
      >
        <Box>
          <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
            <IconButton onClick={handleDrawerClose}>
              <CloseIcon fontSize="30px" />
            </IconButton>
          </Box>
        </Box>
        <Box className="drawer_item_description">
          <Box marginTop={2}>
            <Box>
              <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={1}>
                  <Grid item xs={6}>
                    <Box>
                      <Typography
                        sx={{
                          fontSize: "14px",
                          padding: "5px",
                          fontWeight: "bold",
                          color: "#676363",
                        }}
                      >
                        {" "}
                        Name
                      </Typography>
                      <Box className="input_box">
                        <input type="text" />
                      </Box>
                    </Box>
                  </Grid>
                  <Grid item xs={6}>
                    <Box>
                      <Box>
                        <Typography
                          sx={{
                            fontSize: "14px",
                            padding: "5px",
                            fontWeight: "bold",
                            color: "#676363",
                          }}
                        >
                          {" "}
                          Tag
                        </Typography>
                        <Box className="input_box">
                          <input type="text" />
                        </Box>
                      </Box>
                    </Box>
                  </Grid>
                  <Grid item xs={6}>
                    <Box>
                      <Typography
                        sx={{
                          fontSize: "14px",
                          padding: "5px",
                          fontWeight: "bold",
                          color: "#676363",
                        }}
                      >
                        {" "}
                        Folder
                      </Typography>
                      <Box className="input_box">
                        <input type="text" />
                      </Box>
                    </Box>
                  </Grid>
                  <Grid item xs={6}>
                    <Box>
                      <Typography
                        sx={{
                          fontSize: "14px",
                          padding: "5px",
                          fontWeight: "bold",
                          color: "#676363",
                        }}
                      >
                        {" "}
                        Owner
                      </Typography>
                      <Box className="input_box">
                        <input type="text" />
                      </Box>
                    </Box>
                  </Grid>

                  <Grid item xs={6}>
                    <Box>
                      <Typography
                        sx={{
                          fontSize: "14px",
                          padding: "5px",
                          fontWeight: "bold",
                          color: "#676363",
                        }}
                      >
                        {" "}
                        Orientation
                      </Typography>
                      <Box className="input_box">
                        <select>
                          <option value="All">All</option>
                          <option value="Landscape">Landscape</option>
                          <option value="Portrait">Portrait</option>
                        </select>
                      </Box>
                    </Box>
                  </Grid>
                  <Grid item xs={6}>
                    <Box>
                      <Typography
                        sx={{
                          fontSize: "14px",
                          padding: "5px",
                          fontWeight: "bold",
                          color: "#676363",
                        }}
                      >
                        {" "}
                        Sort By
                      </Typography>
                      <Box className="input_box">
                        <select>
                          <option value="MediaId"></option>

                          <option value="Name">Name</option>
                          <option value="Orientation">Orientation</option>
                          <option value="Width">Width</option>
                          <option value="Height">Height</option>
                        </select>
                      </Box>
                    </Box>
                  </Grid>
                </Grid>

                <Box
                  sx={{
                    marginTop: 2,
                    marginBottom: 2,
                    height: "70px",
                    overflowY: "auto",
                  }}
                >
                  <Grid container spacing={1}>
                    <Grid item xs={6}>
                      <Box
                        border={"1px solid #ddd"}
                        padding={"8px"}
                        borderRadius={"4px"}
                      >
                        <Box
                          sx={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "flex-stat",
                            alignItems: "center",
                            gap: "5px",
                          }}
                        >
                          <FileUploadIcon
                            size="50px"
                            sx={{ color: "#676363" }}
                          />{" "}
                          <Typography fontSize={"14px"} color="#676363">
                            Upload Image
                          </Typography>
                        </Box>
                      </Box>
                    </Grid>
                    <Grid item xs={6}>
                      <Box
                       onClick={()=> setImage('https://st5.depositphotos.com/23188010/77062/i/450/depositphotos_770624600-stock-photo-green-field-morning-render-illustration.jpg')}
                        border={"1px solid #ddd"}
                        padding={"8px"}
                        borderRadius={"4px"}
                      >
                        <Box
                          sx={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "flex-stat",
                            alignItems: "center",
                            gap: "5px",
                            bgcolor: "#6874dd",
                          }}
                        >
                        <Box>
                            <img src={logo} height={60} width={60}/>
                            </Box>
                        </Box>
                      </Box>
                    </Grid>
                  </Grid>
                </Box>
                <Box className="showMoreBtn">
                  <button>Show More</button>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box
        className={`VolumeUp_box ${
          activeContent === "VolumeUp" ? "show" : "hide"
        }`}
      >
        <Box>
          <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
            <IconButton onClick={handleDrawerClose}>
              <CloseIcon fontSize="30px" />
            </IconButton>
          </Box>
        </Box>
        <Box className="drawer_item_description">
          <Box marginTop={2}>
            <Box>
              <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={1}>
                  <Grid item xs={6}>
                    <Box>
                      <Typography
                        sx={{
                          fontSize: "14px",
                          padding: "5px",
                          fontWeight: "bold",
                          color: "#676363",
                        }}
                      >
                        {" "}
                        Name
                      </Typography>
                      <Box className="input_box">
                        <input type="text" />
                      </Box>
                    </Box>
                  </Grid>
                  <Grid item xs={6}>
                    <Box>
                      <Box>
                        <Typography
                          sx={{
                            fontSize: "14px",
                            padding: "5px",
                            fontWeight: "bold",
                            color: "#676363",
                          }}
                        >
                          {" "}
                          Tag
                        </Typography>
                        <Box className="input_box">
                          <input type="text" />
                        </Box>
                      </Box>
                    </Box>
                  </Grid>
                  <Grid item xs={6}>
                    <Box>
                      <Typography
                        sx={{
                          fontSize: "14px",
                          padding: "5px",
                          fontWeight: "bold",
                          color: "#676363",
                        }}
                      >
                        {" "}
                        Folder
                      </Typography>
                      <Box className="input_box">
                        <input type="text" />
                      </Box>
                    </Box>
                  </Grid>
                  <Grid item xs={6}>
                    <Box>
                      <Typography
                        sx={{
                          fontSize: "14px",
                          padding: "5px",
                          fontWeight: "bold",
                          color: "#676363",
                        }}
                      >
                        {" "}
                        Owner
                      </Typography>
                      <Box className="input_box">
                        <input type="text" />
                      </Box>
                    </Box>
                  </Grid>

                  <Grid item xs={12}>
                    <Box>
                      <Typography
                        sx={{
                          fontSize: "14px",
                          padding: "5px",
                          fontWeight: "bold",
                          color: "#676363",
                        }}
                      >
                        {" "}
                        Sort By
                      </Typography>
                      <Box className="input_box">
                        <select>
                          <option value="Name"></option>

                          <option value="Name">Name</option>
                          <option value="Orientation">Orientation</option>
                          <option value="Width">Width</option>
                          <option value="Height">Height</option>
                        </select>
                      </Box>
                    </Box>
                  </Grid>
                </Grid>
                <Typography
                  sx={{
                    width: "100%",
                    textAlign: "center",
                    padding: "10px",
                    fontWeight: "bold",
                    color: "#676363",
                  }}
                >
                  No media to display!
                </Typography>
                <Box sx={{ marginTop: 2, marginBottom: 2 }}>
                  <Grid container spacing={1}>
                    <Grid item xs={6}>
                      <Box
                        border={"1px solid #ddd"}
                        padding={"8px"}
                        borderRadius={"4px"}
                        bgcolor={"#6874dd"}
                      >
                        <Box
                          sx={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "flex-stat",
                            alignItems: "center",
                            gap: "5px",
                            color: "#fff",
                          }}
                        >
                          <FileUploadIcon size="50px" color="#fff" />{" "}
                          <Typography fontSize={"14px"}>
                            Upload Audio
                          </Typography>
                        </Box>
                      </Box>
                    </Grid>
                  </Grid>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box
        className={`Videocam_box ${
          activeContent === "Videocam" ? "show" : "hide"
        }`}
      >
        <Box>
          <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
            <IconButton onClick={handleDrawerClose}>
              <CloseIcon fontSize="30px" />
            </IconButton>
          </Box>
        </Box>
        <Box className="drawer_item_description">
          <Box marginTop={2}>
            <Box>
              <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={1}>
                  <Grid item xs={6}>
                    <Box>
                      <Typography
                        sx={{
                          fontSize: "14px",
                          padding: "5px",
                          fontWeight: "bold",
                          color: "#676363",
                        }}
                      >
                        {" "}
                        Name
                      </Typography>
                      <Box className="input_box">
                        <input type="text" />
                      </Box>
                    </Box>
                  </Grid>
                  <Grid item xs={6}>
                    <Box>
                      <Box>
                        <Typography
                          sx={{
                            fontSize: "14px",
                            padding: "5px",
                            fontWeight: "bold",
                            color: "#676363",
                          }}
                        >
                          {" "}
                          Tag
                        </Typography>
                        <Box className="input_box">
                          <input type="text" />
                        </Box>
                      </Box>
                    </Box>
                  </Grid>
                  <Grid item xs={6}>
                    <Box>
                      <Typography
                        sx={{
                          fontSize: "14px",
                          padding: "5px",
                          fontWeight: "bold",
                          color: "#676363",
                        }}
                      >
                        {" "}
                        Folder
                      </Typography>
                      <Box className="input_box">
                        <input type="text" />
                      </Box>
                    </Box>
                  </Grid>
                  <Grid item xs={6}>
                    <Box>
                      <Typography
                        sx={{
                          fontSize: "14px",
                          padding: "5px",
                          fontWeight: "bold",
                          color: "#676363",
                        }}
                      >
                        {" "}
                        Owner
                      </Typography>
                      <Box className="input_box">
                        <input type="text" />
                      </Box>
                    </Box>
                  </Grid>
                  <Grid item xs={6}>
                    <Box>
                      <Typography
                        sx={{
                          fontSize: "14px",
                          padding: "5px",
                          fontWeight: "bold",
                          color: "#676363",
                        }}
                      >
                        {" "}
                        Orientation
                      </Typography>
                      <Box className="input_box">
                        <select>
                          <option value="Name">All</option>
                          <option value="MediaId">Landscape</option>
                          <option value="Name">Portriat</option>
                        </select>
                      </Box>
                    </Box>
                  </Grid>
                  <Grid item xs={6}>
                    <Box>
                      <Typography
                        sx={{
                          fontSize: "14px",
                          padding: "5px",
                          fontWeight: "bold",
                          color: "#676363",
                        }}
                      >
                        {" "}
                        Sort By
                      </Typography>
                      <Box className="input_box">
                        <select>
                          <option value="Name"></option>

                          <option value="Name">Name</option>
                          <option value="Orientation">Orientation</option>
                          <option value="Width">Width</option>
                          <option value="Height">Height</option>
                        </select>
                      </Box>
                    </Box>
                  </Grid>
                </Grid>
                <Typography
                  sx={{
                    width: "100%",
                    textAlign: "center",
                    padding: "10px",
                    fontWeight: "bold",
                    color: "#676363",
                  }}
                >
                  No media to display!
                </Typography>
                <Box sx={{ marginTop: 2, marginBottom: 2 }}>
                  <Grid container spacing={1}>
                    <Grid item xs={6}>
                      <Box
                        border={"1px solid #ddd"}
                        padding={"8px"}
                        borderRadius={"4px"}
                        bgcolor={"#6874dd"}
                      >
                        <Box
                          sx={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "flex-stat",
                            alignItems: "center",
                            gap: "5px",
                            color: "#fff",
                          }}
                        >
                          <FileUploadIcon size="50px" color="#fff" />{" "}
                          <Typography fontSize={"14px"}>
                            Upload Video
                          </Typography>
                        </Box>
                      </Box>
                    </Grid>
                  </Grid>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box
        className={`Delete_box ${activeContent === "Delete" ? "show" : "hide"}`}
      >
        <Box>
          <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
            <IconButton onClick={handleDrawerClose}>
              <CloseIcon fontSize="30px" />
            </IconButton>
          </Box>
        </Box>
        <Box className="drawer_item_description">
          <Box marginTop={2}>
            <Box>
              <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={1}>
                  <Grid item xs={6}>
                    <Box>
                      <Typography
                        sx={{
                          fontSize: "14px",
                          padding: "5px",
                          fontWeight: "bold",
                          color: "#676363",
                        }}
                      >
                        {" "}
                        Type
                      </Typography>
                      <Box className="input_box">
                        <select name="cars" id="cars">
                          <option value="Name"></option>

                          <option value="Name">HTML Package</option>
                          <option value="Orientation">PDF</option>
                          <option value="Width">PowerPoint</option>
                        </select>
                      </Box>
                    </Box>
                  </Grid>
                  <Grid item xs={6}>
                    <Box>
                      <Typography
                        sx={{
                          fontSize: "14px",
                          padding: "5px",
                          fontWeight: "bold",
                          color: "#676363",
                        }}
                      >
                        {" "}
                        Name
                      </Typography>
                      <Box className="input_box">
                        <input type="text" />
                      </Box>
                    </Box>
                  </Grid>
                  <Grid item xs={6}>
                    <Box>
                      <Box>
                        <Typography
                          sx={{
                            fontSize: "14px",
                            padding: "5px",
                            fontWeight: "bold",
                            color: "#676363",
                          }}
                        >
                          {" "}
                          Tag
                        </Typography>
                        <Box className="input_box">
                          <input type="text" />
                        </Box>
                      </Box>
                    </Box>
                  </Grid>
                  <Grid item xs={6}>
                    <Box>
                      <Typography
                        sx={{
                          fontSize: "14px",
                          padding: "5px",
                          fontWeight: "bold",
                          color: "#676363",
                        }}
                      >
                        {" "}
                        Folder
                      </Typography>
                      <Box className="input_box">
                        <input type="text" />
                      </Box>
                    </Box>
                  </Grid>
                  <Grid item xs={6}>
                    <Box>
                      <Typography
                        sx={{
                          fontSize: "14px",
                          padding: "5px",
                          fontWeight: "bold",
                          color: "#676363",
                        }}
                      >
                        {" "}
                        Owner
                      </Typography>
                      <Box className="input_box">
                        <input type="text" />
                      </Box>
                    </Box>
                  </Grid>

                  <Grid item xs={6}>
                    <Box>
                      <Typography
                        sx={{
                          fontSize: "14px",
                          padding: "5px",
                          fontWeight: "bold",
                          color: "#676363",
                        }}
                      >
                        {" "}
                        Sort By
                      </Typography>
                      <Box className="input_box">
                        <select name="cars" id="cars">
                          <option value="Name"></option>

                          <option value="Name">Name</option>
                          <option value="Orientation">Orientation</option>
                          <option value="Width">Width</option>
                          <option value="Height">Height</option>
                        </select>
                      </Box>
                    </Box>
                  </Grid>
                </Grid>
                <Typography
                  sx={{
                    width: "100%",
                    textAlign: "center",
                    padding: "10px",
                    fontWeight: "bold",
                    color: "#676363",
                  }}
                >
                  No media to display!
                </Typography>
                <Box
                  sx={{
                    marginTop: 2,
                    marginBottom: 2,
                    height: "100px",
                    overflowY: "auto",
                  }}
                >
                  <Grid container spacing={1}>
                    <Grid item xs={6}>
                      <Box
                        border={"1px solid #ddd"}
                        padding={"8px"}
                        borderRadius={"4px"}
                        bgcolor={"#6874dd"}
                      >
                        <Box
                          sx={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "flex-stat",
                            alignItems: "center",
                            gap: "5px",
                            color: "#fff",
                          }}
                        >
                          <FileUploadIcon size="50px" color="#fff" />{" "}
                          <Typography fontSize={"12px"}>
                            Upload HTML Pa.
                          </Typography>
                        </Box>
                      </Box>
                    </Grid>
                    <Grid item xs={6}>
                      <Box
                        border={"1px solid #ddd"}
                        padding={"8px"}
                        borderRadius={"4px"}
                        bgcolor={"#6874dd"}
                      >
                        <Box
                          sx={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "flex-stat",
                            alignItems: "center",
                            gap: "5px",
                            color: "#fff",
                          }}
                        >
                          <FileUploadIcon size="50px" color="#fff" />{" "}
                          <Typography fontSize={"12px"}>Upload PDF</Typography>
                        </Box>
                      </Box>
                    </Grid>
                    <Grid item xs={6}>
                      <Box
                        border={"1px solid #ddd"}
                        padding={"8px"}
                        borderRadius={"4px"}
                        bgcolor={"#6874dd"}
                      >
                        <Box
                          sx={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "flex-stat",
                            alignItems: "center",
                            gap: "5px",
                            color: "#fff",
                          }}
                        >
                          <FileUploadIcon size="50px" color="#fff" />{" "}
                          <Typography fontSize={"12px"}>
                            Upload PowerP..
                          </Typography>
                        </Box>
                      </Box>
                    </Grid>
                  </Grid>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box className={`List_box ${activeContent === "List" ? "show" : "hide"}`}>
        <Box>
          <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
            <IconButton onClick={handleDrawerClose}>
              <CloseIcon fontSize="30px" />
            </IconButton>
          </Box>
        </Box>
        <Box className="drawer_item_description">
          <Box marginTop={2}>
            <Box>
              <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={1}>
                  <Grid item xs={6}>
                    <Box>
                      <Typography
                        sx={{
                          fontSize: "14px",
                          padding: "5px",
                          fontWeight: "bold",
                          color: "#676363",
                        }}
                      >
                        {" "}
                        Name
                      </Typography>
                      <Box className="input_box">
                        <input type="text" />
                      </Box>
                    </Box>
                  </Grid>
                  <Grid item xs={6}>
                    <Box>
                      <Box>
                        <Typography
                          sx={{
                            fontSize: "14px",
                            padding: "5px",
                            fontWeight: "bold",
                            color: "#676363",
                          }}
                        >
                          {" "}
                          Tag
                        </Typography>
                        <Box className="input_box">
                          <input type="text" />
                        </Box>
                      </Box>
                    </Box>
                  </Grid>
                  <Grid item xs={6}>
                    <Box>
                      <Typography
                        sx={{
                          fontSize: "14px",
                          padding: "5px",
                          fontWeight: "bold",
                          color: "#676363",
                        }}
                      >
                        {" "}
                        Folder
                      </Typography>
                      <Box className="input_box">
                        <input type="text" />
                      </Box>
                    </Box>
                  </Grid>
                  <Grid item xs={6}>
                    <Box>
                      <Typography
                        sx={{
                          fontSize: "14px",
                          padding: "5px",
                          fontWeight: "bold",
                          color: "#676363",
                        }}
                      >
                        {" "}
                        Owner
                      </Typography>
                      <Box className="input_box">
                        <input type="text" />
                      </Box>
                    </Box>
                  </Grid>
                </Grid>
                <Typography
                  sx={{
                    width: "100%",
                    textAlign: "center",
                    padding: "10px",
                    fontWeight: "bold",
                    color: "#676363",
                  }}
                >
                  No media to display!
                </Typography>
                <Box sx={{ marginTop: 2, marginBottom: 2 }}>
                  <Grid container spacing={1}>
                    <Grid item xs={6}>
                      <Box
                        border={"1px solid #ddd"}
                        padding={"8px"}
                        borderRadius={"4px"}
                        bgcolor={"#6874dd"}
                      >
                        <Box
                          sx={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "flex-stat",
                            alignItems: "center",
                            gap: "5px",
                            color: "#fff",
                          }}
                        >
                          <FormatListNumberedIcon size="50px" color="#fff" />{" "}
                          <Typography fontSize={"14px"}>
                            New Playlist
                          </Typography>
                        </Box>
                      </Box>
                    </Grid>
                  </Grid>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box className={`Send_box ${activeContent === "Send" ? "show" : "hide"}`}>
        <Box>
          <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
            <IconButton onClick={handleDrawerClose}>
              <CloseIcon fontSize="30px" />
            </IconButton>
          </Box>
          <Typography
            sx={{ fontSize: "14px", padding: "5px", fontWeight: "bold" }}
          >
            {" "}
            Search
          </Typography>
          <Box className="input_box">
            <input type="text" />
          </Box>
        </Box>
        <Box className="drawer_item_description">
          <Box marginTop={2}>
            <Typography sx={{ fontSize: "14px", padding: "5px" }}>
              {" "}
              ACTIONS
            </Typography>
            <Box>
              <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={1}>
                  <Grid item xs={6}>
                    <Box
                      border={"1px solid #ddd"}
                      padding={"10px"}
                      borderRadius={"4px"}
                    >
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "flex-stat",
                          alignItems: "center",
                          gap: "5px",
                        }}
                      >
                        <Checkbox
                          size="small"
                          sx={{ p: "0px!important", color: "#676363" }}
                        />
                        <Typography fontSize={"12px"} color="#676363">
                          Nevigate To <br />
                          Widget
                        </Typography>
                      </Box>
                    </Box>
                  </Grid>
                  <Grid item xs={6}>
                    <Box
                      border={"1px solid #ddd"}
                      padding={"10px"}
                      borderRadius={"4px"}
                    >
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "flex-stat",
                          alignItems: "center",
                          gap: "5px",
                        }}
                      >
                        <MonitorIcon
                          sx={{ fontSize: "20px", color: "#676363" }}
                        />{" "}
                        <Typography fontSize={"12px"} color="#676363">
                          Nevigate To
                          <br />
                          Layout
                        </Typography>
                      </Box>
                    </Box>
                  </Grid>
                  <Grid item xs={6}>
                    <Box
                      border={"1px solid #ddd"}
                      padding={"10px"}
                      borderRadius={"4px"}
                    >
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "flex-stat",
                          alignItems: "center",
                          gap: "5px",
                        }}
                      >
                        <SkipPreviousIcon
                          sx={{ fontSize: "20px", color: "#676363" }}
                        />
                        <Typography fontSize={"14px"} color="#676363">
                          Previous <br /> Widget
                        </Typography>
                      </Box>
                    </Box>
                  </Grid>
                  <Grid item xs={6}>
                    <Box
                      border={"1px solid #ddd"}
                      padding={"10px"}
                      borderRadius={"4px"}
                    >
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "flex-stat",
                          alignItems: "center",
                          gap: "5px",
                        }}
                      >
                        <SkipNextIcon
                          sx={{ fontSize: "20px", color: "#676363" }}
                        />{" "}
                        <Typography fontSize={"14px"} color="#676363">
                          Next <br /> Widget
                        </Typography>
                      </Box>
                    </Box>
                  </Grid>

                  <Grid item xs={6}>
                    <Box
                      border={"1px solid #ddd"}
                      padding={"10px"}
                      borderRadius={"4px"}
                    >
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "flex-stat",
                          alignItems: "center",
                          gap: "5px",
                        }}
                      >
                        <ArrowLeftIcon
                          sx={{ fontSize: "25px", color: "#676363" }}
                        />{" "}
                        <Typography fontSize={"13px"} color="#676363">
                          Previous <br />
                          Layout
                        </Typography>
                      </Box>
                    </Box>
                  </Grid>
                  <Grid item xs={6}>
                    <Box
                      border={"1px solid #ddd"}
                      padding={"20px 8px"}
                      borderRadius={"4px"}
                    >
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "flex-stat",
                          alignItems: "center",
                          gap: "5px",
                        }}
                      >
                        <ArrowRightIcon
                          sx={{ fontSize: "25px", color: "#676363" }}
                        />{" "}
                        <Typography fontSize={"13px"} color="#676363">
                          Next Layout{" "}
                        </Typography>
                      </Box>
                    </Box>
                  </Grid>
                </Grid>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box
        className={`PermMedia_box ${
          activeContent === "PermMedia" ? "show" : "hide"
        }`}
      >
        <Box>
          <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
            <IconButton onClick={handleDrawerClose}>
              <CloseIcon fontSize="30px" />
            </IconButton>
          </Box>
        </Box>
        <Box className="drawer_item_description">
          <Box marginTop={2}>
            <Box>
              <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={1}>
                  <Grid item xs={6}>
                    <Box>
                      <Typography
                        sx={{
                          fontSize: "14px",
                          padding: "5px",
                          fontWeight: "bold",
                          color: "#676363",
                        }}
                      >
                        {" "}
                        Name
                      </Typography>
                      <Box className="input_box">
                        <input type="text" />
                      </Box>
                    </Box>
                  </Grid>

                  <Grid item xs={6}>
                    <Box>
                      <Typography
                        sx={{
                          fontSize: "14px",
                          padding: "5px",
                          fontWeight: "bold",
                          color: "#676363",
                        }}
                      >
                        {" "}
                        Folder
                      </Typography>
                      <Box className="input_box">
                        <input type="text" />
                      </Box>
                    </Box>
                  </Grid>

                  <Grid item xs={12}>
                    <Box>
                      <Typography
                        sx={{
                          fontSize: "14px",
                          padding: "5px",
                          fontWeight: "bold",
                          color: "#676363",
                        }}
                      >
                        {" "}
                        Orientation
                      </Typography>
                      <Box className="input_box">
                        <select name="cars" id="cars">
                          <option value="volvo">All</option>
                          <option value="saab">Landscape</option>
                          <option value="mercedes">Portrait</option>
                        </select>
                      </Box>
                    </Box>
                  </Grid>
                </Grid>
                <Typography
                  sx={{
                    width: "100%",
                    textAlign: "center",
                    padding: "10px",
                    fontWeight: "bold",
                    color: "#676363",
                  }}
                >
                  No media to display!
                </Typography>
                <Box sx={{ marginTop: 2, marginBottom: 2 }}>
                  <Grid container spacing={1}></Grid>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box
        className={`CameraAlt_box ${
          activeContent === "CameraAlt" ? "show" : "hide"
        }`}
      >
        <Box>
          <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
            <IconButton onClick={handleDrawerClose}>
              <CloseIcon fontSize="30px" />
            </IconButton>
          </Box>
        </Box>
        <Box className="drawer_item_description">
          <Box marginTop={2}>
            <Box>
              <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={1}>
                  <Grid item xs={6}>
                    <Box>
                      <Typography
                        sx={{
                          fontSize: "14px",
                          padding: "5px",
                          fontWeight: "bold",
                          color: "#676363",
                        }}
                      >
                        {" "}
                        Name
                      </Typography>
                      <Box className="input_box">
                        <input type="text" />
                      </Box>
                    </Box>
                  </Grid>

                  <Grid item xs={6}>
                    <Box>
                      <Typography
                        sx={{
                          fontSize: "14px",
                          padding: "5px",
                          fontWeight: "bold",
                          color: "#676363",
                        }}
                      >
                        {" "}
                        Type
                      </Typography>
                      <Box className="input_box">
                        <select>
                          <option value="volvo">Image</option>
                          <option value="saab">Video</option>
                        </select>
                      </Box>
                    </Box>
                  </Grid>

                  <Grid item xs={12}>
                    <Box>
                      <Typography
                        sx={{
                          fontSize: "14px",
                          padding: "5px",
                          fontWeight: "bold",
                          color: "#676363",
                        }}
                      >
                        {" "}
                        Sort By
                      </Typography>
                      <Box className="input_box">
                        <select name="cars" id="cars">
                          <option value="Name"></option>
                          <option value="Name">Name</option>
                          <option value="Orientation">Orientation</option>
                          <option value="Width">Width</option>
                          <option value="Height">Height</option>
                        </select>
                      </Box>
                    </Box>
                  </Grid>
                </Grid>
                <Box
                  sx={{
                    marginTop: 2,
                    marginBottom: 2,
                    height: "100px",
                    overflowY: "auto",
                  }}
                >
                  <Grid container spacing={1}>
                    <Grid item xs={6}>
                      <Box
                        border={"1px solid #ddd"}
                        padding={"8px"}
                        borderRadius={"4px"}
                      >
                        <Box
                          sx={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "flex-stat",
                            alignItems: "center",
                            gap: "5px",
                            bgcolor: "#6874dd",
                          }}
                        >
                          <Box>
                            <img src={logo} height={60} width={60}/>
                            </Box>
                        </Box>
                      </Box>
                    </Grid>
                    <Grid item xs={6}>
                      <Box
                        border={"1px solid #ddd"}
                        padding={"8px"}
                        borderRadius={"4px"}
                      >
                        <Box
                          sx={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "flex-stat",
                            alignItems: "center",
                            gap: "5px",
                            bgcolor: "#6874dd",
                          }}
                        >
                          <Box>
                            <img src={logo} height={60} width={60}/>
                            </Box>
                        </Box>
                      </Box>
                    </Grid>
                    <Grid item xs={6}>
                      <Box
                        border={"1px solid #ddd"}
                        padding={"8px"}
                        borderRadius={"4px"}
                      >
                        <Box
                          sx={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "flex-stat",
                            alignItems: "center",
                            gap: "5px",
                            bgcolor: "#6874dd",
                          }}
                        >
                          <Box>
                            <img src={logo} height={60} width={60}/>
                            </Box>
                        </Box>
                      </Box>
                    </Grid>
                    <Grid item xs={6}>
                      <Box
                        border={"1px solid #ddd"}
                        padding={"8px"}
                        borderRadius={"4px"}
                      >
                        <Box
                          sx={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "flex-stat",
                            alignItems: "center",
                            gap: "5px",
                            bgcolor: "#6874dd",
                          }}
                        >
                          <Box>
                            <img src={logo} height={60} width={60}/>
                            </Box>
                        </Box>
                      </Box>
                    </Grid>
                    <Grid item xs={6}>
                      <Box
                        border={"1px solid #ddd"}
                        padding={"8px"}
                        borderRadius={"4px"}
                      >
                        <Box
                          sx={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "flex-stat",
                            alignItems: "center",
                            gap: "5px",
                            bgcolor: "#6874dd",
                          }}
                        >
                          <Box>
                            <img src={logo} height={60} width={60}/>
                            </Box>
                        </Box>
                      </Box>
                    </Grid>
                    <Grid item xs={6}>
                      <Box
                        border={"1px solid #ddd"}
                        padding={"8px"}
                        borderRadius={"4px"}
                      >
                        <Box
                          sx={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "flex-stat",
                            alignItems: "center",
                            gap: "5px",
                            bgcolor: "#6874dd",
                          }}
                        >
                          <Box>
                            <img src={logo} height={60} width={60}/>
                            </Box>
                        </Box>
                      </Box>
                    </Grid>
                  </Grid>
                </Box>
                <Box className="showMoreBtn">
                  <button>Show More</button>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>

      <Box
        className={`SwapHorizontalCirclen_box ${
          activeContent === "SwapHorizontalCirclen" ? "show" : "hide"
        }`}
      >
        <Box>
          <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
            <IconButton onClick={handleDrawerClose}>
              <CloseIcon fontSize="30px" />
            </IconButton>
          </Box>
        </Box>
        <Box className="drawer_item_description">
          <Box marginTop={2}>
            <Box>
              <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={1}>
                  <Grid item xs={6}>
                    <Box>
                      <Typography
                        sx={{
                          fontSize: "14px",
                          padding: "5px",
                          fontWeight: "bold",
                          color: "#676363",
                        }}
                      >
                        {" "}
                        Name
                      </Typography>
                      <Box className="input_box">
                        <input type="text" />
                      </Box>
                    </Box>
                  </Grid>

                  <Grid item xs={6}>
                    <Box>
                      <Typography
                        sx={{
                          fontSize: "14px",
                          padding: "5px",
                          fontWeight: "bold",
                          color: "#676363",
                        }}
                      >
                        {" "}
                        Orientation
                      </Typography>
                      <Box className="input_box">
                        <select name="cars" id="cars">
                          <option value="volvo">All</option>
                          <option value="saab">Landscape</option>
                          <option value="mercedes">Portrait</option>
                        </select>
                      </Box>
                    </Box>
                  </Grid>
                </Grid>
                <Box
                  sx={{
                    marginTop: 2,
                    marginBottom: 2,
                    height: "100px",
                    overflowY: "auto",
                  }}
                >
                  <Grid container spacing={1}>
                    <Grid item xs={6}>
                      <Box
                        border={"1px solid #ddd"}
                        padding={"8px"}
                        borderRadius={"4px"}
                      >
                        <Box
                          sx={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "flex-stat",
                            alignItems: "center",
                            gap: "5px",
                            bgcolor: "#6874dd",
                          }}
                        >
                          <Box>
                            <img src={logo} height={60} width={60}/>
                            </Box>
                        </Box>
                      </Box>
                    </Grid>
                    <Grid item xs={6}>
                      <Box
                        border={"1px solid #ddd"}
                        padding={"8px"}
                        borderRadius={"4px"}
                      >
                        <Box
                          sx={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "flex-stat",
                            alignItems: "center",
                            gap: "5px",
                            bgcolor: "#6874dd",
                          }}
                        >
                          <Box>
                            <img src={logo} height={60} width={60}/>
                            </Box>
                        </Box>
                      </Box>
                    </Grid>
                    <Grid item xs={6}>
                      <Box
                        border={"1px solid #ddd"}
                        padding={"8px"}
                        borderRadius={"4px"}
                      >
                        <Box
                          sx={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "flex-stat",
                            alignItems: "center",
                            gap: "5px",
                            bgcolor: "#6874dd",
                          }}
                        >
                          <Box>
                            <img src={logo} height={60} width={60}/>
                            </Box>
                        </Box>
                      </Box>
                    </Grid>
                    <Grid item xs={6}>
                      <Box
                        border={"1px solid #ddd"}
                        padding={"8px"}
                        borderRadius={"4px"}
                      >
                        <Box
                          sx={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "flex-stat",
                            alignItems: "center",
                            gap: "5px",
                            bgcolor: "#6874dd",
                          }}
                        >
                          <Box>
                            <img src={logo} height={60} width={60}/>
                            </Box>
                        </Box>
                      </Box>
                    </Grid>
                    <Grid item xs={6}>
                      <Box
                        border={"1px solid #ddd"}
                        padding={"8px"}
                        borderRadius={"4px"}
                      >
                        <Box
                          sx={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "flex-stat",
                            alignItems: "center",
                            gap: "5px",
                            bgcolor: "#6874dd",
                          }}
                        >
                          <Box>
                            <img src={logo} height={60} width={60}/>
                            </Box>
                        </Box>
                      </Box>
                    </Grid>
                    <Grid item xs={6}>
                      <Box
                        border={"1px solid #ddd"}
                        padding={"8px"}
                        borderRadius={"4px"}
                      >
                        <Box
                          sx={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "flex-stat",
                            alignItems: "center",
                            gap: "5px",
                            bgcolor: "#6874dd",
                          }}
                        >
                          <Box>
                            <img src={logo} height={60} width={60}/>
                            </Box>
                        </Box>
                      </Box>
                    </Grid>
                  </Grid>
                </Box>
                <Box className="showMoreBtn">
                  <button>Show More</button>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

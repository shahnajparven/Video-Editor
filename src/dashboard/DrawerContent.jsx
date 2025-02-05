import { Avatar, Box, Checkbox, IconButton, Typography } from "@mui/material";
import React from "react";
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
import ShowChartIcon from "@mui/icons-material/ShowChart";
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
import TitleIcon from "@mui/icons-material/Title";
import { TbCalendarTime } from "react-icons/tb";
import HorizontalRuleIcon from "@mui/icons-material/HorizontalRule";
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

export const DrawerContent = ({
  activeDiv,
  activeContent,
  handleDrawerClose,
}) => {
  return (
    <Box>
      <Box
        className={`dashboard_box ${
          activeContent === "dashboard" ? "show" : "hide"
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
            <Typography
              sx={{ fontSize: "14px", padding: "5px", fontWeight: "600" }}
            >
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
                    >
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "flex-stat",
                          alignItems: "center",
                          gap: "5px",
                        }}
                      >
                        <AccessTimeIcon fontSize="18px" />{" "}
                        <Typography fontSize={"14px"}>Clock</Typography>
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
                        <HourglassEmptyIcon fontSize="18px" />{" "}
                        <Typography fontSize={"14px"}>Countdown</Typography>
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
                        <CodeIcon fontSize="18px" />
                        <Typography fontSize={"14px"}>Embedded</Typography>
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
                        <VideocamIcon fontSize="18px" />{" "}
                        <Typography fontSize={"14px"}>HLS</Typography>
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
                        <VideoFileIcon fontSize="18px" />{" "}
                        <Typography fontSize={"14px"}>Local Video</Typography>
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
                        <VideocamIcon fontSize="18px" />{" "}
                        <Typography fontSize={"14px"}>Video In</Typography>
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
                        <LanIcon fontSize="18px" />{" "}
                        <Typography fontSize={"14px"}>Webpage</Typography>
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
                        <PublicIcon fontSize="18px" />{" "}
                        <Typography fontSize={"14px"}>World Clock</Typography>
                      </Box>
                    </Box>
                  </Grid>
                </Grid>
              </Box>
            </Box>
          </Box>

          <Box marginTop={2}>
            <Typography
              sx={{ fontSize: "14px", padding: "5px", fontWeight: "600" }}
            >
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
                    >
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "flex-stat",
                          alignItems: "center",
                          gap: "5px",
                        }}
                      >
                        <CalendarMonthIcon fontSize="18px" />{" "}
                        <Typography fontSize={"14px"}>Calender</Typography>
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
                        <PiChartLineUpBold />

                        <Typography fontSize={"14px"}>Currencies</Typography>
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
                        <DashboardIcon fontSize="18px" />
                        <Typography fontSize={"14px"}>Dashboard</Typography>
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
                        <DatasetIcon fontSize="18px" />
                        <Typography fontSize={"14px"}>Data Set</Typography>
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
                        <FaMastodon />
                        <Typography fontSize={"14px"}>Mastodon</Typography>
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
                        <AssignmentIcon fontSize="18px" />
                        <Typography fontSize={"14px"}>Menu Board</Typography>
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
                        <CoffeeIcon fontSize="18px" />
                        <Typography fontSize={"14px"}>
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
                    >
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "flex-stat",
                          alignItems: "center",
                          gap: "5px",
                        }}
                      >
                        <NotificationsNoneIcon fontSize="18px" />
                        <Typography fontSize={"14px"}>Notification</Typography>
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
                        <WifiIcon fontSize="18px" />
                        <Typography fontSize={"14px"}>RSS Ticker</Typography>
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
                        <IoBarChartSharp />
                        <Typography fontSize={"14px"}>Stocks</Typography>
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
                        <CloudIcon fontSize="18px" />
                        <Typography fontSize={"14px"}>Weather</Typography>
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
            <Typography
              sx={{ fontSize: "14px", padding: "5px", fontWeight: "600" }}
            >
              {" "}
              ELEMENTS
            </Typography>
            <Box>
              <Box sx={{ flexGrow: 1 }}>
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
                        <RxText size="40px" />{" "}
                        <Typography fontSize={"14px"}>Text</Typography>
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
                          justifyContent: "flex-stat",
                          flexDirection: "column",
                          alignItems: "center",
                          gap: "5px",
                        }}
                      >
                        <TbCalendarTime size="40px" />{" "}
                        <Typography fontSize={"14px"}>Date/Time</Typography>
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
                        }}
                      >
                        <TfiLayoutLineSolid size="50px" />{" "}
                        <Typography fontSize={"14px"}>Line</Typography>
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
                        }}
                      >
                        <MdRectangle size="50px" />{" "}
                        <Typography fontSize={"14px"}>Rectangle</Typography>
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
                        }}
                      >
                        <FaCircle size="50px" />{" "}
                        <Typography fontSize={"14px"}>Circle</Typography>
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
                        <Typography fontSize={"14px"}>Ellipse</Typography>
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
                        }}
                      >
                        <IoTriangle size="50px" />{" "}
                        <Typography fontSize={"14px"}>Triangle</Typography>
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
                        }}
                      >
                        <BsFillPentagonFill size="50px" />{" "}
                        <Typography fontSize={"14px"}>Pentagon</Typography>
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
                        }}
                      >
                        <BsFillHexagonFill size="50px" />{" "}
                        <Typography fontSize={"14px"}>Hexagon</Typography>
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
                        }}
                      >
                        {" "}
                        Sort By
                      </Typography>
                      <Box className="input_box">
                        <select >
                        <option value="MediaId"></option>
                        <option value="MediaId">Media Id</option>
                          <option value="Name">Name</option>
                          <option value="Orientation">Orientation</option>
                          <option value="Width">Width</option>
                          <option value="Height">Height</option>
                        </select>
                      </Box>
                    </Box>
                  </Grid>
                </Grid>

                <Box sx={{ marginTop: 2, marginBottom: 2,height:'70px',overflowY:'auto' }}>
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
                          <FileUploadIcon size="50px" />{" "}
                          <Typography fontSize={"14px"}>
                            Upload Image
                          </Typography>
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
                          }}
                        >
                          <Avatar />
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
                        }}
                      >
                        {" "}
                        Sort By
                      </Typography>
                      <Box className="input_box">
                        <select>
                        <option value="Name"></option>
                        <option value="MediaId">Media Id</option>
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
                        bgcolor={'#6874dd'}
                      >
                        <Box
                          sx={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "flex-stat",
                            alignItems: "center",
                            gap: "5px",
                           color:'#fff'
                          }}
                        >
                          <FileUploadIcon size="50px"  color='#fff' />{" "}
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
                        }}
                      >
                        {" "}
                        Sort By
                      </Typography>
                      <Box className="input_box">
                        <select>
                        <option value="Name"></option>
                        <option value="MediaId">Media Id</option>
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
                        bgcolor={'#6874dd'}
                      >
                        <Box
                          sx={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "flex-stat",
                            alignItems: "center",
                            gap: "5px",
                           color:'#fff'
                          }}
                        >
                          <FileUploadIcon size="50px"  color='#fff' />{" "}
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
                        }}
                      >
                        {" "}
                        Sort By
                      </Typography>
                      <Box className="input_box">
                        <select name="cars" id="cars">
                        <option value="Name"></option>
                        <option value="MediaId">Media Id</option>
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
                  }}
                >
                  No media to display!
                </Typography>
                <Box sx={{ marginTop: 2, marginBottom: 2 ,height:'100px',overflowY:'auto'}}>
                  <Grid container spacing={1}>
                    <Grid item xs={6}>
                      <Box
                        border={"1px solid #ddd"}
                        padding={"8px"}
                        borderRadius={"4px"}
                        bgcolor={'#6874dd'}
                      >
                        <Box
                          sx={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "flex-stat",
                            alignItems: "center",
                            gap: "5px",
                            color:'#fff'
                          }}
                        >
                          <FileUploadIcon size="50px" color="#fff"/>{" "}
                          <Typography fontSize={"12px"}>
                            Upload HTML Pac..
                          </Typography>
                        </Box>
                      </Box>
                    </Grid>
                    <Grid item xs={6}>
                      <Box
                        border={"1px solid #ddd"}
                        padding={"8px"}
                        borderRadius={"4px"}
                        bgcolor={'#6874dd'}
                      >
                        <Box
                          sx={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "flex-stat",
                            alignItems: "center",
                            gap: "5px",
                            color:'#fff'
                          }}
                        >
                          <FileUploadIcon size="50px" color="#fff"/>{" "}
                          <Typography fontSize={"12px"}>Upload PDF</Typography>
                        </Box>
                      </Box>
                    </Grid>
                    <Grid item xs={6}>
                      <Box
                        border={"1px solid #ddd"}
                        padding={"8px"}
                        borderRadius={"4px"}
                        bgcolor={'#6874dd'}
                      >
                        <Box
                          sx={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "flex-stat",
                            alignItems: "center",
                            gap: "5px",
                            color:'#fff'
                          }}
                        >
                          <FileUploadIcon size="50px" color="#fff"/>{" "}
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
                        bgcolor={'#6874dd'}
                      >
                        <Box
                          sx={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "flex-stat",
                            alignItems: "center",
                            gap: "5px",
                            color:'#fff'
                          }}
                        >
                          <FormatListNumberedIcon size="50px" color="#fff"/>{" "}
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
            <Typography
              sx={{ fontSize: "14px", padding: "5px", fontWeight: "600" }}
            >
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
                        <Checkbox size="small" sx={{ p: "0px!important" }} />
                        <Typography fontSize={"12px"}>
                          Nevigate <br />
                          To Widget
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
                        <MonitorIcon sx={{ fontSize: "20px" }} />{" "}
                        <Typography fontSize={"12px"}>
                          Nevigate
                          <br /> To Layout
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
                        <SkipPreviousIcon sx={{ fontSize: "20px" }} />
                        <Typography fontSize={"14px"}>
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
                        <SkipNextIcon sx={{ fontSize: "20px" }} />{" "}
                        <Typography fontSize={"14px"}>
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
                        <ArrowLeftIcon sx={{ fontSize: "25px" }} />{" "}
                        <Typography fontSize={"13px"}>
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
                        <ArrowRightIcon sx={{ fontSize: "25px" }} />{" "}
                        <Typography fontSize={"13px"}>Next Layout </Typography>
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
                        }}
                      >
                        {" "}
                        Sort By
                      </Typography>
                      <Box className="input_box">
                        <select name="cars" id="cars">
                        <option value="Name"></option>
                        <option value="MediaId">Media Id</option>
                          <option value="Name">Name</option>
                          <option value="Orientation">Orientation</option>
                          <option value="Width">Width</option>
                          <option value="Height">Height</option>
                        </select>
                      </Box>
                    </Box>
                  </Grid>
                </Grid>
                <Box sx={{ marginTop: 2, marginBottom: 2,height:'100px',overflowY:'auto' }}>
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
                          <Avatar />
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
                          }}
                        >
                          <Avatar />
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
                          }}
                        >
                          <Avatar />
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
                          }}
                        >
                          <Avatar />
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
                          }}
                        >
                          <Avatar />
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
                          }}
                        >
                          <Avatar />
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
                <Box sx={{ marginTop: 2, marginBottom: 2,height:'100px',overflowY:'auto' }}>
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
                          <Avatar />
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
                          }}
                        >
                          <Avatar />
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
                          }}
                        >
                          <Avatar />
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
                          }}
                        >
                          <Avatar />
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
                          }}
                        >
                          <Avatar />
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
                          }}
                        >
                          <Avatar />
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

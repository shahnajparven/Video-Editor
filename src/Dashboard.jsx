import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
// import MuiDrawer from "@mui/material/Drawer";
import { Drawer as MuiDrawer } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import DashboardIcon from "@mui/icons-material/Dashboard";
import FontDownloadIcon from "@mui/icons-material/FontDownload";
import ImageIcon from "@mui/icons-material/Image";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import VideocamIcon from "@mui/icons-material/Videocam";
import DeleteIcon from "@mui/icons-material/Delete";
import ListIcon from "@mui/icons-material/List";
import SendIcon from "@mui/icons-material/Send";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import PermMediaIcon from "@mui/icons-material/PermMedia";
import CompareArrowsIcon from "@mui/icons-material/CompareArrows";
import SwapHorizontalCircleIcon from "@mui/icons-material/SwapHorizontalCircle";
import WindowIcon from "@mui/icons-material/Window";
import FormatAlignJustifyIcon from "@mui/icons-material/FormatAlignJustify";
import FullscreenExitIcon from "@mui/icons-material/FullscreenExit";
import FullscreenIcon from "@mui/icons-material/Fullscreen";
import LayersIcon from "@mui/icons-material/Layers";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import CloseIcon from "@mui/icons-material/Close";
import { DrawerContent } from "./dashboard/DrawerContent";

const drawerWidth = 350;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  variants: [
    {
      props: ({ open }) => open,
      style: {
        ...openedMixin(theme),
        "& .MuiDrawer-paper": openedMixin(theme),
      },
    },
    {
      props: ({ open }) => !open,
      style: {
        ...closedMixin(theme),
        "& .MuiDrawer-paper": closedMixin(theme),
      },
    },
  ],
}));

export default function MiniDrawer({ videoBoxColor }) {
  const [activeContent, setActiveContent] = React.useState("");
  const [open, setOpen] = React.useState(false);

  const videoBox = {
    flexDirection: "column",
  };
  const videoBox2 = {
    flexDirection: "row",
  };

  const videocontent = {
    height: "60vh",
    order: 2,
  };
  const videocontent2 = {
    height: "70vh",
    order: 2,
  };

  const videoBoxLeft = {
    width: "100%",
    order: 3,
  };
  const videoBoxRight = {
    width: "100%",
    order: 1,
  };

  const videoBoxLeft2 = {
    width: "10%",
    order: 1,
  };
  const videoBoxRight2 = {
    width: "10%",
    order: 3,
  };
  const [videoBoxs, setVideoBox] = React.useState();
  const [videoBoxIconLeft, setVideoBoxIconLeft] = React.useState();
  const [videocontents, setVideocontent] = React.useState();
  const [videoBoxIconRight, setVideoBoxIconRight] = React.useState();

  const handleDrawerOpen = () => {
    if (activeContent === "dashboard") {
      setOpen(false);
       setActiveContent("none");
      setVideoBox(videoBox2);
      setVideoBoxIconLeft(videoBoxLeft2);
      setVideocontent(videocontent2);
      setVideoBoxIconRight(videoBoxRight2);
    } else {
      setOpen(true);
      setVideoBoxIconLeft(videoBoxLeft);
      setVideocontent(videocontent);
      setVideoBoxIconRight(videoBoxRight);
      setActiveContent("dashboard");
      setVideoBox(videoBox);
    }
  };

  const handleDrawerOpenFontDownloadIcon = () => {
    if (activeContent === "fontDownload") {
      setOpen(false);
      setActiveContent("none");
      setVideoBox(videoBox2);
      setVideoBoxIconLeft(videoBoxLeft2);
      setVideocontent(videocontent2);
      setVideoBoxIconRight(videoBoxRight2);
    } else {
      setOpen(true);
      setVideoBoxIconLeft(videoBoxLeft);
      setVideocontent(videocontent);
      setVideoBoxIconRight(videoBoxRight);
      setActiveContent("fontDownload");
      setVideoBox(videoBox);
    }
  };

  const handleDrawerOpenImageIcon = () => {
    if (activeContent === "Image") {
      setOpen(false);
      setActiveContent("none");
      setVideoBox(videoBox2);
      setVideoBoxIconLeft(videoBoxLeft2);
      setVideocontent(videocontent2);
      setVideoBoxIconRight(videoBoxRight2);
    } else {
      setOpen(true);
      setVideoBoxIconLeft(videoBoxLeft);
      setVideocontent(videocontent);
      setVideoBoxIconRight(videoBoxRight);
      setActiveContent("Image");
      setVideoBox(videoBox);
    }
  };
  const handleDrawerOpenVolumeUpIcon = () => {
    if (activeContent === "VolumeUp") {
      setOpen(false);
      setActiveContent("none");
      setVideoBox(videoBox2);
      setVideoBoxIconLeft(videoBoxLeft2);
      setVideocontent(videocontent2);
      setVideoBoxIconRight(videoBoxRight2);
    } else {
      setOpen(true);
      setVideoBoxIconLeft(videoBoxLeft);
      setVideocontent(videocontent);
      setVideoBoxIconRight(videoBoxRight);
      setActiveContent("VolumeUp");
      setVideoBox(videoBox);
    }
  };
  const handleDrawerOpenVideocamIcon = () => {
    if (activeContent === "Videocam") {
      setOpen(false);
      setActiveContent("none");
      setVideoBox(videoBox2);
      setVideoBoxIconLeft(videoBoxLeft2);
      setVideocontent(videocontent2);
      setVideoBoxIconRight(videoBoxRight2);
    } else {
      setOpen(true);
      setVideoBoxIconLeft(videoBoxLeft);
      setVideocontent(videocontent);
      setVideoBoxIconRight(videoBoxRight);
      setActiveContent("Videocam");
      setVideoBox(videoBox);
    }
  };

  const handleDrawerOpenDeleteIcon = () => {
    if (activeContent === "Delete") {
      setOpen(false);
      setActiveContent("none");
      setVideoBox(videoBox2);
      setVideoBoxIconLeft(videoBoxLeft2);
      setVideocontent(videocontent2);
      setVideoBoxIconRight(videoBoxRight2);
    } else {
      setOpen(true);
      setVideoBoxIconLeft(videoBoxLeft);
      setVideocontent(videocontent);
      setVideoBoxIconRight(videoBoxRight);
      setActiveContent("Delete");
      setVideoBox(videoBox);
    }
  };
  const handleDrawerOpenListIcon = () => {
    if (activeContent === "List") {
      setOpen(false);
      setActiveContent("none");
      setVideoBox(videoBox2);
      setVideoBoxIconLeft(videoBoxLeft2);
      setVideocontent(videocontent2);
      setVideoBoxIconRight(videoBoxRight2);
    } else {
      setOpen(true);
      setVideoBoxIconLeft(videoBoxLeft);
      setVideocontent(videocontent);
      setVideoBoxIconRight(videoBoxRight);
      setActiveContent("List");
      setVideoBox(videoBox);
    }
  };
  const handleDrawerOpenSendIcon = () => {
    if (activeContent === "Send") {
      setOpen(false);
      setActiveContent("none");
      setVideoBox(videoBox2);
      setVideoBoxIconLeft(videoBoxLeft2);
      setVideocontent(videocontent2);
      setVideoBoxIconRight(videoBoxRight2);
    } else {
      setOpen(true);
      setVideoBoxIconLeft(videoBoxLeft);
      setVideocontent(videocontent);
      setVideoBoxIconRight(videoBoxRight);
      setActiveContent("Send");
      setVideoBox(videoBox);
    }
  };

  const handleDrawerOpenPermMediaIcon = () => {
    if (activeContent === "CameraAlt") {
      setOpen(false);
      setActiveContent("none");
      setVideoBox(videoBox2);
      setVideoBoxIconLeft(videoBoxLeft2);
      setVideocontent(videocontent2);
      setVideoBoxIconRight(videoBoxRight2);
    } else {
      setOpen(true);
      setVideoBoxIconLeft(videoBoxLeft);
      setVideocontent(videocontent);
      setVideoBoxIconRight(videoBoxRight);
      setActiveContent("CameraAlt");
      setVideoBox(videoBox);
    }
  };

  const handleDrawerOpenCameraAltIcon = () => {
    if (activeContent === "PermMedia") {
      setOpen(false);
      setActiveContent("none");
      setVideoBox(videoBox2);
      setVideoBoxIconLeft(videoBoxLeft2);
      setVideocontent(videocontent2);
      setVideoBoxIconRight(videoBoxRight2);
    } else {
      setOpen(true);
      setVideoBoxIconLeft(videoBoxLeft);
      setVideocontent(videocontent);
      setVideoBoxIconRight(videoBoxRight);
      setActiveContent("PermMedia");
      setVideoBox(videoBox);
    }
  };

  const handleDrawerOpenSwapHorizontalCircleIcon = () => {
    if (activeContent === "SwapHorizontalCirclen") {
      setOpen(false);
      setActiveContent("none");
      setVideoBox(videoBox2);
      setVideoBoxIconLeft(videoBoxLeft2);
      setVideocontent(videocontent2);
      setVideoBoxIconRight(videoBoxRight2);
    } else {
      setOpen(true);
      setVideoBoxIconLeft(videoBoxLeft);
      setVideocontent(videocontent);
      setVideoBoxIconRight(videoBoxRight);
      setActiveContent("SwapHorizontalCirclen");
      setVideoBox(videoBox);
    }
  };

  const handleDrawerClose = () => {
    setOpen(false);
    setVideoBox(videoBox2);
    setVideoBoxIconLeft(videoBoxLeft2);
    setVideocontent(videocontent2);
    setVideoBoxIconRight(videoBoxRight2);
  };


  return (
    <Box>
   
      <Box sx={{ display: "flex" }}>
        <CssBaseline />

        <Drawer
          variant="permanent"
          open={open}
          sx={{
            position: "sticky",
            top: "50px",
            left: "0",
            zIndex: 1300,
            "& .MuiDrawer-paper": {
              overflow: "none",
              position: "fixed",
              top: "50px",
              left: "0",
              borderRight: "2px solid #ddd",
            },
          }}
        >
          <Box>
            <Box className="drawer_items">
              {/* Dashboard Icon */}
              <Box>
                <IconButton onClick={() => handleDrawerOpen(1)}>
                  <WindowIcon
                    sx={{ fontSize: "28px", margin: "5px 0px", color: "#fff" }}
                  />
                </IconButton>
              </Box>
              {/* Font Download Icon */}
              <Box>
                <IconButton onClick={()=>handleDrawerOpenFontDownloadIcon(2)}>
                  <FontDownloadIcon
                    sx={{ fontSize: "28px", margin: "5px 0px", color: "#fff" }}
                  />
                </IconButton>
              </Box>
              {/* Image Icon  */}
              <Box>
                <IconButton>
                  <ImageIcon
                    sx={{ fontSize: "28px", margin: "5px 0px", color: "#fff" }}
                    onClick={handleDrawerOpenImageIcon}
                  />
                </IconButton>
              </Box>
              {/* VolumeUp Icon  */}
              <Box>
                <IconButton>
                  <VolumeUpIcon
                    sx={{ fontSize: "28px", margin: "5px 0px", color: "#fff" }}
                    onClick={handleDrawerOpenVolumeUpIcon}
                  />
                </IconButton>
              </Box>
              {/* Videocam Icon  */}
              <Box>
                <IconButton>
                  <VideocamIcon
                    sx={{ fontSize: "28px", margin: "5px 0px", color: "#fff" }}
                    onClick={handleDrawerOpenVideocamIcon}
                  />
                </IconButton>
              </Box>
              {/* Delete Icon  */}
              <Box>
                <IconButton>
                  <DeleteIcon
                    sx={{ fontSize: "28px", margin: "5px 0px", color: "#fff" }}
                    onClick={handleDrawerOpenDeleteIcon}
                  />
                </IconButton>
              </Box>
              {/* List Icon  */}
              <Box>
                <IconButton>
                  <ListIcon
                    sx={{ fontSize: "28px", margin: "5px 0px", color: "#fff" }}
                    onClick={handleDrawerOpenListIcon}
                  />
                </IconButton>
              </Box>
              {/* Send Icon  */}
              <Box>
                <IconButton>
                  <SendIcon
                    sx={{ fontSize: "28px", margin: "5px 0px", color: "#fff" }}
                    onClick={handleDrawerOpenSendIcon}
                  />
                </IconButton>
              </Box>
              {/* Camera Icon  */}
              <Box>
                <IconButton>
                  <CameraAltIcon
                    sx={{ fontSize: "28px", margin: "5px 0px", color: "#fff" }}
                    onClick={handleDrawerOpenCameraAltIcon}
                  />
                </IconButton>
              </Box>
              {/* PermMedia Icon  */}
              <Box>
                <IconButton>
                  <PermMediaIcon
                    sx={{ fontSize: "28px", margin: "5px 0px", color: "#fff" }}
                    onClick={handleDrawerOpenPermMediaIcon}
                  />
                </IconButton>
              </Box>
              {/* SwapHorizontalCircle Icon  */}
              <Box>
                <IconButton>
                  <SwapHorizontalCircleIcon
                    sx={{ fontSize: "28px", margin: "5px 0px", color: "#fff" }}
                    onClick={handleDrawerOpenSwapHorizontalCircleIcon}
                  />
                </IconButton>
              </Box>
            </Box>

            <DrawerContent
           
              activeContent={activeContent}
              handleDrawerClose={handleDrawerClose}
            />
          </Box>
        </Drawer>

        <Box className="main_content">
          <Box className="video_content" style={videoBoxs}>
            <Box className="left_video_icon_box" style={videoBoxIconLeft}>
              <LayersIcon sx={{ fontSize: "20px", color: "#121A5E" }} />
            </Box>
            <Box
              className="video_box"
              style={{ ...videocontents, backgroundColor: videoBoxColor }}
            ></Box>
            <Box className="right_video_icon_box" style={videoBoxIconRight}>
              <FullscreenIcon sx={{ fontSize: "20px", color: "#121A5E" }} />
            </Box>
          </Box>
          <Box
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {" "}
              <SkipPreviousIcon sx={{ color: "#121A5E" }} />
            </Box>
            <Box
              sx={{
                height: "25px",
                width: "25px",
                borderRadius: "100%",
                bgcolor: "#121A5E",
                margin: "8px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <PlayArrowIcon sx={{ fontSize: "16px", color: "#fff" }} />
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {" "}
              <SkipNextIcon sx={{ color: "#121A5E" }} />
            </Box>
          </Box>
          <Box
            sx={{
              height: "30px",
              width: "100%",
              bgcolor: "#6874dd",
              padding: "5px",
            }}
          >
            <Typography
              variant="span"
              sx={{ color: "#fff", fontSize: "14px", fontWeight: "bold" }}
            >
              {" "}
              Layout{" "}
            </Typography>{" "}
            <Typography variant="span" sx={{ color: "#fff", fontSize: "14px" }}>
              {" "}
              "Untitled 2025-02-01 12:43:21"
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

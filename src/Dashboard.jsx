import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
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

export default function MiniDrawer({videoBoxColor}) {
  const [activeContent, setActiveContent] = React.useState("");
  const [open, setOpen] = React.useState(false);

  const videoBox = {
    width: "100%",
    height: " 80%",
  };
  const videoBox2 = {
    width: "85%",
    height: " 100%",
  };
  const [videoBoxs, setVideoBox] = React.useState();

  const handleDrawerOpen = () => {
    if (open) {
      setOpen(false);
      setActiveContent("none");
      setVideoBox(videoBox2);
    } else {
      setOpen(true);
      setActiveContent("dashboard");
      setVideoBox(videoBox);
    }
  };

  const handleDrawerOpenFontDownloadIcon = () => {
    if (open) {
      setOpen(false);
      setActiveContent("none");
      setVideoBox(videoBox2);
    } else {
      setOpen(true);
      setActiveContent("fontDownload");
      setVideoBox(videoBox);
    }
  };

  const handleDrawerOpenImageIcon = () => {
    if (open) {
      setOpen(false);
      setActiveContent("none");
      setVideoBox(videoBox2);
    } else {
      setOpen(true);
      setActiveContent("Image");
      setVideoBox(videoBox);
    }
  };
  const handleDrawerOpenVolumeUpIcon = () => {
    if (open) {
      setOpen(false);
      setActiveContent("none");
      setVideoBox(videoBox2);
    } else {
      setOpen(true);
      setActiveContent("VolumeUp");
      setVideoBox(videoBox);
    }
  };
  const handleDrawerOpenVideocamIcon = () => {
    if (open) {
      setOpen(false);
      setActiveContent("none");
      setVideoBox(videoBox2);
    } else {
      setOpen(true);
      setActiveContent("Videocam");
      setVideoBox(videoBox);
    }
  };

  const handleDrawerOpenDeleteIcon = () => {
    if (open) {
      setOpen(false);
      setActiveContent("none");
      setVideoBox(videoBox2);
    } else {
      setOpen(true);
      setActiveContent("Delete");
      setVideoBox(videoBox);
    }
  };
  const handleDrawerOpenListIcon = () => {
    if (open) {
      setOpen(false);
      setActiveContent("none");
      setVideoBox(videoBox2);
    } else {
      setOpen(true);
      setActiveContent("List");
      setVideoBox(videoBox);
    }
  };
  const handleDrawerOpenSendIcon = () => {
    if (open) {
      setOpen(false);
      setActiveContent("none");
      setVideoBox(videoBox2);
    } else {
      setOpen(true);
      setActiveContent("Send");
      setVideoBox(videoBox);
    }
  };

  const handleDrawerOpenPermMediaIcon = () => {
    if (open) {
      setOpen(false);
      setActiveContent("none");
      setVideoBox(videoBox2);
    } else {
      setOpen(true);
      setActiveContent("CameraAlt");
      setVideoBox(videoBox);
    }
  };

  const handleDrawerOpenCameraAltIcon = () => {
    if (open) {
      setOpen(false);
      setActiveContent("none");
      setVideoBox(videoBox2);
    } else {
      setOpen(true);
      setActiveContent("PermMedia");
      setVideoBox(videoBox);
    }
  };

  const handleDrawerOpenSwapHorizontalCircleIcon = () => {
    if (open) {
      setOpen(false);
      setActiveContent("none");
      setVideoBox(videoBox2);
    } else {
      setOpen(true);
      setActiveContent("SwapHorizontalCirclen");
      setVideoBox(videoBox);
    }
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />

        <Drawer variant="permanent" open={open}>
          {/* Dashboard Icon */}
          <Box>
            <IconButton onClick={handleDrawerOpen}>
              <WindowIcon sx={{ fontSize: "28px", margin: "5px 0px" }} />
            </IconButton>
            <Box
              className={`dashboard_box ${activeContent === "dashboard" ? "show" : "hide"}`}
            >
              Dashboard
            </Box>
          </Box>
          {/* Font Download Icon */}
          <Box>
            <IconButton onClick={handleDrawerOpenFontDownloadIcon}>
              <FontDownloadIcon sx={{ fontSize: "28px", margin: "5px 0px" }} />
            </IconButton>
            <Box
              className={`FontDownloadIcon_box ${activeContent === "fontDownload" ? "show" : "hide"}`}
            >
              fontDownload
            </Box>
          </Box>
          {/* Image Icon  */}
          <Box>
            <IconButton>
              <ImageIcon
                sx={{ fontSize: "28px", margin: "5px 0px" }}
                onClick={handleDrawerOpenImageIcon}
              />
            </IconButton>
            <Box
              className={`Image_box ${activeContent === "Image" ? "show" : "hide"}`}
            >
              Image
            </Box>
          </Box>
          {/* VolumeUp Icon  */}
          <Box>
            <IconButton>
              <VolumeUpIcon
                sx={{ fontSize: "28px", margin: "5px 0px" }}
                onClick={handleDrawerOpenVolumeUpIcon}
              />
            </IconButton>
            <Box
              className={`VolumeUp_box ${activeContent === "VolumeUp" ? "show" : "hide"}`}
            >
              VolumeUp
            </Box>
          </Box>
          {/* Videocam Icon  */}
          <Box>
            <IconButton>
              <VideocamIcon
                sx={{ fontSize: "28px", margin: "5px 0px" }}
                onClick={handleDrawerOpenVideocamIcon}
              />
            </IconButton>
            <Box
              className={`Videocam_box ${activeContent === "Videocam" ? "show" : "hide"}`}
            >
              Videocam
            </Box>
          </Box>
          {/* Delete Icon  */}
          <Box>
            <IconButton>
              <DeleteIcon
                sx={{ fontSize: "28px", margin: "5px 0px" }}
                onClick={handleDrawerOpenDeleteIcon}
              />
            </IconButton>
            <Box
              className={`Delete_box ${activeContent === "Delete" ? "show" : "hide"}`}
            >
              Delete
            </Box>
          </Box>
          {/* List Icon  */}
          <Box>
            <IconButton>
              <ListIcon
                sx={{ fontSize: "28px", margin: "5px 0px" }}
                onClick={handleDrawerOpenListIcon}
              />
            </IconButton>
            <Box
              className={`List_box ${activeContent === "List" ? "show" : "hide"}`}
            >
              List
            </Box>
          </Box>
          {/* Send Icon  */}
          <Box>
            <IconButton>
              <SendIcon
                sx={{ fontSize: "28px", margin: "5px 0px" }}
                onClick={handleDrawerOpenSendIcon}
              />
            </IconButton>
            <Box
              className={`Send_box ${activeContent === "Send" ? "show" : "hide"}`}
            >
              Send
            </Box>
          </Box>
          {/* Camera Icon  */}
          <Box>
            <IconButton>
              <CameraAltIcon
                sx={{ fontSize: "28px", margin: "5px 0px" }}
                onClick={handleDrawerOpenCameraAltIcon}
              />
            </IconButton>
            <Box
              className={`CameraAlt_box ${activeContent === "CameraAlt" ? "show" : "hide"}`}
            >
              CameraAlt
            </Box>
          </Box>
          {/* PermMedia Icon  */}
          <Box>
            <IconButton>
              <PermMediaIcon
                sx={{ fontSize: "28px", margin: "5px 0px" }}
                onClick={handleDrawerOpenPermMediaIcon}
              />
            </IconButton>
            <Box
              className={`PermMedia_box ${activeContent === "PermMedia" ? "show" : "hide"}`}
            >
              PermMedia
            </Box>
          </Box>
          {/* SwapHorizontalCircle Icon  */}
          <Box>
            <IconButton>
              <SwapHorizontalCircleIcon
                sx={{ fontSize: "28px", margin: "5px 0px" }}
                onClick={handleDrawerOpenSwapHorizontalCircleIcon}
              />
            </IconButton>
            <Box
              className={`SwapHorizontalCirclen_box ${activeContent === "SwapHorizontalCirclen" ? "show" : "hide"}`}
            >
              SwapHorizontalCirclen
            </Box>
          </Box>
        </Drawer>

        <Box className="main_content">
          <Box className="video_box"   style={{...videoBoxs,backgroundColor:videoBoxColor}}>
           
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

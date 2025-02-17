import React, { useEffect, useState } from "react";
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

import CurrentComponent from "./components/CurrentComponent";

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

export default function MiniDrawer({
  image,
  setImage,
  color,
  setColor,
  videoBoxColor,
  setCurrentComponent,
  current_component,
  components = { components },
  setComponents = { setComponents },
}) {
  const [activeContent, setActiveContent] = useState("");
  const [open, setOpen] = useState(false);

  const [left, setLeft] = useState("");
  const [top, setTop] = useState("");

  const [width, setWidth] = useState("");
  const [height, setHeight] = useState("");

  const [rotate, setRotate] = useState(0);

  const videoBox = {
    // flexDirection: "column",
  };
  const videoBox2 = {
    // flexDirection: "row",
  };

  const videocontent = {
    // height: "60vh",
    // order: 2,
  };
  const videocontent2 = {
    // height: "70vh",
    // order: 2,
  };

  const videoBoxLeft = {
    // width: "100%",
    // order: 3,
  };
  const videoBoxRight = {
    // width: "100%",
    // order: 1,
  };

  const videoBoxLeft2 = {
    // width: "10%",
    // order: 1,
  };
  const videoBoxRight2 = {
    // width: "10%",
    // order: 3,
  };
  const [videoBoxs, setVideoBox] = useState();
  const [videoBoxIconLeft, setVideoBoxIconLeft] = useState();
  const [videocontents, setVideocontent] = useState();
  const [videoBoxIconRight, setVideoBoxIconRight] = useState();

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

  const moveElement = (id, currentInfo) => {
    setCurrentComponent(currentInfo);
    let isMoving = true;

    const currentdiv = document.getElementById(id);

    const mouseMove = ({ movementX, movementY }) => {
      const getStyle = window.getComputedStyle(currentdiv);
      const left = parseInt(getStyle.left);

      const top = parseInt(getStyle.top);

      if (isMoving) {
        currentdiv.style.left = `${left + movementX}px`;
        currentdiv.style.top = `${top + movementY}px`;
      }
    };
    const mouseUp = (e) => {
      isMoving = false;

      window.removeEventListener("mousemove", mouseMove);
      window.removeEventListener("mouseup", mouseUp);
      setLeft(parseInt(currentdiv.style.left));
      setTop(parseInt(currentdiv.style.top));
    };

    window.addEventListener("mousemove", mouseMove);
    window.addEventListener("mouseup", mouseUp);
  };

  const resizeElement = (id, currentInfo) => {
    setCurrentComponent(currentInfo);
    let isMoving = true;

    const currentdiv = document.getElementById(id);

    const mouseMove = ({ movementX, movementY }) => {
      const getStyle = window.getComputedStyle(currentdiv);

      const width = parseInt(getStyle.width);
      const height = parseInt(getStyle.height);

      if (isMoving) {
        currentdiv.style.width = `${width + movementX}px`;
        currentdiv.style.height = `${height + movementY}px`;
      }
    };
    const mouseUp = (e) => {
      isMoving = false;

      window.removeEventListener("mousemove", mouseMove);
      window.removeEventListener("mouseup", mouseUp);
      setWidth(parseInt(currentdiv.style.width));
      setHeight(parseInt(currentdiv.style.height));
    };

    window.addEventListener("mousemove", mouseMove);
    window.addEventListener("mouseup", mouseUp);
  };

  const rotateElement = (id, cinfo) => {
    console.log(cinfo);
  };

  const removeComponent = (id) => {
    const temp = components.filter((c) => c.id !== id);
    setCurrentComponent("");
    setComponents(temp);
  };

  const createShape = (name, type) => {
    const style = {
      id: components.length + 1,
      name: name,
      type,
      left: 20,
      top: 20,
      opacity: 1,
      width: 150,
      height: 100,
      rotate,
      z_index: 2,
      color: "#000000",
      borderRadius: 100,
      setCurrentComponent: (a) => setCurrentComponent(a),
      moveElement,
      resizeElement,
      rotateElement,
      remove_background: () => setImage(""),
    };
    setComponents([...components, style]);
  };

  useEffect(() => {
    if (current_component) {
      const index = components.findIndex((c) => c.id === current_component.id);

      const temp = components.filter((c) => c.id !== current_component.id);

      if (current_component.name !== "text") {
        components[index].width = width || current_component.width;
        components[index].height = height || current_component.height;
      }

      if (current_component.name === "main_frame" && image) {
        components[index].image = image || current_component.image;
      }
      components[index].color = color || current_component.color;

      if (current_component.name !== "main_frame") {
        components[index].left = left || current_component.left;
        components[index].top = top || current_component.top;
      }
      setComponents([...temp, components[index]]);

      setWidth("");
      setHeight("");
      setTop("");
      setLeft("");
      // setColor('')
      // setImage('')
    }
  }, [color, image, left, top, width, height]);

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
                <IconButton onClick={() => handleDrawerOpenFontDownloadIcon(2)}>
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
              setImage={setImage}
              createShape={createShape}
              activeContent={activeContent}
              handleDrawerClose={handleDrawerClose}
            />
          </Box>
        </Drawer>
        <Box
          sx={{
            width: "100%",
            height: "90vh",
            background: "#676363",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-end",
            alignItems: "center",
          }}
        >
          <Box className="main_content">
            {components.map((c, i) => (
              <CurrentComponent
                componentColor={color}
                key={i}
                info={c}
                current_component={current_component}
                removeComponent={removeComponent}
                videocontents={videocontents}
                videoBoxColor={videoBoxColor}
              />
            ))}
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
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              bgcolor: "#6874dd",
              padding: "5px",
              margin: "10px",
            }}
          >
            <Box>
              <Typography
                variant="span"
                sx={{ color: "#fff", fontSize: "14px", fontWeight: "bold" }}
              >
                {" "}
                Layout{" "}
              </Typography>{" "}
              <Typography
                variant="span"
                sx={{ color: "#fff", fontSize: "14px" }}
              >
                {" "}
                "Untitled 2025-02-01 12:43:21"
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                gap: "10px",
              }}
            >
              <Box className="">
                <LayersIcon sx={{ fontSize: "20px", color: "#fff" }} />
              </Box>
              <Box className="">
                <FullscreenIcon sx={{ fontSize: "20px", color: "#fff" }} />
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

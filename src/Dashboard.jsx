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
import FormatAlignJustifyIcon from '@mui/icons-material/FormatAlignJustify';
import FullscreenExitIcon from '@mui/icons-material/FullscreenExit';
import FullscreenIcon from '@mui/icons-material/Fullscreen';
import LayersIcon from '@mui/icons-material/Layers';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';

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
  const [isSidebarMenuOpen, setIsSidebarMenuOpen] = React.useState(false);


  const videoBox = {
    flexDirection: 'column'
  };
  const videoBox2 = {
    flexDirection: 'row'
  };



  const videocontent = {
    height: '62vh',
    order:2
  };
  const videocontent2 = {
    height: '70vh',
    order:2
  };

  const videoBoxLeft = {
    width:'100%',
    order:3
  };
  const videoBoxRight = {
    width:'100%',
    order:1
  };  


  const videoBoxLeft2 = {
    width:'10%',
    order:1
  };
  const videoBoxRight2 = {
    width:'10%',
    order:3
  };  
  const [videoBoxs, setVideoBox] = React.useState();
  const [videoBoxIconLeft, setVideoBoxIconLeft] = React.useState();
  const [videocontents, setVideocontent] = React.useState();
  const [videoBoxIconRight, setVideoBoxIconRight] = React.useState();
  const handleDrawerOpen = () => {
    if (open) {
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
    if (open) {
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
    if (open) {
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
    if (open) {
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
    if (open) {
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
    if (open) {
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
    if (open) {
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
    if (open) {
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
    if (open) {
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
    if (open) {
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
    if (open) {
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
  };


  const handleCollapseClickSecond = () => {
    if (isSidebarMenuOpen) {

         setIsSidebarMenuOpen(false);
    } else {

        setIsSidebarMenuOpen(true);
    }
};
  return (
    <Box>
    <Box>
       <Box sx={{position:'fixed',bottom:'10px',left:'5px',zIndex:'9999'}}>
      <Box onClick={handleCollapseClickSecond} sx={{background:'#121A5E',height:'40px', width:'40px',borderRadius:'5px',display:'flex',justifyContent:'center',alignItems:'center'}}>
        <IconButton>
        <FormatAlignJustifyIcon sx={{color:"#fff",fontSize:'25px'}}/> 
        </IconButton>
      </Box>

      
    </Box>
    {isSidebarMenuOpen ? (
                                   <Box sx={{position:'fixed',bottom:'10px',left:'50px',zIndex:'9999'}}>
                                   <Box sx={{background:'#121A5E',height:'80px', width:'40px',borderRadius:'5px',display:'flex', flexDirection:'column', justifyContent:'center',alignItems:'center'}}>
                                     <IconButton>
                                     <FormatAlignJustifyIcon sx={{color:"#fff",fontSize:'25px'}}/> 
                                     </IconButton>
                                     <IconButton>
                                     <FormatAlignJustifyIcon sx={{color:"#fff",fontSize:'25px'}}/> 
                                     </IconButton>
                                   </Box>
                                   </Box>      
                                    ) : (
                                        <Box></Box>
                                    )}
  
      </Box>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />

        <Drawer
         variant="permanent" open={open} 
        
        >
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
          <Box className='video_content' style={videoBoxs}>
          <Box className='left_video_icon_box' style={videoBoxIconLeft}><LayersIcon sx={{fontSize:"20px",color:'#121A5E'}}/></Box>
          <Box className="video_box" style={{...videocontents,backgroundColor:videoBoxColor}}></Box>
          <Box className='right_video_icon_box' style={videoBoxIconRight}><FullscreenIcon sx={{fontSize:"20px",color:'#121A5E'}}/></Box>
          </Box>
          <Box sx={{height:'30px',width:'100%',bgcolor:'gray',padding:'5px'}}>
         <Typography  variant='span' sx={{color:'#fff',fontSize:'14px',fontWeight:'bold'}}> Layout  </Typography> <Typography variant='span' sx={{color:'#fff',fontSize:'14px'}}> "Untitled 2025-02-01 12:43:21"</Typography>
          </Box>
          <Box sx={{height:'15px',width:'15px',borderRadius:'100%',bgcolor:'#121A5E',margin:'8px 20px',display:'flex',justifyContent:'center',alignItems:'center'}}><PlayArrowIcon sx={{fontSize:"14px",color:'#fff'}}/></Box>
        </Box>
      </Box>
    </Box>
  );
}

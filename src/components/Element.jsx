import { Box } from "@mui/material";
import React from "react";

const Element = ({ id, info, exId }) => {
   
  return (
    <div>
      {exId ? 
        <>
         <Box onMouseDown={()=>info.resizeElement(exId,info)} className="hidden group-hover:block absolute -top-[3px] -right-[3px] w-[10px] h-[10px] cursor-nwse-resize bg-[#1068d2] z-[99999]"></Box>
         <Box onMouseDown={()=>info.resizeElement(exId,info)} className="hidden group-hover:block absolute -bottom-[3px] -left-[3px] w-[10px] h-[10px] cursor-nwse-resize bg-[#1068d2] z-[99999]"></Box>
         <Box onMouseDown={()=>info.resizeElement(exId,info)}  className="hidden group-hover:block absolute -bottom-[3px] -right-[3px] w-[10px] h-[10px] cursor-nwse-resize bg-[#1068d2] z-[99999]"></Box>
         </>
      : 
        <>
        
        <Box onMouseDown={()=>info.resizeElement(id,info)} className="hidden group-hover:block absolute -top-[3px] -right-[3px] w-[10px] h-[10px] cursor-nwse-resize bg-[#1068d2] z-[99999]"></Box>
        <Box onMouseDown={()=>info.resizeElement(id,info)} className="hidden group-hover:block absolute -bottom-[3px] -left-[3px] w-[10px] h-[10px] cursor-nwse-resize bg-[#1068d2] z-[99999]"></Box>
        <Box onMouseDown={()=>info.resizeElement(id,info)}  className="hidden group-hover:block absolute -bottom-[3px] -right-[3px] w-[10px] h-[10px] cursor-nwse-resize bg-[#1068d2] z-[99999]"></Box>
        </>
      
      
      }
       <Box onMouseDown={()=>info.rotateElement(exId,info)} className="hidden group-hover:block absolute -top-[3px] -left-[3px] w-[10px] h-[10px] cursor-nwse-resize bg-[#1068d2] z-[99999]"></Box>
    
    
      <Box onMouseDown={()=>info.moveElement(id,info)} className="hidden group-hover:block absolute -top-[3px] left-[50%] translate-[-50%,0%] w-[8px] h-[8px] cursor-nwse-resize bg-[#1068d2] z-[99999]"></Box>
        <Box onMouseDown={()=>info.moveElement(id,info)} className="hidden group-hover:block absolute -bottom-[3px] left-[50%] w-[8px] h-[8px] cursor-nwse-resize bg-[#1068d2] z-[99999]"></Box>
        <Box onMouseDown={()=>info.moveElement(id,info)} className="hidden group-hover:block absolute -left-[3px] top-[50%] w-[8px] h-[8px] cursor-nwse-resize bg-[#1068d2] z-[99999]"></Box>
        <Box onMouseDown={()=>info.moveElement(id,info)} className="hidden group-hover:block absolute -right-[3px] top-[50%] w-[8px] h-[8px] cursor-nwse-resize bg-[#1068d2] z-[99999]"></Box>
    </div>
  );
};

export default Element;

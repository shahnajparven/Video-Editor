import './Home.css';
import Header from '../src/header/Header';
import Dashboard from '../src/Dashboard';
import RightComponent from './RightComponent';
import { Box } from '@mui/material';
import { useState } from 'react';


function Home() {
  const [color, setColor] = useState("#000000"); 
  const [hexColor, setHexColor] = useState("#000000");
  const [showPicker, setShowPicker] = useState(false); 

  const handleColorChange = (color) => {
    setColor(color.hex); 
    setHexColor(color.hex);
  };
  const showSketchPicker = ()=>{
    setShowPicker(!showPicker);
  }
  return (
    <>
    <Header/>
    <Box  sx={{
            width: "100%",
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "center",
          }}>
      <Box width={'75%'}>
    <Dashboard videoBoxColor={color}/>
    </Box>
    <Box  width={'25%'}>
    <RightComponent color={color} hexColor={hexColor} showSketchPicker={showSketchPicker} handleColorChange={handleColorChange} showPicker={showPicker}/>
    </Box>

   
    </Box>
    </>
  )
}
export default Home;
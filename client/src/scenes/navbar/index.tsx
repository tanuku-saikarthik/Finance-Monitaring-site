import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Box , Typography, useTheme } from '@mui/material'
import FlexBetween from '../../components/FlexBetween'
import PixIcon from '@mui/icons-material/Pix';

type Props = {}

const NavBar = (props: Props) => {
    const {palette} = useTheme()
    const [selected, setSelected] = useState("dashboard");
  return (
    <FlexBetween mb = "0.25rem"  p = "0.5 rem 0rem" color={palette.grey[300]}>
    <FlexBetween gap="0.7rem">
<PixIcon sx={{fontSize:"25px"}}/>
<Typography variant = "h4" fontSize= "16px" >
    Finaceer
</Typography>
    </FlexBetween>
<FlexBetween gap = "2rem">
    <Box sx = {{"&:hover":{color:palette.primary[100]}}}>
    <Link to="/dashboard" onClick={() =>{
        setSelected("dashboard");
    }} style={{
        color:selected === "dashboard" ? "inherit": palette.grey[700],
        textDecoration: "none",
    }}>
    Dashboard</Link>
    </Box>
    <Box sx = {{"&:hover":{color:palette.primary[100]}}}>
        <Link to="/predictions" onClick={() =>{
        setSelected("predictions");
    }}  style={{
        color:selected === "predictions" ? "inherit": palette.grey[700],
        textDecoration: "none",
    }}>
    Predictions</Link></Box>
</FlexBetween>
    
    </FlexBetween>
  )
}

export default NavBar
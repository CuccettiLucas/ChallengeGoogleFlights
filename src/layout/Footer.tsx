import React from "react";
import {Box, Typography } from '@mui/material'

const Footer = () =>{
    return(
        <Box 
        component="section" 
        sx={{
            width: '100%',
            minHeight:"10vh",
            display:"flex",
            justifyContent:"center",
            alignItems:"center"
        }}
        >
            <div style={{width:"100%",border:"0.5px solid #9aa0a6"}}></div>
        </Box>
    );
}

export default Footer;
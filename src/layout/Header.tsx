import React from "react";
import {Box, Typography } from '@mui/material'

const Header = () =>{
    return(
        <Box 
        component="section" 
        sx={{
            height: '30vh',
            backgroundImage:`url("https://www.gstatic.com/travel-frontend/animation/hero/flights_nc_dark_theme_4.svg")`,
            backgroundPosition:"center",
            backgroundRepeat:"no-repeat",
            backgroundSize:"cover",
            display:"flex",
            justifyContent:"center",
            alignItems:"center",
            position: "relative",
            top: "0",
            width: "120%",
            left: "-100px",
            '@media (max-width:600px)': {
                width: "100%",
                left: "0",
                backgroundPosition:"44%",
            },
            }}
        >
            <Typography 
                variant='h4' 
                component="h3" 
                gutterBottom 
                sx={
                    {
                        color:"#fff", 
                        fontWeight:"300",
                        position: "absolute",
                        top: "75%",
                        fontSize: "2em"
                    }
                }
            >
            Vuelos
            </Typography>
        </Box>
    );
}

export default Header;
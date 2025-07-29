import React from "react";
import { Box,List, ListItem, ListItemAvatar,Avatar, ListItemText, Typography } from "@mui/material";
import type { Result } from "../types/Global";

interface Fly{
    fly:Result;
    key:number;
}

const Fly = ({fly,key}:Fly) =>{

    
    function formatHour(dateString: string): string {
        const date = new Date(dateString);
        return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false});
    }


    return(
        <List
            key={key}
            sx={{
                width: "100%",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-start",
                borderRadius: 2,
                p: 1,
                border:"1px solid #fff",
                margin:"10px 0",
                '@media (max-width:600px)': {
                    flexFlow:"wrap",

                },
            }}
        >
            <ListItem
                sx={{
                    width: "40%",
                    display: "flex",
                    justifyContent:"flex-start",
                    alignItems: "flex-start",
                    '@media (max-width:600px)': {
                        width: "100%",
                        justifyContent:"flex-start",                 
                    },
                }}
            >
                <ListItemAvatar
                    sx={{ 
                        width:"20%",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "flex-start",
                        '@media (max-width:600px)': {
                            width: "auto",
                            justifyContent: "flex-start",                      
                        },
                    }}
                >
                    <Avatar 
                        src={fly.icon}
                        alt="Aerolineas"
                        sx={{ width: "fit-content"}}
                    />
                </ListItemAvatar>
                <Box
                    component={"div"}
                    sx={{
                        width: "auto",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "flex-start",
                        '@media (max-width:600px)': {
                            width: "60%",                        
                        },
                    }}
                >
                    <Typography sx={{ fontSize: '1rem', fontWeight: '500', color:"#fff" }}>
                        {formatHour(fly.departure)} - {formatHour(fly.arrival)}
                    </Typography>
                    <Typography sx={{ fontSize: '0.8rem', fontWeight: '500', color:"#9aa0a6" }}>
                        {fly.airline}
                    </Typography>
                </Box>
            </ListItem>
            <ListItem sx={{width: "20%",'@media (max-width:600px)': {width: "auto"}}}>
                <ListItemText primary={fly.duration} />
            </ListItem>
            <ListItem sx={{width: "20%",'@media (max-width:600px)': {width: "auto"}}}>
                <ListItemText primary={fly.type} />
            </ListItem>
            <ListItem sx={{width: "20%",'@media (max-width:600px)': {width: "auto"}}}>
                <Typography variant="h6" color="#fff" sx={{fontWeight:"500", fontSize:"1rem"}}>
                    ARG${fly.price}
                </Typography>
            </ListItem>
        </List>
    );
}

export default Fly;
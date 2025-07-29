import { Box, Typography } from "@mui/material";
import type { SearchFlightsDto, Result } from "../types/Global";
import Fly from "./Fly";

interface ResultProps{
    getFlightsDto:SearchFlightsDto;
}

export default function Result ({getFlightsDto}:ResultProps){

    const Flights = getFlightsDto;
    return(
        <Box sx={{margin:"40px 0"}}>
            {
                Array.isArray(Flights)&&
                Flights.length > 0 ?
                    Flights.map((f,key)=>(
                        <div key={key}>
                            {f.results.map((r:Result,i:number)=>(
                                <Fly 
                                    key={i}
                                    fly={r}
                                />
                            ))}
                        </div>
                    ))
                :
                <Box component={"div"} sx={{width:"100%", display:"flex", justifyContent:"center"}}>
                    <Typography variant="h2" sx={{ padding:"10px 30px 0", textAlign:"center",fontSize: '1.2rem', fontWeight: '500', color:"#fff" }}> No se encontraron vuelos disponibles</Typography>
                </Box>
            }
        </Box>
    );
}
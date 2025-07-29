import React, { useMemo, useState} from "react";
import { Box,Button } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import Origen from "../components/Origen";
import Destino from "../components/Destino";
import DateRange from "../components/DateRange";
import Result from "../components/Result";
import type  { GetFlightsDto, SearchFlightsDto } from "../types/Global";
import useGetFlights from "../hooks/useGetFlights";

const Body = () =>{
    const {GetFlights} = useGetFlights();
    const [getFlightsDto, setGetFlightsDto] = React.useState<GetFlightsDto>({
        origin: "", 
        destination: "", 
        date: ""
    });
    const [Flights, setFlights] = useState<SearchFlightsDto>({
      origin: "", 
      destination: "", 
      date: "",
      results:[]
    });

    const memoFlightsDto = useMemo(() => Flights,[Flights]);

    const handleGetFlights = () =>{
      const fetchGetFlights = async ()=>{
            const response = await GetFlights(getFlightsDto);
            if(response){
                setFlights(response);
            }
        }
        if(getFlightsDto.origin != "" && getFlightsDto.destination != "" && getFlightsDto.date != ""){
            fetchGetFlights();
        }else{
            alert("Debe completar los datos obligatorios.");
        }  
    }

    return(
      <Box component="section" 
          sx={{ bgcolor: '#202124', minHeight: '60vh', width:"100%"}} 
          py={5} 
          px={3}
        >
          <Box 
            sx={{
              background:"rgb(32,33,36)",
              boxShadow:"0 1px 3px 0 rgba(0,0,0,.3),0 4px 8px 3px rgba(0,0,0,.15)",
              borderRadius:"7px",
              p:"10px",
              display:"flex",
              justifyContent:"flex-start",
              flexFlow:"wrap",
              gap:"1%",
              '@media (max-width:600px)': {
                justifyContent:"center",
                flexFlow:"column",
                alignItems:"center"
              },
            }}
          >
            <Origen setGetFlightsDto={setGetFlightsDto}/>
            <Destino setGetFlightsDto={setGetFlightsDto}/>
            <DateRange setGetFlightsDto={setGetFlightsDto}/>
            <Box 
              component={"div"}
              sx={{
                width:"100%",
                display:"flex",
                justifyContent:"center",
                gap:"1%"
              }}
            >
              <Button 
                sx={{
                  position:"relative",
                  top:"25px",
                  borderRadius:"20px"
                }}
                variant="custom"
                startIcon={<SearchIcon />}
                onClick={handleGetFlights}
              >
                Buscar
              </Button>
            </Box>
          </Box>
          <Box>
            <Result getFlightsDto={memoFlightsDto}/>
          </Box>
      </Box>
    );
}
export default Body;
import React, { useEffect, useState, type Dispatch } from "react";
import {Autocomplete, TextField, Box} from '@mui/material';
import useGetAirport from "../hooks/useGetAirport";
import type { Airport, GetFlightsDto } from "../types/Global";

interface OrigenProps{
    setGetFlightsDto: React.Dispatch<React.SetStateAction<GetFlightsDto>>;
}

const Origen:React.FC<OrigenProps> = ({setGetFlightsDto}) =>{
    const [data,setData] = useState<any[]>([]);
    const {GetAirport,Error} = useGetAirport();
    const [error, setError] =useState<string | null>(null);
    const [selected, setSelected] = useState<Airport>({
            id: "",
            name: "",
            city: "",
            country: ""
    });

    useEffect(() => {
        const fetchAirports = async() =>{
            const response = await GetAirport();
            if(response){
                setData(response);
                setError(null);
            }else{
                setError(Error);
                alert(error);
            }
        }
        fetchAirports();
    },[]);

    useEffect(() =>{
        setGetFlightsDto((prev) =>({
            ...prev,
            origin:selected.id
        }));
    },[selected]);
    

    return(
        <Autocomplete
        id="country-select-demo"
        sx={{
            width:"29%",
            '@media (max-width:600px)': {
                width:"100%",
            },
        }}
        options={data}
        autoHighlight
        getOptionLabel={(option) => option.city}
        value={selected}
        onChange={(event, newValue) => {
            setSelected(newValue);
        }}
        renderOption={(props, option) => {
            const { key, ...optionProps } = props;
            return (
            <Box
                key={key}
                component="li"
                sx={{ '& > img': { mr: 2, flexShrink: 0 }}}
                {...optionProps}
            >
                <img
                loading="lazy"
                width="20"
                srcSet={`https://flagcdn.com/w40/${option.country.toLowerCase()}.png 2x`}
                src={`https://flagcdn.com/w20/${option.country.toLowerCase()}.png`}
                alt=""
                />
                {option.city} ({option.country})
            </Box>
            );
        }}
        renderInput={(params) => (
            <TextField
            {...params}
            label="Origen"
            slotProps={{
                htmlInput: {
                ...params.inputProps,
                autoComplete: 'new-password',
                },
            }}
            />
        )}
        />
    );
}

export default Origen;
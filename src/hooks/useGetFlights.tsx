import {useState} from "react";
import axios from "axios";
import api from "../api/axiosConfig.ts";
import type { GetFlightsDto } from "../types/Global.ts";


const useGetFlights = () =>{
    const [Error,setError] = useState<string | null>(null);

    const GetFlights = async ({origin,destination,date}:GetFlightsDto) =>{
        try {
            const response = await api.get("/searchFlights",{
                params:{
                    origin,destination,date
                }
            });
            setError(null);
            return response.data;
        } catch (err) {
            if(axios.isAxiosError(err) && err.response){
                setError(err.response.data.message || "Error al obtener los aeropuertos");
            }else{
                setError("Error inesperado");
            }
            return false;
        }
    }

    return {GetFlights,Error}
}

export default useGetFlights;
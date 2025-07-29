import {useState} from "react";
import axios from "axios";
import api from "../api/axiosConfig.ts";


const useGetAirport = () =>{
    const [Error,setError] = useState<string | null>(null);

    const GetAirport = async () =>{
        try {
            const response = await api.get("/searchAirport",{
                params: {
                    query: 'Mad',
                    locale: 'en-US'
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

    return {GetAirport,Error}
}

export default useGetAirport;
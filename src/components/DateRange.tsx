import React from "react";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import Box from "@mui/material/Box";
import type { GetFlightsDto } from "../types/Global";
import type { Dayjs } from "dayjs";

interface DateProps{
  setGetFlightsDto:React.Dispatch<React.SetStateAction<GetFlightsDto>>
}

const DateRange:React.FC<DateProps> = ({setGetFlightsDto})=>{
  const [departureDate, setDepartureDate] = React.useState<Dayjs | null>(null);
  const [returnDate, setReturnDate] = React.useState<Dayjs | null>(null);

  React.useEffect(() =>{
    if (departureDate) {
      setGetFlightsDto((prev) => ({
        ...prev,
        date: departureDate.format("YYYY-MM-DD"),
      }));
    }
  },[departureDate])

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Box 
        sx={{
            display: "flex", 
            gap: 2, 
            width:"40%",
            '@media (max-width:600px)': {
                width:"100%",
            },
        }}
      >
        <DatePicker
          label="Salida"
          value={departureDate}
          onChange={(newValue) => setDepartureDate(newValue)}
          slotProps={{ textField: { fullWidth: true } }}
        />
        <DatePicker
          label="Regreso"
          value={returnDate}
          onChange={(newValue) => setReturnDate(newValue)}
          slotProps={{ textField: { fullWidth: true } }}
        />
      </Box>
    </LocalizationProvider>
  );
}

export default DateRange;

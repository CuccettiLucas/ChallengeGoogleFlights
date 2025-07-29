export interface Airport{
    id: string;
    name: string;
    city: string;
    country: string;
}

export interface GetFlightsDto{
  origin: string; 
  destination: string; 
  date: string;
}

export interface SearchFlightsDto{
  origin: string; 
  destination: string; 
  date: string;
  results:Result[];
}

export interface Result{
  price: number;
  airline: string;
  departure: string;
  arrival: string;
  duration: string;
  icon:string;
  type:string;
}

/*

"searchFlights": [
    {
      "origin": "MAD",
      "destination": "BCN",
      "date": "2025-08-10",
      "results": [
        {
          "price": 120,
          "airline": "Iberia",
          "departure": "2025-08-10T07:30:00",
          "arrival": "2025-08-10T09:45:00",
          "duration": "2h 15m"
        },
        {
          "price": 90,
          "airline": "Vueling",
          "departure": "2025-08-10T12:00:00",
          "arrival": "2025-08-10T14:10:00",
          "duration": "2h 10m"
        }
      ]
    }
  ]


*/
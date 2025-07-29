import type {IAirport} from "../types/SearchAirport.tsx";

const mockAirportData: IAirport = {
  "status": true,
  "timestamp": 1691008938320,
  "data": [
    {
      "presentation": {
        "title": "New York",
        "suggestionTitle": "New York (Any)",
        "subtitle": "United States"
      },
      "navigation": {
        "entityId": "27537542",
        "entityType": "CITY",
        "localizedName": "New York"
      }
    },
    {
      "presentation": {
        "title": "New York Newark",
        "suggestionTitle": "New York Newark (EWR)",
        "subtitle": "United States"
      },
      "navigation": {
        "entityId": "95565059",
        "entityType": "AIRPORT",
        "localizedName": "New York Newark"
      }
    },
    {
      "presentation": {
        "title": "New York John F. Kennedy",
        "suggestionTitle": "New York John F. Kennedy (JFK)",
        "subtitle": "United States"
      },
      "navigation": {
        "entityId": "95565058",
        "entityType": "AIRPORT",
        "localizedName": "New York John F. Kennedy"
      }
    },
    {
      "presentation": {
        "title": "New York LaGuardia",
        "suggestionTitle": "New York LaGuardia (LGA)",
        "subtitle": "United States"
      },
      "navigation": {
        "entityId": "95565057",
        "entityType": "AIRPORT",
        "localizedName": "New York LaGuardia"
      }
    },
    {
      "presentation": {
        "title": "Stewart International",
        "suggestionTitle": "Stewart International (SWF)",
        "subtitle": "United States"
      },
      "navigation": {
        "entityId": "95566280",
        "entityType": "AIRPORT",
        "localizedName": "Stewart International"
      }
    }
  ]
};


export default mockAirportData;
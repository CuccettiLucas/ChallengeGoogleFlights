# ChallengeGoogleFlights

## Consigna
Please create a responsive version of Google Flights using React and https://rapidapi.com/apiheya/api/sky-scrapper. Then create a 3-4 minute loom demo of the code and share the GitHub.

### Paquetes a utilizar
Es obligatorio el uso de MUI como biblioteca de componentes.

### Persistencia de datos
A fines de facilitar el desarrollo de la aplicación, se creó una API REST utilizando json-server a partir del archivo ```/db.json```. Algunos de los endpoints que se pueden utilizar:

- ``` http://localhost:3000/searchAirport```
- ```http://localhost:3000/searchFlights```

Para más información acerca de json-server, visitar [https://www.npmjs.com/package/json-server](https://www.npmjs.com/package/json-server).

### ¿Cómo ejecutar?
Para iniciar la API REST (json-server) ejecutar ```npm run mock```.

Para inciar la aplicación ejecutar ```npm run dev```.

----------------
## Aclaraciones personales:
La única consigna que recibí en este challenge fue la descripta en el principio de este documento. Uno de los impedimentos que tuve para resolver es que la api con la cual se debía resolver el desafío, tiene un limite muy acotado de iteraciones, si necesitaba hacer mas iteraciones debía contratar un plan pago ( claramente no lo iba a contratar ). Por lo que para la iteracion de la api, basandome en los ejemplos de respuesta de algunos de sus endpoints pude simularlo con json-server. De esta forma pude resolver un flujo sencillo de iteracion con api y el uso de MUI.

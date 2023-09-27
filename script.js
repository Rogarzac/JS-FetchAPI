/*
Retomando las APIs...

    - APIs internas (API DOM, localStorage, Drag and Drop): Son todas aquellas APIs que vienen por default en el navegador.

    - APIs externas (Google Maps, FakeStore API, API PayPal, etc.): Son todas aqullas que tenemos que utilizar de proveedores externos.


    Ejemplo de la licudora, donde la licuadora es el cliente, el enchufe es la API y el recurso que se solicita es la electricidad.


    Ventajas de utilizar APIs

        - Reestructurar y organizar loos sistemas de forma que sean mas sencillos de usar
        - Permiten que los sistemas sean mas robustos
        - Reducen los costos de mantenimiento
        - Permiten que los sistemas sean escalables
*/

/*
Asincronia

Por defecto, JS se comporta de una forma sincrona (de arriba hacia abajo, de izquiera a derecha), es decir.
utilizamos JS de una forma autobloqueante (si hay un error, lo que esta despues de ese error no se ejecuta).



*/
/*
///Ejemplo de una operacion sincronica
console.log("inicia mi operacion sincrona");
function dosSincronica() {
    console.log("Dos");
}

function unoSincronico() {
    console.log("uno");
    dosSincronica();
    console.log("tres");
}

unoSincronico();
console.log("finaliza mi operacion sincrona");
*/

//Los casos donde me conviene tener operaciones sincronas, son (lectura de arrays, uso de algunos metodos de arrays, condicionales, ciclos, ejecucion de funciones, "normales")


/*
Asincronia 
Es la capacidad que tiene JS para poder ejecutar funciones que no dependan de otras. Esto nos ayuda a ejecutar ciertos bloques de codigo sin tener que esperar a que termine su ejecucion., para ejecutar otras lineas de codigo.  (dejar la carne en el asador mientras preparo otras cosas en el ejemplo de la carne asada)
*/
///Ejemplo de JavaScript Asincrono

console.log("Inicia mi operacion ascincronica");
function dosAsync() {
    console.log("uno");
    setTimeout(function () {    /////setTime para ejecutar esta funcion despues de 3 segundos
        console.log("dos");
    }, 3000);
}

function unoAsync() {
    dosAsync();
    console.log("tres");
}

unoAsync();
console.log("Finaliza mi operacion asincronica");

/*
Para controlar la asincronia en JS, podemos usar algunos de estos mecnaismo:
    -CallBack: la forma mas clasica de manejar las asincronia. Se le conoce como (llamada de vuelta), basicamente es pasar una funcion como parametro de otra funcion, y se ejecutan una vez que se cumpla la condicion esperada

//metoo .map de los arrays


    -promesas: son objetos que representa un valor al momento de conecectar con el servidor. como su nombre lo indica, una promesa es algo que no sabemos si se va a cumplir o no, pero al menos, vnecesitamos saber que hacemos si se cumple o si no se cumple. la ventaja que tiene las promesas, es que no se anidan, en una sola funcion podemos manejar ambas situaciones 

    las promesas tienen 3 estados posibles:
    -   pending: estado incial, cuando se crea la promesa. Aqui aun no hay resultaodos.
    -   fullfiled: cuando la promesa se resuelve con exito (resolve)
    -   rejected: cuando la operacion asincrona falla (reject)

    -async/await

*/


/////////////// Funcion especial para consumir APIs y manejar promesas 
fetch("https://fakestoreapi.com/products/1")


    ////Dos escenarios (obtengo respues o no obtengo respuesta)
    .then(datos => { // Cuando la promesa se resuelve, ejecuto esta funcion
        console.log(datos);
        return datos.json();

    })

    .catch(error => {
        console.log("Error, no econtramos el producto");
        console.log(error.message);
    })

/*Sintaxis del fetch (con promesas)

fetch (url a consumir)
    .then(response => response.text()) /////////Manejo la reespuesta
    .then(datos => console.log(datos)) /////////// manejo el dato

    .catch(error => console.log(error)); 

    

*/

//asigno el fetch a una variable...
const conexion = fetch("https://fakestoreapi.com/products/1");

//imprimo la variable (para ver el objeto completo)
console.log("Este es mi objeto Promesa: ", conexion);

//referencia a mi fetch para poder usar sus metodos
conexion

    //usar el metodo then para manejar la respuesta(lo relleno con la respuesta)
    .then(function (resultado) {
        console.log("Dentro de esta funcion que maneja la respuesta, encontraras: ", resultado);
        return resultado.json();
    })

    //uso el metodo then para manejar el producto(lo rellenoo con la info del producto)
    .then(function (producto) {
        console.log("Informacion del producto: ", producto);
    })

    //uso el metodo catch para manejar el error (lo relleno con un error para que la caja no regrese vacia)
    .catch(function (error) {
        console.log("Error", error);
    })



//producto como respuesta de un servidor en formato plano (texto)
let productoServidor = { "id": 17, "title": "Rain Jacket Women Windbreaker Striped Climbing Raincoats", "price": 39.99, "description": "Lightweight perfet for trip or casual wear---Long sleeve with hooded, adjustable drawstring waist design. Button and zipper front closure raincoat, fully stripes Lined and The Raincoat has 2 side pockets are a good size to hold all kinds of things, it covers the hips, and the hood is generous but doesn't overdo it.Attached Cotton Lined Hood with Adjustable Drawstrings give it a real styled look.", "category": "women's clothing", "image": "https://fakestoreapi.com/img/71HblAHs5xL._AC_UY879_-2.jpg", "rating": { "rate": 3.8, "count": 679 } }


//producto como objeto JSON
let productoJSON = {
    id: 17,
    title: "Rain Jacket Women Windbreaker Striped Climbing Raincoats",
    price: 39.99,
    description: "Lightweight perfet for trip or casual wear---Long sleeve with hooded, adjustable drawstring waist design. Button and zipper front closure raincoat, fully stripes Lined and The Raincoat has 2 side pockets are a good size to hold all kinds of things, it covers the hips, and the hood is generous but doesn't overdo it.Attached Cotton Lined Hood with Adjustable Drawstrings give it a real styled look.",
    category: "women's clothing",
    image: "https://fakestoreapi.com/img/71HblAHs5xL._AC_UY879_-2.jpg",
    rating: {
        rate: 3.8,
        count: 679
    }
}

//Revisar informacion de un objeto con texto plano
console.log(productoServidor.price);

//Revisar informacion de un objeto tipo JSON
console.log(productoJSON.price);



///obeto JSOn que voy a mandar a uns ervidor 
let paciente = {
    nombre: "Felipe",
    edad: 31,
    estatus: "registradooooo"
}

console.log(paciente);

//necesito convertilo a una cadena de texto para que el servidor lo lea

let pacienteStringifeado = JSON.stringify(paciente);
console.log(pacienteStringifeado);

let pacienteServidor = `{"nombre":"Felipe","edad":31,"estatus":"registrado"}`


let pacienteJSON = JSON.parse(pacienteServidor);
console.log(pacienteJSON);

///si mando un Json al servidor, lo stringifeo
///si recibo un string del servidor, lo parseo

//metodo post par enviar un nuevo producto a nuestra BD de la FakeStoreAPI

fetch('https://fakestoreapi.com/products',{ ///endpoint
            method:"POST", //especificar el tipo de metodo
            body:JSON.stringify( ///intruccion para serializar el cuerpo de mi solicitud (para la interpretacion del servidor)
                {
                    title: 'Sopa Maruchan Habanero',
                    price: 15.5,
                    description: 'Deliciosa sopa maruchan de habanero',
                    image: './61ydkDQxVCL._AC_SL1095_.jpg',
                    category: 'Sopas Instantaneas'
                }
            )
        })
            .then(res=>res.json()) //metodo para la respuesta (saber que mi producto llego)
            .then(json=>console.log(json))///impresion en la consola para revisar la info
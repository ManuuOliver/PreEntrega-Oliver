///CARRITO DE COMPRA

/*
La idea es hacer una tienda de venta de cuadros, que pueda
sumar los precios y luego a la hora de pagar que nos pregunte
con que queremos pagar.

*/


let nombre, respuesta, cuadro, precio = 0;
const precioMinimo = 0;
//Funcion para elegir que cuadro quiere comprar  se le sume el precio del cuadro seleccionado
function seleccionCuadro(cuadro){
    cuadro = prompt("¿Que cuadro deseas comprar?");
    switch(cuadro){
        case "cuadroblanco":
            precio = precio + 500;
            break;
        case "cuadrorojo":
            precio = precio + 350;
            break;
        case "cuadroazul":
            precio = precio + 550;
            break;
        case "cuadroverde":
            precio = precio + 730;
            break;
        default:
            alert("No tenemos ese cuadro!");
    }
    if(precio > precioMinimo){alert(`El precio de tu carrito es de ${precio}$`);}
}
//Funcion para seleccionar le metodo de pago
function medioDePago(opcion){
    switch(opcion){
        case 1:
            tarjeta = prompt(`Ingrese el numero de la tarjeta:`);
            caducidad = prompt(`Ingrese fecha de caducidad`);
            cvv = prompt(`Ingrese codigo CVV`);
            alert("Pago completo!");
            break;
        case 2:
            alert(`Enviando ${precio}$ a Venta.De.Cuadros`);
            alert("Pago completo!");
            break;
        case 3:
            alert("Enviando bitcoin a wallet de Cuadros.com");
            alert("Pago completo!");
            break;
        default:
            alert("Medio de pago invalido");
        
    }
}
//Bienvenida a la pagina
    nombre = prompt("Bienvenido! Ingrese su nombre de usuario");
    respuesta = prompt(`Bienvenido ${nombre} a nuestra tienda, te intereza comprar algun cuadro? si/no`);

    while(respuesta == "si"){
    seleccionCuadro(cuadro);
    respuesta = prompt("¿Quieres seguir comprando?");
}
//Si el precio no supera los 0$ no va a preguntar con que desea pagar
if(precio > precioMinimo){
        opcion = +prompt(`Con que desea pagar? \n
        1) Terjeta \n
        2) transferencia \n
        3) Wallet`);
        medioDePago(opcion);
    }

if(respuesta != "no"){
        alert("Error");
    }else (alert("Gracias por pasarte!"));


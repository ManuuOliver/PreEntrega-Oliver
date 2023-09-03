///CARRITO DE COMPRA

/*
Hacer un carrito de venta de cuadros


*/


let nombre, respuesta, cuadro, precio = 0;
const precioMinimo = 0;

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
function medioDePago(opcion){
    switch(opcion){
        case 1:
            tarjeta = prompt(`Ingrese el numero de la tarjeta:`);
            caducidad = prompt(`Ingrese fecha de caducidad`);
            cvv = prompt(`Ingrese codigo CVV`);
            alert("Pago completo!");
            break;
        case 2:
            alert(`Enviando ${precio}$ a VentaDeCuadros`);
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

    nombre = prompt("Bienvenido! Ingrese su nombre de usuario");
    respuesta = prompt(`Bienvenido ${nombre} a nuestra tienda, te intereza comprar algun cuadro? si/no`);

    while(respuesta == "si"){
    seleccionCuadro(cuadro);
    respuesta = prompt("¿Quieres seguir comprando?");
}

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


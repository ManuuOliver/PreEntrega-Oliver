
const cuadros = [
    {nombre: "cuadroverde", precio: 500},
    {nombre: "cuadroazul", precio: 550},
    {nombre: "cuadroblanco", precio: 600},
    {nombre: "cuadrorojo", precio: 1250},
];

const detalleFactura = [];

let opcion;
let salir;
let total = 0;
let cantidad;

function menuDeTienda(){
    alert("Bienvenido a la tienda de cuadros");
    do{ 
        const listaStringCuadros = cuadros.map((producto, index) => 
            `${index + 1} - ${producto.nombre} ${producto.precio}`);
            opcion = prompt(`Que cuadro desea elegir? \n ${listaStringCuadros.join(`\n`)}`);

            while(isNaN(opcion) || opcion == undefined || opcion > cuadros.length || opcion <= 0){
                opcion = prompt(`Que cuadro desea elegir? \n ${listaStringCuadros.join(`\n`)}`);
            }

        cantidad = prompt(`Ingrese la cantidad: `);
            while(cantidad < 0 || cantidad == undefined || isNaN(cantidad)){
                cantidad = prompt(`Ingrese la cantidad: `);
            }
    
        detalleFactura.push(new itemFactura(cuadros[opcion-1].nombre,cuadros[opcion-1].precio,cantidad));
    
        salir = prompt(`Desea salir? si/no`);
    
    
    }while(salir != "si");
}
function totalPrecio(){
    total = detalleFactura.reduce((acumulador,item) => acumulador + item.subtotal,0);
    alert(`El total a apagar es de ${total}`);
}

menuDeTienda();
totalPrecio();
let cliente = {
    nombre: "Carlos",
    dinero: 50,
    hambre: 80

};
function ordenarComida(cliente) {
    cliente.hambre = cliente.hambre - 20;


    console.log(cliente.nombre + "comio. Hambre: " + cliente.hambre);
}

function pagar(cliente) {
    cliente.dinero = cliente.dinero - 10;
    console.log(cliente.nombre + "pago. Dinero: " + cliente.dinero);
}

function mostrarEstado(cliente) {
    console.log(cliente.nombre + "tiene " + cliente.dinero + " y hambre " + cliente.hambre);
}

ordenarComida(cliente);
pagar(cliente);
mostrarEstado(cliente);
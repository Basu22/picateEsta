//me traigo el carrito armado
carrito=JSON.parse(localStorage.getItem("carrito"));

let botonesEliminar = document.querySelectorAll("#borrarCarrito"); 

for (const clickBoton of botonesEliminar) {
        clickBoton.addEventListener("click", eliminarCarrito);
}

function eliminarCarrito (e){
    //para validar que existe un valor en localStorage y no reiniciar tomamos su valor en una variable
    localCarrito = JSON.parse(localStorage.getItem("carrito"));
    
    //validamos que exista data, si no existe crea desde cero sino toma el valor del localstorage y se lo da al array de los productos.
    if (localCarrito){
            carrito = localCarrito
    }
    console.log(e.target.parentNode.parentNode.parentNode.children[0].children[0].children[0].id)
    let i = carrito.findIndex(producto => producto.id == e.target.parentNode.parentNode.parentNode.children[0].children[0].children[0].id)
    if(e.target.parentNode.parentNode.children[1].innerText.slice(1)>1){
        restaTotalCarrito(e)// llamo a la resta del carrito 
        carrito[i].cantidad -= 1
        console.log(carrito[i].cantidad)
        carrito[i].subtotal = carrito[i].precio * carrito[i].cantidad
        // debo de hacerlo navegando porque con JQuery todos los ID son iguales.
        e.target.parentNode.parentNode.children[2].children[0].innerHTML = `$ ${carrito[i].subtotal.toFixed(2)}`
        e.target.parentNode.parentNode.children[1].innerText = `x ${carrito[i].cantidad}`
    }else{
        restaTotalCarrito(e) // llamo a la resta del carrito
        carrito.splice(i,1)
        e.target.parentNode.parentNode.parentNode.remove()
    }

    localStorage.setItem("carrito",JSON.stringify(carrito))
}
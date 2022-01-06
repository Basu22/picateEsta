//me traigo el carrito armado
carritoCompras=JSON.parse(localStorage.getItem("carrito"));

for (const picada of carritoCompras) {
    $(`#restar${picada.id}`).on("click",function(){
        //para validar que existe un valor en localStorage y no reiniciar tomamos su valor en una variable
        localCarrito = JSON.parse(localStorage.getItem("carrito"));
    
        //validamos que exista data, si no existe crea desde cero sino toma el valor del localstorage y se lo da al array de los productos.
        if (localCarrito){
            carritoCompras = localCarrito
        }
        let indexItem = carritoCompras.findIndex(item=> item.id == picada.id) 
        
        if (parseInt($(`#cantidad${picada.id}`)[0].innerText.slice(2))>1) {
            // si es nuevo ingreso una nueva picada al array
            restaTotalCarrito(picada.id)
            carritoCompras[indexItem].cantidad -= 1
            $(`#cantidad${picada.id}`)[0].innerHTML = "x " + carritoCompras[indexItem].cantidad
            carritoCompras[indexItem].subtotal = carritoCompras[indexItem].precio * carritoCompras[indexItem].cantidad
            $(`#precioTotal${picada.id}`)[0].innerHTML = "$ " + carritoCompras[indexItem].subtotal.toFixed(2)
        }else {
            restaTotalCarrito(picada.id)
            carritoCompras.splice(indexItem,1)
            $(`#textoCarrito${picada.id}`)[0].remove()
        }
        //subo los cambios a localstorage
        localStorage.setItem("carrito",JSON.stringify(carritoCompras))
    })
}
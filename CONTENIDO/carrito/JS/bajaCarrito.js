//me traigo el carrito armado
carritoCompras=JSON.parse(localStorage.getItem("carrito"));


for (const picada of carritoCompras) {
    $(`#restar${picada.id}`).on("click",function(){
        //para validar que existe un valor en localStorage y no reiniciar tomamos su valor en una variable
        localCarrito = JSON.parse(localStorage.getItem("carrito"));
        cantidadCarrito=localStorage.getItem("cantidad");
        //validamos que exista data, si no existe crea desde cero sino toma el valor del localstorage y se lo da al array de los productos.
        if (localCarrito){
            carritoCompras = localCarrito
        }
        let indexItem = carritoCompras.findIndex(item=> item.id == picada.id) 
        console.log(cantidadCarrito)
        if (parseInt($(`#cantidad${picada.id}`)[0].innerText.slice(2))>1) {
            // si es nuevo ingreso una nueva picada al array
            restaTotalCarrito(picada.id)
            carritoCompras[indexItem].cantidad -= 1
            $(`#cantidad${picada.id}`)[0].innerHTML = "x " + carritoCompras[indexItem].cantidad
            carritoCompras[indexItem].subtotal = carritoCompras[indexItem].precio * carritoCompras[indexItem].cantidad
            $(`#precioTotal${picada.id}`)[0].innerHTML = "$ " + carritoCompras[indexItem].subtotal.toFixed(2)
            //POP UP
            $(".avisoCarrito")[0].innerHTML=`Se quitó TABLA ${picada.tipo} ${picada.tabla}.`
            $(".avisoCarrito").slideDown(2000).delay(2000).slideUp(2000)
            // NUMERO CANTIDAD CARRITO
            cantidadCarrito -= 1;
            $("#cantidadCarrito")[0].innerHTML= cantidadCarrito
            $("#cantidadCarrito").fadeOut("fast").fadeIn("fast")
        }else {
            restaTotalCarrito(picada.id)
            carritoCompras.splice(indexItem,1)
            $(`#textoCarrito${picada.id}`)[0].remove()
            //pop up cantidad carrito
            cantidadCarrito -= 1;
            $("#cantidadCarrito")[0].innerHTML= cantidadCarrito
            // alerta carrito
            $(".avisoCarrito")[0].innerHTML=`Se quitó TABLA ${picada.tipo} ${picada.tabla}.`
            $(".avisoCarrito").slideDown(2000).delay(2000).slideUp(2000)
            if(cantidadCarrito==0){
                $("#cantidadCarrito").fadeOut("fast")
            }
            localStorage.removeItem("cantidad")
        }
        //subo los cambios a localstorage
        localStorage.setItem("cantidad",cantidadCarrito)
        localStorage.setItem("carrito",JSON.stringify(carritoCompras))
    })
}
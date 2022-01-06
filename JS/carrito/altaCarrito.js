carritoCompras=[];

//me traigo todos los botones
function escucharBotones(arrayPicadas){
    for (const boton of arrayPicadas) {
/* ESCUCHO LOS BOTONES DE SUMA */
        $(`#add${boton.id}`).on('click', function(){
            
            //para validar que existe un valor en localStorage y no reiniciar tomamos su valor en una variable
            localCarrito = JSON.parse(localStorage.getItem("carrito"));
            //validamos que exista data, si no existe crea desde cero sino toma el valor del localstorage y se lo da al array de los productos.
            if (localCarrito){
                    carritoCompras = localCarrito}
            // me el ID del Array y lo comparo para ver si existe, si existe devuelvo el index sino -1
            let indexItem = carritoCompras.findIndex(item=> item.id == boton.id) 
            
            if (indexItem == -1) {
                // si es nuevo ingreso una nueva picada al array
                let tabla = `COMEN ${boton.comen} PICAN ${boton.pican}`
                let tipo = `TABLA ${boton.tipo}`
                let img = boton.img
                let precio = boton.venta
                let id = boton.id
                let subtotal = boton.venta
                $(`#cantidad${boton.id}`)[0].innerHTML = "x 1"
                let updateCarrito = new AgregarPicada(id,tabla,tipo,img,precio,subtotal);
                carritoCompras.push(updateCarrito);
            }else {
                // sino solo incremento cantidad y subtotal sobre el index que se hizo clic
                carritoCompras[indexItem].cantidad += 1;
                $(`#cantidad${boton.id}`)[0].innerHTML = "x " + carritoCompras[indexItem].cantidad
                carritoCompras[indexItem].subtotal = carritoCompras[indexItem].precio * carritoCompras[indexItem].cantidad
            }
            //subo los cambios a localstorage
            localStorage.setItem("carrito",JSON.stringify(carritoCompras))
        }
    )
/* ESCUCHO LOS BOTONES DE RESTA */
    $(`#resta${boton.id}`).on('click', function(){
        //para validar que existe un valor en localStorage y no reiniciar tomamos su valor en una variable
        localCarrito = JSON.parse(localStorage.getItem("carrito"));
        //validamos que exista data, si no existe crea desde cero sino toma el valor del localstorage y se lo da al array de los productos.
        if (localCarrito){
                carritoCompras = localCarrito}
        // me el ID del Array y lo comparo para ver si existe, si existe devuelvo el index sino -1
        let indexItem = carritoCompras.findIndex(item=> item.id == boton.id) 
        
        if (parseInt($(`#cantidad${boton.id}`)[0].innerText.slice(2))>1) {
            // si es nuevo ingreso una nueva picada al array
            carritoCompras[indexItem].cantidad -= 1
            $(`#cantidad${boton.id}`)[0].innerHTML = "x " + carritoCompras[indexItem].cantidad
            carritoCompras[indexItem].subtotal = carritoCompras[indexItem].precio * carritoCompras[indexItem].cantidad
        }else {
            console.log("o paso por aca")
            carritoCompras.splice(indexItem,1)
            $(`#cantidad${boton.id}`)[0].innerHTML = "x 0"
        }
        //subo los cambios a localstorage
        localStorage.setItem("carrito",JSON.stringify(carritoCompras))
    })
}
}

escucharBotones(picadasClasicas);
escucharBotones(picadasPremium);



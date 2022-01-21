carritoCompras=[];
let cantidadCarrito=0
//me traigo todos los botones

$.getJSON("./JS/picadas.json", function(resp,estado){
    if (estado==="success"){
        for (const boton of resp) {
            /* ESCUCHO LOS BOTONES DE SUMA */
                    $(`#add${boton.id}`).on('click', function(){
                        //para validar que existe un valor en localStorage y no reiniciar tomamos su valor en una variable
                        localCarrito = JSON.parse(localStorage.getItem("carrito"));
                        //validamos que exista data, si no existe crea desde cero sino toma el valor del localstorage y se lo da al array de los productos.
                        if (localCarrito){
                                carritoCompras = localCarrito}
                        // me devuelve el ID del Array y lo comparo para ver si existe, si existe devuelvo el index sino -1
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
                            $(".avisoCarrito")[0].innerHTML=`Se agregó TABLA ${boton.tipo} COMEN ${boton.comen} PICAN ${boton.pican}.`
                            $(".avisoCarrito").slideDown(2000).delay(2000).slideUp(2000)
                                if(cantidadCarrito>1){
                                    cantidadCarrito += 1;
                                    $("#cantidadCarrito")[0].innerHTML= cantidadCarrito
                                }else{
                                    cantidadCarrito = 1*1;
                                    console.log(cantidadCarrito)
                                    $("#cantidadCarrito").fadeOut("fast").fadeIn("fast")
                                    $("#cantidadCarrito")[0].innerHTML= cantidadCarrito
                                }
                        }else {
                            // sino solo incremento cantidad y subtotal sobre el index que se hizo clic
                            carritoCompras[indexItem].cantidad += 1;
                            carritoCompras[indexItem].subtotal = carritoCompras[indexItem].precio * carritoCompras[indexItem].cantidad;
                            cantidadCarrito += 1;
                            $("#cantidadCarrito")[0].innerHTML= cantidadCarrito
                            $("#cantidadCarrito").fadeOut("fast").fadeIn("fast")
                            $(`#cantidad${boton.id}`)[0].innerHTML = "x " + carritoCompras[indexItem].cantidad;
                            $(".avisoCarrito")[0].innerHTML=`Se agregó TABLA ${boton.tipo} COMEN ${boton.comen} PICAN ${boton.pican}.`;
                            $(".avisoCarrito").slideDown(2000).delay(2000).slideUp(2000);
                        }
                        //subo los cambios a localstorage
                        localStorage.setItem("cantidad",cantidadCarrito)
                        localStorage.setItem("carrito",JSON.stringify(carritoCompras))
                    }
                )
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
                            $(".avisoCarrito")[0].innerHTML=`Se quitó TABLA ${boton.tipo} COMEN ${boton.comen} PICAN ${boton.pican}.`
                            $(".avisoCarrito").slideDown(2000).delay(2000).slideUp(2000)
                            cantidadCarrito -= 1;
                            $("#cantidadCarrito")[0].innerHTML= cantidadCarrito
                            $("#cantidadCarrito").fadeOut("fast").fadeIn("fast")
                        }else if (parseInt($(`#cantidad${boton.id}`)[0].innerText.slice(2))==1){
                            carritoCompras.splice(indexItem,1)
                            //pop up cantidad carrito
                            cantidadCarrito -= 1;
                            $("#cantidadCarrito")[0].innerHTML= cantidadCarrito
                            $("#cantidadCarrito").fadeOut("fast")
                            $(`#cantidad${boton.id}`)[0].innerHTML = "x 0"
                            // alerta carrito
                            $(".avisoCarrito")[0].innerHTML=`Se quitó TABLA ${boton.tipo} COMEN ${boton.comen} PICAN ${boton.pican}.`
                            $(".avisoCarrito").slideDown(2000).delay(2000).slideUp(2000)
                            localStorage.removeItem("cantidad")
                            
                        }
                        //subo los cambios a localstorage
                        localStorage.setItem("cantidad",cantidadCarrito)
                        localStorage.setItem("carrito",JSON.stringify(carritoCompras))
                        })
            }
    }
})


let carritoCompras=JSON.parse(localStorage.getItem("carrito"));

function textoCarrito(arrayCarrito){
    for (const carrito of arrayCarrito) {
        if (carrito){
            $('#textoCarrito').append(` 
                                        <section class="row textoCarrito">
                                            <hr>    
                                                <section class="col-4 col-lg-3 seccionImagenes">
                                                    <article class="imgCarrito col-12 col-lg-12">
                                                        <img id=${carrito.id} src=${carrito.img} alt="Presentacion ${carrito.tipo} ${carrito.tabla}" loading="lazy"> 
                                                    </article>
                                                </section>
                                                <section class="col-8 col-lg-9 seccionCantidades">
                                                    <article class="armadoPedido col-9 col-lg-3">
                                                        <p id="tipoTabla">${carrito.tipo}</br> ${carrito.tabla}</p>
                                                    </article>
                                                    <article class="cantidadPedido col-3 col-lg-1">
                                                        <p id="cantidadPedido">x ${carrito.cantidad}</p>
                                                    </article>
                                                    <article class="precioFinal col-6 col-lg-2">
                                                        <p id="precioTotal">$ ${carrito.subtotal.toFixed(2)}</p>
                                                    </article>
                                                    <article class="borrarCarrito col-lg-1">
                                                        <img class="logoFace img-fluid" id="borrarCarrito" src="./img/carrito/restaCarrito.png" alt="">
                                                    </article>
                                                </section>
                                                </br>
                                                <hr>
                                        </section>`);
        }
    }
}
textoCarrito(carritoCompras);
sumaTotalCarrito()






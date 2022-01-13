
let carritoCompras=JSON.parse(localStorage.getItem("carrito"));

function textoCarrito(arrayCarrito){
    for (const carrito of arrayCarrito) {
        if (carrito){
            $('#textoCarrito').append(` 
                                        <section class="row textoCarrito" id="textoCarrito${carrito.id}">
                                                <section class="col-4 col-lg-3 seccionImagenes">
                                                    <article class="imgCarrito col-12 col-lg-12">
                                                        <img id=${carrito.id} src=${carrito.img} alt="Presentacion ${carrito.tipo} ${carrito.tabla}" loading="lazy"> 
                                                    </article>
                                                </section>
                                                <section class="col-8 col-lg-9 seccionCantidades">
                                                    <article class="armadoPedido col-9 col-lg-3">
                                                        <p id="tipoTabla${carrito.id}">${carrito.tipo}</br> ${carrito.tabla}</p>
                                                    </article>
                                                    <article class="cantidadPedido col-3 col-lg-1">
                                                        <p id="cantidad${carrito.id}">x ${carrito.cantidad}</p>
                                                    </article>
                                                    <article class="precioFinal col-6 col-lg-2">
                                                        <p id="precioTotal${carrito.id}">$ ${carrito.subtotal.toFixed(2)}</p>
                                                    </article>
                                                    <article class="borrarCarrito col-lg-1">
                                                        <img class="logoFace" id="restar${carrito.id}" src="./CONTENIDO/carrito/img/restaCarrito.png" alt="">
                                                    </article>
                                                </section>
                                        </section>`);
        }
    }
}

textoCarrito(carritoCompras);
sumaTotalCarrito()






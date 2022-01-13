//Armo una función para ingresarlo
function agregarPicada(arrayPicada){

    for (const picada of arrayPicada) { // con un for armo un bucle para ingresar cada elemento
        let lineaCarrito =$(`<article class = "articuloTabla${picada.comen}${picada.tipo.slice(0,1)} col-md-6 col-lg-12 mt-4">
                                <article class="articuloC${picada.comen}P${picada.pican}${picada.tipo.slice(0,1)}">
                                    <section class="row filaContenidoTablas">
                                        <article class="col-12">
                                            <img class="img-fluid" src="./CONTENIDO/tablas/img/C${picada.comen}P${picada.pican}${picada.tipo.slice(0,1)}.png" alt="Presentacion Tabla ${picada.tipo} Comen ${picada.comen} Pican ${picada.pican}" loading="lazy"> 
                                        </article>
                                        <article  class="col-12">
                                            <h5>TABLA ${picada.tipo}</h5>
                                        </article>
                                        <article  class="col-12">
                                            <h6>COMEN ${picada.comen} PICAN ${picada.pican}</h6>
                                        </article>
                                        <article  class="col-12">
                                            <p>Todas incluyen Pan y Bebidas</p>
                                        </article>
                                        <article  class="col-12">
                                            <h2>PRECIO $${picada.venta.toFixed(2)}</h2>
                                        </article>
                                        <section  class="col-12 filaCarrito">
                                            <article class="col-2">   
                                                <img class="logoFace" id="add${picada.id}" src="./CONTENIDO/carrito/img/sumaCarrito.png" alt="">
                                            </article>
                                            <article class="cantidadPedido col-3 col-lg-1">
                                                <p id="cantidad${picada.id}" class="cantidadPedido"></p>
                                            </article>
                                            <article class="borrarCarrito col-lg-1">
                                                <img class="logoFace" id="resta${picada.id}" src="./CONTENIDO/carrito/img/restaCarrito.png" alt="">
                                            </article>
                                        </section>
                                    </section>
                                </article>
                            </article>`)
                            // dentro del for agrego cada linea al getElement del principio
                            
                            if(arrayPicada[0].tipo[0]=="C"){
                                $("#grupoClasica").append(lineaCarrito);
                            } else
                                $("#grupoPremium").append(lineaCarrito);
                            }
}

//agrego las picadas clasicas del array
agregarPicada(picadasClasicas);
//agrego las picadas premiun del array
agregarPicada(picadasPremium);


// ACTUALIZO LA CANTIDAD SIEMPRE CON EL LOCAL STORAGE //
//para validar que existe un valor en localStorage y no reiniciar tomamos su valor en una variable
localCarrito = JSON.parse(localStorage.getItem("carrito"));
//validamos que exista data, si no existe crea desde cero sino toma el valor del localstorage y se lo da al array de los productos.
if (localCarrito){
    for (const picada of localCarrito) {
        $(`#cantidad${picada.id}`)[0].innerHTML="x "+picada.cantidad
    }
}



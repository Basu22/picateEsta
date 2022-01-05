//Armo una función para ingresarlo
function agregarPicada(arrayPicada){

    for (const picada of arrayPicada) { // con un for armo un bucle para ingresar cada elemento
        let lineaCarrito =$(`<article class = "articuloTabla${picada.comen}${picada.tipo.slice(0,1)} col-md-6 col-lg-12 mt-4">
                                <article class="articuloC${picada.comen}P${picada.pican}${picada.tipo.slice(0,1)}">
                                    <section class="row filaContenidoTablas">
                                        <article class="col-12">
                                            <img class="img-fluid" src="./img/tablas/C${picada.comen}P${picada.pican}${picada.tipo.slice(0,1)}.png" alt="Presentacion Tabla ${picada.tipo} Comen ${picada.comen} Pican ${picada.pican}" loading="lazy"> 
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
                                                <img class="logoFace" id="addCarrito" src="./img/carrito/sumaCarrito.png" alt="">
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




$('header').append(        
`<section class="contenedorCabecera container-fluid">
    <section class="row filaHeader">
        <section class="col-4 col-lg-4 contenedorImagen">
            <a href="index.html">
                <img class="logoCabecera" src="./CONTENIDO/navegador/img/logo.png" alt="Logo de Picate Esta" loading="lazy">
            </a>
        </section>
        <section class="columnaNavegador col-8 col-lg-6">
            <nav class="contenedorNav">
                <ul class="mb-0 px-0 listadoCabecera">
                    <li>
                        <a href="nosotros.html">Nosotros</a>
                    </li>
                    <li>
                        <a href="productos.html">Productos</a>
                    </li>
                    <li>
                        <a href="tablas.html">Tablas</a>
                    </li>
                    <li>
                        <a href="contactenos.html">Contactenos</a>
                    </li>
                    <li>
                        <a href="carrito.html">
                            <img class="carritoCompra" src="./CONTENIDO/navegador/img/agregar-carrito.png" alt="Carrito de Compras" loading="lazy">
                            <article id="cantidadCarrito">
                                <p></p>
                            </article>
                        </a>
                    </li>
                    <article class="avisoCarrito">
                        <p></p>
                    </article>
                </ul>
            </nav>
            <nav class="navegadorHamburguesa">
                <img class="imgHamburguesa" src="./CONTENIDO/navegador/img/list.png" alt="">
                <ul class="listadoHamburguesa">
                    <li>
                        <a href="nosotros.html">Nosotros</a>
                    </li>
                    <li>
                        <a href="productos.html">Productos</a>
                    </li>
                    <li>
                        <a href="tablas.html">Tablas</a>
                    </li>
                    <li>
                        <a href="contactenos.html">Contactenos</a>
                    </li>
                </ul>
                <a href="carrito.html">
                    <img class="carritoCompra" src="./CONTENIDO/navegador/img/agregar-carrito.png" alt="Carrito de Compras" loading="lazy">
                </a>
            </nav>
        </section>
    </section>
</section>`
)

cantidad=localStorage.getItem("cantidad")
console.log(cantidad)
if(cantidad>0){
    $("#cantidadCarrito")[0].innerHTML= cantidad
    $("#cantidadCarrito").css("display","block")
}

//ANIMACION HEADER
    $(window).on("scroll",function(){
        cabecera=$("header").position().top
        estoy=$(this).scrollTop()
    if (estoy==cabecera){
        if(flag){
                $(".filaHeader").css("border-bottom","solid 1px grey");
                $(".logoCabecera").animate({height:'100px'},"fast");
            flag=false; // armo un flag para que no quede ejecutando un loop interminable
            }
        }else if (estoy<cabecera){
            $(".filaHeader").removeAttr("style");
            $(".logoCabecera").animate({height:'20vh', overflow:'auto'},"fast");
            flag = true;
        }
    
    })




carritoCompras=[];

//me traigo todos los botones
let addCarrito = document.querySelectorAll("#addCarrito")
//armo un for para escuchar el evento de cada boton al hacer click y me creo una función para llamar por cada click
for (const boton of addCarrito) {
    boton.addEventListener("click",sumaCarrito)
}
function sumaCarrito(e){
    //para validar que existe un valor en localStorage y no reiniciar tomamos su valor en una variable
    localCarrito = JSON.parse(localStorage.getItem("carrito"));
    
    //validamos que exista data, si no existe crea desde cero sino toma el valor del localstorage y se lo da al array de los productos.
    if (localCarrito){
            carritoCompras = localCarrito}
    
    // me el ID del Array y lo comparo para ver si existe, si existe devuelvo el index sino -1
    let indexItem = carritoCompras.findIndex(item=> item.id == e.target.parentNode.parentNode.parentNode.parentNode.className.slice(8)) 
    
    // hacemos la busqueda por el DOM de toda la data de los productos segun lo que nos devuelve el HTML
    let tabla = e.target.parentNode.parentNode.parentNode.children[2].innerText;
    let tipo = e.target.parentNode.parentNode.parentNode.children[1].innerText;
    let img = e.target.parentNode.parentNode.parentNode.children[0].children[0].src;
    let precio = parseInt(e.target.parentNode.parentNode.parentNode.children[4].children[0].innerText.slice(8))
    let id = e.target.parentNode.parentNode.parentNode.parentNode.className.slice(8)
    let subtotal = parseInt(e.target.parentNode.parentNode.parentNode.children[4].children[0].innerText.slice(8))


    if (indexItem == -1){
        //llamamos a la clase de AgregarPicada para dar de alta una picada en el carrito
        let updateCarrito = new AgregarPicada(id,tabla,tipo,img,precio,subtotal);
        // pusheamos en el array el resultado
        carritoCompras.push(updateCarrito);
    } else {
        carritoCompras[indexItem].cantidad += 1;
        carritoCompras[indexItem].subtotal = carritoCompras[indexItem].precio * carritoCompras[indexItem].cantidad
    }
    // lo subimos al localStorage
    localStorage.setItem("carrito",JSON.stringify(carritoCompras))
}




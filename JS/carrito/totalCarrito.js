function sumaTotalCarrito (){
    // armo un bucle con map en donde traigo los subtotales y los voy incrementando con un reduce.
    if(carritoCompras.length != 0){
    let sumall = carritoCompras.map(item => item.subtotal).reduce((prev, curr) => prev + curr);  
    $('#textoTotal').addClass("textoTotal col-10").html(`<p>Total Compra $ ${sumall.toFixed(2)}</p>`) // los muestro en el HTML
    }
}
function restaTotalCarrito(id){
    console.log(id)
    // tomo el precio de la linea que quiero borrar y lo divido por la cantidad
    let precio = parseInt($(`#precioTotal${id}`)[0].innerText.slice(2))/parseInt($(`#cantidad${id}`)[0].innerText.slice(1)) 
    // tomo el subtotal actual
    let total = parseInt($("#textoTotal")[0].innerText.slice(14)) 
    totalResta = total - precio;     // los resto y lo meto en una variable
    $('#textoTotal').addClass("textoTotal col-10").html(`<p>Total Compra $ ${totalResta.toFixed(2)}</p>`) 
    // antes de que se borre la linea muestro el subtotal nuevo
}

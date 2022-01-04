function sumaTotalCarrito (){
    // armo un bucle con map en donde traigo los subtotales y los voy incrementando con un reduce.
    if(carritoCompras.length != 0){
    let sumall = carritoCompras.map(item => item.subtotal).reduce((prev, curr) => prev + curr);  
    $('#textoTotal').addClass("textoTotal col-10").html(`<p>Total Compra $ ${sumall.toFixed(2)}</p>`) // los muestro en el HTML
    }
}


function restaTotalCarrito(e){
    // tomo el precio de la linea que quiero borrar y lo divido por la cantidad
    let precio = parseInt(e.target.parentNode.parentNode.children[2].children[0].innerHTML.slice(2))/parseInt(e.target.parentNode.parentNode.children[1].innerText.slice(1)) 
    // tomo el subtotal actual
    let total = parseInt(e.target.parentNode.parentNode.parentNode.parentNode.parentNode.children[2].children[0].innerHTML.slice(14)) 
    totalResta = total - precio;     // los resto y lo meto en una variable
    $('#textoTotal').addClass("textoTotal col-10").html(`<p>Total Compra $ ${totalResta.toFixed(2)}</p>`) // antes de que se borre la linea muestro el subtotal nuevo
}

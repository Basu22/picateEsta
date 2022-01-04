// arranco las variebles
let textoPedido=""
let textoPrecio=""
let textoTotal
let precio=0
let contar=0



// Armo una clase picada para poder disponer de metodos en el do-while
class Picada{
    constructor (id,comen,pican,tipo,costo,venta){
        this.id=id,
        this.comen=comen,
        this.pican=pican,
        this.tipo=tipo,
        this.costo=costo.toFixed(2);
        this.venta=venta.toFixed(2);
    }

    armadoPedido(){
        textoPedido=textoPedido+`Comen ${this.comen} Pican ${this.pican} ${this.tipo} </br>`;
        textoPrecio=textoPrecio+ `$${this.venta} </br>`;
        document.getElementById("pedido").innerHTML = textoPedido;
        document.getElementById("precioIndividual").innerHTML = textoPrecio;
    }

    precioTotal(){
        precio=parseInt(precio)+parseInt(this.venta);
        textoTotal=`Su total es de $ ${precio.toFixed(2)}`
        document.getElementById("precioTotal").innerHTML = textoTotal;
    }
}

//armo una variable donde le ingreso un array de objetos para poder trabajar con ella en el do-while
const allPicadas = picadas.map( picada => new Picada( picada.id, picada.comen, picada.pican, picada.tipo, picada.costo, picada.venta));
console.log(allPicadas);

do {
    pedido=prompt('CARRITO DE COMPRAS PICATE ESTA!\n Seleccione su Producto:\n Comen 2 Pican 3 CLASICA tipee 2C\n Comen 2 Pican 3 PREMIUM tipee 2P\n Comen 4 Pican 6 CLASICA tipee 4C\n Comen 4 Pican 6 PREMIUM tipee 4P\n Comen 8 Pican 10 CLASICA tipee 8C\n Comen 8 Pican 10 PREMIUM tipee 8P\n Para cerrar el carrito tipee 0\n');
    pedido=pedido.toUpperCase(); //Lo puse en mayusculas por las dudas
    switch (pedido) {
        case "2C":
                venta2c=allPicadas.find(picada => picada.id === "C2P3C"); //filtro la picada por ID
                venta2c.armadoPedido(); // armo el texto del pedido
                venta2c.precioTotal(); // armo el precio total
            break;
        case "2P":
                venta2p=allPicadas.find(picada => picada.id === "C2P3P");
                venta2p.armadoPedido();
                venta2p.textoPedido.sort();
                venta2p.precioTotal();
            break;
        case "4C":
                venta4c=allPicadas.find(picada => picada.id === "C4P6C");
                venta4c.armadoPedido();
                venta4c.precioTotal();
            break;
        case "4P":
                venta4p=allPicadas.find(picada => picada.id === "C4P6P");
                venta4p.armadoPedido();
                venta4p.precioTotal();
            break;
        case "8C":
                venta8c=allPicadas.find(picada => picada.id === "C8P10C");
                venta8c.armadoPedido();
                venta8c.precioTotal();
            break;
        case "8P":
                venta8p=allPicadas.find(picada => picada.id === "C8P10P");
                venta8p.armadoPedido();
                venta8p.precioTotal();
            break;
        case "0":
                alert("Estamos procesando su pedido, haga clic en Aceptar!");
            break;
        default: 
            alert("No es un producto dentro del carrito de compras, vuelva a ingresar un producto del listado!");
            break;
    }
} while (pedido!=0);


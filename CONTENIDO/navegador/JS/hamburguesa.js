let estado ="cerrado"
$(".imgHamburguesa").css("height","5vh"),
$(".listadoHamburguesa").css({
        display:"none",
        top:"0%",
        left:"-100%"})


$(".imgHamburguesa").click(function(){
    if(estado=="cerrado"){
        
        $(".listadoHamburguesa").removeAttr("style")
        $(".listadoHamburguesa").css({
            background:"rgba(0, 0, 0, 0.8)",
            position:"absolute",
            listStyle: "none"})
        $(".listadoHamburguesa li a").css({    
            textDecoration: "none",
            color: "#fff"})
        $(".listadoHamburguesa li").css({    
            margin: "15px"})
        $(".listadoHamburguesa").animate({
            left:"20%",
            width:"70%",
        }, "slow")
        estado="abierto"

    } else if (estado=="abierto"){
        $(".listadoHamburguesa").animate({
            width:"-100%",
            left:"-50%",
        }, "slow")
        estado="cerrado"
    }

})

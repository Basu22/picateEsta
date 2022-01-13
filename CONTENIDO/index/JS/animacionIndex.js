let posicion=0
$(window).on("scroll",function(){
contenedorIconos=$(".contenedorIconos").position().top
contenedorClasica=$(".filaClasica").position().top
contenedorPremium=$(".filaPremium").position().top
estoy=$(this).scrollTop()*2.5
if (estoy>contenedorIconos && posicion==0){
            $(".iconoRepartidor").fadeIn("slow");
            $(".iconoCalendario").fadeIn("slow");
            $(".iconoRegalo").fadeIn("slow");
            $(".contenedorIconoTexto").delay(500).slideDown("slow");
            // armo un flag para que no quede ejecutando un loop interminable
            posicion=1;
            console.log(posicion, "animacion");
    }else if (estoy>contenedorClasica && posicion==1){
            $(".filaClasica #picadaIndexC2P3C").delay(1000).slideDown("slow");
            $(".filaClasica #picadaIndexC4P6C").delay(1200).slideDown("slow");
            $(".filaClasica #picadaIndexC8P10C").delay(1500).slideDown("slow");
            // armo un flag para que no quede ejecutando un loop interminable
            posicion=2;
            console.log(posicion, "animacion");
    }else if (estoy>contenedorPremium && posicion==2){
            $(".filaPremium #picadaIndexC2P3P").delay(2200).slideDown("slow");
            $(".filaPremium #picadaIndexC4P6P").delay(2000).slideDown("slow");
            $(".filaPremium #picadaIndexC8P10P").delay(1800).slideDown("slow");
            // armo un flag para que no quede ejecutando un loop interminable
            posicion=3;
            console.log(posicion, "animacion");
    }else if (estoy==0){
        $(".iconoRepartidor").css("display","none");
        $(".iconoCalendario").css("display","none");
        $(".iconoRegalo").css("display","none");
        $(".contenedorIconoTexto").css("display","none");
        for (const picadas of picadasClasicas) {
            $(`.filaClasica #picadaIndex${picadas.id}`).css("display","none");
        }
        for (const picadas of picadasPremium) {
            $(`.filaPremium #picadaIndex${picadas.id}`).css("display","none");
        }
        posicion=0;
    }
    console.log(posicion,"posicion?")
})
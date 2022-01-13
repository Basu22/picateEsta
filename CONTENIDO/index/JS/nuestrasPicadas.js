function nuestrasPicadas(arrayPicadas){
    for (const picada of arrayPicadas) {
        let nuestrasPicadas = `<article class="col-lg-3 col-md-6"> 
                                <img class="img-fluid picadaIndex" id="picadaIndex${picada.id}" src="./CONTENIDO/index/img/tablas/Comen ${picada.comen} Pican ${picada.pican} ${picada.tipo}.jpg" alt="Presentación Picada Comen ${picada.comen} Pican ${picada.pican} ${picada.tipo}" loading="lazy">
                                </article>`
                            //armo el IF para ingresar las picadas!//
                            if(arrayPicadas[0].tipo[0]=="C"){
                                $(".filaClasica").append(nuestrasPicadas);
                            } else {
                                $(".filaPremium").append(nuestrasPicadas);
                            }
                        }
    }

nuestrasPicadas(picadasClasicas);
nuestrasPicadas(picadasPremium);
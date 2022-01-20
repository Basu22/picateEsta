btnNext = document.getElementById("next")
btnPrev = document.getElementById("prev")
i=1

btnNext.addEventListener("click", function(){
    if (i<=carrousel.length){
        imagen = carrousel.filter(e => e.id == i);
        this.parentNode.children[1].src=imagen[0].img
        i++;
    }else{
        i=1
        imagen = carrousel.filter(e => e.id == i);
        this.parentNode.children[1].src=imagen[0].img
    }
})

console.log(i)

/* btnNext.addEventListener("click", function(){
    if (i<=carrousel.length){
        imagen = carrousel.filter(e => e.id == i);
        this.parentNode.children[1].src=imagen[0].img
        i++;
    }else{
        i=1
        imagen = carrousel.filter(e => e.id == i);
        this.parentNode.children[1].src=imagen[0].img
    }
}) */
$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:2
        },
        600:{
            items:4
        },
        1000:{
            items:6
        }
    }
})

function abrir(){
    document.getElementById('popup').style.display = 'block';
}

function fechar(){
    document.getElementById('popup').style.display = 'none';
}
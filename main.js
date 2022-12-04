$('.owl-one').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    autoplay:true,
    autoplayTimeout:4000,
    autoplayHoverPause:false,
    transitionStyle:"fade",
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1      
         },
        1000:{
            items:1
        }
    }
})

$('.owl-two').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    autoplay:true,
    autoplayTimeout:4000,
    autoplayHoverPause:false,
    transitionStyle:"fade",
    items:1,
    singleItem: true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2     
         },
        1000:{
            items:3
        }
    }
})

$(".nav-toggle").click(function(){
    $(".hamburgerCLICK").toggle("slow");
  });

let navToggle = document.querySelector('.nav-toggle')
let bars = document.querySelectorAll('.bar')

function toggleHamburger(e) {
  bars.forEach(bar => bar.classList.toggle('x'))
}

navToggle.addEventListener('click', toggleHamburger)


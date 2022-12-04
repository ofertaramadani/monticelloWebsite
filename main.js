$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
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

// $('.owl-hero').owlCarousel({
//     loop:true,
//     margin:10,
//     nav:true,
//     responsive:{
//         0:{
//             items:3
//         },
//         600:{
//             items:3      
//          },
//         1000:{
//             items:3
//         }
//     }
// })



$(document).ready(function a(){
    document.getElementById('section1').scrollIntoView({behavior: "smooth"});
})

$(".hamburger").click(function(){
    $(".hamburgerCLICK").toggle();
  });
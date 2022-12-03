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

// const links = document.querySelectorAll('.scroll_to');
// function r(){
// links.forEach((item) =>{
//     item.addEventListener('click',()=>{
//         const el=document.getElementById(item.getAttribute('data-link'));
//         el.current.scrollIntoView({ behavior : 'smooth'});
//     });
// });
// }
// $( document ).ready(r) ;

$(document).ready(function a(){
    document.getElementById('section1').scrollIntoView({behavior: "smooth"});
})

window.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed');
});

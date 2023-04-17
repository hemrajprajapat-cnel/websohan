$(document).ready(function () {
    $('.food-browsing-slider').owlCarousel({
        loop: false,
        margin: 8,
        nav: true,
        dots: false,
        navText: [
            "<i class='bi bi-arrow-left-short'></i>",
            "<i class='bi bi-arrow-right-short'></i>",
          
        ],
        navText: [
            "<i class='bi bi-arrow-left-short'></i>",
            "<i class='bi bi-arrow-right-short'></i>",
        
        ],
        autoplay: false,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 2,
                nav: false,
                touchDrag:false,
                mouseDrag:false,
                pullDrag: false, 
                freeDrag: false
            },
            600: {
                items: 3
            },
            1000: {
                items: 3,
                margin: 20,
            }
        }
    })


  
});
$(function () {
    $('a[href="#search"]').on('click', function (event) {
        event.preventDefault();
        $('#search').addClass('open');
        $('#search > form > input[type="search"]').focus();
    });

    $('#search, #search button.close').on('click keyup', function (event) {
        if (event.target == this || event.target.className == 'close' || event.keyCode == 27) {
            $(this).removeClass('open');
        }
    });

     $(document).ready(function(){
            var submitIcon = $('.searchbar-icon');
            var inputBox = $('.searchbar-input');
            var searchbar = $('.searchbar');
            var isOpen = false;
            submitIcon.click(function(){
                if(isOpen == false){
                    searchbar.addClass('searchbar-open');
                    inputBox.focus();
                    isOpen = true;
                } else {
                    searchbar.removeClass('searchbar-open');
                    inputBox.focusout();
                    isOpen = false;
                }
            });  
             submitIcon.mouseup(function(){
                    return false;
                });
            searchbar.mouseup(function(){
                    return false;
                });
            $(document).mouseup(function(){
                    if(isOpen == true){
                        $('.searchbar-icon').css('display','block');
                        submitIcon.click();
                    }
                });
        });
            function buttonUp(){
                var inputVal = $('.searchbar-input').val();
                inputVal = $.trim(inputVal).length;
                if( inputVal !== 0){
                    $('.searchbar-icon').css('display','none');
                } else {
                    $('.searchbar-input').val('');
                    $('.searchbar-icon').css('display','block');
                }
            }
})
$(document).ready(function () {
    $('.con-browsing-slider').owlCarousel({
        loop: false,
        margin: 8,
        nav: true,
        dots: false,
        navText: [
            "<i class='bi bi-chevron-left'></i>",
            "<i class='bi bi-chevron-right'></i>"
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
    $('.grids-slider').owlCarousel({
        loop: false,
        margin: 8,
        nav: true,
        dots: false,
        navText: [
            "<i class='bi bi-chevron-left'></i>",
            "<i class='bi bi-chevron-right'></i>"
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
                items: 4,
                margin: 20,
            }
        }
    })
    $('.avl-exp-slider').owlCarousel({
        loop: false,
        margin: 8,
        nav: false,
        dots: false,
        navText: [
            "<i class='bi bi-chevron-left'></i>",
            "<i class='bi bi-chevron-right'></i>"
        ],
        autoplay: false,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 2,
                margin:0,
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
                items: 4,
                margin: 20,
                stagePadding:120
            }
        }
    })
    $('.testimonails-slider,.patron-slider').owlCarousel({
        loop: false,
        margin: 0,
        dots: true,
        autoplay: true,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1
            },  
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    })
    $('.about-logo-slider').owlCarousel({
        loop: true,
        margin: 10,
        center: true,
        dots: true,
        nav:false,
        autoplay: true,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 4,
                dots:false,
                margin: 5,
                center:false,
            },
            600: {
                items: 4,
                dots:false,
                margin: 5,
                center:false,
            },
            1000: {
                items: 8
            }
        }
    })
    $('.cop-slider').owlCarousel({
        loop: true,
        margin: 0,
        center: true,
        dots: true,
        nav:false,
        autoplay: true,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    })
    $('.team-slider').owlCarousel({
        loop: true,
        margin: 20,
        center: true,
        dots: true,
        nav:true,
        navText: [
            "<i class='bi bi-chevron-left'></i>",
            "<i class='bi bi-chevron-right'></i>"
        ],
        autoplay: true,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 2,
                nav: false,
                dots:false,
                touchDrag:false,
                mouseDrag:false,
                pullDrag: false, 
                freeDrag: false,
                loop:false,
                margin:0,
               
            },
            600: {
                items: 2
            },
            1000: {
                items: 3
            }
        }
    })
    $("#owl-demo").owlCarousel({
        center: true,
        items: 6,
        nav: false,
        //loop:true,
        navSpeed: 1000,
        rewind: false,
        dots: false,
        margin: 8,
        // navText : ["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"],
        singleItem: true,
        responsive: {
            0: {
                items: 2,
                center:false,
                stagePadding:60
            },
            600: {
                items: 3
            },
            1000: {
                items: 6
            }
        }
    });
    $(".cookslider").owlCarousel({
        autoplay:true,
        slideSpeed: 9000,
        items: 1,
        autoHeight: true,
        loop: true,
        dots: true,
        dotsData: true,
        nav: false,
        center: true,
        responsiveClass: true,
        smartSpeed: 400,
        margin: 0,
    });
    $(".supperclub-slider").owlCarousel({
        autoplay:true,
        slideSpeed: 9000,
        items:3,
        autoHeight: true,
        loop: true,
        dots: false,
        nav: false,
        responsiveClass: true,
        smartSpeed: 400,
        margin: 4,
        stagePadding:25,
    });

  
});




$(document).ready(function(){
    var submitIcon = $('.searchbar-icon');
    var inputBox = $('.searchbar-input');
    var searchbar = $('.searchbar');
    var isOpen = false;
    submitIcon.click(function(){
        if(isOpen == false){
            searchbar.addClass('searchbar-open');
            inputBox.focus();
            isOpen = true;
        } else {
            searchbar.removeClass('searchbar-open');
            inputBox.focusout();
            isOpen = false;
        }
    });  
     submitIcon.mouseup(function(){
            return false;
        });
    searchbar.mouseup(function(){
            return false;
        });
    $(document).mouseup(function(){
            if(isOpen == true){
                $('.searchbar-icon').css('display','block');
                submitIcon.click();
            }
        });
});
    function buttonUp(){
        var inputVal = $('.searchbar-input').val();
        inputVal = $.trim(inputVal).length;
        if( inputVal !== 0){
            $('.searchbar-icon').css('display','none');
        } else {
            $('.searchbar-input').val('');
            $('.searchbar-icon').css('display','block');
        }
    }

    
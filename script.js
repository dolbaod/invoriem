//Carousel
$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        dots: false,
        margin: 48,
        loop: true,
        items: 3.4,
        responsive : {
            // breakpoint from 0 up
            0 : {
                items: 1.3,
                margin: 30,
                autoWidth:true,
                
            },
            // breakpoint from 480 up
            480 : {
                items: 1.3,
                margin: 30,
                autoWidth:true,
            },
            // breakpoint from 768 up
            768 : {
                
            }
        }
    });

});

//Video
const videoBtn = document.querySelector('.play-btn');
const videoWrapper = document.querySelector('.video-item');
const video = document.querySelector('.video-file');

videoWrapper.addEventListener('click', function () {
    if (video.paused) {
        videoWrapper.classList.remove('video-overlay'); 
        videoBtn.classList.add('none');
        video.play();
    }
    else {
        videoWrapper.classList.add('video-overlay');
        videoBtn.classList.remove('none');
        video.pause();
    }
});

//Burger
document.querySelector('.menu-icon-wrapper').onclick = function(){

    document.querySelector('.menu-icon').classList.toggle('menu-icon-active');
    
    document.querySelector('.nav-row').classList.toggle('nav--visible');
}
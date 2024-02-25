$(document).ready(function(){
    $(window).scroll(function(){
        // sticky navbar on scroll script
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        
        // scroll-up button show/hide script
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function(){
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });

    // toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // typing text animation script
    var typed = new Typed(".typing", {
        strings: [" guy to hope to be a developer" ,"Cosmopolitan city lover","Technician", "Street Food","Thailand Lover"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed = new Typed(".typing-2", {
        strings: ["Python Lover","E Commerce Lover","Blockchain Lover","Mobile Developer Lover" ,"Crypto Lover", "Tech Lover","Music Lover","Algorithm Lover","Continuous Learning Lover"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed = new Typed(".typing-3", {
        strings: ["Singapore","Stockholm","London","Auckland","Toronto","Amsterdam","Berlin","Sao Paulo","Rio Janeiro","Hong-Kong","Dubai","Tokyo","Osaka","N-Y","Sydney","Melbourne","Copenhagen","Vancouver","Montreal","Seoul"],
        typeSpeed:100,
        backSpeed:60,
        loop:true
    });

    // owl carousel script
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }
    });
});


window.onload = function(){
    let player = document.getElementById("player"),
        play = document.getElementById("play");
    
    play.addEventListener("click",function(){
      player.play();
    });
  }
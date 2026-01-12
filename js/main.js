$( document ).ready(function() {

    $(".case-study").hide();

    $("#main-text a").click(function() {
        $(".case-study" ).fadeIn(600);
        $("body").addClass("noScroll");
    });

    $("#case-study-close").click(function() {
        $( ".case-study" ).fadeOut(600);
        $("body").removeClass("noScroll");
    });

$("#fakeLoader").fakeLoader({
  timeToHide:400,
  zIndex:999,
  bgColor:"#ffffff",
});

var didScroll;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = $('nav').outerHeight();

$(window).scroll(function(event){
    didScroll = true;
});

setInterval(function() {
    if (didScroll) {
        hasScrolled();
        didScroll = false;
    }
}, 10);

function hasScrolled() {
    var st = $(this).scrollTop();
    
    if(Math.abs(lastScrollTop - st) <= delta)
        return;
    
    if (st > lastScrollTop && st > navbarHeight){
        // Scroll Down
        $('nav').removeClass('nav-down').addClass('nav-up');
    } else {
        // Scroll Up
        if(st + $(window).height() < $(document).height()) {
            $('nav').removeClass('nav-up').addClass('nav-down');
        }
    }
    
    lastScrollTop = st;
}

$('#main-image').height($(window).height())

$('.scroll').click(function(evt) {
      evt.preventDefault();
      $('html, body').stop().animate({
        scrollTop: $( $(this).attr('href') ).offset().top
      }, 800);
    });

});

$(window).resize(function() {
    $('#main-image').height($(window).height())
});




$(document).on("scroll", function () {
  var pageTop = $(document).scrollTop()
  var pageBottom = pageTop + $(window).height() 
  var tags = $(".fade")

  for (var i = 0; i < tags.length; i++) {
    var tag = tags[i]

    if ($(tag).position().top < pageBottom - 90) {
      $(tag).addClass("visible")
    } //else {
      //$(tag).removeClass("visible")
    //}
  }
})


$(window).scroll(function() {   

    
    var imageHeight = $('#main-image').height(); 

    $("#main-image").css("opacity", 0.4 - $(window).scrollTop() / imageHeight );
    $("#main-image-gradient").css("opacity", 0.8 - $(window).scrollTop() / imageHeight );
    $("#main-text, #main-scroll").css("opacity", 1 - $(window).scrollTop() / imageHeight );


    var scroll = $(window).scrollTop();
    var scrollHeight = $("#main-image").height()

    if (scroll >= scrollHeight) {
        $(".nav-home").addClass("header-white");
    } else {
        $(".nav-home").removeClass("header-white");
    }
});









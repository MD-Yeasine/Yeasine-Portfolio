$('.slide').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  nextArrow:".next",
  prevArrow:".prev",

});
$('.testi_slide').slick({
  slidesToShow: 2,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  nextArrow:".next2",
  prevArrow:".prev2",

  responsive: [
    {
      breakpoint: 575,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
});



$(window).scroll(function(){
  var scrolling = $(this).scrollTop();


  if(scrolling > 40){
    $(".back_top i").fadeIn(500)
  }
  else{
    $(".back_top i").fadeOut(500)
  }




  if(scrolling > 40){
    $(".nav_bg").addClass("bg")
  }
  else{
    $(".nav_bg").removeClass("bg")
  }


  




})




$(".back_top i").click(function(){
  $('body, html').animate({
    scrollTop:0
  })
})


		
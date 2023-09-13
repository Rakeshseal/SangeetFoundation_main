
$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:false,
        autoplay:true,
        autoplayTimeout:2000,
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
    });
    
    $('.counter').counterUp({
        delay: 10,
        time: 2000
    });

    //Event card popup

    $('.card-1').click(function(){
        $('.img-1').css('display', 'block');
        $('.card_sec').css('opacity', '7%');

    });

    $('.close').click(function(){
      $('.img-1').css('display', 'none');
      $('.card_sec').css('opacity', '100%');
      
  })

  $('.card-2').click(function(){
    $('.img-2').css('display', 'block');
    $('.card_sec').css('opacity', '7%');

});

$('.close').click(function(){
  $('.img-2').css('display', 'none');
  $('.card_sec').css('opacity', '100%');
  
})

$('.card-3').click(function(){
  $('.img-3').css('display', 'block');
  $('.card_sec').css('opacity', '7%');

});

$('.close').click(function(){
$('.img-3').css('display', 'none');
$('.card_sec').css('opacity', '100%');

})


   
});






jQuery( function($){

   $('.owl-carousel').owlCarousel();

   let button = $('.featured-item a')

   button.addClass('btn btn-dark stretch-link') 

   $('.featured-item:first h4').append('<span class="badge bg-success">Novo</span>')

})

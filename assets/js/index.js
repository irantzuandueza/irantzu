/* navbar */
var desplegado = $(".desplegado");
var menuDesplegadoMovil = $(".menu-desplegado-movil")

var btn = $('.btn');
var btn2 = $(".btn-2");

btn2.click(function() {
  $(this).toggleClass('active');
  $(this).toggleClass('not-active');
  desplegado.toggle("slide");
  $("#overlay").toggle("slide");
  $(".caballo").toggleClass("caballo-desplegado");
});

$("#overlay").click(function(){
  $("#overlay").hide("slide");
  desplegado.hide("slide");
  btn2.toggleClass("not-active");
  btn2.toggleClass("active");
  $(".caballo").toggleClass("caballo-desplegado");
})

btn.click(function(){
  $(this).toggleClass('active');
  $(this).toggleClass('not-active');
  menuDesplegadoMovil.toggle("slide");
  $(".caballo").toggleClass("logo-fondo-claro");
  $(".nav-bar").toggleClass("nav-bar-fondo-claro");
  $(".nav-bar-fondo").toggleClass("nav-bar-fondo-transparente");
  $(".nav-bar-fondo-home").toggleClass("nav-bar-fondo-transparente");
  console.log("entra");
})

/* $(window).scroll(function(){
  var scrollTop = $(window).scrollTop();
  var fondoCambiante = $("#fondo-cambiante");
  if(scrollTop >= 300){
    fondoCambiante.css("background-position", "0% 17%",);
  }
  if(scrollTop >= 800){
    fondoCambiante.css("background-position", "0% 27%",);
  }
  if (scrollTop >= 1000){
    fondoCambiante.css("background-position", "0% 37%",);
  }
  if (scrollTop >= 1250){
    fondoCambiante.css("background-position", "0% 47%",);
  }
  if (scrollTop >= 1500){
    fondoCambiante.css("background-position", "0% 57%",);
  }
  if (scrollTop >= 1750){
    fondoCambiante.css("background-position", "0% 67%",);
  }
  if (scrollTop >= 2000){
    fondoCambiante.css("background-position", "0% 77%",);
  }
  if (scrollTop < 300){
    fondoCambiante.css("background-position", "0% 0%",);
  }
}) */

$(window).scroll(function(){
  var scrollTop = $(window).scrollTop();
  var fondoCambiante = $("#fondo-cambiante");
  var pantallaTotal = 3067.3;
  var porcentaje = (scrollTop / pantallaTotal)*100 +"%";
  var r = document.querySelector(':root');
  var rs = getComputedStyle(r);
  r.style.setProperty('--backgroundpositionY', porcentaje);
})



/* carrusel-home*/
$(document).ready(function(){
  $('.carrusel').slick({
    slidesToShow: 3,
    slidesToScroll: 3,
    prevArrow: $(".prev"),
    nextArrow: $(".next")
  });
});

$(document).ready(function(){
  $('.carrusel-movil').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: $(".prev-m"),
    nextArrow: $(".next-m")   
  });
});


$(".trabajo-1").hover(function(){
  $(".relleno-texto-p-1").slideToggle();
})

$(".trabajo-2").hover(function(){
  $(".relleno-texto-p-2").slideToggle();
})

$(".trabajo-3").hover(function(){
  $(".relleno-texto-p-3").slideToggle();
})

$(".trabajo-4").hover(function(){
  $(".relleno-texto-p-4").slideToggle();
})

$(".trabajo-5").hover(function(){
  $(".relleno-texto-p-5").slideToggle();
})

$(".trabajo-6").hover(function(){
  $(".relleno-texto-p-6").slideToggle();
})



/* carrusel-portfolio-packaging */

$(document).ready(function(){
  $('.tarjetas-menu-packaging').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: $(".prev-p"),
    nextArrow: $(".next-p")
  });
});

/* carrusel-portfolio-modelado */

$(document).ready(function(){
  $('.tarjetas-menu-modelado').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    prevArrow: $(".prev-p"),
    nextArrow: $(".next-p")
  });
});

$(document).ready(function(){
  $('.tarjetas-menu-modelado-m').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
   
    nextArrow: $(".next-m-m")
  });
});


/* carrusel-porfolio */

$(document).ready(function(){
  $('.p-carrusel').slick({
    slidesToShow: 3,
    slidesToScroll: 3,
    prevArrow: $(".prev-p"),
    nextArrow: $(".next-p")
  });
});

$(document).ready(function(){
  $('.p-carrusel-m').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: $(".p-prev-m"),
    nextArrow: $(".p-next-m")
  });
});

$(".p-trabajo-1").hover(function(){
  $(".p-relleno-texto-p-1").slideToggle();
})

$(".p-trabajo-2").hover(function(){
  $(".p-relleno-texto-p-2").slideToggle();
})

$(".p-trabajo-3").hover(function(){
  $(".p-relleno-texto-p-3").slideToggle();
})

$(".p-trabajo-4").hover(function(){
  $(".p-relleno-texto-p-4").slideToggle();
})

$(".p-trabajo-5").hover(function(){
  $(".p-relleno-texto-p-5").slideToggle();
})

$(".p-trabajo-6").hover(function(){
  $(".p-relleno-texto-p-6").slideToggle();
})



/* desplegar mas info */

var botonPC = $(".desplegar-pc");
var botonRF = $(".desplegar-rf");

botonPC.click(function(){
  $(".pc-recogido").toggle("slide");
  
  if (  $( ".triangulo-1" ).css( "transform" ) == 'none' ){
      $(".triangulo-1").css("transform","rotate(90deg)");
  } 
  else {
      $(".triangulo-1").css("transform","");
  }

  
  console.log("entra");
})    

botonRF.click(function(){
  $(".rf-recogido").toggle("slide");
  
  if (  $( ".triangulo-2" ).css( "transform" ) == 'none' ){
      $(".triangulo-2").css("transform","rotate(90deg)");
  } 
  else {
      $(".triangulo-2").css("transform","");
  }

  
  console.log("entra");
}) 

new WOW().init();









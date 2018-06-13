

/*$('.carousel').flickity({
  
  cellAlign: 'left',
  contain: true;
});*/



  /* Smooth Scrolling */
  $('.menu').on('click', function(event) {
    
  	/*
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);      
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
      return false;
      }
    }
  })
});
/* Check for email */


    
/* Select button and if else alert*/

$('#submit').on('click', function(){
	event.preventDefault();
var text = $("input").val();
var filter = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;

 if(filter.test(text)){
    alert('Thanks for Subscribing!');
    $('text').val("");
   }else{
    alert('Please enter a valid email address.');
   }
  });


/*$('.carousel').flickity({
  
  cellAlign: 'left',
  contain: true;
});*/

/*$(function () {

  /* Smooth Scrolling 
  $('a[href*="#"]:not([href="#"])').click(function () {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');

      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});
/* Check for email */

/* Select button and if else alert*/

/*$('#submit').on('click', function () {
  event.preventDefault();
  var text = "input".val();
  var filter = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;

  if (filter.test(text)) {
    alert('Thanks for Subscribing!');
    $('text').val("");
  } else {
    alert('Please enter a valid email address.');
  }
});

},{}]},{},[1]); */

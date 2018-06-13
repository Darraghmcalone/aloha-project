(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
'use strict';

/*$('.carousel').flickity({
  
  cellAlign: 'left',
  contain: true;
});*/

/* Smooth Scrolling */
$('.menu').on('click', function (event) {
  event.preventDefault();
  var target = "#" + $(this).data('target');
  $('html, body').animate({
    scrollTop: $(target).offset().top
  }, 1300, 'easeInOutCubic');
});
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

$('#submit').on('click', function () {
  event.preventDefault();
  var text = $("input").val();
  var filter = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;

  if (filter.test(text)) {
    alert('Thanks for Subscribing!');
    $('text').val("");
  } else {
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

},{}]},{},[1]);

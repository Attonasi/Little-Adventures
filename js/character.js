'use strict';

$('.avatars').hover(
  function(){$(this).animate({width: 300, height: 300}, 750);},
  function(){$(this).animate({width: 150, height:150}, 250);}

);

'use strict';

$('.cities').hover(
  function(){$(this).animate({width: 250}, 600);},
  function(){$(this).animate({width: 200}, 100);}
);

$('#city1').click(function(){
  setLocalStorage('city', 'seattle');
  window.location.href = 'playplace.html';
});

$('#city2').click(function(){
  setLocalStorage('city', 'san francisco');
  window.location.href = 'playplace.html';
});
$('#city3').click(function(){
  setLocalStorage('city', 'new york');
  window.location.href = 'playplace.html';
});

function setLocalStorage(keyString, dataToBeStored){

  var stringifiedData = JSON.stringify(dataToBeStored);
  localStorage.setItem(keyString, stringifiedData);
}

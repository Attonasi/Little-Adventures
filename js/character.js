'use strict';

$('.avatars').hover(
  function(){$(this).animate({width: 300, height: 300}, 400);},
  function(){$(this).animate({width: 150, height: 150}, 100);}
);

$('#character1').click(function(){
  setLocalStorage('currentAvatar', 'bear1');
  window.location.href = 'city.html';
});

$('#character2').click(function(){
  setLocalStorage('currentAvatar', 'bear2');
  window.location.href = 'city.html';
});

$('#character3').click(function(){
  setLocalStorage('currentAvatar', 'bear3');
  window.location.href = 'city.html';
});

$('#character4').click(function(){
  setLocalStorage('currentAvatar', 'bear4');
  window.location.href = 'city.html';
});

$('#character5').click(function(){
  setLocalStorage('currentAvatar', 'bear5');
  window.location.href = 'city.html';
});

function setLocalStorage(keyString, dataToBeStored){

  var stringifiedData = JSON.stringify(dataToBeStored);
  localStorage.setItem(keyString, stringifiedData);
}

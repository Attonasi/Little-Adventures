'use strict';



$('#loginButton').click(function(){

  event.preventDefault();

  var userLoginName = $('#nameEnter').val();
  var loginNameStringinfied = JSON.stringify(userLoginName);
  localStorage.setItem('userName', loginNameStringinfied);
  window.location.href = 'character.html';
});

$('#createButton').click(function(){
  event.preventDefault();
  window.location.href = 'createnew.html';

});

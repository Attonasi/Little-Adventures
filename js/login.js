'use strict';

// var allUsers = [];

$('.message a').click(function(){
  $('form').animate({height: 'toggle', opacity: 'toggle'}, 'slow');
});

$('#loginButton').click(function(){
  event.preventDefault();

  var userLoginName = $('#nameEnter').val();
  var userPasswordAttempt = $('#userPasswordAttempt').val();


  var loginNameStringinfied = JSON.stringify(userLoginName);
  localStorage.setItem('currentUser', loginNameStringinfied);

  console.log(userLoginName, userPasswordAttempt);
  window.location.href = 'character.html';
});

$('#createAccountButton').click(function(){
  event.preventDefault();

  var newUserName = $('#newUserName').val();
  var newPassWord1 = $('#newPassWord1').val();
  var newPassWord2 = $('#newPassWord2').val();
  var newEmailAddress = $('#newEmailAddress').val();

  // checkInput(newUserName, newPassWord1, newPassWord2, newEmailAddress);

  var loginNameStringinfied = JSON.stringify(newUserName);
  localStorage.setItem('currentUser', loginNameStringinfied);

  window.location.href = 'character.html';
  console.log(newUserName, newPassWord1, newPassWord2, newEmailAddress);
});


// function checkInput(newUserName, newPassWord1, newPassWord2, newEmailAddress) {
//
//   var userName = newUserName;
//   var userPassword1 = newPassWord1;
//   var userPassword2 = newPassWord2;
//   var userEmail = newEmailAddress;
//   console.log(userEmail, userName, userPassword1, userPassword2);
//
//   if(userEmail.indexOf('@') === -1){
//     return alert('Invalid Email address, please try again.');
//   }
//
//   if(userEmail.indexOf('.') === -1){
//     return alert('Invalid Email address, please try again.');
//   }
//
//   if(userPassword1 !== userPassword2){
//     return alert('Your passwords did not match, please try again.');
//   }
//
//   if(userPassword1.length < 8){
//     return alert('Password must be at least 8 characters');
//   }
//
//   if(userName === ''){
//     return alert('Please enter your name.');
//   }
//
//   new AllUserLogins(userName, userEmail, userPassword1);
// }
//
// function AllUserLogins(userLoginName, userEmail, userPassword1) {
//   this.userNames = userLoginName,
//   this.userEmails = userEmail,
//   this.userPasswords = userPassword1
//
//   allUsers.push(this);
// }

'use strict';

$('#createButton').click(function(){

  event.preventDefault();

  var userLoginName = $('#formName').val();
  var userEmail = $('#formEmail').val();
  var userPassword1 = $('#pword1').val();
  var userPassword2 = $('#pword2').val();

  console.log(userEmail, userLoginName, userPassword1, userPassword2);

  if(userEmail.indexOf('@') === -1){
    return alert('Invalid Email address, please try again.');
  }

  if(userEmail.indexOf('.') === -1){
    return alert('Invalid Email address, please try again.');
  }

  if(userPassword1 !== userPassword2){
    return alert('Your passwords did not match, please try again.');
  }

  if(userPassword1.length < 8){
    return alert('Password must be at least 8 characters');
  }

  if(userLoginName === ''){
    return alert('Please enter your name.');
  }

  createNewUser(userLoginName, userEmail, userPassword1);
});

function createNewUser(userLoginName, userEmail, userPassword1){

  // if(localStorage.getItem('AllUserLogins') === null){
  //
  // }

  new AllUserLogins(userLoginName, userEmail, userPassword1);

  console.log(AllUserLogins);

  var AllUserLoginsStringified = JSON.stringify(AllUserLogins);
  localStorage.setItem('AllUserLogins', AllUserLoginsStringified);

  console.log(AllUserLogins, AllUserLoginsStringified);
  // window.location.href = 'character.html';
}

function AllUserLogins(userLoginName, userEmail, userPassword1) {
  this.userNames = userLoginName,
  this.userEmails = userEmail,
  this.userPasswords = userPassword1
}

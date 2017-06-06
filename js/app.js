$(document).ready(function () {
  $('.swap2login').click(function () {
    $('#signUp').addClass('hide');
    $('#login').removeClass('hide');
  });
  $('.swap2signup').click(function () {
    $('#signUp').removeClass('hide');
    $('#login').addClass('hide');
  });

  $('#signUpForm').submit(function(){
    alert('attempting to sign up');
    return false;
  });
  $('#loginForm').submit(function(){
    alert('attempting to login');
    return false;
  });
});
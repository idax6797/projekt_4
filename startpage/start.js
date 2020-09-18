var email = document.forms['form']['email'];
var password = document.forms['form']['password'];

var email_error = document.getElementById('email_error')
var pass_error = document.getElementById('pass_error')

function validation() {
  if(email.value.length < 9){
    email.style.border = "1px solid red";
    email.focus();
    return:false;
  }
  if(password.value.length < 9){
    password.style.border = "1px solid red";
    password.focus();
    return:false;
  }

}

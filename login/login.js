
var fornavn = document.forms['form']['fornavn'];
var kode = document.forms['form']['kode'];

var fornavn_error = document.getElementById('email_error');
var kode_error = document.getElementById('kode_error');

fornavn.addEventListener('textInput', fornavn_Verify);
kode.addEventListener('textInput', kode_Verify);

function validated(){
  if (fornavn.value.length < 9) {
    fornavn.style.border = "1px solid red";
    fornavn_error.style.display ="block";
    fornavn.focus();
    return false;
  }
  if (kode.value.length < 9) {
    kode.style.border = "1px solid red";
    kode_error.style.display ="block";
    kode.focus();
    return false;
}

function fornavn_Vertify(){
  if(fornavn.value.length >= 8){
    fornavn.style.border = "1px solid silver";
    fornavn_error.style.display = "none";
    return true;
  }
}

function kode_Verify(){
  if (kode.value.length >= 6) {
    kode.style.border = "1px solid silver";
    kode_error.style.display ="none";
    return true;
}
}

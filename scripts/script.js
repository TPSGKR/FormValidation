'use strict';
const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirm-password');


const showError = function(input,message){
   const formControl=input.parentElement;
   formControl.className = 'form-control error';
   const small =formControl.querySelector('small');
   small.innerText=message;
  };
  const showSucess = function(input){
    const formControl=input.parentElement;
    formControl.className = 'form-control sucess';
   };
   const validEmail= function(input) { 
     const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
   return re.test(String(input).toLowerCase());
  };


form.addEventListener('submit',(e) =>{
  e.preventDefault();  
  if(username.value === '')
  {
    showError(username,'User Name is Required');
  }
  else 
  {
    showSucess(username);
  }
  if(email.value === '')
  {
  showError(email,'Email is Required')
  }
  else if(!validEmail(email.value)){
    showError(email,'Enter valid email');
  }
  else{
showSucess(email);
  }
  if(password.value === '')
  {
showError(password,'password is Required');
  }
  else{
showSucess(password);
  }
  if(confirmPassword.value ==='')
  {
showError(confirmPassword,'confirm password is Required');
  }
  else if(password.value === confirmPassword.value){
  showSucess(confirmPassword);
  }
  else
  {
    showError(confirmPassword,'confirm password is not matched with Password'); 
  }

});
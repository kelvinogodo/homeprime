// // display menu section
function displayMenu(){
    document.getElementById('nav-list').style.width='280px';
   };
   function closeMenu(){
    document.getElementById('nav-list').style.width='0px';
   };
   function showList(){
    document.getElementById('program-items').style.height='300px'
    document.getElementById('lander').style.marginTop='80px'
    document.getElementById('arrow-down').style.width='0px'
    document.getElementById('arrow-up').style.width='30px';
   };
   function menuClose(){
    document.getElementById('program-items').style.height='0px'
    document.getElementById('lander').style.marginTop='0px'
    document.getElementById('arrow-down').style.width='30px'
    document.getElementById('arrow-up').style.width='0px';
   };

//    // form validation section
// var name=document.getElementById('name-input');
// var email=document.getElementById('email-input');
// var phoneNumber=document.getElementById('phone-number-input');
// var password=document.getElementById('password-input');
// var confirmPassword=document.getElementById('confirm-password-input');
var allInputs=document.querySelectorAll('.inputs');


// form validation section

function formValidate(){
    for (var i=0 ; i <= allInputs.length; i++){
        if(allInputs.value=""){
            console.log('enter the vacant fields');
        }
        else{
            console.log('your form was succesfully submitted');
        }

    }
};

// calling the function on form submit
document.getElementById('log').addEventListener('onsubmit',formValidate());

// var myCol=document.querySelector('.my-col');
// console.log(myCol);



const resetButton=document.getElementById('resetButton')


resetButton.addEventListener("click", function() {
   window.scrollTo(0,0);
})
//    const form = document.querySelector('#form')
//     const useEmail = document.querySelector('#useEmail')


// useEmail.addEventListener('click',()=>{
//     let x = document.forms[0].elements[11].value
//     console.log(x)
//     // form.setAttribute('action',`<form action="https://formsubmit.co/${x}" method="post">`) 
//         form.action = `<form action="https://formsubmit.co/${x}" method="post">`
//         console.log(`<form action="https://formsubmit.co/${x}" method="post">`)
// })


function sendmail(){

var name = $('#name').val();
var gender = $('#gender').val();
var age = $('#age').val();
var height = $('#height').val();
var weight = $('#weight').val();
var bloodGroup = $('#bloodGroup').val();
var condition = $('#condition').val();
var appointment = $('#appointment').val();
var address = $('#address').val();
var email = $('#emailaddress').val();
var phoneno = $('#phoneno').val();
var pincode = $('#pincode').val();


var phoneno = $('#phoneno').val();
// var body = $('#body').val();

var Body='Name: '+name+'<br>gender: '+gender+'<br>age: '+age+'<br>height: '+height+'<br>weight: '+weight+'<br>bloodGroup: '+bloodGroup+'<br>condition: '+condition+'<br>appointment: '+appointment+'<br>address: '+address+'<br>email: '+email+'<br>phoneno: '+phoneno+'<br>pincode: '+pincode;
//console.log(name, phone, email, message);

Email.send({
Host : "smtp.gmail.com",
Username : "sukibhavaHMS@gmail.com",
Password : "sukibhavahms7",
To: email,
From: "sukibhavaHSM@gmail.com",
Subject: "Your Appointment is confirmed "+name,
Body: Body
}).then(
message =>{
//console.log (message);
if(message=='OK'){
           alert('Your mail has been send. Thank you for connecting.');
           }
           else{
               console.error (message);
               alert('There is error at sending message. ')
               
           }

       }
   );



}








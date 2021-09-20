const family = document.querySelector('.family');
const culture = document.querySelector('.culture');
const events = document.querySelector('.events');
const qmail = document.querySelector('.qmail');
const id = document.querySelector('.CunyID');
const errorMessage = document.querySelector('.error');
const button = document.querySelector('.submit');
const tab = document.querySelector('.tab');

var filename = "Signup.txt";
var counter = 1;
var timeOutID;



window.onload = function(){
  console.log(window.location.href);

  if (window.location.href === "file:///D:/Projects/HTML/ALAS%20Website/ALASEvents.html") {
    console.log("We got the page babe");
    var day = new Date();
    var number = day.getDay();
    for (var i = 0; i <= number; i++) {
      if (i <  number) {
        var weekDay = document.getElementById(i);
        weekDay.classList.add("past");
      }
      if(i=== number){
        var weekDay = document.getElementById(i);
        weekDay.classList.add("present");
      }
    }
  }

    timeOutID = window.setInterval(changeAllSlides, 5000);



    window.addEventListener('blur', function (event) {
      clearTimeout(timeOutID);
      console.log("lost focus");
  });
    window.addEventListener('focus', function (event) {
      timeOutID = window.setInterval(changeAllSlides, 5000);
      console.log("gained focus");
  });
    


  function changeAllSlides() {   
    counter++;
    if(counter>=7){
      counter=1;
    }
    $(".family").fadeOut(500);
    setTimeout(function() {
            family.innerHTML= "<img src='img/slideshow/slideshow/photo"+counter+".jpg'>";
        }, 500);
    $(".family").fadeIn(500);
    console.log(1);
  }

$(".submit").on('click', function(){

  if(inputCheck(qmail,id)){

    sendEmail(qmail,id);
  }
  });
    return false;
    
}




function sendEmail(qmail,id){
  Email.send({
    Host: "smtp.gmail.com",
    Username: 'anthonyninodeguzman@gmail.com',
    Password: "xpykavmrillufuaz",
    To: 'anthonyninodeguzman@gmail.com',
    From: 'anthonyninodeguzman@gmail.com',
    Subject: `${qmail.value} is interested in joining ALAS!`,
    Body: `Name: ${qmail.value} <br>CunyID: ${id.value}`,
  })
  Email.send({
    Host: "smtp.gmail.com",
    Username: 'anthonyninodeguzman@gmail.com',
    Password: "xpykavmrillufuaz",
    To: `${qmail.value}`,
    From: 'anthonyninodeguzman@gmail.com',
    Subject: `Thank you for your interest in ALAS!`,
    Body: `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title></title>
  <style>
    @font-face{
      font-family: Acme;
      src: url(fonts/Acme/Acme-Regular.ttf);
    }
    @font-face{
      font-family: LuckiestGuy;
      src:  url(fonts/LG/LuckiestGuy-Regular.ttf);
    }
    .title{
      font-family: 'LuckiestGuy', impact;
      font-size: 50px;
      font-weight: bold;
      color: #ffd700;
      -webkit-text-stroke: .5px black;
    }
    .highlight{
      color: #ffd700;
      font-size: 30px;
      font-weight: bold;
      -webkit-text-stroke: .3px black;
    }
    body {    
        margin: 0 !important;
        padding: 0 !important;
        background-color: #ffecca;
    }
    .Logo{
      width: 100%;
      padding-top: 1%;
      padding-bottom: 1%;
      background-color: gold;
    }
      .AlasPhoto{
      width:  15%;
      margin-left: 42.5%;
    }
    p{
      font-size: 25px;
      font-family: 'Acme', sans-serif;
      text-align: center;
      margin-left: 6%;
      margin-right: 6%;
    }
    .photo{
      width: 100%;
      margin-top: 10%;
      border-radius: 3em;
      box-shadow: 0 0 16px 6px #ffd700;
    }
    button{
      background-color: #586aea;
      color: white;
      font-family: 'Luckiest Guy', sans-serif;
      font-size: 27px;
      font-weight: bold;
      -webkit-text-stroke: .3px black;
      height: 60px;
      width: 80%;
      border-radius: 25px;
      text-shadow: yellow;
    }
    button:hover{
      background-color: #343f8f;
      color: whitesmoke;
    }
  </style>
</head>
<body>
  <div class="Logo">
      <table width="100%" border="0" cellspacing="0" cellpadding="0">
    <tr>
        <td align="center">
            <img src="https://media.discordapp.net/attachments/647828208657629194/880083885633974322/ALASTransparent.png">
        </td>
    </tr>
</table>
    
  </div>
  <p>
    <span class="title">WELCOME TO ALAS!</span>
    <img class="photo" src="https://media.discordapp.net/attachments/647828208657629194/880084930380591145/photo3.jpg">
    <br><br>We appreciate you taking your time upon visiting the ALAS website and taking interest to our Club! 
    <br><br>If you would like to join our discord, feel free to click the button down below: (Once invited be sure to <span class="highlight">verify yourself</span> in the verifications channel by typing your Name and QMail as well as viewing and <span class="highlight">reacting to the #rules</span> once verified)
    <br><br><a href="https://discord.gg/MeAaDasSbs"><button>Discord!</button></a>
    <br><br>Thank you so much and we hope you enjoyed your stay!
    <br><br>-The Alliance of Latin American Students
  </p>
</body>
</html>
    
`,
  })
  alert("Submission Completed! An email will be sent directly to you. If not, make sure it was typed correctly.");
  qmail.value = "";
  id.value = "";
  console.log("SUCCESS");
}

function inputCheck(qmail,id){
  if (qmail.value===""||id.value==="") {
    errorMessage.innerHTML = "Make sure to write both your QMail and CunyID";
    return false;
  }
  errorMessage.innerHTML = "";
  console.log("true");
  return true;
}
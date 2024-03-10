var num1=Math.floor(Math.random()*6)+1;
var img1="images/dice"+num1+".png"
document.querySelectorAll("img")[0].setAttribute("src",img1)

var num2=Math.floor(Math.random()*6)+1;
var img2="images/dice"+num2+".png"
document.querySelectorAll("img")[1].setAttribute("src",img2)

if(num1>num2) document.querySelector("h1").innerHTML="ALICE WINS!!"
else if(num1<num2) document.querySelector("h1").innerHTML="BOB WINS!!!"
else document.querySelector("h1").innerHTML="DRAW :("
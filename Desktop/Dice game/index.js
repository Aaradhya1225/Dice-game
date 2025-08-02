var randomnumber1 = Math.floor(Math.random()*6)+1;
var randomDiceimage = "dice"+ randomnumber1 + ".png";
var randomImagesource = "images/"+randomDiceimage;
var img1= document.querySelectorAll("img")[0];
img1.setAttribute("src",randomImagesource);

var randomnumber2 = Math.floor(Math.random()*6)+1;
var randomDiceimage2 = "dice"+ randomnumber2 + ".png";
var randomImagesource2 = "images/"+randomDiceimage2;
var img1= document.querySelectorAll("img")[1];
img1.setAttribute("src",randomImagesource2);

if(randomnumber1>randomnumber2){
    document.querySelector("h1").innerHTML="I win! I win!😁"
}
else if(randomnumber2>randomnumber1){
    document.querySelector("h1").innerHTML="You win! You win!😁"
}
else{
document.querySelector("h1").innerHTML="it's A Dwar, Let's play Again!😍"
}


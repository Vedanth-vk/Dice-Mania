var diceRollPlayerOne = Math.round(Math.random()*6) +1;
var diceRollPlayerTwo = Math.round(Math.random()*6)+1;

var randomDiceImage1 = 'dice'+diceRollPlayerOne+'.png';
var randomDiceImage2 = 'dice'+diceRollPlayerTwo+'.png';
var imageSource = "C:/Users/vvkst/OneDrive/Desktop/Vedanth Vk/Programming Portfolio/Dice Game/images/"+randomDiceImage1;
var imageSource2 = "C:/Users/vvkst/OneDrive/Desktop/Vedanth Vk/Programming Portfolio/Dice Game/images/"+randomDiceImage2;
var image1 = document.querySelectorAll('img')[0];
var image2 = document.querySelectorAll('img')[1];


image1.setAttribute("src", imageSource);
image2.setAttribute("src", imageSource2);









if (diceRollPlayerOne > diceRollPlayerTwo){
    document.querySelector("h1").innerHTML="Player 1 Wins";
    document.getElementById("player-1").style.color= "green";
} else if(diceRollPlayerTwo === diceRollPlayerOne){
    document.querySelector("h1").innerHTML="Draw!";
} else {
    document.querySelector("h1").innerHTML="Player 2 Wins";
    document.getElementById("player-2").style.color= "green";
}

if(diceRollPlayerOne === 1){
    
} else if (diceRollPlayerOne === 2){
    
} else if (diceRollPlayerOne === 3){
    
} else if (diceRollPlayerOne === 4){
    
} else if (diceRollPlayerOne === 2){
    
} else {
    
}
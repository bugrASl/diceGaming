document.addEventListener("DOMContentLoaded", () => {
    
    if (text1 > text2){
        document.querySelector("h1").innerHTML="Player 1 WINS! 🚩";
    }
    else if (text1 < text2) {
        document.querySelector("h1").innerHTML="Player 2 WINS! 🚩";
    }else{
        document.querySelector("h1").innerHTML="DRAW! 🏳️";
    }
    
});
var randomNumber1 = Math.random() * 6 ;
var randomNumber2 = Math.random() * 6 ;
randomNumber1 = Math.ceil(randomNumber1) ; 
randomNumber2 = Math.ceil(randomNumber2) ; 
var text1 = "images/dice" + randomNumber1 + ".png";
var text2 = "images/dice" + randomNumber2 + ".png";
document.querySelectorAll("img")[0].setAttribute("src",text1);
document.querySelectorAll("img")[1].setAttribute("src",text2);
/*if (text1 > text2){
    document.querySelector("h1").innerHTML="Player 1 WINS! 🚩";
}
else if (text1 < text2) {
    document.querySelector("h1").innerHTML="Player 2 WINS! 🚩";
}else{
    document.querySelector("h1").innerHTML="DRAW! 🏳️";
}*/
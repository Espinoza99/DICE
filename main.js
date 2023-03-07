let randomNumber1 = Math.ceil(Math.random() * 6); //1 - 6
let randomNumber2 = Math.ceil(Math.random() * 6);

let randomDiceImage = "/img" + "/dice" + randomNumber1 + ".png"; //dice1.png - dice6.png
let randomDiceImage2 = "/img" + "/dice" + randomNumber2 + ".png";


document.querySelector("img.img1").setAttribute("src", randomDiceImage );

document.querySelector("img.img2").setAttribute("src", randomDiceImage2 );
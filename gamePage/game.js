//////////////////////////////////////////////////////////////////////////////////////////////////////////////

   /* FIRST STEP:  CREATE variables FOR OUR CONTENTS,
                   DEFINE WIDTHS, HEIGHTS AND X, Y CORDINATES.
    */
//////////////////////////////////////////////////////////////////////////////////////////////////////////////

   // my canvas variables.
let canvas;
let canvasWidth = 2000;
let canvasHeight = 1894;
let content;


  // my player variables
let playerWidth = 528;
let playerHeight = 947;
let playerX = 25;
let playerY = canvasHeight - playerHeight;

let playerImg;                       // this will be use to reference our Player.

let player = {                       // this create a  JS data obejects for "player"
    x : playerX,
    y : playerY,             
    width : playerWidth,
    height : playerHeight
}

   //my boxes variable
let obstacleBoxes = [];              // by setting the value as an array, will make boxes spawn randomly.

let boxesOneWidth = 466;
let boxesTwoWidth = 466;             //these are the widths of boxes
let boxesThreeWidth = 466;

let boxesHeight = 362;               // each boxes will be sharing the height ratios.

let boxesX = 1800;
let boxesY = canvasHeight - boxesHeight;

let boxOneImg;
let boxTwoImg;
let boxThreeImg;

//physics
let speedX = -4;
let speedY = 0;

let gravity = .4;

let gameOver = false;
let score = 0;




//////////////////////////////////////////////////////////////////////////////////////////////////////////////

    /* SECOND STEP: DRAW CONTENTS ON CANVAS ( playerImg, boxes etc.).
                    BY SETTING A fucntion USING .onload METHOD
                    BY USING document.getElementById METHOD.
    */
/////////////////////////////////////////////////////////////////////////////////////////////////////////////
       // this .onload function will perform the task to load all "content" on the Webpage within the "canvas".
window.onload = function() {
    canvas = document.getElementById("canvas");     //this will change the size ratio of "canvas" html element
    canvas.height = canvasHeight;                   //based of the given values set for "canvas" width/height.
    canvas.width = canvasWidth;                     //by using getElementById method.


    content = canvas.getContext("2d");              //this method will draw our "content" on the "canavas".


    playerImg = new Image();                   //(1)// this will provide/creates a new value(image) for "playerImg".
    playerImg.src ="./imgGame/player.gif";     //(2)//this will provide the source/link of the image file.
    
    playerImg.onload = function(){             //(3)// this will load and draw the "playerImg" "content" within our "canvas"
        content.drawImage(                     //(4)// by using .onload function and adding player's parameters
            playerImg,                              // inside a .drawImage function.  
            player.x, 
            player.y, 
            player.width, 
            player.height                 
        );
    }
                //////   REPEAT PRCOESS FOR ADDITIONAL SIMILAR CONTENS   ////// 

    boxOneImg = new Image();
    boxOneImg.src = "./imgGame/boxes1.png";

    boxTwoImg = new Image();
    boxTwoImg.src = "./imgGame/boxes2.png";

    boxThreeImg = new Image();
    boxThreeImg.src = "./imgGame/boxes3.png";



    requestAnimationFrame(animate);                 // this will call animate function for contents.
    setInterval(loadBoxes, 2000);                   // this will generate boxes every 1 second (1000ms = 1s)
    
    
}
//////////////////////////////////////////////////////////////////////////////////////////////////////////////

    /* THIRD STEP: REQUEST TO ANIMATE CONTENTS
                   BY SETTING A FUNCTION NAMED 'ANIMATE' AND
                   PASS IT WITHIN .requestAnimationFrame(); METHOD.
    */
//////////////////////////////////////////////////////////////////////////////////////////////////////////////

function animate() {
    requestAnimationFrame(animate);                 // this will constantly draw each Animation Frames of each ".drawImage" value.
                                                    // write each .drawImage(); statements witthin "animate" function.

    if (gameOver) {
        return;
    }
    
    content.clearRect(
        0,
        0,
        canvas.width, 
        canvas.height
    );
    

    content.drawImage(
        playerImg,
        player.x, 
        player.y, 
        player.width, 
        playerHeight
    );

    for ( let i = 0; i < obstacleBoxes.length; i++ ) {
        let boxes = obstacleBoxes[i];
        boxes.x += speedX;
        content.drawImage(
            boxes.img,
            boxes.x, 
            boxes.y, 
            boxes.width, 
            boxes.height
        );
    }
}

function playerMove(e){

    if (gameOver) {
        return;
    }
}


function loadBoxes() {

    if (gameOver) {
        return;
    }

    let boxes = {
        img : null,
        x : boxesX,
        y : boxesY,
        width : null,
        height : boxesHeight
    }

    let loadRandomBox = Math.random();           //This will generate random value for "boxes" maybe every 1 sec.

        console.log(loadRandomBox);

    if (loadRandomBox > .90) {
        boxes.img = boxThreeImg;
        boxes.width = boxesThreeWidth;
        obstacleBoxes.push(boxes);
    }

    else if (loadRandomBox > .70) {
        boxes.img = boxTwoImg;
        boxes.width = boxesTwoWidth;
        obstacleBoxes.push(boxes);
    }

    if (loadRandomBox > .50) {
        boxes.img = boxOneImg;
        boxes.width = boxesOneWidth;
        obstacleBoxes.push(boxes);
    }

    if (obstacleBoxes.length > 3) {                     // this argument will limit the array lenght.
        obstacleBoxes.shift();
    }


}
    console.log(obstacleBoxes);
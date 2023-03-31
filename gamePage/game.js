   /*
    */
   // my canvas variables.
let canvas;
let canvasWidth = 1584;
let canvasHeight = 1894;
let content;


// my player variables
let playerWidth = 528;
let playerHeight = 947;
let playerX = 100;
let playerY = canvasHeight - playerHeight;

let playerImg;                // this will be use to reference our Player.

let player = {               // this create a  JS data obejects for "player"
    x : playerX,
    y : playerY,             
    width : playerWidth,
    height : playerHeight
}

    /* SECOND STEP: DRAW CONTENTS ON CANVAS ( playerImg, boxes etc.).
                    BY SETTING A fucntion USING .onload METHOD
                    BY USING document.getElementById METHOD.
    */

       // this .onload function will perform the task to load all "content" on the Webpage within the "canvas".
window.onload = function() {
    canvas = document.getElementById("canvas");     //this will change the size ratio of "canvas" html element
    canvas.height = canvasHeight;                   //based of the given values set for "canvas" width/height.
    canvas.width = canvasWidth;                     //by using getElementById method.


    content = canvas.getContext("2d");              //this method will draw our "content" on the "canavas".


    playerImg = new Image();                        //this will provide/creates a new value(image) for "playerImg".
    playerImg.src ="./imgGame/player.gif";          //this will provide the source/link of the image file.
    
    playerImg.onload = function(){                  // this will load and draw the "playerImg" "content" within our "canvas"
        content.drawImage(                          // by using .onload function and adding player's parameters
            playerImg,                              // inside a .drawImage function.  
            player.x, 
            player.y, 
            player.width, 
            player.height
        );
    }
    
    
}

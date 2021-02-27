var canvas = new fabric.Canvas("myCanvas");

playerX = 20;
playerY = 20;

blockHeight = 30;
blockWidth = 30;

playerObject = "";
blockObject = "";

function AddPlayerIMG()
{
    fabric.Image.fromURL("player.png", function(Img){
    playerObject = Img;
    playerObject.scaleToWidth(100);
    playerObject.scaleToHeight(100);
    playerObject.set({top:playerY, left:playerX});
    canvas.add(playerObject);
    });
}

function AddBlockIMG(getImage)
{
    fabric.Image.fromURL(getImage, function(Img){
    blockObject = Img;
    blockObject.scaleToWidth(blockWidth);
    blockObject.scaleToHeight(blockHeight);
    blockObject.set({top:20, left:20});
    canvas.add(blockObject);
    });
}

window.addEventListener("keydown", myKeydown);

function myKeydown(e)
{
    var keyPressed = e.keyCode;

    if (keyPressed == "38"){
        up();
        console.log("UP");
    }
    if (keyPressed == "37"){
        left();
        console.log("LEFT");
    }
    if (keyPressed == "40"){
        down();
        console.log("DOWN");
    }
    if (keyPressed == "39"){
        right();
        console.log("RIGHT");
    }

    if (keyPressed == "67"){
        AddBlockIMG('cloud.jpg');
        console.log("Cloud");
    }
    if (keyPressed == "68"){
        AddBlockIMG('dark_green.png');
    }
    if (keyPressed == "71"){
        AddBlockIMG('ground.png');
    }
    if (keyPressed == "76"){
        AddBlockIMG('light_green.png');
    }
    if (keyPressed == "82"){
        AddBlockIMG('roof.jpg')
    }
    if (keyPressed == "84"){
        AddBlockIMG('trunk.jpg');
    }
    if (keyPressed == "85"){
        AddBlockIMG('unique.png');
    }
    if (keyPressed == "87"){
        AddBlockIMG('wall.jpg');
    }
    if (keyPressed == "89"){
        AddBlockIMG('yellow_wall.png');
    }
    
    if (e.shiftKey == true && keyPressed == "80"){
        blockHeight = blockHeight + 10;
        blockWidth = blockWidth + 10;
        document.getElementById("CurrHeight").innerHTML = blockHeight;
        document.getElementById("CurrWidth").innerHTML = blockWidth;

    }
    if (e.shiftKey == true && keyPressed == "77"){
        blockHeight = blockHeight - 10;
        blockWidth = blockWidth - 10;
        document.getElementById("CurrHeight").innerHTML = blockHeight;
        document.getElementById("CurrWidth").innerHTML = blockWidth;

    }

}

function up(){

if(playerY >= 0)
{playerY = playerY - 30;
canvas.remove(playerObject);
AddPlayerIMG();
}
}

function down(){

    if(playerY <= 600)
    {playerY = playerY + 30;
    canvas.remove(playerObject);
    AddPlayerIMG();
    }
    }

    function right(){

        if(playerX <=900)
        {playerX = playerX + 30;
        canvas.remove(playerObject);
        AddPlayerIMG();
        }
        }
        
        function left(){
        
            if(playerX >= 0)
            {playerX = playerX - 30;
            canvas.remove(playerObject);
            AddPlayerIMG();
            }
            }
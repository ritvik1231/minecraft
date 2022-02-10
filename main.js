var canvas=new fabric.Canvas("myCanvas") //fabric is the name of the library used.
var block_image_width=30,block_image_height=30
var player_x=10;
var player_y=10;
var player_object="";//used to store the object of the player img.


function player_update(){
    fabric.Image.fromURL("player.png",function(Img) //it is a function used for uploading an image on an canvas.
 {
player_object=Img;
player_object.scaleToWidth(150)
player_object.scaleToHeight(140)
player_object.set({ top:player_y, left:player_x }); 
canvas.add(player_object);
 } )
}

function new_image(get_image){
    fabric.Image.fromURL(get_image,function(Img) //it is a function used for uploading an image on an canvas.
 {
block_image_object=Img;
block_image_object.scaleToWidth(block_image_width)
block_image_object.scaleToHeight(block_image_height)
block_image_object.set({ top:player_y, left:player_x }); 
canvas.add(block_image_object);
 } )
}



window.addEventListener("keydown",my_keydown)


function my_keydown(e){
    var keypreesed=e.keyCode
    console.log(keypreesed)


    if(e.shiftkey==true && keypreesed=="80"){
        console.log("p and shift key are pressed together")
        block_image_width=block_image_width+10
        block_image_height=block_image_height+10
        document.getElementById("current_width").innerHTML=block_image_width;
        document.getElementById("current_height").innerHTML=block_image_height;
    }

    if(e.shiftkey==true && keypreesed=="77"){
        console.log("m and shift key are pressed together")
        block_image_width=block_image_width-10
        block_image_height=block_image_height-10
        document.getElementById("current_width").innerHTML=block_image_width;
        document.getElementById("current_height").innerHTML=block_image_height;
    }

    if(keypreesed=="38"){
        up()
        console.log("up")
    }

    if(keypreesed=="40"){
        down()
        console.log("down")
    }

    if(keypreesed=="37"){
        left()
        console.log("left")
    }

    if(keypreesed=="39"){
        right()
        console.log("right")
    }

    if(keypreesed=="84"){
        new_image("trunk.jpg")
        console.log("t")
    }

    if(keypreesed=="68"){
        new_image("dark_green.png")
        console.log("d")
    }

    if(keypreesed=="76"){
        new_image("light_green.png")
        console.log("l")
    }

    if(keypreesed=="71"){
        new_image("ground.png")
        console.log("g")
    }

    if(keypreesed=="87"){
        new_image("wall.jpg")
        console.log("w")
    }

    if(keypreesed=="89"){
        new_image("yellow_wall.png")
        console.log("y")
    }

    if(keypreesed=="82"){
        new_image("roof.jpg")
        console.log("r")
    }

    if(keypreesed=="67"){
        new_image("cloud.jpg")
        console.log("c")
    }

    if(keypreesed=="85"){
        new_image("unique.png")
        console.log("u")
    }


}

function up(){
    if(player_y>=0){
        player_y=player_y-block_image_height
        console.log("block image height is="+block_image_height)
        console.log("when up arrow key is pressed,x= "+player_x+" ,y= "+player_y)
        canvas.remove(player_object) //we dont want to keep the old image on the canvas.
        player_update()

    }
    
}

function down(){
    if(player_y<=500){
        player_y=player_y+block_image_height
        console.log("block image height is="+block_image_height)
        console.log("when up arrow key is pressed,x= "+player_x+" ,y= "+player_y)
        canvas.remove(player_object) //we dont want to keep the old image on the canvas.
        player_update()

    }
    
}

function left(){
    if(player_x>=0){
        player_x=player_x-block_image_width
        console.log("block image width is="+block_image_width)
        console.log("when up arrow key is pressed,x= "+player_x+" ,y= "+player_y)
        canvas.remove(player_object) //we dont want to keep the old image on the canvas.
        player_update()

    }
    
}

function right(){
    if(player_x<=850){
        player_x=player_x+block_image_width
        console.log("block image width is="+block_image_width)
        console.log("when up arrow key is pressed,x= "+player_x+" ,y= "+player_y)
        canvas.remove(player_object) //we dont want to keep the old image on the canvas.
        player_update()

    }
    
}
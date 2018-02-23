var txt1;
var txt2;
var txt3;

var camX = 1;
var camY = 201;
var camZ = 1;

var camXX = true;
var camYY = false;
var camZZ = true;

function setup(){
    createCanvas(windowWidth,  windowHeight, WEBGL);
    txt3 = loadImage("assets/bg.jpg");
    txt1 = loadImage("assets/txt1.jpg");
    txt2 = loadImage("assets/txt2.jpg");
}

function draw(){
    background(0);

    if(camX >= 200) {
	camXX = false
    } else if(camY >= 200) {
	camYY = false
    } else if (camZ >= 200) {
	camZZ = false
    } else if(camX <= 0) {
	camXX = true
    } else if(camY <= 0) {
	camYY = true
    } else if(camZ <=0) {
	camZZ = true
    }

    if(camXX){
	camX+=2;
    } else {
	camX-=2;
    }

    if(camYY){
	camY+=2;
    } else {
	camY-=2;
    }

    if(camZZ){
	camZ+=2;
    } else {
	camZ-=2;
    }

    camera(camX, camY, 0, 0, 0, 0, camX*2, camY*2, 0);
    
    var locY = (mouseY / height - 0.5) * (-2);
    var locX = (mouseX / width - 0.5) * 2;
    
    ambientLight(50);
    directionalLight(200, 0, 0, 0.25, 0.25, 0.25);
    pointLight(0, 0, 200, locX, locY, 0);
    pointLight(200, 200, 0, -locX, -locY, 0);

    push();
    translate(-250, 0, 0);
    rotateY(frameCount * 0.05);
    rotateZ(frameCount * 0.05);
    ambientMaterial(250);
    texture(txt1);
    sphere(90, 64);
    pop();
    
    translate(250, 0, 0);
    rotateZ(frameCount * 0.05);
    rotateX(frameCount * 0.05);
    ambientMaterial(250);
    texture(txt2);
    sphere(120, 64);
}
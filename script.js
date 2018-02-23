var txt1;
var txt2;
var txt3;

var easycam;

var pos = true;

setTimeout(function(){
	       pos = false;
	   },60000);

function setup(){
    createCanvas(windowWidth,  windowHeight, WEBGL);
  
    console.log(Dw);
    console.log(Dw.EasyCam.INFO);
    
    easycam = createEasyCam();

    txt3 = loadImage("assets/bg.jpg");
    txt1 = loadImage("assets/txt1.jpg");
    txt2 = loadImage("assets/txt2.jpg");
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
    easycam.setViewport([0,0,windowWidth, windowHeight]);
}

function draw(){
    background(0);
    
    if(pos){
	easycam.rotateY(0.005);	
    } else {
	easycam.rotateX(0.005);
    }
    
    
    var locY = (mouseY / height - 0.5) * (-2);
    var locX = (mouseX / width - 0.5) * 2;
    
    ambientLight(50);
    directionalLight(200, 0, 0, 0.25, 0.25, 0.25);
    pointLight(0, 0, 200, locX, locY, 0);
    pointLight(200, 200, 0, -locX, -locY, 0);

    push();
    translate(-250, 0, 0);
    rotateY(frameCount * 0.05);
    ambientMaterial(250);
    texture(txt1);
    sphere(90, 64);
    pop();
    
    translate(250, 0, 0);
    rotateY(frameCount * 0.05);
    ambientMaterial(250);
    texture(txt2);
    sphere(120, 64);
}
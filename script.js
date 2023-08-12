var txt1;
var txt2;
var txt3;

var easycam;

var pos = true;

var cube = 0;
var dis = 500;

function posY() {
    pos = true;
    setTimeout(posX, 32000);
    cube++;
}

function posX() {
    pos = false;
    setTimeout(posY, 32000);
    cube++;
}

setTimeout(posX, 32000);

function setup() {
    createCanvas(windowWidth, windowHeight, WEBGL);

    easycam = createEasyCam();

    txt3 = loadImage("assets/bg.jpg");
    txt1 = loadImage("assets/txt1.jpg");
    txt2 = loadImage("assets/txt2.jpg");
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
    easycam.setViewport([ 0, 0, windowWidth, windowHeight ]);
}

function draw() {
    background(0);

    if(pos) {
        easycam.rotateY(0.005);
    } else {
        easycam.rotateX(0.005);
    }

    if(cube == 5) {
        dis++;
        easycam.setDistance(dis, 0);
    } else if(cube ==7) {
        if(dis > 500) {
            dis--;
            easycam.setDistance(dis, 0);
        }
    }

    var locY = 600;
    var locX = 600;
    var locZ = 600;

    ambientLight(50);
    directionalLight(200, 0, 0, 0.25, 0.25, 0.25);
    directionalLight(200, 0, 0, -0.25, -0.25, -0.25);
    directionalLight(200, 0, 0, -0.25, -0.25, 0.25);
    pointLight(0, 0, 200, locX, locY, 0);
    pointLight(200, 200, 0, -locX, locY, 0);

    push();
    translate(0, 0, 600);
    texture(txt3);
    plane(1200);
    pop();

    push();
    translate(0, 0, -600);
    texture(txt3);
    plane(1200);
    pop();

    push();
    translate(600, 0, 0);
    rotateY(PI/2);
    texture(txt3);
    plane(1200);
    pop();

    push();
    translate(-600, 0, 0);
    rotateY(PI/2);
    texture(txt3);
    plane(1200);
    pop();

    push();
    translate(0, 600, 0);
    rotateX(PI/2);
    texture(txt3);
    plane(1200);
    pop();

    push();
    translate(0, -600, 0);
    rotateX(PI/2);
    texture(txt3);
    plane(1200);
    pop();

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

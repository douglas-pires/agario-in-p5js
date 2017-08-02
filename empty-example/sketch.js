var blob;
var blobs = [];
var totalBlobs = 100;
var zoom = 1;

function setup() {

    createCanvas(600, 600);

    blob = new Blob(64, 0, 0);

    for (var i = 0; i < totalBlobs; i++) {
        
        var x =  random(-width, width);
        var y =  random(-height, height);
        blobs[i] = new Blob(16, x, y);
    }
}

function draw() {

    background(51);

    translate(width/2, height/2)

    var newZoom = 64 / blob.radius;
    zoom = lerp(zoom, newZoom, 0.2);
    scale(zoom);

    translate(-blob.pos.x, -blob.pos.y)


    for (var i = blobs.length - 1; i >= 0; i--) {
        
        blobs[i].show();
        
        if (blob.eats(blobs[i])) {
            blobs.splice(i, 1);
            blobs.push(new Blob(16, random(-width, width), random(-height, height)));
        }
    }

    blob.show();
    blob.update();
}
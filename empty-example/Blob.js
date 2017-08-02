function Blob(radius, x, y) {

    this.pos = createVector(x, y);
    this.radius = radius;
    this.vel = createVector(0, 0)

    this.show = () => {
        fill(255);
        ellipse(this.pos.x, this.pos.y, this.radius * 2, this.radius * 2);
    }

    this.update = () => {
        var newVel = createVector(mouseX-width/2, mouseY-height/2);
        newVel.setMag(3);
        this.vel.lerp(newVel, 0.1)
        this.pos.add(this.vel)
    }

    this.eats = (blob) => {

        var distance = p5.Vector.dist(this.pos, blob.pos);

        if (distance < this.radius + blob.radius) {
            
            var sum = PI * this.radius * this.radius + PI * blob.radius * blob.radius;
            this.radius = sqrt(sum / PI);
            return true;
        }

        return false;
    }
}
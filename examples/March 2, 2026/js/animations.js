class animations {

    // properties
    idleImages = [];
    walkImages = [];
    x;
    y;
    speed;
    //count;
    constructor(x, y, speed) {
        for (var i = 0; i < 10; i++) {
            this.idleImages[i] = new individualFrame(x, y, "assets/images/Idle (" + (i + 1) + ").png");
            this.walkImages[i] = new individualFrame(x, y, "assets/images/Walk (" + (i + 1) + ").png");
        }
        this.x = x;
        this.y = y;
        this.speed = speed;
        this.count = 0;
    }

    // functions
    resizeImages() {
        for (var i = 0; i < this.idleImages.length; i++) {
            this.idleImages[i].resizeImage();
            this.walkImages[i].resizeImage();
        }
    }

    moveAround() {
        this.updateXandY();
        if (keyIsPressed) {
            if (key == "a") {
                this.x -= this.speed;
                this.walkImages[count].drawImage();
            }
            if (key == "w") {
                this.y -= this.speed;
                this.walkImages[count].drawImage();
            }
            if (key == "d") {
                this.x += this.speed;
                this.walkImages[count].drawImage()
            }
            if (key == "s") {

                this.y += this.speed;
                this.walkImages[count].drawImage()
            }
        }
        else {
            this.idleImages[count].drawImage();
        }
         
    }

    updateXandY() {
        this.walkImages[count].setX(this.x);
        this.walkImages[count].setY(this.y);
        this.idleImages[count].setY(this.y);
        this.idleImages[count].setX(this.x);
    }

    collision(makeShapesObject) {
        if (dist(this.x, this.y, makeShapesObject.x, makeShapesObject.y) < 50) {
            return true;
        }
        else {
            return false;
        }

    }

}
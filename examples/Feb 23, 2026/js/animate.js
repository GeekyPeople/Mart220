class animate {

    count = 0;
    idleImages = [];
    walkImages = [];
    jumpImages = [];
    constructor() {
        for (var i = 0; i < 10; i++) {
            this.idleImages[i] = loadImage("assets/images/Idle (" + (i + 1) + ").png");
            this.walkImages[i] = loadImage("assets/images/Walk (" + (i + 1) + ").png");
            this.jumpImages[i] = loadImage("assets/images/Jump (" + (i + 1) + ").png");
        }
        setInterval(() => this.timeIt(), 100);
    }

    resizeImages() {
        for (var i = 0; i < this.idleImages.length; i++) {
            this.idleImages[i].resize(0, 200);
            this.walkImages[i].resize(0, 200);
            this.jumpImages[i].resize(0, 200);
        }
    }

    moveAnimation() {

        if (keyIsPressed) {
            if (key == "a") {

                x -= speed;
                image(this.walkImages[this.count], x, y);
            }
            if (key == "w") {
                y -= speed;
                image(this.walkImages[this.count], x, y);
            }
            if (key == "d") {
                x += speed;
                image(this.walkImages[this.count], x, y);
            }
            if (key == "s") {
                y += speed;
                image(this.walkImages[this.count], x, y);
            }
        }
        else {
            image(this.idleImages[this.count], x, y);
        }
    }

    timeIt() {

        this.count++;
         console.log(this.count + " " + this.idleImages.length);
        if (this.count >= this.idleImages.length) {
            this.count = 0;
        }
    }

}
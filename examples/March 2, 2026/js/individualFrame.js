class individualFrame {
    
    x;
    y;
    myImage;

    constructor(x, y, path) {
        this.x = x;
        this.y = y;
        this.myImage = loadImage(path);
    }

    setX(newX) {
        this.x = newX;
    }

    setY(newY) {    
        this.y = newY;
    }
    
    resizeImage() {
        this.myImage.resize(0, 100);
    }

    drawImage() {
        image(this.myImage, this.x, this.y);
    }




}

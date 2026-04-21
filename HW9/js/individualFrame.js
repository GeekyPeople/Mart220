class individualFrame {
    
    
    x;
    y;
    myImage;
    sizeOfImage;
    constructor(x, y, path, sizeOfImage) {
        this.x = x;
        this.y = y;
        this.myImage = loadImage(path);
        this.sizeOfImage = sizeOfImage;
        
    }

    setX(newX) {
        this.x = newX;
    }

    setY(newY) {    
        this.y = newY;
    }
    
    resizeImage() {
        
        this.myImage.resize(0, this.sizeOfImage);
    
    }

    drawImage() {
        image(this.myImage, this.x, this.y);
    }




}

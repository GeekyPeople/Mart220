gravity = 0.5;
gravCount = 0;
var x;
var y;


class Meteor {    
    constructor (x,y,path,sizeOfImage) {

        this.x = x;
        this.y = y;
        this.myImg = loadImage(path);
        this.sizeOfImage = sizeOfImage; 
        this.speedx = 2;
        this.speedy = 3;
    }

resizeImage() {
    this.myImg.resize(0,this.sizeOfImage);
}



fall() {
    if (this.x > 0 && this.y <550) {
    this.x -= this.speedx;
    this.y += this.speedy;
    }

   
}



 collision(x, y, otherX, otherY, otherW, otherH) {
         collideRectRect(x, y, this.walkImages[0].myImage.width, 
        this.walkImages[0].myImage.height, 
        otherX, otherY, otherW, otherH);
    }



drawMeteor() {
    image(this.myImg,this.x,this.y,90,90);
}

}
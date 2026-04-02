

steak = 'assets/food/steak.png'
class Food {
    constructor(x,y, path, sizeOfImage){
    this.x = x;
    this.y = y;
    this.myImg = loadImage(path);
    this.sizeOfImage = sizeOfImage;
    }


resizeImage() {
    this.path.resize(0, this.sizeOfImage);
}

drawFood() {
image(this.myImg,this.x,this.y);
}
}
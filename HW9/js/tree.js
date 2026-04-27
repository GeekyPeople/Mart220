class Tree {    
    constructor (x,y,path,sizeOfImage) {

        this.x = x;
        this.y = y;
        this.myImg = loadImage(path);
        this.sizeOfImage = sizeOfImage;
    }

resizeImage() {
    this.myImg.resize(0,this.sizeOfImage);
}

drawTree() {
    image(this.myImg,this.x,this.y);
}


}
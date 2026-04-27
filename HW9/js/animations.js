class animations {

//properties
idleImages = [];
walkImages = [];
x;
y;
speed;
count;

constructor(x,y,speed) {
for (var i = 0; i < 10; i++) {
            this.idleImages[i] = new individualFrame(x, y, "assets/dino/Idle (" + (i + 1) + ").png", 100);
            this.walkImages[i] = new individualFrame(x, y, "assets/dino/Walk (" + (i + 1) + ").png", 100);
        }
        this.x = x;
        this.y = y;
        this.speed = speed;
        this.count = 0;
}

//functions

resizeImages() {
        for (var i = 0; i < this.idleImages.length; i++) {
            this.idleImages[i].resizeImage();
            this.walkImages[i].resizeImage();
        }
    }

    moveAround(treeArray) {
        this.updateXandY();
        if (keyIsPressed) {
           
            let moved = false;
            if (key == "a") {
                let newX = this.x - this.speed;
                let canMove = true;
                for (let tree of treeArray) {
                    if (this.collision(newX, this.y, tree.x, tree.y, tree.sizeOfImage, tree.sizeOfImage)) {
                        canMove = false;
                        break;
                    }
                }
                if (canMove) {
                    this.x = newX;
                    moved = true;
                }
            }
            if (key == "w") {
                let newY = this.y - this.speed;
                let canMove = true;
                for (let tree of treeArray) {
                    if (this.collision(this.x, newY, tree.x, tree.y, tree.sizeOfImage, tree.sizeOfImage)) {
                        canMove = false;
                        break;
                    }
                }
                if (canMove) {
                    this.y = newY;
                    moved = true;
                }
            }
            if (key == "d") {
                let newX = this.x + this.speed;
                let canMove = true;
                for (let tree of treeArray) {
                    if (this.collision(newX, this.y, tree.x, tree.y, tree.sizeOfImage, tree.sizeOfImage)) {
                        canMove = false;
                        break;
                    }
                }
                if (canMove) {
                    this.x = newX;
                    moved = true;
                }
            }
            if (key == "s") {
                let newY = this.y + this.speed;
                let canMove = true;
                for (let tree of treeArray) {
                    if (this.collision(this.x, newY, tree.x, tree.y, tree.sizeOfImage, tree.sizeOfImage)) {
                        canMove = false;
                        break;
                    }
                }
                if (canMove) {
                    this.y = newY;
                    moved = true;
                }
            }
            if (moved) {
                this.walkImages[count].drawImage();
            } else {
                this.idleImages[count].drawImage();
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

    //collision(makeShapesObject) {
       
        //console.log(collideRectCircle(this.x, this.y, 50, 50, makeShapesObject.x, makeShapesObject.y, makeShapesObject.d)); 
      // return collideRectCircle(this.x, this.y, this.walkImages[0].myImage.width, 
      //  this.walkImages[0].myImage.height, 
      //  makeShapesObject.x, makeShapesObject.y, makeShapesObject.d);
       //  if (dist(this.x, this.y, makeShapesObject.x, makeShapesObject.y) < 50) {
       //     return true;
       // }
       // else {
       //     return false;
       // }

    //}

    collision(x, y, otherX, otherY, otherW, otherH) {
        return collideRectRect(x, y, this.walkImages[0].myImage.width, 
        this.walkImages[0].myImage.height, 
        otherX, otherY, otherW, otherH);
    }

    collision(makeFoodObject) {
        return collideRectRect(this.x, this.y, this.walkImages[0].myImage.width, 
        this.walkImages[0].myImage.height, 
        makeFoodObject.x, makeFoodObject.y, 20,20);
    }




}
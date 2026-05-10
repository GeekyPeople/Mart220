class animations {

//properties
idleImages = [];
walkImages = [];
jumpImages = [];
x;
y;
speed;
count;
velocityY = 0;
gravity = 0.5;
jumpForce = -15;
onGround = false;
groundY = 550; // Assuming ground is at y=550 (canvas height 600 - some margin)

constructor(x,y,speed) {
for (var i = 0; i < 10; i++) {
            this.idleImages[i] = new individualFrame(x, y, "assets/dino/Idle (" + (i + 1) + ").png", 100);
            this.walkImages[i] = new individualFrame(x, y, "assets/dino/Walk (" + (i + 1) + ").png", 100);
            this.jumpImages[i] = new individualFrame(x, y, "assets/dino/Jump (" + (i + 1) + ").png", 100);
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
            this.jumpImages[i].resizeImage();
        }
    }

    

    moveAround(treeArray, caveBarrierX = -200) {
        
        // Apply gravity
        this.velocityY += this.gravity;
        this.y += this.velocityY;
        
        // Check ground collision (bottom of player hits ground)
        let playerHeight = this.walkImages[0].myImage.height;
        if (this.y + playerHeight >= this.groundY) {
            this.y = this.groundY - playerHeight;
            this.velocityY = 0;
            this.onGround = true;
        } else {
            this.onGround = false;
        }
        
        // Check cave barrier collision
        if (this.x < caveBarrierX) {
            this.x = caveBarrierX;
        }
        

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
           
if (!this.onGround) {
            this.jumpImages[count].drawImage();
        }
        else  if (moved) { 
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
        this.jumpImages[count].setY(this.y);
        this.jumpImages[count].setX(this.x);
    }

   

    collision(x, y, otherX, otherY, otherW, otherH) {
         collideRectRect(x, y, this.walkImages[0].myImage.width, 
        this.walkImages[0].myImage.height, 
        otherX, otherY, otherW, otherH);
    }

  

       collision(makeFoodObject) {
        return collideRectRect(this.x, this.y, this.walkImages[0].myImage.width, 
        this.walkImages[0].myImage.height, 
        makeFoodObject.x, makeFoodObject.y, 20,20);
    }
    
   collision(meteorObject) {
    return collideRectRect(this.x, this.y, this.walkImages[0].myImage.width, 
        this.walkImages[0].myImage.height, 
        meteorObject.x, meteorObject.y, 80,80);
   }

  

    
    

    jump() {
        if (this.onGround) {
            this.velocityY = this.jumpForce;
            this.onGround = false;
            
        }
        
      


    }
}
    

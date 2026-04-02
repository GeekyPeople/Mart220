
let idleAnimation;
let walkAnimation;
let catImage;
let idlePaths = [];
let walkPaths = [];
let myAnimation;

function preload() {
    
    for(var i = 0; i < 15; i++)    {
        idlePaths[i] = "images/idle/Idle (" + (i+1) + ").png";
       
    }
    for(var j = 0; j < 10; j++)    {
        walkPaths[j] = "images/walk/Walk (" + (j+1) + ").png";
       
    }

      
}

function setup() {
  
    new Canvas(600, 600);
    
    //compact way to add an image
  	catImage = new Sprite();
	catImage.image = 'images/cat.jpg';
    catImage.pos.x = 200;
    catImage.pos.y = 300;
    catImage.scale = 0.05;
    catImage.width = 100;
    catImage.height = 100;
    catImage.collider = 'rectangle';
    catImage.debug = true;


    catImage = new Sprite();
	catImage.image = 'images/cat.jpg';
    catImage.pos.x = 300;
    catImage.pos.y = 100;
    catImage.scale = 0.05;
    catImage.width = 100;
    catImage.height = 100;
    catImage.collider = 'rectangle';
    catImage.debug = true;

    //myAnimation = new Sprite();
	//myAnimation.scale = 0.5;
    
 


   // idleAnimation = loadAni(idlePaths[0], idlePaths[1], idlePaths[2], idlePaths[3], 
   // idlePaths[4], idlePaths[5],idlePaths[6], idlePaths[7], idlePaths[8],
   // idlePaths[9], idlePaths[10], idlePaths[11], idlePaths[12], idlePaths[13], idlePaths[14]);
 
    //idleAnimation = loadAni('idle', idlePaths);
    //walkAnimation = loadAni('walk', walkPaths);
    
    //myAnimation.addAni('idle', idlePaths);
    //myAnimation.addAni('walk', walkPaths);
    //myAnimation.frameDelay = 20;
//myAnimation.frameDelay = 1;
    
    myAnimation = new animationImage(100,300, 150, 150);
    myAnimation.loadAnimation('idle', idlePaths);
    myAnimation.loadAnimation('walk', walkPaths);
    myAnimation.debug = true;
}
// display all the frames using the draw function as a loop
function update() 
{

    clear();
    
   // walkAnimation.scale = 0.5;
   // animation(idleAnimation, 250, 100);
    
    //walkAnimation.frameDelay = 5;
    //animation(walkAnimation, 250, 100);
    
   // myAnimation.changeAni('walk');
    //myAnimation.drawAnimation('idle');

    

    if(kb.pressing('d'))
    {
        
       //myAnimation.changeAni('walk');
       
       // myAnimation.vel.x = 2;
	//	myAnimation.scale.x = 0.5;
        
        myAnimation.updatePosition('forward');
        myAnimation.drawAnimation('walk');
        
        
        if(myAnimation.isColliding(catImage))
        {
            catImage.remove();     
        }     
    }
    else if(kb.pressing('a'))
    {
      //  myAnimation.changeAni('walk');
      //  myAnimation.vel.x = -2;
//		myAnimation.scale.x = -0.5;
        
        myAnimation.updatePosition('reverse');
        myAnimation.drawAnimation('walk');
        
            
    }
    else if(kb.pressing('w'))
    {
      //  myAnimation.changeAni('walk');
      //  myAnimation.vel.x = -2;
//		myAnimation.scale.x = -0.5;
        
        myAnimation.updatePosition('up');
        myAnimation.drawAnimation('walk');
        
            
    }
    else if(kb.pressing('s'))
    {
      //  myAnimation.changeAni('walk');
      //  myAnimation.vel.x = -2;
//		myAnimation.scale.x = -0.5;
        
        myAnimation.updatePosition('down');
        myAnimation.drawAnimation('walk');
        
            
    }
    else
    {
        myAnimation.drawAnimation('idle');
        
  //      myAnimation.changeAni('idle');
    //    myAnimation.vel.x = 0;
		
    } 



}


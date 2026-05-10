class animator
{

    constructor()
    {
        this.frames = [];
        this.currentFrame = 0;

    }

    fillFrames(x, y, path)
    {        
        this.frames.push(new individualFrame(x, y, path));
    }




}
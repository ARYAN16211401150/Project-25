class Dustbin
{
    constructor(x,y,w,h)
    {
        var options={
            isStatic:true,
            restitution:0,
            density:1,
            friction:0.3
        }
        this.body= Bodies.rectangle(x,y,w,h,options);
        this.width=w;
        this.height=h;
        this.image=loadImage("DustbinImage.png")
        World.add (world,this.body); 
    }
    display()
    {
        var position=this.body.position;

        push ();
        translate (position.x,position.y)
        rectMode(CENTER);
        image(this.image,0,0,180,160)
        pop ();
    }
}
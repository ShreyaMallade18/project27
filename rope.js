class Rope{
    constructor(body1,body2,offsetX,offsetY)
    {
        var options = {
            bodyA:body1,
            bodyB:body2,
            pointB:{x:this.offsetX,y:this.offsetY}
           
        }
       this.rope = Matter.Constraint.create(options);
       World.add(world,this.Rope);
    }
    display(){
        var pointA = this.rope.bodyA.position;
        var pointB = this.rope.bodyB.position;
        strokeWeight(2);

        var Anchor1X = pointA.x;
        var Anchor1Y = pointA.y;

        var Anchor2X = pintB.x+this.offsetX;
        var Anchor2Y = pointB.y+this.offsetY;






        line(Anchor1x, Anchor1Y,Anchor2X,Anchor2Y);
    }
}
class Drop{
    constructor(x,y){
        var Option={
            friction:0.1,
            restitution:0.1
        }
        this.drop=Bodies.circle(x,y,5,Option)
        this.r=5
        World.add(world,this.drop);
    }
    display(){
       
        fill("blue");
        ellipseMode(RADIUS)
        ellipse(this.drop.position.x,this.drop.position.y,this.r)
    }
}
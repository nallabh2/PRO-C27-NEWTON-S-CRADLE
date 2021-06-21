class Bob{
    constructor(x,y,r){
        var options={
            isStatic:false
        }
this.x=x;
this.y=y;
this.radius=r;
this.body=Bodies.circle(x,y,r,options);
World.add(world,this.body);
    }
    display(){
        ellipse(this.body.position.x,this.body.position.y,this.radius,this.radius);
    }
}
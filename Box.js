class Box {
    //properties
    constructor(x,y,width,height){
        var options = {
        'restitution': 0.5,
        'density': 1.0,
        'friction': 1.0

    }
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        World.add(myWorld,this.body);
    }

    //functions
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        strokeWeight(4);
        stroke("green");
        fill(255);
        rectMode(CENTER);
        rect(0,0,this.width,this.height);
        pop();
    }
}






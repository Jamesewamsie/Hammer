class Hammer{

    constructor(x,y,w,h){

        var options = {
            restitution : 0,
            density : 2,
            friction : 2
        }

        this.body = Bodies.rectangle(x,y,w,h, options);
        World.add(world, this.body);

        this.w = w;
        this.h = h;
    }

    display(){

        var pos = this.body.position;
        var angle = this.body.angle;
        
        pos.x = mouseX
        pos.y = mouseY

        push();

        translate(pos.x,pos.y);
        rotate(angle);
        fill("orange");
        stroke("black");
        strokeWeight(4);
        rectMode(CENTER);
        rect(0, 0, this.w, this.h);

        pop();
    }

}
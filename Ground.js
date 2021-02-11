class Ground{

    constructor(x,y,w,h){

        var options = {
            restitution : 0,
            density : 1.5,
            isStatic : true
        }

        this.body = Bodies.rectangle(x,y,w,h, options);
        World.add(world, this.body);

        this.w = w;
        this.h = h;
    }

    display(){

        var pos = this.body.position;
        

        fill("brown");
        stroke("white");
        strokeWeight(4);
        rectMode(CENTER);
        rect(pos.x, pos.y, this.w, this.h);
    }

}
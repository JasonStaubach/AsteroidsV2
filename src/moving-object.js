export default class MovingObject{
    constructor(options){
        this.pos = options["pos"]
        this.vel = options["vel"]
        this.radius = options["radius"]
        this.color = options["color"]
        this.game = options["game"]
    }

    draw(ctx){
        // let canvas = document.getElementById("myCanvas");
        // let ctx = canvas.getContext("2d");
        ctx.beginPath();
        ctx.arc(this.pos[0],this.pos[1],this.radius, 0,2*Math.PI);
        ctx.stroke();

    }

    move(milliseconds){
        let offsetX = this.vel[0];
        let offsetY = this.vel[1];

        this.pos = [this.pos[0] + offsetX, this.pos[1] + offsetY];
    }
}
import Asteroid from "./asteroid.js";

export default class Game{
    static DIM_X = 1000;
    static DIM_Y = 700;
    static NUM_ASTEROIDS = 8;
    constructor(){
        this.asteroids = [];
        this.addAsteroids()
        
    }
    draw(ctx){
        ctx.clearRect(0,0, Game.DIM_X, Game.DIX_Y)
        ctx.fillStyle = "#919191"
        ctx.fillRect(0, 0, Game.DIM_X, Game.DIM_Y);
        console.log(this.asteroids)

        this.asteroids.forEach((object) => {
            object.draw(ctx);
        })
    }

    addAsteroids(){
        console.log(Game.NUM_ASTEROIDS)
        for(let i = 0; i < Game.NUM_ASTEROIDS; i++){
            let asty = new Asteroid({pos: this.randomPosition(), game: this})
            console.log(asty)
            this.asteroids.push(asty)
            console.log(`hi ${this.asteroids}`)
        }
    }
    
    randomPosition(){
        let pos1 = Math.floor(Math.random() * Game.DIM_X)
        let pos2 = Math.floor(Math.random() * Game.DIM_Y)
        return [pos1,pos2];
    }

    moveObjects(ctx){
        this.asteroids.forEach((object) => {
            object.move(ctx)
        })
    }
    
}
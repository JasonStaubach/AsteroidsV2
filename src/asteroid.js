import MovingObject from "./moving-object";
import * as Util from "./utils.js";

export default class Asteroid extends MovingObject{
    static RADIUS = 30;
    static COLOR = "green";
    constructor(options = {pos: [100,100]}){
        options.color = Asteroid.COLOR;
        options.pos = options.pos;
        options.radius = Asteroid.RADIUS;
        options.vel = Util.randomVec(5);
        super(options)
    }

}
import Game from "./game";
import Asteroid from "./asteroid";
import MovingObject from "./moving-object";
import GameView from "./game-view";

document.addEventListener("DOMContentLoaded", () => {
    const canvasEl = document.getElementById("gamecanvas");
    canvasEl.width = 1000//Game.DIM_X;
    canvasEl.height = 700//Game.DIM_Y;
    
    const ctx = canvasEl.getContext("2d")
    const game = new Game();
    const gv = new GameView(game, ctx)
    gv.start();
    // const asty = new Asteroid({
    //     pos: [100, 100]
    // });
    // const mo = new MovingObject({
    //     pos: [30, 30],
    //     vel: [10, 10],
    //     radius: 5,
    //     color: "#00FF00"
    // });


    // mo.draw(ctx)
    // asty.draw(ctx)
    // Game.draw(ctx)
    // console.log("plz work")
    
})

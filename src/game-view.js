
export default class GameView{
    constructor(game, ctx){
        this.ctx = ctx;
        this.game = game;
        console.log(this.ctx)
    }

    start(){
        let holdCtx = this.ctx
        let holdGame = this.game
        setInterval( function() {
            holdGame.draw(holdCtx);
            holdGame.moveObjects(holdCtx);
        }, 60)
    }
}
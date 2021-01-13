class Animation {
    constructor(game) {
        this.spritesheet = ASSET_MANAGER.getAsset("./scottPilgrim.png");
        //this.animation = new Animator(this.spritesheet, x, y, width, height, frameCount, frameDuration, framePadding, reverse, loop);
        
        // Starting Coordinates
        this.x = 0;
        this.y = 300;

        // // Which part in the animation
        // this.index = 0;
        // // Number of frames in the animations
        // this.frames = 8;
        
        // 0 - left
        // 1 - right
        this.facing = 1;
        this.game = game;
        this.animations = [];
        
        // scott pilgrim running
        // run to the right
        this.animations.push(new Animator(this.spritesheet, 2, 12, 108, 123, 8, 0.1, 0, false, true));
        
        // run to the left
        this.animations.push(new Animator(this.spritesheet, 1, 154, 108, 123, 8, 0.1, -0.3, true, true));
    }

    draw(ctx) {
        if (!this.facing) {
            this.animations[1].drawFrame(this.game.clockTick, ctx, this.x, this.y, 1);
        } else {
            this.animations[0].drawFrame(this.game.clockTick, ctx, this.x, this.y, 1);
        }
    }

    update() {
        if (this.game.left) {
            this.facing = 0;
            this.x -= 10;
        } 
        
        if (this.game.right) {
            this.facing = 1;
            this.x += 10;
        }

        if (this.game.up) {
            this.y -= 10;
        }

        if (this.game.down) {
            this.y = this.y + 10;
        }
    }
}
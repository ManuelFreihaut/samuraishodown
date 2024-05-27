import { ARENA_FLOOR } from '../../constants/arena.js';
import { FighterState } from '../../constants/fighter.js';

export class Fighter {

    constructor(name, x, y, direction) {
        this.name = name;
        this.position = { x, y };
        this.velocity = { x: 0, y: 0};
        this.initialVelocity = {};
        this.direction = direction;
        this.gravity = 0;
        
        this.frames = new Map();
        this.animationFrame = 0;
        this.animationTimer = 0;
        this.animations = {};

        this.image = new Image();
        
        this.states = {
            [FighterState.IDLE]: {
                init: this.handleIdleInit.bind(this),
                update: this.handleIdleState.bind(this),
            },
            [FighterState.WALK_FORWARD]: {
                init: this.handleWalkForwardInit.bind(this),
                update: this.handleWalkForwardState.bind(this),
            },
            [FighterState.WALK_BACKWARD]: {
                init: this.handleWalkBackwardInit.bind(this),
                update: this.handleWalkBackwardState.bind(this),
            },
            [FighterState.JUMP_UP]: {
                init: this.handleJumpUpInit.bind(this),
                update: this.handleJumpUpState.bind(this),
            },
        }
        this.changeState(FighterState.IDLE);
    }

    changeState(newState) {
        this.currentState = newState;
        this.animationFrame = 0;

        this.states[this.currentState].init();
    } 

    handleIdleInit() {
        this.velocity.x = 0;
        this.velocity.y = 0;
    }

    handleIdleState() {

    }
    
    handleWalkForwardInit() {
        this.velocity.x = 100 * this.direction;
    }

    handleWalkForwardState() {

    }

    handleWalkBackwardInit() {
        this.velocity.x = -100 * this.direction;
    }

    handleWalkBackwardState() {

    }

    handleJumpUpInit() {
        this.velocity.y = this.initialVelocity.jump;
    }

    handleJumpUpState(frameTime) {
        this.velocity.y += this.gravity * frameTime.secondsPassed;

        if(this.position.y > ARENA_FLOOR) {
            this.position.y = ARENA_FLOOR;
            this.changeState(FighterState.IDLE);
        }
    }

    updateStageContraints(context) {
        const WIDTH = 32;

        this.image.src = `./images/${this.name}_${this.currentState}.png`;
        
        if(this.position.x > context.canvas.width - WIDTH) {
            this.position.x = context.canvas.width - WIDTH;
        }
        if(this.position.x < WIDTH) {
            this.position.x = WIDTH;
        }
    }

    updateAnimation(frameTime) {
        if(frameTime.previous > this.animationTimer + 80) {
            this.animationTimer = frameTime.previous;
    
            this.animationFrame++;
            if(this.animationFrame >= this.animations[this.currentState].length) this.animationFrame = 0;
            /*if(this.name == 'Haohmaru') {

                if(this.animationFrame >= this.animations[this.currentState].length) this.animationFrame = 0;
                
            }*/
            /*else if(this.name == 'Charlotte') {
                if(this.currentState == 'idle') {
                    if(this.animationFrame > 11) this.animationFrame = 0;
                }
                else {
                    if(this.animationFrame > 9) this.animationFrame = 0;
                }
                
            }*/
            /*if(this.name == 'Shizumaru') {
                if(this.currentState == 'walkForwards') {
                    if(this.animationFrame > 10) this.animationFrame = 0;
                }
                else {
                    if(this.animationFrame > 11) this.animationFrame = 0;
                }
                
            }
            else if(this.name == 'Hattori') {
                if(this.animationFrame > 9) this.animationFrame = 0;
            }*/
        }

    }

    update(frameTime, context) {
        
        this.position.x += this.velocity.x * frameTime.secondsPassed;
        this.position.y += this.velocity.y * frameTime.secondsPassed;

        this.states[this.currentState].update(frameTime, context);
        this.updateAnimation(frameTime);
        this.updateStageContraints(context);
    }

    drawDebug(context) {
        context.lineWidth = 1;

        context.beginPath();
        context.strokeStyle = 'white';
        context.moveTo(Math.floor(this.position.x) - 4.5, Math.floor(this.position.y));
        context.lineTo(Math.floor(this.position.x) + 4.5, Math.floor(this.position.y));
        context.moveTo(Math.floor(this.position.x), Math.floor(this.position.y) - 4.5);
        context.lineTo(Math.floor(this.position.x), Math.floor(this.position.y) + 4.5);
        context.stroke();
    }

    
    draw(context) {
        const [
            [x, y, width, height],
            [originX, originY],
        ] = this.frames.get(this.animations[this.currentState][this.animationFrame]);

        context.scale(this.direction, 1);
        context.drawImage(
            this.image, 
            x, y, 
            width, height, 
            Math.floor(this.position.x * this.direction) - originX, Math.floor(this.position.y) - originY, 
            width, height
        );
        context.setTransform(1, 0, 0, 1, 0, 0);
        
        this.drawDebug(context);
    }

}
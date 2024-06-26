import { ARENA_FLOOR } from '../../constants/arena.js';
import { FighterDirection, FighterState } from '../../constants/fighter.js';
import * as control from '../../InputHandler.js';

export class Fighter {

    constructor(name, x, y, direction, playerId) {
        this.name = name;
        this.playerId = playerId;
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

        this.opponent;

        this.pushBox = { x: 0, y: 0, width: 0, height: 0 };
        
        this.states = {
            [FighterState.IDLE]: {
                init: this.handleIdleInit.bind(this),
                update: this.handleIdleState.bind(this),
                validFrom: [
                    undefined,
                    FighterState.IDLE, FighterState.WALK_FORWARD, FighterState.WALK_BACKWARD, 
                    FighterState.JUMP_UP, FighterState.CROUCH_UP, FighterState.IDLE_TURN,
                ],
            },
            [FighterState.WALK_FORWARD]: {
                init: this.handleMoveInit.bind(this),
                update: this.handleWalkForwardState.bind(this),
                validFrom: [
                    FighterState.IDLE, FighterState.WALK_BACKWARD,
                ],
            },
            [FighterState.WALK_BACKWARD]: {
                init: this.handleMoveInit.bind(this),
                update: this.handleWalkBackwardState.bind(this),
                validFrom: [
                    FighterState.IDLE, FighterState.WALK_FORWARD,
                ],
            },
            [FighterState.JUMP_UP]: {
                init: this.handleJumpInit.bind(this),
                update: this.handleJumpState.bind(this),
                validFrom: [
                    FighterState.IDLE, FighterState.WALK_FORWARD, FighterState.WALK_BACKWARD
                ],
            },
            [FighterState.CROUCH]: {
                init: () => { },
                update: this.handleCrouchState.bind(this),
                validFrom: [FighterState.CROUCH_DOWN, FighterState.CROUCH_TURN,],
            },
            [FighterState.CROUCH_DOWN]:  {
                init: this.handleCrouchDownInit.bind(this),
                update: this.handleCrouchDownState.bind(this),
                validFrom: [FighterState.IDLE, FighterState.WALK_FORWARD, FighterState.WALK_BACKWARD],
            },
            [FighterState.CROUCH_UP]: {
                init: () => { },
                update: this.handleCrouchUpState.bind(this),
                validFrom: [FighterState.CROUCH],
            },
            [FighterState.IDLE_TURN]: {
                init: () => { },
                update: this.handleIdleTurnState.bind(this),
                validFrom: [
                    FighterState.IDLE, FighterState.JUMP_LAND,
                    FighterState.WALK_FORWARD, FighterState.WALK_BACKWARD
                ],
            },
            [FighterState.CROUCH_TURN]: {
                init: () => { },
                update: this.handleCrouchTurnState.bind(this),
                validFrom: [FighterState.CROUCH],
            },
    
        }
        this.changeState(FighterState.IDLE);
    }

    getDirection = () => this.position.x >= this.opponent.position.x
        ? FighterDirection.LEFT : FighterDirection.RIGHT;

    getPushBox(frameKey) {
        const [, [x, y, width, height] = [0, 0, 0, 0]] = this.frames.get(frameKey);

        return {x, y, width, height};
    }

    changeState(newState) {
        if(newState == this.currentState
            || !this.states[newState].validFrom.includes(this.currentState)) return;

        this.currentState = newState;
        this.animationFrame = 0;

        this.states[this.currentState].init();
    } 

    handleIdleInit() {
        this.velocity.x = 0;
        this.velocity.y = 0;
    }
    
    handleMoveInit() {
        this.velocity.x = this.initialVelocity.x[this.currentState] ?? 0;
    }

    handleJumpInit() {
        this.velocity.y = this.initialVelocity.jump;
        //this.handleMoveInit(); 
    }

    handleCrouchDownInit() {
        this.handleIdleInit();
    }

    handleIdleState() {
        if(control.isUp(this.playerId)) this.changeState(FighterState.JUMP_UP);
        if(control.isDown(this.playerId)) this.changeState(FighterState.CROUCH_DOWN);
        if(control.isBackward(this.playerId, this.direction)) this.changeState(FighterState.WALK_BACKWARD);
        if(control.isForward(this.playerId, this.direction)) this.changeState(FighterState.WALK_FORWARD);

        const newDirection = this.getDirection();

        if(newDirection != this.direction) {
            this.direction = newDirection;
            this.changeState(FighterState.IDLE_TURN);
        }
    }
    handleWalkForwardState() {
        if(!control.isForward(this.playerId, this.direction)) this.changeState(FighterState.IDLE);
        if(control.isUp(this.playerId)) this.changeState(FighterState.JUMP_UP);
        if(control.isDown(this.playerId)) this.changeState(FighterState.CROUCH_DOWN);

        this.direction = this.getDirection();
    }
    handleWalkBackwardState() {
        if(!control.isBackward(this.playerId, this.direction)) this.changeState(FighterState.IDLE);
        if(control.isUp(this.playerId)) this.changeState(FighterState.JUMP_UP);
        if(control.isDown(this.playerId)) this.changeState(FighterState.CROUCH_DOWN);

        this.direction = this.getDirection();
    }

    handleJumpState(frameTime) {
        this.velocity.y += this.gravity * frameTime.secondsPassed;

        if(this.position.y > ARENA_FLOOR) {
            this.position.y = ARENA_FLOOR;
            this.changeState(FighterState.IDLE);
        }
    }

    handleCrouchState() {
        if(!control.isDown(this.playerId)) this.changeState(FighterState.CROUCH_UP);

        const newDirection = this.getDirection();

        if(newDirection != this.direction) {
            this.direction = newDirection;
            this.changeState(FighterState.CROUCH_TURN);
        }
    }

    handleCrouchDownState() {
        if(this.animations[this.currentState][this.animationFrame][1] == -2) {
            this.changeState(FighterState.CROUCH);
        }
    }

    handleCrouchUpState() {
        if(this.animations[this.currentState][this.animationFrame][1] == -2) {
            this.changeState(FighterState.IDLE);
        }
    }

    updateStageContraints(context) {
        const WIDTH = 32;

        //*EXTRA: CROUCH
        let t = this.currentState;
        if(t == FighterState.CROUCH || t ==  FighterState.CROUCH_DOWN || t == FighterState.CROUCH_UP) {
            this.image.src = `./images/${this.name}_crouch.png`;
        }
        else if(t == FighterState.IDLE_TURN || t == FighterState.CROUCH_TURN) {
            this.image.src =`./images/${this.name}_turnAround.png`;
        }
        else {
            this.image.src = `./images/${this.name}_${this.currentState}.png`;
        }
        
        
        if(this.position.x > context.canvas.width - WIDTH) {
            this.position.x = context.canvas.width - WIDTH;
        }
        if(this.position.x < WIDTH) {
            this.position.x = WIDTH;
        }
    }

    handleJumpLandState() {
        if(this.animationFrame < 1) return;

        let newState = FighterState.IDLE;

        if(!control.isIdle(this.playerId)) {
            this.direction  = this.getDirection();

            this.handleIdleState();
        }
        else {
            const newDirection = this.getDirection();
            
            if(newDirection != this.direction) {
                this.direction = newDirection;
                newState = FighterState.IDLE_TURN;
            }
            else {
                if(this.animationFrame.animations[this.currentState][this.animationFrame][1] != -2) {
                    return;
                }
            }
        } 
        

        this.changeState(newState);
    }

    handleIdleTurnState() {
        this.handleIdleState();

        if(this.animations[this.currentState][this.animationFrame][1] != -2) return;
        this.changeState(FighterState.IDLE);
    }

    handleCrouchTurnState() {
        this.handleCrouchState();

        if(this.animations[this.currentState][this.animationFrame][1] != -2) return;
        this.changeState(FighterState.CROUCH);
    }

    updateAnimation(frameTime) {
        const animation = this.animations[this.currentState];
        const [frameKey, frameDelay] = animation[this.animationFrame];

        if(frameTime.previous > this.animationTimer + frameDelay) {
            this.animationTimer = frameTime.previous;

            if(frameDelay > 0) {
                this.animationFrame++;
                this.pushBox = this.getPushBox(frameKey);
            }
            
            if(this.animationFrame >= animation.length) {
                this.animationFrame = 0;
            }
            
    
        }

    }

    update(frameTime, context) {
        
        this.position.x += (this.velocity.x * this.direction) * frameTime.secondsPassed;
        this.position.y += this.velocity.y * frameTime.secondsPassed;


        this.states[this.currentState].update(frameTime, context);
        this.updateAnimation(frameTime);
        this.updateStageContraints(context);
    }

    drawDebug(context) {
        const [frameKey] = this.animations[this.currentState][this.animationFrame];
        const pushBox = this.getPushBox(frameKey);

        context.lineWidth = 1;

        // Push Box
        context.beginPath();
        context.strokeStyle = '#55FF55';
        context.fillStyle = '#55FF5555';
        context.fillRect(
            Math.floor(this.position.x + pushBox.x) + 0.5,
            Math.floor(this.position.y + pushBox.y) + 0.5,
            pushBox.width,
            pushBox.height,
        );
        context.rect(
            Math.floor(this.position.x + pushBox.x) + 0.5,
            Math.floor(this.position.y + pushBox.y) + 0.5,
            pushBox.width,
            pushBox.height,
        );
        context.stroke();

        // Origin
        context.beginPath();
        context.strokeStyle = 'white';
        context.moveTo(Math.floor(this.position.x) - 4, Math.floor(this.position.y) - 0.5);
        context.lineTo(Math.floor(this.position.x) + 5, Math.floor(this.position.y) - 0.5);
        context.moveTo(Math.floor(this.position.x) + 0.5, Math.floor(this.position.y) - 5);
        context.lineTo(Math.floor(this.position.x) + 0.5, Math.floor(this.position.y) + 4);
        context.stroke();
    }

    
    draw(context) {
        const [frameKey] = this.animations[this.currentState][this.animationFrame];
        const [[
            [x, y, width, height],
            [originX, originY],
        ]] = this.frames.get(frameKey);

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
//~WORKD)
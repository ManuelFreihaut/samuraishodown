import { FighterState, PushBox } from '../../constants/fighter.js';
import { Fighter } from './Fighter.js';

export class Haohmaru extends Fighter {

    constructor(x, y, direction, playerId) {
        super('Haohmaru', x, y, direction, playerId);

        this.image = document.querySelector('img[alt="haohmaru"]');
    
        let i = 95;
        let f = 119;
        let b = 109;

        let c = 90;

        this.frames = new Map([
            // Idle Stance
            ['idle-0', [[[0, 0, i, 150], [i / 2, 150]], PushBox.IDLE]],
            ['idle-1', [[[i, 0, i, 150], [i / 2, 150]], PushBox.IDLE]],
            ['idle-2', [[[i * 2, 0, i, 150], [i / 2, 150]], PushBox.IDLE]],
            ['idle-3', [[[i * 3, 0, i, 150], [i / 2, 150]], PushBox.IDLE]],
            ['idle-4', [[[i * 4, 0, i, 150], [i / 2, 150]], PushBox.IDLE]],
            ['idle-5', [[[i * 5, 0, i, 150], [i / 2, 150]], PushBox.IDLE]],
            ['idle-6', [[[i * 6, 0, i, 150], [i / 2, 150]], PushBox.IDLE]],
            ['idle-7', [[[i * 7, 0, i, 150], [i / 2, 150]], PushBox.IDLE]],
            ['idle-8', [[[i * 8, 0, i, 150], [i / 2, 150]], PushBox.IDLE]],

            // Move Forwards
            ['forwards-0', [[[0, 0, f, 150], [f / 2, 150]], PushBox.IDLE]],
            ['forwards-1', [[[f, 0, f, 150], [f / 2, 150]], PushBox.IDLE]],
            ['forwards-2', [[[f * 2, 0, f, 150], [f / 2, 150]], PushBox.IDLE]],
            ['forwards-3', [[[f * 3, 0, f, 150], [f / 2, 150]], PushBox.IDLE]],
            ['forwards-4', [[[f * 4, 0, f, 150], [f / 2, 150]], PushBox.IDLE]],
            ['forwards-5', [[[f * 5, 0, f, 150], [f / 2, 150]], PushBox.IDLE]],
            ['forwards-6', [[[f * 6, 0, f, 150], [f / 2, 150]], PushBox.IDLE]],
            ['forwards-7', [[[f * 7, 0, f, 150], [f / 2, 150]], PushBox.IDLE]],

            // Move Backwards
            ['backwards-0', [[[0, 0, b, 150], [b / 2, 150]], PushBox.IDLE]],
            ['backwards-1', [[[b, 0, b, 150], [b / 2, 150]], PushBox.IDLE]],
            ['backwards-2', [[[b * 2, 0, b, 150], [b / 2, 150]], PushBox.IDLE]],
            ['backwards-3', [[[b * 3, 0, b, 150], [b / 2, 150]], PushBox.IDLE]],
            ['backwards-4', [[[b * 4, 0, b, 150], [b / 2, 150]], PushBox.IDLE]],
            ['backwards-5', [[[b * 5, 0, b, 150], [b / 2, 150]], PushBox.IDLE]],
            ['backwards-6', [[[b * 6, 0, b, 150], [b / 2, 150]], PushBox.IDLE]],
            ['backwards-7', [[[b * 7, 0, b, 150], [b / 2, 150]], PushBox.IDLE]],

            // Jump Up
            ['jump-up-0', [[[0, 6, 75, 171], [50, 171]], PushBox.JUMP]],
            ['jump-up-1', [[[99, 48, 91, 129], [45, 129]], PushBox.JUMP]],
            ['jump-up-2', [[[198, 58, 91, 119], [42, 119]], PushBox.JUMP]],
            ['jump-up-3', [[[298, 72, 83, 105], [42, 105]], PushBox.JUMP]],
            //['jump-up-4', [[396, 69, 99, 108], [62, 108]]],
            ['jump-up-5', [[[495, 40, 89, 137], [40, 137]], PushBox.JUMP]],
            ['jump-up-6', [[[594, 17, 81, 160], [41, 160]], PushBox.JUMP]],
            ['jump-up-7', [[[693, 4, 71, 173], [41, 173]]], PushBox.JUMP],

            // Crouch
            ['crouch-0', [[[0, 0, c, 150], [56, 150]], PushBox.IDLE]],
            ['crouch-1', [[[c, 0, c, 150], [56, 150]], PushBox.BEND]],
            ['crouch-2', [[[c * 2, 0, c, 150], [56, 150]], PushBox.CROUCH]],

            // Stand Turn
            ['idle-turn-0', [[[0, 34, 82, 114], [40, 114]], PushBox.IDLE]],
            ['idle-turn-1', [[[90, 30, 84, 118], [43, 118]], PushBox.IDLE]],
            ['idle-turn-2', [[[182, 30, 78, 120], [34, 119]], PushBox.IDLE]],
            ['idle-turn-3', [[[272, 34, 80, 116], [38, 116]], PushBox.IDLE]],

            // Crouch Turn
            ['crouch-turn-0', [[[447, 54, 85, 96], [46, 96]], PushBox.CROUCH]],
            ['crouch-turn-1', [[[548, 49, 77, 101], [34, 100]], PushBox.CROUCH]],
            ['crouch-turn-2', [[[639, 47, 77, 103], [36, 102]], PushBox.CROUCH]],
            ['crouch-turn-3', [[[732, 48, 80, 102], [35, 102]], PushBox.CROUCH]],
        ]);

        this.animations = {
            [FighterState.IDLE]: [
                ['idle-0', 80], ['idle-1', 80], ['idle-2', 80], 
                ['idle-3', 80], ['idle-4', 80], ['idle-5', 80], 
                ['idle-6', 80], ['idle-7', 80], ['idle-8', 80]
            ],
            [FighterState.WALK_FORWARD]: [
                ['forwards-0', 80], ['forwards-1', 80], ['forwards-2', 80], 
                ['forwards-3', 80], ['forwards-4', 80], ['forwards-5', 80], 
                ['forwards-6', 80], ['forwards-7', 80]
            ],
            [FighterState.WALK_BACKWARD]: [
                ['backwards-0', 80], ['backwards-1', 80], ['backwards-2', 80], 
                ['backwards-3', 80], ['backwards-4', 80], ['backwards-5', 80], 
                ['backwards-6', 80], ['backwards-7', 80]
            ],
            [FighterState.JUMP_UP]: [
                ['jump-up-0', 100], ['jump-up-1', 80], ['jump-up-2', 80],
                ['jump-up-3', 100], /*['jump-up-4', 200],*/ ['jump-up-5', 100],
                ['jump-up-6', 100], ['jump-up-7', 80]
            ],
            [FighterState.CROUCH]: [
                ['crouch-2', 0]
            ],
            [FighterState.CROUCH_DOWN]: [
                ['crouch-0', 50], ['crouch-1', 50], ['crouch-2', 50], ['crouch-1', -2],
            ],
            [FighterState.CROUCH_UP]: [
                ['crouch-2', 50], ['crouch-1', 50], ['crouch-0', 50], ['crouch-1', -2],
            ],
            [FighterState.IDLE_TURN]: [
                ['idle-turn-3', 65], ['idle-turn-2', 65], ['idle-turn-1', 65], ['idle-turn-0', 65], ['idle-turn-0', -2],
            ],
            [FighterState.CROUCH_TURN]: [
                ['crouch-turn-3', 65], ['crouch-turn-2', 65], ['crouch-turn-1', 65], ['crouch-turn-0', 65], ['crouch-turn-0', -2],
            ],
        };

        this.initialVelocity = {
            x: {
                [FighterState.WALK_FORWARD]: 100,
                [FighterState.WALK_BACKWARD]: -80,
            },
            jump: -420,
        };

        this.gravity = 1000;
    }
}

import { FighterState, PushBox } from '../../constants/fighter.js';
import { Fighter } from './Fighter.js';

export class Charlotte extends Fighter {
    constructor(x, y, direction, playerId) {
        super('Charlotte', x, y, direction, playerId);

        this.image = document.querySelector('img[alt="charlotte"]');

        let i = 107;
        let f = 114;
        let b = 115;
        let ju = 98;
        let c = 94;
    
        this.frames = new Map([
            // Idle Stance
            ['idle-0', [[[0, 0, i, 150], [i / 2, 150]], PushBox.IDLE]],
            ['idle-1', [[[i, 0, i, 150], [i / 2, 150]], PushBox.IDLE]],
            ['idle-2', [[[i * 2, 0, i, 150], [i / 2, 150]], PushBox.IDLE]],
            ['idle-3', [[[i * 3, 0, i, 150], [i / 2, 150]], PushBox.IDLE]],
            ['idle-4', [[[i * 4, 0, i, 150], [i / 2, 150]], PushBox.IDLE]],
            ['idle-5', [[[i * 5, 0, i, 150], [i / 2, 150]], PushBox.IDLE]],
            ['idle-6', [[[0, 150, i, 150], [i / 2, 150]], PushBox.IDLE]],
            ['idle-7', [[[i, 150, i, 150], [i / 2, 150]], PushBox.IDLE]],
            ['idle-8', [[[i * 2, 150, i, 150], [i / 2, 150]], PushBox.IDLE]],
            ['idle-9', [[[i * 3, 150, i, 150], [i / 2, 150]], PushBox.IDLE]],
            ['idle-10', [[[i * 4, 150, i, 150], [i / 2, 150]], PushBox.IDLE]],
            ['idle-11', [[[i * 5, 150, i, 150], [i / 2, 150]], PushBox.IDLE]],
            
            // Move Forwards
            ['forwards-0', [[[0, 0, f, 150], [f / 2, 150]], PushBox.IDLE]],
            ['forwards-1', [[[f, 0, f, 150], [f / 2, 150]], PushBox.IDLE]],
            ['forwards-2', [[[f * 2, 0, f, 150], [f / 2, 150]], PushBox.IDLE]],
            ['forwards-3', [[[f * 3, 0, f, 150], [f / 2, 150]], PushBox.IDLE]],
            ['forwards-4', [[[f * 4, 0, f, 150], [f / 2, 150]], PushBox.IDLE]],
            ['forwards-5', [[[0, 150, f, 150], [f / 2, 150]], PushBox.IDLE]],
            ['forwards-6', [[[f, 150, f, 150], [f / 2, 150]], PushBox.IDLE]],
            ['forwards-7', [[[f * 2, 150, f, 150], [f / 2, 150]], PushBox.IDLE]],
            ['forwards-8', [[[f * 3, 150, f, 150], [f / 2, 150]], PushBox.IDLE]],
            ['forwards-9', [[[f * 4, 150, f, 150], [f / 2, 150]], PushBox.IDLE]],

            // Move Backwards
            ['backwards-0', [[[0, 0, b, 150], [b / 2, 150]], PushBox.IDLE]],
            ['backwards-1', [[[b, 0, b, 150], [b / 2, 150]], PushBox.IDLE]],
            ['backwards-2', [[[b * 2, 0, b, 150], [b / 2, 150]], PushBox.IDLE]],
            ['backwards-3', [[[b * 3, 0, b, 150], [b / 2, 150]], PushBox.IDLE]],
            ['backwards-4', [[[b * 4, 0, b, 150], [b / 2, 150]], PushBox.IDLE]],
            ['backwards-5', [[[0, 150, b, 150], [b / 2, 150]], PushBox.IDLE]],
            ['backwards-6', [[[b, 150, b, 150], [b / 2, 150]], PushBox.IDLE]],
            ['backwards-7', [[[b * 2, 150, b, 150], [b / 2, 150]], PushBox.IDLE]],
            ['backwards-8', [[[b * 3, 150, b, 150], [b / 2, 150]], PushBox.IDLE]],
            ['backwards-9', [[[b * 4, 150, b, 150], [b / 2, 150]], PushBox.IDLE]],

            // Jump Up
            ['jump-up-0', [[[0, 0, ju, 137], [ju / 2, 137]], PushBox.JUMP]],
            ['jump-up-1', [[[ju, 0, ju, 137], [ju / 2, 137]], PushBox.JUMP]],
            ['jump-up-2', [[[ju * 2, 0, ju, 137], [ju / 2, 137]], PushBox.JUMP]],
            ['jump-up-3', [[[ju * 3, 0, ju, 137], [ju / 2, 137]], PushBox.JUMP]],
            ['jump-up-4', [[[ju * 4, 0, ju, 137], [ju / 2, 137]], PushBox.JUMP]],
            ['jump-up-5', [[[ju * 5, 0, ju, 137], [ju / 2, 137]], PushBox.JUMP]],
            ['jump-up-6', [[[ju * 6, 0, ju, 137], [ju / 2, 137]], PushBox.JUMP]],
            ['jump-up-7', [[[ju * 7, 0, ju, 137], [ju / 2, 137]], PushBox.JUMP]],
        
            // Crouch
            ['crouch-0', [[[0, 0, c, 150], [c/2, 150]], PushBox.IDLE]],
            ['crouch-1', [[[c, 0, c, 150], [c/2, 150]], PushBox.BEND]],
            ['crouch-2', [[[c * 2, 0, c, 150], [c/2, 150]], PushBox.CROUCH]],

            // Stand Turn
            ['idle-turn-0', [[[0, 34, 84, 116], [52, 116]], PushBox.IDLE]],
            ['idle-turn-1', [[[126, 14, 71, 135], [40, 136]], PushBox.IDLE]],
            ['idle-turn-2', [[[259, 12, 66, 136], [28, 136]], PushBox.IDLE]],
            ['idle-turn-3', [[[369, 30, 87, 120], [40, 120]], PushBox.IDLE]],

            // Crouch Turn
            ['crouch-turn-0', [[[520, 57, 84, 93], [42, 92]], PushBox.CROUCH]],
            ['crouch-turn-1', [[[647, 46, 64, 104], [37, 102]], PushBox.CROUCH]],
            ['crouch-turn-2', [[[785, 33, 62, 117], [26, 115]], PushBox.CROUCH]],
            ['crouch-turn-3', [[[895, 52, 83, 98], [40, 98]], PushBox.CROUCH]],
        ]);

        this.animations = {
            [FighterState.IDLE]: [
                ['idle-0', 80], ['idle-1', 80], ['idle-2', 80], 
                ['idle-3', 80], ['idle-4', 80], ['idle-5', 80], 
                ['idle-6', 80], ['idle-7', 80], ['idle-8', 80],
                ['idle-9', 80], ['idle-10', 80], ['idle-11', 80]
            ],
            [FighterState.WALK_FORWARD]: [
                ['forwards-0', 80], ['forwards-1', 80], ['forwards-2', 80], 
                ['forwards-3', 80], ['forwards-4', 80], ['forwards-5', 80], 
                ['forwards-6', 80], ['forwards-7', 80], ['forwards-8', 80],
                ['forwards-9', 80]
            ],
            [FighterState.WALK_BACKWARD]: [
                ['backwards-0', 80], ['backwards-1', 80], ['backwards-2', 80], 
                ['backwards-3', 80], ['backwards-4', 80], ['backwards-5', 80], 
                ['backwards-6', 80], ['backwards-7', 80], ['backwards-8', 80], 
                ['backwards-9', 80]
            ],
            [FighterState.JUMP_UP]: [
                ['jump-up-0', 80], ['jump-up-1', 100], ['jump-up-2', 100],
                ['jump-up-3', 150], ['jump-up-4', 150], ['jump-up-5', 100],
                ['jump-up-6', 100], ['jump-up-7', 80]
            ],//, 'jump-up-1', 'jump-up-2', 'jump-up-3', 'jump-up-4', 'jump-up-5', 'jump-up-6', 'jump-up-7'],
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

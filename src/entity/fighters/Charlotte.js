import { FighterState } from '../../constants/fighter.js';
import { Fighter } from './Fighter.js';

export class Charlotte extends Fighter {
    constructor(x, y, velocity) {
        super('Charlotte', x, y, velocity);

        this.image = document.querySelector('img[alt="charlotte"]');

        let i = 107;
        let f = 114;
        let b = 115;
    
        this.frames = new Map([
            // Idle Stance
            ['idle-0', [[0, 0, i, 150], [i / 2, 150]]],
            ['idle-1', [[i, 0, i, 150], [i / 2, 150]]],
            ['idle-2', [[i * 2, 0, i, 150], [i / 2, 150]]],
            ['idle-3', [[i * 3, 0, i, 150], [i / 2, 150]]],
            ['idle-4', [[i * 4, 0, i, 150], [i / 2, 150]]],
            ['idle-5', [[i * 5, 0, i, 150], [i / 2, 150]]],
            ['idle-6', [[0, 150, i, 150], [i / 2, 150]]],
            ['idle-7', [[i, 150, i, 150], [i / 2, 150]]],
            ['idle-8', [[i * 2, 150, i, 150], [i / 2, 150]]],
            ['idle-9', [[i * 3, 150, i, 150], [i / 2, 150]]],
            ['idle-10', [[i * 4, 150, i, 150], [i / 2, 150]]],
            ['idle-11', [[i * 5, 150, i, 150], [i / 2, 150]]],
            
            // Move Forwards
            ['forwards-0', [[0, 0, f, 150], [f / 2, 150]]],
            ['forwards-1', [[f, 0, f, 150], [f / 2, 150]]],
            ['forwards-2', [[f * 2, 0, f, 150], [f / 2, 150]]],
            ['forwards-3', [[f * 3, 0, f, 150], [f / 2, 150]]],
            ['forwards-4', [[f * 4, 0, f, 150], [f / 2, 150]]],
            ['forwards-5', [[0, 150, f, 150], [f / 2, 150]]],
            ['forwards-6', [[f, 150, f, 150], [f / 2, 150]]],
            ['forwards-7', [[f * 2, 150, f, 150], [f / 2, 150]]],
            ['forwards-8', [[f * 3, 150, f, 150], [f / 2, 150]]],
            ['forwards-9', [[f * 4, 150, f, 150], [f / 2, 150]]],

            // Move Backwards
            ['backwards-0', [[0, 0, b, 150], [b / 2, 150]]],
            ['backwards-1', [[b, 0, b, 150], [b / 2, 150]]],
            ['backwards-2', [[b * 2, 0, b, 150], [b / 2, 150]]],
            ['backwards-3', [[b * 3, 0, b, 150], [b / 2, 150]]],
            ['backwards-4', [[b * 4, 0, b, 150], [b / 2, 150]]],
            ['backwards-5', [[0, 150, b, 150], [b / 2, 150]]],
            ['backwards-6', [[b, 150, b, 150], [b / 2, 150]]],
            ['backwards-7', [[b * 2, 150, b, 150], [b / 2, 150]]],
            ['backwards-8', [[b * 3, 150, b, 150], [b / 2, 150]]],
            ['backwards-9', [[b * 4, 150, b, 150], [b / 2, 150]]],
        ]);

        this.animations = {
            [FighterState.IDLE]: ['idle-0', 'idle-1', 'idle-2', 'idle-3', 'idle-4', 'idle-5', 'idle-6', 'idle-7', 'idle-8', 'idle-9', 'idle-10', 'idle-11'],
            [FighterState.WALK_FORWARD]: ['forwards-0', 'forwards-1', 'forwards-2', 'forwards-3', 'forwards-4', 'forwards-5', 'forwards-6', 'forwards-7', 'forwards-8', 'forwards-9'],
            [FighterState.WALK_BACKWARD]: ['backwards-0', 'backwards-1', 'backwards-2', 'backwards-3', 'backwards-4', 'backwards-5', 'backwards-6', 'backwards-7', 'backwards-8', 'backwards-9'],
            [FighterState.JUMP_UP]: ['jump-up-0'],
        };

        this.initialVelocity = {
            jump: -420,
        };

        this.gravity = 1000;
    }
}
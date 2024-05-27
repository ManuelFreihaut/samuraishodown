import { FighterState } from '../../constants/fighter.js';
import { Fighter } from './Fighter.js';

export class Shizumaru extends Fighter {
    constructor(x, y, velocity) {
        super('Shizumaru', x, y, velocity);

        this.image = document.querySelector('img[alt="shizumaru"]');

        let i = 98;
        let f = 71;
        let b = 92;
    
        this.frames = new Map([
            // Idle Stance
            ['idle-0', [[0, 0, i, 150], [i / 2, 150]]],
            ['idle-1', [[i, 0, i, 150], [i / 2, 150]]],
            ['idle-2', [[i * 2, 0, i, 150], [i / 2, 150]]],
            ['idle-3', [[i * 3, 0, i, 150], [i / 2, 150]]],
            ['idle-4', [[i * 4, 0, i, 150], [i / 2, 150]]],
            ['idle-5', [[i * 5, 0, i, 150], [i / 2, 150]]],
            ['idle-6', [[i * 6, 0, i, 150], [i / 2, 150]]],
            ['idle-7', [[i * 7, 0, i, 150], [i / 2, 150]]],
            ['idle-8', [[i * 8, 0, i, 150], [i / 2, 150]]],
            ['idle-9', [[i * 9, 0, i, 150], [i / 2, 150]]],
            ['idle-10', [[i * 10, 0, i, 150], [i / 2, 150]]],
            ['idle-11', [[i * 11, 0, i, 150], [i / 2, 150]]],

            // Move Forwards
            ['forwards-0', [[0, 0, f, 150], [f / 2, 150]]],
            ['forwards-1', [[f, 0, f, 150], [f / 2, 150]]],
            ['forwards-2', [[f * 2, 0, f, 150], [f / 2, 150]]],
            ['forwards-3', [[f * 3, 0, f, 150], [f / 2, 150]]],
            ['forwards-4', [[f * 4, 0, f, 150], [f / 2, 150]]],
            ['forwards-5', [[f * 5, 0, f, 150], [f / 2, 150]]],
            ['forwards-6', [[f * 6, 0, f, 150], [f / 2, 150]]],
            ['forwards-7', [[f * 7, 0, f, 150], [f / 2, 150]]],
            ['forwards-8', [[f * 8, 0, f, 150], [f / 2, 150]]],
            ['forwards-9', [[f * 9, 0, f, 150], [f / 2, 150]]],
            ['forwards-10', [[f * 10, 0, f, 150], [f / 2, 150]]],

            // Move Backwards
            ['backwards-0', [[0, 0, b, 150], [b / 2, 150]]],
            ['backwards-1', [[b, 0, b, 150], [b / 2, 150]]],
            ['backwards-2', [[b * 2, 0, b, 150], [b / 2, 150]]],
            ['backwards-3', [[b * 3, 0, b, 150], [b / 2, 150]]],
            ['backwards-4', [[b * 4, 0, b, 150], [b / 2, 150]]],
            ['backwards-5', [[b * 5, 0, b, 150], [b / 2, 150]]],
            ['backwards-6', [[b * 6, 0, b, 150], [b / 2, 150]]],
            ['backwards-7', [[0, 150, b, 150], [b / 2, 150]]],
            ['backwards-8', [[b, 150, b, 150], [b / 2, 150]]],
            ['backwards-9', [[b * 2, 150, b, 150], [b / 2, 150]]],
            ['backwards-10', [[b * 3, 150, b, 150], [b / 2, 150]]],
            ['backwards-11', [[b * 4, 150, b, 150], [b / 2, 150]]],
        ]);

        this.animations = {
            [FighterState.IDLE]: ['idle-0', 'idle-1', 'idle-2', 'idle-3', 'idle-4', 'idle-5', 'idle-6', 'idle-7', 'idle-8', 'idle-9', 'idle-10', 'idle-11'],
            [FighterState.WALK_FORWARD]: ['forwards-0', 'forwards-1', 'forwards-2', 'forwards-3', 'forwards-4', 'forwards-5', 'forwards-6', 'forwards-7', 'forwards-8', 'forwards-9', 'forwards-10'],
            [FighterState.WALK_BACKWARD]: ['backwards-0', 'backwards-1', 'backwards-2', 'backwards-3', 'backwards-4', 'backwards-5', 'backwards-6', 'backwards-7', 'backwards-8', 'backwards-9', 'backwards-10', 'backwards-11'],
            [FighterState.JUMP_UP]: ['jump-up-0'],
        };

        this.initialVelocity = {
            jump: -420,
        };
    }
}
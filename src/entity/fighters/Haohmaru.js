import { FighterState } from '../../constants/fighter.js';
import { Fighter } from './Fighter.js';

export class Haohmaru extends Fighter {

    constructor(x, y, velocity) {
        super('Haohmaru', x, y, velocity);

        this.image = document.querySelector('img[alt="haohmaru"]');
    
        let i = 95;
        let f = 119;
        let b = 109;

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

            // Move Forwards
            ['forwards-0', [[0, 0, f, 150], [f / 2, 150]]],
            ['forwards-1', [[f, 0, f, 150], [f / 2, 150]]],
            ['forwards-2', [[f * 2, 0, f, 150], [f / 2, 150]]],
            ['forwards-3', [[f * 3, 0, f, 150], [f / 2, 150]]],
            ['forwards-4', [[f * 4, 0, f, 150], [f / 2, 150]]],
            ['forwards-5', [[f * 5, 0, f, 150], [f / 2, 150]]],
            ['forwards-6', [[f * 6, 0, f, 150], [f / 2, 150]]],
            ['forwards-7', [[f * 7, 0, f, 150], [f / 2, 150]]],

            // Move Backwards
            ['backwards-0', [[0, 0, b, 150], [b / 2, 150]]],
            ['backwards-1', [[b, 0, b, 150], [b / 2, 150]]],
            ['backwards-2', [[b * 2, 0, b, 150], [b / 2, 150]]],
            ['backwards-3', [[b * 3, 0, b, 150], [b / 2, 150]]],
            ['backwards-4', [[b * 4, 0, b, 150], [b / 2, 150]]],
            ['backwards-5', [[b * 5, 0, b, 150], [b / 2, 150]]],
            ['backwards-6', [[b * 6, 0, b, 150], [b / 2, 150]]],
            ['backwards-7', [[b * 7, 0, b, 150], [b / 2, 150]]],

            // Jump Up
            ['jump-up-0', [[0, 6, 75, 171], [50, 171]]],
            ['jump-up-1', [[99, 48, 91, 129], [41, 129]]],
            ['jump-up-2', [[198, 58, 91, 119], [46, 119]]],
            ['jump-up-3', [[298, 72, 83, 105], [35, 105]]],
            ['jump-up-4', [[396, 69, 99, 108], [28, 108]]],
            ['jump-up-5', [[495, 40, 89, 137], [46, 137]]],
            ['jump-up-6', [[594, 17, 81, 160], [41, 160]]],
            ['jump-up-7', [[693, 4, 71, 173], [31, 173]]],
        ]);

        this.animations = {
            [FighterState.IDLE]: ['idle-0', 'idle-1', 'idle-2', 'idle-3', 'idle-4', 'idle-5', 'idle-6', 'idle-7', 'idle-8'],
            [FighterState.WALK_FORWARD]: ['forwards-0', 'forwards-1', 'forwards-2', 'forwards-3', 'forwards-4', 'forwards-5', 'forwards-6', 'forwards-7'],
            [FighterState.WALK_BACKWARD]: ['backwards-0', 'backwards-1', 'backwards-2', 'backwards-3', 'backwards-4', 'backwards-5', 'backwards-6', 'backwards-7'],
            [FighterState.JUMP_UP]: ['jump-up-1']//, 'jump-up-1', 'jump-up-2', 'jump-up-3', 'jump-up-4', 'jump-up-5', 'jump-up-6', 'jump-up-7'],
        };

        this.initialVelocity = {
            jump: -420,
        };

        this.gravity = 1000;
    }
}

import { FighterState } from '../../constants/fighter.js';
import { Fighter } from './Fighter.js';

export class Shizumaru extends Fighter {
    
    constructor(x, y, direction, playerId) {
        super('Shizumaru', x, y, direction, playerId);

        this.image = document.querySelector('img[alt="shizumaru"]');

        let i = 98;
        let f = 71;
        let b = 92;

        let c = 113;
    
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

            // Jump Up
            ['jump-up-0', [[3, 70, 92, 80], [49, 100]]],
            ['jump-up-1', [[100, 79, 91, 71], [49, 100]]],
            ['jump-up-2', [[202, 87, 88, 63], [49, 100]]],
            ['jump-up-3', [[302, 84, 98, 66], [49, 100]]],
            ['jump-up-4', [[401, 83, 99, 67], [48, 100]]],
            ['jump-up-5', [[500, 74, 100, 75], [49, 100]]],
            ['jump-up-6', [[603, 63, 95, 87], [49, 100]]],

            // Crouch
            ['crouch-0', [[0, 0, c, 150], [70, 150]]],
            ['crouch-1', [[c, 0, c, 150], [70, 150]]],
            ['crouch-2', [[c * 2, 0, c, 150], [70, 150]]],

            // Stand Turn
            ['idle-turn-0', [[0, 56, 79, 85], [40, 90]]],
            ['idle-turn-1', [[101, 53, 44, 88], [20, 95]]],
            ['idle-turn-2', [[170, 53, 47, 88], [25, 95]]],
            ['idle-turn-3', [[236, 57, 79, 84], [40, 90]]],

            // Crouch Turn
            ['crouch-turn-0', [[352, 78, 102, 71], [70, 70]]],
            ['crouch-turn-1', [[472, 75, 88, 73], [65, 70]]],
            ['crouch-turn-2', [[585, 77, 43, 73], [23, 70]]],
            ['crouch-turn-3', [[658, 81, 81, 69], [30, 65]]],
        ]);

        this.animations = {
            [FighterState.IDLE]: [
                ['idle-0', 80], ['idle-1', 80], ['idle-2', 80], 
                ['idle-3', 80], ['idle-4', 80], ['idle-5', 80], 
                ['idle-6', 80], ['idle-7', 80], ['idle-8', 80],
                ['idle-9', 80], ['idle-10', 80], ['idle-11', 80],
            ],
            [FighterState.WALK_FORWARD]: [
                ['forwards-0', 80], ['forwards-1', 80], ['forwards-2', 80], 
                ['forwards-3', 80], ['forwards-4', 80], ['forwards-5', 80], 
                ['forwards-6', 80], ['forwards-7', 80], ['forwards-8', 80],
                ['forwards-9', 80], ['forwards-10', 80],
            ],
            [FighterState.WALK_BACKWARD]: [
                ['backwards-0', 80], ['backwards-1', 80], ['backwards-2', 80], 
                ['backwards-3', 80], ['backwards-4', 80], ['backwards-5', 80], 
                ['backwards-6', 80], ['backwards-7', 80], ['backwards-8', 80],
                ['backwards-9', 80], ['backwards-10', 80], ['backwards-11', 80]
            ],
            [FighterState.JUMP_UP]: [
                ['jump-up-0', 100], ['jump-up-1', 100], ['jump-up-2', 80],
                ['jump-up-3', 100], ['jump-up-4', 100], ['jump-up-5', 100],
                ['jump-up-6', 80]
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
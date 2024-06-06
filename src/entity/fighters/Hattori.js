import { FighterState } from '../../constants/fighter.js';
import { Fighter } from './Fighter.js';

export class Hattori extends Fighter {

    constructor(x, y, direction, playerId) {
        super('Hattori', x, y, direction, playerId);

        this.image = document.querySelector('img[alt="hattori"]');
    
        let i = 91;
        let f = 104;
        let b = 94;

        let c = 82;

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

            // Move Backwards
            ['backwards-0', [[0, 0, b, 150], [b / 2, 150]]],
            ['backwards-1', [[b, 0, b, 150], [b / 2, 150]]],
            ['backwards-2', [[b * 2, 0, b, 150], [b / 2, 150]]],
            ['backwards-3', [[b * 3, 0, b, 150], [b / 2, 150]]],
            ['backwards-4', [[b * 4, 0, b, 150], [b / 2, 150]]],
            ['backwards-5', [[b * 5, 0, b, 150], [b / 2, 150]]],
            ['backwards-6', [[b * 6, 0, b, 150], [b / 2, 150]]],
            ['backwards-7', [[b * 7, 0, b, 150], [b / 2, 150]]],
            ['backwards-8', [[b * 8, 0, b, 150], [b / 2, 150]]],
            ['backwards-9', [[b * 9, 0, b, 150], [b / 2, 150]]],

            // Jump Up
            ['jump-up-0', [[0, 28, 74, 122], [36, 100]]],
            ['jump-up-1', [[76, 39, 62, 111], [36, 100]]],
            ['jump-up-2', [[150, 64, 62, 86], [36, 100]]],
            ['jump-up-3', [[224, 50, 63, 100], [36, 115]]],
            ['jump-up-4', [[298, 11, 62, 139], [36, 147]]],
            ['jump-up-5', [[370, 13, 74, 137], [37, 120]]],

            // Crouch
            ['crouch-0', [[0, 0, c, 150], [c / 2, 150]]],
            ['crouch-1', [[c, 0, c, 150], [c / 2, 150]]],
            ['crouch-2', [[c * 2, 0, c, 150], [c / 2, 150]]],

            // Stand Turn
            ['idle-turn-0', [[0, 47, 81, 103], [38, 103]]],
            ['idle-turn-1', [[116, 46, 82, 103], [39, 103]]],
            ['idle-turn-2', [[229, 45, 84, 105], [41, 105]]],
            ['idle-turn-3', [[344, 46, 86, 104], [40, 104]]],

            // Crouch Turn
            ['crouch-turn-0', [[465, 64, 69, 86], [34, 85]]],
            ['crouch-turn-1', [[584, 65, 66, 85], [34, 85]]],
            ['crouch-turn-2', [[697, 65, 69, 84], [34, 85]]],
            ['crouch-turn-3', [[812, 64, 69, 86], [34, 85]]],
        ]);

        this.animations = {
            [FighterState.IDLE]: [
                ['idle-0', 80], ['idle-1', 80], ['idle-2', 80], 
                ['idle-3', 80], ['idle-4', 80], ['idle-5', 80], 
                ['idle-6', 80], ['idle-7', 80], ['idle-8', 80],
                ['idle-9', 80],
            ],
            [FighterState.WALK_FORWARD]: [
                ['forwards-0', 80], ['forwards-1', 80], ['forwards-2', 80], 
                ['forwards-3', 80], ['forwards-4', 80], ['forwards-5', 80], 
                ['forwards-6', 80], ['forwards-7', 80], ['forwards-8', 80],
                ['forwards-9', 80],
            ],
            [FighterState.WALK_BACKWARD]: [
                ['backwards-0', 80], ['backwards-1', 80], ['backwards-2', 80], 
                ['backwards-3', 80], ['backwards-4', 80], ['backwards-5', 80], 
                ['backwards-6', 80], ['backwards-7', 80], ['backwards-8', 80],
                ['backwards-9', 80],
            ],
            [FighterState.JUMP_UP]: [
                ['jump-up-0', 120], ['jump-up-1', 120], ['jump-up-2', 140],
                ['jump-up-3', 140], ['jump-up-4', 120], ['jump-up-5', 120],
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
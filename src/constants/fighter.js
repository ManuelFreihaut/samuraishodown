export const FighterDirection = {
    LEFT: -1,
    RIGHT: 1,
};
export const FighterState = {
    IDLE: 'idle',
    WALK_FORWARD: 'walkForwards',
    WALK_BACKWARD: 'walkBackwards',
    JUMP_START: 'jumpStart',
    JUMP_UP: 'jumpUp',
    JUMP_LAND: 'jumpLand',
    CROUCH: 'crouch',
    CROUCH_DOWN: 'crouchDown',
    CROUCH_UP: 'crouchUp',
    IDLE_TURN: 'idleTurn',
    CROUCH_TURN: 'crouchTurn',
};

export const PushBox = {
    IDLE: [, , ,],
    JUMP: [, , ,],
    BEND: [, , ,],
    CROUCH: [, , ,],
}
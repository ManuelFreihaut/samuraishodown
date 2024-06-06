import { Haohmaru } from './entity/fighters/Haohmaru.js';
import { Charlotte } from './entity/fighters/Charlotte.js';
//import { Shizumaru } from './entity/fighters/Shizumaru.js';
//import { Hattori } from './entity/fighters/Hattori.js';
import { Arena } from './entity/Arena.js';
import { FpsCounter } from './entity/FpsCounter.js';
import { ARENA_FLOOR } from './constants/arena.js';
import { FighterDirection } from './constants/fighter.js';
import { registerKeyboardEvents } from './InputHandler.js';

export class SamuraiShodownGame {

    constructor() {
    
        this.context = this.getContext();
        this.fighters = [
            new Haohmaru(400, ARENA_FLOOR, FighterDirection.LEFT, 1),
            new Charlotte(200, ARENA_FLOOR, FighterDirection.RIGHT, 0),
            //new Shizumaru(400, ARENA_FLOOR, FighterDirection.LEFT, 1),
            //new Hattori(200, ARENA_FLOOR, FighterDirection.RIGHT, 0),
        ];

        this.fighters[0].opponent = this.fighters[1];
        this.fighters[1].opponent = this.fighters[0];
    
        this.entities = [
            new Arena(),
            ...this.fighters,
            new FpsCounter(),
        ];
    
        this.frameTime = {
            previous: 0,
            secondsPassed: 0,
        };
    }

    getContext() {
        const canvasEl = document.querySelector('canvas');
        const context = canvasEl.getContext('2d');
        
        context.imageSmoothingEnabled = false;

        return context;
    }

    update() {
        // UPDATE 
        for(const entity of this.entities) {
            entity.update(this.frameTime, this.context);
        }
    }

    draw() {
        // DRAW
        for(const entity of this.entities) {
            entity.draw(this.context);
        }
    }

    frame(time) {
        window.requestAnimationFrame(this.frame.bind(this));

        this.frameTime = {
            secondsPassed: (time - this.frameTime.previous) / 1000,
            previous: time,
        }
        
        this.update();
        this.draw();
    }

    start() {
        registerKeyboardEvents();
        window.requestAnimationFrame(this.frame.bind(this));
    }
}
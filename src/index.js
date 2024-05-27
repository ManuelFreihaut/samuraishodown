import { Haohmaru } from './entity/fighters/Haohmaru.js';
import { Charlotte } from './entity/fighters/Charlotte.js';
//import { Shizumaru } from './entity/fighters/Shizumaru.js';
//import { Hattori } from './entity/fighters/Hattori.js';
import { Arena } from './entity/Arena.js';
import { FpsCounter } from './entity/FpsCounter.js';
import { ARENA_FLOOR } from './constants/arena.js';
import { FighterDirection, FighterState } from './constants/fighter.js';

function populateMoveDropdown() {
    const dropdown = document.getElementById('state-dropdown');

    Object.entries(FighterState).forEach(([, value]) => {
        const option = document.createElement('option');
        option.setAttribute('value', value);
        option.innerText = value;
        dropdown.appendChild(option);
    });
}

function handleFormSubmit(event, fighters) {
    event.preventDefault();

    const selectedCheckboxes = Array
    .from(event.target.querySelectorAll('input:checked'))
    .map(checkbox => checkbox.value);

    const options = event.target.querySelector('select');

    fighters.forEach(fighter => {
        if(selectedCheckboxes.includes(fighter.name)) {
            fighter.changeState(options.value);
        }
    });
}

window.addEventListener('load', function() {
    populateMoveDropdown();

    const canvasEl = document.querySelector('canvas');
    const context = canvasEl.getContext('2d');
    
    context.imageSmoothingEnabled = false;

    const fighters = [
        new Haohmaru(200, ARENA_FLOOR, FighterDirection.LEFT),
        new Charlotte(400, ARENA_FLOOR, FighterDirection.RIGHT),
    ];

    const entities = [
        new Arena(),
        ...fighters,
        new FpsCounter(),
    ];

    let frameTime = {
        previous: 0,
        secondsPassed: 0,
    };
    

    function frame(time) {
        window.requestAnimationFrame(frame);

        frameTime = {
            secondsPassed: (time - frameTime.previous) / 1000,
            previous: time,
        }
        


        //UPDATE 
        for(const entity of entities) {
            entity.update(frameTime, context);
        }
        //DRAW
        for(const entity of entities) {
            entity.draw(context);
        }
    }

    this.document.addEventListener('submit', (event) => handleFormSubmit(event, fighters));

    window.requestAnimationFrame(frame);
});
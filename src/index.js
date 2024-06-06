import { SamuraiShodownGame } from './SamuraiShodownGame.js';

    let imgs = [
        "./images/Haohmaru_walkForwards.png",
        "./images/Haohmaru_walkBackwards.png",
        "./images/Haohmaru_jumpUp.png",
        "./images/Haohmaru_crouch.png",

        "./images/Charlotte_walkForwards.png",
        "./images/Charlotte_walkBackwards.png",
        "./images/Charlotte_jumpUp.png",
        "./images/Charlotte_crouch.png",

        "./images/Shizumaru_walkForwards.png",
        "./images/Shizumaru_walkBackwards.png",
        "./images/Shizumaru_jumpUp.png",
        "./images/Shizumaru_crouch.png",

        "./images/Hattori_walkForwards.png",
        "./images/Hattori_walkBackwards.png",
        "./images/Hattori_jumpUp.png",
        "./images/Hattori_crouch.png",
    ]

window.addEventListener('load', function() {

    new SamuraiShodownGame().start();
});
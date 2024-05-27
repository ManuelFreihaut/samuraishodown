export class Arena {
    constructor() {
        this.image = document.querySelector('img[alt="dojo"]');
    }

    draw(context) {
        context.drawImage(this.image, 0, 0);
    }

    update() { }
}

//funciton updateBackground() {}

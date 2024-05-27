export class FpsCounter {
    console() {
        this.fps = 0;
    }
    
    update(frameTime) { //time
        this.fps = Math.trunc(1 / frameTime.secondsPassed);
    }

    draw(context) {
        context.FpsCounter = "bold 20px Arial";
        context.fillStyle = "white";
        context.textAlign = "center";
        context.fillText(`FPS: ${this.fps}`, context.canvas.width / 2, 30);
    }
}
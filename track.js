class Track {
    constructor(center, radius, color) {
        this.center = center
        this.radius = radius
        this.period = Math.PI
        this.color = color
    }

    getPosition(offset) {
        return {
            x: this.center.x + Math.cos(offset) * this.radius,
            y: this.center.y - Math.abs(Math.sin(offset)) * this.radius,
            round: Math.floor(offset/this.period)
        }
    }

    draw(ctx) {
        ctx.beginPath()
        // Per disegnare un cerchio completo si parte dall'angolo 0 fino a 2Pi (360 gradi)
        ctx.arc(this.center.x, this.center.y, this.radius, 0, Math.PI*2) 
        ctx.strokeStyle = this.color
        ctx.stroke()
    }


    
}

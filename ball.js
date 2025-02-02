class Ball {
    constructor(track, radius, speed, freq, color) {
        this.track = track
        this.radius = radius
        this.speed = speed
        this.offset = 0
        this.round = 0
        this.freq = freq
        this.color = color
        this.center = this.track.getPosition(this.offset)
    }

    move() {
        this.offset += this.speed
        let res = this.track.getPosition(this.offset)
        this.center = {x: res.x, y: res.y}
        if (res.round != this.round) {
            playSound(this.freq)
            this.round = res.round
        }
    }

    draw(ctx) {
        ctx.fillStyle = this.color
        ctx.beginPath()
        ctx.arc(this.center.x, this.center.y, this.radius, 0, Math.PI*2) 
        ctx.strokeStyle = this.color
        ctx.fill()
        ctx.stroke()
    }

}
let canvaSize = 900

cv.height = canvaSize/2
cv.width = canvaSize

let center = {x: canvaSize/2, y: canvaSize/2}
const radius = 50
const trackStep = 30;
const ballStep = -.0001
let ballRadius = 10
let speed = .01

let tracks = []
let balls = []
let animatedBalls = []
const N = 13

let ctrl = false

const notes = [
    1760, 1567.98, 1396.91, 1318.51, 1174.66, 1046.5, 987.77, 880,
    783.99, 698.46, 659.25, 587.33, 523.25, 493.88, 440, 392, 349.23,
    329.63, 293.66, 261.63
]

const colors = [
    "#FDF8E2", "#FFDDD3", "#F3BFB3", "#5EA9BE", "#9ACDE0", "#CBE1EF",
    "#87CEEB", "#9CA39C", "#FFFFBF", "#FBFBF8", "#D3EEDD", "#E7DBCC",
    "#C8A2C8", "#6B9797"
]

let ctx = cv.getContext("2d")

for (let i = 0; i<N; i++) {
    let trackRadius = radius + i*trackStep
    let ballSpeed = speed + i*ballStep
    let ballSoundFreq = notes[i]
    let ballColor = colors[i]
    let trackColor = colors[i+1]
    let track = new Track(center, trackRadius, trackColor)
    tracks.push(track)
    let ball = new Ball(track, ballRadius, ballSpeed, ballSoundFreq, ballColor)
    balls.push(ball)
}
tracks.forEach((track) => track.draw(ctx))

document.body.addEventListener("click", function () {
    if (!ctrl) {
        ctrl = true

        animate()
    
        function animate() {
            ctx.clearRect(0, 0, canvaSize, canvaSize)
            tracks.forEach((track) => track.draw(ctx))
            balls.forEach((ball) => ball.move())
            balls.forEach((ball) => ball.draw(ctx))
            requestAnimationFrame(animate)
        }    
    }
    
    
    
    
})



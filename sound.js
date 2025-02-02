let audioCtx = new (window.AudioContext || window.webkitAudioContext)()

function playSound(freq = 400, duration = 1.3) {
    let osc = audioCtx.createOscillator()
    let envelope = audioCtx.createGain()
    osc.connect(envelope)
    envelope.connect(audioCtx.destination)

    envelope.gain.setValueAtTime(0, audioCtx.currentTime)
    envelope.gain.linearRampToValueAtTime(.05, audioCtx.currentTime + .05)
    envelope.gain.linearRampToValueAtTime(0, audioCtx.currentTime + duration)

    osc.frequency.setValueAtTime(freq, audioCtx.currentTime)
    osc.start()
    osc.stop(audioCtx.currentTime + duration)
}
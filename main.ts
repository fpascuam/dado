input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
})
input.onGesture(Gesture.Shake, function () {
    numero = randint(1, 6)
    basic.showNumber(numero)
    for (let index = 0; index < numero; index++) {
        music.playTone(262, music.beat(BeatFraction.Whole))
        basic.pause(500)
    }
})
let numero = 0
basic.showIcon(IconNames.Yes)

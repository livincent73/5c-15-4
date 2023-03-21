input.onButtonPressed(Button.A, function () {
    if (h > 23) {
        h += 1
    } else {
        h = 0
    }
    basic.showNumber(h)
})
input.onButtonPressed(Button.AB, function () {
    h = 0
    m = 0
    s = 0
})
input.onButtonPressed(Button.B, function () {
    if (m > 59) {
        m += 1
    } else {
        m = 0
    }
    basic.showNumber(m)
})
let s = 0
let m = 0
let h = 0
h = 0
m = 0
s = 0
basic.forever(function () {
    basic.pause(1000)
    s += 1
    if (s > 59) {
        s = 0
        m += 1
        if (m > 59) {
            m = 0
            h += 1
            if (h > 23) {
                m = 0
            }
        }
    }
})

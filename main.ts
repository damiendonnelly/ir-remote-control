irRemote.connectInfrared(DigitalPin.P16)
let strip = neopixel.create(DigitalPin.P5, 18, NeoPixelMode.RGB)
let val = 0
let val2 = 0
basic.forever(function () {
    val = irRemote.returnIrButton()
    if (val != 0) {
        val2 = val
        if (val2 == 70) {
            k_Bit.run(DIR.RunForward, 40)
            strip.showColor(neopixel.colors(NeoPixelColors.Green))
        } else if (val2 == 68) {
            k_Bit.Motor(MotorObs.LeftSide, MotorDir.Forward, 15)
            k_Bit.Motor(MotorObs.RightSide, MotorDir.Forward, 35)
            strip.showColor(neopixel.colors(NeoPixelColors.Blue))
        } else if (val2 == 67) {
            k_Bit.Motor(MotorObs.LeftSide, MotorDir.Forward, 35)
            k_Bit.Motor(MotorObs.RightSide, MotorDir.Forward, 15)
            strip.showColor(neopixel.colors(NeoPixelColors.Yellow))
        } else if (val2 == 21) {
            k_Bit.run(DIR.RunBack, 40)
            strip.showColor(neopixel.colors(NeoPixelColors.Purple))
        } else if (val2 == 64) {
            k_Bit.carStop()
            strip.showColor(neopixel.colors(NeoPixelColors.Red))
        }
    }
})

radio.onReceivedValue(function (name, value) {
    if (name == "x") {
        xValue = value
    } else {
        if (name == "y") {
            yValue = Math.abs(value)
        }
    }
})
let yValue = 0
let xValue = 0
maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOn)
maqueen.writeLED(maqueen.LED.LEDRight, maqueen.LEDswitch.turnOn)
xValue = 0
yValue = 0
basic.showIcon(IconNames.Yes)
maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 0)
basic.forever(function () {
    if (xValue + yValue > 0) {
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, pins.map(
        0,
        0,
        1023,
        0,
        100
        ))
    } else {
        if (xValue + yValue < 0) {
            maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, pins.map(
            0,
            0,
            1023,
            0,
            100
            ))
        } else {
            maqueen.motorStop(maqueen.Motors.M1)
        }
    }
    if (xValue + yValue > 0) {
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, pins.map(
        0,
        0,
        1023,
        0,
        100
        ))
    } else {
        if (xValue + yValue < 0) {
            maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, pins.map(
            0,
            0,
            1023,
            0,
            100
            ))
        } else {
            maqueen.motorStop(maqueen.Motors.M1)
        }
    }
})

Bit_IR.onPressEvent(RemoteButton.Eight, function () {
    basic.showIcon(IconNames.Tortoise)
})
Bit_IR.onPressEvent(RemoteButton.Two, function () {
    basic.pause(100)
    music.playTone(294, music.beat(BeatFraction.Whole))
})
Bit_IR.onPressEvent(RemoteButton.Light, function () {
    mbit_Robot.RGB_Car_Big2(mbit_Robot.enColor.White)
})
Bit_IR.onPressEvent(RemoteButton.Beep, function () {
    music.ringTone(698)
    basic.pause(400)
    music.rest(music.beat(BeatFraction.Sixteenth))
})
Bit_IR.onPressEvent(RemoteButton.Seven, function () {
    basic.pause(100)
    music.playTone(494, music.beat(BeatFraction.Whole))
})
Bit_IR.onPressEvent(RemoteButton.Five, function () {
    basic.pause(100)
    music.playTone(392, music.beat(BeatFraction.Whole))
})
Bit_IR.onPressEvent(RemoteButton.Six, function () {
    basic.pause(100)
    music.playTone(440, music.beat(BeatFraction.Whole))
})
Bit_IR.onPressEvent(RemoteButton.Minus, function () {
    mbit_Robot.RGB_Car_Big2(mbit_Robot.enColor.Green)
})
Bit_IR.onPressEvent(RemoteButton.Up, function () {
    mbit_Robot.CarCtrlSpeed2(mbit_Robot.CarState.Car_Back, 0, 70)
    basic.pause(50)
    mbit_Robot.CarCtrl(mbit_Robot.CarState.Car_Stop)
})
Bit_IR.onPressEvent(RemoteButton.Add, function () {
    mbit_Robot.RGB_Car_Big2(mbit_Robot.enColor.Pinkish)
})
Bit_IR.onPressEvent(RemoteButton.Left, function () {
    mbit_Robot.CarCtrlSpeed2(mbit_Robot.CarState.Car_Back, 35, 0)
    basic.pause(50)
    mbit_Robot.CarCtrl(mbit_Robot.CarState.Car_Stop)
})
Bit_IR.onPressEvent(RemoteButton.Down, function () {
    mbit_Robot.CarCtrlSpeed2(mbit_Robot.CarState.Car_Run, 0, 71)
    basic.pause(50)
    mbit_Robot.CarCtrl(mbit_Robot.CarState.Car_Stop)
})
Bit_IR.onPressEvent(RemoteButton.Four, function () {
    basic.pause(100)
    music.playTone(349, music.beat(BeatFraction.Whole))
})
Bit_IR.onPressEvent(RemoteButton.Power, function () {
    mbit_Robot.RGB_Car_Big2(mbit_Robot.enColor.OFF)
})
Bit_IR.onPressEvent(RemoteButton.Three, function () {
    basic.pause(100)
    music.playTone(330, music.beat(BeatFraction.Whole))
})
Bit_IR.onPressEvent(RemoteButton.Nine, function () {
    basic.showIcon(IconNames.Rabbit)
})
Bit_IR.onPressEvent(RemoteButton.One, function () {
    basic.pause(100)
    music.playTone(262, music.beat(BeatFraction.Whole))
})
Bit_IR.onPressEvent(RemoteButton.Right, function () {
    mbit_Robot.CarCtrlSpeed2(mbit_Robot.CarState.Car_Run, 33, 0)
    basic.pause(50)
    mbit_Robot.CarCtrl(mbit_Robot.CarState.Car_Stop)
})
Bit_IR.onPressEvent(RemoteButton.Zero, function () {
    basic.showIcon(IconNames.Cow)
})
Bit_IR.initIR(Pins.P8)

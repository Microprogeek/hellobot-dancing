led.enable(false)
basic.forever(function () {
    HelloBot.Music_Car(HelloBot.enMusic.chase)
    HelloBot.Servo_Car(HelloBot.enServo.S1, 0)
    basic.pause(1000)
    HelloBot.CarCtrlSpeed(HelloBot.CarState.Car_Run, 150)
    HelloBot.RGB_Car_Program().showColor(neopixel.colors(NeoPixelColors.Red))
    HelloBot.RGB_Line_Program().showColor(neopixel.colors(NeoPixelColors.Red))
    HelloBot.RGB_Car_Program().show()
    HelloBot.RGB_Line_Program().show()
    basic.pause(600)
    HelloBot.CarCtrlSpeed(HelloBot.CarState.Car_Back, 150)
    HelloBot.RGB_Car_Program().showColor(neopixel.colors(NeoPixelColors.Green))
    HelloBot.RGB_Line_Program().showColor(neopixel.colors(NeoPixelColors.Green))
    HelloBot.RGB_Car_Program().show()
    HelloBot.RGB_Line_Program().show()
    basic.pause(600)
    HelloBot.CarCtrlSpeed(HelloBot.CarState.Car_SpinLeft, 150)
    HelloBot.RGB_Car_Program().showColor(neopixel.colors(NeoPixelColors.Blue))
    HelloBot.RGB_Line_Program().showColor(neopixel.colors(NeoPixelColors.Blue))
    HelloBot.RGB_Car_Program().show()
    HelloBot.RGB_Line_Program().show()
    basic.pause(600)
    HelloBot.CarCtrlSpeed(HelloBot.CarState.Car_SpinRight, 150)
    HelloBot.RGB_Car_Program().showColor(neopixel.colors(NeoPixelColors.Orange))
    HelloBot.RGB_Line_Program().showColor(neopixel.colors(NeoPixelColors.Orange))
    HelloBot.RGB_Car_Program().show()
    HelloBot.RGB_Line_Program().show()
    basic.pause(600)
    HelloBot.CarCtrlSpeed(HelloBot.CarState.Car_Stop, 150)
    HelloBot.Servo_Car(HelloBot.enServo.S1, 60)
    basic.pause(1500)
    HelloBot.Servo_Car(HelloBot.enServo.S1, 0)
    basic.pause(1500)
    HelloBot.Servo_Car(HelloBot.enServo.S1, 60)
    basic.pause(1500)
    HelloBot.Servo_Car(HelloBot.enServo.S1, 0)
    basic.pause(1500)
})

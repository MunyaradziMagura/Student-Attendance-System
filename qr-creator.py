from datetime import date
import qrcode
# device fingerprinting algorithm
deviceFingerPrint = "location,time,language,device-parameters, "
student = {
    "FName": "Phoebe",
    "LName": "Dynevor",
    "StudentID": "123456789",
    "class": "IT Project",
    "Date": date.today(),
    "Contact": "0412345678",
    "DeviceHash": str(hash(deviceFingerPrint))
}

image = qrcode.make(student)
type(image)
image.save("qr_code.png")

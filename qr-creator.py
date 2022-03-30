from datetime import date
import qrcode

# device fingerprinting algorithm
deviceFingerPrint = "location,time,language,device-parameters, "
date = date.today()
student = {
    "FName": "Phoebe",
    "LName": "Dynevor",
    "StudentID": "123456789",
    "class": "IT Project",
    "Date": date,
    "Contact": "0412345678",
    "DeviceHash": str(hash(deviceFingerPrint))
}

student2 = {
    "FName": "Zack",
    "LName": "Anderson",
    "StudentID": "110202346",
    "class": "IT Project",
    "Date": date,
    "Contact": "082625093",
    "DeviceHash": str(hash(deviceFingerPrint))
}

image = qrcode.make(student)
image2 = qrcode.make(student2)

type(image)

image.save("qr_code.png")
image2.save("qr_code2.png")

#VERY basic validation
if student.get("DeviceHash") == student2.get("DeviceHash"):
    print("Invalid")
else:
    print("Valid")
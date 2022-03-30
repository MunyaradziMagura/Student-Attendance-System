from datetime import date
import qrcode
import random


def createStudent():
    for i in range(30):
        # device fingerprinting algorithm
        deviceFingerPrint = "location,time,language,device-parameters, "
        student = {
            "FName": f"{i}",
            "LName": f"{i}",
            "StudentID": random.randrange(100000, 999999),
            "class": "IT Project",
            "Date": date.today(),
            "Contact": "04" + str(random.randrange(00000000, 99999999)),
        }
        # add hash to student dictionary
        student.update({"DeviceHash": str(
            hash(str(student.get("StudentID")) + student.get("Contact")))})
        image = qrcode.make(student)
        type(image)
        image.save(f"students/student_{i}.png")


createStudent()

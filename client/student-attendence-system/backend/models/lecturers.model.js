import mongoose from "mongoose"

const Schema = mongoose.Schema;

const lecturerSchema = new Schema(
    {
        fullName: {
            type: String,
            required: true,
            trim: true
        },
        staffID: {
            type: String,
            required: true,
            unique: true,
            trim: true
        },
        userName: { 
            type: String,
            required: true,
            unique: true,
            trim: true,
        },
        email: {
            type: String,
            required: [true, "Please provide an email"],
            unique: true,
            trim: true
        },
        password: {
            type: String,
            required: [true, "Please provide a password"],
            trim: true
        },
        role: {
            type: String,
            trim: true
        },
        courses: {
            type: Array
        }
    },
        {
            timestamps: true,
        }
);

const Lecturer = mongoose.model("Lecturer", lecturerSchema);

export default Lecturer;
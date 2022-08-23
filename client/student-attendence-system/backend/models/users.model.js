import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const userSchema = new Schema ({
    //type: determines the data type (e.g. string)
    //required: if field is required or not
    //unique: if field must be unique (similar to primary key)
    //trim: removes leading and trailing whitespace
    //timestamps: timestamps for document creation and updating
    email: {
        type: String,
        required: [true, "Please provide an email"],
        unique: true,
        trim: true
    },
    password: {
        type: String,
        required: [true, "Please provide a password!"],
        unique: false,
        trim: true
    },
}, {
    timestamps: true,   
});

//Creates a new model and 'users' collection in the MongoDB that conforms to this schema
const User = mongoose.model('Users', userSchema)

//Exports the schema for usage in the 'users.routes.js' file
export default User

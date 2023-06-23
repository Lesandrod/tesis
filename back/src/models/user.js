import {mongoose , model} from "mongoose";

const UserSchema = mongoose.Schema({
    email: {
        type: String,
        unique:true,
        required: [true, "email is required"],
        trim: true,
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Email is not valid'],
    },
    password: {
        type: String,
        required: [true, "password is required"],
        select:false,
    },
    username: {
        type: String,
        required: [true, "username is required"],
        minlenght: [3, "username must be at least 3 characters"],
        maxlenght: [50, "username must be at most 20 characters"],
    },

})

export default model("User", UserSchema);
import mongoose from "mongoose";

export interface IUser extends mongoose.Document {
    id: string,
    firstName?: string,
    lastName?: string,
    email: string,
    createdAt: Date,
    updatedAt: Date

}

const userSchema = new mongoose.Schema({
    id: {type: String, required: true, unique: true},
    firstName: {type: String},
    lastName: {type: String},
    email: {type: String, required: true}
}, {
    timestamps: true
})

const UserModel = mongoose.model("User", userSchema)
export default UserModel

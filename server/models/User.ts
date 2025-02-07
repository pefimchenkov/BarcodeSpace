import { Document, model, Schema } from "mongoose";

export interface UserDocument extends Document {
    email: String,
    username: String,
    password: String
}

const UserSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true
    },

    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true
    },

    password: {
        type: String,
        required: true,
        length: [10, 'Пароль должен быть как минимум 10 символов!']
    }
})

export const User = model<UserDocument>('User', UserSchema);
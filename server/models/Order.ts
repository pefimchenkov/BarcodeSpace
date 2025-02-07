import mongoose, { Document, model, Schema } from "mongoose";

export interface OrderDocument extends Document {
    userid: String,
    price: Number,
    date: Date,
    status: String,
    goods: Array<Object>,
}

const OrderSchema = new Schema({
    userid: {
        type: mongoose.Schema.Types.ObjectId, ref: "Users"
    },

    price: {
        type: Number,
    },

    date: {
        type: Date,
    },

    status: {
        type: String,
    },

    goods: {
        type: Array,
        required: true,
    },

})

export const Order = model<OrderDocument>('Order', OrderSchema);
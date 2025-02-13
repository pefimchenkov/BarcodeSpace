import mongoose, { Document, model, Schema } from "mongoose";

export interface OrderDocument extends Document {
    userid: String,
    price: Number,
    date: Date,
    status: String,
    payment: String,
    delivery: String,
    goods: Array<Object>,
    personal_data: Object,
}

const OrderSchema = new Schema({
    userid: {
        type: mongoose.Schema.Types.ObjectId,
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

    payment: {
        type: String,
    },

    delivery: {
        type: String,
        required: true,
    },

    goods: {
        type: Array,
        required: true,
    },

    personal_data: {
        type: Object,
        required: true,
    },

    

})

export const Order = model<OrderDocument>('Order', OrderSchema);
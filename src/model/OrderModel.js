const mongoose = require('mongoose');
var OrdersSchema = new mongoose.Schema({
    idOrder: {
        type: String,
        required: true,
        index: true,
        unique: true,
    },
    totalAmount: {
        type: String,
        required: true,
    },
    totalPrice: {
        type: String,
        required: true,

    },
    status: {
        type: String,
    },
    userId: {
        type: String,
    },
    created_at: {
        type: String,
    },
    update_at: {
        type: String,
    },
    delete_at:{
        type: Date
    },


});
var OrderstModel = mongoose.model('Orders', OrdersSchema);
module.exports = OrderstModel;

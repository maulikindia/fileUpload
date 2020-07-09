let mongoose = require('mongoose');


let imgSchema = new mongoose.Schema({
    imgName: { type: String },
    publicId: { type: String },
    imgUrl:{type:String}


}, { timestamps: true });

module.exports = mongoose.model('image', imgSchema);
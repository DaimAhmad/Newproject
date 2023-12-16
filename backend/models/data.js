import mongoose from 'mongoose';

const Mystiscent = new mongoose.Schema({
    category: String,
    name: String,
    price:Number,
    brand : String,
    pic: {type: String}
   
});

 const MystiscentsModel = mongoose.model("Mystiscent", Mystiscent);
 export default MystiscentsModel;
import mongoose, { Schema } from "mongoose";

const reviewSchema = new mongoose.Schema({
    comment:{
        type:String
    },
    range:{
        type:Number,
        min:1,
        max:5,
        default:3
    },
    movieId: {
        type:Schema.Types.ObjectId,
        ref:"Movie"
    },
    // createdAt:{
    //     type:Date,
    //     default:Date.now(),
    // },
});

const Review = mongoose.model("Review",reviewSchema);
export default Review;
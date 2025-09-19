import mongoose, { Schema } from "mongoose";

const movieSchema = new mongoose.Schema({
    moviename:{
        type:String,
        required:true
    },
    moviedescription:{
      type:String,
    },
    releasedate:{
        type:Date,
        required:true
    },
    imgurl:{
        type:String,
        required:true
    },
    postdate:{
        type:Date,
        required:true
    },
    rating:{
        type:Number,
        required:true
    },
    cast:[
        {
            castImg:{
                type:String
            },
            castName:{
                type:String
            }
        }
    ]
});

const Movie= mongoose.model("Movie",movieSchema);
export default Movie;
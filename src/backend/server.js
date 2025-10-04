// import express, { urlencoded } from "express";
// import mongoose from "mongoose";
// import Movie from "./models/movie.js";
// import cors from "cors";

// const app = express();

// app.use(cors());
// app.use(express.json());
// app.use(express.urlencoded({extended:true}));

// main().then(()=>{
//     console.log("database connection successfuly");
// }).catch((e)=>{
//     console.log(e);
// });

// async function main() {
//     await mongoose.connect("mongodb://127.0.0.1:27017/movieapp");
// }

// //Show Route
// app.get("/movies", async(req,res)=>{
//     try{
//         const movies = await Movie.find();
//         res.json(movies);
//     }catch(err){
//         console.log(err);
//     }
// });

// //Create /upload  Route
// app.post("/movies",async(req,res)=>{
//     try{
//         const movie = new Movie(req.body);
//         await movie.save();
//         res.json(movie);
//     }catch(err){
//         console.log(err);
//     }
// });

// // Show Route
// app.get("/movies/:id",async(req,res)=>{
//     try{
//         const {id} = req.params;
//         const movie = await Movie.findById(id);
//        if(!movie){
//         res.status(404).json({message:"Movie not found"});
//        }
//        res.json(movie);
//     }catch(err){
//         res.status(500).json({message:"server error" , error:err.message});
//     }
// });


// //Edit / Update Route

// app.get("/movies/:id/edit",async(req,res)=>{
//     try{
//         const {id} = req.params;
//         const movie = await Movie.findById(id);
//         res.json(movie);
//     }catch(err){
//         console.log(err);
//     }
// })

// app.put("/movies/:id",async(req,res)=>{
//     try{
//         const movie = await Movie.findByIdAndUpdate( req.params.id ,req.body ,{new:true});
//         res.json(movie);
//         // console.log(movie);
//     }catch(err){
//         console.log(err);
//     }
    
// })

// //Delete Route

// app.delete("/movies/:id",async(req,res)=>{
//     try{
//         const {id} = req.params;
//         const deletedMovie =await Movie.findByIdAndDelete(id);
//         if(!deletedMovie){
//             return res.send("movie not Found");
//         }
//             // console.log(deletedMovie);
//             return res.json(deletedMovie);  
//     }catch(err){
//         console.log(err);
//     }
// })

// app.get("/movies/:id/cast",async(req,res)=>{
//     try{
//         const {id} = req.params;
//         const castMovie =await Movie.findById(id);
//         if(!castMovie){
//             return res.send("movie cast  not Found");
//         }
//             // console.log(deletedMovie);
//             return res.json(castMovie);  
//     }catch(err){
//         console.log(err);
//     }
// })

// app.get("/",(req,res)=>{
//     res.send("Home Directory");
// })

// app.listen(5000,()=>{
//     console.log("server running on port 5000");
// });


// -------------------------------------------------------------------------------------------------------------------------------------------------------


import express, { urlencoded } from "express";
import mongoose from "mongoose";
import Movie from "./models/movie.js";
import Review from "./models/review.js"
import cors from "cors";
import { set } from "mongoose";

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));

main().then(()=>{
    console.log("database connection successfuly");
}).catch((e)=>{
    console.log(e);
});

async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/movieapp");
}

//Show Route
app.get("/", async(req,res)=>{
    try{
        const movies = await Movie.find();
        res.json(movies);
    }catch(err){
        console.log(err);
    }
});

//Create /upload  Route
app.post("/",async(req,res)=>{
    try{
        const movie = new Movie(req.body);
        await movie.save();
        res.json(movie);
    }catch(err){
        console.log(err);
    }
});

// Show Route
app.get("/:id",async(req,res)=>{
    try{
        const {id} = req.params;
        const movie = await Movie.findById(id);
       if(!movie){
        res.status(404).json({message:"Movie not found"});
       }
       return res.json(movie);
    }catch(err){
        res.status(500).json({message:"server error" , error:err.message});
    }
});


//Edit / Update Route

app.get("/:id/edit",async(req,res)=>{
    try{
        const {id} = req.params;
        const movie = await Movie.findById(id);
        res.json(movie);
    }catch(err){
        console.log(err);
    }
})

app.put("/:id",async(req,res)=>{
    try{
        const movie = await Movie.findByIdAndUpdate( req.params.id ,req.body ,{new:true});
        res.json(movie);
        // console.log(movie);
    }catch(err){
        console.log(err);
    }
    
})

//Delete Route

app.delete("/:id",async(req,res)=>{
    try{
        const {id} = req.params;
        const deletedMovie =await Movie.findByIdAndDelete(id);
        if(!deletedMovie){
            return res.send("movie not Found");
        }
            // console.log(deletedMovie);
            return res.json(deletedMovie);  
    }catch(err){
        console.log(err);
    }
})

app.get("/:id/cast",async(req,res)=>{
    try{
        const {id} = req.params;
        const castMovie =await Movie.findById(id);
        if(!castMovie){
            return res.send("movie cast  not Found");
        }
            // console.log(deletedMovie);
            return res.json(castMovie);  
    }catch(err){
        console.log(err);
    }
});

//Review Route

app.get("/:id/reviews",async(req,res)=>{
    try{
        const {id} = req.params;
        const review = await Review.find({movieId:id})
        res.json(review);
    }catch(err){
        console.log(err);
    };    
});

app.post("/:id/reviews",async(req,res)=>{
    try{
        const {id} = req.params;  
        const review = new Review({...req.body , movieId:id});
        await review.save();
        res.json(review);
    }catch(err){
        console.log(err);
    };
});

app.get("/",(req,res)=>{
    res.send("Home Directory");
})

app.listen(5000,()=>{
    console.log("server running on port 5000");
});
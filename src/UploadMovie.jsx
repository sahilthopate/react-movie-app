import { useState } from "react";
import "./UploadMovie.css"
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function UploadMovie({setMovies}){
    const navigate = useNavigate();
    let [formData, setFormData] =useState(
        {
            moviename:"",
            moviedescription:"",
            releasedate:"",
            imgurl: "",
            postdate:"",
            // rating:0
            rating:""
        }
    );

    let handleSubmit = async(event)=>{
        event.preventDefault();
        try {
            const formattedData={
                ...formData,
                    releasedate: new Date(formData.releasedate),
                    postdate: new Date(formData.postdate),
                    // rating:Number(event.target.value)
            }
            const res = await axios.post("http://localhost:5000/", formattedData);
            addMovie(res.data); 
            setFormData({ ...formData ,moviename: "", releasedate: "", imgurl: "", postdate: "", rating: ""});
            navigate("/");
        } catch (err) {
            console.error("Error uploading movie:", err);
        }
    }

    let handleChange=(event)=>{
        const {name,value} = event.target;
        setFormData((prevData)=>({
            ...prevData,[name]:value
        }));
    };

    let addMovie=(newMovie)=>{
        setMovies((prevMovie)=>[...prevMovie,newMovie]);
    };

    return(
        <>
            <div className="uploadMovie">
                <h1>Movie Upload Page</h1>
                
                <form action="" onSubmit={handleSubmit} className="form-content">
                    <label htmlFor="movieName">Movie Name:</label>
                    <input type="text"
                    placeholder="Movie Name" 
                    name="moviename"
                    id="movieName"
                    value={formData.moviename}
                    // onChange={event=>setFormData(event.target.value)}
                    onChange={handleChange}
                    required={true}
                    />

                    <br /><br />
                    <label htmlFor="moviedescription">Movie Description:</label>
                    <textarea 
                    placeholder="Movie description" 
                    name="moviedescription"
                    id="moviedescription"
                    value={formData.moviedescription}
                    // onChange={event=>setFormData(event.target.value)}
                    onChange={handleChange}
                    required={true}
                    />
                    <br /><br />

                    <label htmlFor="releasedate">Release Date:</label>
                    <input type="date"
                    name="releasedate"
                    value={formData.releasedate }
                    id="releasedate"
                    // onChange={event=>setFormData(event.target.value)}
                    onChange={handleChange}
                    required={true}
                    />
                    <br /><br />
                    
                    <label htmlFor="imgurl">Image URL:</label>
                    <input type="text" 
                    placeholder="Movie IMG URL"
                    name="imgurl"
                    value={formData.imgurl}
                    id="imgurl"
                    // onChange={event=>setFormData(event.target.value)}
                    onChange={handleChange}
                    required={true}
                    />
                    <br /><br />
                    
                    <label htmlFor="postdate">Movie Upload Date:</label>
                    <input type="date"
                    name="postdate"
                    value={formData.postdate}
                    id="postdate"
                    // onChange={event=>setFormData(event.target.value)}
                    onChange={handleChange}
                    required={true}
                    />
                    <br /><br />
                    
                    <label htmlFor="rating">Rating:</label>
                    <input type="number" 
                    placeholder=" Rating out 0f 10" 
                    max={10}
                    name="rating"
                    value={formData.rating}
                    id="rating"
                    onChange={handleChange}
                    // onChange={event=>setFormData(event.target.value)}
                    required={true}
                    />
                    <br /><br />

                    <button className="submitButton" type="submit" onClick={()=>navigate("/")}> Upload</button>  
                    <button type="submit" onClick={()=>navigate("/")}> Back</button>
                </form>
            </div>
        </>
        
    )
}

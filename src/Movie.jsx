import { useNavigate, useParams } from "react-router-dom";
import "./Movie.css";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Movie({formData}){
    let [selectedMovie, setSelectedMovie] = useState(null);
    const navigate = useNavigate();


    let handleSelectMovie = async(id)=>{
        try{
            const res = await axios.get(`http://localhost:5000/${id}`);
            setSelectedMovie(res.data);
            navigate(`/${id}`);

        }catch(err){
           console.log(err);
        }   
    }
    
    return(
        <>
        
            <div className="Movie-Content">

                    {/* {formData.imgurl &&  */}
                    <img src={formData.imgurl} 
                        alt="poster" 
                        width="100%"
                        height="100%"
                        onClick={()=>{handleSelectMovie(formData.id || formData._id)}}
                    />
                    {/* } */}
                    <h3>{formData.moviename}</h3>

                    {/* <h2>{formData.moviedescription}</h2> */}
                
                    <p>Release Date: {new Date(formData.releasedate).toLocaleDateString("en-GB",{
                        day:"2-digit",
                        month:"short",
                        year:"numeric"
                    })}</p>
               
                    <p>Posted On:  {new Date(formData.postdate).toLocaleDateString("en-GB",{
                        day:"2-digit",
                        month:"short",
                        year:"numeric"
                    })}</p>
                
                    <p>Rating:⭐  {formData.rating}</p>
            </div>              
        </>
    )
}



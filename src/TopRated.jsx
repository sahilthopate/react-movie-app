import { useEffect, useState } from "react";
import Movie from "./Movie";
import "./TopRated.css";
import { Link } from "react-router-dom";
// import axios from "axios";

export default function TopRated({movies}){
    const [showTopMovies ,setShowTopMovies] = useState([]);

    useEffect(()=>{
        if(movies && movies.length>0){
            let topData = movies.filter((movie)=>movie.rating>8);
            setShowTopMovies(topData);
        }
    },[movies]);
    
        
    return(
        <>
            <div className="return">
                <Link to="/">Go To Home Page</Link>
            </div>
            <div className="topMovies-container">
                <h2>Top Rated Movies ⭐</h2>
                <div className="topMoviesData">
                    {showTopMovies.length > 0 ? 
                    (
                        showTopMovies.map((movie)=>(
                        <Movie key={movie._id || movie.id}  
                        formData={movie}
                        />
                    ))
                    ):(
                        <p>No Top Rated Movie Found</p>
                    )
                    } 
                </div>
            </div>
        </>
    )
}
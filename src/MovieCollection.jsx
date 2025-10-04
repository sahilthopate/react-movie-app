import { useEffect, useState } from "react";
import Movie from "./Movie";
import "./MovieCollection.css";
import SearchBox from './SearchBox'
import Header from './Header'
import axios from "axios";

export default function MovieCollection({movies,setMovies}){

    const [query , setQuery] = useState('');

    const filteredMovie = movies.filter((movie)=>{
        const title = movie.moviename || "";
        return title.toLowerCase().includes(query.toLowerCase());
    })

    return(
        <>
            <Header/> 
            
            <SearchBox setQuery={setQuery} />            

            <div className="MovieCollection"> 
                {
                    filteredMovie.map((movie)=>(
                    <Movie key={movie._id || movie.id} 
                    formData={movie}
                    />
                ))} 
            </div>    
        </>
        
    );
}






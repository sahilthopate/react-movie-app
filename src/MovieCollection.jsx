import { useEffect, useState } from "react";
import Movie from "./Movie";
import "./MovieCollection.css";
import SearchBox from './SearchBox'
import Header from './Header'
import axios from "axios";

// export default function MovieCollection({movies,onSelect,query}){
    
//     const filteredMovie = movies.filter((movie)=>{
//         // const title = movie.moviename;
//         // title.toLowerCase().includes(query.toLowerCase());
//         const title = movie.moviename || "";
//         return title.toLowerCase().includes(query.toLowerCase());
//     })

//     return(
//         <>
//             <div className="MovieCollection"> 
//                 {
//                     filteredMovie.map((movie)=>(
//                     <Movie key={movie._id || movie.id} 
//                     formData={movie}
//                     onClick={()=>{onSelect(movie._id || movie.id)}}
//                     />
//                 ))} 
//             </div>            
//         </>
        
//     );
// }


export default function MovieCollection({movies,setMovies}){

    const [query , setQuery] = useState('');


     useEffect(()=>{
        axios.get("http://localhost:5000/")
            .then((res)=>{
                setMovies(res.data);
            })
            .catch((err)=>{
                console.log(err);
            })
       },[]);

    const filteredMovie = movies.filter((movie)=>{
        const title = movie.moviename || "";
        return title.toLowerCase().includes(query.toLowerCase());
    })

    return(
        <>
            <SearchBox setQuery={setQuery} />

            <Header/> 

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






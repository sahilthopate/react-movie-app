// import {useState,useEffect} from 'react'
// import './App.css'
// import SearchBox from './SearchBox'
// import MovieCollection from './MovieCollection'
// import UploadMovie from './UploadMovie'
// import MovieData from './MovieData'
// import Header from './Header'
// import axios from "axios";
// import { Route, Routes, useNavigate, useParams } from 'react-router-dom'
// import EditMovie from './EditMovie'



// function App() {
//   const [query , setQuery] = useState('');
//     let [movies,setMovies]=useState([]);
//     let [selectedMovie, setSelectedMovie] = useState(null);
//     // let [selectedMovie, setSelectedMovie] = useState(movies||null);
//     const navigate = useNavigate();

//     useEffect(()=>{
//         axios.get("http://localhost:5000/movies")
//             .then((res)=>{
//                 setMovies(res.data);
//             })
//             .catch((err)=>{
//                 console.log(err);
//             })
//        },[]);

//        let addMovie=(newMovie)=>{
//         setMovies((prevMovie)=>[...prevMovie,newMovie]);
//         console.log(newMovie);
//     };


//     let handleSelectMovie = async(id)=>{
//         try{
//             const res = await axios.get(`http://localhost:5000/movies/${id}`);
//             setSelectedMovie(res.data);
//             navigate(`/movies/${id}`);

//         }catch(err){
//            console.log(err);
//         }   
//     }

//     const editMovieData = (updateMovie) =>{
//       setMovies((prevMovies)=>
//         prevMovies.map((movie)=>{
//         movie._id === updateMovie._id ? updateMovie : movie
//       })
//     )}

//     //delete movie

//     const handleDeleteMovie = async(id) => {
//       if(!id){
//         console.log("cannot delete");
//         return;
//       }
//       try{
//         await axios.delete(`http://localhost:5000/movies/${id}`);
//         setMovies((prevMovies)=>
//           prevMovies.filter((movie)=>movie._id !== id));
//         navigate("/movies");
//       }catch(err){
//         console.log(err);
//       }
//     }
    
//   return (
//     <>
      
//       <Routes>
//         <Route path='/' element={<>
//                                         <SearchBox 
//                                           setQuery={setQuery}
//                                         />

//                                         <Header/> 

//                                         <MovieCollection 
//                                           movies={movies} 
//                                           onSelect={handleSelectMovie} 
//                                           query={query}/>
//                                       </> }/>
//         <Route path='/movies' element={
//                                       <>
//                                         <SearchBox 
//                                           setQuery={setQuery}
//                                         />

//                                         <Header/> 

//                                         <MovieCollection 
//                                           movies={movies} 
//                                           onSelect={handleSelectMovie} 
//                                           query={query}/>
//                                       </> 
//                                       } 
//         />
//         <Route path='/uploadmovie' element={<UploadMovie 
//                                               addMovie={addMovie}
//                                             />}/>
//         <Route path="/movies/:id" element={<MovieData 
//                                               // movie={selectedMovie} 
//                                               handleDeleteMovie={handleDeleteMovie}  
//                                             />}/>

//         <Route path="/movies/:id/edit" element={<EditMovie editMovieData={editMovieData} />}/>
        
//       </Routes>
      
//     </>
//   )
// }

// export default App;






export default App;
import './App.css'
import MovieCollection from './MovieCollection'
import UploadMovie from './UploadMovie'
import { Route, Routes} from 'react-router-dom'
import EditMovie from './EditMovie'
import MovieData from './MovieData';
import { useState } from 'react';



function App() {
    let [movies,setMovies]=useState([]);
  return (
    <>
      <Routes>
        <Route path='/' element={<MovieCollection movies={movies} setMovies={setMovies}/>}/>

        <Route path='/uploadmovie' element={<UploadMovie setMovies={setMovies}/>}/>

        <Route path="/:id" element={<><MovieData setMovies={setMovies}/> </>}/>

        <Route path="/:id/edit" element={<EditMovie setMovies={setMovies}/>}/>
        
      </Routes>
      
    </>
  )
}

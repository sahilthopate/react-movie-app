export default App;
import './App.css'
import MovieCollection from './MovieCollection'
import UploadMovie from './UploadMovie'
import { Route, Routes} from 'react-router-dom'
import EditMovie from './EditMovie'
import MovieData from './MovieData';
import { useEffect, useState } from 'react';
import TopRated from './TopRated';
import axios from 'axios';



function App() {
    let [movies,setMovies]=useState([]);

    useEffect(()=>{
        axios.get("http://localhost:5000/")
            .then((res)=>{
                setMovies(res.data);
            })
            .catch((err)=>{
                console.log(err);
            })
       },[]);

  return (
    <>
      <Routes>
        <Route path='/' element={<MovieCollection movies={movies} setMovies={setMovies}/>}/>

        <Route path='/uploadmovie' element={<UploadMovie setMovies={setMovies}/>}/>

        <Route path="/:id" element={<><MovieData setMovies={setMovies}/> </>}/>

        <Route path="/:id/edit" element={<EditMovie setMovies={setMovies}/>}/>
        
        <Route path='/toprated' element={<TopRated movies={movies}/>}/>
      </Routes>
      
    </>
  )
}

// import "./MovieData.css";
// import EditMovie from "./EditMovie";
// import axios from "axios";
// import { useEffect, useState } from "react";
// import { Route, Routes, useNavigate, useParams } from "react-router-dom";


// export default function MovieData({movie ,handleDeleteMovie}){
//     const {id} = useParams();
//      const [data , setData] = useState(movie || null);
//      const [loading ,setLoading] = useState(false);
//      const navigate = useNavigate();

//     useEffect(()=>{
//         if(id){
//             axios.get(`http://localhost:5000/movies/${id}`)
//                 .then((res)=>{
//                     setData(res.data);
//                     console.log(res.data);
                    
//                     setLoading(false);
//                 })
//                 .catch((err)=>{
//                     console.log(err);
//                     setLoading(true);
//                 })
//         }
//         console.log(id);
        
//     },[id]);

    

//      if(loading) return <h2>Loading.....</h2>
//      if(!data) return <h2>Movie not found</h2>

//     return(
//         <>
//             {/* <div className="moviedata-container col-6">
//                 <div className="movie-img">
//                     {data.imgurl && (            
//                     <img src={data.imgurl} alt={data.moviename} width="200" />
//                 )}
//                 </div>
                

//                 <div className="movie-details">
//                     <h2>{data.moviename}</h2>

//                     <p>Release Date: {new Date(data.postdate).toLocaleDateString("en-GB",{
//                         day:"2-digit",
//                         month:"short",
//                         year:"numeric"
//                     })}</p>

//                     <p>Uploaded On: {new Date(data.postdate).toLocaleDateString("en-GB",{
//                         day:"2-digit",
//                         month:"short",
//                         year:"numeric"
//                     })}</p>

//                     <p>Rating: ⭐ {data.rating}</p>

//                     <div className="btns">
//                         <button onClick={()=>navigate("/movies")}>⬅ Back</button>

//                         <button onClick={()=>navigate(`/movies/${id}/edit`)}>Update Movie Details</button>

//                         <button onClick={()=>handleDeleteMovie(data._id)}>Delete</button>
//                     </div>
                    
//                 </div>
//             </div>
//         <div className="movie-cast  cols-6 rows-2">
                
//         </div> */}

//         {/* ------------------------------------------------------------------------------------------------------------------------------------------------------- */}

//         <div className="container">
//             <div className="row">
//                 <div className="col-6">
//                     <div className="movie-img ">
//                         {data.imgurl && (            
//                             <img src={data.imgurl} alt={data.moviename} width="200" />
//                         )}
//                     </div>
//                 </div>
//                 <div className="col-6">
//                     <div className="movie-details">
//                         <h2>{data.moviename}</h2>

//                         <p>Release Date: {new Date(data.postdate).toLocaleDateString("en-GB",{
//                             day:"2-digit",
//                             month:"short",
//                             year:"numeric"
//                         })}</p>

//                         <p>Uploaded On: {new Date(data.postdate).toLocaleDateString("en-GB",{
//                             day:"2-digit",
//                             month:"short",
//                             year:"numeric"
//                         })}</p>

//                         <p>Rating: ⭐ {data.rating}</p>

//                         <div className="btns">
//                             <button onClick={()=>navigate("/movies")}>⬅ Back</button>

//                             <button onClick={()=>navigate(`/movies/${id}/edit`)}>Update Movie Details</button>

//                             <button onClick={()=>handleDeleteMovie(data._id)}>Delete</button>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//         </>
//     )
// }


import "./MovieData.css";
import axios from "axios";
import { useEffect, useState } from "react";
import {useNavigate, useParams } from "react-router-dom";
import MovieCast from "./MovieCast";
import MovieReview from "./MovieReview";



export default function MovieData({movie,setMovies}){
    const {id} = useParams();
     const [data , setData] = useState(movie || null);
     const [loading ,setLoading] = useState(false);
     const [reviews , setReviews] = useState([]);
     const navigate = useNavigate();

    useEffect(()=>{
        if(id){
            axios.get(`http://localhost:5000/${id}`)
                .then((res)=>{
                    setData(res.data);
                    setLoading(false);
                })
                .catch((err)=>{
                    console.log(err);
                    setLoading(true);
                })
            axios.get(`http://localhost:5000/${id}/reviews`)
                .then((res)=>{
                    setReviews(res.data);
                });
        };
    },[id]);

    

     if(loading) return <h2>Loading.....</h2>
     if(!data) return <h2>Movie not found</h2>


     const handleDeleteMovie = async(id) => {
      if(!id){
        console.log("cannot delete");
        return;
      }
      try{
        await axios.delete(`http://localhost:5000/${id}`);
        setMovies((prevMovies)=>
          prevMovies.filter((movie)=>movie._id !== id));
        navigate("/");
      }catch(err){
        console.log(err);
      }
    }

    let handleAddReview = (newReview) =>{
        setReviews((prevReviews)=>
            [...prevReviews,newReview]);
    }

    return(
        <>
             <div className="container">
            <div className="row">
                <div className="col-6">
                    <div className="movie-img ">
                        {data.imgurl && (            
                            <img src={data.imgurl} alt={data.moviename} width="200" />
                        )}
                    </div>
                </div>
                <div className="col-6">
                    <div className="movie-details">
                        <h2>{data.moviename}</h2>

                        <h3>{data.moviedescription}</h3>

                        <p>Release Date: {new Date(data.postdate).toLocaleDateString("en-GB",{
                            day:"2-digit",
                            month:"short",
                            year:"numeric"
                        })}</p>

                        <p>Uploaded On: {new Date(data.postdate).toLocaleDateString("en-GB",{
                            day:"2-digit",
                            month:"short",
                            year:"numeric"
                        })}</p>

                        <p>Rating: ⭐ {data.rating}</p>

                        <div className="btns">
                            <button type="button" onClick={()=>navigate("/")}>⬅ Back</button>

                            <button type="button" onClick={()=>navigate(`/${id}/edit`)}>Update Movie Details</button>

                            <button type="button" onClick={()=>handleDeleteMovie(data._id)}>Delete</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <hr />
        <MovieCast data={data}/>

        <hr />
        {
            <div className="review-Container">
                <p>All Reviews:</p>
                <div className="row">
                    {reviews.length > 0 ? (
                        reviews.map((review ,idx)=>(
                            <div key={review.id ||idx} className="col-4">
                                <div  className="card">
                                    <div className="reviewTitle">Sahil Thopate</div>
                                    <div className="card-body">
                                        <h2 className="card-text">{review.comment}</h2>
                                        <h3 className="card-text">Rating :{review.range} ⭐</h3>
                                    </div>
                                </div>
                            </div>
                        ))
                    ):(
                        <h2>No Review Yet</h2>
                    )}
                </div>
            </div>
        }
        <hr />
        <MovieReview handleAddReview={handleAddReview} id={id}/>
        </>
    )
}
import { useEffect, useState } from "react";
import "./EditMovie.css";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

export default function({setMovies}){
    const {id} = useParams();
    const navigate = useNavigate();
   let [editFormData , setEditFormData] = useState(
    {
        moviename:"",
        releasedate:"",
        imgurl: "",
        postdate:"",
        rating:""
    }
   )

   useEffect(()=>{
     axios.get(`http://localhost:5000/${id}`)
            .then((res)=>setEditFormData(res.data))
            .catch((err)=>console.log(err))
   },[id])

   let handleUpdateChange = (event) => {
      const {name , value} = event.target;
      setEditFormData((prevMovie)=>({
        ...prevMovie,[name]:value
      }))
    }

    const handleUpdateSubmit = async(event) =>{
          event.preventDefault();
          try{
            const formattedData = {
                ...editFormData,
                    releasedate : new Date(editFormData.releasedate),
                    postdate:new Date(editFormData.postdate)
            }
            const res = await axios.put(`http://localhost:5000/${id}`,formattedData);
            editMovieData(res.data);
            navigate(`/${id}`)
          }catch (err) {
            console.error("Error uploading movie:", err);
        }
    }


    const editMovieData = (updateMovie) =>{
      setMovies((prevMovies)=>
        prevMovies.map((movie)=>{
        movie._id === updateMovie._id ? updateMovie : movie
      })
    )}
    return(
        <>
            <h2 className="p">Edit Movie Details</h2>
            <div className="edit-form-container">
                <form action=""  onSubmit={handleUpdateSubmit}>
                    <label htmlFor="moviename">Change Movie Name:</label>
                    <input type="text" 
                        placeholder="Enter Movie Name"
                        name="moviename"    
                        id="moviename"
                        value={editFormData.moviename}
                        onChange={handleUpdateChange}
                    />

                    <label htmlFor="imgurl">Change Movie Image:</label>
                    <input type="text" 
                        placeholder="Enter Image Link"
                        name="imgurl"
                        id="imgurl"
                        value={editFormData.imgurl}
                        onChange={handleUpdateChange}
                    />

                    <label htmlFor="releasedate">Change Movie Release Date:</label>
                    <input type="date" 
                        id="releasedate"
                        name="releasedate"
                        value={editFormData.releasedate ? editFormData.releasedate.substring(0, 10) : ""}
                        onChange={handleUpdateChange}
                    />

                    <label htmlFor="postdate">Change Movie Upload Date:</label>
                    <input type="date" 
                        id="postdate"
                        name="postdate"
                        value={editFormData.postdate ? editFormData.postdate.substring(0, 10) : ""}
                        onChange={handleUpdateChange}
                    />

                    <label htmlFor="rating">Change Movie Rating:</label>
                    <input type="number"
                        placeholder="Give rating"
                        id="rating"
                        name="rating"
                        max={10}
                        value={editFormData.rating}
                        onChange={handleUpdateChange}
                    />

                    <button type="submit"> Edit Movie Details</button>
                    <button type="button" onClick={()=>navigate(-1)}>⬅ Back</button>
                </form>
            </div>
        </>
    )
}